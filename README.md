# RTLPatcher for Discord

Own messages stay aligned to one side and Other on other side.!\
In this way, it's much easier to recognize your messages from others... but Discord still doesn't even support RTL languages,
so this project was created to support these languages in chat, but it became something more.

## Features

- aligns message texts based on first word
- aligns own messages to right of chat screen
- places caption of attachments below instead of above
- redesigns user area panel and upload bar
- adds some css (i know this has nothing to do with the name of the project but discord default theme is ugly as fuck)

> As mentioned in the last part, about 900 lines of style have been added to bring Discord closer to standards of electron application. Since this wasn't goal of the project, some popular themes at BetterDiscord were used to save time

## Quick Install

1. Install BetterDiscord
2. Download style files from [here](themes) and put them in:
```
%APPDATA%\BetterDiscord\themes
```
3. Download script files from [here](plugins) and put them in:
```
%APPDATA%\BetterDiscord\plugins
```
4. Open Discord and go to settings > BETTERDISCORD section
5. Themes > _Enable_ Material-Discord, Materyal-You, MicaCold _`in order`_
6. Plugins > _Edit_ RTLPathcer > search for `const myAvatarUrl =` and replace URL of that line with your avatar URL then save and finally _Enable_ it

> You can find your unique avatar URL by pressing `ctrl + shift + i` in chat page and clicking on your avatar. Do this in Discord application, not on the browser. The result should be like this:
> <p>https://cdn.discordapp.com/avatars/{user.id}/{avatar.name}.{avatar.format}?size={avatar.size}</p>

## Known Issues

- Editing the message may result in the message being shrunk. in this case, press Esc and try again.
- Message contains a lot of English text, but it's shown as RTL. be careful that the encoding of first word determines the alignment of the whole message.
- Align of my messages in chat is the same as the others. you definitely didn't enter the URL of your avatar _correctly_. Follow Step 6 of installation guide again

## Screenshot

<p align="center">
<img src="Docs/ChatPage.png" alt="ChatPageDesign"/>
</p>

<p align="center">
<img src="Docs/AttachmentCaption.png" alt="FixedAttachmentCaption"/>
</p>