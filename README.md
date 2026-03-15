# **🐰 quiCKIE 🐰**

![](https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/preview.webp?raw=true)

This UserScript will generate **BunnyButtons 🐰** alongside a sites regular download buttons. When clicked, the corresponding torrent will be sent to your torrent client using your custom settings. There is currently support for [qui](https://getqui.com/), [qBitTorrent](https://www.qbittorrent.org/), and [Transmission](https://transmissionbt.com/).

There is currently support for **30+** different trackers. If a tracker you know of is not listed, check the quiCKIE WiKi for a simple 3-step guide on how anyone may easily contribute a new tracker: [Adding a New Tracker](https://github.com/WirlyWirly/quiCKIE/wiki/Adding-a-New-Tracker)

Depending on your client, only the ***clientURL*** and the corresponding credentials (ApiKey\Username\Password) are required, everything else is optional. Hover over the various emojis for more info about what each field does and how it can be filled in. Greyed-out fields are not applicable to the selected torrent client, only qui has full support for all settings. The quiCKIE settings panel can be accessed by performing a **Shift-Click** on any BunnyButton, or from the menu of your UserScript Manager, which is the dialogue on your toolbar that lists the currently active UserScripts. 

> **Left-Click \ Mobile Tap**: Send torrent to qui with the settings for the current tracker<br>
> **Right-Click \ Mobile Long-press**: Select a preset to use when sending the torrent to qui<br>
> **Middle-Click**: Open torrent client in a new tab<br>
> 
> **Shift-Click**: Open quiCKIE settings panel<br>
> **Ctrl-Click**: Open torrent client in a new tab<br>
> **Shift-Ctrl-Click**: Send torrent to client, but paused (works for both the current tracker settings and presets)<br>
>
> **Source: [GitHub](https://github.com/WirlyWirly/quiCKIE)**<br>
> **Install: [qui - quiCKIE](https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true)**<br>
> Written on [LibreWolf](https://librewolf.net/) via [Violentmonkey](https://violentmonkey.github.io/)<br>

# Integrating Third-Party UserScripts
If you are the author of a UserScript that creates torrent `DL` (Download) buttons on a page that is serviced by quiCKIE, you can very easily integrate your UserScript so that your `DL` elements receive their very own and fully functioning BunnyButton 🐰: [Integrating Third-Party UserScripts](https://github.com/WirlyWirly/quiCKIE/wiki/Integrating-Other-UserScripts)

