# **🐰 quiCKIE 🐰**

![](https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/preview.webp?raw=true)

This UserScript will generate **BunnyButtons 🐰** alongside the sites regular download buttons. When clicked, the corresponding torrent will be sent to [qui](https://getqui.com/) using your custom settings.

There is currently support for **25+** different trackers. If a tracker you use isn't on the list, I have written a small guide on how anyone may easily contribute so that it can be added: [The 3 Steps to Adding a New Tracker to quiCKIE](https://github.com/WirlyWirly/quiCKIE/wiki/The-3-Steps-to-Adding-a-New-Tracker-to-quiCKIE)

This UserScript is similar to the official [qui browser add-on](https://addons.mozilla.org/en-US/firefox/addon/qui/), except we're creating a BunnyButton on the page itself, thus making it more convenient and even accessible on mobile devices.

The quiCKIE settings panel is registered to the menu of your UserScript Manager, which is the dialogue on your toolbar that lists the currently active UserScripts. Only the **quiURL** and **ApiKey** are required, everything else is optional. Hover over the column headers for more info about how each field can be filled in.

> **Left-Click \ Mobile Tap**: Send torrent to qui with the default tracker settings<br>
> **Right-Click \ Mobile Long-press**: Select a preset to use when sending the torrent to qui<br>
> **Middle-Click \ Ctrl-Click**: Open qui in a new tab<br>
> **Shift-Click**: Open quiCKIE settings panel<br>
> 
> **Source: [GitHub](https://github.com/WirlyWirly/quiCKIE)**<br>
> **Install: [qui - quiCKIE](https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true)**<br>
> Written on [LibreWolf](https://librewolf.net/) via [Violentmonkey](https://violentmonkey.github.io/)<br>

# Integrating Third-Party UserScripts
If you are the author of a UserScript that creates their own special `DL` (Download) links on a page that quiCKIE services, you can very easily integrate your UserScript so that your `DL` elements receive their very own and fully functioning BunnyButton🐰: [Integrating Third-Party UserScripts](https://github.com/WirlyWirly/quiCKIE/wiki/Integrating-Other-UserScripts)

