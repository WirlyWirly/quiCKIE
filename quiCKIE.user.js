// ==UserScript==

// ----------------------------------- MetaData --------------------------------------

// @name        qui - quiCKIE
// @author      WirlyWirly + contributors 🫶
// @version     0.86
// @description A quiCKIE way to send torrents from various trackers to qui!
//              To be used with a running instance of qui: https://getqui.com/
//              Written on LibreWolf via Violentmonkey

// @icon        https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/icon.webp?raw=true
// @namespace   https://github.com/WirlyWirly
// @run-at      document-end

// @resource    contextMenuCSS https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/contextMenu.css?raw=true
// @resource    settingsPanelCSS https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.css?raw=true

// @require     https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/contextMenu.js?raw=true
// @require     https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@43fd0fe4de1166f343883511e53546e87840aeaf/gm_config.js

// ----------------------------------- Permissions --------------------------------------

// @grant   GM_addStyle
// @grant   GM_getResourceText
// @grant   GM_getValue
// @grant   GM_listValues
// @grant   GM_registerMenuCommand
// @grant   GM_setValue
// @grant   GM_xmlhttpRequest

// ----------------------------------- Matches --------------------------------------

// How to add new trackers: https://github.com/WirlyWirly/quiCKIE/wiki/The-3-Steps-to-Adding-a-New-Tracker-to-quiCKIE

// @match   https://alpharatio.cc/top10.php*
// @match   https://alpharatio.cc/torrents.php*

// @match   https://animebytes.tv/artist.php?id=*
// @match   https://animebytes.tv/collage.php?id=*
// @match   https://animebytes.tv/company.php?id=*
// @match   https://animebytes.tv/series.php?id=*
// @match   https://animebytes.tv/torrents*

// @match   https://bakabt.me/torrent/*

// @match   https://bibliotik.me/collections/*
// @match   https://bibliotik.me/torrents/*

// @match   https://bitporn.eu/playlists/*
// @match   https://bitporn.eu/torrents*

// @match   https://broadcasthe.net/collages.php?id=*
// @match   https://broadcasthe.net/series.php?id=*
// @match   https://broadcasthe.net/torrents.php*
//
// @match   https://www.deepbassnine.com/artist.php?id=*
// @match   https://www.deepbassnine.com/collages.php?id=*
// @match   https://www.deepbassnine.com/torrents.php*
//
// @match   https://www.empornium.sx/collage/*
// @match   https://www.empornium.sx/top10.php*
// @match   https://www.empornium.sx/torrents.php*
// @match   https://www.empornium.sx/user.php?id=*
//
// @match   https://gazellegames.net/collections.php?id=*
// @match   https://gazellegames.net/torrents.php*

// @match   https://www.happyfappy.org/collage/*
// @match   https://www.happyfappy.org/top10.php*
// @match   https://www.happyfappy.org/torrents.php*
// @match   https://www.happyfappy.org/user.php?id=*

// @match   https://hdbits.org/browse.php*
// @match   https://hdbits.org/details.php?id=*
// @match   https://hdbits.org/film/info?id=*

// @match   https://iptorrents.eu/details.php?id=*
// @match   https://iptorrents.eu/t*
// @match   https://iptorrents.eu/torrent.php?id=*
// @match   https://iptorrents.me/details.php?id=*
// @match   https://iptorrents.me/t*
// @match   https://iptorrents.me/torrent.php?id=*

// @match   https://jpopsuki.eu/artist.php?id=*
// @match   https://jpopsuki.eu/collages.php?id=*
// @match   https://jpopsuki.eu/top10.php*
// @match   https://jpopsuki.eu/torrents.php*

// @match   https://materialize.is/collages.php?id=*
// @match   https://materialize.is/top10.php*
// @match   https://materialize.is/torrents.php*

// @match   https://www.myanonamouse.net/
// @match   https://www.myanonamouse.net/t/*
// @match   https://www.myanonamouse.net/tor/browse.php*

// @match   https://nyaa.si/*
// @match   https://nyaa.si/view/*
// @match   https://sukebei.nyaa.si/*
// @match   https://sukebei.nyaa.si/view/*

// @match   https://orpheus.network/artist.php?id=*
// @match   https://orpheus.network/collages.php?id=*
// @match   https://orpheus.network/top10.php*
// @match   https://orpheus.network/torrents.php*

// @match   https://passthepopcorn.me/torrents.php?id=*

// @match   https://portugas.org/torrents*

// @match   https://redacted.sh/artist.php?id=*
// @match   https://redacted.sh/collages.php?id=*
// @match   https://redacted.sh/top10.php*
// @match   https://redacted.sh/torrents.php*

// @match   https://secret-cinema.pw/artist.php?id=*
// @match   https://secret-cinema.pw/collages.php?id=*
// @match   https://secret-cinema.pw/top10.php*
// @match   https://secret-cinema.pw/torrents.php*

// @match   https://thegeeks.click/browse.php*
// @match   https://thegeeks.click/details.php?id=*

// @match   https://tv-vault.me/torrents.php?id=*

// ----------------------------------- Development --------------------------------------

// resource    settingsPanelCSS http://localhost:12345/quiCKIE.css
// resource    contextMenuCSS http://localhost:12345/ContextMenu.css
// require     http://localhost:12345/ContextMenu.js

// ----------------------------------- Script Links --------------------------------------
//
// @homepage    https://github.com/WirlyWirly/quiCKIE
// @updateURL   https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true
// @downloadURL https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true
// ==/UserScript==

// =================================== SETTINGS PANEL ENTRIES ======================================

// @trackerSettingsPanelEntries
const settingsPanelEntries = {
    // Each entry below uses the tracker's unique domain (lowercase) as the property, followed by the row label (TitleCase) as the value.
    // Keep the list alphabetical, as these entries will be used to generate a row for each tracker in the settings panel.
    // Example: https://broadcasthe.net/ --> broadcasthe
    // Example: https://www.myanonamouse.net/ --> myanonamouse 

    'alpharatio': 'AlphaRatio',
    'animebytes': 'AnimeBytes',
    'bakabt': 'BakaBT', 
    'bibliotik': 'Bibliotik',
    'bitporn': 'BitPorn',
    'broadcasthe': 'BroadcasTheNet',
    'deepbassnine': 'DeepBassNine', // @tartuffe
    'empornium': 'Empornium',
    'gazellegames': 'GazelleGames',
    'happyfappy': 'HappyFappy', // @Tamlar
    'hdbits': 'HDBits',
    'iptorrents': 'IP-Torrents',
    'jpopsuki': 'JPopsuki', // @tartuffe
    'materialize': 'Materialize',
    'myanonamouse': 'MyAnonaMouse',
    'nyaa': 'Nyaa',
    'orpheus': 'Orpheus',
    'passthepopcorn': 'PassThePopcorn',
    'portugas': 'Portugas', // @Phreaker
    'redacted': 'Redacted',
    'secret-cinema': 'Secret-Cinema', // @tartuffe
    'thegeeks': 'TheGeeks',
    'tv-vault': 'TV-Vault',

}


// =================================== GENERATE SETTINGS PANEL ======================================

// Determine the saved number of preset fields that should be generated in the settings panel and context menu
if ( GM_getValue('quiCKIE_config') !== undefined ) {
    // Use the presetCount specified with GM_config()
    let quiCKIESettingsObject = JSON.parse(GM_getValue('quiCKIE_config'))

    var presetCount = quiCKIESettingsObject['presetCount']

    // v0.6: Updaters may not have a preset count, delete this block in a few versions...
    if ( presetCount == undefined ) {
        presetCount = 3
    }

} else {
    // No previously saved preset count
    var presetCount = 3
}

// For the sake of code-cleanliness, everything related to GM_config.ini() has been done in this function and moved further down the script
createGMConfigSettingsPanel()

// =================================== CURRENT SITE SETTINGS ======================================

// To save resources while allowing cross-site compatibility, the domain of the site is used when saving settings and creating GM_config fields
// Example: https://broadcasthe.net/ --> broadcasthe
let trackerDomain = document.location.hostname.match(/^(\w+\.)?(.*?)(\.\w+)$/)[2].toLowerCase()

// @trackerSettings
let SETTINGS = {
    // The global qui saved settings
    quiURL: GM_config.get('quiURL'),
    quiApiKey: GM_config.get('quiApiKey'),
    globalLeftClickAction: GM_config.get('globalLeftClickAction'),
    globalMiddleClickAction: GM_config.get('globalMiddleClickAction'),
    
    // If qui fails to download an authenticated torrentURL, change this property to 'true' at the start of the if block to force downloading the .torrent through the browser
    forceTorrentFile: false,

    // The saved settings of the current tracker
    category: GM_config.get(`${trackerDomain}-category`),
    savePath: GM_config.get(`${trackerDomain}-savePath`),
    tags: GM_config.get(`${trackerDomain}-tags`),
    ratioLimit: GM_config.get(`${trackerDomain}-ratioLimit`),
    instance: GM_config.get(`${trackerDomain}-instance`),
    leftClick: GM_config.get(`${trackerDomain}-leftClick`),
    startPaused: GM_config.get(`${trackerDomain}-startPaused`),
    seqPieces: GM_config.get(`${trackerDomain}-seqPieces`),
    
}

// GM_config() sets what should be blank int/float fields to 0, so change them to blank strings
if ( SETTINGS.ratioLimit == 0 ) { SETTINGS.ratioLimit = '' }
if ( SETTINGS.instance == 0 ) { SETTINGS.instance = '' }


// =================================== TRACKER HANDLING ======================================

// @trackerIfBlocks
// Because the site's domain is unique, we can use it to determine what tracker this is and how bunnyButtons should be generated
//  ! This is the same domain used when entering the tracker as a line in the @trackerSettingsPanelEntries
if ( trackerDomain == 'animebytes' ) {
    // ----------------------------------- AnimeBytes -----------------------------------
    // Browse | Collages | Company | Series 

    // Get a list of all the downloadElements (download buttons) on the page
    let allDownloadElements = document.querySelectorAll('a[href^="/torrent/"][title="Download torrent"]')

    for (let downloadElement of allDownloadElements) {
        // For each downloadElement on the list, generate a bunnyButton and insert it after the downloadElement

        let bunnyButton = createBunnyButton(downloadElement.href)

        // Insert the bunnyButton after the page's downloadElement
        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        
        // Insert a spacer between the downloadElement and the bunnyButton, in this case a '<space>|'
        downloadElement.insertAdjacentText('afterend', ' |')

    }

} else if ( trackerDomain == 'alpharatio' ) {
    // ----------------------------------- AlphaRatio -----------------------------------
    // Browse | Details | Top 10

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '  ')

    }

} else if ( trackerDomain == 'bakabt' ) {
    // ----------------------------------- BakaBT -----------------------------------
    // Details

    let allDownloadElements = document.querySelectorAll('a.download_link[href^="/download/"]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '  ')

    }

} else if ( trackerDomain == 'bibliotik' ) {
    // ----------------------------------- Bibliotik -----------------------------------
    // Browse | Details

    let allDownloadElements = document.querySelectorAll('a[href^="/torrents/"][title="Download"]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '  ')

    }

} else if ( trackerDomain == 'bitporn' ) {
    // ----------------------------------- BitPorn -----------------------------------
    // Browse | Details

    let allDownloadElements = document.querySelectorAll('a[href^="https://bitporn.eu/torrents/download/"]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '  ')

    }

} else if ( trackerDomain == 'broadcasthe' ) {
    // ----------------------------------- BroadcasTheNet -----------------------------------
    // Browse | Series | Season\Episodes

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' |')

    }

} else if ( trackerDomain == 'deepbassnine' ) {
    // ----------------------------------- DeepBassNine -----------------------------------
    // Album | Artist | Browse

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '|')

    }

} else if ( trackerDomain == 'empornium' ) {
    // ----------------------------------- Empornium -----------------------------------
    // Browse | Collages | Details | Top10 
    
    let allDownloadElements = document.querySelectorAll('a[href^="/torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href, '130%', '🐰')

        if ( document.location.pathname.match(/\/collage\/\d+/) ) {
            // Collage Page: Insert bunnyButton in the same row as the other buttons
            
            downloadElement.parentElement.insertAdjacentElement('afterend', bunnyButton)

        } else {
            downloadElement.insertAdjacentElement('afterend', bunnyButton)
            downloadElement.insertAdjacentText('afterend', '  ')
        }

    }

} else if ( trackerDomain == 'gazellegames' ) {
    // ----------------------------------- GazelleGames -----------------------------------
    // Browse | Bundles | Game

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '|')

    }

} else if ( trackerDomain == 'happyfappy' ) {
    // ----------------------------------- HappyHappy -----------------------------------
    // Browse | Collages | Details | Top10 

    let allDownloadElements = document.querySelectorAll('a[href^="/torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href, '125%', '🐰')

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '  ')

    }

} else if ( trackerDomain == 'hdbits' ) {
    // ----------------------------------- HDBits -----------------------------------
    // Browse | Details | Film  

    let allDownloadElements = document.querySelectorAll('a.js-download[href^="/download.php/"]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href, '140%', '🐰')

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '  ')

    }

} else if ( trackerDomain == 'iptorrents' ) {
    // ----------------------------------- IP-Torrents -----------------------------------
    // Browse | Details 

    let allDownloadElements = document.querySelectorAll('a[href*="download.php"]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href, '160%', '🐰')

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '  ')

    }

} else if ( trackerDomain == 'jpopsuki' ) {
    // ----------------------------------- JpopSuki -----------------------------------
    // Album | Artist | Browse

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' |')

    }

} else if ( trackerDomain == 'materialize' ) {
    // ----------------------------------- Materialize -----------------------------------
    // Browse | Collages | Details | Top10

    SETTINGS.forceTorrentFile = true

    let allDownloadElements = document.querySelectorAll('a[href*="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' ')

    }

} else if ( trackerDomain == 'myanonamouse' ) {
    // ----------------------------------- MyAnonaMouse -----------------------------------
    // Browse | Details | Homepage

    if ( document.URL.match(/\/t\/\d+/) ) {
        // The book details page, which doesn't require a MutationObserver

        let downloadButton = document.querySelector('a[href^="/tor/download.php/"][title*="Download"]')

        let bunnyButton = createBunnyButton(downloadButton.href, '150%', '🐰')

        downloadButton.insertAdjacentElement('afterend', bunnyButton)

        generatePresetsContextMenu()

    } else {
        // The Browse or Homepage, both of which require a MutationObserver
       
        let observer = new MutationObserver(function(mutations) {
            // Functionality to run when changes are detected to the target element

            try {

                let allDownloadElements = document.querySelectorAll('a[href^="/tor/download.php/"][title*="Download"]')

                for (let downloadElement of allDownloadElements) {

                    let bunnyButton = createBunnyButton(downloadElement.href, '150%', '🐰')

                    downloadElement.insertAdjacentElement('afterend', bunnyButton)

                }

            // Now that the bunnyButtons are in-place, generate the right-click context menu (Presets)
            generatePresetsContextMenu()

            } catch(error) {
                // console.log(error)
                return

            }
        })

        let target = document.getElementById('ssr')
        let config = { childList: true }

        observer.observe(target, config)
    }

} else if ( trackerDomain == 'nyaa' ) {
    // ----------------------------------- Nyaa -----------------------------------
    // Browse | Details

    let allDownloadElements = document.querySelectorAll('a[href^="magnet:?xt\=urn:btih:"]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' ')

    }

} else if ( trackerDomain == 'orpheus' ) {
    // ----------------------------------- Orpheus -----------------------------------
    // Album | Artist | Browse | Collages

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '|')

    }

} else if ( trackerDomain == 'passthepopcorn' ) {
    // ----------------------------------- PassThepopcorn -----------------------------------
    // Film
    
    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' |')

    }

} else if ( trackerDomain == 'portugas' ) {
    // ----------------------------------- Portugas -----------------------------------
    // Browse | Album | Artist
    
    let allDownloadElements = document.querySelectorAll('a[href^="https://portugas.org/torrents/download/"]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.parentElement.insertAdjacentElement('afterend', bunnyButton)

    }

} else if ( trackerDomain == 'redacted' ) {
    // ----------------------------------- Redacted -----------------------------------
    // Album | Artist | Browse | Top10

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', '|')

    }

} else if ( trackerDomain == 'secret-cinema' ) {
    // ----------------------------------- Secret-Cinema -----------------------------------
    // Artist (no DL links as of script creation) | Browse | Movie

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' |')

    }

} else if ( trackerDomain == 'thegeeks' ) {
    // ----------------------------------- TheGeeks -----------------------------------
    // Browse | Details

    let allDownloadElements = document.querySelectorAll('a[href^="download.php/"]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' ')

    }

} else if ( trackerDomain == 'tv-vault' ) {
    // ----------------------------------- TV-Vault -----------------------------------
    // Series

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' |')

    }

}


// =================================== CONTEXT MENU ======================================

// A list of trackerDomains on which to NOT generate the contextMenu, because it will be done elsewhere in the script
let skipTrackerDomains = ['myanonamouse',]

if ( !skipTrackerDomains.includes(trackerDomain) ) {
    // After the bunnyButtons exist, generate and attach to them the right-click context menu (Presets)
    generatePresetsContextMenu()
}


// =================================== SCRIPT FUNCTIONS ======================================

function createGMConfigSettingsPanel() {
    // Generate and initialize the GM_config settings panel. It has been done in a function for code cleanliness.
    
    // @trackerFieldGeneration
    const trackerFieldSuffixes = ['category', 'savePath', 'tags', 'ratioLimit', 'instance', 'leftClick', 'startPaused', 'seqPieces']
    let gmConfigTrackerFields = {}
    let trackerDomains = Object.keys(settingsPanelEntries)
    for ( let trackerDomain of trackerDomains ) {
        // For each trackerDomain (property) of the settingsPanelEntries object, generate the fields that will be used by GM_config() to save\load settings. 
        // Each tracker MUST have the fields displayed in the settings panel; Category (+ row label), SavePath, Tags, RatioLimit, Paused, Piece

        // --- GM_config() Fields ---
        let generatedTrackerFields = {
            [`${trackerDomain}-${trackerFieldSuffixes[0]}`]: {
                'label': settingsPanelEntries[trackerDomain],
                'type': 'text'
            },
            [`${trackerDomain}-${trackerFieldSuffixes[1]}`]: {
                'type': 'text'
            },
            [`${trackerDomain}-${trackerFieldSuffixes[2]}`]: {
                'type': 'text'
            },
            [`${trackerDomain}-${trackerFieldSuffixes[3]}`]: {
                'label': 'Ratio Limit',
                'type': 'float',
                'default': ''
            },
            [`${trackerDomain}-${trackerFieldSuffixes[4]}`]: {
                'label': 'Instance',
                'type': 'int',
                'default': ''
            },
            [`${trackerDomain}-${trackerFieldSuffixes[5]}`]: {
                'type': 'select',
                'options': ['Global', 'Tracker', 'Settings', 'quiTab', 'Nothing'],
                'default': 'Global',
            },
            [`${trackerDomain}-${trackerFieldSuffixes[6]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[7]}`]: {
                'type': 'checkbox',
                'default': false
            }
        }

        gmConfigTrackerFields = {...gmConfigTrackerFields, ...generatedTrackerFields}

    }

    // @presetFieldGeneration
    const presetFieldSuffixes = ['preset', 'presetTrackers', 'category', 'savePath', 'tags', 'ratioLimit', 'instance', 'startPaused', 'seqPieces']
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
                'label': 'Instance',
                'type': 'int',
                'default': ''
            },
            [`preset-${i}-${presetFieldSuffixes[7]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`preset-${i}-${presetFieldSuffixes[8]}`]: {
                'type': 'checkbox',
                'default': false
            }
        }

            gmConfigPresetsFields = {...gmConfigPresetsFields, ...genereatedPresetFields}
    }

    // For all @match entries, generate an object with all the uniqueDomains as keys and the site's homepage as the value
    let trackerHomepages = {}
    for ( let matchURL of GM_info.script.matches ) {

        let homepageURL = matchURL.match(/^(https?:\/\/.+?\/)/)[1]
        let uniqueDomain = homepageURL.match(/^https?:\/\/(\w+\.)?(.*?)\..+\/$/)[2].toLowerCase()


        trackerHomepages = {...trackerHomepages, ...{ [`${uniqueDomain}`]: homepageURL } }
        
    }

    // Import the fonts used by the Settings Panel
    GM_addStyle("@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@100..900&family=Sirin+Stencil&display=swap');")

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
                <div style="padding: 30px 0 0 0"></div>
                🐰
                <span style="user-select: none; background: none; background-color: #FFFFFF; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-filter: brightness(110%); filter: brightness(110%); text-shadow: 0 0 20px rgba(0, 124, 255, 0.60); transition: all 0.3s; font-weight: bold; padding: 10px 0px 10px 0px">
                    <a href="${GM_info.script.homepage}" target="_blank" style="font-family: 'Sirin Stencil', 'Roboto Condensed', Tahoma, Geneva, sans-serif; font-size: 35px; font-weight: 400; font-style: normal; color: #FFFFFF; text-decoration: none; background: none; line-height: 30px">quiCKIE</a>
                </span>
                🐰
                <div style="color: #b7b7b7; font-size: 12px; font-weight: 300; display: block; margin: 16px 0px 0px;">by WirlyWirly ( + Contributors 🫶 )</div>
                <div style=""><span style="color: #b7b7b7; display: block; font-size: 14px; font-weight: 300">* Hover over column headers for details *</span></div>
            </div>
        `,

        'fields': {...{
            // Merge these two field objects so that GM_config reads them properly

            'quiURL': {
                'label': '🔗 quiURL:',
                'type': 'text',
            },
            'quiApiKey': {
                'label': '🔑 ApiKey:',
                'type': 'text',
            },
            'presetCount': {
                'label': '🚀 Presets:',
                'type': 'int',
                'default': 3,
            },
            'globalLeftClickAction': {
                'label': '🖱️ Left-Click \\ Tap:',
                'type': 'select',
                'options': ['Tracker', 'Settings', 'quiTab', 'Nothing'],
                'default': 'Tracker',
            },
            'globalMiddleClickAction': {
                'label': '🖱️ Middle-Click:',
                'type': 'select',
                'options': ['Tracker', 'Settings', 'quiTab', 'Nothing'],
                'default': 'quiTab',
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
                panelStyle.maxHeight = '90%'
                panelStyle.padding = '0px 0px'
                panelStyle.position = 'fixed'
                panelStyle.transform = 'translate(-50%,-50%)'
                panelStyle.width = '1150px'
                
                // ----------------------------------- TABLE CONSTANTS -----------------------------------

                let tableValues = {
                    'icons': {
                        'tracker': '⭐',
                        'presettracker': '👀',
                        'category': '🗃️',
                        'savepath': '💾',
                        'tags': '🏷️',
                        'ratio': '➗',
                        'instance': '🎯',
                        'paused': '⏸️',
                        'seqpieces': '🧩',
                        'preset': '🚀',
                    },

                    'titles': {
                        'presetTrackers': 'Preset Trackers\n\nA comma seperated list of trackers on which to display this preset\n\nUse the full tracker name as shown in the "Tracker" column (case-insensitive)\n\nExample:  HDBits, PassThePopcorn, Nyaa\n\nUse the * wildcard to display this preset on ALL trackers',
                        'category': 'Category\n\nSpecify the category to apply to these these torrents',
                        'savepath': 'Save Path\n\nSpecify the full-path for where to save these torrents\n\n* The path MUST be accessible and writable by the torrent client itself, otherwise it will use the default',
                        'tags': 'Tags\n\nA comma seperated list of tags to apply to these torrents (case-sensitive)\n\nExample:  Media, Movies, Private',
                        'ratio': 'Ratio Limit\n\nStop the torrents when they have seeded to the specified ratio limit.\n\nUse -1 to stop the torrents immediately after downloading is complete',
                        'instance': 'Target qui Instance\n\nSpecify a particular qui instance ID for where to send these torrents\n\nLeave this field blank to use the saved quiURL\n\n* This does NOT support a full url, only an instance ID',
                        'leftclick': "Left-Click \\ Tap\n\nSpecify what action should be taken when the BunnyButton is left-clicked on a PC or tapped on a mobile\n\nThe 'Global' option will use the setting specified above",
                        'paused': 'Start Paused\n\nPause torrents when they are added so as not to automatically begin downloading',
                        'seqpieces': 'Sequential Piece Download\n\nDownload torrent pieces sequentially to allow for media playback while the file is downloading\n\n* This may impact download speed'
                    },

                    'columnText': {
                        'tracker': '⭐ Tracker',
                        'preset': '🚀 Preset',
                        'presetTrackers': '👀 Trackers',
                        'category': '🗃️ Category',
                        'savepath': '💾 SavePath',
                        'tags': '🏷️ Tags',
                        'ratio': `➗`,
                        'instance': '🎯',
                        'leftclick': '🖱️ Click',
                        'paused': '⏸️',
                        'seqpieces': '🧩'
                    }

                }


                // ----------------------------------- TRACKERS TABLE -----------------------------------
                // Convert the various trackerDomain <div> elements created by GM_config() into a <table> with columns/rows

                let table = document.createElement('table')
                table.id = 'quiCKIE_config_tracker_table'
                table.classList.add('quiCKIE_config_table')

                let tcolg = document.createElement('colgroup')
                tcolg.id = 'quiCKIE_config_tracker_table_colg'
                tcolg.classList.add('quiCKIE_config_table_tcolg')

                let thead = document.createElement('thead')
                thead.id = 'quiCKIE_config_tracker_table_thead'
                thead.classList.add('quiCKIE_config_table_thead')

                let tbody = document.createElement('tbody')
                tbody.id = 'quiCKIE_config_tracker_table_tbody'
                tbody.classList.add('quiCKIE_config_table_tbody')

                table.appendChild(tcolg)
                table.appendChild(thead)
                table.appendChild(tbody)

                // Insert the <table> after the GM_config header
                document.getElementById('quiCKIE_config_header').insertAdjacentElement('afterend', table)

                // Generate <th> (table header) for each column
                let headersRow = document.createElement('tr')
                headersRow.classList.add('quiCKIE_config_table_thead_tr')

                for (let columnHeader of ['Tracker', 'Category', 'SavePath', 'Tags', 'Ratio', 'Instance', 'LeftClick', 'Paused', 'SeqPieces']) {
                    let columnGroupElement = document.createElement('col')
                    columnGroupElement.id = `quiCKIE_config_tracker_table_colg_col_${columnHeader.toLowerCase()}`
                    columnGroupElement.classList.add(`quiCKIE_config_table_colg_col`)
                    columnGroupElement.span = 1
                    tcolg.appendChild(columnGroupElement)

                    let headerElement = document.createElement('th')
                    headerElement.innerHTML = columnHeader
                    headerElement.id = `quiCKIE_config_tracker_table_thead_th_${columnHeader.toLowerCase()}`
                    headerElement.classList.add('quiCKIE_config_table_thead_th')
                    headersRow.appendChild(headerElement)
                }

                // Append the headers to the <thead> (tableHeader) element
                thead.appendChild(headersRow)

                // Add the mouse-over text for each column header
                document.getElementById('quiCKIE_config_tracker_table_thead_th_tracker').setAttribute('title', 'Tracker\n\nThe tracker (site) for which these fields will be applied to')

                document.getElementById('quiCKIE_config_tracker_table_thead_th_category').setAttribute('title', tableValues.titles.category)
                document.getElementById('quiCKIE_config_tracker_table_thead_th_savepath').setAttribute('title', tableValues.titles.savepath)
                document.getElementById('quiCKIE_config_tracker_table_thead_th_tags').setAttribute('title', tableValues.titles.tags)
                document.getElementById('quiCKIE_config_tracker_table_thead_th_ratio').setAttribute('title', tableValues.titles.ratio)
                document.getElementById('quiCKIE_config_tracker_table_thead_th_instance').setAttribute('title', tableValues.titles.instance)
                document.getElementById('quiCKIE_config_tracker_table_thead_th_leftclick').setAttribute('title', tableValues.titles.leftclick)
                document.getElementById('quiCKIE_config_tracker_table_thead_th_paused').setAttribute('title', tableValues.titles.paused)
                document.getElementById('quiCKIE_config_tracker_table_thead_th_seqpieces').setAttribute('title', tableValues.titles.seqpieces)

                // Replace The column header text with what will be displayed
                document.getElementById('quiCKIE_config_tracker_table_thead_th_tracker').textContent = tableValues.columnText.tracker
                document.getElementById('quiCKIE_config_tracker_table_thead_th_category').textContent = tableValues.columnText.category
                document.getElementById('quiCKIE_config_tracker_table_thead_th_savepath').textContent = tableValues.columnText.savepath
                document.getElementById('quiCKIE_config_tracker_table_thead_th_tags').textContent = tableValues.columnText.tags
                document.getElementById('quiCKIE_config_tracker_table_thead_th_ratio').textContent = tableValues.columnText.ratio
                document.getElementById('quiCKIE_config_tracker_table_thead_th_instance').textContent = tableValues.columnText.instance
                document.getElementById('quiCKIE_config_tracker_table_thead_th_leftclick').textContent = tableValues.columnText.leftclick
                document.getElementById('quiCKIE_config_tracker_table_thead_th_paused').textContent = tableValues.columnText.paused
                document.getElementById('quiCKIE_config_tracker_table_thead_th_seqpieces').textContent = tableValues.columnText.seqpieces


                let uniqueDomains = Object.keys(settingsPanelEntries)
                for (let uniqueDomainKey of uniqueDomains) {
                    // For each tracker, create 1 <tr> (tablerow). For each field of that tracker, create 1 <td> (tabledata). Populate each <td> with 1 <a> + label field from that tracker.

                    // 1 <tr> for this tracker, appended to the <tbody> (tableBody)
                    let tableRow = document.createElement('tr')
                    tableRow.id = `quiCKIE_config_tracker_table_tr_${uniqueDomainKey}`
                    tableRow.classList.add('quiCKIE_config_table_tbody_tr')
                    tbody.appendChild(tableRow)

                    // 1 <td> for this tracker, appended to the <tr>
                    let labelData = document.createElement('td')
                    labelData.classList.add('quiCKIE_config_table_td_label')
                    tableRow.appendChild(labelData)
                    
                    // Create the trackerHomepage <a> , append it to the <td>
                    let trackerHyperlinkElement = document.createElement('a')
                    trackerHyperlinkElement.href = trackerHomepages[`${uniqueDomainKey}`]
                    trackerHyperlinkElement.target = '_blank'
                    labelData.appendChild(trackerHyperlinkElement)
                    
                    // Move the trackerLabel field into the <a>
                    let trackerLabelElement = document.getElementById(`quiCKIE_config_${uniqueDomainKey}-category_field_label`)
                    trackerLabelElement.removeAttribute('for')
                    trackerLabelElement.classList.add('quiCKIE_config_field_tracker_label')
                    trackerHyperlinkElement.appendChild(trackerLabelElement)

                    // The field suffixes as specified in @trackerFieldGeneration
                    for (let fieldSuffix of trackerFieldSuffixes) {
                        // Create a <td> for each input field and move the GM_config field into it

                        let dataElement = document.createElement('td')
                        dataElement.classList.add('quiCKIE_config_table_tbody_td_field')

                        let fieldElement = document.getElementById(`quiCKIE_config_field_${uniqueDomainKey}-${fieldSuffix}`)
                        fieldElement.setAttribute('data-fieldType', fieldSuffix)

                        // Move the GM_Config field into the <td> and then the <td> into the <tr>
                        dataElement.appendChild(fieldElement)
                        tableRow.appendChild(dataElement)

                        // Clean-up: Remove the now empty GM_config element
                        document.getElementById(`quiCKIE_config_${uniqueDomainKey}-${fieldSuffix}_var`).remove()

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
                    presetsHeader.setAttribute('style', 'font-size: 20pt; text-align: center')
                    presetsHeader.innerHTML = `
                🚀
                <span style="user-select: none; background: none; background-color: #FFFFFF; -webkit-background-clip: text; -webkit-text-fill-color: transparent; -webkit-filter: brightness(110%); filter: brightness(110%); text-shadow: 0 0 20px rgba(0, 124, 255, 0.60); transition: all 0.3s; font-weight: bold; padding: 10px 0px 10px 0px">
                    <span href="${GM_info.script.homepage}" target="_blank" style="font-family: 'Sirin Stencil', 'Roboto Condensed', Tahoma, Geneva, sans-serif; font-size: 35px; font-weight: 400; font-style: normal; color: #FFFFFF; text-decoration: none; background: none; line-height: 30px">Presets</span>
                </span>
                🚀
                `

                    // presetsHeader.setAttribute('style', "text-align: center; background: none; text-shadow: 0 0 20px rgba(0, 124, 255, 0.60); padding: 10px 0px 10px 0px; font-family: 'Sirin Stencil', 'Roboto Condensed', Tahoma, Geneva, sans-serif; font-size: 35px; font-weight: 400; font-style: normal; line-height: 30px")

                    document.getElementById('quiCKIE_config_tracker_table').insertAdjacentElement('afterend', presetsHeader)

                    // Generate <th> (table header) for each column
                    headersRow = document.createElement('tr')
                    headersRow.classList.add('quiCKIE_config_table_thead_tr')

                    for (let columnHeader of ['Preset', 'presetTrackers', 'Category', 'SavePath', 'Tags', 'Ratio', 'Instance', 'Paused', 'SeqPieces']) {
                        let columnGroupElement = document.createElement('col')
                        columnGroupElement.id = `quiCKIE_config_preset_table_colg_col_${columnHeader.toLowerCase()}`
                        columnGroupElement.classList.add(`quiCKIE_config_preset_table_colg_col`)
                        columnGroupElement.span = 1
                        tcolg.appendChild(columnGroupElement)

                        let headerElement = document.createElement('th')
                        headerElement.innerHTML = columnHeader
                        headerElement.id = `quiCKIE_config_preset_table_thead_th_${columnHeader.toLowerCase()}`
                        headerElement.classList.add('quiCKIE_config_preset_table_thead_th')
                        headersRow.appendChild(headerElement)
                    }
                    
                    // Append the headers to the <thead> (tableHeader) element
                    thead.appendChild(headersRow)

                    // Add the mouse-over text for each column header
                    document.getElementById('quiCKIE_config_preset_table_thead_th_preset').setAttribute('title', 'Preset\n\nThe name that will be displayed in the right-click context menu\n\nPresets without a name will NOT be displayed\n\To display a divider in your list, pick one of these characters and use it as the name.\n\n- = . [space]')
                    document.getElementById('quiCKIE_config_preset_table_thead_th_category').setAttribute('title', tableValues.titles.category)
                    document.getElementById('quiCKIE_config_preset_table_thead_th_savepath').setAttribute('title', tableValues.titles.savepath)
                    document.getElementById('quiCKIE_config_preset_table_thead_th_tags').setAttribute('title', tableValues.titles.tags)
                    document.getElementById('quiCKIE_config_preset_table_thead_th_ratio').setAttribute('title', tableValues.titles.ratio)
                    document.getElementById('quiCKIE_config_preset_table_thead_th_instance').setAttribute('title', tableValues.titles.instance)
                    document.getElementById('quiCKIE_config_preset_table_thead_th_presettrackers').setAttribute('title', tableValues.titles.presetTrackers)
                    document.getElementById('quiCKIE_config_preset_table_thead_th_paused').setAttribute('title', tableValues.titles.paused)
                    document.getElementById('quiCKIE_config_preset_table_thead_th_seqpieces').setAttribute('title', tableValues.titles.seqpieces)


                    // Replace The column header text with what will be displayed
                    document.getElementById('quiCKIE_config_preset_table_thead_th_preset').textContent = tableValues.columnText.preset
                    document.getElementById('quiCKIE_config_preset_table_thead_th_category').textContent = tableValues.columnText.category
                    document.getElementById('quiCKIE_config_preset_table_thead_th_savepath').textContent = tableValues.columnText.savepath
                    document.getElementById('quiCKIE_config_preset_table_thead_th_tags').textContent = tableValues.columnText.tags
                    document.getElementById('quiCKIE_config_preset_table_thead_th_ratio').textContent = tableValues.columnText.ratio
                    document.getElementById('quiCKIE_config_preset_table_thead_th_instance').textContent = tableValues.columnText.instance
                    document.getElementById('quiCKIE_config_preset_table_thead_th_presettrackers').textContent = tableValues.columnText.presetTrackers
                    document.getElementById('quiCKIE_config_preset_table_thead_th_paused').textContent = tableValues.columnText.paused
                    document.getElementById('quiCKIE_config_preset_table_thead_th_seqpieces').textContent = tableValues.columnText.seqpieces

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

                            let fieldElement = document.getElementById(`quiCKIE_config_field_preset-${i}-${fieldSuffix}`)
                            fieldElement.setAttribute('data-fieldType', fieldSuffix)

                            // Move the GM_Config field into the <td> and then the <td> into the <tr>
                            dataElement.appendChild(fieldElement)
                            tableRow.appendChild(dataElement)

                            // Clean-up: Remove the now empty GM_config element
                            document.getElementById(`quiCKIE_config_preset-${i}-${fieldSuffix}_var`).remove()

                        }

                    }
                    
                    // Create the list of selectable items that appears when typing to the presetTrackers field
                    let trackerTitles = Object.entries(settingsPanelEntries).map (
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


                // ----------------------------------- TIDY UP THE WINDOW -----------------------------------
                
                // Remove 0 from 'int' and 'float' fields
                for ( let field of document.getElementById('quiCKIE_config').querySelectorAll('input[data-fieldtype="ratioLimit"]') ) {
                    if ( field.value == 0 ) {
                        field.value = ''
                    }
                }

                for ( let field of document.getElementById('quiCKIE_config').querySelectorAll('input[data-fieldtype="instance"]') ) {
                    if ( field.value == 0 ) {
                        field.value = ''
                    }
                }
                
                // Set the placeholder examples for the various input fields
                document.getElementById('quiCKIE_config_field_quiURL').placeholder = 'http://localhost:7476/qui/instances/1'
                document.getElementById('quiCKIE_config_field_quiApiKey').placeholder = 'abc123'

                document.getElementById('quiCKIE_config_field_broadcasthe-savePath').placeholder = '/downloads/BroadcasTheNet'
                document.getElementById('quiCKIE_config_field_broadcasthe-category').placeholder = 'BroadcasTheNet'
                document.getElementById('quiCKIE_config_field_broadcasthe-tags').placeholder = 'series, media'
                document.getElementById('quiCKIE_config_field_broadcasthe-ratioLimit').placeholder = '8.50'
                document.getElementById('quiCKIE_config_field_broadcasthe-instance').placeholder = '2'

                document.getElementById('quiCKIE_config_field_gazellegames-savePath').placeholder = '/downloads/GazelleGames'
                document.getElementById('quiCKIE_config_field_gazellegames-category').placeholder = 'GazelleGames'
                document.getElementById('quiCKIE_config_field_gazellegames-tags').placeholder = 'games'
                document.getElementById('quiCKIE_config_field_gazellegames-ratioLimit').placeholder = '5.75'
                document.getElementById('quiCKIE_config_field_gazellegames-instance').placeholder = '3'

                document.getElementById('quiCKIE_config_field_nyaa-savePath').placeholder = '/downloads/Nyaa'
                document.getElementById('quiCKIE_config_field_nyaa-category').placeholder = 'Nyaa'
                document.getElementById('quiCKIE_config_field_nyaa-tags').placeholder = 'anime, media, public'
                document.getElementById('quiCKIE_config_field_nyaa-ratioLimit').placeholder = '1.25'
                document.getElementById('quiCKIE_config_field_nyaa-instance').placeholder = '2'
                
                // Move quiURL\apiKey\Presets\Click elements into the same row
                let quiURLDiv = document.getElementById('quiCKIE_config_quiURL_var')
                document.getElementById('quiCKIE_config_header').insertAdjacentElement('afterend', quiURLDiv)

                document.getElementById('quiCKIE_config_quiURL_field_label').title = `The full URL to a qui instance\n\nThis is usually the same URL you can copy-paste from your browser\n\nSeedbox users might try: https://username:password@seedboxDomain.com/qui/instances/1`

                let quiApiKeyLabel = document.getElementById('quiCKIE_config_quiApiKey_field_label')
                let quiApiKeyField = document.getElementById('quiCKIE_config_field_quiApiKey')
                quiApiKeyLabel.classList.add('quiRowLabel')
                quiURLDiv.appendChild(quiApiKeyLabel)
                quiURLDiv.appendChild(quiApiKeyField)

                let presetCountLabel = document.getElementById('quiCKIE_config_presetCount_field_label')
                let presetCountField = document.getElementById('quiCKIE_config_field_presetCount')
                presetCountLabel.classList.add('quiRowLabel')
                quiURLDiv.appendChild(presetCountLabel)
                quiURLDiv.appendChild(presetCountField)

                let leftClickLabel = document.getElementById('quiCKIE_config_globalLeftClickAction_field_label')
                let leftClickField = document.getElementById('quiCKIE_config_field_globalLeftClickAction')
                leftClickLabel.classList.add('quiRowLabel')
                leftClickLabel.title = 'The action to take when left-clicking on a Bunny button.\n\nApplies to both a PC left-click and tap on a mobile'
                quiURLDiv.appendChild(leftClickLabel)
                quiURLDiv.appendChild(leftClickField)

                let middleClickLabel = document.getElementById('quiCKIE_config_globalMiddleClickAction_field_label')
                let middleClickField = document.getElementById('quiCKIE_config_field_globalMiddleClickAction')
                middleClickLabel.classList.add('quiRowLabel')
                middleClickLabel.title = 'The action to take when middle-clicking on a BunnyButton'
                quiURLDiv.appendChild(middleClickLabel)
                quiURLDiv.appendChild(middleClickField)

                quiURLDiv.title = ''

                document.getElementById('quiCKIE_config_quiApiKey_var').remove()
                document.getElementById('quiCKIE_config_presetCount_var').remove()
                document.getElementById('quiCKIE_config_globalLeftClickAction_var').remove()
                document.getElementById('quiCKIE_config_globalMiddleClickAction_var').remove()
                
                // Obfuscate the quiURL and ApiKey on mouseout
                let quiURLField = document.getElementById('quiCKIE_config_field_quiURL')
                
                quiURLField.type = 'password'
                quiApiKeyField.type = 'password'

                quiURLField.addEventListener('mouseover', () => { quiURLField.type = 'text' })
                quiURLField.addEventListener('mouseout', () => { quiURLField.type = 'password' })

                quiApiKeyField.addEventListener('mouseover', (event) => { quiApiKeyField.type = 'text' })
                quiApiKeyField.addEventListener('mouseout', (event) => { quiApiKeyField.type = 'password' })

                // Create GitHub version element
                let githubSVG = '<svg width="16" height="16" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_730_27136)"><path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="white"/></g><defs><clipPath id="clip0_730_27136"><rect width="98" height="96" fill="white"/></clipPath></defs></svg>'

                let versionElement = document.createElement('a')
                versionElement.classList = 'version_label reset'
                versionElement.title = 'Source Code on GitHub'
                versionElement.target = '_blank'
                versionElement.href = `${GM_info.script.homepage}`
                versionElement.innerHTML = `${githubSVG} Version ${GM_info.script.version}`

                doc.getElementById('quiCKIE_config_buttons_holder').appendChild(versionElement)

                // Add success animation to save button
                let saveButton = doc.getElementById('quiCKIE_config_saveBtn')
                saveButton.addEventListener('click', () => {
                    // When the save button is clicked, temporarily assign a css class to produce the animation
                    saveButton.classList.add('success')
                    setTimeout(() => saveButton.classList.remove('success'), 500)
                })

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

}

function createBunnyButton(torrentURL, fontSize = 'inherit', buttonText = ' 🐰 ') {
    // Create the bunnyButton that will be displayed on the site

    let bunnyButton = document.createElement('a')
    bunnyButton.classList.add('quiCKIE_bunnyButton')
    bunnyButton.href = 'javascript:void(0)'
    bunnyButton.textContent = buttonText
    bunnyButton.title = `quiCKIE\n-----------------\nCategory: ${SETTINGS.category}\nSavePath: ${SETTINGS.savePath}\nTags: ${SETTINGS.tags}\nRatioLimit: ${SETTINGS.ratioLimit}\nInstance: ${SETTINGS.instance}\nStartPaused: ${SETTINGS.startPaused}\nSeqPiece: ${SETTINGS.seqPieces}`
    bunnyButton.setAttribute('style', `font-size: ${fontSize}; text-align: center; text-decoration: none`)
    bunnyButton.setAttribute('data-torrenturl', torrentURL)


    bunnyButton.addEventListener('mouseover', function(event) {
        // When this bunnyButton is hovered over...
        
        this.style.textShadow = '0px 0px 1px black, 0 0 5px #2cadff'
    })

    bunnyButton.addEventListener('mouseout', function(event) {
        // When this bunnyButton is hovered out...
        
        this.style.textShadow = ''
    })

    bunnyButton.addEventListener('mouseup', function(event) {
        // When this bunnyButton is clicked, determine what kind of click it was and respond accordingly...

        if ( event.shiftKey ) {
            // Shift-Click: Open the quiCKIE settings panel

            GM_config.open()

        } else if ( event.ctrlKey || event.altKey ) {
            // Ctrl-Click \ Cmd-Click: Open the quiURL in a new tab

            window.open(SETTINGS.quiURL).focus()
            
        } else if ( event.button == 0 ) {
            // Left-Click: Do what is saved by SETTINGS.globalLeftClickAction

            if ( SETTINGS.leftClick == 'Global' ) {
                bunnyButtonClickedActions(this, isGlobal=true, 'globalLeftClickAction')
            } else {
                // This tracker us using a different leftClick action
                bunnyButtonClickedActions(this, isGlobal=false, SETTINGS.leftClick)
            }


        } else if ( event.button == 1 ) {
            // Middle-Click: Do what is saved by SETTINGS.globalMiddleClickAction

            bunnyButtonClickedActions(this, isGlobal=true, 'globalMiddleClickAction')

        }


    })

    return bunnyButton

}


function bunnyButtonClickedActions(bunnyButton, isGlobal, settingsProperty) {
    // Depending on what mouse button was clicked, perform the saved action

    if ( isGlobal == true) {
        var buttonAction = SETTINGS[`${settingsProperty}`]
    } else {
        var buttonAction = settingsProperty
    }

    if ( buttonAction == 'Tracker' ) {
        // Add the torrentURL to qui using the tracker settings

        if (SETTINGS.quiURL == '' || SETTINGS.quiApiKey == '') {
            // Alert the user that both a quiURL and ApiKey are required

            window.alert('🐰 quiCKIE 🐰\n\nBoth a quiURL and ApiKey are required to communicate with qui\n\nShift-Click the BunnyButton to open the setting panel')

        } else {
            // Run the function to add the torrent to qui with the current site settings
            bunnyButton.id = '__CLICKED__'
            bunnyButton.textContent = ' 🕓 '

            quiAddTorrent(SETTINGS.quiURL, SETTINGS.quiApiKey, bunnyButton.dataset.torrenturl, SETTINGS.instance, SETTINGS.category, SETTINGS.savePath, SETTINGS.tags, SETTINGS.ratioLimit, SETTINGS.startPaused, SETTINGS.seqPieces)

        }

    } else if ( buttonAction == 'Presets' ) {
        // Simultate a right-click to open the context menu

        let rightClickEvent = new MouseEvent('contextmenu', {
            button: 2, // The right mouse button
            bubbles: true,
            cancelable: true,

        })

        bunnyButton.dispatchEvent(rightClickEvent)


    } else if ( buttonAction == 'Settings') {
        // Open the quiCKIE Settings Panel
        GM_config.open()

    } else if ( buttonAction == 'quiTab') {
        // Open the quiURL in a new tab
        window.open(SETTINGS.quiURL, '_blank').focus()

    } else if ( buttonAction == 'Nothing') {
        // Do nothing, a null button

    }
}


function quiAddTorrent(quiURL, quiApiKey, torrentURL, instance = '', category = '', savePath = '', tags = '', ratioLimit = '', startPaused = false, seqPieces = false) {

    try {
        // Using the saved quiURL, generate the API endpoint to send the POST

        let quiHost = quiURL.match(/^(.*)\/(instances\/\d+)/)[1]
        let quiInstance = quiURL.match(/^(.*)\/(instances\/\d+)/)[2]
        var quiApiAddTorrentURL = `${quiHost}/api/${quiInstance}/torrents`

    } catch(error) {
        // Failed to parse quiURL
        console.log(error)

        document.getElementById('__CLICKED__').textContent == ' ❌ '
        document.getElementById('__CLICKED__').removeAttribute('id')

        window.alert(`❌ quiCKIE ❌\n\nFailed to generate the qui API endpoint from the saved quiURL.\n\nCheck your quiURL for typos.\n\n${quiURL}`)

        return
    }

    if (instance != '') {
        // Update the URL to point to the specified instance id
        quiApiAddTorrentURL = quiApiAddTorrentURL.replace(/\/instances\/\d+/, `\/instances\/${instance}`)
    }

    if (ratioLimit == 0 ) {
        // A ratioLimit of 0 will stop the torrent after download and prevent it from seeding
        ratioLimit = ''
    } else if ( ratioLimit <= -1 ) {
        // Stop download upon completion
        ratioLimit = 0
    }

    // The form data that will be passed to qui
    let form = new FormData()
    form.append('urls', torrentURL)
    form.append('category', category)
    form.append('savepath', savePath)
    form.append('tags', tags)
    form.append('ratioLimit', ratioLimit)
    form.append('paused', startPaused)

    if ( seqPieces == true ) {
        // Allow for playback while downloading by enabling "Sequential Piece Downloading" AND "First\Last Piece Priority" 
        form.append('sequentialDownload', true)
        form.append('firstLastPiecePrio', true)
    }
    
    // The finalized data needed to POST a torrent to qui
    let quiPostData = {
        'apiURL': quiApiAddTorrentURL,
        'apiKey': quiApiKey,
        'form': form,
        'torrentURL': torrentURL
    }

    if ( quiPostData.torrentURL.match(/(auth=|authkey=|magnet:\?xt=urn:btih:)/) && SETTINGS.forceTorrentFile == false ) {
        // This is an authenticated url or magnet link, so send it directly to qui
        quiPOST(quiPostData)

    } else {
        // Download the file through the browser before sending it to qui
        document.getElementById('__CLICKED__').textContent = ' 💾 '
        getFileBlob(quiPostData)

    }

}


function getFileBlob(quiPostData) {
// Download a file blob with the provided URL

    let fileURL = quiPostData.torrentURL

    GM_xmlhttpRequest({
        method: 'get',
        url: fileURL,
        responseType: 'blob',
        onload: function(response) {
            // ----- File Downloaded ----- 
            let blobData = response.response
            quiPostData.form.append('torrent', blobData)

            document.getElementById('__CLICKED__').textContent = ' 🕓 '

            quiPOST(quiPostData)
        },
        onerror: function(response) {
            // There was an error getting the .torrent file
            console.log(response)
            document.getElementById('__CLICKED__').textContent = ' ❌ '
            document.getElementById('__CLICKED__').removeAttribute('id')

            window.alert(`❌ quiCKIE ❌\n\nThere was a problem getting the .torrent file. \n\nStatus Code: ${response.status}\n\n${response.responseText}`)

        },
        ontimeout: function(response) {
            // The connection timed out
            console.log(response)
            document.getElementById('__CLICKED__').textContent = ' ❌ '
            document.getElementById('__CLICKED__').removeAttribute('id')

            window.alert(`❌ quiCKIE ❌\n\nThe connection when getting the .torrent timedout\n\nStatus Code: ${response.status}\n\n${response.responseText}`)

        }
    }) 

}


function quiPOST(quiPostData) {
// Send a POST to qui with the provided data

    GM_xmlhttpRequest({
        // Use the internal GM function to prevent source-origin errors
        method: 'POST',
        url: quiPostData.apiURL,
        data: quiPostData.form,
        headers: {
            'X-API-Key': quiPostData.apiKey,
        },
        onload: function(response) {
            // ----- Actions to take after the request has completed -----
            
            if (response.status == 201) {
                // Success: The torrent has been added to qui

                document.getElementById('__CLICKED__').textContent = ' ✔️ '
                document.getElementById('__CLICKED__').removeAttribute('id')

            } else {
                // Failed: The torrent was NOT added to qui, log the response and display an alert...
                console.log(response)

                document.getElementById('__CLICKED__').textContent = ' ❌ '
                document.getElementById('__CLICKED__').removeAttribute('id')

                if (response.status == 401) {
                    // Unauthorized
                    console.log(response)

                    window.alert(`❌ quiCKIE ❌\n\nStatus Code: ${response.status}\n\n${response.responseText}\nVerify that your ApiKey is correct\n\nApiKey: ${quiApiKey}`)
                } else {
                    console.log(response)
                    window.alert(`❌ quiCKIE ❌\n\nFailed to Add the Torrent to qui\n\nStatus Code: ${response.status}\n\n${response.responseText}`)
                }

            }

        },
        onerror: function(response) {
            // There was an error making the POST
            console.log(response)
            document.getElementById('__CLICKED__').textContent = ' ❌ '
            document.getElementById('__CLICKED__').removeAttribute('id')

            window.alert(`❌ quiCKIE ❌\n\nThere was a problem connecting with qui. Verify that qui is running and check your quiURL and ApiKey for any typos\n\nStatus Code: ${response.status}\n\n${response.responseText}`)

        },
        ontimeout: function(response) {
            // The connection timed out
            console.log(response)
            document.getElementById('__CLICKED__').textContent = ' ❌ '
            document.getElementById('__CLICKED__').removeAttribute('id')

            window.alert(`❌ quiCKIE ❌\n\nThe connection to qui timedout\n\nApiUrl: ${quiApiAddTorrentURL}\n\nStatus Code: ${response.status}\n\n${response.responseText}`)

        }
    })

}
    

GM_addStyle(GM_getResourceText('contextMenuCSS'))
function generatePresetsContextMenu() {
    // Generate and initilize the right-click context menu that will display all the presets

    // Reverse the settingsPanelEntries object so that the values become the keys and the keys become the values
    let swappedTrackerEntries = Object.entries(settingsPanelEntries).map (
        ([key, value]) => [value.toLowerCase(), key]

    )
    swappedTrackerEntries = Object.fromEntries(swappedTrackerEntries)    
    

    let menuItems = []
    for ( let i=1; i <= presetCount; i++ ) {
        // for each preset, create a menuItem object to put in the right-click context menu

        let presetName = GM_config.get(`preset-${i}-preset`)

        if ( presetName == '' ) {
            // A empty preset name, so don't add it to the context-menu
            continue
        }

        // Check if one of the items in the presetTrackers field contains a match against the domain of the current tracker
        let presetTrackers = GM_config.get(`preset-${i}-presetTrackers`).toLowerCase().replace(' ', '').split(',')
        let domainMatch = false

        for (let presetListItem of presetTrackers) {
            if ( presetListItem == '*' || swappedTrackerEntries[`${presetListItem}`] == trackerDomain ) {
                domainMatch = true
                break
            }

        }


        if ( domainMatch == false || presetTrackers == '' /* empty field */ ) {
            // This preset is not to be displayed on this tracker
            continue

        } else if ( presetName.match(/^[-=\.\s]+$/) ) {
            // A menu seperator, so create a menuItem that does nothing when clicked

            // Replace - = . with their respective symbols
            if ( presetName.includes('-') ) {
                presetName = presetName.replaceAll(/./g, '─')
            } else if ( presetName.includes('=') ) {
                presetName = presetName.replaceAll(/./g, '═')
            } else if ( presetName.includes('.') ) {
                presetName = presetName.replaceAll(/./g, '·')
            }
            
            var presetItem = {
                content: presetName,
                events: {
                    mouseover: function(event) {
                        // this.parentElement.setAttribute('style', 'background: none !important; background-color: transparent !important')
                        this.setAttribute('style', 'box-shadow: none !important; background-color: transparent !important')
                    }
                }
            }

        } else {
            // For this preset, create a menuItem entry to be clickable in the context menu
            var presetItem = {
                content: presetName,
                events: {
                    click: function(event) {
                        // This menuItem was clicked, so use the selected preset
                        let bunnyButton = document.getElementById('__CONTEXTCLICKED__')
                        bunnyButton.id = '__CLICKED__'
                        bunnyButton.textContent = ' 🕓 '

                        let torrentURL = bunnyButton.dataset.torrenturl

                        let presetSettings = {
                            instance: GM_config.get(`preset-${i}-instance`),
                            category: GM_config.get(`preset-${i}-category`),
                            savePath: GM_config.get(`preset-${i}-savePath`),
                            tags: GM_config.get(`preset-${i}-tags`),
                            ratioLimit: GM_config.get(`preset-${i}-ratioLimit`),
                            startPaused: GM_config.get(`preset-${i}-startPaused`),
                            seqPieces: GM_config.get(`preset-${i}-seqPieces`),
                        }

                        quiAddTorrent(SETTINGS.quiURL, SETTINGS.quiApiKey, torrentURL, presetSettings.instance, presetSettings.category, presetSettings.savePath, presetSettings.tags, presetSettings.ratioLimit, presetSettings.startPaused, presetSettings.seqPieces)

                    }
                }
            }
        }

        menuItems.push(presetItem)
    }


    const presetsMenu = new ContextMenu({
        // .querySelectorAll('selector')
        target: 'a.quiCKIE_bunnyButton',
        // An array of objects to display in the context-menu
        menuItems
    })
    
    // init() will stack, so don't call it more than once per page
    presetsMenu.init()

}
