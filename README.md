<div align="center">

  # **🐰 quiCKIE 🐰**
</div>

<div align="center">
  <img src=".github/assets/quickie.webp" alt="quickie" width="100%" />
</div>

<br>

This [UserScript](https://openuserjs.org/about/Userscript-Beginners-HOWTO) will integrate **BunnyButtons 🐰** alongside a trackers regular download buttons. When clicked, the corresponding torrent will be added directly to your torrent client using your custom settings.

quiCKIE currently supports **[qui](https://getqui.com/)**, **[qBitTorrent](https://www.qbittorrent.org/)**, **[Transmission](https://transmissionbt.com/)**, **[Deluge](https://deluge-torrent.org/)**, both **desktop**\\**mobile** devices, and **40+** different trackers. In addition, this is a **non-destructive** UserScript, which ensures quiCKIE to be friendly\compatible with other UserScripts and default browser functions.

If a tracker that you have access to is not listed, check the quiCKIE WiKi for a simple **3-step guide** on how it can be added, no programming experience required: **[Adding a New Tracker](https://github.com/WirlyWirly/quiCKIE/wiki/Adding-a-New-Tracker)**

The quiCKIE settings panel can be accessed by performing a **Shift-Click** on any BunnyButton or from the menu of your UserScript Manager, which is the dialogue on your toolbar that lists the currently active UserScripts.

Only the **clientURL** and **credentials** for the selected torrent client are required, everything else is optional. Hover over the various emojis for details about what each field does and how it may be filled in.

<br>

> **Left-Click \ Mobile Tap**: Add torrent to client with settings for the current tracker<br>
> **Right-Click \ Mobile Long-press**: Add torrent to client with settings from the selected preset<br>
> **Middle-Click**: Open torrent client in a new tab<br>
>
> **Shift-Click**: Open quiCKIE settings panel<br>
> **Ctrl-Click**: Open torrent client in a new tab<br>
> **Shift-Ctrl-Click**: Add torrent to client, but with 'Start Paused' enabled (also works on presets)<br>
>
> **BunnyButton Emojiography***<br>
> 🐰 Default | 🌱 Seeding | 🍁 Snatched | 💎 Freeleech | 📢 Featured | 💸 Spend Token | 🤝 ThirdParty | 🌎 ThirdParty + TrackerSettings<br>
> 🧲 Downloading .torrent file | 🧑 Client Login | 🕓 Adding Torrent | ✔️ Success | ❌ Failure
>
> **Source: [GitHub](https://github.com/WirlyWirly/quiCKIE)**<br>
> **Install: [qui - quiCKIE](https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true)**<br>
> Written in [NeoVim](https://neovim.io/) and tested on [LibreWolf](https://librewolf.net/) via [Violentmonkey](https://violentmonkey.github.io/)<br>
>
> \* *Full BunnyButton Emojiography is available on select trackers*
>

<br>

# Integrating Third-Party UserScripts
If you are the author of a UserScript that creates torrent `DL` (Download) buttons on a page that is also serviced by quiCKIE, you can very easily add quiCKIE integration so that your `DL` elements receive their very own and fully functioning BunnyButton 🐰: [Integrating Third-Party UserScripts](https://github.com/WirlyWirly/quiCKIE/wiki/Integrating-Other-UserScripts)

<br>

<details>
<summary> quiCKIE v0.1: A Ramble </summary>

The day before I began work on quiCKIE, I had migrated all my torrents from Transmission to qBitTorrent so that I could use that fancy new web-interface all the cool kids were talking about; qui

After getting home from work and poking around this still foregin interface, I stumbled onto the api documentation. Reading through the documentation and learning about the capabilities of the api, I figured that since I'm already using a fancy new interface and client, I might as well have a fancy new way to add\manage my torrents... The custom shell script I'd been using for the last 10 years to organize my torrents wasn't bad, but I've picked up a few new tricks since then, so I felt a fresh approach was in order... Having just finished a different UserScript, my mind was still in JavaScript mode... So ... Would that make sense here? 🤔

Yes, a UserScript! One that will quickly send torrents directly from a tracker to this fancy new qui interface! It'll even categorize those torrents based on which tracker it was sent from! 🤯... Also, it **has** to work on my phone, since that's where I do most of my browsing and I **hate** having to do **any** kind of torrent\file mangement on a touch screen 😤

After writing down a quick roadmap, I begain the work of making it happen! It would be fresh, it would be reliable, it would be flexible, and on top of that it wouldn't look like shit! 👏... Which I immedietaly regreted, because I almost cried getting the CSS to behave 😭

After spending half my night getting the CSS to work, it was then that my still unnamed UserScript added its very first torrent to qui! 🥳

> Fun-fact: The first torrent to **ever** be succesfully sent by this script (even before it had a name) was from MyAnonaMouse 🐭

After I had it working, I added the other trackers I use and was ready to finalize my work. I'd made it easy for myself to add more trackers in the future, so I knew I could come back to it if I ended up joining another tracker... But before then, because why the hell not, I also added a few more optional settings I thought I might one day find useful, one of which was **Paused**

The problem was, I couldn't actually get that setting to work 😕... Also, it was bedtime, and since I didn't want to finalize a faulty UserScript, what was suppose to be `v1.0 [Final]` became `v0.1`.

Before going to bed, I posted quiCKIE onto a few forums for folk to check out, with a disclaimer that *Paused* wasn't working yet... That might have been a mistake, because in my mind this little project still needed fixing, which meant that while at work the next day, my mind was repeatedly going over the code I'd written and getting random hits of inspiration... and then again the next day... and the next... It was another **month** before I would push `v1.0`, which again was **suppose** to be *Final*, but after a few days inspiration hit **again**... and again... At that point, I gave up on ever "finalizing" this script and accepted that I'd just keep it going until there wasn't really anything left for me to do 😅

Even so, while there are a few more trackers, a couple more options, and an extra 5000+ lines than I had originally planned, I'm happy that at it's core this still remains the same little ~400 line script I put together that night before bedtime 🛌

From the beginning, this script was written to be reliable, maintainable, and easily expanded on. With that in mind, my hope is that the work put in by myself and my contributors (both here and in the forums 🫶) will continue to pay dividends for many years to come, for anyone in the community who happens onto this page 🍻

  <div align="center">
    <img src=".github/assets/quickiev0.1.webp" alt="quickie" width="100%" />
  </div>

P.S

As for the name, I feel that's pretty much a given...

> Me: Hmm, what's a good name?... qui... like *qui*ck?... No! Like *QUICKIE*! 😁

</details>
