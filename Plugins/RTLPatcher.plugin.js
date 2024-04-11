/**
 * @name RTLPatcher
 * @author amoAR
 * @description Customize chat design just like Telegram!
 * @version 5.2.9
 * @authorLink https://github.com/amoAR
 * @source https://github.com/amoAR/RTLPatcher
 * @updateUrl https://raw.githubusercontent.com/amoAR/RTLPatcher/main/Plugins/RTLPatcher.plugin.js
*/

//* ⚠ There is no stop function. If any changes are made, it's best to restart Discord ⚠

let mySettings = {}
module.exports = class ChatDesign {
   start() {
      // Load Default Settings
      try{
         mySettings = BdApi.Data.load("RTLPatcher", "settings");
         if(!(mySettings.hasOwnProperty("myAvatarUrl") && (mySettings.myAvatarUrl.startsWith("https://cdn.discordapp.com/avatars/") || mySettings.myAvatarUrl.startsWith("https://media.discordapp.net/avatars/")))) {
            return BdApi.UI.alert("RTLPatcher", "Please enter your avatar URL correctly.");
         }
      } catch {
         mySettings = {
            myAvatarUrl: "",
            steamHappy: false
         };
         BdApi.Data.save("RTLPatcher", "settings", mySettings);
      } finally {
         
         // Global chat css
         const customRightCss = `
            /* Static css based on Material-Discord & MicaCold themes */

            :root {
               --input-color: rgba(255, 255, 255, 0.067) !important;
               --input-color-alt: rgba(255, 255, 255, 0.067) !important;
               --accent-text-color--material-you: var(--message-color);
               --message-color: rgba(255, 255, 255, 0.067) !important;
               --message-color-hover: rgba(255, 255, 255, 0.067) !important;
               --card-color-filled: rgba(33, 29, 44, .3) !important;
               --input-color-alt: rgba(33, 29, 44, .3) !important;
               --profile-body-background-color: rgba(30, 29, 50, .4) !important;
               --profile-gradient-primary-color: hsla(150, 75%, 45%, 2%) !important;
               --profile-gradient-secondary-color: hsla(150, 75%, 45%, 25%) !important;
               --typing-color: transparent !important;
               --primary-700: transparent !important;
               --activity-card-color: var(--card-color-filled) !important;
               --sidebar-panel-color: var(--bg-overlay-1,var(--background-secondary-alt)) !important;
               --attachment-color: var(--card-color-filled) !important;
               --menu-item-hover: rgba(31, 37, 39, .75) !important;
               --main-color: url(https://i.imgur.com/fdj46dP.png) !important;
               --status-picker-color: var(--bg-overlay-1,var(--background-secondary-alt)) !important;
               --popout-color: rgb(31, 37, 39) !important;
               --shadow-3dp: none !important;
               --menu-item-select: hsla(150, 75%, 45%, 30%) !important;
               --card-color-active: hsla(150, 75%, 45%, 30%) !important;
            }

            .theme-dark {
               --saturation-modifier: 0.175;
               --lightness-modifier: 0.2;
            }

            div[class^='nowPlayingColumn_' i] div[class^='itemCard_' i] {
               background: rgba(53, 55, 64, .3) !important;
            }

            div[class^='nowPlayingColumn_' i] div[class^='itemCard_' i] section[class^='section_' i] {
               background: hsla(150, 75%, 45%, 3%) !important;
            }

            section[class*='container_' i]:not([role="dialog"]) {
               background: var(--bg-overlay-1,var(--background-secondary-alt)) !important;
            }

            div[class^="menu__" i][role="menu"], div[class^='submenu_' i][role='menu'], #message-actions {
               background-color: transparent !important;
               background: url(https://i.imgur.com/fdj46dP.png) !important;
               background-position: revert !important;
               opacity: .99 !important;
               box-shadow: none !important;
            }

            main[class^="chatContent_" i] + div[class^="container_" i] {
               width: 22%;
            }

            div[class^="channelInfo" i] span[class^="total_" i]:after {
               content: "|" !important;
               border: none !important;
               left: -6px !important;
            }

            div[class*='bottomControls_' i][class*='controlSection_' i] {
               bottom: 0;
               display: block;
               position: absolute;
            }

            div[class*='bottomControls_' i][class*='controlSection_' i] > div:first-child {
               position: absolute;
               left: 5%;
            }

            [class^="buttonContainer_" i] [class^="sendIcon_" i] path {
               transform: scale(1.0) !important;
            }

            [class^="innerButton_" i] {
               margin-right: 0 !important;
            }

            aside[class^='profilePanel_' i] {
               width: 300px !important;
            }

            div[class^='nowPlayingColumn_' i], div[class^='nowPlayingColumn_' i] > aside, div[aria-label="Members" i], [class^='membersListNotices_' i], aside[class^='membersWrap_' i], span[class^='hiddenVisually_' i], div[class^='members_' i] {
               border-top-left-radius: 35px !important;
            }

            div[class^="badgesContainer_" i] > div:first-child {
               background: var(--brand-experiment);
               color: var(--white-500);
            }

            [class^='badgeList_' i], img[class^='profileBadge_' i] {
               background-color: transparent !important;
            }

            div[aria-label="Members" i] {
               background: linear-gradient(to bottom, rgba(33, 29, 44, .3), rgba(255, 255, 255, 0.067)) !important;
            }

            div[class^="members__" i], div[class^="members__" i] > div {
               border-top-left-radius: 25px !important;
               background: transparent !important;
            }

            .theme-dark div[class^='containerTop_' i] + div[class^='wrapper_' i] {
               background-color: transparent;
            }

            .customAlign + div[class^='container_' i]>* {
               align-self: center !important;
               justify-self: center !important;
            }

            [class^='noiseCancellationPopout_' i], [class^='noiseCancellationPopout_' i] > [class^='container_' i], div[class^='streamPreview_' i] {
               background-color: rgb(31, 37, 39) !important;
            }

            .container_6sXIoE, .container_d667ff, [class^='activityPanel_' i], [class^='listeningAlong_' i] {
               background: var(--bg-overlay-1,var(--background-secondary-alt)) !important;
            }

            .button__66e8c .buttonColor_a6eb73, .button__66e8c.buttonColor_a6eb73 {
               background-color: transparent !important;
            }

            .contents_fb6220 {
               font-size: small !important;
            }

            div[class^='actionButtons_' i] {
               padding-top: 0 !important;
               background-color: rgba(255, 255, 255, 0.05) !important;
               border-radius: 14px !important;
            }

            div[class^='actionButtons_' i] button[class^='button_' i], div[class^='actionButtons_' i] button[class^='buttonColor_' i] {
               background-color: transparent !important;
               color: #2dc770 !important;
            }

            div[class^='actionButtons_' i] button[class^='button_' i]:nth-child(2) svg {
               width: 19px !important;
               margin-left: 2px;
            }

            li[id^="chat-messages-" i][class^="messageListItem_" i] + div[role="separator"] > span:first-child {
               color: var(--text-muted) !important;
               filter: brightness(1.1) !important;
            }

            div[class^="markup_" i] a {
               text-decoration: none;
            }

            .hljs, div[class^='nowPlayingColumn_' i] {
               background: transparent !important;
            }

            div[class^="imageContainer_" i] {
               justify-content: center !important;
            }

            [class^='embedAuthor_' i], [class^='embedDescription_' i], [class^='embedFields_' i], [class^='embedFooter_' i], [class^='embedMedia_' i], [class^='embedProvider_' i], [class^='embedTitle_' i] {
               text-align: center !important;
               justify-content: center !important;
            }

            main + div[class^='container_' i] {
               background: repeating-linear-gradient(-35deg, #222a30, transparent 100px) !important;
               background-color: #202c3536 !important;
               backdrop-filter: saturate(0.5) !important;
               border-radius: 20px !important;
            }

            [class^='timeLogModal_' i], [class^='emptyPlaceholder_' i] {
               width: 101%;
            }

            [class^='flexChild__' i] {
               flex: 1 1 10% !important;
            }

            form > div[class^='channelTextArea' i] > div[class^='scrollableContainer_' i] {
               background-color: rgba(33, 29, 44, .25) !important;
               margin: 0 0 21px 0 !important;
            }

            div[class^='toolbar_' i] [class^='recentsIcon_' i], a[href="https://support.discord.com"], .clickable_d23a1a[aria-label="Start Voice Call"], .clickable_d23a1a[aria-label="Start Video Call"], .clickable_d23a1a[aria-label="Add Friends to DM"], div[class^='videoControls_' i] + div > button[aria-label="Show Chat"] {
               display: none;
            }

            div[class^='appAsidePanelWrapper_' i] div[class^='sidebar_' i] {
               padding: 20px 10px 9px 10px !important;
            }

            div[class^='appAsidePanelWrapper_' i] div[class^='bg__' i] {
               background: url(https://i.imgur.com/l2F9fCH.png) !important;
               background-position: bottom right !important;
               filter: contrast(85%) !important;
            }

            div[class*='userPanelInner_' i] > div[class*='scrollerBase_' i] {
               overflow: unset !important;
            }

            aside > div[class*='userProfileOuterUnthemed_' i] > div[class*='userPanelInnerThemed_' i] {
               background: transparent !important;
               background-image: linear-gradient(
                  135deg,
                  hsla(150, 75%, 45%, 2%),
                  hsla(150, 75%, 45%, 25%)
               ) !important;
               background-size: 100% !important;
            }

            textarea[aria-label="Note"] {
               background: transparent;
               border: 1px solid #f1f1f1;
               height: 40px !important;
               line-height: 1.5;
               text-align: center !important;
            }

            textarea[aria-label="Note"]:hover {
               border: 1px solid #ffffff;
               filter: brightness(150%);
            }

            div[class^='overlayBackground_' i], div[class^='userPanelOverlayBackground_' i] {
               background: rgba(30, 29, 50, .4) !important;
            }
         
            div[class^='base_' i] div[class^='sidebar_' i] {
               border-right: 2px solid rgba(255, 255, 255, .05) !important;
            }

            div[class^='headerText_' i] {
               overflow: hidden !important;
            }
         
            [class^='limitedTimeBadge' i], [class^='textBadge_' i] {
               display: none !important;
            }

            [class^='scrollerInner_' i] {
               overflow: visible !important;
            }

            [class^='typing__' i] {
               width: calc(100% - var(--scrollbar-width) * 2) !important;
               margin-left: var(--scrollbar-width) !important;
            }

            div[class^='mediaAttachmentsContainer_' i] {
               display: grid !important;
               justify-items: center !important;
               grid-auto-flow: row !important;
            }

            div[class^='mediaAttachmentsContainer_' i] li[role="listitem"] {
               background-color: rgba(0,0,0, .4) !important;
            }

            textarea {
               unicode-bidi: plaintext !important;
               text-align: start !important;
            }

            articlediv[class^="markup_" i] + articlediv[class^="markup_" i] {
               margin-top: 1rem !important;
            }

            article[class^='embedWrapper_' i] {
               margin-top: 1rem !important;
            }

            [class^='welcomeCTASticker_' i] {
               margin-top: 4px !important;
               display: flex !important;
               justify-content: center !important;
            }

            span[class^='clickableSticker_' i] {
               width: 100% !important;
               display: flex !important;
               justify-content: center !important;
            }

            img[class^='stickerAsset_' i] {
               border-radius: 1rem;
               object-fit: cover;
            }

            div[class^='scrollableContainer_' i]:not(form div[class^='scrollableContainer_' i]) {
               max-width: 400px !important;
            }

            [class^='embedWrapper_' i] {
               max-width: 440px !important;
            }

            [class^='mediaAttachmentsContainer_' i] {
               margin-bottom: 20px !important;
            }

            [class^='mediaAttachmentsContainer_' i] > div > div {
               margin-top: 5px !important;
               display: flex !important;
               align-items: center !important;
               justify-content: center !important;
            }
            
            [class^='mediaAttachmentsContainer_' i] > div > div > div:not(div[class^='hoverButtonGroup_' i]) {
               width: 90% !important;
               display: flex !important;
               align-items: center !important;
               justify-content: center !important;
            }

            [class^='twoByTwoGrid_' i] {
               margin-top: 1rem !important;
            }

            [class^='twoByTwoGrid_' i] div {
               display: flex !important;
               height: fit-content !important;
            }

            [class^='oneByTwoGridItem_' i] {
               display: flex !important;
               justify-content: center !important;
               align-items: center !important;
            }

            code {
               direction: ltr !important;
               text-align: initial !important;
               overflow-x: clip !important !important;
            }

            [class^='openFullPreviewSection' i] {
               margin-right: 10px !important;
            }

            form[class^='form_' i] {
               margin-top: 1rem !important;
            }

            form[class^='form_' i] [class^='attachedBars_' i]:after, [class^='guildSeparator_' i] {
               background: rgba(255, 255, 255, .2) !important;
            }

            form[class^='form_' i] [class^='attachedBars_' i] {
               border-radius: 10px 10px 0 0 !imporant !important;
               background-color: var(--main-textarea-color) !important;
            }

            form[class^='form_' i] [class^='attachedBars_' i]::placeholder {
               font-family: inherit !important;
            }

            [class^='attachedBars_' i], [class^='replyBar_' i], [class^='threadSuggestionBar_' i] {
               background: transparent !important;
            }

            [class^='attachmentName_' i] {
               margin-left: 10px !important;
            }

            [class^='formattedSize_' i] {
               direction: ltr !important;
            }

            svg[class^='codeIcon_' i] {
               display: none !important;
            }

            [class^='downloadButton' i] {
               padding-left: 10px !important;
            }

            div[class^='wordmarkWindows' i] {
               display: inline-flex !important;
               flex-direction: row-reverse !important;
               padding: 0 0 0 12px !important;
            }

            div[class^='wordmarkWindows' i]:before {
               content: '\\0041\\0052' !important;
            }

            div[class^='wordmarkWindows' i]:after {
               content: '\\0061\\006D\\006F' !important;
            }

            #bd-modal-container {
               display: none !important;
            }

            li[id^="chat-messages-" i][class^="messageListItem_" i] + div[role="separator"] {
               margin-top: 3rem !important;
               margin-bottom: 3rem !important;
            }

            .group-spacing-16.[class^='messagesWrapper_' i] [class^='groupStart_' i] {
               --group-spacing: 0 !important;
            }

            div[class^='divider_' i]:not(div[class^='overlayBackground_' i] div[class^='divider_' i]):not(div[class^="titleWrapper_" i] + div[class^='divider_' i]) {
               position: relative !important;
               display: flex !important;
               margin-top: 3rem !important;
            }

            section[role="navigation"] div[class^="children_" i]:after, section[role="navigation"] div[class^="children_" i] + div[class^="toolbar_" i] {
               display: none;
            }

            [class^='hiddenSpoiler_' i] {
               filter: blur(8px) !important;
            }

            [class^='spoilerWarning_' i] {
               backdrop-filter: blur(4px) saturate(180%) !important;
            }

            div[aria-label="Play"] > [class^='iconWrapper_' i] {
               backdrop-filter: blur(4px) saturate(120%) contrast(90%) brightness(40%) !important;
               background-color: var(--message-color) !important;
            }

            [class^='cozy_' i] [class^='header__' i] {
               display: inline-grid !important;
            }

            [class^='cozy_' i] [class^='timestamp_' i] {
               margin-left: 0 !important;
            }

            div[class^='divider_' i][class^='isUnread_' i] {
               margin: 0 0.875rem 0 70px !important;
            }

            .group-spacing-16 div[class^='divider_' i][class^='beforeGroup' i] {
               margin-top: 35px !important;
            }

            [class^='removeAttachmentHoverButton_' i], [class^='embedSuppressButton_' i], [class^='closeButton_' i] {
               position: absolute !important;
            }

            [class^='removeAttachmentHoverButton_' i] svg, [class^='embedSuppressButton_' i] svg, [class^='closeButton_' i] svg, [class^=cancelButton] {
               width: 13px !important;
               height: 13px !important;
               margin-right: 1px !important;
               padding: 2.5px !important;
               backdrop-filter: blur(16px) saturate(180%) !important;
               background: rgba(53, 55, 64, .3) !important;
               border: 1px solid var(--separator-color) !important;
               border-radius: 50% !important;
            }

            [class^='embedSuppressButton_' i] {
               right: -45px !important;
            }

            [class^='closeButton_' i] {
               right: 0 !important;
               top: 10px !important;
            }

            [class*=group-spacing].[class^='messagesWrapper_' i] [class^='groupStart_' i]:not([class^='backgroundFlash_' i][class^='groupStart_' i]) {
               margin-top: 3rem !important;
            }

            [class^='wrapperPaused' i] {
               background: transparent !important;
            }

            [class^='video__' i] {
               margin-top: 5px !important;
            }

            [class^='videoControls_' i] {
               display: flex !important;
               flex-direction: row-reverse !important;
            }

            [class^='videoControls_' i] [class^='volumeButtonSlider_' i] {
               right: -1.65rem !important;
            }

            [class^='audioControls_' i] {
               display: flex !important;
               flex-direction: row-reverse !important;
            }

            [class^='durationTimeWrapper_' i] {
               display: flex !important;
               flex-direction: inherit !important;
            }

            [class^='audioControls_' i] [class^='volumeButtonSlider_' i] {
               right: -1.3rem !important;
               top: -25px !important;
            }

            [class^='videoButton_' i] {
               margin-right: 0 !important;
            }

            div[class^='markup_']:not(div[role="textbox"]) {
               max-width: 400px !important;
               padding-top: 10px !important;
               padding-right: 25px !important;
               padding-bottom: 10px !important;
               padding-left: 25px !important;
            }

            div[class^='markup_'] a {
               text-align: start !important;
            }

            div[class^='markup_'] a[href*='discordapp.com/attachments'] span,
            div[class^='markup_'] a[href*='discordapp.net/attachments'] span {
               display: none !important;
            }

            div[class^='markup_'] a[href^='https://open.spotify.com/track/'],
            div[class^='markup_'] a[href^='https://open.spotify.com/album/'],
            div[class^='markup_'] a[href^='https://open.spotify.com/playlist/'] {
               display: none !important;
            }

            div[class^='markup_'] a[href$='.gif'] {
               display: none !important;
            }

            div[aria-labelledby^='message-username-Uploader'] {
               display: contents !important;
            }

            div[aria-labelledby^='message-username-Uploader'] > [class^='contents_' i] h3 {
               display: none !important;
            }

            div[role="textbox"] {
               text-align: start !important;
            }

            section[aria-label="Expression Picker"] div[class^='contentWrapper_' i], section[aria-label="Expression Picker"] div[class^='contentWrapper_' i]  div[class^='header_' i], div[id="emoji-picker-tab-panel"] > div[class^='header_' i], div[id^="popout_" i] div[class^="picker_" i][role="dialog"] {
               background-color: rgba(31, 37, 39, .9);
            }

            section[aria-label="Expression Picker"] div[class^='contentWrapper_' i] div[role="tablist"], div[class^='slotsContainer_' i] {
               background-color: rgb(31, 37, 39);
            }

            section[aria-label="Expression Picker"] div[class^='contentWrapper_' i] div[role="tablist"]:after {
               background: hsla(150, 75%, 45%, 20%);
            }

            div[id="emoji-picker-tab-panel"] div[class^='header_' i] > div:first-child, section[aria-label="Expression Picker"] div[class^='contentWrapper_' i] div[class^='header_' i] > div:first-child > div:first-child, div[id^="popout_" i] div[class^="picker_" i][role="dialog"] div[class^='header_' i] > div:first-child > div:first-child {
               background-color: hsla(150, 75%, 45%, 20%);
            }

            div[id="emoji-picker-tab-panel"] > div[class^='emojiPicker_' i], div[id="emoji-picker-tab-panel"] > div[class^='emojiPicker_' i] [class^='inspector_' i], div[id="emoji-picker-tab-panel"] > div[class^='bodyWrapper_' i] {
               background-color: rgba(31, 37, 39, .9);
            }

            div[class^='categorySection_' i] [class^='wrapper_' i], section[aria-label="Expression Picker"] div[class^='contentWrapper_' i] div[class^='listItems_' i] [class^='wrapper_' i] {
               background-color: transparent;
            }

            div[id="emoji-picker-tab-panel"] > div[class^='wrapper_' i],  div[id="sticker-picker-tab-panel"] > div[class^='wrapper_' i], div[id^="popout_" i] div[class^="picker_" i][role="dialog"] > div[class^='wrapper_' i] {
               background-color: hsla(150, 75%, 45%, 20%);
            }

            div[id="emoji-picker-tab-panel"] > div[class^='wrapper_' i] > div:first-child + div {
               background-color: rgb(31, 37, 39);
            }

            div[id="emoji-picker-tab-panel"] > div[class^='inspector_' i], section[aria-label="Expression Picker"] div[class^='contentWrapper_' i] div[class^='inspector_' i] {
               background-color: rgba(31, 37, 39, .9);
               
            }

            div[class^='categorySection_' i] button[class*='emojiItemSelected_' i], div[class*='stickerInspected_' i] div[class*='inspectedIndicator_' i] {
               background-color: hsla(150, 75%, 45%, 30%);
            }

            button[data-name="full_moon_with_face"] > div[class^='emojiSpriteImage_' i] {
               background-image: none !important;
               background-position: center !important;
               background-size: cover !important;
            }

            [class^='emojiContainer_' i] + [class^='emojiContainer_' i] {
               margin-right: 0.5px !important;
            }

            li[class^='messageListItem_'] {
               width: fit-content;
            }

            img.emoji {
               image-resolution: from-image 300dpi !important;
               image-rendering: smooth !important;
            }

            div[class^='soundButton_' i] {
               filter: brightness(0.8);
            }

            [class^='iconContainer_' i]:not([class^='icon_' i][class^='iconLayout_' i][class^='small_' i] > div) {
               right: 0;
            }

            [class^='nonMediaAttachmentsContainer_' i] {
               max-width: 100% !important;
               justify-self: center !important;
               margin-top: 0.75rem !important;
               margin-bottom: -0.5rem !important;
            }

            [class^='cozy_' i] [class^='repliedMessage_' i] {
               max-width: 400px !important;
            }

            div[class^='repliedMessage_'] {
               margin-top: 1.5rem !important;
            }

            div[class^='repliedTextPreview_'] > div {
               direction: rtl !important;
            }

            li[id^="chat-messages-" i][class^="messageListItem_" i] > div:first-child {
               max-width: 440px !important;
               margin-top: 1.5rem !important;
               border-radius: var(--message-radius) !important;
               background-color: rgba(255, 255, 255, 0.067) !important;
            }

            li[id^="chat-messages-" i][class^="messageListItem_" i] > div:first-child:before, li[id^="chat-messages-" i][class^="messageListItem_" i] > div:first-child:after {
               display: none !important;
               content: unset !important;
            }

            [class^='attachment_' i] {
               background-color: #1c1e24 !important;
               opacity: .9 !important;
            }

            div[class^='messageAttachment_']:not([class^='oneByTwoGridItem_' i] > div *):not([class^='oneByTwoSoloItem_' i] > div > *):not([class^='oneByTwoSoloItem_' i] + [class^='oneByTwoDuoItem_' i] *) {
               direction: rtl !important;
               text-align: right !important;
               padding-top: 0 !important;
               padding-right: 20px !important;
               padding-left: 20px !important;
               position: relative !important;
            }

            div[class^='imageContent_' i]:not([class^='twoByOneGridItem_' i] > div > div[class^='imageContent_' i]:nth-last-child) {
               padding-top: 10px !important;
            }

            [class^='embedImage_' i] img, [class^='embedImage_' i] video, [class^='embedThumbnail_' i] img, [class^='embedThumbnail_' i] video, [class^='embedVideo_' i] img, [class^='embedVideo_' i] video {
               padding: 0 !important;
               border-radius: 15px !important;
            }

            [class^='imageAccessory_' i] {
               top: 3px !important;
            }

            div[class^="imageContainer_" i] + [class^='altText_' i], [class^='gifTag_' i] {
               display: none !important;
            }

            [class^='clickableWrapper_' i], [class^='loadingOverlay_' i] {
               display: flex !important;
               justify-content: center !important;
               align-items: center !important;
            }

            [class^='wrapperAudio_' i] {
               margin-top: 1remv
               max-width: 400px !important;
               background: var(--background-primary) !important;
               background-position: top !important;
            }

            [class^='embedImage_' i], [class^='embedThumbnail_' i] {
               padding: 0 20px 0 20px !important;
            }

            [class^='embedMedia_' i] {
               margin-top: 20px !important;
            }

            [class^='embedVideo_' i] {
               justify-content: center !important;
               align-content: center !important;
               align-items: center !important;
               margin: 0 !important;
               padding: 0 !important;
            }

            [class^='oneByOneGridSingle_' i], [class^='oneByOneGridSingle_' i] [class^='lazyImg_' i] {
               max-height: unset !important;
            }

            [class^='mediaAttachmentsContainer_' i] > div {
               justify-items: center !important;
            }

            [class^='mediaAttachmentsContainer_' i], [class^='nonMediaAttachmentsContainer_' i] {
               align-items: center !important;
            }

            [class^='oneByOneGrid_' i] {
               margin-top: 1rem !important;
            }

            [class^='oneByOneGrid_' i] + [class^='threeByThreeGrid_' i], [class^='oneByTwoGrid_' i] + [class^='threeByThreeGrid_' i] {
               margin-top: 20px !important;
               margin-bottom: 2rem !important;
            }

            [class^='hideOverflow_' i] {
               overflow: visible !important;
            }

            [class^='messageAttachment_' i] {
               min-width: 90px !important;
               max-width: 400px !important;
               width: fit-contentv
               height: unset !important;
               top: -5px !important;
            }

            [class^='metadataContent_' i] {
               text-align: center !important;
               direction: ltr !important;
            }

            [class^='metadata_' i] {
               direction: ltr !important;
               text-align: left !important;
               margin-left: 10px !important;
            }

            [class^='filenameLinkWrapper_' i] {
               direction: ltr !important;
               text-align: left !important;
               margin: 0 10px 0 10px !important;
            }

            [class^='anchor_' i] {
               text-decoration: none !important;
            }

            [class^='audioMetadata_' i] {
               align-items: center !important;
               justify-content: center !important;
               flex-direction: row-reverse !important;
               padding: 12px 44px 4px !important;
            }

            [class^='audioMetadata_' i] [class^='metadataSize_' i] {
               direction: ltr !important;
            }

            [class^='metadataSize_' i] {
               direction: ltr !important;
               text-align: center !important;
               margin-left: 8px !important;
            }

            [class^='nonMediaAttachment_' i][class^='hoverButtonGroup_' i] {
               background-color: var(--card-button-color) !important;
            }

            [class^='hoverButtonGroup_' i] {
               left: 3px !important;
               right: calc(100% - 35px) !important;
               top: 41% !important !important;
               filter: drop-shadow(2px 4px 6px #292921) !important;
            }

            a[aria-label="Play on Spotify"] {
               top: 24px !important;
            }

            li[id^="chat-messages-" i][class^="messageListItem_" i] div[class^="container_" i] {
               grid-auto-flow: unset !important;
               grid-row-gap: unset !important;
               grid-template-columns: unset !important;
               grid-row-gap: 1rem !important;
               place-items:  center !important;
               justify-content: center !important;
            }

            div[class*='pollContainer_' i], div[role=radiogroup] {
               background-color: transparent !important;
            }

            div[class^='answerInner_' i] {
               background-color: rgba(255, 255, 255, 0.067) !important;
            }

            span[class^='roleMention_' i], span.mention.interactive {
               padding: 0 6px;
               text-shadow: 0 0 1px rgba(33, 29, 44, .15);
            }

            [class^='reactions_' i] {
               position: absolute !important;
               right: 5px !important;
               bottom: -24px !important;
               flex-wrap: nowrap !important;
               margin: 8px 8px 0 0 !important;
            }

            div[aria-label="Add Super Reaction"], div[aria-label="Add Reaction"] {
               display: none !important;
            }

            [class^='reactionMe_' i] {
               background: var(--brand-experiment-15a) !important;
               background-color: var(--brand-experiment-15a) !important;
               border-color: var(--brand-experiment) !important;
            }

            [class^='reactions_' i] [class^='reaction_' i]:not([class^='reactionMe_' i]) {
               background: rgba(237, 152, 43, 0.1) !important;
            }

            [class^='reactions_' i] [class^='reaction_' i]:not([class^='reactionMe_' i]) [class^='reactionCount_' i] {
               color: #f4ca79 !important;
            }

            div[class^='tooltip_' i], div[class^='reactionTooltip_' i] {
               backdrop-filter: blur(16px) saturate(180%);
               background: hsl(223, 17%, 24%, 0.75) !important;
            }

            .emoji.jumboable {
               width: 2rem !important;
               height: 2rem !important;
               min-height: 2rem !important;
               border-radius: 4px;
            }

            form[class^='form_' i] div[class^='inner__' i] {
               cursor: text !important;
               overflow-x: clip !important;
               overflow-y: auto !important;
            }

            div[class^='inner__' i] textarea:not(form[class^='form_' i] textarea) {
               height: revert !important;
            }

            [class^='justifyAuto_' i] {
               justify-self: center !important;
            }

            #mySettings, #mySettings .settings {
               display: flex;
               flex-direction: column;
               max-width: 90%;
            }

            .mySettingsLable {
               display: block;
               font-size: 1rem;
               font-weight: 500;
               color: var(--header-primary);
            }

            #mySettings .mySettingsLable:not(:first-child) {
               margin-top: 1.5rem;
            }

            .mySettingsInput {
               border: none;
               border-radius: 5px;
               color: #f5f5f5;
               width: 100%;
               background-color: var(--message-color);
               user-select: text;
               margin-top: 0.5rem;
            }
         `;

         // define insider css classes
         const myAvatar = `
            .myAvatar {
               right: -50px !important;
               left: unset !important;
            }
         `;

         const myAvatarDecoration = `
            .myAvatarDecoration {
               right: -53px !important;
               left: unset !important;
            }
         `;

         const myMessage = `
            .myMessage {
               display: flex !important;
               flex-direction: row-reverse !important;
               right: 50px !important;
               width: unset !important;
            }
         `;

         const myWrapper = `
            .myWrapper {
               max-width: 440px !important;
               border-radius: var(--message-radius) !important;
               display: flex;
               flex-direction: column;
            }
         `;

         const myUpload = `
            .myUpload {
               display: flex;
               justify-content: center;
               align-items: center;
               margin-top: 1.5rem;
               margin-right: 35px;
            }
         `

         const customFileAttach = `
            .customFileAttach {
               display: flex !important;
               flex-direction: column !important;
               flex-wrap: wrap !important;
               width: 100% !important;
               text-align: center !important;
               margin-left: -9px !important;
            }
         `;

         const customSpotifyIframContainer = `
            .customSpotifyIframContainer {
               display: flex;
               justify-content: center !important;
               margin-top: 0.5rem !important;
               flex-wrap: wrap;
            }
         `;
         
         const customSpotifyIfram = `
            .TrackWidget_metadataWrapper__kRZpB {
               margin-top: -20px !important;
               width: 280px !important;
               align-items: center !important;
            }

            SpotifyLogo_spotifyLogoLink__O00RU, .Tags_tagList__Hhh1H {
               display: none !important;
            }
         `;

         const customEmbedLinks = `
            .customEmbedLinks {
               margin-top: 0.8rem !important;
               max-height: 80% !important
            }
         `;

         const myFadeOut = `
            .myFadeOut {
               visibility: collaps;
               opacity: 0;
            }
         `;

         const myFadeIn = `
            .myFadeIn {
               visibility: visible;
               opacity: 1;
               transition: opacity 1s, visibility 1s;
            }
         `;

            
         //================================= globalChats =======================================

         // Import global chat css
         var head = document.head;
         var darkStyles = document.createElement('style');
         darkStyles.appendChild(document.createTextNode(customRightCss));
         head.appendChild(darkStyles);

         // Import my messages css
         var style = document.createElement('style');
         style.innerHTML =
         myMessage + ' '
         + myAvatar + ' '
         + myAvatarDecoration + ' '
         + myWrapper + ' '
         + myUpload + ' '
         + customFileAttach + ' '
         + customSpotifyIfram + ' '
         + customEmbedLinks + ' '
         + myFadeIn + ' '
         + myFadeOut;
         document.getElementsByTagName('head')[0].appendChild(style);

         //================================= chats =============================================
         
         // sleep function
         function sleep(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
         }

         // alignment function
         function align(message, force) {
            if (!message.classList.contains('customAlign') || force === true) {
               if (!message.classList.contains('customAlign')) {
                  message.classList.add('customAlign');
               }

               try{
                  if (message.parentElement.getAttribute('aria-labelledby').match('message-username-Uploader') !== null) {
                     message.classList.add('myUpload');
                  }
               } catch {
                  return;
               }

               if (message.querySelector('div:last-child .inner__9fd0b') !== null) {
                  var textContainer = message.querySelector('textarea');
                  var text = textContainer.value;
               } 
               else {
                  var textContainer = message.querySelector('div[class^="markup_" i]');
                  var text = textContainer.textContent;
               }

               if (textContainer.clientHeight === 0 || text === undefined) {
                  return;
               }

               try {
                  if (text.split(' ').length < 5) {
                     textContainer.style.textAlign = 'center';
                     return;
                  }

                  const english  = /^[A-Za-z\s]+$/;
                  const farsi    = /^[\u0600-\u06FF\s]+$/;
                  const numbers  = /[^[:digit:]]/;
                  const specials = /[ `!@#$%^&*()_+\-=\[\]{};':"“”\\|,.<>\/?~]/;
                  const emojis   = /(<a?)?:\w+:(\d{18}>)?/g;
                  // const emojisUnicode = /<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu;
                  const result = text.split(' ').find(word => {
                     return(word 
                           && word !== ' '
                           && !numbers.test(word)
                           && !specials.test(word)
                           && !emojis.test(word)
                     )
                  });
                  if (result === undefined) {
                     textContainer.style.textAlign = 'center';
                     return;
                  }
                  if (!english.test(result) || farsi.test(result)) {
                     if (textContainer.tagName === 'TEXTAREA') {
                        textContainer.setAttribute('style', 'text-align: right !important');
                     } else {
                        textContainer.style.textAlign = 'right';
                        textContainer.style.direction = 'rtl';
                     }
                     return;
                  }
               } finally {
                  return;
               }
            }
         }

         // escape edit mode function
         let editModeStyleInjected = false;

         function editModeProcess(inputContainer) {
            const messageSection = inputContainer.parentElement.parentElement;

            const media = messageSection.querySelector('div[class^="container_" i]');
            const caption = messageSection.querySelector('div[class^="contents_" i]');
            const inputContainerHeight = inputContainer.clientHeight;
            media.setAttribute('style', 'padding-bottom: ' + (inputContainerHeight - 20) + 'px');

            const escapeHandler = event => {
               if (event.keyCode === 27) {
                  media.style.paddingBottom = '0';
                  media.classList.remove('customContainer');
                  caption.classList.remove('customAlign');
                  editModeStyleInjected = false;
                  event.returnValue = true;
                  return true;
               }
            };
            inputContainer.querySelector('textarea').addEventListener('keydown', escapeHandler);
         }

         // MAIN
         sleep(5000).then(() => {
            try {
               document.querySelector('nav[aria-label="Private channels"] h2 + li[role="listitem"] a').click();
            } finally {
               runPatch();
            }
         });

         // CORE function
         function runPatch() {
            if (history.scrollRestoration) {
               history.scrollRestoration = 'manual';
            }
            
            const myAvatarUrl = mySettings.myAvatarUrl;
            
            setInterval(function () { //set the code to repeat without pausing discord itself
               const fileAttachMessages = [...document.querySelectorAll('div[class^="container_" i] a[class^="downloadWrapper" i]')];
               const spotifyMessages  = [...document.querySelectorAll('div[class^="container_" i] [class^="embedSpotify_" i]')];
               const embedMessages   = [...document.querySelectorAll('div[class^="container_" i] article[class^="embedWrapper_" i]')];
               const myMessages  = [...document.querySelectorAll('div[class^="contents_" i] > img[src="' + myAvatarUrl + '"]')];
               const myNextMessagesIds = [];
               const editModeTexts  = [...document.querySelectorAll('main[class^="chatContent_" i] div[class^="inner__" i]')];
               const allMessagesTexts = [...document.querySelectorAll('div[class^="contents_" i]')];
               const backgroundFlashedMessages  = [...document.querySelectorAll('[class^="backgroundFlash_" i]')];
               const imageAttachMessages = [...document.querySelectorAll('li[id^="chat-messages-" i][class^="messageListItem_" i] > div:first-child [class^="imageWrapper_" i]')];
               const editedMessages       = [...document.querySelectorAll('div[class^="markup_" i] time[aria-label^="Edited "]')];
               const spoilerAttachMessages = [...document.querySelectorAll('li[id^="chat-messages-" i][class^="messageListItem_" i] > div:first-child [class^="spoiler_" i] [class^="imageWrapper_" i]')];
               const full_moon_with_faces = [...document.querySelectorAll('img[src="/assets/c6522a789d34f4572cc6.svg"], img[alt=":full_moon_with_face:"], img[data-name=":full_moon_with_face:"], button[data-name="full_moon_with_face"]')];
               // const embedAttachmentsMessages = [...document.querySelectorAll('div[class^="markup_" i] a[href^="https://cdn.discordapp.com/attachments/"], div[class^="markup_" i] a[href^="https://media.discordapp.net/attachments/"]')];            

               //================================= imageAttachment ================================
      
               imageAttachMessages.forEach(message => {
                  var imageContainer = message.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                  var videoContainer = message.parentElement.parentElement.parentElement.parentElement;
                  var embedContainer = message.parentElement.parentElement.parentElement;

                  // images
                  if (/container_/.test(imageContainer.className)) {
                     // check if it is not solo
                     if (/two|three|oneByT/.test(videoContainer.className)) {
                        imageContainer.classList.add('customContainer');
                        return;
                     }

                     if (!imageContainer.classList.contains('customContainer') && message.querySelector('a').href.startsWith('https://cdn.discordapp.com')) {
                        var captionContainer = imageContainer.parentElement.querySelector('div[class^="contents_" i]');
                        if (/container_/.test(imageContainer.className) && !imageContainer.classList.contains('customContainer')) {
                           imageContainer.classList.add('customContainer');
      
                           const caption = captionContainer.querySelector('div[class^="markup_" i]');
                           try {
                              const captionHeight = caption.offsetHeight;
                              if (captionHeight === 0) {
                                 return;
                              }

                              const captionEmbed = imageContainer.querySelector('article');
                              var captionEmbedHeight = 0;
                              if (captionEmbed !== null) {
                                 captionEmbedHeight = captionEmbed.offsetHeight + 12;
                              }

                              const image = imageContainer.querySelector('div');
                              const imageHeight = imageContainer.offsetHeight;

                              image.setAttribute('style', 'transform: translateY(-' + (captionHeight - 10) + 'px)');
                              caption.setAttribute('style', 'transform: translateY(' + (imageHeight - captionEmbedHeight - 16) + 'px)');
                              caption.style.top = '10px';
                              caption.style.textAlign = 'center';
                           } 
                           catch {
                              return;
                           }
                        }
                     }
                  }

                  // TODO: Multiple attachments
                  //else if (gridContainer...)

                  // videos or embeds
                  else {
                     // videos
                     if (/container_/.test(videoContainer.className) && !videoContainer.classList.contains('customContainer')) {
                        var captionContainer = videoContainer.parentElement.querySelector('div[class^="contents_" i]');
                        const caption = captionContainer.querySelector('div[class^="markup_" i]');
                        const cover = videoContainer.querySelector('div');
                        
                        const captionHeight = caption.offsetHeight;
                        if (captionHeight === 0) {
                           return;
                        }
                        
                        if (cover !== null && videoContainer.querySelector('video') !== null) {
                           videoContainer.classList.add('customContainer');
                           const coverHeight = videoContainer.querySelector('video').clientHeight;
                           cover.setAttribute('style', 'transform: translateY(-' + (captionHeight + 7) + 'px)');
                           caption.setAttribute('style', 'transform: translateY(' + (coverHeight - 30) + 'px)');
                           caption.style.textAlign = 'center';
                           return;
                        }
                     }
                     // embeds
                     else if (/container_/.test(embedContainer.className) && !embedContainer.classList.contains('customContainer')) {
                           var captionContainer = embedContainer.parentElement.querySelector('div[class^="contents_" i]');
                           const caption = captionContainer.querySelector('article[class^="markup_" i]');
                           const cover = embedContainer.querySelector('div');

                           const captionHeight = caption.offsetHeight;
                           if (captionHeight === 0) {
                              return;
                           }

                           if (cover !== null && embedContainer.querySelector('video') !== null) {
                              embedContainer.classList.add('customContainer');
                              const coverHeight = embedContainer.querySelector('video').clientHeight;
                              cover.setAttribute('style', 'transform: translateY(-' + (captionHeight - 16) + 'px)');
                              caption.setAttribute('style', 'transform: translateY(' + (coverHeight + 10) + 'px)');
                              caption.style.textAlign = 'center';
                           }
                     }
                  }
               });

               //================================= spoilAttachment ================================

               spoilerAttachMessages.forEach(message => {
                  var imageContainer = message.closest('div[class^="container_" i]');
                  if (imageContainer !== null && !imageContainer.classList.contains('customContainer')) {
                     imageContainer.classList.add('customContainer');
                     var captionContainer = imageContainer.parentElement.querySelector('div[class^="contents_" i]');

                     const caption = captionContainer.querySelector('div[class^="markup_" i]');
                     const captionHeight = caption.offsetHeight;
                     if (captionHeight === 0) {
                        return;
                     }

                     const imageHeight = message.clientHeight;
                     imageContainer.setAttribute('style', 'transform: translateY(-' + (captionHeight - 10) + 'px)');
                     caption.setAttribute('style', 'transform: translateY(' + (imageHeight + 40) + 'px)');
                     caption.style.textAlign = 'center';
                  }
               });

               //================================= normalChats ====================================
               
               editedMessages.forEach(message => {
                  try {
                     align(message.parentElement.parentElement.parentElement, true);
                  } finally {
                     return;
                  }
               });

               allMessagesTexts.forEach(message => {
                  align(message, false);
               });
      
               myMessages.forEach(message => {
                  var messageId = message.parentNode.parentNode.parentNode.getAttribute('id');
                  updateClass(messageId, true);
                  checkNextMessages(messageId);
               });
      
               myNextMessagesIds.forEach(messageId => {
                  updateClass(messageId, false);
               });

               backgroundFlashedMessages.forEach(reply => {
                  if (!reply.classList.contains('customReply')) {
                     reply.classList.add('customReply');
                     const message = reply.firstElementChild;

                     if (message.querySelector('div[class^="contents_" i] > img') !== null) {
                        if (message.querySelector('div[class^="contents_" i] > img').src === myAvatarUrl) {
                           message.classList.add('myMessage');
                        }
                        return;
                     } else {
                        if (checkPreviousMessages(message.getAttribute('id'))) {
                           message.classList.add('myMessage');
                        }
                     }
                  }
               });

               // find previous user messages function
               function checkPreviousMessages(messageId) {
                  let message = document.getElementById(messageId).parentElement;
                  let end = false;
                  while (!end) {
                     try {
                        var previousMessage = message.previousElementSibling;

                        if (previousMessage.querySelector('div[class^="contents_" i] > img') !== null) {
                              end = true;
                              if (previousMessage.querySelector('div[class^="contents_" i] > img').src === myAvatarUrl) {
                                 return true;
                              } else {
                                 return false;
                              }
                        }
                     } finally {
                        message = message.previousElementSibling;
                     }
                  }
               }

               // find next user messages function
               function checkNextMessages(messageId) {
                  let message = document.getElementById(messageId);
                  let end = false;
                  while (!end) {
                     try {
                        if (nextMessageExist(message.nextElementSibling)) {
                           myNextMessagesIds.push(message.nextElementSibling.getAttribute('id'));
                        } else {
                           end = true;
                        }
                     } catch(e) {
                        end = true;
                        break;
                     } finally {
                        if (end) {
                           break;
                        } else {
                           message = message.nextElementSibling;
                        }
                     }
                  }
               }
               function nextMessageExist(nextMessage) {
                  if (nextMessage !== undefined
                     && nextMessage.tagName === 'LI'
                     && document.getElementById(nextMessage.getAttribute('id')).querySelector('div[class^="contents_" i] > img') === null
                     && document.getElementById(nextMessage.getAttribute('id')).textContent.startsWith('[')) {
                        return true;
                     }
                  return false;
               }

               // update user messages style function
               function updateClass(messageId, addAvatarClass) {
                  var message = document.getElementById(messageId);
                  if (addAvatarClass && message !== null) {
                     try {
                        var myAvatarImg = message.querySelector('div[class^="contents_" i] > img');
                        if (myAvatarImg !== null) {
                           myAvatarImg.classList.add('myAvatar');
                           var myAvatarDecorationImg = myAvatarImg.nextElementSibling;
                           if (myAvatarDecorationImg.nodeName === 'IMG' && (/avatarDecoration_/.test(myAvatarDecorationImg.className))) {
                              myAvatarDecorationImg.classList.add('myAvatarDecoration');
                           }
                        }
                     } finally {
                        //can't find avatar -> continue...
                     }
                  }
                  try {
                     message.classList.add('myMessage');
                     message.querySelector('div:first-child').classList.add('myWrapper');
                  } finally {
                     return;
                  }
               }
      
               //================================= fileAttachment =================================
      
               fileAttachMessages.forEach(message => {
                  var container = message.parentElement.parentElement;
                  if (container.classList.contains('customFileAttach')) {
                     container.classList.add('customFileAttach');
                  }
               });
      
               //================================= embedLinks =====================================
      
               embedMessages.forEach(message => {
                  var embed = message.parentElement;
                  if (embed.classList.contains('customEmbedLinks')) {
                     embed.classList.add('customEmbedLinks');
                  }
               });

               //================================= editMode =======================================
               
               if (editModeTexts.length > 1) {
                  // with attachment(s)
                  try {
                     if (!editModeStyleInjected) {
                        const editModeText = editModeTexts[0];
                        const inputContainer = editModeText.parentElement.parentElement.parentElement;
                        const media = inputContainer.parentElement.parentElement.querySelector('div[class^="container_" i]');
                        const mediaHeight = media.querySelector('[class^="imageWrapper_" i] a').clientHeight;
                        inputContainer.style.cssText = `
                           max-width: 90%; 
                           margin-left: 20px !important;
                           transform: translateY(${mediaHeight + 25}px);
                        `;
                        inputContainer.parentElement.style.maxHeight = '80px';
                        editModeText.focus();
                        editModeText.click();

                        editModeStyleInjected = true;
                     }
                  }

                  // normal chat
                  catch {
                     if (!editModeStyleInjected) {
                        const editModeText = editModeTexts[0];
                        const inputContainer = editModeText.parentElement.parentElement.parentElement;
                        if(/form_/.test(inputContainer.className)) {
                           return;
                        }
                        inputContainer.style.cssText = `
                           width: 400px;
                           padding-bottom: 10px;
                        `;
                        editModeText.style.minHeight = '180px';
                        align(inputContainer.parentElement, true);
                        
                        editModeStyleInjected = true;
                     }
                  }

                  // handle escape
                  finally {
                     if (editModeStyleInjected) {
                        editModeProcess(editModeTexts[0].parentElement.parentElement.parentElement);
                     }
                  }
               }

               //================================= spotifyIframe ==================================

               spotifyMessages.forEach(iframe => {
                  if (!iframe.classList.contains('customSpotifyIframContainer')) {
                     iframe.classList.add('customSpotifyIframContainer');
                  }
               });

               //================================= addSteamHappy ==================================

               if (mySettings.steamHappy){
                  full_moon_with_faces.forEach(emoji => {
                     if (!emoji.classList.contains('customSteamHappy')) {
                        emoji.classList.add('customSteamHappy');
                        if (emoji.tagName === 'BUTTON'){
                           emoji.style.cssText = `
                              background-image: url(https://cdn.discordapp.com/emojis/1174388409012338840.webp?size=64&quality=lossless) !important;
                              background-position: center !important;
                              background-size: cover !important;
                           `;
                           emoji.querySelector('div[class^="emojiSpriteImage_" i]').style.cssText = `
                              background-image: none !important;
                              background-position: center !important;
                              background-size: cover !important;
                           `;
                        } else {
                           emoji.src = 'https://cdn.discordapp.com/emojis/1174388409012338840.webp';
                        }
                     }
                  })
               }
            }, 500);
         }
      }
   }

   stop() {}

   getSettingsPanel() {
      const panel = document.createElement("div");
      panel.id = "mySettings";

      const buttonTextSetting = document.createElement("div");
      buttonTextSetting.classList.add("setting");

      // avatarUrl
      const avatarLabel = document.createElement("span")
      avatarLabel.textContent = "Your avatar URL:";
      avatarLabel.className = "mySettingsLable";

      const avatarInput = document.createElement("input");
      avatarInput.type = "text";
      avatarInput.name = "avatarUrl";
      avatarInput.className = "mySettingsInput";
      avatarInput.value = mySettings.myAvatarUrl;
      avatarInput.selectionStart = avatarInput.selectionStart = 0;

      // SteamHappy
      const steamHappyLabel = document.createElement("span");
      steamHappyLabel.textContent = "Enable Steamhappy emoji:";
      steamHappyLabel.className = "mySettingsLable";

      const steamHappyInput = document.createElement("input");
      steamHappyInput.type = "checkbox";
      steamHappyInput.name = "steamhappy";
      steamHappyInput.className = "mySettingsInput";
      steamHappyInput.checked = mySettings.steamHappy;

      buttonTextSetting.append(avatarLabel, avatarInput, steamHappyLabel, steamHappyInput);
      panel.append(buttonTextSetting);
      
      avatarInput.addEventListener("change", () => {
         mySettings.myAvatarUrl = avatarInput.value;
         if(mySettings.hasOwnProperty("myAvatarUrl") && (mySettings.myAvatarUrl.startsWith("https://cdn.discordapp.com/avatars/") || mySettings.myAvatarUrl.startsWith("https://media.discordapp.net/avatars/"))) {
            mySettings = {
               myAvatarUrl: mySettings.myAvatarUrl
            };
            BdApi.Data.save("RTLPatcher", "settings", mySettings);
            BdApi.UI.showToast("RTLPatcher: Restart is required for changes to take effect!");
         }
      });

      steamHappyInput.addEventListener("change", () => {
         mySettings.steamHappy = steamHappyInput.checked;
         mySettings = {
            myAvatarUrl: mySettings.myAvatarUrl,
            steamHappy: mySettings.steamHappy
         };
         BdApi.Data.save("RTLPatcher", "settings", mySettings);
      });
      return panel;
   }
};

/*** "The beginning is the most important part of the work." | The great philosopher, Plato ***/
// The End Of Script ===========================================================================