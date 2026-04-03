# **🐰 quiCKIE 🐰**

![](https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/preview.webp?raw=true)

This [UserScript](https://openuserjs.org/about/Userscript-Beginners-HOWTO) will generate **BunnyButtons 🐰** alongside a sites regular download buttons. When clicked, the corresponding torrent will be sent to your torrent client using your custom settings.

Integrating BunnyButtons into the page itself allows for support on both **desktop** and **mobile** devices. In addition, this integration has been done so in a **non-destructive** manner, ensuring quiCKIE is friendly\compatible with other UserScripts and default browser functions.

quiCKIE currently supports **[qui](https://getqui.com/)**, **[qBitTorrent](https://www.qbittorrent.org/)**, **[Transmission](https://transmissionbt.com/)**, **[Deluge](https://deluge-torrent.org/)** and **40+** different trackers. If a tracker you know of is not listed, check the quiCKIE WiKi for a simple 3-step guide on how anyone may easily contribute a new tracker: **[Adding a New Tracker](https://github.com/WirlyWirly/quiCKIE/wiki/Adding-a-New-Tracker)**

Only the **clientURL** and **login credentials** for the selected torrent client are required, everything else is optional. Hover over the various emojis for more info about what each field does and how it may be filled in.

The quiCKIE settings panel can be accessed by performing a **Shift-Click** on any BunnyButton, or from the menu of your UserScript Manager, which is the dialogue on your toolbar that lists the currently active UserScripts. 

<br>

> **Left-Click \ Mobile Tap**: Send torrent to client with the settings for the current tracker<br>
> **Right-Click \ Mobile Long-press**: Select a preset to use when sending the torrent to your client<br>
> **Middle-Click**: Open torrent client in a new tab<br>
> 
> **Shift-Click**: Open quiCKIE settings panel<br>
> **Ctrl-Click**: Open torrent client in a new tab<br>
> **Shift-Ctrl-Click**: Send torrent to client, but paused (works for both the current tracker settings and presets)<br>
>
> **Source: [GitHub](https://github.com/WirlyWirly/quiCKIE)**<br>
> **Install: [qui - quiCKIE](https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true)**<br>
> Written on [LibreWolf](https://librewolf.net/) via [Violentmonkey](https://violentmonkey.github.io/)<br>

<br>

# Integrating Third-Party UserScripts
If you are the author of a UserScript that creates torrent `DL` (Download) buttons on a page that is serviced by quiCKIE, you can very easily integrate your UserScript so that your `DL` elements receive their very own and fully functioning BunnyButton 🐰: [Integrating Third-Party UserScripts](https://github.com/WirlyWirly/quiCKIE/wiki/Integrating-Other-UserScripts)

