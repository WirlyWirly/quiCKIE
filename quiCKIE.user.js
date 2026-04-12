// ==UserScript==

// ----------------------------------- MetaData --------------------------------------

// @name        qui - quiCKIE
// @author      WirlyWirly + contributors 🫶
// @version     1.43.6
// @homepage    https://github.com/WirlyWirly/quiCKIE
// @description A UserScript to quickly send torrents from a tracker to a torrent client, with customizable per-site settings and presets 🐰
//              Orignally written for qui, later extended to support more torrent clients
//              Written on LibreWolf via Violentmonkey

// @icon        https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/icon.webp?raw=true
// @namespace   https://github.com/WirlyWirly
// @run-at      document-end

// @resource    settingsPanelCSS https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.css?raw=true
// @resource    presetsMenuCSS https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/contextMenu.css?raw=true

// @require     https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/contextMenu.js?raw=true
// @require     https://raw.githubusercontent.com/WirlyWirly/UserScripts/main/HelperScripts/simpleLogger.js
// @require     https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@43fd0fe4de1166f343883511e53546e87840aeaf/gm_config.js

// ----------------------------------- Development --------------------------------------
// Local resource urls used during development. Files can be served over http via MiniServe: https://github.com/svenstaro/miniserve

// resource    settingsPanelCSS http://localhost:12345/quiCKIE.css
// resource    presetsMenuCSS http://localhost:12345/ContextMenu.css
// require     http://localhost:12345/ContextMenu.js

// ----------------------------------- Matches --------------------------------------

// Adding a New Tracker: https://github.com/WirlyWirly/quiCKIE/wiki/Adding-a-New-Tracker

// @match   https://aither.cc/*/bookmarks*
// @match   https://aither.cc/playlists/*
// @match   https://aither.cc/torrents*

// @match   https://alpharatio.cc/top10.php*
// @match   https://alpharatio.cc/torrents.php*

// @match   https://animebytes.tv/alltorrents.php?*&userid=*
// @match   https://animebytes.tv/artist.php?id=*
// @match   https://animebytes.tv/bookmarks.php*
// @match   https://animebytes.tv/collage.php?*id=*
// @match   https://animebytes.tv/company.php?id=*
// @match   https://animebytes.tv/series.php?id=*
// @match   https://animebytes.tv/torrents*

// @match   https://anthelion.me/torrents.php*

// @match   https://avistaz.to/
// @match   https://avistaz.to/*/bookmark*
// @match   https://avistaz.to/torrent*

// @match   https://bakabt.me/torrent/*

// @match   https://beyond-hd.me/
// @match   https://beyond-hd.me/bookmarks*
// @match   https://beyond-hd.me/download/*
// @match   https://beyond-hd.me/library*
// @match   https://beyond-hd.me/torrents*
// @match   https://beyond-hd.me/torrents/seed*
// @match   https://beyond-hd.me/watchlist*

// @match   https://bibliotik.me/collections/*
// @match   https://bibliotik.me/torrents/*

// @match   https://bitporn.eu/
// @match   https://bitporn.eu/*/bookmarks*
// @match   https://bitporn.eu/playlists/*
// @match   https://bitporn.eu/torrents*

// @match   https://broadcasthe.net/collages.php?id=*
// @match   https://broadcasthe.net/series.php?id=*
// @match   https://broadcasthe.net/torrents.php*

// @match   https://cinemaz.to/
// @match   https://cinemaz.to/*/bookmark*
// @match   https://cinemaz.to/torrent/*

// @match   https://clearjav.com/
// @match   https://clearjav.com/*/bookmarks*
// @match   https://clearjav.com/playlists/*
// @match   https://clearjav.com/torrents*

// @match   https://www.deepbassnine.com/artist.php?id=*
// @match   https://www.deepbassnine.com/collages.php?id=*
// @match   https://www.deepbassnine.com/torrents.php*

// @match   https://digitalcore.club/
// @match   https://digitalcore.club/alltorrents*
// @match   https://digitalcore.club/apps*
// @match   https://digitalcore.club/bookmarks*
// @match   https://digitalcore.club/games*
// @match   https://digitalcore.club/movies*
// @match   https://digitalcore.club/music*
// @match   https://digitalcore.club/other*
// @match   https://digitalcore.club/torrent-lists/*
// @match   https://digitalcore.club/torrent/*
// @match   https://digitalcore.club/tvseries*
// @match   https://digitalcore.club/xxx*

// @match   https://www.empornium.sx/collage/*
// @match   https://www.empornium.sx/top10.php*
// @match   https://www.empornium.sx/torrents.php*
// @match   https://www.empornium.sx/user.php?id=*

// @match   https://e*hentai.org/gallerytorrents.php*

// @match   https://exoticaz.to/
// @match   https://exoticaz.to/*/bookmark*
// @match   https://exoticaz.to/torrent*

// @match   https://femdomcult.org/collage/*
// @match   https://femdomcult.org/torrents.php*

// @match   https://gazellegames.net/collections.php?id=*
// @match   https://gazellegames.net/torrents.php*
// @match   https://gazellegames.net/bookmarks.php*

// @match   https://www.happyfappy.net/collage/*
// @match   https://www.happyfappy.net/top10.php*
// @match   https://www.happyfappy.net/torrents.php*
// @match   https://www.happyfappy.net/user.php?id=*

// @match   https://hdbits.org/bookmarks*
// @match   https://hdbits.org/browse.php*
// @match   https://hdbits.org/details.php?id=*
// @match   https://hdbits.org/film/info?id=*

// @include   /^https://iptorrents\.\w+/details.php?id=.*/
// @include   /^https://iptorrents\.\w+/t.*/
// @include   /^https://iptorrents\.\w+/torrent.php?id=.*/

// @match   https://jpopsuki.eu/artist.php?id=*
// @match   https://jpopsuki.eu/collages.php?id=*
// @match   https://jpopsuki.eu/top10.php*
// @match   https://jpopsuki.eu/torrents.php*

// @match   https://karagarga.in/details.php*
// @match   https://karagarga.in/browse.php*

// @match   https://kufirc.com/bookmarks.php*
// @match   https://kufirc.com/collages.php*
// @match   https://kufirc.com/top10.php*
// @match   https://kufirc.com/torrents.php*

// @match   https://lat-team.com/
// @match   https://lat-team.com/*/bookmarks
// @match   https://lat-team.com/playlists/*
// @match   https://lat-team.com/torrents*

// @match   https://luminarr.me/
// @match   https://luminarr.me/*/bookmarks
// @match   https://luminarr.me/playlists/*
// @match   https://luminarr.me/torrents*

// @match   https://materialize.is/collages.php?id=*
// @match   https://materialize.is/top10.php*
// @match   https://materialize.is/torrents.php*

// @match   https://www.morethantv.me/collage/*
// @match   https://www.morethantv.me/top10.php*
// @match   https://www.morethantv.me/torrents/browse*

// @match   https://www.myanonamouse.net/
// @match   https://www.myanonamouse.net/stats/top10Tor.php*
// @match   https://www.myanonamouse.net/t/*
// @match   https://www.myanonamouse.net/tor/browse.php*

// @match   https://nebulance.io/bookmarks.php*
// @match   https://nebulance.io/top10.php*
// @match   https://nebulance.io/torrents.php*

// @include   /^https://(sukebei\.)?nyaa\.\w+/.*/
// @include   /^https://(sukebei\.)?nyaa\.\w+/view/.*/

// @match   https://oldtoons.world/
// @match   https://oldtoons.world/*/bookmarks
// @match   https://oldtoons.world/playlists/*
// @match   https://oldtoons.world/torrents*

// @match   https://orpheus.network/artist.php?id=*
// @match   https://orpheus.network/bookmarks.php*
// @match   https://orpheus.network/collages.php?id=*
// @match   https://orpheus.network/top10.php*
// @match   https://orpheus.network/torrents.php*

// @match   https://passthepopcorn.me/torrents.php?id=*

// @match   https://portugas.org/
// @match   https://portugas.org/*/bookmarks
// @match   https://portugas.org/playlists/*
// @match   https://portugas.org/torrents*

// @match   https://privatehd.to/
// @match   https://privatehd.to/torrent*
// @match   https://privatehd.to/*/bookmark*

// @match   https://redacted.sh/artist.php?id=*
// @match   https://redacted.sh/bookmarks.php*
// @match   https://redacted.sh/collage*.php?id=*
// @match   https://redacted.sh/top10.php*
// @match   https://redacted.sh/torrents.php*
// @match   https://redacted.sh/userhistory.php?action=subscribed_collages

// @match   https://retro-movies.club/
// @match   https://retro-movies.club/*/bookmarks
// @match   https://retro-movies.club/playlists/*
// @match   https://retro-movies.club/torrents*

// @match   https://secret-cinema.pw/artist.php?id=*
// @match   https://secret-cinema.pw/collages.php?id=*
// @match   https://secret-cinema.pw/top10.php*
// @match   https://secret-cinema.pw/torrents.php*

// @match   https://thegeeks.click/browse.php*
// @match   https://thegeeks.click/details.php?id=*

// @match   https://www.torrentleech.org/torrent*

// @match   https://tv-vault.me/torrents.php?id=*

// ----------------------------------- Permissions --------------------------------------

// @grant   GM_addStyle
// @grant   GM_getResourceText
// @grant   GM_getValue
// @grant   GM_listValues
// @grant   GM_registerMenuCommand
// @grant   GM_setValue
// @grant   GM_xmlhttpRequest

// ----------------------------------- Script Links --------------------------------------

// @updateURL   https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true
// @downloadURL https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true
// ==/UserScript==

// Set to true to enable verbose console logging, useful during development or troubleshooting
const verboseConsoleLogging = false

// This string helps prevent various JavaScript oddities when working with variables
'use strict'

// =================================== SETTINGS PANEL TRACKERS ======================================

// @quickieSettingsPanelTrackers
const settingsPanelTrackers = [
    // Keep this list alphabetical, as each tracker here will appear as a row in the quiCKIE settings panel

    // Each tracker requires 3 things; A TitleCase name, the homepage URL, and the primaryDomain of the tracker

    // If the tracker has more than one domain that it can be accessed from, you may also include the 'otherDomains' property, which should consist of an array (list) of different domain names. This will make it so that these domains all share the same tracker settings.
    // otherDomains: ['domain1', 'domain2', 'domain3'],

    // Here are examples of identify the domain of a tracker...
    //  https://broadcasthe.net/ --> broadcasthe
    //  https://www.myanonamouse.net/ --> myanonamouse
    //  https://sukebei.nyaa.si/ --> nyaa

    {
        trackerName: 'Aither', // @holy-elbow
        homepageURL: 'https://aither.cc',
        primaryDomain: 'aither',
    },

    {
        trackerName: 'AlphaRatio',
        homepageURL: 'https://alpharatio.cc',
        primaryDomain: 'alpharatio',
    },

    {
        trackerName: 'AnimeBytes',
        homepageURL: '',
        primaryDomain: 'animebytes',
    },

    {
        trackerName: 'Anthelion', // @malefis
        homepageURL: 'https://anthelion.me',
        primaryDomain: 'anthelion',
    },

    {
        trackerName: 'AvistaZ', // @fercats99
        homepageURL: 'https://avistaz.to',
        primaryDomain: 'avistaz',
    },

    {
        trackerName: 'BakaBT',
        homepageURL: 'https://bakabt.me',
        primaryDomain: 'bakabt',
    },

    {
        trackerName: 'Beyond-HD', // @empUser
        homepageURL: 'https://beyond-hd.me',
        primaryDomain: 'beyond-hd',
    },

    {
        trackerName: 'Bibliotik',
        homepageURL: 'https://bibliotik.me',
        primaryDomain: 'bibliotik',
    },

    {
        trackerName: 'BitPorn',
        homepageURL: 'https://bitporn.eu',
        primaryDomain: 'bitporn',
    },

    {
        trackerName: 'BroadcasTheNet',
        homepageURL: 'https://broadcasthe.net',
        primaryDomain: 'broadcasthe',
    },

    {
        trackerName: 'CinemaZ', // @fercats99
        homepageURL: 'https://cinemaz.to',
        primaryDomain: 'cinemaz',
    },

    {
        trackerName: 'ClearJAV', // @holy-elbow
        homepageURL: 'https://clearjav.com',
        primaryDomain: 'clearjav',
    },

    {
        trackerName: 'DeepBassNine', // @tartuffe
        homepageURL: 'https://www.deepbassnine.com',
        primaryDomain: 'deepbassnine',
    },

    {
        trackerName: 'DigitalCore', // @holy-elbow
        homepageURL: 'https://digitalcore.club/',
        primaryDomain: 'digitalcore',
    },

    {
        trackerName: 'Empornium',
        homepageURL: 'https://www.empornium.sx',
        primaryDomain: 'empornium',
    },

    {
        trackerName: 'E-Hentai', // @holy-elbow
        homepageURL: 'https://e-hentai.org',
        primaryDomain: 'e-hentai',
        otherDomains: ['exhentai'],
    },

    {
        trackerName: 'ExoticaZ', // @fercats99 > @holy-elbow
        homepageURL: 'https://exoticaz.to',
        primaryDomain: 'exoticaz',
    },

    {
        trackerName: 'Femdomcult', // @holy-elbow
        homepageURL: 'https://femdomcult.org',
        primaryDomain: 'femdomcult',
    },

    {
        trackerName: 'GazelleGames',
        homepageURL: 'https://gazellegames.net',
        primaryDomain: 'gazellegames',
    },

    {
        trackerName: 'HappyFappy', // @empUser
        homepageURL: 'https://www.happyfappy.org',
        primaryDomain: 'happyfappy',
    },

    {
        trackerName: 'HDBits',
        homepageURL: 'https://hdbits.org',
        primaryDomain: 'hdbits',
    },

    {
        trackerName: 'IP-Torrents',
        homepageURL: 'https://iptorrents.me',
        primaryDomain: 'iptorrents',
    },

    {
        trackerName: 'JPopsuki', // @tartuffe
        homepageURL: 'https://jpopsuki.eu',
        primaryDomain: 'jpopsuki',
    },

    {
        trackerName: 'Karagarga', // @fercats99
        homepageURL: 'https://karagarga.in',
        primaryDomain: 'karagarga',
    },

    {
        trackerName: 'Kufirc', // @holy-elbow
        homepageURL: 'https://kufirc.com',
        primaryDomain: 'kufirc',
    },

    {
        trackerName: 'Lat-Team',
        homepageURL: 'https://lat-team.com',
        primaryDomain: 'lat-team',
    },

    {
        trackerName: 'Luminarr', // @holy-elbow
        homepageURL: 'https://lumniarr.me',
        primaryDomain: 'luminarr',
    },

    {
        trackerName: 'Materialize',
        homepageURL: 'https://materialize.is',
        primaryDomain: 'materialize',
    },

    {
        trackerName: 'MoreThanTV', // @holy-elbow
        homepageURL: 'https://www.morethantv.me',
        primaryDomain: 'morethantv',
    },

    {
        trackerName: 'MyAnonaMouse',
        homepageURL: 'https://www.myanonamouse.net',
        primaryDomain: 'myanonamouse',
    },

    {
        trackerName: 'Nebulance', // @malefis
        homepageURL: 'https://nebulance.io',
        primaryDomain: 'nebulance',
    },

    {
        trackerName: 'Nyaa',
        homepageURL: 'https://nyaa.si',
        primaryDomain: 'nyaa',
    },

    {
        trackerName: 'Oldtoons',
        homepageURL: 'https://oldtoons.world',
        primaryDomain: 'oldtoons',
    },

    {
        trackerName: 'Orpheus',
        homepageURL: 'https://orpheus.network',
        primaryDomain: 'orpheus',
    },

    {
        trackerName: 'PassThePopcorn',
        homepageURL: 'https://passthepopcorn.me',
        primaryDomain: 'passthepopcorn',
    },

    {
        trackerName: 'Portugas', // @Phreaker
        homepageURL: 'https://portugas.org',
        primaryDomain: 'portugas',
    },

    {
        trackerName: 'PrivateHD', // @holy-elbow
        homepageURL: 'https://privatehd.to',
        primaryDomain: 'privatehd',
    },

    {
        trackerName: 'Redacted',
        homepageURL: 'https://redacted.sh',
        primaryDomain: 'redacted',
    },

    {
        trackerName: 'RetroMoviesClub', // @LilithOfTheValley
        homepageURL: 'https://retro-movies.club',
        primaryDomain: 'retro-movies',
    },

    {
        trackerName: 'Secret-Cinema', // @tartuffe
        homepageURL: 'https://secret-cinema.pw',
        primaryDomain: 'secret-cinema',
    },

    {
        trackerName: 'TheGeeks',
        homepageURL: 'https://thegeeks.click',
        primaryDomain: 'thegeeks',
    },

    {
        trackerName: 'TorrentLeech', // @holy-elbow
        homepageURL: 'https://www.torrentleech.org',
        primaryDomain: 'torrentleech',
    },

    {
        trackerName: 'TV-Vault',
        homepageURL: 'https://tv-vault.me',
        primaryDomain: 'tv-vault',
    },

]


// =================================== quiCKIE SETTINGS ======================================

// The domain of the current site, which MUST be registerd to one of the trackers in the settingsPanelTrackers array
// Example: https://broadcasthe.net/ --> broadcasthe
let trackerDomain = document.location.hostname.match(/^(\w+\.)?(.+?)\..+$/)[2].toLowerCase()

// A simple logger, which will only console log messages when it has been enabled
let logger = new simpleLogger({ enabled: verboseConsoleLogging, scriptName: 'quiCKIE'})

// Everything related to the GM_config library, which is used for creating and presenting the settings panel: https://github.com/sizzlemctwizzle/GM_config
let [ primaryDomain, allPrimaryDomains, primaryDomainToName, primaryDomainToHomepage, trackerNameToPrimaryDomain, presetCount ] = createGMConfigSettingsPanel(trackerDomain)

// Retrieve the settings and presetMenuItems that are relevant to the current tracker
let SETTINGS = getTrackerSettings(primaryDomain)
let presetMenuItems = createPresetItems([SETTINGS.primaryDomain])

// All the emojis that may be displayed on bunnyButtons, defined as a RegExp so that they can be replaced during different stages of the script
const emojiRegex = new RegExp('🐰|🌱|🍁|💎|🏆|💸|🤝|🕓|🧲|🧑|❌|✔️|💾|🧀', 'g')

// The full URL and Path of the current page, useful for figuring out exactly what page you are on using pageURL.match(/regex/)
const pageURL = document.URL
const pagePath = document.location.pathname


// =================================== TRACKER SPECIFIC HANDLING ======================================

// @trackerSpecificHandling
// Because the primaryDomain is unique for each registerd tracker, we can use it to determine what tracker this is and how to proceed from there
if ( primaryDomain == 'animebytes' ) {
    // ----------------------------------- AnimeBytes -----------------------------------
    // Bookmarks | Browse | Collages | Company | Seeding\Snatched\Leeching | Series

    let trackerHandlingOptions = {

        // ---------- REQUIRED ----------

        // A valid CSS selector that is unique to ONLY the download elements (download buttons)
        downloadElementsSelector: 'a[href^="/torrent/"][title="Download torrent"]',

        // ---------- OPTIONAL ----------

        // The font-size of each bunnyButton, useful for re-sizing them to better fit the page
        bunnyButtonfontSize: 'inherit', // Default = 'inherit' || Options = Any percentile | A valid 'font-size' css value

        // The text that will be displayed by each bunnyButton, useful for advanced styling or to remove the surrounding spaces to better fit the page; '🐰'
        bunnyButtonText: ' 🐰 ', // Default = ' 🐰 ' || Options = Any string

        // If the bunnyButton should be placed after the downloadElement.parentElement, which may result in the bunnyButton being on the same row as the downloadElement
        bunnyButtonParentPlacement: false, // Default = false || Options = true | false

        // The separator used between the bunnyButton and the downloadElement
        elementsSeparator: 'automatic', // Default = 'automatic' || options = 'automatic' | Any string | false

        // Additional CSS style properties that will be applied to each bunnyButton, useful for advanced styling
        bunnyButtonAddStyles: '', // Default = '' || Options = A string containing css style properties

        // Additional class names that will be applied to each bunnyButton, useful for advanced styling
        bunnyButtonAddClasses: [], // Default = [] || Options = An array of strings

        // A string representing a valid JavaScript comparison, that if 'true' indicates a torrent has the status of 'seeding', so the bunnyButton emoji will be changed to '🌱' (see the BroadcasTheNet\Empornium\Orpheus\PassThePopcorn\Redacted blocks for examples)
        // The string may start with 'downloadElement' then be followed by a chain of '.closest()' and\or '.querySelector()' methods in order to locate a target element relative to the downloadElement. If the target element is found, the check is considered 'true'
        // If the target element has identifiable text but not attributes, one option is to perform a targetElement.textContent.match(/regex/). If a match is found, the check is considered to be 'true' (see the MyAnonaMouse\Redacted block for examples)
        seedingStatusSelector: null, // Default = null || Options = 'downloadElement...'

        // A string representing a valid JavaScript comparison, that if 'true' indicates a torrent has the status of 'snatched', so the bunnyButton emoji will be changed to '🍁' (see the AnimeBytes\BroadcasTheNet\Empornium\Orpheus\PassThePopcorn\Redacted blocks for examples)
        // The string may start with 'downloadElement' then be followed by a chain of '.closest()' and\or '.querySelector()' methods in order to locate a target element relative to the downloadElement. If the target element is found, the check is considered 'true'
        // If the target element has identifiable text but not attributes, one option is to perform a targetElement.textContent.match(/regex/). If a match is found, the check is considered to be 'true' (see the MyAnonaMouse\Redacted block for examples)
        snatchedStatusSelector: "downloadElement.closest('td').querySelector('a.snatched-torrent')", // Default = null || Options = 'downloadElement...'

        // A string representing a valid JavaScript comparison, that if 'true' indicates a torrent has the status of 'freeleech', so the bunnyButton emoji will be changed to '💎' (see the AnimeBytes\BroadcasTheNet\Empornium\Orpheus\PassThePopcorn\Redacted blocks for examples)
        // The string may start with 'downloadElement' then be followed by a chain of '.closest()' and\or '.querySelector()' methods in order to locate a target element relative to the downloadElement. If the target element is found, the check is considered 'true'
        // If the target element has identifiable text but not attributes, one option is to perform a targetElement.textContent.match(/regex/). If a match is found, the check is considered to be 'true' (see the MyAnonaMouse\Redacted block for examples)
        freeleechStatusSelector: `downloadElement.closest('td').querySelector('img[alt^="Freeleech"]')`, // Default = null || Options = 'downloadElement...'

        // A function that will be called after all the bunnyButtons have been created, useful for advanced styling or further clean-up (see the BakaBT\Empornium\MyAnonaMouse blocks for examples)
        // The 'elements' parameter will be an object consisting of three arrays: elements = { bunnyButtons: [], downloadElements: [], pairedElements:[] }
        // ⚠️ quiCKIE is a NON-DESTRUCTIVE UserScript that does NOT break or destroy the default site elements. This ensures quiCKIE is friendly\compatible with other UserScripts. Always adhere to this principle by only manipulating the bunnyButtons created by quiCKIE itself
        afterBunnyButtonCreation: false, // Default = false || options = false | function(elements) {...}

        // If quiCKIE should repeatedly check for new download elements, which works as a simple approach for handling pagination
        // Only use this on pages that actually contain pagination, which can be filtered by using an if check against the URL: pageURL.match(/pageURLRegex/) ? trackerHandlingOptions.enablePaginationLooping = true : null
        enablePaginationLooping: false, // Default = false || Options = true | false

        // If quiCKIE should mark already processed downloadElements with a special attribute, which will prevent them from being queried twice and ending up with duplicate bunnyButtons, useful when dealing with advanced pagination
        downloadElementsTrackProcessed: false, // Default = false || Options = true | false

        // The name of the downloadElement attribute that contains the torrentURL
        downloadElementsTorrentURLAttribute: 'href', // Default = 'href' || Options = A string matching a attribute name of the download element

        // If quiCKIE should ALWAYS download the .torrent file through the browser before sending it to the torrent client, useful if the torrentURL authentication doesn't actually work
        // Magnet links are ALWAYS sent directly to the torrent client, as they are not proper http links that can be downloaded through the browser
        forceTorrentFile: false, // Default = false || Options = true | false

        // If quiCKIE should attach the right-click presetsMenu to the new bunnyButtons, useful for advanced presetsMenu manipulation
        bunnyButtonAttachPresetsMenu: true, // Default = true || Options = true | false

    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'aither' ) {
    // ----------------------------------- Aither -----------------------------------
    // Bookmarks | Browse | Details | Playlists

    unit3dTrackerHandler('a[href*="/download"]')

} else if ( primaryDomain == 'alpharatio' ) {
    // ----------------------------------- AlphaRatio -----------------------------------
    // Browse | Details | Top 10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'anthelion' ) {
    // ----------------------------------- Anthelion -----------------------------------
    // Browse | Collages | Film

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)


} else if ( primaryDomain == 'avistaz' ) {
    // ----------------------------------- AvistaZ -----------------------------------
    // Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="https://avistaz.to/download/torrent/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'bakabt' ) {
    // ----------------------------------- BakaBT -----------------------------------
    // Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a.download_link[href^="/download/"]',
        bunnyButtonFontSize: '140%',
        bunnyButtonText: '🐰 quiCKIE',
        freeleechStatusSelector: "document.querySelector('span.freeleech')",
        bunnyButtonAddStyles: `
            background: #153245;
            border-radius: 4px;
            border: #B6D3E7 solid 2px;
            color: #B6D3E7;
            display: inline;
            font-weight: normal;
            margin: 0px 5px 0px 5px;
            padding: 3px 4px 4px 4px;
            vertical-align: super;`,

        afterBunnyButtonCreation: function(elements) {
            // The actions to take after the bunnyButtons have been created...

            // Decrease the width of the site DL button so that everything fits onto a single row
            elements.downloadElements[0].style.width = '395px'

        },

    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'beyond-hd' ) {
    // ----------------------------------- Beyond-HD -----------------------------------
    // Browse | Details | Homepage | Library

    unit3dTrackerHandler('a[href^="https://beyond-hd.me/download/"]')

} else if ( primaryDomain == 'bibliotik' ) {
    // ----------------------------------- Bibliotik -----------------------------------
    // Browse | Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/torrents/"][title="Download"]',
        bunnyButtonFontSize: '120%',
        bunnyButtonAddStyles: 'vertical-align: bottom',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'bitporn' ) {
    // ----------------------------------- BitPorn -----------------------------------
    // Browse | Details

    unit3dTrackerHandler('a[href^="https://bitporn.eu/torrents/download/"]')

} else if ( primaryDomain == 'broadcasthe' ) {
    // ----------------------------------- BroadcasTheNet -----------------------------------
    // Browse | Series | Season\Episodes

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        seedingStatusSelector: "downloadElement.closest('td').querySelector('a.tor_highlight_seed')",
        snatchedStatusSelector: "downloadElement.closest('td').querySelector('a.tor_highlight_snatch')",
    }

    // This is a browse page (not Season\Episode), so apply styling to all bunnyButtons
    if ( pageURL.match(/torrents\.php(?!\?id=\d+)/) ) {

        trackerHandlingOptions.afterBunnyButtonCreation = function(elements) {
            // The actions to take after the bunnyButtons have been created...

            // Style all bunnyButtons, giving them a square-type look to more closely match the site buttons
            for ( let bunnyButton of elements.bunnyButtons ) {
                bunnyButton.textContent = '🐰'
                bunnyButton.setAttribute('style', `${bunnyButton.style.cssText}
                    background: #153245;
                    border-radius: 3px;
                    border: #B6D3E7 solid 1px;
                    color: #B6D3E7;
                    font-size: 80%;
                    padding: 2px 2px 2px 2px;
                    vertical-align: unset;`)
            }

        }

    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'cinemaz' ) {
    // ----------------------------------- CinemaZ -----------------------------------
    // Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="https://cinemaz.to/download/torrent/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'clearjav' ) {
    // ----------------------------------- ClearJAV -----------------------------------
    // Bookmarks | Browse | Details | Playlists

    unit3dTrackerHandler('a[href*="/download/"]')

} else if ( primaryDomain == 'deepbassnine' ) {
    // ----------------------------------- DeepBassNine -----------------------------------
    // Album | Artist | Browse

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'digitalcore' ) {
    // ---------------------------------- DigitalCore ---------------------------------
    // Browse | Details | Home

    if ( pageURL.match(/\/torrent\/\d+/) ) {
        // The torrent details page

        let trackerHandlingOptions = {
            downloadElementsSelector: 'a[href^="/api/v1/torrents/download"]:has(i.fa-download)',
            downloadElementsTrackProcessed: true,
            bunnyButtonText: '🐰 quiCKIE',
            bunnyButtonAddStyles: `
                background: #252525;
                border-radius: 3px;
                border: #323232 solid 1px;
                color: #ccc;
                font-size: 12px;
                margin-left: 11.033px;
                padding: 1px 39.817px;
                vertical-align: middle;`

        }

        let observer = new MutationObserver(function(mutations) {

            quickieTrackerHandler(trackerHandlingOptions)
        })

        let target = document.getElementById('contentContainer')
        let config = { childList: true }

        observer.observe(target, config)

    } else if ( pagePath.match(/^\/?$/) ) {
        // The homepage

        let trackerHandlingOptions = {
            downloadElementsSelector: 'a[href^="/api/v1/torrents/download"]',
            downloadElementsTrackProcessed: true,
            enablePaginationLooping: true,
        }

        quickieTrackerHandler(trackerHandlingOptions)

    } else {

        let trackerHandlingOptions = {
            downloadElementsSelector: 'a[href^="/api/v1/torrents/download"]',
            downloadElementsTrackProcessed: true,
        }

        let pageObserver = new MutationObserver(async function(pageMutations) {


            // Wait until the <tbody> of is loaded...
            let tbodyElement = await waitForElement('torrents-table[torrents] tbody', document.getElementById('contentContainer'))


            try {

                let torrentObserver = new MutationObserver(function(torrentMutations) {
                    // The actions to take when there are changes to the <tbody>

                    quickieTrackerHandler(trackerHandlingOptions)

                })

                torrentObserver.observe(tbodyElement, { childList: true })

            } catch(error) {
                return
            }

        })

        let target = document.getElementById('contentContainer')
        let config = { childList: true }

        pageObserver.observe(target, config)

    }

} else if ( primaryDomain == 'e-hentai' ) {
    // ----------------------------------- E-Hentai -----------------------------------
    // Torrents

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="https://ehtracker.org/get/"]',
    }

    if ( pageURL.match(/exhentai/) ) {
        trackerHandlingOptions.downloadElementsSelector = 'a[href^="https://exhentai.org/torrent/"]'
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'empornium' ) {
    // ----------------------------------- Empornium -----------------------------------
    // Browse | Collages | Details | Top10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/torrents.php?action=download&id="]',
        bunnyButtonFontSize: '130%',
        seedingStatusSelector: "downloadElement.parentElement.querySelector('i.torrent_icons.seeding')",
        snatchedStatusSelector: "downloadElement.parentElement.querySelector('i.torrent_icons.snatched')",
        freeleechStatusSelector: "downloadElement.closest('span.torrent_icon_container').querySelector('i.font_icon.unlimited_leech')"
    }

    // This is a collage page, so place the bunnyButton alongside the parentElement
    if ( pageURL.match(/\/collage\/\d+/) ) {

        trackerHandlingOptions.bunnyButtonParentPlacement = true
        trackerHandlingOptions.afterBunnyButtonCreation = function(elements) {
            // The actions to take after the bunnyButtons have been created...

            // If DL buttons are hidden, hide the downloadElement.ParentElement to prevent a empty gap
            if ( SETTINGS.hideDL ) {

                for ( let downloadElement of elements.downloadElements ) {
                    downloadElement.style.display = ''
                    downloadElement.parentElement.style.display = 'none'
                }
            }
        }
    }


    // This is a details page, so apply styling to certain bunnyButtons
    if ( pageURL.match(/torrents\.php\?id=\d+/) ) {

        trackerHandlingOptions.afterBunnyButtonCreation = function(elements) {
            // The actions to take after the bunnyButtons have been created...

            // Determine the seeding\snatched status of this torrent
            let mainDownloadButton = document.querySelector(`#user-sidebar ${trackerHandlingOptions.downloadElementsSelector}`)

            for ( let bunnyButton of elements.bunnyButtons ) {

                // Style the bunnyButtons that match this CSS selector, giving them a bar-type look to more closely match the larger site buttons
                if ( bunnyButton.matches('span.torrent_buttons a.quickie_bunnyButton, #user-sidebar > a.quickie_bunnyButton') ) {

                    bunnyButton.setAttribute('style', `${bunnyButton.style.cssText}
                        border-radius: 5px;
                        font-size: 100%;
                        font-weight: Bold;
                        margin: 0px 8px 0px 0px;
                        padding: 4px 10px 4px 10px;
                        vertical-align: middle;`)

                    if ( bunnyButton.dataset.torrenturl.match(/&usetoken=1/) ) {
                        // This is a Freeleech button
                        bunnyButton.textContent = '💸 Freeleech'
                        bunnyButton.setAttribute('style', `${bunnyButton.style.cssText}border: #A0DA83 solid 1px; color: #A0DA83; background: #113400;`)
                        bunnyButton.setAttribute('data-emojospecified', 'true')

                    } else if ( bunnyButton.dataset.torrenturl.match(/&usetoken=2/) ) {
                        // This is a Doubleseed button
                        bunnyButton.textContent = '🌱 Doubleseed'
                        bunnyButton.setAttribute('style', `${bunnyButton.style.cssText}border: #F09D63 solid 1px; color: #F09D63; background: #431C00`)
                        bunnyButton.setAttribute('data-emojospecified', 'true')
                    } else {
                        // This is a standard Download button
                        bunnyButton.textContent = '🐰 quiCKIE'
                        bunnyButton.setAttribute('style', `${bunnyButton.style.cssText}border: #B6D3E7 solid 1px; color: #B6D3E7; background: #153245;`)

                        // Check if the torrent is seeding\snatched\freeleech
                        mainDownloadButton.closest('.torrent_icon_container').querySelector('i.font_icon.unlimited_leech') != null ? replaceEmojis(bunnyButton, '💎') : null // Freeleech
                        mainDownloadButton.querySelector('i.torrent_icons.snatched') != null ? replaceEmojis(bunnyButton, '🍁') : null // Snatched
                        mainDownloadButton.querySelector('i.torrent_icons.seeding') != null ? replaceEmojis(bunnyButton, '🌱') : null // Seeding
                    }

                }

            }

        }

    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'exoticaz' ) {
    // ----------------------------------- ExoticaZ -----------------------------------
    // Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="https://exoticaz.to/download/torrent/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'femdomcult' ) {
    // ----------------------------------- Femdomcult -----------------------------------
    // Bookmarks | Browse | Collages | Details |

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/torrents.php?action=download&id="]',
        bunnyButtonFontSize: '125%',
        bunnyButtonParentPlacement: true,
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'gazellegames' ) {
    // ----------------------------------- GazelleGames -----------------------------------
    // Browse | Bundles | Game

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        seedingStatusSelector: "downloadElement.closest('td').querySelector('#color_seeding')",
        snatchedStatusSelector: "downloadElement.closest('td').querySelector('#color_snatched')",
        freeleechStatusSelector: "downloadElement.closest('td').querySelector('.freeleech_label, .personal_freeleech_label')",
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'happyfappy' ) {
    // ----------------------------------- HappyFappy -----------------------------------
    // Browse | Collages | Details | Top10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/torrents.php?action=download&id="]',
        bunnyButtonFontSize: '125%',
        bunnyButtonText: '🐰',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'hdbits' ) {
    // ----------------------------------- HDBits -----------------------------------
    // Browse | Details | Film

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a.js-download[href^="/download.php/"]',
        bunnyButtonFontSize: '140%',
        bunnyButtonText: '🐰',
        freeleechStatusSelector: "downloadElement.closest('td').querySelector('a.fl')",
    }

    // This is a details page, so apply styling to the single bunnyButton
    if ( pageURL.match(/details\.php\?id=\d+/) ) {

        trackerHandlingOptions.seedingStatusSelector = "downloadElement.closest('td').querySelector('span.tag_seeding')"
        trackerHandlingOptions.snatchedStatusSelector = "downloadElement.closest('td').querySelector('span.tag_completed')"
        trackerHandlingOptions.freeleechStatusSelector = "downloadElement.closest('td').querySelector('span.tag.freeleech')"

        trackerHandlingOptions.bunnyButtonText = '🐰 quiCKIE'
        trackerHandlingOptions.bunnyButtonAddStyles = `
            background: #153245;
            border-radius: 3px;
            border: #B6D3E7 solid 1px;
            color: #B6D3E7;
            font-size: 90%;
            margin: 0px 2px 0px 8px;
            padding: 2px 5px 2px 5px;
            vertical-align: unset;`

    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'iptorrents' ) {
    // ----------------------------------- IP-Torrents -----------------------------------
    // Browse | Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href*="download.php"]',
        bunnyButtonFontSize: '160%',
        bunnyButtonText: '🐰',
    }

    if ( pageURL.match(/(torrent|details)\.php\?id=\d+/) ) {
        // This is a details page, so apply styling to certain bunnyButtons

        trackerHandlingOptions.afterBunnyButtonCreation = function(elements) {
            // The actions to take after the bunnyButtons have been created...

            elements.bunnyButtons[0].setAttribute('style', `${elements.bunnyButtons[0].style.cssText}
                background: #153245;
                border-radius: 999px;
                border: #B6D3E7 solid 1px;
                font-size: 500%;
                margin: 5px 5px 5px 5px;
                padding: 20px;
                vertical-align: middle;`)

        }
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'jpopsuki' ) {
    // ----------------------------------- JpopSuki -----------------------------------
    // Album | Artist | Browse

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)


} else if ( primaryDomain == 'karagarga' ) {
    // ----------------------------------- Karagarga -----------------------------------
    // Browse | Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/down.php/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'kufirc' ) {
    // ----------------------------------- Kufirc -----------------------------------
    // Browse | Collages | Details | Top10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        bunnyButtonFontSize: "140%",
    }

    pageURL.match(/top10/) ? trackerHandlingOptions.enablePaginationLooping = true : null

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'lat-team' ) {
    // ----------------------------------- Lat-Team -----------------------------------
    // Bookmarks | Browse | Details | Homepage | Playlists

    unit3dTrackerHandler('a[href^="https://lat-team.com/torrents/download"]')

} else if ( primaryDomain == 'luminarr' ) {
    // ----------------------------------- Luminarr -----------------------------------
    // Bookmarks | Browse | Details | Playlists

    unit3dTrackerHandler('a[href^="https://luminarr.me/torrents/download"]')

} else if ( primaryDomain == 'materialize' ) {
    // ----------------------------------- Materialize -----------------------------------
    // Browse | Collages | Details | Top10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href*="torrents.php?action=download&id="]',
        forceTorrentFile: true,
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'morethantv' ) {
    // ----------------------------------- MoreThanTV -----------------------------------
    // Browse | Collages | Details | Top10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/torrents.php?action=download&id="]',
        elementsSeparator: '||',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'myanonamouse' ) {
    // ----------------------------------- MyAnonaMouse -----------------------------------
    // Browse | Details | Homepage | Top10

    if ( pageURL.match(/\/t\/\d+/) ) {
        // The book details page, which doesn't require a MutationObserver

        let trackerHandlingOptions = {
            downloadElementsSelector: 'a[href^="/tor/download.php/"][title*="Download"]',
            seedingStatusSelector: "document.getElementById('DLhistory').textContent.match(/seeding/i)",
            snatchedStatusSelector: "document.getElementById('DLhistory').textContent.match(/seeder/i)",
            freeleechStatusSelector: "document.getElementById('ratio').textContent.match(/freeleech/i)",
            bunnyButtonFontSize: '125%',
            bunnyButtonText: '🐰 quiCKIE',
            bunnyButtonAddStyles: `
            background: #153245;
            border-radius: 8px;
            border: #B6D3E7 solid 1px;
            color: #B6D3E7;
            font-weight: Bold;
            margin: 0px 10px 0px 10px;
            padding: 3px 10px 5px 10px;
            vertical-align: middle;`,

            afterBunnyButtonCreation: function(elements) {
                // The actions to take after the bunnyButtons have been created...

                for ( let bunnyButton of elements.bunnyButtons ) {

                    // If DL buttons are hidden, change bunnyButton display to block so the buttons are properly spaced apart
                    SETTINGS.hideDL == true ? bunnyButton.style.display = 'block' : null

                    // This is the Freeleech Wedge button, so apply different text\styles
                    if ( bunnyButton.dataset.torrenturl.match(/tid=\d+&fl/) ) {
                        bunnyButton.textContent = '🧀 Freeleech'
                        bunnyButton.setAttribute('style', `${bunnyButton.style.cssText}background: #2E2400; border: #CBC29E solid 1px; color: #CBC29E;`)
                    }

                }
            },

        }

        quickieTrackerHandler(trackerHandlingOptions)

    } else {
        // The Search or Homepage, both of which require a MutationObserver

        let trackerHandlingOptions = {
            downloadElementsSelector: 'a[href^="/tor/download.php/"][title*="Download"]',
            bunnyButtonFontSize: '150%',
            bunnyButtonText: '🐰',
            downloadElementsTrackProcessed: true,
            seedingStatusSelector: "downloadElement.closest('tr').querySelector('div.browseAct')",
            snatchedStatusSelector: "downloadElement.closest('tr').querySelector('div.browseInact')",
            freeleechStatusSelector: `downloadElement.closest('tr').querySelector('a[href$="&fl"][title*="Download"]') == null`, // There is no FL Wedge button, so this torrent must already be FL
            afterBunnyButtonCreation: function(elements) {
                // The actions to take after the bunnyButtons have been created...

                // Site download buttons are hidden, so change the Freelech Wedge button to cheese
                if ( SETTINGS.hideDL ) {

                    for ( let bunnyButton of elements.bunnyButtons ) {
                        bunnyButton.dataset.torrenturl.match(/tid=\d+&fl/) ? replaceEmojis(bunnyButton, '🧀') : null

                    }

                }

            },

        }

        let observer = new MutationObserver( function(mutations) {
            // Functionality to run when changes are detected to the target element

           quickieTrackerHandler(trackerHandlingOptions)

        })

        let target = document.getElementById('ssr') // Search table
        pageURL.match(/\/top10Tor\.php/) ? target = document.getElementById('top10') : null // Top 10

        let config = { childList: true }
        observer.observe(target, config)
    }

} else if ( primaryDomain == 'nebulance' ) {
    // ----------------------------------- Nebulance -----------------------------------
    // Bookmarks | Browse | Top 10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        bunnyButtonFontSize: '115%',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'nyaa' ) {
    // ----------------------------------- Nyaa -----------------------------------
    // Browse | Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/download/"][href$=".torrent"]',
    }

    // The Details page, so apply styling to the single bunnyButton
    if ( pageURL.match(/view\/\d+/) ) {
        trackerHandlingOptions.bunnyButtonText = '🐰 quiCKIE'
        trackerHandlingOptions.bunnyButtonAddStyles = `
            background: #153245;
            border-radius: 3px;
            border: #B6D3E7 solid 1px;
            color: #B6D3E7;
            font-size: 90%;
            margin: 0px 2px 0px 8px;
            padding: 2px 5px 2px 5px;
            vertical-align: top;`
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'oldtoons' ) {
    // ----------------------------------- OldToons -----------------------------------
    // Browse | Details | Homepage | Playlists | Similar

    unit3dTrackerHandler('a[href^="https://oldtoons.world/torrents/download/"]')

} else if ( primaryDomain == 'orpheus' ) {
    // ----------------------------------- Orpheus -----------------------------------
    // Album | Artist | Browse | Collages

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        snatchedStatusSelector: "downloadElement.closest('td').querySelector('strong.tl_snatched')",
        freeleechStatusSelector: "downloadElement.closest('td').querySelector('strong.tl_free')"
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'passthepopcorn' ) {
    // ----------------------------------- PassThepopcorn -----------------------------------
    // Film

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        seedingStatusSelector: `downloadElement.closest('td').querySelector('a.torrent-info-link[title="Seeding"]')`,
        snatchedStatusSelector: `downloadElement.closest('td').querySelector('a.torrent-info-link[title="Downloaded"]')`,
        freeleechStatusSelector: `downloadElement.closest('td').querySelector('a.torrent-info-link .torrent-info__download-modifier--free')`
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'portugas' ) {
    // ----------------------------------- Portugas -----------------------------------
    // Browse | Album | Artist

    unit3dTrackerHandler('a[href^="https://portugas.org/torrents/download/"]')

} else if ( primaryDomain == 'privatehd' ) {
    // ----------------------------------- PrivateHD -----------------------------------
    // Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="https://privatehd.to/download/torrent/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'redacted' ) {
    // ----------------------------------- Redacted -----------------------------------
    // Album | Artist | Bookmarks | Browse | Collages | Top10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        seedingStatusSelector: "downloadElement.closest('tr').querySelector('.tl_notice').textContent.match(/seeding/i)",
        snatchedStatusSelector: "downloadElement.closest('tr').querySelector('.tl_snatched')",
        freeleechStatusSelector: "downloadElement.closest('tr').querySelector('.tl_free')"
    }

    if ( !pageURL.match(/collages?\.php\?id=\d+/) ) {
        // This is NOT a collage page, so it doesn't require a MutationObserver

        quickieTrackerHandler(trackerHandlingOptions)

    } else {
        // This is a collage page, which loads DL buttons after the '+' button of the album is clicked (pagination). Setup nested observation.

        trackerHandlingOptions.downloadElementsSelector = `#discog_table tbody ${trackerHandlingOptions.downloadElementsSelector}`
        trackerHandlingOptions.downloadElementsTrackProcessed = true

        let pageObserver = new MutationObserver( async function(pageMutations) {
            // The actions to take when new PAGES are loaded

            // DL elements are already present, meaning the user has the account setting 'Torrent group display' toggled to 'Open'
            document.querySelector(trackerHandlingOptions.downloadElementsSelector) ? quickieTrackerHandler(trackerHandlingOptions) : null

            try {
                // Wait until the <tbody> of a new page is loaded...
                var tbodyElement = await waitForElement('#discog_table tbody', document.getElementById('discog_table'))
            } catch (error) {
                // There was an error, likely this mutation did not contain the waitForElement query target
                logger.debug(error)
                return
            }

            try {

                let tbodyObserver = new MutationObserver( function() {
                    // The actions to take when the '+' button of a <tr> is clicked, which will load the DL buttons onto the page

                    quickieTrackerHandler(trackerHandlingOptions)

                })

                tbodyObserver.observe(tbodyElement, { childList: true } )

            } catch (error) {
                logger.debug(error)
                return

            }

        })

        let target = document.querySelector('div[data-component="TorrentCollageView"]')
        let config = { childList: true }

        pageObserver.observe(target, config)

    }

} else if ( primaryDomain == 'retro-movies' ) {
    // ----------------------------------- RetroMoviesClub -----------------------------------
    // Browse | Details | Homepage | Playlists | Similar

    unit3dTrackerHandler('a[href^="https://retro-movies.club/torrents/download/"]')

} else if ( primaryDomain == 'secret-cinema' ) {
    // ----------------------------------- Secret-Cinema -----------------------------------
    // Artist (no DL links as of script creation) | Browse | Movie

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'thegeeks' ) {
    // ----------------------------------- TheGeeks -----------------------------------
    // Browse | Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="download.php/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'torrentleech' ) {
    // ----------------------------------- TorrentLeech -----------------------------------
    // Browse | Top

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/download/"]',
        bunnyButtonFontSize: '200%',
    }

    if ( pageURL.match(/(browse|top)/) ) {
        // The Browse and Top pages, both of which have pagination
        trackerHandlingOptions.bunnyButtonParentPlacement = true
        trackerHandlingOptions.enablePaginationLooping = true
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( primaryDomain == 'tv-vault' ) {
    // ----------------------------------- TV-Vault -----------------------------------
    // Series

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else {
    // ----------------------------------- NONE -----------------------------------

    console.error(`---------- ⚠️ quiCKIE ⚠️ ----------\n\nThere was no definied trackerHandler block for processing the current primaryDomain: ${primaryDomain}\n\nAll further quiCKIE code will be aborted as to prevent further errors.\n\nℹ️ If you are seeing this message while adding a new tracker, verify that you are using the correct primaryDomain in the 'else if' chain from step #3 of the 'Adding a New Tracker' guide`)

    throw new Error('Aborting further quiCKIE execution')

}


// =================================== THIRD-PARTY INTEGRATIONS ======================================

if ( SETTINGS.thirdPartyScan != 'Off' ) {
    // After a brief delay, query the document for any thirdParty '[data-quickie_torrenturl]' elements for which a bunnyButton should be created
    SETTINGS.thirdPartyDelay < 50 ? SETTINGS.thirdPartyDelay = 200 : null
    scanForThirdPartyTorrentURLS(SETTINGS.thirdPartyDelay)
}

// =================================== SCRIPT FUNCTIONS ======================================

function createGMConfigSettingsPanel(trackerDomain) {
    // Generate and initialize the GM_config settings panel. It has been done in this function for code cleanliness.

    // These array\objects will later allow us to easily cross-reference the settingsPanelTrackers data
    let allPrimaryDomains = []
    let primaryDomainToName = {}
    let primaryDomainToHomepage = {}
    let trackerNameToPrimaryDomain = {}

    let primaryDomain, registeredTracker = false
    for ( let tracker of settingsPanelTrackers ) {
        // Check the current trackerDomain against all the registered trackers to retrieve the trackers primaryDomain

        let trackerName = tracker.trackerName
        let settingsId = tracker.primaryDomain.toLowerCase().trim()
        let otherDomains = tracker.otherDomains

        // Populate the array\objects that will be returned and made global
        allPrimaryDomains.push(settingsId)
        primaryDomainToName[settingsId] = trackerName
        primaryDomainToHomepage[settingsId] = tracker.homepageURL
        trackerNameToPrimaryDomain[trackerName.toLowerCase()] = settingsId

        if ( settingsId == trackerDomain ) {
            // This trackerDomain matches the primaryDomain
            primaryDomain = settingsId
            registeredTracker = true

        } else if ( otherDomains != undefined && otherDomains.includes(trackerDomain) ) {
            // This trackerDomain did not match the primaryDomain, but there are otherDomains and a match was found
            primaryDomain = settingsId
            registeredTracker = true

        }

    }

    logger.info(`primaryDomain: ${primaryDomain}`)

    // Verify that the trackerDomain is registered as an entry in the settingsPanelTrackers object, if not then abort all further exectuion of this script
    if ( registeredTracker == false ) { console.error(`---------- ⚠️ quiCKIE ⚠️ ----------\n\nThe domain of the current site if not registered to a tracker supported by quiCKIE: ${trackerDomain}\n\nAll further quiCKIE code will be aborted as to prevent further errors.\n\nℹ️ If you are seeing this message while adding a new tracker, verify that you have included this trackerDomain to a tracker in Step #2 of the 'Adding a New Tracker' guide`); throw new Error('Aborting further quiCKIE execution') }

    // Determine the saved number of preset fields that should be generated in the settings panel and presets-menu
    let presetCount
    if ( GM_getValue('quiCKIE_config') !== undefined ) {
        // Parse the existing GM_config() settings object
        let quiCKIESettingsObject = JSON.parse(GM_getValue('quiCKIE_config'))

        // Get the previously specified presetCount to determine how many preset rows should be generated
        presetCount = quiCKIESettingsObject['presetCount']

    }

    // New installs will not have a presetCount, so default to 3
    if ( presetCount == undefined ) {
        presetCount = 3
    }

    logger.info(`presetCount: ${presetCount}`)

    // @trackerFieldGeneration
    // This array will later be used to generate the <th> for each column in the settings panel. Create an entry in
    const trackerFieldSuffixes = ['category', 'savePath', 'tags', 'ratioLimit', 'seedTime', 'dlLimit', 'upLimit', 'instance', 'paginationLoop', 'leftClick', 'thirdPartyScan', 'hideDL', 'startPaused', 'subFolder', 'seqPieces', 'autoTMM', 'skipHash']
    let gmConfigTrackerFields = {}
    for ( let primaryDomain of allPrimaryDomains ) {
        // For each tracker (primaryDomain) in the settingsPanelTrackers object, generate the fields that will be used by GM_config() to save\load settings for that primaryDomain

        // --- GM_config() Fields ---
        let generatedTrackerFields = {
            [`${primaryDomain}-${trackerFieldSuffixes[0]}`]: {
                'label': primaryDomainToName[primaryDomain],
                'type': 'text'
            },
            [`${primaryDomain}-${trackerFieldSuffixes[1]}`]: {
                'type': 'text'
            },
            [`${primaryDomain}-${trackerFieldSuffixes[2]}`]: {
                'type': 'text'
            },
            [`${primaryDomain}-${trackerFieldSuffixes[3]}`]: {
                'label': 'Ratio Limit',
                'type': 'float',
                'default': ''
            },
            [`${primaryDomain}-${trackerFieldSuffixes[4]}`]: {
                'label': 'Seed Time',
                'type': 'int',
                'default': ''
            },
            [`${primaryDomain}-${trackerFieldSuffixes[5]}`]: {
                'label': 'Download Limit',
                'type': 'int',
                'default': ''
            },
            [`${primaryDomain}-${trackerFieldSuffixes[6]}`]: {
                'label': 'Upload Limit',
                'type': 'int',
                'default': ''
            },
            [`${primaryDomain}-${trackerFieldSuffixes[7]}`]: {
                'label': 'Instance',
                'type': 'int',
                'default': ''
            },
            [`${primaryDomain}-${trackerFieldSuffixes[8]}`]: {
                'label': 'Pagination Loop',
                'type': 'int',
                'default': ''
            },
            [`${primaryDomain}-${trackerFieldSuffixes[9]}`]: {
                'type': 'select',
                'options': ['Global', 'Tracker', 'Settings', 'Client', 'TorrentFile', 'Nothing'],
                'default': 'Global',
            },
            [`${primaryDomain}-${trackerFieldSuffixes[10]}`]: {
                'type': 'select',
                'options': ['On', 'Off', 'On + 🌎'],
                'default': 'Off',
            },
            [`${primaryDomain}-${trackerFieldSuffixes[11]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${primaryDomain}-${trackerFieldSuffixes[12]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${primaryDomain}-${trackerFieldSuffixes[13]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${primaryDomain}-${trackerFieldSuffixes[14]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${primaryDomain}-${trackerFieldSuffixes[15]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${primaryDomain}-${trackerFieldSuffixes[16]}`]: {
                'type': 'checkbox',
                'default': false
            }

        }

        gmConfigTrackerFields = {...gmConfigTrackerFields, ...generatedTrackerFields}

    }

    // @presetFieldGeneration
    const presetFieldSuffixes = ['preset', 'presetTrackers', 'category', 'savePath', 'tags', 'ratioLimit', 'seedTime', 'dlLimit', 'upLimit', 'instance', 'startPaused', 'subFolder', 'seqPieces', 'autoTMM', 'skipHash']
    let gmConfigPresetsFields = {}
    for (let i = 1; i <= presetCount; i++) {
        // --- GM_config() Fields ---
        let genereatedPresetFields = {
            [`preset-${i}-${presetFieldSuffixes[0]}`]: {
                'type': 'text'
            },
            [`preset-${i}-${presetFieldSuffixes[1]}`]: {
                'type': 'text'
            },
            [`preset-${i}-${presetFieldSuffixes[2]}`]: {
                'type': 'text'
            },
            [`preset-${i}-${presetFieldSuffixes[3]}`]: {
                'type': 'text'
            },
            [`preset-${i}-${presetFieldSuffixes[4]}`]: {
                'type': 'text',
            },
            [`preset-${i}-${presetFieldSuffixes[5]}`]: {
                'label': 'Ratio Limit',
                'type': 'float',
                'default': ''
            },
            [`preset-${i}-${presetFieldSuffixes[6]}`]: {
                'label': 'Seed Time',
                'type': 'int',
                'default': ''
            },
            [`preset-${i}-${presetFieldSuffixes[7]}`]: {
                'label': 'Download Limit',
                'type': 'int',
                'default': ''
            },
            [`preset-${i}-${presetFieldSuffixes[8]}`]: {
                'label': 'Upload Limit',
                'type': 'int',
                'default': ''
            },
            [`preset-${i}-${presetFieldSuffixes[9]}`]: {
                'label': 'Instance',
                'type': 'int',
                'default': ''
            },
            [`preset-${i}-${presetFieldSuffixes[10]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`preset-${i}-${presetFieldSuffixes[11]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`preset-${i}-${presetFieldSuffixes[12]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`preset-${i}-${presetFieldSuffixes[13]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`preset-${i}-${presetFieldSuffixes[14]}`]: {
                'type': 'checkbox',
                'default': false
            }
        }

            gmConfigPresetsFields = {...gmConfigPresetsFields, ...genereatedPresetFields}

    }

    const panelTextData = {
        // The data that will be used as the '.textContent' and '.title' in the settings panel's elements. The key names are the '.toLowerCase()' of trackerFieldSuffixes and presetFieldSuffixes items.

        'globalsTitles': {
            'torrentClient': "─── 🖥️ Torrent Client 🖥️ ───\n\nThe torrent client for where to send torrents\n\nNot all clients will support all the available quiCKIE settings\n\nquiCKIE was initially written for qui, with support for other clients being added much later on. As a result, the names of the various settings may not correlate exactly with what other clients would call them.",
            'presetCount': "─── 🚀 Presets 🚀 ───\n\nThe number of presets that will be generated in the quiCKIE settings panel\n\n⚠️ Lowering this number will remove those rows, which in turn deletes their saved settings",
            'globalLeftClickAction': "─── 🖱️ Left-Click \\ Tap 🖱️ ───\n\nThe action to take when performing a Left-Click\\Tap on a Bunny button\n\nℹ️ Affects all trackers that have the '🖱️' setting set to 'Global'",
            'globalMiddleClickAction': '─── 🖱️ Middle-Click 🖱️ ───\n\nThe action to take when performing a Middle-Click on a BunnyButton',
            'bunnyButtonPlacement': '─── ↔️ Placement  ↔️ ───\n\nThe placement of the BunnyButtons relative to the sites download buttons',
            'thirdPartyDelay': "─── 🤝 3rd Party Delay 🤝 ───\n\nThe delay in milliseconds to wait until scanning for third-party links that have quiCKIE integration\n\nOnly affects trackers that have the '🤝' column set to 'On'\n\nℹ️ This delay only affects the FIRST scan of third-party quiCKIE links, not every scan thereafter",
            'hiddenTrackers': "─── 🙈 Hidden trackers 🙈 ───\n\nA comma separated list of trackers to be removed from the quiCKIE settings panel\n\nUse the name (case-insensitive) displayed in the '🌎 Tracker' column\n\nHover over the tracker name for a '🙈' button that will quickly add the tracker to this hidden list\n\nℹ️ This does not disable quiCKIE on those trackers, it simply hides the tracker from cluttering this settings Panel\n\nExample:  HDBits, secret-cinema, NYAA",
            'globalForcedTorrentFile': '─── 🧲 Torrent File  🧲 ───\n\nForce all BunnyButtons to download the .torrent file through the browser before sending it to the client\n\nℹ️ By default, quiCKIE will determine for itself if the torrentURL can be sent directly to the client or should first be downloaded through the browser\n\nℹ️ Magnet links are ALWAYS sent directly to the client, as they are not proper http links that can be downloaded through the browser',


            'quiURL': "─── 🔗 quiURL 🔗 ───\n\nThe full URL to a qui instance\n\nThis is usually the same URL you can copy-paste from your browser\n\nℹ️ Unless otherwise specified in the '🎯' column, this is the instance that all torrents will be sent to\n\nExample: http://localhost:7476/qui/instances/1\n\n────────────────\n\nSeedbox\\Swizzin users might try...\n\nhttps://username:password@seedboxDomain.com/qui/instances/1",
            'quiApiKey': '─── 🔑 ApiKey 🔑 ───\n\nA valid and active ApiKey created by qui\n\nFrom the qui interface, you can generate a ApiKey by going to...\n\nSettings > API Keys > Create API Key',

            'qBitTorrentURL': "─── 🔗 qBitTorrentURL 🔗 ───\n\nThe full URL to a running qBitTorrent service\n\nThis is usually the same URL you can copy-paste from your browser\n\nExample: http://localhost:8080",
            'qBitTorrentUsername': '─── 🔑 Username 🔑 ───\n\nThe username for logging into qBitTorrent through the web interface',
            'qBitTorrentPassword': '─── 🔑 Password 🔑 ───\n\nThe password for logging into qBitTorrent through the web interface',

            'transmissionURL': "─── 🔗 TransmissionURL 🔗 ───\n\nThe full URL to a running Transmission service\n\nThis is usually the same URL you can copy-paste from your browser\n\nExample: http://localhost:9091\n\nℹ️ If Transmission is not using the default rpc, then specify the complete rpc url\n\nExample: http://localhost:9091/your/custom/rpc",
            'transmissionUsername': '─── 🔑 Username 🔑 ───\n\nThe username for logging into Transmission through the web interface',
            'transmissionPassword': '─── 🔑 Password 🔑 ───\n\nThe password for logging into Transmission through the web interface',

            'delugeURL': "─── 🔗 DelugeURL 🔗 ───\n\nThe full URL to a running Deluge service\n\nThis is usually the same URL you can copy-paste from your browser\n\nExample: http://localhost:8112",
            'delugePassword': '─── 🔑 Password 🔑 ───\n\nThe password for logging into Deluge through the web interface',

            'ruTorrentURL': "─── 🔗 ruTorrentURL 🔗 ───\n\nThe full URL to a running ruTorrent service\n\nThis is usually the same URL you can copy-paste from your browser\n\nExample: http://localhost:8080",
            'ruTorrentUsername': '─── 🔑 Username 🔑 ───\n\nThe username for logging into ruTorrent through the web interface',
            'ruTorrentPassword': '─── 🔑 Password 🔑 ───\n\nThe password for logging into ruTorrent through the web interface',
        },

        'columnText': {
            'tracker': '🌎 Tracker',

            'preset': '🚀 Name',
            'presettrackers': '👀 Trackers',

            'category': '🗃️ Category',
            'savepath': '💾 SavePath',
            'tags': '🏷️ Tags',
            'ratiolimit': '⚖️',
            'seedtime': '🌱',
            'dllimit': '⬇️',
            'uplimit': '⬆️',
            'instance': '🎯',
            'paginationloop': '🔁',
            'leftclick': '🖱️',
            'thirdpartyscan': '🤝',
            'hidedl': '🙈',
            'startpaused': '⏸️',
            'subfolder': '📁',
            'seqpieces': '🧩',
            'autotmm': '🤖',
            'skiphash': '🛡️',

        },

        'columnTitles': {
            'tracker': `─── 🌎 Tracker 🌎 ───\n\nThe tracker (site) for which this row of settings will be applied to\n\nClicking a name below will open a new tab to the tracker's homepage\n\nℹ️ Hovering over a BunnyButton will provide a tooltip of the current tracker settings\n\n⭐ There is currently ${allPrimaryDomains.length} Supported Trackers!`,

            'preset': "─── 🚀 Name 🚀 ───\n\nThe name that will be displayed in the presets menu (right-click)\n\nPresets without a name will NOT be displayed. Both text and emojis are supported\n\nℹ️ Hovering over a entry in the presets menu will provide a tooltip of the preset's settings\n\nℹ️ Naming a preset 'Send', 'SendPaused', 'Settings', 'Client', or 'TorrentFile' will display special menu items. Hover over them for details.\n\nℹ️ To display a divider in your list, pick one of these characters and use it as the name...\n- = . [space]",
            'presettrackers': "─── 👀 Preset Trackers 👀 ───\n\nA comma seperated list of trackers on which to display this preset\n\nUse the name (case-insensitive) displayed in the '🌎 Tracker' column\n\nPresets without any trackers listed will NOT be displayed\n\nℹ️ Use the * wildcard to display this preset on ALL trackers\n\nExample:  HDBits, secret-cinema, NYAA",

            'category': '─── 🗃️ Category 🗃️ ───\n\nSpecify the category to apply to these these torrents',
            'savepath': '─── 💾 Save Path 💾 ───\n\nSpecify the full-path for where to save these torrents\n\nWhen this setting is used, these torrents will have ATMM (Auto Torrent Management Mode) disabled. This means that changing the category later on will NOT move the torrents based on the new category. You will need to enable ATMM for these torrents if you would like to get that behaviour back\n\n⚠️ The path MUST be accessible and writable by the torrent client itself, otherwise it will use the default save path',
            'tags': '─── 🏷️ Tags 🏷️ ───\n\nA comma seperated list of tags to apply to these torrents (case-sensitive)\n\nExample:  Media, Movies, Private',
            'ratiolimit': '─── ⚖️ Ratio Limit ⚖️ ───\n\nStop the torrents when they have seeded to the specified ratio limit\n\nℹ️ Use -1 to stop the torrents immediately after downloading is complete',
            'seedtime': '─── 🌱 Seed Time 🌱 ───\n\nStop the torrents when they have seeded the specified number of minutes\n\nℹ️ Use -1 to stop the torrents immediately after downloading is complete\n\n⚠️ A clients reported seedtime and a trackers recorded seedtime are not always equal. Use caution to avoid Hit-and-Runs.',
            'dllimit': '─── ⬇️ Download Limit ⬇️ ───\n\nThe speed limit in KB/s to apply when downloading these torrents',
            'uplimit': '─── ⬆️ Upload Limit ⬆️ ───\n\nThe speed limit in KB/s to apply when uploading\\seeding these torrents',
            'instance': '─── 🎯 Target Instance 🎯 ───\n\nSpecify a particular qui instance ID for where to send these torrents\n\nLeave this field blank to use the global instance saved as the quiURL\n\nℹ️ This does NOT support a full url, only a qui instance ID number',
            'paginationloop': "─── 🔁 Pagination Loop 🔁 ───\n\nSpecify a time in milliseconds to repeatedly scan the page for new download buttons\n\nThis is useful for sites with pagination, which is when the browser doesn't do a full refresh between pages\\searches. Since the page isn't actually refreshing, your UserScripts won't be triggered and you'll end up without BunnyButtons for the new DL buttons\n\nℹ️ For UNIT3D trackers, this feature is automatically enabled on certain pages\n\n⚠️ You should NOT enable this feature unless you are on a site that actually has pagination\n\n⚠️ Setting this too low can impact your browser, so the recommended time is +2000ms while the minimum is 500ms",
            'thirdpartyscan': "─── 🤝 3rd Party Integrations 🤝 ───\n\nScan for third-party DL (Download) buttons with quiCKIE integration\n\nThe developer of a third-party UserScript may setup quiCKIE integration for their UserScript, that way the DL buttons their UserScript generates will also receive a BunnyButton\n\nℹ️ On + 🌎: Allow third-party UserScripts to specify for which quiCKIE supported tracker their BunnyButtons should pull tracker settings from. If this is not specified by the third-party UserScript, the settings for the current tracker will be used\n\n⚠️ You should NOT enable this feature unless you have installed a trusted UserScript that actually has quiCKIE integration",
            'leftclick' : "─── 🖱️ Left-Click \\ Tap 🖱️ ───\n\nSpecify what action should be taken when the BunnyButton is left-clicked on a PC or tapped on a mobile\n\nℹ️ The 'Global' option will use the setting specified above",
            'hidedl': "─── 🙈 Hide Download Button 🙈 ───\n\nHide the trackers download button from view\n\nThis will NOT apply to any DL buttons from third-party UserScripts\n\nℹ️ Hiding is not the same as removing. The button will still be there, it will just have a css style of 'display: none' applied making it hidden and unclickable. This may result in weird gaps\\results on some pages",
            'startpaused': "─── ⏸️ Start Paused ⏸️ ───\n\nPause torrents when they are added so that they do not automatically begin downloading\n\nUseful for when you want to give yourself a chance to pick which files of the torrent should be downloaded\n\nℹ️ Shift-Ctrl-Click on a BunnyButton or Preset to override the Start Paused setting to be True",
            'subfolder': '─── 📁 SubFolder 📁 ───\n\nFor single-file torrents, create a subfolder where the file will be saved into\n\nℹ️ This has no affect on torrents that are already in their own folder\n\nExample: audioBookFile.m4b --> audioBookFile/audioBookFile.m4b',
            'seqpieces': '─── 🧩 Sequential Piece Download 🧩 ───\n\nDownload torrent pieces sequentially\n\nThis behaviour results in the files being downloaded in-order and also being capable of playback while downloading\n\n⚠️ This may impact download speeds',
            'autotmm': "─── 🤖 Auto Torrent Management 🤖 ───\n\nFor these torrents, enable Auto Torrent Management\n\n⚠️ This will download the torrent to a folder based on the '🗃️ Category', ignoring whatever is specified in the '💾 Save Path'",
            'skiphash': '─── 🛡️ Skip Hash Check 🛡️ ───\n\nWhen Adding torrents, skip the initial hash check\n\n⚠️ Hash checks are used to verify file integrity and prevent corrupted data, although this check may take a long time with larger torrents. Know what you are doing before enabling this.',

        }

    }

    // Import the fonts used by the Settings Panel
    GM_addStyle("@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Roboto+Condensed:wght@500&display=swap');")

    // The element the settings panel will be appended to, so that it's not a floating iFrame and can be inspected.
    let configFrame = document.createElement('div')
    document.body.appendChild(configFrame)

    let reloadWindow = false
    // The quiCKIE settings panel, which can then be displayed by calling 'GM_config.open()'
    GM_config.init({
        'id': 'quiCKIE_config',
        'frame': configFrame,
        'title': `
            <div>
                <div style="padding: 30px 0px 0px 0px"></div>
                🐰
                <span style="user-select: none; background: none; background-color: #FFFFFF; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-filter: brightness(110%); filter: brightness(110%); text-shadow: 0 0 20px rgba(0, 124, 255, 0.60); transition: all 0.3s; font-weight: bold; padding: 10px 0px 10px 0px">
                    <a href="${GM_info.script.homepage}" target="_blank" style="font-family: 'Lilita One', 'Roboto Condensed', Tahoma, Geneva, sans-serif; font-size: 35px; font-weight: 400; font-style: normal; color: #FFFFFF; text-decoration: none; background: none; line-height: 30px">quiCKIE</a>
                </span>
                🐰
                <div style="margin: 15px 0px 0px 0px;"><span style="color: #b7b7b7; display: block; font-size: 14px; font-weight: 300">★ Hover over emojis for details ★ </span></div>
            </div>
        `,

        'fields': {...{
            // Merge these two field objects so that GM_config reads them properly

            'presetCount': {
                'label': '🚀 Presets:',
                'type': 'int',
                'default': 3,
            },
            'globalLeftClickAction': {
                'label': '🖱️ Left-Click \\ Tap:',
                'type': 'select',
                'options': ['Tracker', 'Settings', 'Client', 'TorrentFile', 'Nothing'],
                'default': 'Tracker',
            },
            'globalMiddleClickAction': {
                'label': '🖱️ Middle-Click:',
                'type': 'select',
                'options': ['Tracker', 'Settings', 'Client', 'TorrentFile', 'Nothing'],
                'default': 'Client',
            },
            'bunnyButtonPlacement': {
                'label': '↔️ Placement:',
                'type': 'select',
                'options': ['After', 'Before'],
                'default': 'After',
            },
            'globalForcedTorrentFile': {
                'label': '🧲 Torrent File:',
                'type': 'checkbox',
                'default': false
            },
            'hiddenTrackers': {
                'label': '🙈 Hidden Trackers:',
                'type': 'text',
                'default': '',
            },
            'thirdPartyDelay': {
                'label': '🤝 Delay:',
                'type': 'int',
                'default': 2000,
            },
            'torrentClient': {
                'label': '🖥️ Client:',
                'type': 'select',
                'options': ['qui', 'qBitTorrent', 'Transmission', 'Deluge', 'ruTorrent 🛠️'],
                'default': 'qui',
            },
            'settingsImport' : {
                'label': 'Import Settings',
                'type': 'button',
                'size': 25,
                'click': function() {
                    // Prompt the user to select a file for which to import GM_config settings

                    let inputElement = document.createElement('input');
                    inputElement.type = 'file';

                    inputElement.onchange = (event) => {

                        // Getting a hold of the file reference
                        let file = event.target.files[0]

                        // Setting up the reader
                        let reader = new FileReader()
                        reader.readAsText(file,'UTF-8')

                        // Here we tell the reader what to do when it's done reading...
                        reader.onload = (readerEvent) => {

                            let textContent = readerEvent.target.result // this is the content!

                            try {

                                // Parse the content of the selected file, making sure it is valid JSON
                                let quickieSettings = JSON.stringify(JSON.parse(textContent))

                                GM_setValue('quiCKIE_config', quickieSettings)

                                window.location.reload()

                            } catch (error) {
                                // The JSON parse has failed, so abort the import
                                logger.error(error)
                                window.alert(`quiCKIE\n\nThe imported settings file was not valid JSON\n\nThe settings were not imported`)
                            }
                       }

                    }

                    inputElement.click()

                },
            },
            'settingsExport' : {
                'label': 'Export Settings',
                'type': 'button',
                'size': 25,
                'click': function() {
                    // Export GM_Config settings to a file

                    // Pretty-print the settings string to make it easier to read
                    let jsonParsed = JSON.parse(GM_getValue('quiCKIE_config'))

                    // convert preset-X-preset to preset-X-name (for v1.5)
                    for (let i = 1; i <= presetCount; i++) {
                        let nameValue = jsonParsed[`preset-${i}-preset`]
                        jsonParsed[`preset-${i}-name`] = nameValue
                    }

                    let jsonString = JSON.stringify(jsonParsed, null, 4)

                    // Save the quiCKIE settings to a local file
                    saveToFile(jsonString, `quiCKIE-v${GM_info.script.version}-${new Date().toISOString().split('T')[0]}.json`)

                },
            },


            // ----- qui -----
            'quiURL': {
                'label': '🔗 qui:',
                'type': 'text',
            },
            'quiApiKey': {
                'label': '🔑 ApiKey:',
                'type': 'text',
            },

            // ----- qBitTorrent -----
            'qBitTorrentURL': {
                'label': '🔗 qBitTorrent:',
                'type': 'text',
            },
            'qBitTorrentUsername': {
                'label': '🧑 Username:',
                'type': 'text',
            },
            'qBitTorrentPassword': {
                'label': '🔑 Password:',
                'type': 'text',
            },

            // ----- Transmission -----
            'transmissionURL': {
                'label': '🔗 Transmission:',
                'type': 'text',
            },
            'transmissionUsername': {
                'label': '🧑 Username:',
                'type': 'text',
            },
            'transmissionPassword': {
                'label': '🔑 Password:',
                'type': 'text',
            },

            // ----- Deluge -----
            'delugeURL': {
                'label': '🔗 Deluge:',
                'type': 'text',
            },
            'delugePassword': {
                'label': '🔑 Password:',
                'type': 'text',
            },

            // ----- ruTorrent -----
            'ruTorrentURL': {
                'label': '🔗 ruTorrent:',
                'type': 'text',
            },
            'ruTorrentUsername': {
                'label': '🧑 Username:',
                'type': 'text',
            },
            'ruTorrentPassword': {
                'label': '🔑 Password:',
                'type': 'text',
            },

            'welcomeMessage': {
                'type': 'hidden',
                'default': 'show',
            },
        }, ...gmConfigTrackerFields, ...gmConfigPresetsFields},
        'events': {
            'open': function (doc) {
                // Actions to take When GM_config.open() is called...

                reloadWindow = false

                let panelStyle = this.frame.style
                panelStyle.backdropFilter = 'blur(9px)'
                panelStyle.background = '#191d2aa3'
                panelStyle.border = '1px solid #2C3E50'
                panelStyle.borderRadius = '10px'
                panelStyle.boxShadow = '0px 0px 15px #2C3E50'
                panelStyle.color = '#ffffff'
                panelStyle.height = 'auto'
                panelStyle.inset = '50% auto auto 50%'
                panelStyle.lineHeight = '22px'
                panelStyle.margin = '0'
                panelStyle.maxHeight = '95%'
                panelStyle.padding = '0px 0px'
                panelStyle.position = 'fixed'
                panelStyle.transform = 'translate(-50%,-50%)'
                panelStyle.width = '1650px'
                panelStyle.overflowY = 'scroll'
                panelStyle.touchAction = 'pan-x pan-y'

                // ----------------------------------- TRACKERS TABLE -----------------------------------
                // Convert the various primaryName <div> elements created by GM_config() into a <table> with columns/rows

                let table = document.createElement('table')
                table.id = 'quiCKIE_config_tracker_table'
                table.classList.add('quiCKIE_config_table')

                let tcolg = document.createElement('colgroup')
                tcolg.id = 'quiCKIE_config_tracker_table_colg'
                tcolg.classList.add('quiCKIE_config_table_tcolg')
                table.appendChild(tcolg)

                let thead = document.createElement('thead')
                thead.id = 'quiCKIE_config_tracker_table_thead'
                thead.classList.add('quiCKIE_config_table_thead')
                table.appendChild(thead)

                let tbody = document.createElement('tbody')
                tbody.id = 'quiCKIE_config_tracker_table_tbody'
                tbody.classList.add('quiCKIE_config_table_tbody')
                table.appendChild(tbody)

                // Insert the <table> after the GM_config header
                document.getElementById('quiCKIE_config_header').insertAdjacentElement('afterend', table)

                // Generate the <col> (column) and <th> (table header) for each settings column
                let headersRow = document.createElement('tr')
                headersRow.classList.add('quiCKIE_config_table_thead_tr')


                let tableHeaders = [...['tracker'], ...trackerFieldSuffixes]
                for ( let columnHeader of tableHeaders ) {
                    columnHeader = columnHeader.toLowerCase()

                    let columnGroupElement = document.createElement('col')
                    columnGroupElement.id = `quiCKIE_config_tracker_table_colg_col_${columnHeader}`
                    columnGroupElement.classList.add(`quiCKIE_config_table_colg_col`)
                    columnGroupElement.span = 1
                    tcolg.appendChild(columnGroupElement)

                    let headerElement = document.createElement('th')
                    headerElement.id = `quiCKIE_config_tracker_table_thead_th_${columnHeader}`
                    headerElement.classList.add('quiCKIE_config_table_thead_th')
                    headerElement.textContent = panelTextData.columnText[`${columnHeader}`]
                    headerElement.setAttribute('title', panelTextData.columnTitles[`${columnHeader}`])
                    headersRow.appendChild(headerElement)
                }

                // Append the headers to the <thead> (tableHeader) element
                thead.appendChild(headersRow)

                for ( let panelDomain of allPrimaryDomains ) {
                    // For each tracker, create 1 <tr> (tablerow). For each <tr>, create 1 <td> (tabledata) to contain the tracker's hyperlink. Create the <a> hyperlink then move the tracker's label into that <a> element.

                    // 1 <tr> for this tracker, appended it to the <tbody> (tableBody)
                    let tableRow = document.createElement('tr')
                    tableRow.id = `quiCKIE_config_tracker_table_tr_${panelDomain}`
                    tableRow.classList.add('quiCKIE_config_table_tbody_tr')
                    tbody.appendChild(tableRow)

                    // 1 <td> to hold the trackerName for this tracker, appended it to the <tr>
                    let labelData = document.createElement('td')
                    labelData.classList.add('quiCKIE_config_table_td_label')
                    tableRow.appendChild(labelData)

                    // The <a> element to hold the trackerHomepage, append it to the <td>
                    let trackerHyperlinkElement = document.createElement('a')
                    trackerHyperlinkElement.href = primaryDomainToHomepage[panelDomain]
                    trackerHyperlinkElement.target = '_blank'
                    labelData.appendChild(trackerHyperlinkElement)

                    // Move the trackerLabel field into the <a> hyperlink
                    let trackerLabelElement = document.getElementById(`quiCKIE_config_${panelDomain}-category_field_label`)
                    trackerLabelElement.removeAttribute('for')
                    trackerLabelElement.classList.add('quiCKIE_config_field_tracker_label')
                    trackerHyperlinkElement.appendChild(trackerLabelElement)

                    // The field suffixes as specified in @trackerFieldGeneration
                    for (let fieldSuffix of trackerFieldSuffixes) {
                        // Create a <td> for each input field and append it to the torrents <tr>. Move the GM_config field into that <td>

                        // Create the <td> and append it to the torrents <tr>
                        let dataElement = document.createElement('td')
                        dataElement.classList.add('quiCKIE_config_table_tbody_td_field')
                        dataElement.classList.add(`quiCKIE_config_table_td_${fieldSuffix}`)
                        tableRow.appendChild(dataElement)

                        // Move the GM_Config field into the <td>
                        let fieldElement = document.getElementById(`quiCKIE_config_field_${panelDomain}-${fieldSuffix}`)
                        fieldElement.setAttribute('data-fieldtype', fieldSuffix)
                        dataElement.appendChild(fieldElement)

                        // Clean-up: Remove the now empty GM_config <div> element
                        document.getElementById(`quiCKIE_config_${panelDomain}-${fieldSuffix}_var`).remove()

                    }

                }


                // ----------------------------------- PRESETS TABLE -----------------------------------
                if ( presetCount > 0 ) {
                    // Convert the various preset <div> elements created by GM_config() into a <table> with columns/rows
                    table = document.createElement('table')
                    table.id = 'quiCKIE_config_preset_table'
                    table.classList.add('quiCKIE_config_table')

                    tcolg = document.createElement('colgroup')
                    tcolg.id = 'quiCKIE_config_preset_table_colg'
                    tcolg.classList.add('quiCKIE_config_table_tcolg')

                    thead = document.createElement('thead')
                    thead.id = 'quiCKIE_config_preset_table_thead'
                    thead.classList.add('quiCKIE_config_table_thead')

                    tbody = document.createElement('tbody')
                    tbody.id = 'quiCKIE_config_preset_table_tbody'
                    tbody.classList.add('quiCKIE_config_table_tbody')

                    table.appendChild(tcolg)
                    table.appendChild(thead)
                    table.appendChild(tbody)

                    // Insert the <table> after the tracker table
                    document.getElementById('quiCKIE_config_tracker_table').insertAdjacentElement('afterend', table)

                    // Create the "Presets" header element
                    let presetsHeader = document.createElement('div')
                    presetsHeader.setAttribute('style', 'font-size: 20pt; text-align: center; padding: 0px 0px 10px 0px;')
                    presetsHeader.innerHTML = `
                🚀
                <span style="user-select: none; background: none; background-color: #FFFFFF; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-filter: brightness(110%); filter: brightness(110%); text-shadow: 0 0 20px rgba(0, 124, 255, 0.60); transition: all 0.3s; font-weight: bold; padding: 10px 0px 10px 0px">
                    <span href="${GM_info.script.homepage}" target="_blank" style="font-family: 'Lilita One', 'Roboto Condensed', Tahoma, Geneva, sans-serif; font-size: 35px; font-weight: 400; font-style: normal; color: #FFFFFF; text-decoration: none; background: none; line-height: 30px">Presets</span>
                </span>
                🚀
                `

                    // presetsHeader.setAttribute('style', "text-align: center; background: none; text-shadow: 0 0 20px rgba(0, 124, 255, 0.60); padding: 10px 0px 10px 0px; font-family: 'Lilita One', 'Roboto Condensed', Tahoma, Geneva, sans-serif; font-size: 35px; font-weight: 400; font-style: normal; line-height: 30px")

                    document.getElementById('quiCKIE_config_tracker_table').insertAdjacentElement('afterend', presetsHeader)

                    // Generate <th> (table header) for each column
                    headersRow = document.createElement('tr')
                    headersRow.classList.add('quiCKIE_config_table_thead_tr')

                    tableHeaders = [...presetFieldSuffixes]
                    for ( let columnHeader of tableHeaders ) {
                        columnHeader = columnHeader.toLowerCase()

                        let columnGroupElement = document.createElement('col')
                        columnGroupElement.id = `quiCKIE_config_preset_table_colg_col_${columnHeader}`
                        columnGroupElement.classList.add(`quiCKIE_config_preset_table_colg_col`)
                        columnGroupElement.span = 1
                        tcolg.appendChild(columnGroupElement)

                        let headerElement = document.createElement('th')
                        headerElement.id = `quiCKIE_config_preset_table_thead_th_${columnHeader}`
                        headerElement.classList.add('quiCKIE_config_preset_table_thead_th')
                        headerElement.textContent = panelTextData.columnText[`${columnHeader}`]
                        headerElement.setAttribute('title', panelTextData.columnTitles[`${columnHeader}`])

                        headersRow.appendChild(headerElement)
                    }

                    // Append the headers to the <thead> (tableHeader) element
                    thead.appendChild(headersRow)

                    for ( let i = 1; i <= presetCount ; i++) {
                        // For each preset, create 1 <tr> (tablerow). For each field of that preset, create 1 <td> (tabledata). Populate each <td> with 1 field from that preset.

                        // 1 <tr> for this preset, appended to the <tbody> (tableBody)
                        let tableRow = document.createElement('tr')
                        tableRow.classList.add('quiCKIE_config_table_tbody_tr')
                        tbody.appendChild(tableRow)


                        // The field suffixes as specified in @presetFieldGeneration
                        for (let fieldSuffix of presetFieldSuffixes) {
                            // Create a <td> for each input field and move the GM_config field into it

                            let dataElement = document.createElement('td')
                            dataElement.classList.add('quiCKIE_config_table_tbody_td_field')
                            dataElement.classList.add(`quiCKIE_config_table_td_${fieldSuffix}`)

                            let fieldElement = document.getElementById(`quiCKIE_config_field_preset-${i}-${fieldSuffix}`)
                            fieldElement.setAttribute('data-fieldtype', fieldSuffix)

                            // Move the GM_Config field into the <td> and then the <td> into the <tr>
                            dataElement.appendChild(fieldElement)
                            tableRow.appendChild(dataElement)

                            // Clean-up: Remove the now empty GM_config element
                            document.getElementById(`quiCKIE_config_preset-${i}-${fieldSuffix}_var`).remove()

                        }

                    }

                    // Create the list of selectable items that appears when typing to the presetTrackers field
                    let trackerTitles = Object.entries(primaryDomainToName).sort().map (
                        ([key, value]) => [value]

                    )

                    let datalistElement = document.createElement('datalist')
                    datalistElement.id = 'presetTrackersList'

                    // Append the list somewhere nearby, in this case into the presetTrackers column
                    document.getElementById('quiCKIE_config_preset_table_thead_th_presettrackers').appendChild(datalistElement)


                    for ( let tracker of trackerTitles ) {
                        let datalistItem = document.createElement('option')
                        datalistItem.value = tracker
                        datalistElement.appendChild(datalistItem)
                    }

                    let allPresetTrackersField = table.querySelectorAll('input[data-fieldtype="presetTrackers"]')

                    for ( let presetField of allPresetTrackersField ) {
                        // Associate the datalistElement with each presetTrackers input field
                        presetField.setAttribute('list', 'presetTrackersList')
                    }


                }


                // ----------------------------------- TIDY UP THE SETTINGS PANEL -----------------------------------

                // Remove the tracker rows that should be hidden
                for ( let trackerLabel of GM_config.get('hiddenTrackers').split(',') ) {
                    trackerLabel = trackerLabel.toLowerCase().trim()
                    let primaryDomain = trackerNameToPrimaryDomain[trackerLabel]
                    let trackerRow = document.getElementById(`quiCKIE_config_tracker_table_tr_${primaryDomain}`)
                    trackerRow ? trackerRow.remove() : null
                }


                // For each tracker, add the hideButton that will remove the table row and add the tracker to the hidden list
                for ( let trackerLabelData of document.querySelectorAll('.quiCKIE_config_table_td_label') ) {
                    let trackerRow = trackerLabelData.parentElement

                    let hideButton = document.createElement('a')
                    hideButton.textContent = '🙈 '
                    hideButton.style.display = 'none'
                    hideButton.style.cursor = 'pointer'
                    hideButton.addEventListener('click', () => {
                        let hiddenTrackersField = document.getElementById('quiCKIE_config_field_hiddenTrackers')
                        let hiddenTrackers = hiddenTrackersField.value.split(',')
                        hiddenTrackers.push(trackerLabelData.children[1].textContent)
                        hiddenTrackers.sort()

                        hiddenTrackersField.value = hiddenTrackers.toString().match(/^,?(.*)/)[1]

                        trackerRow.remove()
                    })

                    trackerLabelData.addEventListener('mouseover', () => { hideButton.style.display = '' } )
                    trackerLabelData.addEventListener('mouseout', () => { hideButton.style.display = 'none'} )


                    trackerLabelData.insertBefore(hideButton, trackerLabelData.firstElementChild)

                }

                // Set the placeholder examples for the various input fields
                try {
                    document.getElementById('quiCKIE_config_field_quiURL').placeholder = 'http://localhost:7476/qui/instances/1'
                    document.getElementById('quiCKIE_config_field_quiApiKey').placeholder = 'abc123'

                    document.getElementById('quiCKIE_config_field_qBitTorrentURL').placeholder = 'http://localhost:8080'
                    document.getElementById('quiCKIE_config_field_qBitTorrentUsername').placeholder = 'abc123'
                    document.getElementById('quiCKIE_config_field_qBitTorrentPassword').placeholder = 'abc123'

                    document.getElementById('quiCKIE_config_field_transmissionURL').placeholder = 'http://localhost:9091'
                    document.getElementById('quiCKIE_config_field_transmissionUsername').placeholder = 'abc123'
                    document.getElementById('quiCKIE_config_field_transmissionPassword').placeholder = 'abc123'

                    document.getElementById('quiCKIE_config_field_delugeURL').placeholder = 'http://localhost:8112'
                    document.getElementById('quiCKIE_config_field_delugePassword').placeholder = 'abc123'

                    document.getElementById('quiCKIE_config_field_ruTorrentURL').placeholder = 'http://localhost:8080'
                    document.getElementById('quiCKIE_config_field_ruTorrentUsername').placeholder = 'abc123'
                    document.getElementById('quiCKIE_config_field_ruTorrentPassword').placeholder = 'abc123'

                    document.getElementById('quiCKIE_config_field_hiddenTrackers').placeholder = 'HDBits, secret-cinema, NYAA'
                    document.getElementById('quiCKIE_config_field_broadcasthe-savePath').placeholder = '/downloads/BroadcasTheNet'
                    document.getElementById('quiCKIE_config_field_broadcasthe-category').placeholder = 'BroadcasTheNet'
                    document.getElementById('quiCKIE_config_field_broadcasthe-tags').placeholder = 'series, media'
                    document.getElementById('quiCKIE_config_field_broadcasthe-ratioLimit').placeholder = '8.50'
                    document.getElementById('quiCKIE_config_field_broadcasthe-seedTime').placeholder = '1440'
                    document.getElementById('quiCKIE_config_field_broadcasthe-dlLimit').placeholder = '10000'
                    document.getElementById('quiCKIE_config_field_broadcasthe-upLimit').placeholder = '5000'
                    document.getElementById('quiCKIE_config_field_broadcasthe-instance').placeholder = '2'
                    document.getElementById('quiCKIE_config_field_broadcasthe-paginationLoop').placeholder = '3000'

                    document.getElementById('quiCKIE_config_field_gazellegames-savePath').placeholder = '/downloads/GazelleGames'
                    document.getElementById('quiCKIE_config_field_gazellegames-category').placeholder = 'GazelleGames'
                    document.getElementById('quiCKIE_config_field_gazellegames-tags').placeholder = 'games'
                    document.getElementById('quiCKIE_config_field_gazellegames-ratioLimit').placeholder = '5.75'
                    document.getElementById('quiCKIE_config_field_gazellegames-seedTime').placeholder = '10080'
                    document.getElementById('quiCKIE_config_field_gazellegames-dlLimit').placeholder = '12000'
                    document.getElementById('quiCKIE_config_field_gazellegames-upLimit').placeholder = '15000'
                    document.getElementById('quiCKIE_config_field_gazellegames-instance').placeholder = '3'
                    document.getElementById('quiCKIE_config_field_gazellegames-paginationLoop').placeholder = '2000'

                    document.getElementById('quiCKIE_config_field_nyaa-savePath').placeholder = '/downloads/Nyaa'
                    document.getElementById('quiCKIE_config_field_nyaa-category').placeholder = 'Nyaa'
                    document.getElementById('quiCKIE_config_field_nyaa-tags').placeholder = 'anime, media, public'
                    document.getElementById('quiCKIE_config_field_nyaa-ratioLimit').placeholder = '1.25'
                    document.getElementById('quiCKIE_config_field_nyaa-seedTime').placeholder = '40320'
                    document.getElementById('quiCKIE_config_field_nyaa-dlLimit').placeholder = '25000'
                    document.getElementById('quiCKIE_config_field_nyaa-upLimit').placeholder = '5000'
                    document.getElementById('quiCKIE_config_field_nyaa-instance').placeholder = '2'
                    document.getElementById('quiCKIE_config_field_nyaa-paginationLoop').placeholder = '2000'

                    document.getElementById('quiCKIE_config_field_secret-cinema-savePath').placeholder = '/downloads/Secret-Cinema'
                    document.getElementById('quiCKIE_config_field_secret-cinema-category').placeholder = 'Secret-Cinema'
                    document.getElementById('quiCKIE_config_field_secret-cinema-tags').placeholder = 'films, media, private'
                    document.getElementById('quiCKIE_config_field_secret-cinema-ratioLimit').placeholder = '3.25'
                    document.getElementById('quiCKIE_config_field_secret-cinema-seedTime').placeholder = '80640'
                    document.getElementById('quiCKIE_config_field_secret-cinema-dlLimit').placeholder = '18000'
                    document.getElementById('quiCKIE_config_field_secret-cinema-upLimit').placeholder = '7500'
                    document.getElementById('quiCKIE_config_field_secret-cinema-instance').placeholder = '3'
                    document.getElementById('quiCKIE_config_field_secret-cinema-paginationLoop').placeholder = '5000'

                } catch (error) {
                    // Likely an error from the trackerRow having been hidden already
                }

                // Move global settings below the header
                let settingsDivFirst = document.createElement('div')
                settingsDivFirst.id = 'quiCKIE_settingsDivFirst'
                settingsDivFirst.classList.add('quiCKIE_settingsDiv')
                document.getElementById('quiCKIE_config_header').insertAdjacentElement('afterend', settingsDivFirst)

                // --- Presets ---
                let presetCountLabel = document.getElementById('quiCKIE_config_presetCount_field_label')
                let presetCountField = document.getElementById('quiCKIE_config_field_presetCount')
                presetCountLabel.classList.add('settingsDivLabel')
                presetCountLabel.title = panelTextData.globalsTitles.presetCount
                settingsDivFirst.appendChild(presetCountLabel)
                settingsDivFirst.appendChild(presetCountField)

                // --- Left-Click ---
                let leftClickLabel = document.getElementById('quiCKIE_config_globalLeftClickAction_field_label')
                let leftClickField = document.getElementById('quiCKIE_config_field_globalLeftClickAction')
                leftClickLabel.classList.add('settingsDivLabel')
                leftClickLabel.title = panelTextData.globalsTitles.globalLeftClickAction
                settingsDivFirst.appendChild(leftClickLabel)
                settingsDivFirst.appendChild(leftClickField)

                // --- Middle-Click ---
                let middleClickLabel = document.getElementById('quiCKIE_config_globalMiddleClickAction_field_label')
                let middleClickField = document.getElementById('quiCKIE_config_field_globalMiddleClickAction')
                middleClickLabel.classList.add('settingsDivLabel')
                middleClickLabel.title = panelTextData.globalsTitles.globalMiddleClickAction
                settingsDivFirst.appendChild(middleClickLabel)
                settingsDivFirst.appendChild(middleClickField)

                // --- Placement ---
                let bunnyButtonPlacementLabel = document.getElementById('quiCKIE_config_bunnyButtonPlacement_field_label')
                let bunnyButtonPlacementField = document.getElementById('quiCKIE_config_field_bunnyButtonPlacement')
                bunnyButtonPlacementLabel.classList.add('settingsDivLabel')
                bunnyButtonPlacementLabel.title = panelTextData.globalsTitles.bunnyButtonPlacement
                settingsDivFirst.appendChild(bunnyButtonPlacementLabel)
                settingsDivFirst.appendChild(bunnyButtonPlacementField)

                // --- ForcedTorrentFile ---
                let globalForcedTorrentFileLabel = document.getElementById('quiCKIE_config_globalForcedTorrentFile_field_label')
                let globalForcedTorrentFileField = document.getElementById('quiCKIE_config_field_globalForcedTorrentFile')
                globalForcedTorrentFileLabel.classList.add('settingsDivLabel')
                globalForcedTorrentFileLabel.title = panelTextData.globalsTitles.globalForcedTorrentFile
                settingsDivFirst.appendChild(globalForcedTorrentFileLabel)
                settingsDivFirst.appendChild(globalForcedTorrentFileField)

                // ------ SECOND ROW ------

                let settingsDivSecond = document.createElement('div')
                settingsDivSecond.classList.add('quiCKIE_settingsDiv')
                settingsDivSecond.id = 'quiCKIE_settingsDivSecond'
                settingsDivFirst.insertAdjacentElement('afterend', settingsDivSecond)

                // --- Hidden Trackers ---
                let hiddenTrackersLabel = document.getElementById('quiCKIE_config_hiddenTrackers_field_label')
                let hiddenTrackersField = document.getElementById('quiCKIE_config_field_hiddenTrackers')
                hiddenTrackersLabel.classList.add('settingsDivLabel')
                hiddenTrackersLabel.title = panelTextData.globalsTitles.hiddenTrackers
                settingsDivSecond.appendChild(hiddenTrackersLabel)
                settingsDivSecond.appendChild(hiddenTrackersField)

                // --- 3rd Party Delay ---
                let thirdPartyDelayLabel = document.getElementById('quiCKIE_config_thirdPartyDelay_field_label')
                let thirdPartyDelayField = document.getElementById('quiCKIE_config_field_thirdPartyDelay')
                thirdPartyDelayLabel.classList.add('settingsDivLabel')
                thirdPartyDelayLabel.title = panelTextData.globalsTitles.thirdPartyDelay
                settingsDivSecond.appendChild(thirdPartyDelayLabel)
                settingsDivSecond.appendChild(thirdPartyDelayField)

                // --- TorrentClient ---
                let torrentClientLabel = document.getElementById('quiCKIE_config_torrentClient_field_label')
                let torrentClientField = document.getElementById('quiCKIE_config_field_torrentClient')
                torrentClientLabel.classList.add('settingsDivLabel')
                torrentClientLabel.title = panelTextData.globalsTitles.torrentClient
                settingsDivSecond.appendChild(torrentClientLabel)
                settingsDivSecond.appendChild(torrentClientField)

                // --- quiURL ---
                let quiURLLabel = document.getElementById('quiCKIE_config_quiURL_field_label')
                let quiURLField = document.getElementById('quiCKIE_config_field_quiURL')
                let quiURLTooltip = panelTextData.globalsTitles.quiURL
                quiURLLabel.classList.add('settingsDivLabel')
                quiURLLabel.title = quiURLTooltip
                quiURLField.title = quiURLTooltip
                quiURLField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(quiURLLabel)
                settingsDivSecond.appendChild(quiURLField)

                // --- quiApiKey ---
                let quiApiKeyLabel = document.getElementById('quiCKIE_config_quiApiKey_field_label')
                let quiApiKeyField = document.getElementById('quiCKIE_config_field_quiApiKey')
                quiApiKeyLabel.classList.add('settingsDivLabel')
                quiApiKeyLabel.title = panelTextData.globalsTitles.quiApiKey
                quiApiKeyField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(quiApiKeyLabel)
                settingsDivSecond.appendChild(quiApiKeyField)

                // --- qBitTorrentURL ---
                let qBitTorrentURLLabel = document.getElementById('quiCKIE_config_qBitTorrentURL_field_label')
                let qBitTorrentURLField = document.getElementById('quiCKIE_config_field_qBitTorrentURL')
                let qBitTorrentURLTooltip = panelTextData.globalsTitles.qBitTorrentURL
                qBitTorrentURLLabel.classList.add('settingsDivLabel')
                qBitTorrentURLLabel.title = qBitTorrentURLTooltip
                qBitTorrentURLField.title = qBitTorrentURLTooltip
                qBitTorrentURLField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(qBitTorrentURLLabel)
                settingsDivSecond.appendChild(qBitTorrentURLField)

                // --- qBitTorrentUsername ---
                let qBitTorrentUsernameLabel = document.getElementById('quiCKIE_config_qBitTorrentUsername_field_label')
                let qBitTorrentUsernameField = document.getElementById('quiCKIE_config_field_qBitTorrentUsername')
                qBitTorrentUsernameLabel.classList.add('settingsDivLabel')
                qBitTorrentUsernameLabel.title = panelTextData.globalsTitles.qBitTorrentUsername
                qBitTorrentUsernameField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(qBitTorrentUsernameLabel)
                settingsDivSecond.appendChild(qBitTorrentUsernameField)

                // --- qBitTorrentPassword ---
                let qBitTorrentPasswordLabel = document.getElementById('quiCKIE_config_qBitTorrentPassword_field_label')
                let qBitTorrentPasswordField = document.getElementById('quiCKIE_config_field_qBitTorrentPassword')
                qBitTorrentPasswordLabel.classList.add('settingsDivLabel')
                qBitTorrentPasswordLabel.title = panelTextData.globalsTitles.qBitTorrentPassword
                qBitTorrentPasswordField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(qBitTorrentPasswordLabel)
                settingsDivSecond.appendChild(qBitTorrentPasswordField)

                // --- TransmissionURL ---
                let transmissionURLLabel = document.getElementById('quiCKIE_config_transmissionURL_field_label')
                let transmissionURLField = document.getElementById('quiCKIE_config_field_transmissionURL')
                let transmissionURLTooltip = panelTextData.globalsTitles.transmissionURL
                transmissionURLLabel.classList.add('settingsDivLabel')
                transmissionURLLabel.title = transmissionURLTooltip
                transmissionURLField.title = transmissionURLTooltip
                transmissionURLField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(transmissionURLLabel)
                settingsDivSecond.appendChild(transmissionURLField)

                // --- TransmissionUsername ---
                let transmissionUsernameLabel = document.getElementById('quiCKIE_config_transmissionUsername_field_label')
                let transmissionUsernameField = document.getElementById('quiCKIE_config_field_transmissionUsername')
                transmissionUsernameLabel.classList.add('settingsDivLabel')
                transmissionUsernameLabel.title = panelTextData.globalsTitles.transmissionUsername
                transmissionUsernameField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(transmissionUsernameLabel)
                settingsDivSecond.appendChild(transmissionUsernameField)

                // --- TransmissionPassword ---
                let transmissionPasswordLabel = document.getElementById('quiCKIE_config_transmissionPassword_field_label')
                let transmissionPasswordField = document.getElementById('quiCKIE_config_field_transmissionPassword')
                transmissionPasswordLabel.classList.add('settingsDivLabel')
                transmissionPasswordLabel.title = panelTextData.globalsTitles.transmissionPassword
                transmissionPasswordField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(transmissionPasswordLabel)
                settingsDivSecond.appendChild(transmissionPasswordField)

                // --- DelugeURL ---
                let delugeURLLabel = document.getElementById('quiCKIE_config_delugeURL_field_label')
                let delugeURLField = document.getElementById('quiCKIE_config_field_delugeURL')
                let delugeURLTooltip = panelTextData.globalsTitles.delugeURL
                delugeURLLabel.classList.add('settingsDivLabel')
                delugeURLLabel.title = delugeURLTooltip
                delugeURLField.title = delugeURLTooltip
                delugeURLField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(delugeURLLabel)
                settingsDivSecond.appendChild(delugeURLField)

                // --- DelugePassword ---
                let delugePasswordLabel = document.getElementById('quiCKIE_config_delugePassword_field_label')
                let delugePasswordField = document.getElementById('quiCKIE_config_field_delugePassword')
                delugePasswordLabel.classList.add('settingsDivLabel')
                delugePasswordLabel.title = panelTextData.globalsTitles.delugePassword
                delugePasswordField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(delugePasswordLabel)
                settingsDivSecond.appendChild(delugePasswordField)

                // --- ruTorrentURL ---
                let ruTorrentURLLabel = document.getElementById('quiCKIE_config_ruTorrentURL_field_label')
                let ruTorrentURLField = document.getElementById('quiCKIE_config_field_ruTorrentURL')
                let ruTorrentURLTooltip = panelTextData.globalsTitles.ruTorrentURL
                ruTorrentURLLabel.classList.add('settingsDivLabel')
                ruTorrentURLLabel.title = ruTorrentURLTooltip
                ruTorrentURLField.title = ruTorrentURLTooltip
                ruTorrentURLField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(ruTorrentURLLabel)
                settingsDivSecond.appendChild(ruTorrentURLField)

                // --- ruTorrentUsername ---
                let ruTorrentUsernameLabel = document.getElementById('quiCKIE_config_ruTorrentUsername_field_label')
                let ruTorrentUsernameField = document.getElementById('quiCKIE_config_field_ruTorrentUsername')
                ruTorrentUsernameLabel.classList.add('settingsDivLabel')
                ruTorrentUsernameLabel.title = panelTextData.globalsTitles.ruTorrentUsername
                ruTorrentUsernameField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(ruTorrentUsernameLabel)
                settingsDivSecond.appendChild(ruTorrentUsernameField)

                // --- ruTorrentPassword ---
                let ruTorrentPasswordLabel = document.getElementById('quiCKIE_config_ruTorrentPassword_field_label')
                let ruTorrentPasswordField = document.getElementById('quiCKIE_config_field_ruTorrentPassword')
                ruTorrentPasswordLabel.classList.add('settingsDivLabel')
                ruTorrentPasswordLabel.title = panelTextData.globalsTitles.ruTorrentPassword
                ruTorrentPasswordField.classList.add('quiCKIE_obfuscate')
                settingsDivSecond.appendChild(ruTorrentPasswordLabel)
                settingsDivSecond.appendChild(ruTorrentPasswordField)

                document.getElementById('quiCKIE_config_field_torrentClient').querySelector('[value="ruTorrent 🛠️"]').disabled = true
                ruTorrentPasswordField.disabled = true
                ruTorrentURLField.disabled = true
                ruTorrentUsernameField.disabled = true

                // Obfuscate the client credentials on blur
                for ( let inputField of document.querySelectorAll('.quiCKIE_obfuscate') ) {
                    inputField.type = 'password'
                    inputField.addEventListener('focus', () => { inputField.type = 'text' })
                    inputField.addEventListener('blur', () => { inputField.type = 'password' })

                }

                // Set 'int' and 'float' fields to blank values when appropriate
                for ( let fieldName of ['ratioLimit', 'seedTime', 'upLimit', 'dlLimit', 'instance', 'paginationLoop'] ) {

                    for ( let inputField of document.getElementById('quiCKIE_config').querySelectorAll(`input[data-fieldtype=${fieldName}`) ) {

                            if ( fieldName == 'paginationLoop' ) {
                                inputField.value < 500 ? inputField.value = '' : null
                            } else if (fieldName == 'ratioLimit' || fieldName == 'seedTime' ) {
                                inputField.value == 0 ? inputField.value = '' : null
                            } else {
                                inputField.value <= 0 ? inputField.value = '' : null
                            }

                    }
                }

                function torrentClientChange() {
                    // The torernt client was changed, so disable the quiCKIE fields that no longer apply and hide the clientFields not belonging to this client

                    // 1: Enable all previously disabled fields, 2: Disable fields not applicable to the selected client, 3: Hide client settings not applicable to the selected client

                    let allClientFields = ['qui', 'qBitTorrent', 'transmission', 'deluge', 'ruTorrent'] // An array of field names to be hidden
                    let hideClientFields

                    let allInputFields = document.querySelectorAll('input.quiCKIE_disabledField')
                    for ( inputField of allInputFields ) {
                        // Enable any disabled fields
                        inputField.disabled = false
                        inputField.classList.remove('quiCKIE_disabledField')
                    }


                    // The currently selected torrent client from the dropdown list
                    let torrentClient = document.getElementById('quiCKIE_config_field_torrentClient').value

                    if ( torrentClient == 'qui' ) {

                        hideClientFields = allClientFields.filter(function(item) { return item != 'qui' })

                    } else if ( torrentClient == 'qBitTorrent' ) {

                        hideClientFields = allClientFields.filter(function(item) { return item != 'qBitTorrent' })

                        for ( let inputField of document.querySelectorAll('input[data-fieldtype="instance"]') ) {
                            inputField.disabled = true
                            inputField.classList.add('quiCKIE_disabledField')
                        }

                    } else if ( torrentClient == 'Transmission' ) {

                        hideClientFields = allClientFields.filter(function(item) { return item != 'transmission' })

                        let fieldsToDisable = ['category', 'ratioLimit', 'seedTime', 'dlLimit', 'upLimit', 'instance', 'subFolder', 'autoTMM', 'skipHash']
                        for ( field of fieldsToDisable ) {
                            let allInputFields = document.querySelectorAll(`input[data-fieldtype="${field}"]`)
                            for ( inputField of allInputFields ) {
                                inputField.disabled = true
                                inputField.classList.add('quiCKIE_disabledField')
                            }
                        }

                    } else if ( torrentClient == 'Deluge' ) {

                        hideClientFields = allClientFields.filter(function(item) { return item != 'deluge' })

                        let fieldsToDisable = ['category', 'tags', 'ratioLimit', 'seedTime', 'instance', 'subFolder', 'autoTMM', 'skipHash']
                        for ( field of fieldsToDisable ) {
                            let allInputFields = document.querySelectorAll(`input[data-fieldtype="${field}"]`)
                            for ( inputField of allInputFields ) {
                                inputField.disabled = true
                                inputField.classList.add('quiCKIE_disabledField')
                            }
                        }

                    } else if ( torrentClient == 'ruTorrent' ) {
                        // ruTorrent is selected

                        hideClientFields = allClientFields.filter(function(item) { return item != 'ruTorrent' })

                        let fieldsToDisable = ['category', 'ratioLimit', 'seedTime', 'dlLimit', 'upLimit', 'instance', 'subFolder', 'autoTMM', 'skipHash']
                        for ( field of fieldsToDisable ) {
                            let allInputFields = document.querySelectorAll(`input[data-fieldtype="${field}"]`)
                            for ( inputField of allInputFields ) {
                                inputField.disabled = true
                                inputField.classList.add('quiCKIE_disabledField')
                            }
                        }

                    }

                    for ( let clientFieldName of allClientFields ) {
                        // Start by revealing all client fields
                        try {
                            document.getElementById(`quiCKIE_config_${clientFieldName}ApiKey_field_label`).style.display = ''
                            document.getElementById(`quiCKIE_config_field_${clientFieldName}ApiKey`).style.display = ''
                        } catch (error) {}

                        try {
                            document.getElementById(`quiCKIE_config_${clientFieldName}URL_field_label`).style.display = ''
                            document.getElementById(`quiCKIE_config_field_${clientFieldName}URL`).style.display = ''
                        } catch (error) {}

                        try {
                            document.getElementById(`quiCKIE_config_${clientFieldName}Username_field_label`).style.display = ''
                            document.getElementById(`quiCKIE_config_field_${clientFieldName}Username`).style.display = ''
                        } catch (error) {}

                        try {
                            document.getElementById(`quiCKIE_config_${clientFieldName}Password_field_label`).style.display = ''
                            document.getElementById(`quiCKIE_config_field_${clientFieldName}Password`).style.display = ''
                        } catch (error) {}

                    }

                    for ( let clientFieldName of hideClientFields ) {
                        // Hide client fields not applicable to the selected client
                        try {
                            document.getElementById(`quiCKIE_config_${clientFieldName}ApiKey_field_label`).style.display = 'none'
                            document.getElementById(`quiCKIE_config_field_${clientFieldName}ApiKey`).style.display = 'none'
                        } catch (error) {}

                        try {
                            document.getElementById(`quiCKIE_config_${clientFieldName}URL_field_label`).style.display = 'none'
                            document.getElementById(`quiCKIE_config_field_${clientFieldName}URL`).style.display = 'none'
                        } catch (error) {}

                        try {
                            document.getElementById(`quiCKIE_config_${clientFieldName}Username_field_label`).style.display = 'none'
                            document.getElementById(`quiCKIE_config_field_${clientFieldName}Username`).style.display = 'none'
                        } catch (error) {}

                        try {
                            document.getElementById(`quiCKIE_config_${clientFieldName}Password_field_label`).style.display = 'none'
                            document.getElementById(`quiCKIE_config_field_${clientFieldName}Password`).style.display = 'none'
                        } catch (error) {}

                    }
                }

                document.getElementById('quiCKIE_config_field_torrentClient').addEventListener('change', function() {
                    torrentClientChange()
                })

                torrentClientChange()

                // Create GitHub version element
                let githubSVG = '<svg width="16" height="16" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_730_27136)"><path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="white"/></g><defs><clipPath id="clip0_730_27136"><rect width="98" height="96" fill="white"/></clipPath></defs></svg>'

                let versionElement = document.createElement('a')
                versionElement.classList = 'version_label reset'
                versionElement.title = 'Source Code on GitHub'
                versionElement.target = '_blank'
                versionElement.href = `${GM_info.script.homepage}`
                versionElement.innerHTML = `${githubSVG} Version ${GM_info.script.version}`

                doc.getElementById('quiCKIE_config_buttons_holder').appendChild(versionElement)

                // Adjust the Import\Export buttons
                let exportButton = document.getElementById('quiCKIE_config_field_settingsExport')
                exportButton.classList.add('saveclose_buttons')

                let importButton = document.getElementById('quiCKIE_config_field_settingsImport')
                importButton.classList.add('saveclose_buttons')

                let buttonsHolderElement = document.getElementById('quiCKIE_config_buttons_holder')
                buttonsHolderElement.appendChild(importButton)
                buttonsHolderElement.appendChild(exportButton)

                // Remove the now empty <div> elements
                for ( let emptyElement of document.getElementById('quiCKIE_config').querySelectorAll('div.config_var:empty') ) {
                    emptyElement.remove()
                }

                // Add success animation to save button
                let saveButton = doc.getElementById('quiCKIE_config_saveBtn')
                saveButton.addEventListener('click', () => {
                    // When the save button is clicked, temporarily assign a css class to produce the animation
                    saveButton.classList.add('success')
                    setTimeout(() => saveButton.classList.remove('success'), 500)
                })

                if ( this.get('welcomeMessage') == 'show' ) {
                    // Display this welcomeMessage when first opening the quiCKIE settings panel
                    confirm("🐰 Welcome to quiCKIE! 🐰\n\nMany of the trackers supported by quiCKIE were contributed by a member of that tracker. If there's a tracker that you'd like to see included, check the quiCKIE GitHub WiKi for a simple 3-step guide on how to get it added, no programming experience required!\n\nquiCKIE was originally written for qui, with the other clients only being added in at the tail-end of development.\n\nIf during your usage you encounter either a buggy feature, missing url, or broken\\dead tracker, open an issue or leave a comment on the quiCKIE GitHub page.\n\nEnjoy your quiCKIE, hover over the emojis for details, and finally a big shout-out to the people that have come together and kept this community thriving 🫶\n\n - Wirly")

                    this.set('welcomeMessage', 'hide')

                }

            },
            'save': function () {
                // Actions to take when the 'Save' button is clicked
                reloadWindow = true

                // Clear cached data when settings are saved
                GM_listValues().forEach(key => {
                    if (key !== 'quiCKIE_config') {
                        GM_setValue(key, null)
                    }
                })

            },
            'close': function () {
                // Actions to take when the 'Close' button is clicked
                if (reloadWindow) {
                    if (this.frame) {
                        window.location.reload()
                    } else {
                        setTimeout(() => {
                            window.location.reload()
                        }, 250)
                    }
                }
            },
            'reset': function () {
                // Actions to take when the 'Reset' button is clicked
                if (typeof resetToDefaults === 'function') {
                    resetToDefaults()
                }
            }
        },
        // The CSS to use for the menu, loaded through the @resource line
        'css': GM_getResourceText('settingsPanelCSS')
    })

    // Register the settings panel to be opened from the UserScript manager dialouge
    GM_registerMenuCommand('Settings', () => {
        GM_config.open()
    })


    return [ primaryDomain, allPrimaryDomains, primaryDomainToName, primaryDomainToHomepage, trackerNameToPrimaryDomain, presetCount ]

}


function getTrackerSettings(primaryDomain) {
    // Define the main SETTINGS object and populate it with the current primaryDomain specific settings

    // @trackerSettings
    let SETTINGS = {
        primaryDomain: primaryDomain,
        forceTorrentFile: false,
        firstTrackerHandlerScan: true,
        firstThirdPartyScan: true,

        // The global quiCKIE saved settings
        bunnyButtonPlacement: GM_config.get('bunnyButtonPlacement'),
        globalLeftClickAction: GM_config.get('globalLeftClickAction'),
        globalMiddleClickAction: GM_config.get('globalMiddleClickAction'),
        globalForcedTorrentFile: GM_config.get('globalForcedTorrentFile'),
        thirdPartyDelay: GM_config.get('thirdPartyDelay'),

        torrentClient: {
            'client': GM_config.get('torrentClient'),

            'quiURL': GM_config.get('quiURL'),
            'quiApiKey': GM_config.get('quiApiKey'),

            'qBitTorrentURL': GM_config.get('qBitTorrentURL'),
            'qBitTorrentUsername': GM_config.get('qBitTorrentUsername'),
            'qBitTorrentPassword': GM_config.get('qBitTorrentPassword'),

            'transmissionURL': GM_config.get('transmissionURL'),
            'transmissionUsername': GM_config.get('transmissionUsername'),
            'transmissionPassword': GM_config.get('transmissionPassword'),

            'delugeURL': GM_config.get('delugeURL'),
            'delugePassword': GM_config.get('delugePassword'),

            'ruTorrentURL': GM_config.get('ruTorrentURL'),
            'ruTorrentUsername': GM_config.get('ruTorrentUsername'),
            'ruTorrentPassword': GM_config.get('ruTorrentPassword'),
        },

        // The saved settings of the current tracker
        category: GM_config.get(`${primaryDomain}-category`),
        savePath: GM_config.get(`${primaryDomain}-savePath`),
        tags: GM_config.get(`${primaryDomain}-tags`),
        ratioLimit: GM_config.get(`${primaryDomain}-ratioLimit`),
        seedTime: GM_config.get(`${primaryDomain}-seedTime`),
        dlLimit: GM_config.get(`${primaryDomain}-dlLimit`),
        upLimit: GM_config.get(`${primaryDomain}-upLimit`),
        instance: GM_config.get(`${primaryDomain}-instance`),
        paginationLoop: GM_config.get(`${primaryDomain}-paginationLoop`),
        leftClick: GM_config.get(`${primaryDomain}-leftClick`),
        thirdPartyScan: GM_config.get(`${primaryDomain}-thirdPartyScan`),
        hideDL: GM_config.get(`${primaryDomain}-hideDL`),
        startPaused: GM_config.get(`${primaryDomain}-startPaused`),
        subFolder: GM_config.get(`${primaryDomain}-subFolder`),
        seqPieces: GM_config.get(`${primaryDomain}-seqPieces`),
        autoTMM: GM_config.get(`${primaryDomain}-autoTMM`),
        skipHash: GM_config.get(`${primaryDomain}-skipHash`),

    }

    // GM_config() saves what should be blank int/float fields as 0, which qbitTorrent interprets problematically, so change 0 to ''
    SETTINGS.ratioLimit == 0 ? SETTINGS.ratioLimit = '' : null
    SETTINGS.seedTime == 0 ? SETTINGS.seedTime = '' : null
    SETTINGS.dlLimit <= 0 ? SETTINGS.dlLimit = '' : null
    SETTINGS.upLimit <= 0 ? SETTINGS.upLimit = '' : null
    SETTINGS.instance <= 0 ? SETTINGS.instance = '' : null
    SETTINGS.paginationLoop < 500 ? SETTINGS.paginationLoop = '' : null

    return SETTINGS

}


function createPresetItems(primaryDomains) {
    // For all the primaryDomains (array), generate and return a object who's properties equal the presetMenu items applicable to that primaryDomain

    defaultItems = {
        'send': {
            content: '☁️ Send',
            events: {
                'click': function(event) {
                    // This menuItem was clicked, so use basic settings to add the torrent

                    let bunnyButtonId = this.dataset.targetid
                    let bunnyButton = document.getElementById(bunnyButtonId)

                    let startPaused = false
                    if ( event.shiftKey && event.ctrlKey && event.button == 0 ) {
                        // Shift-Ctrl-Click: Add the torrent in a paused state
                        startPaused = true
                    }


                    addTorrent({
                        torrentURL: bunnyButton.dataset.torrenturl,
                        torrentClient: SETTINGS.torrentClient,
                        bunnyButtonId: bunnyButtonId,
                        startPaused: startPaused,
                    })

                },
                'mouseover': function(event) {
                    this.title = `☁️ Send the torrent to ${SETTINGS.torrentClient.client} with no custom settings`
                }
            }
        },

        'sendPaused': {
            content: '☁️ Send Paused',
            events: {
                'click': function(event) {
                    // This menuItem was clicked, so use basic settings to add the torrent, but in a paused state

                    let bunnyButtonId = this.dataset.targetid
                    let bunnyButton = document.getElementById(bunnyButtonId)

                    addTorrent({
                        torrentURL: bunnyButton.dataset.torrenturl,
                        torrentClient: SETTINGS.torrentClient,
                        bunnyButtonId: bunnyButtonId,
                        startPaused: true,
                    })

                },
                'mouseover': function(event) {
                    this.title = `☁️ Send the torrent to ${SETTINGS.torrentClient.client} with only StartPaused enabled`
                }
            }
        },

        'settings': {
            content: '🛠️ Settings',
            events: {
                'click': function(event) {
                    GM_config.open()
                },
                'mouseover': function(event) {
                    this.title = `🛠️ Open the quiCKIE Settings Panel`
                }
            }
        },

        'client': {
            content: `🖥️ ${SETTINGS.torrentClient.client}`,
            events: {
                'click': function(event) {

                    if ( SETTINGS.torrentClient.client == 'qui') {
                        window.open(SETTINGS.torrentClient.quiURL, '_blank').focus()
                    } else if ( SETTINGS.torrentClient.client == 'qBitTorrent') {
                        window.open(SETTINGS.torrentClient.qBitTorrentURL, '_blank').focus()
                    } else if ( SETTINGS.torrentClient.client == 'Transmission') {
                        window.open(SETTINGS.torrentClient.transmissionURL, '_blank').focus()
                    } else if ( SETTINGS.torrentClient.client == 'Deluge') {
                        window.open(SETTINGS.torrentClient.delugeURL, '_blank').focus()
                    } else if ( SETTINGS.torrentClient.client == 'ruTorrent') {
                        window.open(SETTINGS.torrentClient.ruTorrentURL, '_blank').focus()
                    }

                },
                'mouseover': function(event) {
                    this.title = `🖥️ Open the ${SETTINGS.torrentClient.client} Web Interface`
                }
            }
        },

        'torrentfile' : {
            content: '💾 TorrentFile',
            events: {
                'click': function(event) {
                    // This menuItem was clicked, so use the selected preset

                    let bunnyButtonId = this.dataset.targetid
                    let bunnyButton = document.getElementById(bunnyButtonId)

                    let fileElement = document.createElement('a')
                    fileElement.href = bunnyButton.dataset.torrenturl

                    document.body.appendChild(fileElement)
                    fileElement.click()
                    document.body.removeChild(fileElement)
                    fileElement.remove()
                    replaceEmojis(bunnyButton, '💾')

                },
                'mouseover': function(event) {
                    this.title = `💾 Download the .torrent file\n\nℹ️ BunnyButtons based on MagnetLinks will instead open the MagnetLink`
                }
            }
        },
    }

    let allPresetItems = {}

    for ( let primaryDomain of primaryDomains ) {
        // For each primaryDomain, determine the presets that apply to that tracker and add them to the object
        let menuItems = []
        for ( let i=1; i <= presetCount; i++ ) {
            // for each preset, create a menuItem object to put in the right-click presets-menu
            let presetName = GM_config.get(`preset-${i}-preset`)
            // let presetName = GM_config.get(`preset-${i}-name`)
            let presetTrackersList = GM_config.get(`preset-${i}-presetTrackers`).toLowerCase()

            if ( presetName == '' || presetTrackersList == '') {
                // A empty preset name or no specified trackers, so don't add this item to the presets-menu
                continue
            }

            // Check if the list of trackers in the presetTrackers field contains a match against the settings panel label of this tracker
            let settingsPanelLabel = primaryDomainToName[primaryDomain].toLowerCase()
            if ( !presetTrackersList.match(/\*/) && !presetTrackersList.match(settingsPanelLabel) ) {
                // Neither a wildcard nor a matching tracker label, so don't add this item to the presets-menu
                continue
            }

            if ( presetName.match(/^send$/i) ) {
                // This preset item should send the torrent to the client no custom settings

                var presetItem = defaultItems['send']

            } else if ( presetName.match(/^sendpaused$/i) ) {
                // This preset item should send the torrent to the client no custom settings, except for startPaused = true

                var presetItem = defaultItems['sendPaused']

            } else if ( presetName.match(/^settings$/i) ) {
                // This preset item should open the quiCKIE Settings panel

                var presetItem = defaultItems['settings']

            } else if ( presetName.match(/^client$/i) ) {
                // This preset item should open a tab to the torrent client

                var presetItem = defaultItems['client']

            } else if ( presetName.match(/^torrentfile$/i) ) {
                // This preset item should open the torrentURL

                var presetItem = defaultItems['torrentfile']

            } else if ( presetName.match(/^[-=\.\s]+$/) ) {
                // This preset item is a menu separator, so create a menuItem that does nothing when clicked

                let dividerText = presetName

                // Replace - = . with their respective symbols
                if ( presetName.includes('-') ) {
                    dividerText = presetName.replaceAll(/./g, '─')
                } else if ( presetName.includes('=') ) {
                    dividerText = presetName.replaceAll(/./g, '═')
                } else if ( presetName.includes('.') ) {
                    dividerText = presetName.replaceAll(/./g, '·')
                }

                var presetItem = {
                    content: dividerText,
                    divider: 'true',
                }

            } else {
                // For this preset, create a menuItem entry to be clickable in the presets-menu
                let presetSettings = {
                    category: GM_config.get(`preset-${i}-category`),
                    savePath: GM_config.get(`preset-${i}-savePath`),
                    tags: GM_config.get(`preset-${i}-tags`),
                    ratioLimit: GM_config.get(`preset-${i}-ratioLimit`),
                    seedTime: GM_config.get(`preset-${i}-seedTime`),
                    dlLimit: GM_config.get(`preset-${i}-dlLimit`),
                    upLimit: GM_config.get(`preset-${i}-upLimit`),
                    instance: GM_config.get(`preset-${i}-instance`),
                    startPaused: GM_config.get(`preset-${i}-startPaused`),
                    subFolder: GM_config.get(`preset-${i}-subFolder`),
                    seqPieces: GM_config.get(`preset-${i}-seqPieces`),
                    autoTMM: GM_config.get(`preset-${i}-autoTMM`),
                    skipHash: GM_config.get(`preset-${i}-skipHash`),
                }

                if ( presetSettings.ratioLimit == 0 ) { presetSettings.ratioLimit = '' }
                if ( presetSettings.seedTime == 0 ) { presetSettings.seedTime = '' }
                if ( presetSettings.dlLimit == 0 ) { presetSettings.dlLimit = '' }
                if ( presetSettings.upLimit == 0 ) { presetSettings.upLimit = '' }
                if ( presetSettings.instance == 0 ) { presetSettings.instance = '' }

                var presetItem = {
                    content: presetName,
                    events: {
                        'click': function(event) {
                            // This menuItem was clicked, so use the selected preset to add the torrent

                            // The bunnyButtonId, which was set as a data set as a dataset attribute when the bunnyButton was right-clicked
                            let bunnyButtonId = this.dataset.targetid
                            let bunnyButton = document.getElementById(bunnyButtonId)

                            let torrentURL = bunnyButton.dataset.torrenturl

                            let startPaused = presetSettings.startPaused
                            if ( event.shiftKey && event.ctrlKey && event.button == 0 ) {
                                // Shift-Ctrl-Click: Add the torrent in a paused state
                                startPaused = true
                            }

                            addTorrent({
                                torrentURL: torrentURL,
                                torrentClient: SETTINGS.torrentClient,
                                bunnyButtonId: bunnyButtonId,

                                instance: presetSettings.instance,
                                category: presetSettings.category,
                                savePath: presetSettings.savePath,
                                tags: presetSettings.tags,
                                ratioLimit: presetSettings.ratioLimit,
                                seedTime: presetSettings.seedTime,
                                dlLimit: presetSettings.dlLimit,
                                upLimit: presetSettings.upLimit,
                                startPaused: startPaused,
                                subFolder: presetSettings.subFolder,
                                seqPieces: presetSettings.seqPieces,
                                autoTMM: presetSettings.autoTMM,
                                skipHash: presetSettings.skipHash})

                        },
                        'mouseover': function(event) {
                            let bunnyButtonId = this.dataset.targetid
                            let bunnyButton = document.getElementById(bunnyButtonId)

                            this.title = ` ─── 🚀 ${presetName} 🚀 ───
🗃️ = ${presetSettings.category}
💾 = ${presetSettings.savePath}
🏷️ = ${presetSettings.tags}
⚖️ = ${presetSettings.ratioLimit}
🌱 = ${presetSettings.seedTime}
⬇️ = ${presetSettings.dlLimit}
⬆️ = ${presetSettings.upLimit}
🎯 = ${presetSettings.instance}
⏸️ = ${presetSettings.startPaused}
📁 = ${presetSettings.subFolder}
🧩 = ${presetSettings.seqPieces}
🤖 = ${presetSettings.autoTMM}
🛡️ = ${presetSettings.skipHash}

🖥️ ${SETTINGS.torrentClient.client}
🔗 ${bunnyButton.dataset.torrenturl}`
                        }
                    }
                }
            }

            menuItems.push(presetItem)

        }

        if ( menuItems.length == 0 ) {
            // No presets were detected for this tracker, so let the user know and provide some default options

            menuItems = [
                {
                    content: '🚀 No Presets for this Tracker 🚀',
                    events: {
                        'mouseover': function(event) {
                            // this.parentElement.setAttribute('style', 'background: none !important; background-color: transparent !important')
                            this.setAttribute('style', 'box-shadow: none !important; background-color: transparent !important')
                        },
                    }
                },
                defaultItems['send'],
                defaultItems['settings'],
                defaultItems['client'],
                defaultItems['torrentfile'],
            ]

        }

        allPresetItems[primaryDomain] = menuItems

    }

    return allPresetItems

}


GM_addStyle(GM_getResourceText('presetsMenuCSS'))
function attachPresetsMenu(targetSelector, primaryDomain = primaryDomain) {
    // append the menuItems to the target elements

    const presetsMenu = new ContextMenu({
        // targetSelector == CSS Selector
        target: targetSelector,
        // An array of objects to display in the presets-menu
        menuItems: presetMenuItems[primaryDomain]
    })

    // init() will stack a 'contextmenu' eventlistener on elements, so don't call it more than once per bunnyButton
    presetsMenu.init()

}


// @quickieTrackerHandler
function quickieTrackerHandler({
    // A universal tracker handler that uses the provided arguments to generate bunnyButtons for all the queried downloadElements

    downloadElementsSelector,
    bunnyButtonFontSize = 'inherit',
    bunnyButtonText = ' 🐰 ' ,
    bunnyButtonParentPlacement = false,
    elementsSeparator = 'automatic',
    bunnyButtonAddStyles = '',
    bunnyButtonAddClasses = [],
    seedingStatusSelector = null,
    snatchedStatusSelector = null,
    freeleechStatusSelector = null,
    afterBunnyButtonCreation = false,
    enablePaginationLooping = false,
    downloadElementsTrackProcessed = false,
    downloadElementsTorrentURLAttribute = 'href',
    forceTorrentFile = false,
    bunnyButtonAttachPresetsMenu = true,

}) {
    // Using the provided arguments, generate bunnyButtons for matching elements on this page

    logger.info('quickieTrackerHandler Settings')
    logger.log(arguments[0])

    // If the .torrent file should be forced to download through the browser
    forceTorrentFile == true ? SETTINGS.forceTorrentFile = true : null

    // The global setting for where to place the bunnyButton relative to the downloadElement
    let bunnyButtonPlacement
    SETTINGS.bunnyButtonPlacement == 'After' ? bunnyButtonPlacement = 'afterend' : bunnyButtonPlacement = 'beforebegin'

    // If pagination looping should be enforced on this page
    enablePaginationLooping == true ? SETTINGS.paginationLoop = 750 : null

    // If there is a paginationLoop timer, mark the processed elements so that bunnyButtons are not repeatedly generated
    SETTINGS.paginationLoop >= 500 ? downloadElementsTrackProcessed = true : null

    // Determine if there is a reason to log the bunnyButtons so that they can be referenced after the query loop
    let logElements = false
    if ( seedingStatusSelector != null || snatchedStatusSelector != null || freeleechStatusSelector != null || typeof afterBunnyButtonCreation === 'function' ) {
        logElements = true
    }

    function processDownloadElements(delay) {
        // query and create a BunnyButton for all downloadElements

        try {
            setTimeout(() => {
                // Using the provided CSS selector, get an array of all the downloadElements that have not yet been processed
                let allDownloadElements = document.querySelectorAll(`${downloadElementsSelector}:not([data-quickie_processed="true"])`)

                logger.info('allDownloadElements')
                logger.log(allDownloadElements)

                // There is a function to be performed after the bunnyButtons are created, so populate a object to store the elements
                logElements == true ? loggedElements = { bunnyButtons: [], downloadElements: [] , pairedElements: [] } : null

                if ( allDownloadElements.length >= 1 ) {
                    // The query returned results that have not yet been processed, so generate a bunnyButton for each downloadElement

                    // The separator used between the DL button and the BunnyButton
                    elementsSeparator == 'automatic' ? elementsSeparator = getPageSeparator(allDownloadElements[0]) : null

                    // Process each downloadElement in the list one at a time, generating a bunnyButton for each and then inserting it after the downloadElement
                    for (let downloadElement of allDownloadElements) {

                        // Use the supplied attribute (which should be a torrentURL) to create a bunnyButton for this downloadElement
                        let bunnyButton = createBunnyButton({ torrentURL: downloadElement[downloadElementsTorrentURLAttribute], fontSize: bunnyButtonFontSize, buttonText: bunnyButtonText, torrentSettings: SETTINGS, addButtonStyles: bunnyButtonAddStyles, addButtonClasses: bunnyButtonAddClasses })

                        let placementElement
                        bunnyButtonParentPlacement == true ? placementElement = downloadElement.parentElement : placementElement = downloadElement

                        // Insert the bunnyButton after the placementElement
                        placementElement.insertAdjacentElement(bunnyButtonPlacement, bunnyButton)

                        if ( SETTINGS.hideDL == true ) {
                            // Hide the DL button and therefore don't insert a separator
                            downloadElement.style.display = 'none'
                        } else {
                            // Insert the separator between the placementElement and the bunnyButton
                            elementsSeparator == false ? null : placementElement.insertAdjacentText(bunnyButtonPlacement, elementsSeparator)
                        }

                        // If enabled, mark this downloadElement as having been processed by assigning it a unique attribute
                        downloadElementsTrackProcessed == true ? downloadElement.setAttribute('data-quickie_processed', 'true') : null

                        // Store the processed elements in the object to be passed to the afterBunnyButtonCreation() function
                        if ( logElements == true ) {
                            loggedElements['bunnyButtons'].push(bunnyButton)
                            loggedElements['downloadElements'].push(downloadElement)
                            loggedElements['pairedElements'].push({ bunnyButton: bunnyButton, downloadElement: downloadElement })
                        }

                    }

                    // After the bunnyButtons have been generated, call the function that will attach to them the right-click presetsMenu
                    bunnyButtonAttachPresetsMenu == true ? attachPresetsMenu('a.quickie_newBunnyButton', SETTINGS.primaryDomain) : null

                } else {
                    // The query returned no results

                    if ( SETTINGS.firstTrackerHandlerScan && !['myanonamouse'].includes(primaryDomain) ) {
                        // This being the first scan, alert the user of the possible reasons the query might have failed and how to proceed

                        console.error(`---------- ⚠️ quiCKIE ⚠️ ----------\n\nThe script has executed sucessfully, but the initial search found no download elements for which to make BunnyButtons 🐰\n\nIf you are not seeing any BunnyButtons, this usually means that either the CSS selector used for matching the ${primaryDomainToName[primaryDomain]} download buttons needs to be updated or that you are on a site\\page that has pagination.\n\nPaste this command into your browser console, if the returned list is empty, then the CSS Selector is returning no results and needs updating: document.querySelectorAll('${downloadElementsSelector}')\n\nRefer to the quiCKIE GitHub WiKi for a guide on adding a new tracker, which has a section on how to determine\\update the CSS selector.\n\nIf the CSS selector is returning results but there are still no BunnyButtons, it is likely due to pagination. Use quiCKIE's 🔁 setting for pagination compatability.\n\nℹ️ If you are reading this and your BunnyButtons are working fine, you can safely ignore this message. It is likely that the pagination of your current site did not finish loading before quiCKIE performed this first scan.\n\nℹ️ If this page has no download elements to begin with, it means that one of the @match URL's for ${primaryDomainToName[primaryDomain]} is running quiCKIE on pages it should not. Please report this so that quiCKIE won't waste your resources and can be improved.`)
                    }

                }

                SETTINGS.firstTrackerHandlerScan = false

                if ( typeof afterBunnyButtonCreation === 'function' && loggedElements['bunnyButtons'].length > 0 ) {
                    // A function was provided and there are newly created bunnyButtons, so run the function
                    afterBunnyButtonCreation(loggedElements)
                }

                if ( seedingStatusSelector != null || snatchedStatusSelector != null || freeleechStatusSelector != null && loggedElements['bunnyButtons'].length > 0 ) {
                    // A torrent status selector was provided and there are newly created bunnyButtons, so check the selector(s) for truthy

                    for ( let pairedElements of loggedElements.pairedElements ) {

                        let downloadElement = pairedElements.downloadElement
                        let bunnyButton = pairedElements.bunnyButton

                        try {

                            if ( eval(`${seedingStatusSelector}`) && bunnyButton.dataset.emojospecified != 'true' ) {
                                // A seedingStatusSelector was matched and an emoji has not already been specified for this bunnyButton
                                replaceEmojis(bunnyButton, '🌱')
                                bunnyButton.title = bunnyButton.title.replace(/🔗/, '🌱 Seeding\n🔗')
                                continue

                            }

                        } catch (error) {
                            // There was en error, likely due to either impossible method chaining for this downloadElement (signifying 'false') or invalid JavaScript
                            logger.log(`---------- ⚠️ quiCKIE ⚠️ ----------\n\nThe seedingStatusSelector returned an error.\n\nIf you are reading this message and the 🌱 is present on the bunnyButtons that are indeed seeding, you can safely ignore this message. This error is normal, as comparisons that don't return 'true' are not always able to complete their code and will instead return this error.\n\nIf even the seeding torrents are not displaying the 🌱, it is most likely that either the seedingStatusSelector is incorrect or is not valid JavaScript.\n\ndownloadElement: ${downloadElement}\n\nseedingStatusSelector: ${seedingStatusSelector}\n\nError:${error}\n\n`)
                        }

                        try {

                            if ( eval(`${snatchedStatusSelector}`) && bunnyButton.dataset.emojospecified != 'true' ) {
                                // A snatchedStatusSelector was matched and an emoji has not already been specified for this bunnyButton
                                replaceEmojis(bunnyButton, '🍁')
                                bunnyButton.title = bunnyButton.title.replace(/🔗/, '🍁 Snatched\n🔗')
                                continue
                            }

                        } catch (error) {
                            // There was en error, likely due to either impossible method chaining for this downloadElement (signifying 'false') or invalid JavaScript
                            logger.log(`---------- ⚠️ quiCKIE ⚠️ ----------\n\nThe snatchedStatusSelector returned an error.\n\nIf you are reading this message and the 🍁 is present on the bunnyButtons that are indeed snatched, you can safely ignore this message. This error is normal, as comparisons that don't return 'true' are not always able to complete their code and will instead return this error.\n\nIf even the snatched torrents are not displaying the 🍁, it is most likely that either the snatchedStatusSelector is incorrect or is not valid JavaScript.\n\ndownloadElement: ${downloadElement}\n\nsnatchedStatusSelector: ${snatchedStatusSelector}\n\nError:${error}\n\n`)
                        }

                        try {

                            if ( eval(`${freeleechStatusSelector}`) && bunnyButton.dataset.emojospecified != 'true' ) {
                                // A freeleechStatusSelector was matched and an emoji has not already been specified for this bunnyButton
                                replaceEmojis(bunnyButton, '💎')
                                bunnyButton.title = bunnyButton.title.replace(/🖥️/, '💎 Freeleech 💎\n\n🖥️')
                                continue
                            }

                        } catch (error) {
                            // There was en error, likely due to either impossible method chaining for this downloadElement (signifying 'false') or invalid JavaScript
                            logger.log(`---------- ⚠️ quiCKIE ⚠️ ----------\n\nThe freeleechStatusSelector returned an error.\n\nIf you are reading this message and the 💎 is present on the bunnyButtons that are indeed freeleech, you can safely ignore this message. This error is normal, as comparisons that don't return 'true' are not always able to complete their code and will instead return this error.\n\nIf even the freeleech torrents are not displaying the 💎, it is most likely that either the freeleechStatusSelector is incorrect or is not valid JavaScript.\n\ndownloadElement: ${downloadElement}\n\nfreeleechStatusSelector: ${freeleechStatusSelector}\n\nError:${error}\n\n`)
                        }
                    }
                }

                if ( SETTINGS.paginationLoop >= 500 ) {
                    // The paginationLoop timer has been set, so quiCKIE will continuosly scan the page for new downloadElements
                    processDownloadElements(SETTINGS.paginationLoop)
                }

            }, delay )

        } catch (error) {
            logger.error(error)
        }

    }

    processDownloadElements(0)

}


function unit3dTrackerHandler(downloadElementsSelector) {
    // A tracker handler focused on the layout of the UNIT3D Framework. Generate a bunnyButton for each queried downloadElement matching the provided CSS selector
    // ! This function uses 'Oldtoons' as the model and is not WirlyWirly guaranteed for other sites

    // Mutable variables dependent on the current page
    let downloadElementsTrackProcessed = false
    let bunnyButtonPlacement
    let torrentDetailsPage = false
    let bunnyButtonAddStyles = ''
    let bunnyButtonAddClasses
    let bunnyButtonText = ' 🐰 '

    // If there is a specified paginationLoop, mark the processed elements so that bunnyButtons are not repeatedly generated
    SETTINGS.paginationLoop >= 500 ? downloadElementsTrackProcessed = true : null

    if ( document.location.pathname.match(/(\/|\/torrents[^/]*)$/) && SETTINGS.paginationLoop < 500 ) {
        // This is the search page or homepage, both of which require a MutationObserver

        downloadElementsTrackProcessed = true

        let observer = new MutationObserver( function(mutations) {
            // Functionality to run when changes are detected to the target element

            try {
                processDownloadElements(0)
            } catch (error) {
                logger.debug(error)
            }

        })

        let target, config

        if ( document.location.pathname.match(/(\/torrents[^/]*)$/) ) {
            // The search page observer configs
            target = document.querySelector('div.page__torrents > script[nonce]')
            config = { attributes: true }
        } else {
            // The homepage observer configs
            target = document.querySelector('section.panelV2.blocks__top-torrents div.data-table-wrapper tbody')
            config = { childList: true }
        }


        observer.observe(target, config)

    } else if ( pageURL.match(/\/torrents\/\d+/) ) {
        // The torrents details page, so change the style of the BunnyButton
        torrentDetailsPage = true

        // Give the bunnyButton a bar appearance, to fit in better with the other buttons
        bunnyButtonText = '🐰 quiCKIE'
        bunnyButtonAddStyles = `
        background: #153245;
        border-radius: 999px;
        border: #B6D3E7 solid 1px;
        color: #B6D3E7;
        font-weight: bold;
        padding: 1.5%;
        width: 98%;`

    }


    function processDownloadElements(delay) {
        // query and create a BunnyButton for all downloadElements

        setTimeout(() => {

            let allDownloadElements = document.querySelectorAll(`${downloadElementsSelector}:not([data-quickie_processed="true"])`)

            if ( allDownloadElements.length >= 1 ) {

                SETTINGS.bunnyButtonPlacement == 'After' ? bunnyButtonPlacement = 'afterend' : bunnyButtonPlacement = 'beforebegin'

                for (let downloadElement of allDownloadElements) {
                    // For each downloadElement, generate and insert a bunnyButton

                    let bunnyButton = createBunnyButton({ torrentURL: downloadElement.href, buttonText: bunnyButtonText, torrentSettings: SETTINGS, addButtonStyles: bunnyButtonAddStyles, addButtonClasses: bunnyButtonAddClasses })

                    if ( torrentDetailsPage == true ) {
                        // This is the torrentDetails page, which only lists 1 torrent at a time

                        // Place BunnyButton into it's own <li>
                        let clonedParent = downloadElement.parentElement.cloneNode()
                        clonedParent.appendChild(bunnyButton)
                        downloadElement.parentElement.insertAdjacentElement(bunnyButtonPlacement, clonedParent)

                        // Hide the <li> parentElement to avoid a empty gap
                        SETTINGS.hideDL == true ? downloadElement.parentElement.style.display = 'none' : null

                        if ( document.querySelector('li.torrent__seeders.torrent-activity-indicator--seeding') != null ) {
                            // The seedingStatusSelector was matched
                            replaceEmojis(bunnyButton, '🌱')
                            bunnyButton.title = bunnyButton.title.replace(/🔗/, '🌱 Seeding\n🔗')

                        } else if ( document.querySelector('li.torrent__completed.torrent-activity-indicator--completed') != null ) {
                            // The snatchedStatusSelector was matched
                            replaceEmojis(bunnyButton, '🍁')
                            bunnyButton.title = bunnyButton.title.replace(/🔗/, '🍁 Completed\n🔗')
                        } else if ( document.querySelector('span.torrent-icons i.torrent-icons__featured') != null ) {
                            // This is a featured torrent
                            replaceEmojis(bunnyButton, '🏆')
                            bunnyButton.title = bunnyButton.title.replace(/🖥️/, '🏆 Featured 🏆\n💎 Freeleech 💎\n\n🖥️')
                        } else if ( document.querySelector('span.torrent-icons i.torrent-icons__freeleech.fa-star, i.torrent-icons__freeleech.fa-calendar-star, span.torrent-icons i.fa.fa-globe') != null ) {
                            // The freeleechStatusSelector was matched: Star, Calendar, Globe
                            replaceEmojis(bunnyButton, '💎')
                            bunnyButton.title = bunnyButton.title.replace(/🖥️/, '💎 Freeleech 💎\n\n🖥️')
                        }

                    } else {
                        // This is NOT the torrent details page, so it likely uses one of the three views: List, Cards, or Grouped

                        downloadElement.insertAdjacentElement(bunnyButtonPlacement, bunnyButton)

                        if ( downloadElement.closest('td.torrent-search--list__buttons') ) {
                            // This is a List view

                            bunnyButton.style.display = 'inline-grid'
                            bunnyButton.style.fontSize = '110%'
                            bunnyButton.style.padding = '10px'


                        } else if ( downloadElement.closest('article.torrent-card') ) {
                            // This is a Cards view

                            bunnyButton.style.display = 'inline-grid'
                            bunnyButton.style.fontSize = '135%'
                            bunnyButton.style.padding = '10px'

                        } else if ( downloadElement.closest('td.torrent-search--grouped__download') ) {
                            // This is a Grouped view

                            if ( window.screen.availWidth > 900 ) {
                                // The screen is wide enough to accomadate another <td> for this bunnyButton

                                let clonedParent = downloadElement.parentElement.cloneNode()
                                clonedParent.appendChild(bunnyButton)
                                downloadElement.parentElement.insertAdjacentElement(bunnyButtonPlacement, clonedParent)

                                // Hide the <td> parentElement to avoid a empty gap
                                SETTINGS.hideDL == true ? downloadElement.parentElement.style.display = 'none' : null

                            }

                            bunnyButton.style.padding = '4px'

                        } else if ( downloadElement.closest('td.user-bookmarks__actions') ) {
                            // This is the Bookmarks view, move bunnyButton into it's own <li>

                            let clonedParent = downloadElement.parentElement.cloneNode()
                            clonedParent.appendChild(bunnyButton)
                            downloadElement.parentElement.insertAdjacentElement(bunnyButtonPlacement, clonedParent)

                            bunnyButton.style.padding = '4px'

                            // Hide the <li> parentElement to avoid a empty gap
                            SETTINGS.hideDL == true ? downloadElement.parentElement.style.display = 'none' : null

                        }

                        try {
                            if ( downloadElement.closest('tr').querySelector('td.torrent-activity-indicator--seeding') != null ) {
                                // The seedingStatusSelector was matched
                                replaceEmojis(bunnyButton, '🌱')
                                bunnyButton.title = bunnyButton.title.replace(/🔗/, '🌱 Seeding\n🔗')
                            } else if ( downloadElement.closest('tr').querySelector('td.torrent-activity-indicator--completed') != null ) {
                                // The snatchedStatusSelector was matched
                                replaceEmojis(bunnyButton, '🍁')
                                bunnyButton.title = bunnyButton.title.replace(/🔗/, '🍁 Completed\n🔗')
                            } else if ( downloadElement.closest('tr').querySelector('i.torrent-icons__featured') != null ) {
                                // This is a featured torrent
                                replaceEmojis(bunnyButton, '🏆')
                                bunnyButton.title = bunnyButton.title.replace(/🖥️/, '🏆 Featured 🏆\n💎 Freeleech 💎\n\n🖥️')
                            } else if ( downloadElement.closest('tr').querySelector('i.torrent-icons__freeleech.fa-star, i.torrent-icons__freeleech.fa-calendar-star, i.fa.fa-globe') != null ) {
                                // The freeleechStatusSelector was matched: Star, Calendar, Globe
                                replaceEmojis(bunnyButton, '💎')
                                bunnyButton.title = bunnyButton.title.replace(/🖥️/, '💎 Freeleech 💎\n\n🖥️')
                            }

                        } catch (error) {
                            // An error occured, most likely the page view-type is not a table and therefore the 'tr' is not available
                            logger.debug(error)
                        }

                    }

                    // Hide the downloadElement, as specified by the current tracker settings
                    SETTINGS.hideDL == true ? downloadElement.style.display = 'none' : null

                    if ( downloadElementsTrackProcessed ) {
                        // Keep track of this downloadElement as having been processed my marking it with a unique attribute
                        downloadElement.setAttribute('data-quickie_processed', 'true')
                    }

                }

                attachPresetsMenu('a.quickie_newBunnyButton', SETTINGS.primaryDomain)

            } else {

                if ( SETTINGS.firstTrackerHandlerScan ) {
                    console.error(`---------- ⚠️ quiCKIE ⚠️ ----------\n\nThe script has executed sucessfully, but the initial search found no download elements for which to make BunnyButtons 🐰\n\nIf you are not seeing any BunnyButtons, this usually means that either the CSS selector used for matching the ${primaryDomainToName[primaryDomain]} download buttons needs to be updated or that you are on a site\\page that has pagination.\n\nPaste this command into your browser console, if the returned list is empty, then the CSS Selector is returning no results and needs updating: document.querySelectorAll('${downloadElementsSelector}')\n\nRefer to the quiCKIE GitHub WiKi for a guide on adding a new tracker, which has a section on how to determine\\update the CSS selector.\n\nIf the CSS selector is returning results but there are still no BunnyButtons, it is likely due to pagination. Use quiCKIE's 🔁 setting for pagination compatability.\n\nℹ️ If you are reading this and your BunnyButtons are working fine, you can safely ignore this message. It is likely that the pagination of your current site did not finish loading before quiCKIE performed this first scan.\n\nℹ️ If this page has no download elements to begin with, it means that one of the @match URL's for ${primaryDomainToName[primaryDomain]} is running quiCKIE on pages it should not. Please report this so that quiCKIE won't waste your resources and can be improved.`)
                }


            }

            SETTINGS.firstTrackerHandlerScan = false

            if ( SETTINGS.paginationLoop >= 500 ) {
                // The tracker handler will continuosly scan the page for new downloadElements
                processDownloadElements(SETTINGS.paginationLoop)
            }

        }, delay )

    }

    processDownloadElements(0)

}


function createBunnyButton({
    // Create the bunnyButton that will be displayed on the site
    torrentURL,
    fontSize = 'inherit',
    buttonText = ' 🐰 ',
    torrentSettings = SETTINGS,
    addButtonStyles = '',
    addButtonClasses = [],
}) {

    let bunnyButton = document.createElement('a')
    bunnyButton.classList.add('quickie_bunnyButton')
    bunnyButton.classList.add('quickie_newBunnyButton')
    bunnyButton.href = 'javascript:undefined'
    bunnyButton.textContent = buttonText

    // Indicate that this torrentURL will also Freeleech a torrent
    if ( torrentURL.match(/(&usetoken=1|&fl)/) ) {
        bunnyButton.textContent = bunnyButton.textContent.replace(/🐰/g, '💸')
        bunnyButton.setAttribute('data-emojospecified', 'true')
    }

    bunnyButton.setAttribute('style', `font-size: ${fontSize}; text-align: center; text-decoration: none; text-shadow: none;${addButtonStyles}`)

    bunnyButton.setAttribute('data-torrenturl', torrentURL)

    addButtonClasses.length > 0 ? addButtonClasses.forEach(classItem => bunnyButton.classList.add(classItem) ) : null

    bunnyButton.title = ` ─── 🌎 ${primaryDomainToName[`${torrentSettings.primaryDomain}`]} 🌎 ───
 🗃️ = ${torrentSettings.category}
 💾 = ${torrentSettings.savePath}
 🏷️ = ${torrentSettings.tags}
 ⚖️ = ${torrentSettings.ratioLimit > 0 ? torrentSettings.ratioLimit : ''}
 🌱 = ${torrentSettings.seedTime > 0 ? torrentSettings.seedTime : ''}
 ⬇️ = ${torrentSettings.dlLimit > 0 ? torrentSettings.dlLimit : ''}
 ⬆️ = ${torrentSettings.upLimit}
 🎯 = ${torrentSettings.instance > 0 ? torrentSettings.instance : ''}
 ⏸️ = ${torrentSettings.startPaused}
 📁 = ${torrentSettings.subFolder}
 🧩 = ${torrentSettings.seqPieces}
 🤖 = ${torrentSettings.autoTMM}
 🛡️ = ${torrentSettings.skipHash}

🖥️ ${SETTINGS.torrentClient.client}
🔗 ${bunnyButton.dataset.torrenturl}`

    bunnyButton.addEventListener('mouseover', function(event) {
        // When this bunnyButton is hovered over...

        this.style.textShadow = '0px 0px 1px black, 0 0 5px #B6D3E7'
    })

    bunnyButton.addEventListener('mouseout', function(event) {
        // When this bunnyButton is hovered out...

        this.style.textShadow = 'none'
    })

    bunnyButton.addEventListener('mouseup', function(event) {
        // When this bunnyButton is clicked, determine what kind of click it was and respond accordingly...


        if ( event.shiftKey && event.ctrlKey && event.button == 0 ) {
            // Shift-Ctrl-Click: Add the torrent in a paused state

            // Remember the startPaused setting before changing it
            let pausedSetting = torrentSettings.startPaused

            torrentSettings.startPaused = true
            bunnyButtonClickedActions(this, torrentSettings, 'Tracker')

            // Restore the startPaused setting to what it was
            torrentSettings.startPaused = pausedSetting

        } else if ( event.shiftKey && event.button == 0 ) {
            // Shift-Click: Open the quiCKIE settings panel

            GM_config.open()

        } else if ( event.ctrlKey && event.button == 0 || event.altKey && event.button == 0) {
            // Ctrl-Click \ Cmd-Click: Open the torrentClient in a new tab

            bunnyButtonClickedActions(this, torrentSettings, 'Client')

        } else if ( event.button == 1 ) {
            // Middle-Click: Do what is saved by SETTINGS.globalMiddleClickAction

            bunnyButtonClickedActions(this, torrentSettings, 'globalMiddleClickAction')

        } else if ( event.button == 0 ) {
            // Left-Click: If the tracker setting is 'Global', perform the globalLeftClickAction, otherwise do the specified action

            if ( SETTINGS.leftClick == 'Global' ) {
                // Do what is saved by SETTINGS.globalLeftClickAction
                bunnyButtonClickedActions(this, torrentSettings, 'globalLeftClickAction')
            } else {
                // This tracker is using a specified leftClick action
                bunnyButtonClickedActions(this, torrentSettings, SETTINGS.leftClick)
            }
        }

    })

    return bunnyButton

}


function getPageSeparator(downloadElement, manualSeparator = false) {
    // Determine if the nextSibling element is a separator, and if so return the value


    let separatorText = ' '

    if ( manualSeparator ) {
        // A particular separator has been provided
        separatorText = manualSeparator

    } else {

        try {

            let siblingElement = downloadElement.nextSibling

            // A sibling element doesn't exist, so try using the parentElement.nextSibling
            siblingElement == null ? siblingElement = downloadElement.parentElement.nextSibling : null

            if ( siblingElement.nodeType == 3 && siblingElement.nodeName == '#text' && siblingElement.textContent.match(/[\]\)]/) ){
                // Separator is a bracket type, so insert a | between elements
               separatorText = ' | '

            } else if ( siblingElement.nodeType == 3 && siblingElement.nodeName == '#text' && !siblingElement.textContent.match(/[\[\]\(\)]/) ){
               separatorText = siblingElement.textContent
            }

        } catch (error) {
        }

    }

    return separatorText

}


function bunnyButtonClickedActions(bunnyButton, torrentSettings, settingsValue) {
    // Determine what action to take depending on the mouse button settings

    let buttonAction = settingsValue

    if ( buttonAction.match(/^global/) ) {
        // From the SETTINGS object, get the global action that matches this settingsValue
        buttonAction = SETTINGS[`${settingsValue}`]
    }

    if ( buttonAction == 'Tracker' ) {
        // Add the torrentURL to the tracker using the tracker settings

        let bunnyButtonId = `quiCKIE_bb_${Date.now()}`
        bunnyButton.id = bunnyButtonId

        addTorrent({
            torrentURL: bunnyButton.dataset.torrenturl,
            torrentClient: SETTINGS.torrentClient,
            bunnyButtonId: bunnyButtonId,

            instance: torrentSettings.instance,
            category: torrentSettings.category,
            savePath: torrentSettings.savePath,
            tags: torrentSettings.tags,
            ratioLimit: torrentSettings.ratioLimit,
            seedTime: torrentSettings.seedTime,
            dlLimit: torrentSettings.dlLimit,
            upLimit: torrentSettings.upLimit,
            startPaused: torrentSettings.startPaused,
            subFolder: torrentSettings.subFolder,
            seqPieces: torrentSettings.seqPieces,
            autoTMM: torrentSettings.autoTMM,
            skipHash: torrentSettings.skipHash})

    } else if ( buttonAction == 'TorrentFile' ) {
        // Download the .torrent file using the torrentURL

        replaceEmojis(bunnyButton, '💾')

        let fileElement = document.createElement('a')
        fileElement.href = bunnyButton.dataset.torrenturl

        document.body.appendChild(fileElement)
        fileElement.click()
        document.body.removeChild(fileElement)

    } else if ( buttonAction == 'Presets' ) {
        // Simultate a right-click to open the presets-menu

        // *** NOT WORKING ***

        let rightClickEvent = new MouseEvent('contextmenu', {
            button: 2, // The right mouse button
            bubbles: true,
            cancelable: true,
            // view: window,

        })

        bunnyButton.dispatchEvent(rightClickEvent)

    } else if ( buttonAction == 'Settings') {
        // Open the quiCKIE Settings Panel

        GM_config.open()

    } else if ( buttonAction == 'Client') {
        // Open the clientURL in a new tab

        if ( SETTINGS.torrentClient.client == 'qui') {
            window.open(SETTINGS.torrentClient.quiURL, '_blank').focus()
        } else if ( SETTINGS.torrentClient.client == 'qBitTorrent') {
            window.open(SETTINGS.torrentClient.qBitTorrentURL, '_blank').focus()
        } else if ( SETTINGS.torrentClient.client == 'Transmission') {
            window.open(SETTINGS.torrentClient.transmissionURL, '_blank').focus()
        } else if ( SETTINGS.torrentClient.client == 'Deluge') {
            window.open(SETTINGS.torrentClient.delugeURL, '_blank').focus()
        } else if ( SETTINGS.torrentClient.client == 'ruTorrent') {
            window.open(SETTINGS.torrentClient.ruTorrentURL, '_blank').focus()
        }

    } else if ( buttonAction == 'Nothing') {
        // Do nothing, a null button

        null

    }

}


function replaceEmojis(targetElement, newEmoji) {
    // Replace the emojis of the targetElement with the newEmoji

    targetElement.textContent = targetElement.textContent.replace(emojiRegex, newEmoji)

}


function addTorrent({
    // Using the provided parameters, create a object containing all the info needed to POST a new torrent to the client, then pass that object to the appropriate POST function depending on if the torrentURL has authentication
    torrentURL,
    torrentClient,
    bunnyButtonId,

    instance = '',
    category = '',
    savePath = '',
    tags = '',
    ratioLimit = '',
    seedTime = '',
    dlLimit = '',
    upLimit = '',
    startPaused = false,
    subFolder = false,
    seqPieces = false,
    autoTMM = false,
    skipHash = false}) {

    // ----- POST object -----
    let postData = {
        // The object containing the data to be passed to the appropriate clientPOST function
        torrentClient: torrentClient.client,
        torrentURL: torrentURL,
        bunnyButtonId: bunnyButtonId,
        formData: null,

        // These null placeholders will be filled in depending on the currently selected torrent client
        qui: {
            url: null,
            apiKey: null,
        },
        qBitTorrent: {
            url: null,
            username: null,
            password: null
        },
        transmission: {
            url: null,
            username: null,
            password: null
        },
        deluge: {
            url: null,
            password: null
        },
        ruTorrent: {
            url: null,
            username: null,
            password: null
        },

    }

    // Signify the start of addTorrent by changing the emoji of the clicked on BunnyButton
    let bunnyButton = document.getElementById(postData.bunnyButtonId)
    replaceEmojis(bunnyButton, '🕓')

    if ( postData.torrentClient == 'qui' ) {
        // ----------------------------------- qui -----------------------------------

        if ( torrentClient.quiURL == '' || torrentClient.quiApiKey == '' ) {
            // No quiURL has been provided, alert the user and return
            replaceEmojis(bunnyButton, '❌')
            window.alert('❌ quiCKIE ❌\n\nA quiURL and ApiKey are required\n\nShift-Click the BunnyButton to open the setting panel')
            return
        }

        try {
            // quiURL Example: http://localhost:7476/qui/instances/1
            let quiURLCaptures = torrentClient.quiURL.match(/^(https?:\/\/.+)\/(instances\/\d+)/) // [1] == domain, [2] == instance
            postData.qui.url = `${quiURLCaptures[1]}/api/${quiURLCaptures[2]}/torrents`

        } catch (error) {
            // Failed to parse quiURL for the API endpoint
            replaceEmojis(bunnyButton, '❌')
            window.alert(`❌ quiCKIE ❌\n\nFailed to parse the saved quiURL\n\nℹ️ Check your quiURL for typos, making sure it is in the expected format and that it starts with the appropriate http(s) protocol\n\nHover the quiURL emoji for examples\n\nquiURL: ${torrentClient.quiURL}`)
            return
        }

        // ----- Check for qui Target Instance -----
        if ( instance != '' && instance > 0 ) {
            // SETTINGS.instance: Update the apiURL to point to the specified instance id
            postData.qui.url = postData.qui.url.replace(/\/instances\/\d+/, `\/instances\/${instance}`)
        }

        postData.qui.apiKey = torrentClient.quiApiKey

    } else if ( postData.torrentClient == 'qBitTorrent' ) {
        // ----------------------------------- qBitTorrent -----------------------------------

        if ( torrentClient.qBitTorrentURL == '' || torrentClient.qBitTorrentUsername == '' || torrentClient.qBitTorrentPassword == '' ) {
            // Missing qBitTorrent credentials, alert the user and abort
            replaceEmojis(bunnyButton, '❌')
            window.alert('❌ quiCKIE ❌\n\nA qBitTorrentURL, Username, and Password are required\n\nShift-Click the BunnyButton to open the setting panel')
            return
        }

        try {
            // qBitTorrent Example: http://localhost:8080
            postData.qBitTorrent.url = torrentClient.qBitTorrentURL.match(/^(https?:\/\/.+?)\/?$/)[1]
        } catch (error) {
            replaceEmojis(bunnyButton, '❌')
            window.alert(`❌ quiCKIE ❌\n\nFailed to parse the saved qBitTorrentURL\n\nℹ️ The URL must start with the appropriate http(s) protocol\n\nHover the qBitTorrentURL emoji for examples\n\nqBitTorrentURL: ${torrentClient.qBitTorrentURL}`)
            return
        }

        postData.qBitTorrent.username = torrentClient.qBitTorrentUsername
        postData.qBitTorrent.password = torrentClient.qBitTorrentPassword

    } else if ( postData.torrentClient == 'Transmission' ) {
        // ----------------------------------- Transmission -----------------------------------

        if ( torrentClient.transmissionURL == '' || torrentClient.transmissionUsername == '' || torrentClient.transmissionPassword == '' ) {
            // Missing Transmission credentials, alert the user and abort
            replaceEmojis(bunnyButton, '❌')
            window.alert('❌ quiCKIE ❌\n\nA transmissionURL, Username, and Password are required\n\nShift-Click the BunnyButton to open the setting panel')
            return
        }


        try {
            // TransmissionURL Example: http://localhost:9091 | http://localhost:9091/custom/rpc
            postData.transmission.url = torrentClient.transmissionURL.match(/^(https?:\/\/.+?)\/?$/)[1]
        } catch (error) {
            replaceEmojis(bunnyButton, '❌')
            window.alert(`❌ quiCKIE ❌\n\nFailed to parse the saved transmissionURL\n\nℹ️ The URL must start with the appropriate http(s) protocol\n\nHover the transmissionURL emoji for examples\n\ntransmissionURL: ${torrentClient.transmissionURL}`)
            return
        }

        postData.transmission.username = torrentClient.transmissionUsername
        postData.transmission.password = torrentClient.transmissionPassword

    } else if ( postData.torrentClient == 'Deluge' ) {
        // ----------------------------------- Deluge -----------------------------------

        if ( torrentClient.delugeURL == '' || torrentClient.delugePassword == '' ) {
            // Missing Deluge credentials, alert the user and abort
            replaceEmojis(bunnyButton, '❌')
            window.alert('❌ quiCKIE ❌\n\nA delugeURL and Password are required\n\nShift-Click the BunnyButton to open the setting panel')
            return
        }

        try {
            // Deluge Example: http://localhost:8112
            postData.deluge.url = torrentClient.delugeURL.match(/^(https?:\/\/.+?)\/?$/)[1]
        } catch (error) {
            replaceEmojis(bunnyButton, '❌')
            window.alert(`❌ quiCKIE ❌\n\nFailed to parse the saved delgueURL\n\nℹ️ The URL must start with the appropriate http(s) protocol\n\nHover the delgueURL emoji for examples\n\ndelugeURL: ${torrentClient.delgueURL}`)
            return
        }

        postData.deluge.password = torrentClient.delugePassword

    } else if ( postData.torrentClient == 'ruTorrent' ) {
        // ----------------------------------- ruTorrent -----------------------------------

        if ( torrentClient.ruTorrentURL == '' || torrentClient.ruTorrentUsername == '' || torrentClient.ruTorrentPassword == '' ) {
            // Missing ruTorrent credentials, alert the user and abort
            replaceEmojis(bunnyButton, '❌')
            window.alert('❌ quiCKIE ❌\n\nA ruTorrentURL, Username, and Password are required\n\nShift-Click the BunnyButton to open the setting panel')
            return
        }


        try {
            // ruTorrent Example: http://localhost:8080
            postData.ruTorrent.url = torrentClient.ruTorrentURL.match(/^(https?:\/\/.+?)\/?$/)[1]
        } catch (error) {
            replaceEmojis(bunnyButton, '❌')
            window.alert(`❌ quiCKIE ❌\n\nFailed to parse the saved ruTorrentURL\n\nℹ️ The URL must start with the appropriate http(s) protocol\n\nHover the ruTorrentURL emoji for examples\n\nruTorrentURL: ${torrentClient.ruTorrentURL}`)
            return
        }
        postData.ruTorrent.username = torrentClient.ruTorrentUsername
        postData.ruTorrent.password = torrentClient.ruTorrentPassword

    }

    // ----- POST Form Data -----
    // The form data that will store all the torrent settings

    let form = new FormData()
    form.append('urls', torrentURL)

    // ----- Check for Optional Form Data -----

    if ( category != '' ) {
        // SETTINGS.category: The category for which to apply to this torrent
        form.append('category', category)
    }

    if ( savePath != '' ) {
        // SETTINGS.savePath: The absolute path for where to save this torrent (Writable\Accessible by the torrent client)
        form.append('savepath', savePath)
    }

    if ( tags != '' ) {
        // SETTINGS.tags: A comma separated list of tags for which to apply to this torrent
        form.append('tags', tags)
    }

    if ( ratioLimit > 0 ) {
        // A ratio limit of 0 will stop the torrent after downloading, so take preventative action
        form.append('ratioLimit', ratioLimit)
    } else if ( ratioLimit <= -1 ) {
        // SETTINGS.seedTime: If specified -1, stop the torrent upon download completion
        form.append('ratioLimit', 0)
    }

    if ( seedTime > 0 ) {
        // A seedtime of 0 will stop the torrent after downloading, so take preventative action
        form.append('seedingTimeLimit', seedTime)
    } else if ( seedTime <= -1 ) {
        // SETTINGS.seedTime: If specified -1, stop the torrent upon download completion
        form.append('seedingTimeLimit', 0)
    }

    if ( dlLimit > 0 ) {
        // SETTINGS.dlLimit
        form.append('dlLimit', dlLimit)
    }

    if ( upLimit > 0 ) {
        // SETTINGS.upLimit
        form.append('upLimit', upLimit)
    }

    if ( startPaused == true ) {
        // SETTINGS.startPaused: Add torrents in a paused state, so they do not automatically begin downloading
        form.append('paused', startPaused)
    }

    if ( subFolder == true ) {
        // SETTINGS.subFolder: Save single-file downloads into their own sub-folder
        form.append('contentLayout', 'Subfolder')
    }

    if ( seqPieces == true ) {
        // SETTINGS.seqPieces: Allow for playback while downloading by enabling "Sequential Piece Downloading" & "First\Last Piece Priority"
        form.append('sequentialDownload', true)
        form.append('firstLastPiecePrio', true)
    }

    if ( autoTMM == true ) {
        // SETTINGS.autoTMM: Enable Auto Torrent Management for these torrents
        form.append('autoTMM', true)
    }

    if ( skipHash == true ) {
        // SETTINGS.skipHash: Skip the initial hash check that is invoked when adding a new torrent
        form.append('skip_checking', true)
    }

    postData.formData = form

    // ----- torrentURL Authentication -----
    let torrentURLAuthentication = false

    if ( postData.torrentURL.match(/magnet:\?xt=urn:btih:/) ) {
        // magnetLink: This torrentURL is a magnetLink, so must be sent directly to the client as it does not support .torrent downloading
        torrentURLAuthentication = true
    } else if ( postData.torrentURL.match(/(auth=|authkey=|passkey=)/) && SETTINGS.globalForcedTorrentFile == false && SETTINGS.forceTorrentFile == false ) {
        // Authenticated: This torrentURL is authenticated and no setting is specifying that it must be downloaded through the browser, so POST directly to the client
        torrentURLAuthentication = true
    }

    if ( torrentURLAuthentication ) {
        // The torrentURL is a magnetLink or has authentication so POST directly to the client

        if ( postData.torrentClient == 'qui' ) {
            // Add torrentURL to qui
            quiPOST(postData)
        } else if ( postData.torrentClient == 'qBitTorrent' ) {
            // Add torrentURL to qBitTorrent
            qBitTorrentPOST(postData)
        } else if ( postData.torrentClient == 'Transmission' ) {
            // Add torrentURL to Transmission
            transmissionPOST(postData)
        } else if ( postData.torrentClient == 'Deluge' ) {
            // Add torrentURL to Deluge
            delugePOST(postData)
        } else if ( postData.torrentClient == 'ruTorrent' ) {
            // Add torrentURL to ruTorrent
            ruTorrentPOST(postData)
        }

    } else {
        // The torrentURL has not authentication or a setting has specified it be downloaded through the browser before being sent to the client
        getFileBlob(postData)

    }

}


async function getFileBlob(postData) {
    // Download a file blob with the provided URL and then call the appropriate POST function

    // Signify the start of getFileBlob by changing the emoji of the clicked on BunnyButton
    let bunnyButton = document.getElementById(postData.bunnyButtonId)
    replaceEmojis(bunnyButton, '🧲')

    let fileURL = postData.torrentURL

    let results = GM_xmlhttpRequest({
        method: 'get',
        url: fileURL,
        responseType: 'blob',
        onload: function(response) {
            // ----- File Downloaded -----
            let blobData = response.response

            if ( blobData.type != 'application/x-bittorrent' ) {
                // The downloaded file is NOT a .torrent type, abort the POST
                replaceEmojis(bunnyButton, '❌')

                console.log(response)
                window.alert(`❌ quiCKIE ❌\n\nThe file quiCKIE downloaded that would be sent to ${postData.torrentClient} was not a .torrent file. Aborting the addition, make sure the torrentURL of this BunnyButton is downloading a valid .torrent file\n\nFileType: ${blobData.type}\n\nStatus Code: ${response.status}\n\ntorrentURL: ${fileURL}\n\nThe full response has been printed in the console`)
                return

            } else {
                // The downloaded file is a valid .torrent type, so POST it to the client

                postData.formData.append('torrent', blobData)

                replaceEmojis(bunnyButton, '🕓')

                if ( postData.torrentClient == 'qui' ) {
                    // Add torrentURL to qui
                    quiPOST(postData)
                } else if ( postData.torrentClient == 'qBitTorrent' ) {
                    // Add torrentURL to qBitTorrent
                    qBitTorrentPOST(postData)
                } else if ( postData.torrentClient == 'Transmission' ) {
                    // Add torrentURL to Transmission
                    transmissionPOST(postData)
                } else if ( postData.torrentClient == 'Deluge' ) {
                    // Add torrentURL to Deluge
                    delugePOST(postData)
                } else if ( postData.torrentClient == 'ruTorrent' ) {
                    // Add torrentURL to ruTorrent
                    ruTorrentPOST(postData)
                }
            }

        },
        onerror: function(response) {
            // There was an error getting the .torrent file
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThere was an error when attempting to download the .torrent file that would then be sent to ${postData.torrentClient}. Make sure the server is online and the torrentURL is a valid http link and NOT a magnet link\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\ntorrentURL: ${fileURL}\n\nThe full response has been printed in the console`)

        },
        ontimeout: function(response) {
            // The connection timed out
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThe connection timed out when attempting to download the .torrent file that would then be sent to ${postData.torrentClient}\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\ntorrentURL: ${fileURL}\n\nThe full response has been printed in the console`)

        }
    })

}


async function quiPOST(postData) {
    // Using the properties of the paramater object, send a POST to qui

    let bunnyButton = document.getElementById(postData.bunnyButtonId)

    GM_xmlhttpRequest({
        // Use the internal GM function to prevent source-origin errors
        method: 'POST',
        url: postData.qui.url,
        data: postData.formData,
        headers: {
            'X-API-Key': postData.qui.apiKey,
        },
        onload: function(response) {
            // ----- Actions to take after the request has completed -----

            if (response.status == 201) {
                // Success: The torrent has been added to qui

                replaceEmojis(bunnyButton, '✔️')

            } else {
                // Failed: The torrent was NOT added to qui, log the response and display an alert...
                console.log(response)

                replaceEmojis(bunnyButton, '❌')

                if (response.status == 401) {
                    // Unauthorized
                    window.alert(`❌ quiCKIE ❌\n\nqui was reached but then failed authorization\n\nℹ️ This usually means a bad ApiKey, check it for typos and make sure it's still valid\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nApiKey: ${postData.quiApiKey}\n\nThe full response has been printed in the console`)
                } else {
                    window.alert(`❌ quiCKIE ❌\n\nqui was reached but then failed to add the torrent\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nThe full response has been printed in the console`)
                }

            }

        },
        onerror: function(response) {
            // There was an error making the POST
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThere was an error when connecting to qui\n\nℹ️ This is usually caused by qui not running or a bad quiURL. Check the service is running and the quiURL for typos, usually it's the same instance url you can copy-paste from your browser\n\nStatus Code: ${response.status}\n\nquiURL: ${SETTINGS.torrentClient.quiURL}\n\nThe full response has been printed in the console`)

        },
        ontimeout: function(response) {
            // The connection timed out
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThe connection to qui timed out\n\nℹ️ Check the service is running and the quiURL for typos, usually it's the same url you can copy-paste from your browser\n\nStatus Code: ${response.status}\n\nquiURL: ${SETTINGS.torrentClient.quiURL}\n\nThe full response has been printed in the console`)

        }
    })

}


async function qBitTorrentPOST(postData) {
    // First send a POST to login and then on success send another POST to add a torrent

    // qBitTorrent expects a different name for these fields
    postData.formData.get('paused') ? postData.formData.append('stopped', true) : null

    // qBitTorrent expects bytes, so convert these KB values to bytes
    postData.formData.get('dlLimit') > 0 ? postData.formData.set('dlLimit', Number(postData.formData.get('dlLimit')) * 1024) : null
    postData.formData.get('upLimit') > 0 ? postData.formData.set('upLimit', Number(postData.formData.get('upLimit')) * 1024) : null


    // Signify the start of qBitTorrentPost by changing the emoji of the clicked on BunnyButton
    let bunnyButton = document.getElementById(postData.bunnyButtonId)
    replaceEmojis(bunnyButton, '🧑')

    GM_xmlhttpRequest({
        // First, send a POST to login to qBittorrent
        method: 'POST',
        url: `${postData.qBitTorrent.url}/api/v2/auth/login`,
        headers: {
            'Referer': postData.qBitTorrent.url,
        },
        data: new URLSearchParams({
            'username': postData.qBitTorrent.username,
            'password': postData.qBitTorrent.password,
        }),
        onload: function(response) {
            // The login POST has been sent and returned, check the response before proceeding...

            if ( response.responseText == 'Ok.' ) {
                // Succesfully logged into qBitTorrent, ready to send another POST to add a new torrent

                replaceEmojis(bunnyButton, '🕓')
                GM_xmlhttpRequest({
                    // Use the internal GM function to prevent source-origin errors
                    method: 'POST',
                    url: `${postData.qBitTorrent.url}/api/v2/torrents/add`,
                    data: postData.formData,
                    onload: function(response) {
                        // ----- Actions to take after the torrent POST has completed -----

                        if (response.status == 200) {
                            // Success: The torrent has been added to qBitTorrent

                            replaceEmojis(bunnyButton, '✔️')

                        } else {
                            // Failed: The torrent was NOT added to qBitTorrent, log the response and display an alert...
                            console.log(response)

                            replaceEmojis(bunnyButton, '❌')

                            window.alert(`❌ quiCKIE ❌\n\nqBitTorrent was reached and logged into, but then failed when trying to add the torrent\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nqBitTorrentURL: ${SETTINGS.torrentClient.qBitTorrentURL}\n\nThe full response has been printed in the console`)

                        }

                    },
                    onerror: function(response) {
                        // There was an error making the POST
                        console.log(response)
                        replaceEmojis(bunnyButton, '❌')

                        window.alert(`❌ quiCKIE ❌\n\nqBitTorrent was reached and logged into, but there was an error when trying to POST the torrent\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nqBitTorrentURL: ${SETTINGS.torrentClient.qBitTorrentURL}\n\nThe full response has been printed in the console`)

                    },
                    ontimeout: function(response) {
                        // The connection timed out
                        console.log(response)
                        replaceEmojis(bunnyButton, '❌')

                        window.alert(`❌ quiCKIE ❌\n\nqBitTorrent was reached and logged into, but the connection timedout when trying to POST the torrent\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nqBitTorrentURL: ${SETTINGS.torrentClient.qBitTorrentURL}\n\nThe full response has been printed in the console`)

                    }
                })

            } else if ( response.responseText == 'Fails.' ) {
                // Failed to login to qBitTorrent
                console.log(response)
                replaceEmojis(bunnyButton, '❌')

                window.alert(`❌ quiCKIE ❌\n\nqBitTorrent was reached, but the login attempt failed\n\nℹ️ Check your username\\password for typos\n\nStatus Code: ${response.status}\n\nqBitTorrentURL: ${SETTINGS.torrentClient.qBitTorrentURL}\n\nThe full response has been printed in the console`)

            }

        },
        onerror: function(response) {
            // There was an error logging in
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThere was an error connecting to qBitTorrent to attempt the login\n\nℹ️ Check the service is running and the qBitTorrentURL for typos, usually it's the same url you can copy-paste from your browser\n\nStatus Code: ${response.status}\n\nqBitTorrentURL: ${SETTINGS.torrentClient.qBitTorrentURL}\n\nThe full response has been printed in the console`)

        },
        ontimeout: function(response) {
            // The connection timed out
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThe connection to qBitTorrent timed out when attempting the login\n\nℹ️ Check the service is running and the qBitTorrentURL for typos, usually it's the same url you can copy-paste from your browser\n\nStatus Code: ${response.status}\n\nqBitTorrentURL: ${SETTINGS.torrentClient.qBitTorrentURL}\n\nThe full response has been printed in the console`)

        }
    })

}


async function transmissionPOST(postData) {
    // First send a POST to login and then on success send another POST to add a torrent

    let labels
    postData.formData.get('tags') ? labels = postData.formData.get('tags').split(',') : null

    let transmissionData = {
        method: 'torrent-add',
        arguments: {
            'download-dir': postData.formData.get('savepath'),
            labels: labels,
            paused: postData.formData.get('paused'),
            'sequential-download': postData.formData.get('sequentialDownload'),
        },
    }

    if ( postData.formData.get('torrent') ) {
        // fileBlob: POST using the available .torrent blob, but first convert it to base64 as required by Transmission

        let base64String = await base64encode(postData.formData.get('torrent'))

        transmissionData.arguments.metainfo = base64String
        transmissionData = JSON.stringify(transmissionData)

    } else {
        // torrentURL|magnetLink: POST using the provided URL
        transmissionData.arguments.filename = postData.torrentURL
        transmissionData = JSON.stringify(transmissionData)
    }


    // If the user provided a full rpc url use it, otherwise append the default
    postData.transmission.url.match(/\/rpc$/) ? null : postData.transmission.url = `${postData.transmission.url}/transmission/rpc`

    // Signify the start of transmissionPOST by changing the emoji of the clicked on BunnyButton
    let bunnyButton = document.getElementById(postData.bunnyButtonId)
    replaceEmojis(bunnyButton, '🧑')

    GM_xmlhttpRequest({
        // First, send a POST to login to Transmission
        method: 'POST',
        url: `${postData.transmission.url}`,
        headers: {
            Authorization: `Basic ${btoa(`${postData.transmission.username}:${postData.transmission.password}`)}`,
        },
        onload: function(response) {
            // The login POST has been sent and returned, check the response before proceeding...

            let transmissionSessionId = ''
            try {
                transmissionSessionId = response.responseText.match(/X-Transmission-Session-Id: (\w+)/)[1]
            } catch (error) {

            }

            if ( transmissionSessionId != '') {
                // Succesfully logged into Transmission, send another POST to add the new torrent

                replaceEmojis(bunnyButton, '🕓')
                GM_xmlhttpRequest({
                    // Use the internal GM function to prevent source-origin errors
                    method: 'POST',
                    url: `${postData.transmission.url}`,
                    headers: {
                        Authorization: `Basic ${btoa(`${postData.transmission.username}:${postData.transmission.password}`)}`,
                        'X-Transmission-Session-Id': transmissionSessionId,
                    },
                    data: transmissionData,
                    onload: function(response) {
                        // ----- Actions to take after the torrent POST has completed -----

                        let postResponse = JSON.parse(response.responseText)

                        if ( postResponse.result == 'success' ) {
                            // Success: The torrent has been added to Transmission

                            replaceEmojis(bunnyButton, '✔️')

                        } else {
                            // Failed: The torrent was NOT added to Transmission, log the response and display an alert...
                            console.log(response)

                            replaceEmojis(bunnyButton, '❌')

                            window.alert(`❌ quiCKIE ❌\n\nTransmission was reached and logged into, but then failed when trying to add the torrent\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\ntransmissionURL: ${SETTINGS.torrentClient.transmissionURL}\n\nThe full response has been printed in the console`)

                        }

                    },
                    onerror: function(response) {
                        // There was an error making the POST
                        console.log(response)
                        replaceEmojis(bunnyButton, '❌')

                        window.alert(`❌ quiCKIE ❌\n\nTransmission was reached and logged into, but there was an error when trying to POST the torrent\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\ntransmissionURL: ${SETTINGS.torrentClient.transmissionURL}\n\nThe full response has been printed in the console`)

                    },
                    ontimeout: function(response) {
                        // The connection timed out
                        console.log(response)
                        replaceEmojis(bunnyButton, '❌')

                        window.alert(`❌ quiCKIE ❌\n\nTransmission was reached and logged into, but the connection timedout when trying to POSt the torrent\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\ntransmissionURL: ${SETTINGS.torrentClient.transmissionURL}\n\nThe full response has been printed in the console`)

                    }
                })

            } else {
                // Failed to login to Transmission

                console.log(response)
                replaceEmojis(bunnyButton, '❌')

                window.alert(`❌ quiCKIE ❌\n\nTransmission was reached, but the login attempt failed\n\nℹ️ Check your Username\\Password for typos.\n\nStatus Code: ${response.status}\n\ntransmissionURL: ${SETTINGS.torrentClient.transmissionURL}\n\nThe full response has been printed in the console`)

            }

        },
        onerror: function(response) {
            // There was an error logging in
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThere was an error connecting to Transmission to attempt the login\n\nℹ️ Check the service is running and the transmissionURL for typos, usually it's the same url you can copy-paste from your browser\n\nStatus Code: ${response.status}\n\ntransmissionURL: ${SETTINGS.torrentClient.transmissionURL}\n\nThe full response has been printed in the console`)

        },
        ontimeout: function(response) {
            // The connection timed out
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThe connection to Transmission timed out when attempting the login\n\nℹ️ Check the service is running and the transmissionURL for typos, usually it's the same url you can copy-paste from your browser\n\nStatus Code: ${response.status}\n\ntransmissionURL: ${SETTINGS.torrentClient.transmissionURL}\n\nThe full response has been printed in the console`)

        }
    })

}


async function delugePOST(postData) {
    // First send a POST to login to Deluge, then send another POST to add the torrent to Deluge
    // Supports magnet links and file blobs, but not authenticated torrentURLs, which need to firse be download with getFileBlob()

    let torrentOptions = {
        'download_location': postData.formData.get('savepath'),
        'max_upload_speed': Number(postData.formData.get('upLimit')),
        'max_download_speed': Number(postData.formData.get('dlLimit')),
        'add_paused': postData.formData.get('paused'),
        'sequential_downloads': postData.formData.get('sequentialDownload'),
        'prioritize_first_last_pieces': postData.formData.get('firstLastPiecePrio'),
    }

    let delugeData = {
        method: '',
        params: [],
    }

    if ( postData.formData.get('torrent') != null ) {
        // fileBlob: POST using the available .torrent blob, but first convert it to base64 as required by Deluge

        let base64String = await base64encode(postData.formData.get('torrent'))

        delugeData.method = 'core.add_torrent_file'
        delugeData.params.push('quiCKIE.torrent')
        delugeData.params.push(base64String)
        delugeData.params.push(torrentOptions)

    } else if ( postData.torrentURL.match(/magnet:\?xt=urn/) ) {
        // magnetLink: POST the torrentURL as a magnet link
        delugeData.method = 'core.add_torrent_magnet'
        delugeData.params.push(postData.torrentURL)
        delugeData.params.push(torrentOptions)

    } else {
        // torrentURL: torrentURL can not be sent directly, it must first be downloaded as a blob
        getFileBlob(postData)
        return
    }

    // Signify the start of delugePOST by changing the emoji of the clicked on BunnyButton
    let bunnyButton = document.getElementById(postData.bunnyButtonId)
    replaceEmojis(bunnyButton, '🧑')

    GM_xmlhttpRequest({
        // First, send a POST to login to Deluge
        method: 'POST',
        url: `${postData.deluge.url}/json`,
        headers: { 'content-type': 'application/json' },
        data: JSON.stringify({
            id: 0,
            method: 'auth.login',
            params: [postData.deluge.password],
        }),
        onload: function(response) {
            // ---------- Logged into Deluge ----------
            // The login POST has been sent and returned, check the response before proceeding...

            let delugeSessionId = ''

            try {
                delugeSessionId = response.responseHeaders.match(/_session_id=(\w+)/)[1]
            } catch (error) {
                // Did not get a cookie when trying to login, so the login failed
            }

            if ( delugeSessionId != '') {
                // Succesfully logged into Deluge, send another POST to add the .torrent blob or magnet link

                replaceEmojis(bunnyButton, '🕓')
                GM_xmlhttpRequest({
                    // Use the internal GM function to prevent source-origin errors
                    method: 'POST',
                    url: `${postData.deluge.url}/json`,
                    referer: postData.deluge.url,
                    headers: { 'Content-Type': 'application/json' },
                    data: JSON.stringify({
                        id: 0,
                        method: delugeData.method,
                        params: delugeData.params,
                    }),
                    onload: function(response) {
                        // ----- Actions to take after the request has completed -----

                        let postResponse = JSON.parse(response.responseText)

                        if ( postResponse.result != null || response.responseText.match(/Torrent already in session/) ) {
                            // ---------- The torrent has been added to Deluge ----------

                            if ( response.responseText.match(/Torrent already in session/) ) {
                                console.log(`According to the Deluge response, this torrent can not be added because it already exists in your session\n\nℹ️ If the torrent is not listed in the WebUi, it may be lingering in the daemon session\n\ntorrentURL: ${postData.torrentURL}`)
                            }

                            replaceEmojis(bunnyButton, '✔️')


                        } else {
                            // Failed: The torrent POST was sent to the server but NOT added to Deluge, log the response and display an alert...
                            console.log(response)

                            replaceEmojis(bunnyButton, '❌')

                            window.alert(`❌ quiCKIE ❌\n\nDeluge was reached and logged into, but then failed when trying to add the torrent.\n\nℹ️ This usually means that the WebUi is not connected to the daemon, check the Connection Manager in the WebUi\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\ndelugeURL: ${SETTINGS.torrentClient.delugeURL}\n\nThe full response has been printed in the console`)
                        }
                    },
                    onerror: function(response) {
                        // There was an error in the torrent add POST
                        console.log(response)
                        replaceEmojis(bunnyButton, '❌')

                        window.alert(`❌ quiCKIE ❌\n\nDeluge was reached and logged into, but there was an error when trying to POST the torrent\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\ndelgueURL: ${SETTINGS.torrentClient.delugeURL}\n\nThe full response has been printed in the console`)

                    },
                    ontimeout: function(response) {
                        // The connection timed out
                        console.log(response)
                        replaceEmojis(bunnyButton, '❌')

                        window.alert(`❌ quiCKIE ❌\n\nDeluge was reached and logged into, but the connection timedout when trying to POST the torrent\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\ndelugeURL: ${SETTINGS.torrentClient.delugeURL}\n\nThe full response has been printed in the console`)

                    }
                })

            } else {
                // Failed to login to Deluge
                console.log(response)
                replaceEmojis(bunnyButton, '❌')

                window.alert(`❌ quiCKIE ❌\n\nDeluge was reached, but the login attempt failed\n\nℹ️ Check your Username\\Password for typos.\n\nStatus Code: ${response.status}\n\ndelugeURL: ${SETTINGS.torrentClient.delugeURL}\n\nThe full response has been printed in the console`)

            }

        },
        onerror: function(response) {
            // There was an error logging in
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThere was an error connecting to Deluge to attempt the login\n\nℹ️ Check the service is running and the delugeURL for typos, usually it's the same url you can copy-paste from your browser\n\nStatus Code: ${response.status}\n\ndelugeURL: ${SETTINGS.torrentClient.delugeURL}\n\nThe full response has been printed in the console`)

        },
        ontimeout: function(response) {
            // The connection timed out
            console.log(response)
            replaceEmojis(bunnyButton, '❌')

            window.alert(`❌ quiCKIE ❌\n\nThe connection to Deluge timed out when attempting the login\n\nℹ️ Check the service is running and the delugeURL for typos, usually it's the same url you can copy-paste from your browser\n\nStatus Code: ${response.status}\n\ndelugeURL: ${SETTINGS.torrentClient.delugeURL}\n\nThe full response has been printed in the console`)

        }
    })

}


async function ruTorrentPOST(postData) {
    // *** TO-DO ***
    // ruTorrent confuses me, it seems there's different ways to login (either using an http form or through the api) and I'm not sure about the procs\cons of each approach... From a brief glance, the torrent POST requires base64 like transmissionPOST()

}


// @thirdPartyIntegrations
function scanForThirdPartyTorrentURLS(delay) {
    // Check for elements that have the unique 'data-quickie_torrenturl' attribute designating them as integrated thirdParty torrentURLs for which to generate a BunnyButton. This process will loop every 5000ms.

    setTimeout(() => {

        let allThirdPartyElements = document.querySelectorAll('[data-quickie_torrenturl]')

        if ( allThirdPartyElements.length > 0 ) {

            // Use an existing BunnyButton as the base for which to pull styles from
            let existingBB = document.querySelector('a.quickie_bunnyButton:not(a.quickie_thirdParty)')

            for (let downloadElement of allThirdPartyElements) {
                // For each thirdPartyElement, create a BunnyButton using the elements 'data-quickie_torrenturl' attribute

                let torrentSettings = {
                    primaryDomain: primaryDomain,
                    category: SETTINGS.category,
                    savePath: SETTINGS.savePath,
                    tags: SETTINGS.tags,
                    ratioLimit: SETTINGS.ratioLimit,
                    seedTime: SETTINGS.seedTime,
                    dlLimit: SETTINGS.dlLimit,
                    upLimit: SETTINGS.upLimit,
                    instance: SETTINGS.instance,
                    startPaused: SETTINGS.startPaused,
                    subFolder: SETTINGS.subFolder,
                    seqPieces: SETTINGS.seqPieces,
                    autoTMM: SETTINGS.autoTMM,
                    skipHash: SETTINGS.skipHash,
                }

                // If allowd, check for the tracker-specific settings for this thirdParty DL element
                if ( SETTINGS.thirdPartyScan == 'On + 🌎' ) {

                    if ( SETTINGS.firstThirdPartyScan ) {
                        // This being the first scan, update the presetMenuItems object so that it includes properties for ALL trackers
                        presetMenuItems = createPresetItems(allPrimaryDomains)
                        SETTINGS.firstThirdPartyScan = false

                    }

                    // [quickie_tracker] : Check if the thirdParty element has specified from which tracker the bunnyButtons should get their settings
                    if ( downloadElement.dataset.quickie_tracker != undefined ) {
                        let thirdPartyDomain = trackerNameToPrimaryDomain[`${downloadElement.dataset.quickie_tracker.toLowerCase()}`]

                        torrentSettings.primaryDomain = thirdPartyDomain
                        torrentSettings.category = GM_config.get(`${thirdPartyDomain}-category`)
                        torrentSettings.savePath = GM_config.get(`${thirdPartyDomain}-savePath`)
                        torrentSettings.tags = GM_config.get(`${thirdPartyDomain}-tags`)
                        torrentSettings.ratioLimit = GM_config.get(`${thirdPartyDomain}-ratioLimit`)
                        torrentSettings.seedTime = GM_config.get(`${thirdPartyDomain}-seedTime`)
                        torrentSettings.dlLimit = GM_config.get(`${thirdPartyDomain}-dlLimit`)
                        torrentSettings.upLimit = GM_config.get(`${thirdPartyDomain}-upLimit`)
                        torrentSettings.instance = GM_config.get(`${thirdPartyDomain}-instance`)
                        torrentSettings.startPaused = GM_config.get(`${thirdPartyDomain}-startPaused`)
                        torrentSettings.subFolder = GM_config.get(`${thirdPartyDomain}-subFolder`)
                        torrentSettings.seqPieces = GM_config.get(`${thirdPartyDomain}-seqPieces`)
                        torrentSettings.autoTMM = GM_config.get(`${thirdPartyDomain}-autoTMM`)
                        torrentSettings.skipHash = GM_config.get(`${thirdPartyDomain}-skipHash`)

                        // Empty problematic settings values
                        torrentSettings.ratioLimit == 0 ? torrentSettings.ratioLimit = '' : null
                        torrentSettings.seedTime == 0 ? torrentSettings.seedTime = '' : null
                        torrentSettings.dlLimit <= 0 ? torrentSettings.dlLimit = '' : null
                        torrentSettings.upLimit <= 0 ? torrentSettings.upLimit = '' : null
                        torrentSettings.instance <= 0 ? torrentSettings.instance = '' : null

                    }

                }

                // [quickie_forcetorrentfile] : Check if the thirdParty element has specified that the torrentURL be downloaded through the browser instead of being determined by quiCKIE
                downloadElement.dataset.quickie_forcetorrentfile == 'true' ? SETTINGS.forceTorrentFile = true : null

                // [quickie_separator] : Check if the thirdParty element would like to use a specific text separator between the element and the bunnyButton
                let separatorNode
                SETTINGS.bunnyButtonPlacement == 'After' ? separatorNode = existingBB.previousSibling : separatorNode = existingBB.nextSibling

                let separatorText
                if ( separatorNode == null ) {
                    separatorText == ' '
                } else {
                    separatorNode.nodeType != 3 ? separatorText = ' ' : separatorText = separatorNode.textContent
                }

                downloadElement.dataset.quickie_separator ? separatorText = downloadElement.dataset.quickie_separator : null

                // Create a bunnyButton using the unique 'quickie_torrenturl' attribute of the thirdParty element
                let bunnyButton = createBunnyButton({torrentURL: downloadElement.dataset.quickie_torrenturl, buttonText: ' 🤝 ', torrentSettings: torrentSettings})

                bunnyButton.style = existingBB.style.cssText
                bunnyButton.classList.add('quickie_thirdParty')


                // Append the bunnyButton after the thirdParty element
                let bunnyButtonPlacement
                SETTINGS.bunnyButtonPlacement == 'After' ? bunnyButtonPlacement = 'afterend' : bunnyButtonPlacement = 'beforebegin'
                downloadElement.insertAdjacentElement(bunnyButtonPlacement, bunnyButton)
                downloadElement.insertAdjacentText(bunnyButtonPlacement, separatorText)

                // Remove the attribute that would match it as a thirdParty element in future loops
                downloadElement.removeAttribute('data-quickie_torrenturl')

                // Signify that there were new thirdParty elements, so the presets-menu function should run
                newThirdParties = true

                // Append the presets-menu to the newly created bunnyButtons
                attachPresetsMenu('a.quickie_newBunnyButton', torrentSettings.primaryDomain)

            }


        }

        // Repeat this function after 5000ms
        scanForThirdPartyTorrentURLS(5000)

    }, delay)

}


// =================================== HELPER FUNCTIONS ======================================



function waitForElement(cssTarget, observeTarget = document.body, observeSubTree = true) {
    // Wait until the cssTarget exists within the observeTarget and then resolve the promise
    // Source: https://stackoverflow.com/a/61511955

    return new Promise( function(resolve) {

        if ( observeTarget.querySelector(cssTarget) ) {
            // The cssTarget already exists within the observeTarget, so immediately resolve the promise
            return resolve(observeTarget.querySelector(cssTarget))
        }

        const observer = new MutationObserver( mutations => {
            // The actions to take when there are new mutations to the observeTarget

            if ( observeTarget.querySelector(cssTarget) ) {
                // The cssTarget has been found within the observeTarget
                observer.disconnect()
                resolve(observeTarget.querySelector(cssTarget))
            }
        })

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        try {
            observer.observe(observeTarget, { childList: true, subtree: observeSubTree })
        } catch (error) {
            // console.log(error)
        }

    })

}


function base64encode(inputData) {
    // Encode the inputData (blob, string, etc) to a base64 string

    return new Promise( function(resolve) {

        const reader = new FileReader()
        reader.onloadend = function() {
            // After the file has been read\loaded, clean the base64 string and resolve the promise
            resolve(reader.result.replace(/^data:.+;base64,/, ''))
        }

        reader.readAsDataURL(inputData)
    })

}


function saveToFile(fileData, filename) {
    // Save the provided fileData to a local file

    mimeTypes = {
        // The different MIME types this function is setup to handle
        // MIME Types: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types

        'json': 'application/json;charset=utf-8;',
        'text': 'text/plain;charset=utf-8;',
        'txt': 'text/plain;charset=utf-8;',
        'torrent': 'application/x-bittorrent',

    }

    let filetype

    try {
        // Parse the provided filename to determine the filetype
        filetype = filename.match(/.*\.(\w+)$/)[1]

    } catch {
        // No file extension was provided, so assume it to be a text type
        filetype = 'text'

    }

    let blobType

    if ( Object.keys(mimeTypes).includes(filetype) ) {
        // The filetype has a registered mime type
        blobType = mimeTypes[filetype]

    } else {
        // The filetype is not registerd, so assume it to be a text type
        blobType = 'text/plain;charset=utf-8;'
    }

    // Create the blob object that will contain the data to be written
    let blobData = new Blob([fileData], { type: blobType });
    let fileURL = URL.createObjectURL(blobData);

    // Create the HTML element that will be automatically clicked on to download the file
    let fileElement = document.createElement("a");
    fileElement.href = fileURL;
    fileElement.download = filename;

    document.body.appendChild(fileElement);
    fileElement.click();
    document.body.removeChild(fileElement);

    URL.revokeObjectURL(fileURL);

}
