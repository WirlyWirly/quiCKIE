// ==UserScript==

// ----------------------------------- MetaData --------------------------------------

// @name        qui - quiCKIE
// @author      WirlyWirly + contributors 🫶
// @version     0.98.5
// @description A UserScript to quickly send torrents from a tracker to qui, with customizable per-site settings and presets 🐰 
//              To be used with a running instance of qui: https://getqui.com/
//              Written on LibreWolf via Violentmonkey

// @icon        https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/icon.webp?raw=true
// @namespace   https://github.com/WirlyWirly
// @run-at      document-end

// @resource    settingsPanelCSS https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.css?raw=true
// @resource    presetsMenuCSS https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/contextMenu.css?raw=true

// @require     https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/contextMenu.js?raw=true
// @require     https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@43fd0fe4de1166f343883511e53546e87840aeaf/gm_config.js

// ----------------------------------- Development --------------------------------------
// When working on this UserScript, I like to use MiniServe to serve the resource files over http, that way they become accessible with these urls.
// I will then remove the '@' from the gitHub urls above and put it on these instead while I'm working.
// MiniServe: https://github.com/svenstaro/miniserve

// resource    settingsPanelCSS http://localhost:12345/quiCKIE.css
// resource    presetsMenuCSS http://localhost:12345/ContextMenu.css
// require     http://localhost:12345/ContextMenu.js

// ----------------------------------- Matches --------------------------------------

// Adding a New Tracker: https://github.com/WirlyWirly/quiCKIE/wiki/Adding-a-New-Tracker

// @match   https://alpharatio.cc/top10.php*
// @match   https://alpharatio.cc/torrents.php*

// @match   https://animebytes.tv/artist.php?id=*
// @match   https://animebytes.tv/collage.php?id=*
// @match   https://animebytes.tv/company.php?id=*
// @match   https://animebytes.tv/series.php?id=*
// @match   https://animebytes.tv/torrents*

// @match   https://anthelion.me/torrents.php*

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

// @match   https://nebulance.io/bookmarks.php*
// @match   https://nebulance.io/top10.php*
// @match   https://nebulance.io/torrents.php*

// @match   https://nyaa.si/*
// @match   https://nyaa.si/view/*
// @match   https://sukebei.nyaa.si/*
// @match   https://sukebei.nyaa.si/view/*

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

// @match   https://portugas.org/torrents*

// @match   https://redacted.sh/artist.php?id=*
// @match   https://redacted.sh/bookmarks.php*
// @match   https://redacted.sh/collage*.php?id=*
// @match   https://redacted.sh/top10.php*
// @match   https://redacted.sh/torrents.php*
// @match   https://redacted.sh/userhistory.php?action=subscribed_collages

// @match   https://secret-cinema.pw/artist.php?id=*
// @match   https://secret-cinema.pw/collages.php?id=*
// @match   https://secret-cinema.pw/top10.php*
// @match   https://secret-cinema.pw/torrents.php*

// @match   https://thegeeks.click/browse.php*
// @match   https://thegeeks.click/details.php?id=*

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

// @homepage    https://github.com/WirlyWirly/quiCKIE
// @updateURL   https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true
// @downloadURL https://raw.githubusercontent.com/WirlyWirly/quiCKIE/main/quiCKIE.user.js?raw=true
// ==/UserScript==

// This string helps prevent various JavaScript oddities when working with variables
'use strict'

// =================================== SETTINGS PANEL ENTRIES ======================================

// @quickieSettingsPanelEntries
const settingsPanelEntries = {
    // Each entry below uses the tracker's unique domain (lowercase) as the property, followed by the row label (TitleCase) as the value.
    // Keep the list alphabetical, as these entries will be used to generate a row for each tracker in the settings panel.
    // Example: https://broadcasthe.net/ --> broadcasthe
    // Example: https://www.myanonamouse.net/ --> myanonamouse 

    'alpharatio': 'AlphaRatio',
    'animebytes': 'AnimeBytes',
    'anthelion': 'Anthelion', // @malefis
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
    'nebulance': 'Nebulance', // @malefis
    'nyaa': 'Nyaa',
    'oldtoons': 'Oldtoons',
    'orpheus': 'Orpheus',
    'passthepopcorn': 'PassThePopcorn',
    'portugas': 'Portugas', // @Phreaker
    'redacted': 'Redacted',
    'secret-cinema': 'Secret-Cinema', // @tartuffe
    'thegeeks': 'TheGeeks',
    'tv-vault': 'TV-Vault',

}


// =================================== GM_CONIFG ======================================

// For the sake of code-cleanliness, everything related to GM_config.init() (The Settings Panel) has been done in this function and moved further down the script
let [presetCount, swappedSettingsPanelEntries] = createGMConfigSettingsPanel()


// =================================== TRACKER SETTINGS ======================================

// The current trackerDomain should match one of the keys in the settingsPanelEntries object
// Example: https://broadcasthe.net/ --> broadcasthe
let trackerDomain = document.location.hostname.match(/^(\w+\.)?(.*?)(\.\w+)$/)[2].toLowerCase()

// Get the global and all trackerDomain specific settings
let SETTINGS = getTrackerSettings(trackerDomain)

// If qui fails to download an authenticated torrentURL, change this property to 'true' at the start of the tracker's if block to force downloading the .torrent file through the browser
SETTINGS.forceTorrentFile = false


// =================================== TRACKER SPECIFIC HANDLING ======================================

// @trackerSpecificHandling
// Because the trackerDomain is unique for each site, we can use it to determine what tracker this is and how to proceed from there 
if ( trackerDomain == 'animebytes' ) {
    // ----------------------------------- AnimeBytes -----------------------------------
    // Browse | Collages | Company | Series 

    // Get a list of all the downloadElements (download buttons) on the page using the provided CSS Selector
    let allDownloadElements = document.querySelectorAll('a[href^="/torrent/"][title="Download torrent"]')

    // Process each downloadElement in the list one at a time, generating a bunnyButton for each and then inserting it after the downloadElement
    for (let downloadElement of allDownloadElements) {

        // Use the 'href' value of the downloadElement (which should be a torrentURL) to create a bunnyButton for this downloadElement
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

} else if ( trackerDomain == 'anthelion' ) {
    // ----------------------------------- Anthelion -----------------------------------
    // Browse | Collages | Film

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' |')

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

        createPresetsMenu('a.quickie_bunnyButton')

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

                // Now that the bunnyButtons are in-place, generate the right-click presets-menu
                createPresetsMenu('a.quickie_bunnyButton')

            } catch(error) {
                // console.log(error)
                return

            }

        })

        let target = document.getElementById('ssr')
        let config = { childList: true }

        observer.observe(target, config)
    }

} else if ( trackerDomain == 'nebulance' ) {
    // ----------------------------------- Nebulance -----------------------------------
    // Browse | Bookmarks | Top 10

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href, '115%')

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' ')

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

} else if ( trackerDomain == 'oldtoons' ) {
    // ----------------------------------- OldToons -----------------------------------
    // Browse | Details | Homepage | Playlists | Similar

    unit3dTrackerHandling('a[href^="https://oldtoons.world/torrents/download/"]')

} else if ( trackerDomain == 'orpheus' ) {
    // ----------------------------------- Orpheus -----------------------------------
    // Album | Artist | Browse | Collages

    let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

    for (let downloadElement of allDownloadElements) {

        let bunnyButton = createBunnyButton(downloadElement.href)

        downloadElement.insertAdjacentElement('afterend', bunnyButton)
        downloadElement.insertAdjacentText('afterend', ' |')

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
    // Album | Artist | Bookmarks | Browse | Collages | Top10

    if ( !document.URL.match(/collages?\.php\?id=\d+/) ) {
        // This is NOT a collage page, so it doesn't require a MutationObserver
        
        let allDownloadElements = document.querySelectorAll('a[href^="torrents.php?action=download&id="]')

        for (let downloadElement of allDownloadElements) {

            let bunnyButton = createBunnyButton(downloadElement.href)

            downloadElement.insertAdjacentElement('afterend', bunnyButton)
            downloadElement.insertAdjacentText('afterend', '|')

        }

        createPresetsMenu('a.quickie_bunnyButton')

    } else {
        // This is a collage page, which loads DL buttons only after the '+' button of the album is clicked. Setup nested observation.
        
        let pageObserver = new MutationObserver(function(pageMutations) {
            // The actions to take when new PAGES are loaded

            waitForElement('#discog_table tbody').then((tbodyElement) => {
                // After a new page is loaded, wait until the <tbody> containing the <tr> torrent rows is loaded

                try {

                    let tbodyObserver = new MutationObserver(function(tbodyMutations) {
                        // The actions to take when the '+' button of a <tr> is clicked, which will load the DL buttons onto the page
                        
                        let allDownloadElements = tbodyMutations[0].target.querySelectorAll('a[href^="torrents.php?action=download&id="]')

                        for (let downloadElement of allDownloadElements) {

                            if ( downloadElement.dataset.quickie_elementprocessed != 'true' ) {
                                // This is a new DL element that has not yet been processed by quiCKIE

                                let bunnyButton = createBunnyButton(downloadElement.href)

                                downloadElement.insertAdjacentElement('afterend', bunnyButton)
                                downloadElement.insertAdjacentText('afterend', '|')

                                downloadElement.setAttribute('data-quickie_elementprocessed', 'true')
                            }

                        }

                        // Now that the bunnyButtons are in-place, generate the right-click presets-menu
                        createPresetsMenu('a.quickie_bunnyButton')

                    })

                    tbodyObserver.observe(tbodyElement, { childList: true })

                } catch(error) {
                    // console.log(error)
                    return

                }
            })

        })

        let target = document.querySelector('[data-component="TorrentCollageView"]')
        let config = { childList: true }

        pageObserver.observe(target, config)

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


// =================================== PRESETS-MENU ======================================

// A list of trackerDomains on which to NOT generate the presets-menu, because it will be done elsewhere in the script
let skipTrackerDomains = ['myanonamouse', 'redacted']

if ( !skipTrackerDomains.includes(trackerDomain) ) {
    // After the bunnyButtons have been created, generate and attach to them the right-click presets-menu
    createPresetsMenu('a.quickie_bunnyButton')
}


// =================================== THIRD-PARTY INTEGRATIONS ======================================

// After a brief delay, query the document for any thirdParty '[data-quickie_torrenturl]' elements for which a bunnyButton should be created
SETTINGS.thirdPartyDelay <= 0 ? SETTINGS.thirdPartyDelay = 500 : null
scanForThirdPartyTorrentURLS(SETTINGS.thirdPartyDelay)


// =================================== SCRIPT FUNCTIONS ======================================

function createGMConfigSettingsPanel() {
    // Generate and initialize the GM_config settings panel. It has been done in this function for code cleanliness.
    
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

    // Reverse the settingsPanelEntries object so that the values (labels) become the new keys and the keys (trackerDomains) become the new values
    // This will later allow us to get the trackerDomain when we know the settings label
    let swappedSettingsPanelEntries = Object.entries(settingsPanelEntries).map (
        ([key, value]) => [value.toLowerCase().trim(), key]

    )

    swappedSettingsPanelEntries = Object.fromEntries(swappedSettingsPanelEntries)    

    // @trackerFieldGeneration
    // This array will later be used to generate the <th> for each column in the settings panel. Create an entry in 
    const trackerFieldSuffixes = ['category', 'savePath', 'tags', 'ratioLimit', 'seedTime', 'instance', 'leftClick', 'startPaused', 'subFolder', 'seqPieces', 'autoTMM', 'skipHash']
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
                'label': 'Seed Time',
                'type': 'int',
                'default': ''
            },
            [`${trackerDomain}-${trackerFieldSuffixes[5]}`]: {
                'label': 'Instance',
                'type': 'int',
                'default': ''
            },
            [`${trackerDomain}-${trackerFieldSuffixes[6]}`]: {
                'type': 'select',
                'options': ['Global', 'Tracker', 'Settings', 'quiTab', 'Nothing'],
                'default': 'Global',
            },
            [`${trackerDomain}-${trackerFieldSuffixes[7]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[8]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[9]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[10]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[11]}`]: {
                'type': 'checkbox',
                'default': false
            }
        }

        gmConfigTrackerFields = {...gmConfigTrackerFields, ...generatedTrackerFields}

    }

    // @presetFieldGeneration
    const presetFieldSuffixes = ['preset', 'presetTrackers', 'category', 'savePath', 'tags', 'ratioLimit', 'seedTime', 'instance', 'startPaused', 'subFolder', 'seqPieces', 'autoTMM', 'skipHash']
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
                'label': 'Instance',
                'type': 'int',
                'default': ''
            },
            [`preset-${i}-${presetFieldSuffixes[8]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`preset-${i}-${presetFieldSuffixes[9]}`]: {
                'type': 'checkbox',
                'default': false
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
            }
        }

            gmConfigPresetsFields = {...gmConfigPresetsFields, ...genereatedPresetFields}
    }

    const tableHeaderData = {
        // The data that will be used as the '.textContent' and '.title' in the settings panel's <th> elements. The key names are the '.toLowerCase()' of trackerFieldSuffixes and presetFieldSuffixes items.
        'columnText': {
            'tracker': '🌎 Tracker',

            'preset': '🚀 Preset',
            'presettrackers': '👀 Trackers',

            'category': '🗃️ Category',
            'savepath': '💾 SavePath',
            'tags': '🏷️ Tags',
            'ratiolimit': '⚖️',
            'seedtime': '🌱',
            'instance': '🎯',
            'leftclick': '🖱️',
            'startpaused': '⏸️',
            'subfolder': '📁',
            'seqpieces': '🧩',
            'autotmm': '🤖',
            'skiphash': '🛡️',

        },

        'titles': {
            'tracker': "─── 🌎 Tracker 🌎 ───\n\nThe tracker (site) for which this row of settings fields will be applied to\n\nClicking a name below will re-direct you to the tracker's website\n\nℹ️ Hovering over a BunnyButton will provide a tooltip of the current tracker settings",

            'preset': "─── 🚀 Preset 🚀 ───\n\nThe name that will be displayed in the presets menu (right-click)\n\nBoth text and emojis are supported\n\nPresets without a name will NOT be displayed\n\nHovering over a preset in the presets menu will provide a tooltip of the preset's settings\n\nℹ️ To display a divider in your list, pick one of these characters and use it as the name...\n- = . [space]",
            'presettrackers': "─── 👀 Preset Trackers 👀 ───\n\nA comma seperated list of trackers on which to display this preset\n\nUse the name (case-insensitive) displayed in the '🌎 Tracker' column\n\nPresets without any trackers listed will NOT be displayed\n\nℹ️ Use the * wildcard to display this preset on ALL trackers\n\nExample:  HDBits, secret-cinema, NYAA",

            'category': '─── 🗃️ Category 🗃️ ───\n\nSpecify the category to apply to these these torrents',
            'savepath': '─── 💾 Save Path 💾 ───\n\nSpecify the full-path for where to save these torrents\n\n⚠️ The path MUST be accessible and writable by the torrent client itself, otherwise it will use the default save path',
            'tags': '─── 🏷️ Tags 🏷️ ───\n\nA comma seperated list of tags to apply to these torrents (case-sensitive)\n\nExample:  Media, Movies, Private',
            'ratiolimit': '─── ⚖️ Ratio Limit ⚖️ ───\n\nStop the torrents when they have seeded to the specified ratio limit\n\nℹ️ Use -1 to stop the torrents immediately after downloading is complete',
            'seedtime': '─── 🌱 Seed Time 🌱 ───\n\nStop the torrents when they have seeded the specified number of minutes\n\nℹ️ Use -1 to stop the torrents immediately after downloading is complete\n\n⚠️ A clients reported seedtime and a trackers recorded seedtime are not always equal. Use caution to avoid Hit-and-Runs.',
            'instance': '─── 🎯 Target Instance 🎯 ───\n\nSpecify a particular qui instance ID for where to send these torrents\n\nLeave this field blank to use the global instance saved as the quiURL\n\nℹ️ This does NOT support a full url, only a qui instance ID number',
            'leftclick' : "─── 🖱️ Left-Click \\ Tap 🖱️ ───\n\nSpecify what action should be taken when the BunnyButton is left-clicked on a PC or tapped on a mobile\n\nℹ️ The 'Global' option will use the setting specified above",
            'startpaused': "─── ⏸️ Start Paused ⏸️ ───\n\nPause torrents when they are added so that they do not automatically begin downloading\n\nℹ️ Useful for when you want to give yourself a chance to pick which files of the torrent should be downloaded",
            // 'startpaused': "─── ⏸️ Start Paused ⏸️ ───\n\nPause torrents when they are added so as to not automatically begin downloading\n\nℹ️ Performing a 'Space-Click' on a BunnyButton will force the torrent to Start Paused",
            'subfolder': '─── 📁 SubFolder 📁 ───\n\nFor single-file torrents, create a subfolder where the file will be saved into\n\nℹ️ This does not affect multi-file torrents that are already in a folder\n\nExample: audioBookFile.m4b --> audioBookFile/audioBookFile.m4b',
            'seqpieces': '─── 🧩 Sequential Piece Download 🧩 ───\n\nDownload torrent pieces sequentially to allow for media playback while the file is downloading\n\n⚠️ This may impact download speed',
            'autotmm': "─── 🤖 Auto Torrent Management 🤖 ───\n\nFor these torrents, enable Auto Torrent Management\n\n⚠️ This will download the torrent to a folder based on the '🗃️ Category', ignoring whatever is specified in the '💾 Save Path'",
            'skiphash': '─── 🛡️ Skip Hash Check 🛡️ ───\n\nWhen Adding torrents, skip the initial hash check\n\n⚠️ Hash checks are used to verify file integrity and prevent corrupted data, although this check may take a long time with larger torrents. Know what you are doing before enabling this.',

        }

    }

    // For all @match entries, generate an object with all the uniqueDomains as keys and the site's homepage as the value
    let trackerHomepages = {}
    for ( let matchURL of GM_info.script.matches ) {

        let homepageURL = matchURL.match(/^(https?:\/\/.+?\/)/)[1]
        let uniqueDomain = homepageURL.match(/^https?:\/\/(\w+\.)?(.*?)\..+\/$/)[2].toLowerCase()


        trackerHomepages = {...trackerHomepages, ...{ [`${uniqueDomain}`]: homepageURL } }
        
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
                <div style="margin: 15px 0px 0px 0px;"><span style="color: #b7b7b7; display: block; font-size: 14px; font-weight: 300">★ Hover over emoticons for details ★</span></div>
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
            'thirdPartyDelay': {
                'label': '🤝 3rd Party Delay:',
                'type': 'int',
                'default': 2000,
            },
            'hiddenTrackers': {
                'label': '🙈 Hidden Trackers:',
                'type': 'text',
                'default': '',
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
                panelStyle.width = '1300px'
                
                // ----------------------------------- TRACKERS TABLE -----------------------------------
                // Convert the various trackerDomain <div> elements created by GM_config() into a <table> with columns/rows

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
                    headerElement.textContent = tableHeaderData.columnText[`${columnHeader}`]
                    headerElement.setAttribute('title', tableHeaderData.titles[`${columnHeader}`])
                    headersRow.appendChild(headerElement)
                }

                // Append the headers to the <thead> (tableHeader) element
                thead.appendChild(headersRow)

                let uniqueDomains = Object.keys(settingsPanelEntries)
                for (let uniqueDomainKey of uniqueDomains) {
                    // For each tracker, create 1 <tr> (tablerow). For each <tr>, create 1 <td> (tabledata) to contain the tracker's hyperlink. Create the <a> hyperlink then move the tracker's label into that <a> element.

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
                        // Create a <td> for each input field and append it to the torrents <tr>. Move the GM_config field into that <td>

                        // Create the <td> and append it to the torrents <tr>
                        let dataElement = document.createElement('td')
                        dataElement.classList.add('quiCKIE_config_table_tbody_td_field')
                        dataElement.classList.add(`quiCKIE_config_table_td_${fieldSuffix}`)
                        tableRow.appendChild(dataElement)

                        // Move the GM_Config field into the <td> 
                        let fieldElement = document.getElementById(`quiCKIE_config_field_${uniqueDomainKey}-${fieldSuffix}`)
                        fieldElement.setAttribute('data-fieldtype', fieldSuffix)
                        dataElement.appendChild(fieldElement)

                        // Clean-up: Remove the now empty GM_config <div> element
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
                        headerElement.textContent = tableHeaderData.columnText[`${columnHeader}`]
                        headerElement.setAttribute('title', tableHeaderData.titles[`${columnHeader}`])

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


                // ----------------------------------- TIDY UP THE SETTINGS PANEL -----------------------------------

                // Remove the tracker rows that should be hidden
                for ( let trackerLabel of GM_config.get('hiddenTrackers').split(',') ) {
                    trackerLabel = trackerLabel.toLowerCase().trim()
                    let trackerDomain = swappedSettingsPanelEntries[trackerLabel]
                    let trackerRow = document.getElementById(`quiCKIE_config_tracker_table_tr_${trackerDomain}`)
                    trackerRow ? trackerRow.remove() : null
                }
                
                // Set the placeholder examples for the various input fields
                try {
                    document.getElementById('quiCKIE_config_field_quiURL').placeholder = 'http://localhost:7476/qui/instances/1'
                    document.getElementById('quiCKIE_config_field_quiApiKey').placeholder = 'abc123'
                    document.getElementById('quiCKIE_config_field_hiddenTrackers').placeholder = 'HDBits, secret-cinema, NYAA'

                    document.getElementById('quiCKIE_config_field_broadcasthe-savePath').placeholder = '/downloads/BroadcasTheNet'
                    document.getElementById('quiCKIE_config_field_broadcasthe-category').placeholder = 'BroadcasTheNet'
                    document.getElementById('quiCKIE_config_field_broadcasthe-tags').placeholder = 'series, media'
                    document.getElementById('quiCKIE_config_field_broadcasthe-ratioLimit').placeholder = '8.50'
                    document.getElementById('quiCKIE_config_field_broadcasthe-seedTime').placeholder = '1440'
                    document.getElementById('quiCKIE_config_field_broadcasthe-instance').placeholder = '2'

                    document.getElementById('quiCKIE_config_field_gazellegames-savePath').placeholder = '/downloads/GazelleGames'
                    document.getElementById('quiCKIE_config_field_gazellegames-category').placeholder = 'GazelleGames'
                    document.getElementById('quiCKIE_config_field_gazellegames-tags').placeholder = 'games'
                    document.getElementById('quiCKIE_config_field_gazellegames-ratioLimit').placeholder = '5.75'
                    document.getElementById('quiCKIE_config_field_gazellegames-seedTime').placeholder = '10080'
                    document.getElementById('quiCKIE_config_field_gazellegames-instance').placeholder = '3'

                    document.getElementById('quiCKIE_config_field_nyaa-savePath').placeholder = '/downloads/Nyaa'
                    document.getElementById('quiCKIE_config_field_nyaa-category').placeholder = 'Nyaa'
                    document.getElementById('quiCKIE_config_field_nyaa-tags').placeholder = 'anime, media, public'
                    document.getElementById('quiCKIE_config_field_nyaa-ratioLimit').placeholder = '1.25'
                    document.getElementById('quiCKIE_config_field_nyaa-seedTime').placeholder = '40320'
                    document.getElementById('quiCKIE_config_field_nyaa-instance').placeholder = '2'
                    
                    document.getElementById('quiCKIE_config_field_secret-cinema-savePath').placeholder = '/downloads/Secret-Cinema'
                    document.getElementById('quiCKIE_config_field_secret-cinema-category').placeholder = 'Secret-Cinema'
                    document.getElementById('quiCKIE_config_field_secret-cinema-tags').placeholder = 'films, media, private'
                    document.getElementById('quiCKIE_config_field_secret-cinema-ratioLimit').placeholder = '3.25'
                    document.getElementById('quiCKIE_config_field_secret-cinema-seedTime').placeholder = '80640'
                    document.getElementById('quiCKIE_config_field_secret-cinema-instance').placeholder = '3'

                } catch (error) {
                    // Likely an error from the trackerRow having been hidden already
                }

                // Move global settings below the header
                let settingsDivFirst = document.createElement('div')
                settingsDivFirst.id = 'quiCKIE_settingsDivFirst'
                settingsDivFirst.classList.add('quiCKIE_settingsDiv')
                document.getElementById('quiCKIE_config_header').insertAdjacentElement('afterend', settingsDivFirst)
                
                // --- quiURL ---
                let quiURLLabel = document.getElementById('quiCKIE_config_quiURL_field_label')
                let quiURLField = document.getElementById('quiCKIE_config_field_quiURL')
                quiURLLabel.classList.add('settingsDivLabel')
                let quiURLTooltip = "─── 🔗 quiURL 🔗 ───\n\nThe full URL to a qui instance\n\nThis is usually the same URL you can copy-paste from your browser\n\nℹ️ Unless otherwise specified in the '🎯' column, this is the instance that all torrents will be sent to\n\nExample: http://localhost:7476/qui/instances/1\n\n────────────────\n\nSeedbox\\Swizzin users might try...\n\nhttps://username:password@seedboxDomain.com/qui/instances/1"
                quiURLLabel.title = quiURLTooltip
                quiURLField.title = quiURLTooltip
                settingsDivFirst.appendChild(quiURLLabel)
                settingsDivFirst.appendChild(quiURLField)

                // --- apiKey ---
                let quiApiKeyLabel = document.getElementById('quiCKIE_config_quiApiKey_field_label')
                let quiApiKeyField = document.getElementById('quiCKIE_config_field_quiApiKey')
                quiApiKeyLabel.classList.add('settingsDivLabel')
                quiApiKeyLabel.title = "─── 🔑 qui ApiKey 🔑 ───\n\nA valid and active ApiKey created by qui\n\nFrom the qui interface, you can generate a ApiKey by going to...\n\nSettings > API Keys > Create API Key"
                settingsDivFirst.appendChild(quiApiKeyLabel)
                settingsDivFirst.appendChild(quiApiKeyField)

                // --- Presets ---
                let presetCountLabel = document.getElementById('quiCKIE_config_presetCount_field_label')
                let presetCountField = document.getElementById('quiCKIE_config_field_presetCount')
                presetCountLabel.classList.add('settingsDivLabel')
                presetCountLabel.title = "─── 🚀 Presets 🚀 ───\n\nThe number of presets that will be generated and available for use from the presets menu (right-click) of a BunnyButton\n\nHover over '🚀 Preset' header for details on how each field can be filled in\n\n⚠️ Lowering this number will REMOVE those rows which will DELETE the settings of the removed rows"
                settingsDivFirst.appendChild(presetCountLabel)
                settingsDivFirst.appendChild(presetCountField)

                // --- Left-Click ---
                let leftClickLabel = document.getElementById('quiCKIE_config_globalLeftClickAction_field_label')
                let leftClickField = document.getElementById('quiCKIE_config_field_globalLeftClickAction')
                leftClickLabel.classList.add('settingsDivLabel')
                leftClickLabel.title = "─── 🖱️ Left-Click \\ Tap 🖱️ ───\n\nThe default action to take when performing a Left-Click\\Tap on a Bunny button\n\nℹ️ Affects all BuunyButtons with the 'Global' setting"
                settingsDivFirst.appendChild(leftClickLabel)
                settingsDivFirst.appendChild(leftClickField)

                // --- Middle-Click ---
                let middleClickLabel = document.getElementById('quiCKIE_config_globalMiddleClickAction_field_label')
                let middleClickField = document.getElementById('quiCKIE_config_field_globalMiddleClickAction')
                middleClickLabel.classList.add('settingsDivLabel')
                middleClickLabel.title = '─── 🖱️ Middle-Click 🖱️ ───\n\nThe action to take performing a Middle-Click on a BunnyButton'
                settingsDivFirst.appendChild(middleClickLabel)
                settingsDivFirst.appendChild(middleClickField)

                // ------ SECOND ROW ------
                
                let settingsDivSecond = document.createElement('div')
                settingsDivSecond.classList.add('quiCKIE_settingsDiv')
                settingsDivSecond.id = 'quiCKIE_settingsDivSecond'
                settingsDivFirst.insertAdjacentElement('afterend', settingsDivSecond)
                
                // --- 3rd Party Delay ---
                let thirdPartyDelayLabel = document.getElementById('quiCKIE_config_thirdPartyDelay_field_label')
                let thirdPartyDelayField = document.getElementById('quiCKIE_config_field_thirdPartyDelay')
                thirdPartyDelayLabel.classList.add('settingsDivLabel')
                thirdPartyDelayLabel.title = '─── 🤝 3rd Party Delay 🤝 ───\n\nThe delay in milliseconds for which to wait until scanning for 3rd Party quiCKIE links\n\nℹ️ This delay only affects the FIRST scan of 3rd Party quiCKIE links, not every scan thereafter'
                settingsDivSecond.appendChild(thirdPartyDelayLabel)
                settingsDivSecond.appendChild(thirdPartyDelayField)

                // --- Hidden Trackers ---
                let hiddenTrackersLabel = document.getElementById('quiCKIE_config_hiddenTrackers_field_label')
                let hiddenTrackersField = document.getElementById('quiCKIE_config_field_hiddenTrackers')
                hiddenTrackersLabel.classList.add('settingsDivLabel')
                hiddenTrackersLabel.title = "─── 🙈 Hidden trackers 🙈 ───\n\nA comma separated list of trackers to be removed from the quiCKIE settings panel\n\nUse the name (case-insensitive) displayed in the '🌎 Tracker' column\n\nℹ️ This does not disable the BunnyButtons from being generated on those trackers, it only hides the tracker from cluttering this settings Panel\n\nExample:  HDBits, secret-cinema, NYAA",
                settingsDivSecond.appendChild(hiddenTrackersLabel)
                settingsDivSecond.appendChild(hiddenTrackersField)
                
                // Remove now empty <div> elements
                document.getElementById('quiCKIE_config_quiURL_var').remove()
                document.getElementById('quiCKIE_config_quiApiKey_var').remove()
                document.getElementById('quiCKIE_config_presetCount_var').remove()
                document.getElementById('quiCKIE_config_globalLeftClickAction_var').remove()
                document.getElementById('quiCKIE_config_globalMiddleClickAction_var').remove()
                document.getElementById('quiCKIE_config_thirdPartyDelay_var').remove()
                document.getElementById('quiCKIE_config_hiddenTrackers_var').remove()
                
                // Obfuscate the quiURL and ApiKey on blur
                quiURLField = document.getElementById('quiCKIE_config_field_quiURL')
                
                quiURLField.type = 'password'
                quiURLField.addEventListener('focus', () => { quiURLField.type = 'text' })
                quiURLField.addEventListener('blur', () => { quiURLField.type = 'password' })

                quiApiKeyField.type = 'password'
                quiApiKeyField.addEventListener('focus', (event) => { quiApiKeyField.type = 'text' })
                quiApiKeyField.addEventListener('blur', (event) => { quiApiKeyField.type = 'password' })

                // Remove 0 from 'int' and 'float' fields
                for ( let field of document.getElementById('quiCKIE_config').querySelectorAll('input[data-fieldtype="ratioLimit"]') ) {
                    field.value == 0 ? field.value = '' : null
                }

                for ( let field of document.getElementById('quiCKIE_config').querySelectorAll('input[data-fieldtype="seedTime"]') ) {
                    field.value == 0 ? field.value = '' : null
                }

                for ( let field of document.getElementById('quiCKIE_config').querySelectorAll('input[data-fieldtype="instance"]') ) {
                    field.value == 0 ? field.value = '' : null
                }
                
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

    return [presetCount, swappedSettingsPanelEntries]

}


function getTrackerSettings(trackerDomain) {
    // Define the main SETTINGS object and populate it with the current trackerDomain specific settings
    
    // @trackerSettings
    let SETTINGS = {
        // The global qui saved settings
        quiURL: GM_config.get('quiURL'),
        quiApiKey: GM_config.get('quiApiKey'),
        globalLeftClickAction: GM_config.get('globalLeftClickAction'),
        globalMiddleClickAction: GM_config.get('globalMiddleClickAction'),
        thirdPartyDelay: GM_config.get('thirdPartyDelay'),
        
        // The saved settings of the current tracker
        category: GM_config.get(`${trackerDomain}-category`),
        savePath: GM_config.get(`${trackerDomain}-savePath`),
        tags: GM_config.get(`${trackerDomain}-tags`),
        ratioLimit: GM_config.get(`${trackerDomain}-ratioLimit`),
        seedTime: GM_config.get(`${trackerDomain}-seedTime`),
        instance: GM_config.get(`${trackerDomain}-instance`),
        leftClick: GM_config.get(`${trackerDomain}-leftClick`),
        startPaused: GM_config.get(`${trackerDomain}-startPaused`),
        subFolder: GM_config.get(`${trackerDomain}-subFolder`),
        seqPieces: GM_config.get(`${trackerDomain}-seqPieces`),
        autoTMM: GM_config.get(`${trackerDomain}-autoTMM`),
        skipHash: GM_config.get(`${trackerDomain}-skipHash`),
        
    }

    // GM_config() saves what should be blank int/float fields as 0, which is qbitTorrent interprets problematically, so set 0 to ''
    SETTINGS.ratioLimit == 0 ? SETTINGS.ratioLimit = '' : null
    SETTINGS.seedTime == 0 ? SETTINGS.seedTime = '' : null
    SETTINGS.instance == 0 ? SETTINGS.instance = '' : null

    return SETTINGS

}


function createBunnyButton(torrentURL, fontSize = 'inherit', buttonText = ' 🐰 ') {
    // Create the bunnyButton that will be displayed on the site

    let bunnyButton = document.createElement('a')
    bunnyButton.classList.add('quickie_bunnyButton')
    bunnyButton.href = 'javascript:undefined'
    bunnyButton.textContent = buttonText
    bunnyButton.title = ` ─── 🌎 ${settingsPanelEntries[`${trackerDomain}`]} 🌎 ─── 
 🗃️ = ${SETTINGS.category}
 💾 = ${SETTINGS.savePath}
 🏷️ = ${SETTINGS.tags}
 ⚖️ = ${SETTINGS.ratioLimit}
 🌱 = ${SETTINGS.seedTime}
 🎯 = ${SETTINGS.instance}
 🖱️ = ${SETTINGS.leftClick}
 ⏸️ = ${SETTINGS.startPaused}
 📁 = ${SETTINGS.subFolder}
 🧩 = ${SETTINGS.seqPieces}
 🤖 = ${SETTINGS.autoTMM}
 🛡️ = ${SETTINGS.skipHash}`

    bunnyButton.setAttribute('style', `font-size: ${fontSize}; text-align: center; text-decoration: none; text-shadow: none`)
    bunnyButton.setAttribute('data-torrenturl', torrentURL)


    bunnyButton.addEventListener('mouseover', function(event) {
        // When this bunnyButton is hovered over...
        
        this.style.textShadow = '0px 0px 1px black, 0 0 5px #2cadff'
    })

    bunnyButton.addEventListener('mouseout', function(event) {
        // When this bunnyButton is hovered out...
        
        this.style.textShadow = 'none'
    })

    bunnyButton.addEventListener('mouseup', function(event) {
        // When this bunnyButton is clicked, determine what kind of click it was and respond accordingly...

        // if ( event.key == ' ' || event.code == 'Space' || event.keyCode == 32 ) {
        //     // Space-Click: Perform the click action with a StartPaused override
        //     console.log('startedpaused')
        //     SETTINGS.startPaused = true
        // }

        if ( event.shiftKey && event.button == 0 ) {
            // Shift-Click: Open the quiCKIE settings panel

            GM_config.open()

        } else if ( event.ctrlKey && event.button == 0 || event.altKey && event.button == 0) {
            // Ctrl-Click \ Cmd-Click: Open the quiURL in a new tab

            window.open(SETTINGS.quiURL).focus()
            
            
        } else if ( event.button == 0 ) {
            // Left-Click


            if ( SETTINGS.leftClick == 'Global' ) {
                // Do what is saved by SETTINGS.globalLeftClickAction
                bunnyButtonClickedActions(this, 'globalLeftClickAction')
            } else {
                // This tracker is using a specified leftClick action
                bunnyButtonClickedActions(this, SETTINGS.leftClick)
            }


        } else if ( event.button == 1 ) {
            // Middle-Click: Do what is saved by SETTINGS.globalMiddleClickAction

            bunnyButtonClickedActions(this, 'globalMiddleClickAction')

        }


    })

    return bunnyButton

}


function bunnyButtonClickedActions(bunnyButton, settingsValue) {
    // Determine what action to take depending on the mouse button settings

    let buttonAction = settingsValue

    if ( buttonAction.match(/^global/) ) {
        // From the SETTINGS object, get the global action that matches this settingsValue
        buttonAction = SETTINGS[`${settingsValue}`]
    }

    if ( buttonAction == 'Tracker' ) {
        // Add the torrentURL to qui using the tracker settings

        if ( SETTINGS.quiURL == '' || SETTINGS.quiApiKey == '' ) {
            // Alert the user that both a quiURL and ApiKey are required

            window.alert('🐰 quiCKIE 🐰\n\nBoth a quiURL and ApiKey are required to communicate with qui\n\nShift-Click the BunnyButton to open the setting panel')

        } else {
            // Run the function to add the torrent to qui with the current site settings
            bunnyButton.id = '__CLICKED__'
            bunnyButton.textContent = ' 🕓 '

            addTorrent(SETTINGS.quiURL, SETTINGS.quiApiKey, bunnyButton.dataset.torrenturl, SETTINGS.instance, SETTINGS.category, SETTINGS.savePath, SETTINGS.tags, SETTINGS.ratioLimit, SETTINGS.seedTime, SETTINGS.startPaused, SETTINGS.subFolder, SETTINGS.seqPieces, SETTINGS.autoTMM, SETTINGS.skipHash)

        }

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

    } else if ( buttonAction == 'quiTab') {
        // Open the quiURL in a new tab
        window.open(SETTINGS.quiURL, '_blank').focus()

    } else if ( buttonAction == 'Nothing') {
        // Do nothing, a null button
        null

    }
}


function addTorrent(quiURL, quiApiKey, torrentURL, instance = '', category = '', savePath = '', tags = '', ratioLimit = '', seedTime = '', startPaused = false, subFolder = false, seqPieces = false, autoTMM = false, skipHash = false) {
    // Using the provided parameters, create a object containing all the info needed to POST a new torrent to the client, then pass that object to the appropriate POST function depending on if the torrentURL has authentication

    try {
        // Using the saved quiURL, parse and generate the API endpoint to send the POST request
        // quiURL Example: http://localhost:7476/qui/instances/1

        let quiURLCaptures = quiURL.match(/^(.*)\/(instances\/\d+)/) // [1] == domain, [2] == instance
        var quiApiAddTorrentURL = `${quiURLCaptures[1]}/api/${quiURLCaptures[2]}/torrents`

    } catch(error) {
        // Failed to parse quiURL for the API endpoint
        console.log(error)

        document.getElementById('__CLICKED__').textContent == ' ❌ '
        document.getElementById('__CLICKED__').removeAttribute('id')

        window.alert(`❌ quiCKIE ❌\n\nFailed to parse the saved quiURL to generate the appropriate apiURL\n\nCheck your quiURL for typos\n\nquiURL: ${quiURL}`)

        return
    }

    // ----- POST form ----- 
    // The form data that will be passed to the client

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
    
    // ----- Check for qui Target Instance ----- 

    if ( instance != '' && instance > 0 ) {
        // SETTINGS.instance: Update the apiURL to point to the specified instance id
        quiApiAddTorrentURL = quiApiAddTorrentURL.replace(/\/instances\/\d+/, `\/instances\/${instance}`)
    }

    // ----- Finalized POST object ----- 
    let torrentPostData = {
        // The object containing the finalized data needed to POST a torrent
        'quiApiURL': quiApiAddTorrentURL,
        'quiApiKey': quiApiKey,
        'form': form,
        'torrentURL': torrentURL
    }

    // ----- torrentURL Authentication ----- 
    if ( torrentPostData.torrentURL.match(/(auth=|authkey=|magnet:\?xt=urn:btih:)/) && SETTINGS.forceTorrentFile == false ) {
        // Yes, this is an authenticated url or magnet link, so send it directly to the client
        quiPOST(torrentPostData)

    } else {
        // No, this url has no authentication (or 'SETTINGS.forceTorrentFile == true'), so download the .torrent file through the browser before sending it to the client
        document.getElementById('__CLICKED__').textContent = ' 💾 '
        getFileBlob(torrentPostData)

    }

}


function getFileBlob(torrentPostData) {
// Download a file blob with the provided URL

    let fileURL = torrentPostData.torrentURL

    GM_xmlhttpRequest({
        method: 'get',
        url: fileURL,
        responseType: 'blob',
        onload: function(response) {
            // ----- File Downloaded ----- 
            let blobData = response.response

            torrentPostData.form.append('torrent', blobData)
            document.getElementById('__CLICKED__').textContent = ' 🕓 '

            quiPOST(torrentPostData)
        },
        onerror: function(response) {
            // There was an error getting the .torrent file
            console.log(response)
            document.getElementById('__CLICKED__').textContent = ' ❌ '
            document.getElementById('__CLICKED__').removeAttribute('id')

            window.alert(`❌ quiCKIE ❌\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nThere was a problem getting the .torrent file from the tracker's server\n\nThe full response has been printed in the console`)

        },
        ontimeout: function(response) {
            // The connection timed out
            console.log(response)
            document.getElementById('__CLICKED__').textContent = ' ❌ '
            document.getElementById('__CLICKED__').removeAttribute('id')

            window.alert(`❌ quiCKIE ❌\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nThe connection when getting the .torrent file from the tracker's server timedout\n\nThe full response has been printed in the console`)

        }
    }) 

}


function quiPOST(torrentPostData) {
// Using the properties of the paramater object, send a POST to qui

    GM_xmlhttpRequest({
        // Use the internal GM function to prevent source-origin errors
        method: 'POST',
        url: torrentPostData.quiApiURL,
        data: torrentPostData.form,
        headers: {
            'X-API-Key': torrentPostData.quiApiKey,
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

                    window.alert(`❌ quiCKIE ❌\n\nStatus Code: ${response.status}\n\n${response.responseText}\nThis usually means a bad ApiKey. Check it for typos...\n\nApiKey: ${torrentPostData.quiApiKey}\n\nThe full response has been printed in the console`)
                } else {
                    window.alert(`❌ quiCKIE ❌\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nFailed to Add the Torrent to qui\n\nThe full response has been printed in the console`)
                }

            }

        },
        onerror: function(response) {
            // There was an error making the POST
            console.log(response)
            document.getElementById('__CLICKED__').textContent = ' ❌ '
            document.getElementById('__CLICKED__').removeAttribute('id')

            window.alert(`❌ quiCKIE ❌\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nThere was a problem connecting to qui. This is usually caused by a bad quiURL. Check it for typos, usually it's the same url you can copy-paste from your browser...\n\nquiURL: ${SETTINGS.quiURL}\n\nThe full response has been printed in the console`)

        },
        ontimeout: function(response) {
            // The connection timed out
            console.log(response)
            document.getElementById('__CLICKED__').textContent = ' ❌ '
            document.getElementById('__CLICKED__').removeAttribute('id')

            window.alert(`❌ quiCKIE ❌\n\nThe connection to qui timedout\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nquiURL: ${SETTINGS.quiURL}\n\nThe full response has been printed in the console`)

        }
    })

}
    

// @thirdPartyIntegrations
function scanForThirdPartyTorrentURLS(delay) {
    // Check for elements that have the unique 'data-quickie_torrenturl' attribute designating them as thirdParty torrentURLs for which to generate a BunnyButton
    // This function will first run after 2000ms (default) and then loop every 5000ms thereafter
    
    setTimeout(() => {

        let allThirdPartyElements = document.querySelectorAll('[data-quickie_torrenturl]')

        if ( allThirdPartyElements.length > 0 ) {

            // Use an existing BunnyButton as the base for which to pull styles from
            let existingBB = document.querySelector('a.quickie_bunnyButton:not(a.quickie_thirdParty)')

            for (let downloadElement of allThirdPartyElements) {
                // For each thirdPartyElement, create a BunnyButton using the elements 'data-quickie_torrenturl' attribute

                // [quickie_forcetorrentfile] : Check if the thirdParty element has specified that the torrentURL be downloaded through the browser instead of being determined by quiCKIE
                downloadElement.dataset.quickie_forcetorrentfile == 'true' ? SETTINGS.forceTorrentFile = true : null

                // [quickie_separator] : Check if the thirdParty element would like to use a specific text separator between the element and the bunnyButton
                let separatorText
                let separatorNode = existingBB.previousSibling
                separatorNode.nodeType != 3 ? separatorText = ' ' : separatorText = separatorNode.textContent

                downloadElement.dataset.quickie_separator ? separatorText = downloadElement.dataset.quickie_separator : null

                // Create a bunnyButton using the unique 'quickie_torrenturl' attribute of the thirdParty element
                let bunnyButton = createBunnyButton(downloadElement.dataset.quickie_torrenturl)

                bunnyButton.style = existingBB.style.cssText
                bunnyButton.textContent = existingBB.textContent
                bunnyButton.classList.add('quickie_thirdParty')


                // Append the bunnyButton after the thirdParty element
                downloadElement.insertAdjacentElement('afterend', bunnyButton)
                downloadElement.insertAdjacentText('afterend', separatorText)

                // Remove the attribute that would match it as a thirdParty element in future loops
                downloadElement.removeAttribute('data-quickie_torrenturl')

                // Signify that there were new thirdParty elements, so the presets-menu function should run
                newThirdParties = true

            }

            // Append the presets-menu to the newly created bunnyButtons
            createPresetsMenu('a.quickie_thirdParty')

        }

        // Repeat this function after 5000ms
        scanForThirdPartyTorrentURLS(5000)

    }, delay)

}


GM_addStyle(GM_getResourceText('presetsMenuCSS'))
function createPresetsMenu(targetSelector) {
    // Generate and initilize the right-click presets-menu that will display all the presets


    let menuItems = []
    for ( let i=1; i <= presetCount; i++ ) {
        // for each preset, create a menuItem object to put in the right-click presets-menu

        let presetName = GM_config.get(`preset-${i}-preset`)

        if ( presetName == '' ) {
            // A empty preset name, so don't add it to the presets-menu
            continue
        }

        // Check if one of the items in the presetTrackers field contains a match against the domain of the current site
        let presetTrackersArray = GM_config.get(`preset-${i}-presetTrackers`).toLowerCase().replace(' ', '').split(',')
        let domainMatch = false

        for (let presetTrackersItem of presetTrackersArray) {
            if ( presetTrackersItem == '*' || swappedSettingsPanelEntries[`${presetTrackersItem}`] == trackerDomain ) {
                domainMatch = true
                break
            }

        }

        if ( domainMatch == false || presetTrackersArray == '' /* empty field */ ) {
            // This preset is not to be displayed on this tracker
            continue

        } else if ( presetName.match(/^[-=\.\s]+$/) ) {
            // A menu separator, so create a menuItem that does nothing when clicked

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
            // For this preset, create a menuItem entry to be clickable in the presets-menu
            let presetSettings = {
                category: GM_config.get(`preset-${i}-category`),
                savePath: GM_config.get(`preset-${i}-savePath`),
                tags: GM_config.get(`preset-${i}-tags`),
                ratioLimit: GM_config.get(`preset-${i}-ratioLimit`),
                seedTime: GM_config.get(`preset-${i}-seedTime`),
                instance: GM_config.get(`preset-${i}-instance`),
                startPaused: GM_config.get(`preset-${i}-startPaused`),
                subFolder: GM_config.get(`preset-${i}-subFolder`),
                seqPieces: GM_config.get(`preset-${i}-seqPieces`),
                autoTMM: GM_config.get(`preset-${i}-autoTMM`),
                skipHash: GM_config.get(`preset-${i}-skipHash`),
            }

            if ( presetSettings.ratioLimit == 0 ) { presetSettings.ratioLimit = '' }
            if ( presetSettings.seedTime == 0 ) { presetSettings.seedTime = '' }
            if ( presetSettings.instance == 0 ) { presetSettings.instance = '' }

            var presetItem = {
                content: presetName,
                events: {
                    click: function(event) {
                        // This menuItem was clicked, so use the selected preset
                        let bunnyButton = document.getElementById('__CONTEXTCLICKED__')
                        bunnyButton.id = '__CLICKED__'
                        bunnyButton.textContent = ' 🕓 '

                        let torrentURL = bunnyButton.dataset.torrenturl

                        addTorrent(SETTINGS.quiURL, SETTINGS.quiApiKey, torrentURL, presetSettings.instance, presetSettings.category, presetSettings.savePath, presetSettings.tags, presetSettings.ratioLimit, presetSettings.seedTime, presetSettings.startPaused, presetSettings.subFolder, presetSettings.seqPieces, presetSettings.autoTMM, presetSettings.skipHash)

                    },
                    mouseover: function(event) {
                        this.title = ` ─── 🚀 ${presetName} 🚀 ─── 
 🗃️ = ${presetSettings.category}
 💾 = ${presetSettings.savePath}
 🏷️ = ${presetSettings.tags}
 ⚖️ = ${presetSettings.ratioLimit}
 🌱 = ${presetSettings.seedTime}
 🎯 = ${presetSettings.instance}
 ⏸️ = ${presetSettings.startPaused}
 📁 = ${presetSettings.subFolder}
 🧩 = ${presetSettings.seqPieces}
 🤖 = ${presetSettings.autoTMM}
 🛡️ = ${presetSettings.skipHash}`

                    }
                }
            }
        }

        menuItems.push(presetItem)

    }

    if ( menuItems.length == 0 ) {
        // No presets were detected for this tracker, so let the user know and provide some default options

        menuItems = [{
            content: '🚀 No Presets for this Tracker 🚀',
            events: {
                mouseover: function(event) {
                    // this.parentElement.setAttribute('style', 'background: none !important; background-color: transparent !important')
                    this.setAttribute('style', 'box-shadow: none !important; background-color: transparent !important')
                },
            }
        },
        {   content: 'quiCKIE Settings',
            events: {
                click: function(event) {
                    GM_config.open()
                }
            }
        },
        {   content: 'qui Tab',
            events: {
                click: function(event) {
                    window.open(SETTINGS.quiURL, '_blank').focus()
                }
            }
        }]

    }

    const presetsMenu = new ContextMenu({
        // targetSelector == CSS Selector
        target: targetSelector,
        // An array of objects to display in the presets-menu
        menuItems
    })
    
    // init() will stack a 'contextmenu' eventlistener on elements, so don't call it more than once per bunnyButton
    presetsMenu.init()

}

function unit3dTrackerHandling(torrentURLSelector) {
    // A site using the UNIT3D Framework, setup MutationObservers for the various pages

    if ( document.URL.match(/\/bookmarks/) || document.URL.match(/\/torrents\/\d+/) || document.URL.match(/\/playlists\/\d+/) || document.URL.match(/\/torrents\/similar\//) ) {
        // The Bookmarks, Details, Playslist, or Similar pages, none of which requires a MutationObserver

        let allDownloadElements = document.querySelectorAll(torrentURLSelector)

        for (let downloadElement of allDownloadElements) {

            let bunnyButton = createBunnyButton(downloadElement.href)

            if ( document.URL.match(/\/bookmarks/) ) {
                // The Bookmarks Page, place the BunnyButton next to the parentElement so that it ends up in the same row
                downloadElement.parentElement.insertAdjacentElement('afterend', bunnyButton)

            } else if ( document.URL.match(/\/torrents\/\d+/) ) {
                // The Details Page, place the BunnyButton next to the parentElement so that it ends up in the same row
                downloadElement.parentElement.insertAdjacentElement('afterend', bunnyButton)

            } else if ( document.URL.match(/\/torrents\/similar\//) ) {
                // The Similar Torrents Page, the bunnyButton can go next to the downloadElement
                downloadElement.insertAdjacentElement('afterend', bunnyButton)

            } else {
                // A Playlists page, the bunnyButton can go next to the downloadElement
                downloadElement.insertAdjacentElement('afterend', bunnyButton)
            }

        }

        createPresetsMenu('a.quickie_bunnyButton')

    } else {
        // The Browse and Homepage, both of which require a MutationObserver
       
        // The inital load does not require a MutationObserver
        let allDownloadElements = document.querySelectorAll(torrentURLSelector)

        for (let downloadElement of allDownloadElements) {

            let bunnyButton = createBunnyButton(downloadElement.href)

            downloadElement.insertAdjacentElement('afterend', bunnyButton)

        }

        createPresetsMenu('a.quickie_bunnyButton')

        let observer = new MutationObserver(function(mutations) {
            // Functionality to run when changes are detected to the target element

            try {

                let allDownloadElements = document.querySelectorAll(torrentURLSelector)

                for (let downloadElement of allDownloadElements) {

                    let bunnyButton = createBunnyButton(downloadElement.href)

                    downloadElement.insertAdjacentElement('afterend', bunnyButton)

                }

                createPresetsMenu('a.quickie_bunnyButton')

            } catch(error) {
                // console.log(error)
                return

            }

        })

        let target, config

        if ( document.URL.match(/\/torrents\??/) ) {
            // The Browse\Search page
            target = document.querySelector('section.torrent-search__results') 
            config = { subtree: true, attributeFilter: ['href']}

        } else {
            // The Homepage
            target = document.querySelector('table.data-table tbody')
            config = { childList: true, attributeFilter: ['href']}
        }

        observer.observe(target, config)
    }

}

// =================================== SOURCED FUNCTIONS ======================================

function waitForElement(selector) {
    // Wait until the target CSS selector exists and then proceed with the `.then()` function
    // Source: https://stackoverflow.com/a/61511955
    
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
