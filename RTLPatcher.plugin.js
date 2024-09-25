/**
 * @name RTLPatcher
 * @description Makes Discord chat design more like normal!
 * @version 0.6.0
 * @author amoAR
 * @authorId 568288962943385612
 * @website https://github.com/amoAR/RTLPatcher
 * @source https://github.com/amoAR/RTLPatcher/blob/main/RTLPatcher.plugin.js
 * @updateUrl https://raw.githubusercontent.com/amoAR/RTLPatcher/refs/heads/main/RTLPatcher.plugin.js
*/

/*@cc_on
@if (@_jscript)
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/

//initialize BDApi contexts
const BD = new BdApi("RTLPatcher"),
  { getByKeys } = BD.Webpack,
  CurrentUserId = getByKeys("getCurrentUser").getCurrentUser().id,
  MessagesClass = getByKeys("messageListItem").messageListItem, MessageContentClass = getByKeys("markup").markup,
  MessageDelete = getByKeys("deleteMessage"), MessageSend = getByKeys("sendMessage");

module.exports = class RTLPatcher {
  constructor() {
    //namespace
    this.namespace = "RTLPatcher";

    //define css classes
    this.myStyles = `
      .myAvatar {
        right: -50px !important;
        left: unset !important;
      }
      .myAvatarDecoration {
        right: -53px !important;
        left: unset !important;
      }
      .myMessage {
        display: flex !important;
        flex-direction: row-reverse !important;
        right: 50px !important;
        width: unset !important;
      }
      .myWrapper {
        display: flex;
        flex-direction: column;
      }
    `;

    //store previous/current url
    this.currentUrl = "";

    //mutation recoreds vars
    this.firstPatch = true;
  }

  start() {
    //inject css classes
    this.generateGlobalCSS();

    //patch sent message style
    BD.Patcher.before(MessageSend, "sendMessage", () => {
      this.SendMsgHandler();
    })
  }

  onSwitch() {
    //prevent handling of reload or non-chat pages
    const pattern = /(http(s)?:\/\/.)?(www\.)?(ptb|canary)\.discord.com\/channels/sg;
    if (document.URL == this.currentUrl || !pattern.test((document.URL)) || document.URL.split("/").pop() == "@me")
      return;

    //update the current url
    this.currentUrl = document.URL;

    //handle chat design
    //wait for observer
    if (this.firstPatch) {
      this.firstPatch = false;
      this.ChatLoadHandler();
    }
  }

  observer(chnages) {
    if (chnages.type == "childList" && chnages.addedNodes.length == 1) {
      if (chnages.addedNodes[0].className == MessagesClass) {
        //handle messages
        this.ChatLoadHandler();
        //align contents of messages
        this.AlignHandler();
        //remove temp style for sent messeage
        if (Boolean(document.getElementById(this.namespace + "-NextMessage"))) {
          BdApi.DOM.removeStyle(this.namespace + "-NextMessage");
        }
      }
    }
  }

  stop() {
    //remove injected styles
    BdApi.DOM.removeStyle(this.namespace);
    BdApi.DOM.removeStyle(this.namespace + "-NextMessage");

    //unpatch all
    BD.Patcher.unpatchAll();

    //toast warn
    BdApi.UI.showToast("Restart Discord may require for changes to take effect!", { type: "warning", timeout: 5000 });
  }

  SendMsgHandler() {
    //handle the newly sent message style
    //target the last message in the chat
    const lastHeadMessagesDiv = document.querySelector(`.${MessagesClass}:last-of-type`);
    //generate special style by it's id
    this.generateNextMessageCSS(lastHeadMessagesDiv.id);
  }

  ChatLoadHandler() {
    //first, gather all head messages, add to headMessagesDiv
    //second, gather childs of these heads, concat with headMessagesDiv
    //third, restyle elements we stored in headMessagesDiv

    //target all the head messages
    const headMessagesDiv = [...document.querySelectorAll(`.${MessagesClass} > [class^=message][class*=groupStart]`)];
    //if it finds nothing, null it
    if (!Boolean(headMessagesDiv.length))
      return;

    //filter user messages by discord UserID in head messages
    let myMessagesDiv;
    function isMsgMine(msg) {
      //use avatar src to identify sender ID
      const srcContainer = msg.querySelector(":not([class*=repliedMessage]) > [src]");
      if (srcContainer)
        //match srcID part and UserID
        if (srcContainer.src.split("/").find(el => /^[0-9]+$/.test(el)) == CurrentUserId)
          return true;
      return false;
    }
    myMessagesDiv = headMessagesDiv.filter(div => isMsgMine(div));

    //look for child messages of each head messages
    //and push them to lovely myChildMessagesDiv
    let myChildMessagesDiv = [];
    myMessagesDiv.forEach(div => {
      //chnage div element from "messageWrapper" to "messageContainer"
      const currentContainer = div?.parentElement;

      try {
        //in case of unexpected return, go with next head messages
        if (!Boolean(currentContainer) || currentContainer.tagName != "LI")
          return;
      }
      catch { return; }
      finally {
        //we need to find the next message container
        let nextContainer = currentContainer?.nextElementSibling;
        try {
          //continue going to the next element until reach message container
          while (Boolean(nextContainer) && nextContainer.tagName != "LI") {
            nextContainer = nextContainer?.nextElementSibling;
          }

          //undefined nextContainer shows we're at the end
          //of the tree already, so we have no other message
          //and groupStart in messageWrapper classes shows that
          //there's no child here and we're dealing with a header
          if (!Boolean(nextContainer) || /groupStart/.test(nextContainer.querySelector("div:not([class*=repliedMessage])").className))
            return;
        }
        catch { return; }
        finally {
          do {
            try {
              //break the while, because we're looking for childs😋
              if (/groupStart/.test(nextContainer.querySelector("div:not([class*=repliedMessage])")?.className))
                break;

              //it exists and it's obviously message container then let's pushhh...
              if (nextContainer.tagName == "LI")
                myChildMessagesDiv.push(nextContainer.querySelector("div:not([class*=repliedMessage])"))
            }
            catch { }
            finally {
              //well done! let's go next
              nextContainer = nextContainer?.nextElementSibling;
            }
          } while (Boolean(nextContainer))
        }
      }
    })

    //new set of unique values by merging myMessagesDiv(heads)
    //and myChildMessagesDiv(childs) together in myMessagesDiv
    myMessagesDiv = [...new Set([...myMessagesDiv, ...myChildMessagesDiv])];

    myMessagesDiv.forEach(msg => {
      //restyle message container
      msg.parentElement.classList.add("myMessage");

      //restyle message wrapper
      msg.classList.add("myWrapper");

      //as you know, not all messages have an avatar
      try {
        //restyle user avatar
        msg.querySelector(":not([class*=repliedMessage]) > [src]").classList.add("myAvatar");

        //restyle user avatar decoration
        if (msg.querySelector(":not([class*=repliedMessage]) > [src]")?.nextElementSibling?.tagName == "IMG")
          msg.querySelector("[class^=avatarDecoration]").classList.add("myAvatarDecoration");
      } catch { }
    });

    //align messages contents
    this.AlignHandler();
  }

  AlignHandler() {
    //align contents inside of message wrappers
    //gather all message containers in the chat
    const messagesDiv = [...document.querySelectorAll(`.${MessagesClass}`)]

    //if it finds nothing, null it
    if (!messagesDiv)
      return;

    //set align from left to auto
    messagesDiv.forEach(msg => {
      try {
        const contentContainer = msg.querySelector(`.${MessageContentClass}`);

        //enable auto text direction
        contentContainer.dir = "auto";

        try {
          //center content container
          if (contentContainer.textContent.split(" ").length < 10) {
            contentContainer.style.textAlign = "center";
            return;
          }
        } catch { }

        //align same as direction
        contentContainer.style.textAlign = "start";
      } catch { }
    })
  }

  generateNextMessageCSS(currentLastMsgId) {
    //set style for message that will be created soon
    //that message will be closest to the curent last one
    const sentMsg = `#${currentLastMsgId} ~ .${MessagesClass}:last-of-type`;

    //modify global css by specifying selectors for next message
    let myNextMessageStyles = this.myStyles
      .replace(".myMessage", sentMsg)
      .replace(".myWrapper", `${sentMsg} > [class^=message][class*=groupStart]`)
      .replace(".myAvatar", `${sentMsg} > [class^=message][class*=groupStart] :not([class*=repliedMessage]) > [src]:first-of-type`)
      .replace(".myAvatarDecoration", `${sentMsg} > [class^=message][class*=groupStart] :not([class*=repliedMessage]) > [src]:first-of-type + img`)

    //inject CSS
    // BdApi.DOM.addStyle(this.namespace + "-" + currentLastMsgId, myNextMessageStyles);
    BdApi.DOM.addStyle(this.namespace + "-NextMessage");

    //align again
    // this.AlignHandler();
  }

  generateGlobalCSS() {
    //if there is any CSS we have already, remove it
    BdApi.DOM.removeStyle(this.namespace);

    //inject CSS
    BdApi.DOM.addStyle(this.namespace, this.myStyles);
  }
};
/*@end@*/