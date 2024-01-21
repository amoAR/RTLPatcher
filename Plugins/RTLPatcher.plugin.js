/**
 * @name RTLPatcher
 * @author amoAR
 * @description Customize chat design just like Telegram! (Auto-Updating)
 * @version 5.2.8
*/

module.exports = class ChatDesign {
   start() {
      // Global chat css
      const customRightCss = `
         /* Static css based on Material-Discord & MicaCold themes */

         :root {
            --input-color: rgba(255, 255, 255, 0.067) !important;
            --accent-text-color--material-you: var(--message-color);
            --message-color: rgba(255, 255, 255, 0.067) !important;
            --message-color-hover: rgba(255, 255, 255, 0.067) !important;
            --card-color-filled: rgba(33, 29, 44, .3) !important;
            --input-color-alt: rgba(33, 29, 44, .3) !important;
            --profile-body-background-color: rgba(30, 29, 50, .4) !important;
            --typing-color: transparent !important;
            --primary-700: transparent !important;
            --activity-card-color: var(--card-color-filled) !important;
            --sidebar-panel-color: var(--bg-overlay-1,var(--background-secondary-alt)) !important;
            --attachment-color: var(--card-color-filled) !important;
            --menu-item-hover: rgba(31, 37, 39, .75) !important;
            --main-color: url(https://cdn.discordapp.com/attachments/1129429790869426208/1136662260211781672/fdj46dP.png) !important;
            --status-picker-color: var(--bg-overlay-1,var(--background-secondary-alt)) !important;
            --popout-color: rgb(31, 37, 39) !important;
            --shadow-3dp: none !important;
         }

         .theme-dark {
            --saturation-modifier: 0.175;
            --lightness-modifier: 0.2;

            /* Material-Discord => Src: https://github.com/mazOnGitHub/discord-mica */
            --background-primary: url(https://cdn.discordapp.com/attachments/1129429790869426208/1136662259628789801/9lIPnSc.png);
            --background-secondary: var(--background-primary);
            --background-tertiary: url(https://cdn.discordapp.com/attachments/1129429790869426208/1136662260559904888/l2F9fCH.png);
            --background-secondary-alt: var(--background-tertiary);
         }

         .buttonContainer__9b459 .sendIcon__461ff path {
            transform: scale(1.0) !important;
         }

         .innerButton_debeee {
            margin-right: 0 !important;
         }

         .profilePanel__12596 {
            width: 300px !important;
         }

         .container_b2ce9c, .membersListNotices_a4cb13, .membersWrap__90226, .hiddenVisually__06c3e, .members__9f47b, .content__23cab {
            border-top-left-radius: 35px !important;
         }

         .badgeList_ef4131, .profileBadges__7a7cb {
            background-color: transparent !important;
         }

         .container_b2ce9c {
            background: linear-gradient(to bottom, rgba(33, 29, 44, .3), rgba(255, 255, 255, 0.067)) !important;
         }

         .members__9f47b, .members__9f47b > div {
            border-top-left-radius: 25px important;
            background: transparent !important;
         }

         .theme-dark .wrapper__3a7a0 {
            background-color: transparent;
         }

         .noiseCancellationPopout__06ec4, .container__0810b, .container__56cd1 {
            background-color: rgb(31, 37, 39) !important;
         }

         .container_6sXIoE, .container_d667ff, .activityPanel__22355, .listeningAlong_f20fb2 {
            background: var(--bg-overlay-1,var(--background-secondary-alt)) !important;
         }

         .button__66e8c .buttonColor_a6eb73, .button__66e8c.buttonColor_a6eb73 {
            background-color: transparent !important;
         }

         .contents_fb6220 {
            font-size: small !important;
         }

         .actionButtons_b58cbb {
            padding-top: 0 !important;
            background-color: rgba(255, 255, 255, 0.05) !important;
            border-radius: 14px !important;
         }

         .button__66e8c .buttonColor_a6eb73, .button__66e8c.buttonColor_a6eb73 {
            button-background: transparent !important;
            color: #2dc770 !important;
         }

         .divider__8cf56.isUnread__6f880.hasContent__8519e .content_d67847 {
            color: var(--text-muted) !important;
            filter: brightness(1.1) !important;
         }

         .markup_a7e664 a {
            text-decoration: none;
         }

         .hljs, .nowPlayingColumn-1eCBCN {
            background: transparent !important;
         }

         .imageContainer__04362 {
            justify-content: center !important;
         }

         .embedAuthor_cb4bfc, .embedDescription__33443, .embedFields__51397, .embedFooter_a8f9aa, .embedMedia_b473d2, .embedProvider_cfa718, .embedTitle__31740 {
            text-align: center !important;
            justify-content: center !important;
         }

         .input-3O04eu {
            border-radius: var(--button-radius);
            padding: 0 12px !important;
         }

         .container__0a6a9 {
            background: repeating-linear-gradient(-35deg, #222a30, transparent 100px) !important;
            background-color: #202c3536 !important;
            backdrop-filter: saturate(0.5) !important;
            border-radius: 20px !important;
         }

         .timeLogModal_9s4Rts .emptyPlaceholder__688fc {
            width: 101%;
         }

         .flexChild__6e093 {
            flex: 1 1 10% !important;
         }

         .container-2oNtJn {
            width: 40%;
            margin-right: 40px;
         }

         .root-1CAIjD .header-1ffhsl .close-A4ZfTI, .root-1CAIjD .header-1ffhsl .iconButton-2rHy7x {
            top: 27px;
         }

         .menu_dc52c6 {
            background-color: transparent !important;
            background: url(https://cdn.discordapp.com/attachments/1129429790869426208/1136662260211781672/fdj46dP.png) !important;
            background-position: revert !important;
            opacity: .99 !important;
            box-shadow: none !important;
         }

         .wrapper__09ecc .channelTextArea__2e60f .scrollableContainer__33e06 {
            background-color: rgba(33, 29, 44, .25) !important;
         }

         .recentsIcon__3c4cf, a[href="https://support.discord.com"], .clickable_d23a1a[aria-label="Start Voice Call"], .clickable_d23a1a[aria-label="Start Video Call"], .clickable_d23a1a[aria-label="Add Friends to DM"] {
            display: none;
         }

         #bd-editor-controls {
            border-radius: 0 !important;
         }

         .monaco-editor .minimap {
            right: 2px !important;
         }

         .bd-button, .lookFilled-1H2Jvj, .lookOutlined-3RTC7c, .lookLink-13iF2K, .lookInverted-2GrLaB, .operations-3q3u6E > a {
            filter: sepia(1) !important;
         }

         .phoneFieldPopout-uW3DlO {
            overflow: hidden !important;
         }

         .bd-addon-list.bd-grid-view {
            grid-template-columns: 50% 50% !important;
         }

         #app-mount .layers__1c917 ~ .layers__1c917 {
            box-shadow: none !important !important;
         }

         .bd-addon-views .bd-view-button.selected svg {
            padding-right: 1px !important;
         }

         #app-mount .layers__1c917 ~ .layers__1c917 .sidebar_ded4b5 {
            padding: 20px 6px 20px 10px !important;
         }

         .bg__12180, .container__4bde3 {
            background: url(https://cdn.discordapp.com/attachments/1129429790869426208/1136662259628789801/9lIPnSc.png) !important;
            background-position: bottom right !important;
            filter: contrast(85%) !important;
         }

         .userPanelInnerThemed__1804b {
            background: url(https://cdn.discordapp.com/attachments/1129429790869426208/1136662259628789801/9lIPnSc.png) !important;
            background-position: bottom !important;
            filter: contrast(85%) !important;
         }

         .overlayBackground__86b78 {
            background: rgba(30, 29, 50, .4) !important;
         }

         .container_ca50b9 {
            background: var(--bg-overlay-1,var(--background-secondary-alt)) !important;
         }

         .container__11d72.themed_b152d4 {
            background: var(--bg-overlay-2,var(--__header-bar-background)) !important;
         }

         .sidebar_ded4b5 .channel_c21703 {
            margin-left: 8px;
            border-radius: var(--channel-radius) !important;
         }

         .channel_c21703 .interactive__776ee:has(.selected-26oxtA) {
            padding-left: 0 !important;
         }

         .sidebar_ded4b5 .channel_c21703:hover {
            background: #1d2733 !important;
         }

         .children__32014:after {
            visibility: hidden !important;
         }
        
         .sidebar_ded4b5, .sidebar_ded4b5 .container-1NXEtd {
            border-right: 2px solid rgba(255, 255, 255, .05) !important;
         }

         .sidebarRegionScroller-FXiQOh {
            border-right: 1px solid rgba(255, 255, 255, .1) !important;
         }

         .sidebar_ded4b5 .separator__3f416 {
            margin: 10px -15px 10px 28px !important;
         }

         .eyebrow__60985, .heading-deprecated-12-normal-2QSQ4R {
            line-height: 18.5px !important;
         }

         .headerText_f47574 {
            overflow: hidden !important;
         }
        
        .limitedTimeBadge-JvRtll, .textBadge__45d79 {
            display: none !important;
         }

         .bd-description {
            overflow: hidden !important;
         }

         .bd-addon-header {
            border: none;
            background: transparent!important;
         }

         .bd-addon-card {
            background: var(--card-color-filled) !important;
         }

         .contentRegion-3HkfJJ {
            border-radius: 0;
         }

         .scrollerInner__059a5 {
            overflow: visible !important;
         }

         .form__13a2c {
            margin-top: 1rem !important;
            background-color: transparent !important;
            background: transparent !important;
         }

         .typing__6fd1d {
            width: calc(100% - var(--scrollbar-width) * 2) !important;
            margin-left: var(--scrollbar-width) !important;
         }

         .mediaAttachmentsContainer_edba75 {
            display: grid !important;
            justify-items: center !important;
            grid-auto-flow: row !important;
         }

         .mediaAttachmentsContainer_edba75 li[role="listitem"] {
            background-color: rgba(0,0,0, .4) !important;
         }

         textarea {
            unicode-bidi: plaintext !important;
            text-align: start !important;
         }

         article.markup_a7e664 + article.markup_a7e664 {
            margin-top: 1rem !important;
         }

         article.embedWrapper_c143d9 {
            margin-top: 1rem !important;
         }

         .welcomeCTASticker_ee7523 {
            margin-top: 4px !important;
            display: flex !important;
            justify-content: center !important;
         }

         span[class^='clickableSticker_'] {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
         }

         .scrollableContainer__33e06:not(form .scrollableContainer__33e06) {
            max-width: 400px !important;
         }

         .embedWrapper_c143d9 {
            max-width: 440px !important;
         }

         .mediaAttachmentsContainer_edba75 {
            margin-bottom: 30px !important;
         }

         .mediaAttachmentsContainer_edba75 > div > div {
            margin-top: 5px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
         }
         
         .mediaAttachmentsContainer_edba75 > div > div > div {
            width: 90% !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
         }

         .twoByTwoGrid__47ed7 {
            margin-top: 1rem !important;
         }

         .twoByTwoGrid__47ed7 div {
            display: flex !important;
            height: fit-content !important;
         }

         .oneByTwoGridItem_fc18a9 {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
         }

         code {
            direction: ltr !important;
            text-align: initial !important;
            overflow-x: clip !important !important;
         }

         .openFullPreviewSection-31zc2v {
            margin-right: 10px !important;
         }

         .form__13a2c .attachedBars_da3c74:after, .guildSeparator_dcb3cc {
            background: rgba(255, 255, 255, .2) !important;
         }

         .form__13a2c .attachedBars_da3c74 {
            border-radius: 10px 10px 0 0 !imporant !important;
            background-color: var(--main-textarea-color) !important;
         }

         .attachedBars_da3c74, .replyBar_b64d74, .threadSuggestionBar_b633f7 {
            background: transparent !important;
         }

         .attachmentName_b33bf1 {
            margin-left: 10px !important;
         }

         .formattedSize__07da1 {
            direction: ltr !important;
         }

         svg.codeIcon__14a76 {
            display: none !important;
         }

         .downloadButton-2PkwZg {
            padding-left: 10px !important;
         }

         div[class^=wordmarkWindows] {
            display: inline-flex !important;
            flex-direction: row-reverse !important;
            padding: 0 0 0 12px !important;
         }

         div[class^=wordmarkWindows]:before {
            content: '\\0041\\0052' !important;
         }

         div[class^=wordmarkWindows]:after {
            content: '\\0061\\006D\\006F' !important;
         }

         .group-spacing-16.messagesWrapper_ea2b0b .groupStart__56db5 {
            --group-spacing: 0 !important;
         }

         .divider__8cf56 {
            position: relative !important;
            display: flex !important;
            margin-top: 3rem !important;
         }

         .wrapper__09ecc.:not(.groupStart__56db5) {
            padding: var(--message-padding-top) var(--message-padding-side) !important;
         }

         .hiddenSpoiler__57186 {
            filter: blur(8px) !important;
         }

         .spoilerWarning_d02e2d {
            backdrop-filter: blur(4px) saturate(180%) !important;
         }

         .iconWrapper__8560c, .wrapper__5036f {
            backdrop-filter: blur(4px) saturate(120%) contrast(90%) brightness(40%) !important;
            background-color: var(--message-color) !important;
         }

         .cozy_f5c119 .header__39b23 {
            display: inline-grid !important;
         }

         .cozy_f5c119 .timestamp_cdbd93 {
            margin-left: 0 !important;
         }

         .divider__8cf56[class^=isUnread] {
            margin: 0 0.875rem 0 70px !important;
         }

         .group-spacing-16 .divider__8cf56.beforeGroup-1BvJAt {
            margin-top: 35px !important;
         }

         .typing-2J1mQU {
            margin-left: 1.5rem !important;
            background-color: transparent !important;
         }

         removeAttachmentHoverButton__4ddb5, .embedSuppressButton_df9a75, .closeButton__8f1fd {
            position: absolute !important;
         }

         removeAttachmentHoverButton__4ddb5 svg, .embedSuppressButton_df9a75 svg, .closeButton__8f1fd svg, [class^=cancelButton] {
            width: 13px !important;
            height: 13px !important;
            margin-right: 1px !important;
            padding: 2.5px !important;
            backdrop-filter: blur(16px) saturate(180%) !important;
            background: rgba(53, 55, 64, .3) !important;
            border: 1px solid var(--separator-color) !important;
            border-radius: 50% !important;
         }

         .embedSuppressButton_df9a75 {
            right: -45px !important;
         }

         .closeButton__8f1fd {
            right: 0 !important;
            top: 10px !important;
         }

         [class*=group-spacing].messagesWrapper_ea2b0b .groupStart__56db5:not(.backgroundFlash_e5b9ad.groupStart__56db5) {
            margin-top: 3rem !important;
         }

         .wrapperPaused-9B8znP, .wrapper-1FP9YQ {
            background: transparent !important;
         }

         .video__4c052 {
            margin-top: 5px !important;
         }

         .videoControls__96149 {
            display: flex !important;
            flex-direction: row-reverse !important;
         }

         .videoControls__96149 .volumeButtonSlider__05188 {
            right: -1.65rem !important;
         }

         .audioControls__9fbe9 {
            display: flex !important;
            flex-direction: row-reverse !important;
         }

         .durationTimeWrapper_d1de6b {
            display: flex !important;
            flex-direction: inherit !important;
         }

         .audioControls__9fbe9 .volumeButtonSlider__05188 {
            right: -1.3rem !important;
            top: -25px !important;
         }

         .videoButton__1a553 {
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

         div[aria-labelledby^='message-username-Uploader'] > .contents_f41bb2 h3 {
            display: none !important;
         }

         div[role="textbox"] {
            text-align: start !important;
         }

         .emojiContainer__4a804 + .emojiContainer__4a804 {
            margin-right: 0.5px !important;
         }

         .wrapper__09ecc.mentioned__58017 .messageContent__21e69:not(.repliedTextContent__75526) {
            padding: 10px 20px 10px 20px !important;
         }

         .wrapper-1HIH0j {
            margin-top: 1rem !important !important;
         }

         li[class^='messageListItem_'] {
            width: fit-content;
         }

         .container-3Sqbyb {
            margin-top: 1rem !important;
         }

         img.emoji {
            image-resolution: from-image 300dpi !important;
            image-rendering: smooth !important;
         }

         .iconContainer__8fa9c:not(.icon__46425.iconLayout__9fbb1.small_c2007e > div) {
            right: 99%;
         }

         .nonMediaAttachmentsContainer_ca7b77 {
            max-width: 100% !important;
            justify-self: center !important;
            margin-top: 0.75rem !important;
            margin-bottom: -0.5rem !important;
         }

         .cozy_f5c119 .repliedMessage_e2bf4a {
            max-width: 400px !important;
         }

         div[class^='repliedMessage_'] {
            margin-top: 1.5rem !important;
         }

         div[class^='repliedTextPreview_'] > div {
            direction: rtl !important;
         }

         .wrapper__09ecc {
            max-width: 440px !important;
            margin-top: 1.5rem !important;
            border-radius: var(--message-radius) !important;
            background-color: rgba(255, 255, 255, 0.067) !important;
         }

         .wrapper__09ecc:before, .wrapper__09ecc:after {
            display: none !important;
            content: unset !important;
         }

         .attachment__7a2d0 {
            background-color: #1c1e24 !important;
            opacity: .9 !important;
         }

         div[class^='messageAttachment_']:not(.oneByTwoGridItem_fc18a9 > div *):not(.oneByTwoSoloItem__42516 > div > *):not(.oneByTwoSoloItem__42516 + .oneByTwoDuoItem__43bff *) {
            direction: rtl !important;
            text-align: right !important;
            padding-top: 0 !important;
            padding-right: 20px !important;
            padding-left: 20px !important;
            position: relative !important;
         }

         .imageContent__24964:not(.twoByOneGridItem__3d797 > div > .imageContent__24964:nth-last-child) {
            padding-top: 10px !important;
         }

         .embedImage_e638a7 img, .embedImage_e638a7 video, .embedThumbnail__468e1 img, .embedThumbnail__468e1 video, .embedVideo__0c65b img, .embedVideo__0c65b video {
            padding: 0 !important;
            border-radius: 15px !important;
         }

         .imageAccessory__64ab2 {
            top: 3px !important;
         }

         .imageContainer__04362 + .altText__6dd8b, .gifTag__9db5a {
            display: none !important;
         }

         .clickableWrapper__64072, .loadingOverlay__4d818 {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
         }

         .wrapperAudio__555ce {
            margin-top: 1remv
            max-width: 400px !important;
            background: var(--background-primary) !important;
            background-position: top !important;
         }

         .embedImage_e638a7, .embedThumbnail__468e1, .embedVideo__0c65b {
            padding: 0 20px 0 20px !important;
         }

         .embedMedia_b473d2 {
            margin-top: 20px !important;
         }

         .embedVideo__0c65b {
            justify-content: center !important;
            align-content: center !important;
            align-items: center !important;
            margin-bottom: 1rem !important;
         }

         .oneByOneGridSingle__01756, .oneByOneGridSingle__01756 .lazyImg_dafbb7 {
            max-height: unset !important;
         }

         .mediaAttachmentsContainer_edba75 > div {
            justify-items: center !important;
         }

         .mediaAttachmentsContainer_edba75, .nonMediaAttachmentsContainer_ca7b77 {
            align-items: center !important;
         }

         .oneByOneGrid__02495 {
            margin-top: 1rem !important;
         }

         .oneByOneGrid__02495+.threeByThreeGrid_d2750c, .oneByTwoGrid__44b90+.threeByThreeGrid_d2750c {
            margin-top: 20px !important;
            margin-bottom: 2rem !important;
         }

         .hideOverflow_d442b2 {
            overflow: visible !important;
         }

         .messageAttachment_b97504 {
            min-width: 90px !important;
            max-width: 400px !important;
            width: fit-contentv
            height: unset !important;
            top: -5px !important;
         }

         .metadataContent__391c4 {
            text-align: center !important;
            direction: ltr !important;
         }

         .metadata__541c7 {
            direction: ltr !important;
            text-align: left !important;
            margin-left: 10px !important;
         }

         .filenameLinkWrapper__56a0d {
            direction: ltr !important;
            text-align: left !important;
            margin: 0 10px 0 10px !important;
         }

         .anchor_c8ddc0 {
            text-decoration: none !important;
         }

         .audioMetadata_e546a8 {
            align-items: center !important;
            justify-content: center !important;
            flex-direction: row-reverse !important;
            padding: 12px 44px 4px !important;
         }

         .audioMetadata_e546a8 .metadataSize__42428 {
            direction: ltr !important;
         }

         .metadataSize__42428 {
            direction: ltr !important;
            text-align: center !important;
            margin-left: 8px !important;
         }

         .nonMediaAttachment__30665.hoverButtonGroup__5b423 {
            background-color: var(--card-button-color) !important;
         }

         .hoverButtonGroup__5b423 {
            left: 3px !important;
            right: calc(100% - 35px) !important;
            top: 41% !important !important;
            filter: drop-shadow(2px 4px 6px #292921) !important;
         }

         .uUzgJ1pUOlLsN1WbgXbm a[href] {
            max-width: 90%v
         }

         a[aria-label="Play on Spotify"] {
            top: 24px !important;
         }

         .container_dbadf5 {
            grid-auto-flow: unset !important;
            grid-row-gap: unset !important;
            grid-template-columns: unset !important;
            grid-row-gap: 1rem !important;
            place-items:  center !important;
            justify-content: center !important;
         }

         .reactions_b8dc93 {
            position: absolute !important;
            right: 5px !important;
            bottom: -24px !important;
            flex-wrap: nowrap !important;
            margin: 8px 8px 0 0 !important;
         }

         div[aria-label="Add Super Reaction"], div[aria-label="Add Reaction"] {
            display: none !important;
         }

         .reactionMe__98f57, .reaction_fef95b.reactionMe__98f57 {
            background: var(--brand-experiment-15a) !important;
            background-color: var(--brand-experiment-15a) !important;
            border-color: var(--brand-experiment) !important;
         }

         .reaction_fef95b:not(.reactionMe__98f57) {
            background: rgba(237, 152, 43, 0.1) !important;
         }

         .reaction_fef95b:not(.reactionMe__98f57) .reactionCount_b49901 {
            color: #f4ca79 !important;
         }

         .tooltip__01384 {
            backdrop-filter: blur(16px) saturate(180%);
            background: hsl(223, 17%, 24%, 0.75) !important;
         }

         .emoji.jumboable {
            width: 2rem !important;
            height: 2rem !important;
            min-height: 2rem !important;
         }

         .operations-3q3u6E {
            display: none !important;
         }

         .inner__9fd0b {
            cursor: text !important;
            overflow-x: clip !important;
            overflow-y: auto !important;
         }

         .inner__9fd0b textarea:not(.form__13a2c textarea) {
            height: revert !important;
         }
      `;

      // define insider css classes
      const myAvatar = `
         .myAvatar {
            right: -50px !important;
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

            if (message.parentElement.getAttribute('aria-labelledby').match('message-username-Uploader') !== null) {
               message.classList.add('myUpload');
            }

            if (message.querySelector('div:last-child .inner__9fd0b') !== null) {
               var textContainer = message.querySelector('textarea');
               var text = textContainer.value;
            } 
            else {
               var textContainer = message.querySelector('.markup_a7e664');
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

      // fix scroller function
      let lastScrollerPos = 0
      function fixScroller(scrollerElement) {
         if (scrollerElement.scrollTop - lastScrollerPos > 20000 || lastScrollerPos - scrollerElement.scrollTop > 20000) {
            scrollerElement.scrollTo(0, Math.floor(lastScrollerPos));
         } else {
            lastScrollerPos = scrollerElement.scrollTop;
         }
      }

      // escape edit mode function
      let editModeStyleInjected = false;

      function editModeProcess(inputContainer) {
         const messageSection = inputContainer.parentElement.parentElement;

         const media = messageSection.querySelector('.container_dbadf5');
         const caption = messageSection.querySelector('.contents_f41bb2');
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
         
         const myAvatarUrl = 'https://cdn.discordapp.com/avatars/{user.id}/{avatar.name}.{avatar.format}?size={avatar.size}';
         
         setInterval(function () { //set the code to repeat without pausing discord itself
            const fileAttachMessages = [...document.querySelectorAll('.container_dbadf5 a.downloadWrapper-1Cy2Fi')];
            const spotifyMessages  = [...document.querySelectorAll('.container_dbadf5 .embedSpotify_d58077')];
            const embedMessages   = [...document.querySelectorAll('.container_dbadf5 article.embedWrapper_c143d9')];
            const myMessages  = [...document.querySelectorAll('.contents_f41bb2 > img[src="' + myAvatarUrl + '"]')];
            const myNextMessagesIds = [];
            const editModeTexts  = [...document.querySelectorAll('.inner__9fd0b')];
            const allMessagesTexts = [...document.querySelectorAll('.contents_f41bb2')];
            const backgroundFlashedMessages  = [...document.querySelectorAll('.backgroundFlash_e5b9ad')];
            const imageAttachMessages = [...document.querySelectorAll('.wrapper__09ecc .imageWrapper_fd6587')];
            const editedMessages       = [...document.querySelectorAll('.markup_a7e664 time[aria-label^="Edited "]')];
            const spoilerAttachMessages = [...document.querySelectorAll('.wrapper__09ecc .spoiler_b634f3 .imageWrapper_fd6587')];
            const embedAttachmentsMessages = [...document.querySelectorAll('.markup_a7e664 a[href^="https://cdn.discordapp.com/attachments/"], .markup_a7e664 a[href^="https://media.discordapp.net/attachments/"]')];
            
            const scroller = document.getElementsByClassName('scroller__1f96e')[0];
            


            //================================= imageAttachment ================================
   
            imageAttachMessages.forEach(message => {
               var imageContainer = message.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
               var videoContainer = message.parentElement.parentElement.parentElement.parentElement;
               var embedContainer = message.parentElement.parentElement.parentElement;

               // images
               if (imageContainer.classList.contains('container_dbadf5')) {
                  // check if it is not solo
                  if (/two|three|oneByT/.test(videoContainer.className)) {
                     imageContainer.classList.add('customContainer');
                     return;
                  }

                  if (!imageContainer.classList.contains('customContainer') && message.querySelector('a').href.startsWith('https://cdn.discordapp.com')) {
                     var captionContainer = imageContainer.parentElement.querySelector('.contents_f41bb2');
                     if (imageContainer.classList.contains('container_dbadf5') && !imageContainer.classList.contains('customContainer')) {
                        imageContainer.classList.add('customContainer');
   
                        const caption = captionContainer.querySelector('.markup_a7e664');
                        try {
                           const captionHeight = caption.offsetHeight;
                           if (captionHeight === 0) {
                              return;
                           }

                           const image = imageContainer.querySelector('div');
                           const imageHeight = imageContainer.offsetHeight;
                           image.setAttribute('style', 'transform: translateY(-' + (captionHeight + 5) + 'px)');
                           caption.setAttribute('style', 'transform: translateY(' + (imageHeight - 18) + 'px)');
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
                  if (videoContainer.classList.contains('container_dbadf5') && !videoContainer.classList.contains('customContainer')) {
                     var captionContainer = videoContainer.parentElement.querySelector('.contents_f41bb2');
                     const caption = captionContainer.querySelector('.markup_a7e664');
                     const cover = videoContainer.querySelector('div');
                     
                     const captionHeight = caption.offsetHeight;
                     if (captionHeight === 0) {
                        return;
                     }
                     
                     if (cover !== null && videoContainer.querySelector('video') !== null) {
                        videoContainer.classList.add('customContainer');
                        const coverHeight = videoContainer.querySelector('video').clientHeight;
                        cover.setAttribute('style', 'transform: translateY(-' + (captionHeight - 10) + 'px)');
                        caption.setAttribute('style', 'transform: translateY(' + (coverHeight + 46) + 'px)');
                        caption.style.textAlign = 'center';
                        return;
                     }
                  }
                  // embeds
                  else if (embedContainer.classList.contains('container_dbadf5') && !embedContainer.classList.contains('customContainer')) {
                        var captionContainer = embedContainer.parentElement.querySelector('.contents_f41bb2');
                        const caption = captionContainer.querySelector('.markup_a7e664');
                        const cover = embedContainer.querySelector('div');

                        const captionHeight = caption.offsetHeight;
                        if (captionHeight === 0) {
                           return;
                        }

                        if (cover !== null && embedContainer.querySelector('video') !== null) {
                           embedContainer.classList.add('customContainer');
                           const coverHeight = embedContainer.querySelector('video').clientHeight;
                           cover.setAttribute('style', 'transform: translateY(-' + (captionHeight - 10) + 'px)');
                           caption.setAttribute('style', 'transform: translateY(' + (coverHeight + 10) + 'px)');
                           caption.style.textAlign = 'center';
                        }
                  }
               }
            });

            //================================= spoilAttachment ================================

            spoilerAttachMessages.forEach(message => {
               var imageContainer = message.closest('.container_dbadf5');
               if (imageContainer !== null && !imageContainer.classList.contains('customContainer')) {
                  imageContainer.classList.add('customContainer');
                  var captionContainer = imageContainer.parentElement.querySelector('.contents_f41bb2');

                  const caption = captionContainer.querySelector('.markup_a7e664');
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

                  if (message.querySelector('.contents_f41bb2 > img') !== null) {
                     if (message.querySelector('.contents_f41bb2 > img').src === myAvatarUrl) {
                        message.classList.add('myMessage');
                     }
                     return;
                  } else {
                     if (checkPreviousMessages(message.getAttribute('id'))) {
                        message.classList.add('myMessage');
                     }
                  }
               }
               if (getComputedStyle(reply).getPropertyValue('background-color') !== 'rgba(148, 156, 247, 0)') {
                  fixScroller(scroller);
               }
            });

            // find previous user messages function
            function checkPreviousMessages(messageId) {
               let message = document.getElementById(messageId).parentElement;
               let end = false;
               while (!end) {
                  try {
                     var previousMessage = message.previousElementSibling;

                     if (previousMessage.querySelector('.contents_f41bb2 > img') !== null) {
                           end = true;
                           if (previousMessage.querySelector('.contents_f41bb2 > img').src === myAvatarUrl) {
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
                  && document.getElementById(nextMessage.getAttribute('id')).querySelector('.contents_f41bb2 > img') === null
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
                     if (message.querySelector('.contents_f41bb2 > img') !== null) {
                        message.querySelector('.contents_f41bb2 > img').classList.add('myAvatar');
                     }
                  } finally {
                     //can't find avatar -> continue...
                  }
               }
               try {
                  message.classList.add('myMessage');
                  message.querySelector('.wrapper__09ecc').classList.add('myWrapper');
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
                     const media = inputContainer.parentElement.parentElement.querySelector('.container_dbadf5');
                     const mediaHeight = media.querySelector('.imageWrapper_fd6587 a').clientHeight;
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

         }, 500);
      }
   }

   stop() {}
};

/*** "The beginning is the most important part of the work." | The great philosopher, Plato ***/
// The End Of Script ===========================================================================