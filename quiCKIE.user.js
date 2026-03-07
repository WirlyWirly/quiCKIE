// ==UserScript==

// ----------------------------------- MetaData --------------------------------------

// @name        qui - quiCKIE
// @author      WirlyWirly + contributors 🫶
// @version     1.03
// @homepage    https://github.com/WirlyWirly/quiCKIE
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
// Local resource urls used during development. Files served over http via MiniServe: https://github.com/svenstaro/miniserve

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

// @match   https://avistaz.to/torrent/*

// @match   https://bakabt.me/torrent/*

// @match   https://beyond-hd.me/
// @match   https://beyond-hd.me/torrents*
// @match   https://beyond-hd.me/bookmarks*
// @match   https://beyond-hd.me/watchlist*
// @match   https://beyond-hd.me/library*
// @match   https://beyond-hd.me/download/*
// @match   https://beyond-hd.me/torrents/seed*

// @match   https://bibliotik.me/collections/*
// @match   https://bibliotik.me/torrents/*

// @match   https://bitporn.eu/
// @match   https://bitporn.eu/playlists/*
// @match   https://bitporn.eu/torrents*
// @match   https://bitporn.eu/*/bookmarks*

// @match   https://broadcasthe.net/collages.php?id=*
// @match   https://broadcasthe.net/series.php?id=*
// @match   https://broadcasthe.net/torrents.php*

// @match   https://cinemaz.to/torrent/*

// @match   https://www.deepbassnine.com/artist.php?id=*
// @match   https://www.deepbassnine.com/collages.php?id=*
// @match   https://www.deepbassnine.com/torrents.php*
//
// @match   https://www.empornium.sx/collage/*
// @match   https://www.empornium.sx/top10.php*
// @match   https://www.empornium.sx/torrents.php*
// @match   https://www.empornium.sx/user.php?id=*

// @match   https://exoticaz.to/torrent/*

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

// @match   https://karagarga.in/details.php*
// @match   https://karagarga.in/browse.php*

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

// @match   https://portugas.org/
// @match   https://portugas.org/*/bookmarks
// @match   https://portugas.org/playlists/*
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
    'avistaz': 'AvistaZ', // @fercats99
    'bakabt': 'BakaBT', 
    'beyond-hd': 'Beyond-HD', // @empDM
    'bibliotik': 'Bibliotik',
    'bitporn': 'BitPorn',
    'broadcasthe': 'BroadcasTheNet',
    'cinemaz' : 'CinemaZ', // @fercats99
    'deepbassnine': 'DeepBassNine', // @tartuffe
    'empornium': 'Empornium',
    'exoticaz' : 'ExoticaZ', // @fercats99
    'gazellegames': 'GazelleGames',
    'happyfappy': 'HappyFappy', // @empDM
    'hdbits': 'HDBits',
    'iptorrents': 'IP-Torrents',
    'jpopsuki': 'JPopsuki', // @tartuffe
    'karagarga': 'Karagarga', // @fercats99
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
let [presetCount, settingsLabelToDomain] = createGMConfigSettingsPanel()


// =================================== TRACKER SETTINGS ======================================

// The current trackerDomain should match one of the keys in the settingsPanelEntries object
// Example: https://broadcasthe.net/ --> broadcasthe
let trackerDomain = document.location.hostname.match(/^(\w+\.)?(.*?)(\.\w+)$/)[2].toLowerCase()

// Get the global SETTINGS object and the presetMenuItems for the current tracker
let [SETTINGS, presetMenuItems] = getTrackerSettings(trackerDomain)

// The current URL, useful for figuring out what page you are on using trackerURL.match(/regex/)
let trackerURL = document.URL

// =================================== TRACKER SPECIFIC HANDLING ======================================

// @trackerSpecificHandling
// Because the trackerDomain is unique for each site, we can use it to determine what tracker this is and how to proceed from there 
if ( trackerDomain == 'animebytes' ) {
    // ----------------------------------- AnimeBytes -----------------------------------
    // Browse | Collages | Company | Series 

    let trackerHandlingOptions = {
        
        // ---------- REQUIRED ----------

        // A CSS selector that is unique to ONLY the download elements (download buttons)
        downloadElementsSelector: 'a[href^="/torrent/"][title="Download torrent"]', // Any valid CSS selector unique to only the download elements

        // ---------- OPTIONAL ----------
        
        // The font-size of the BunnyButton, for re-sizing the displayed bunnyButton
        bunnyButtonfontSize: 'inherit', // Default == 'inherit' || Options == Any percentile
        
        // The text that will be displayed by this bunnyButton
        bunnyButtonText: ' 🐰 ', // Default == ' 🐰 ' || Options == Any string (text) (Usually this is just used to remove the surrounding spaces when the other buttons on the tracker don't have any; '🐰')

        // The text that will be displayed by this bunnyButton
        bunnyButtonAltStyles: '', // Default == '' || Options = Additional style properties to apply to the bunnyButtons (Useful when doing a torrentURL.match() on certain pages because they have large bar\text buttons and you want to make the bunnyButton fit in better on that page)
        
        // The attribute name that contains the torrentURL
        torrentURLAttribute: 'href', // Default == 'href' || Options == Any string corresponding to the attribute name

        // The separator used between the bunnyButton and the download button
        separator: 'automatic', // Default == 'automatic' || options == 'automatic' | Any string (text) | false

        // If the bunnyButton should be placed after the downloadElement.parentElement, which may put it on the same row as the downloadElement
        bunnyButtonParentPlacement: false, // Default == false || Options == true|false

        // If quiCKIE should ALWAYS download the .torrent file through the browser before sending it to qui (Useful if the trackers authentication doesn't actually work)
        forceTorrentFile: false, // Default == false || Options == true|false

        // If quiCKIE should attach the right-click PresetsMenu to the new bunnyButtons
        callAttachPresetsMenu: true, // Default == true || Options == true|false

        // If quiCKIE should mark and keep track of already processed downloadElements (Only useful when dealing with advanced pagination)
        trackProcessedDownloadElements: false, // Default == false || Options == true|false

    }

    quickieTrackerHandler(trackerHandlingOptions)


} else if ( trackerDomain == 'alpharatio' ) {
    // ----------------------------------- AlphaRatio -----------------------------------
    // Browse | Details | Top 10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'anthelion' ) {
    // ----------------------------------- Anthelion -----------------------------------
    // Browse | Collages | Film

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)


} else if ( trackerDomain == 'avistaz' ) {
    // ----------------------------------- AvistaZ -----------------------------------
    // Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="https://avistaz.to/download/torrent/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'bakabt' ) {
    // ----------------------------------- BakaBT -----------------------------------
    // Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a.download_link[href^="/download/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'beyond-hd' ) {
    // ----------------------------------- Beyond-HD -----------------------------------
    // Browse | Details | Homepage | Library

    unit3dTrackerHandler('a[href^="https://beyond-hd.me/download/"]')

} else if ( trackerDomain == 'bibliotik' ) {
    // ----------------------------------- Bibliotik -----------------------------------
    // Browse | Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/torrents/"][title="Download"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'bitporn' ) {
    // ----------------------------------- BitPorn -----------------------------------
    // Browse | Details

    unit3dTrackerHandler('a[href^="https://bitporn.eu/torrents/download/"]')

} else if ( trackerDomain == 'broadcasthe' ) {
    // ----------------------------------- BroadcasTheNet -----------------------------------
    // Browse | Series | Season\Episodes

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)


} else if ( trackerDomain == 'cinemaz' ) {
    // ----------------------------------- CinemaZ -----------------------------------
    // Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="https://cinemaz.to/download/torrent/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'deepbassnine' ) {
    // ----------------------------------- DeepBassNine -----------------------------------
    // Album | Artist | Browse

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'empornium' ) {
    // ----------------------------------- Empornium -----------------------------------
    // Browse | Collages | Details | Top10 
    
    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/torrents.php?action=download&id="]',
        bunnyButtonFontSize: '130%',
    }

    // This is a collage page, so place the bunnyButton on the parentElement 
    trackerURL.match(/\/collage\/\d+/) ? trackerHandlingOptions.bunnyButtonParentPlacement = true : null

    quickieTrackerHandler(trackerHandlingOptions)


} else if ( trackerDomain == 'exoticaz' ) {
    // ----------------------------------- ExoticaZ -----------------------------------
    // Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="https://exoticaz.to/download/torrent/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'gazellegames' ) {
    // ----------------------------------- GazelleGames -----------------------------------
    // Browse | Bundles | Game

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'happyfappy' ) {
    // ----------------------------------- HappyHappy -----------------------------------
    // Browse | Collages | Details | Top10 

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        bunnyButtonFontSize: '125%',
        bunnyButtonText: '🐰',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'hdbits' ) {
    // ----------------------------------- HDBits -----------------------------------
    // Browse | Details | Film  

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a.js-download[href^="/download.php/"]',
        bunnyButtonFontSize: '140%',
        bunnyButtonText: '🐰',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'iptorrents' ) {
    // ----------------------------------- IP-Torrents -----------------------------------
    // Browse | Details 

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href*="download.php"]',
        bunnyButtonFontSize: '160%',
        bunnyButtonText: '🐰',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'jpopsuki' ) {
    // ----------------------------------- JpopSuki -----------------------------------
    // Album | Artist | Browse

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)


} else if ( trackerDomain == 'karagarga' ) {
    // ----------------------------------- Karagarga -----------------------------------
    // Browse | Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="/down.php/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'materialize' ) {
    // ----------------------------------- Materialize -----------------------------------
    // Browse | Collages | Details | Top10

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href*="torrents.php?action=download&id="]',
        forceTorrentFile: true,
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'myanonamouse' ) {
    // ----------------------------------- MyAnonaMouse -----------------------------------
    // Browse | Details | Homepage

    if ( trackerURL.match(/\/t\/\d+/) ) {
        // The book details page, which doesn't require a MutationObserver

        let trackerHandlingOptions = {
            downloadElementsSelector: 'a[href^="/tor/download.php/"][title*="Download"]',
            bunnyButtonFontSize: '150%',
            bunnyButtonText: '🐰',
        }

        quickieTrackerHandler(trackerHandlingOptions)

    } else {
        // The Browse or Homepage, both of which require a MutationObserver
       
        let observer = new MutationObserver(function(mutations) {
            // Functionality to run when changes are detected to the target element

            try {

                let trackerHandlingOptions = {
                    downloadElementsSelector: 'a[href^="/tor/download.php/"][title*="Download"]',
                    bunnyButtonFontSize: '150%',
                    bunnyButtonText: '🐰',
                }

                quickieTrackerHandler(trackerHandlingOptions)

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

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        bunnyButtonFontSize: '115%',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'nyaa' ) {
    // ----------------------------------- Nyaa -----------------------------------
    // Browse | Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="magnet:?xt\=urn:btih:"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'oldtoons' ) {
    // ----------------------------------- OldToons -----------------------------------
    // Browse | Details | Homepage | Playlists | Similar

    unit3dTrackerHandler('a[href^="https://oldtoons.world/torrents/download/"]')

} else if ( trackerDomain == 'orpheus' ) {
    // ----------------------------------- Orpheus -----------------------------------
    // Album | Artist | Browse | Collages

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'passthepopcorn' ) {
    // ----------------------------------- PassThepopcorn -----------------------------------
    // Film
    
    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'portugas' ) {
    // ----------------------------------- Portugas -----------------------------------
    // Browse | Album | Artist
    
    unit3dTrackerHandler('a[href^="https://portugas.org/torrents/download/"]')

} else if ( trackerDomain == 'redacted' ) {
    // ----------------------------------- Redacted -----------------------------------
    // Album | Artist | Bookmarks | Browse | Collages | Top10

    if ( !trackerURL.match(/collages?\.php\?id=\d+/) ) {
        // This is NOT a collage page, so it doesn't require a MutationObserver
        
        let trackerHandlingOptions = {
            downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
        }

        quickieTrackerHandler(trackerHandlingOptions)

    } else {
        // This is a collage page, which loads DL buttons only after the '+' button of the album is clicked. Setup nested observation.
        
        let pageObserver = new MutationObserver(function(pageMutations) {
            // The actions to take when new PAGES are loaded

            waitForElement('#discog_table tbody').then((tbodyElement) => {
                // After a new page is loaded, wait until the <tbody> containing the <tr> torrent rows is loaded

                try {

                    let tbodyObserver = new MutationObserver(function(tbodyMutations) {
                        // The actions to take when the '+' button of a <tr> is clicked, which will load the DL buttons onto the page
                        
                        let trackerHandlingOptions = {
                            downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
                            trackProcessedDownloadElements: true,
                        }

                        quickieTrackerHandler(trackerHandlingOptions)

                    })

                    tbodyObserver.observe(tbodyElement, { childList: true } )

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

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'thegeeks' ) {
    // ----------------------------------- TheGeeks -----------------------------------
    // Browse | Details

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="download.php/"]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

} else if ( trackerDomain == 'tv-vault' ) {
    // ----------------------------------- TV-Vault -----------------------------------
    // Series

    let trackerHandlingOptions = {
        downloadElementsSelector: 'a[href^="torrents.php?action=download&id="]',
    }

    quickieTrackerHandler(trackerHandlingOptions)

}


// =================================== THIRD-PARTY INTEGRATIONS ======================================

if ( SETTINGS.thirdPartyScan != 'Off' ) {
    // After a brief delay, query the document for any thirdParty '[data-quickie_torrenturl]' elements for which a bunnyButton should be created
    SETTINGS.thirdPartyDelay < 50 ? SETTINGS.thirdPartyDelay = 200 : null
    scanForThirdPartyTorrentURLS(SETTINGS.thirdPartyDelay)
}

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
    let settingsLabelToDomain = Object.entries(settingsPanelEntries).map (
        ([key, value]) => [value.toLowerCase().trim(), key]

    )

    settingsLabelToDomain = Object.fromEntries(settingsLabelToDomain)    

    // @trackerFieldGeneration
    // This array will later be used to generate the <th> for each column in the settings panel. Create an entry in 
    const trackerFieldSuffixes = ['category', 'savePath', 'tags', 'ratioLimit', 'seedTime', 'dlLimit', 'upLimit', 'instance', 'paginationLoop', 'leftClick', 'thirdPartyScan', 'hideDL', 'startPaused', 'subFolder', 'seqPieces', 'autoTMM', 'skipHash']
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
                'label': 'Download Limit',
                'type': 'int',
                'default': ''
            },
            [`${trackerDomain}-${trackerFieldSuffixes[6]}`]: {
                'label': 'Upload Limit',
                'type': 'int',
                'default': ''
            },
            [`${trackerDomain}-${trackerFieldSuffixes[7]}`]: {
                'label': 'Instance',
                'type': 'int',
                'default': ''
            },
            [`${trackerDomain}-${trackerFieldSuffixes[8]}`]: {
                'label': 'Pagination Loop',
                'type': 'int',
                'default': ''
            },
            [`${trackerDomain}-${trackerFieldSuffixes[9]}`]: {
                'type': 'select',
                'options': ['Global', 'Tracker', 'Settings', 'quiTab', 'Nothing'],
                'default': 'Global',
            },
            [`${trackerDomain}-${trackerFieldSuffixes[10]}`]: {
                'type': 'select',
                'options': ['On', 'Off', 'On + 🌎'],
                'default': 'Off',
            },
            [`${trackerDomain}-${trackerFieldSuffixes[11]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[12]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[13]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[14]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[15]}`]: {
                'type': 'checkbox',
                'default': false
            },
            [`${trackerDomain}-${trackerFieldSuffixes[16]}`]: {
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
        'globalsKeys': [
            'quiURL',
            'quiApiKey',
            'presetCount',
            'globalLeftClickAction',
            'globalMiddleClickAction',
            'bunnyButtonPlacement',
            'thirdPartyDelay',
            'hiddenTrackers',
            'globalForcedTorrentFile',

        ],

        'globalsTitles': {
            'quiURL': "─── 🔗 quiURL 🔗 ───\n\nThe full URL to a qui instance\n\nThis is usually the same URL you can copy-paste from your browser\n\nℹ️ Unless otherwise specified in the '🎯' column, this is the instance that all torrents will be sent to\n\nExample: http://localhost:7476/qui/instances/1\n\n────────────────\n\nSeedbox\\Swizzin users might try...\n\nhttps://username:password@seedboxDomain.com/qui/instances/1",
            'quiApiKey': '─── 🔑 qui ApiKey 🔑 ───\n\nA valid and active ApiKey created by qui\n\nFrom the qui interface, you can generate a ApiKey by going to...\n\nSettings > API Keys > Create API Key',
            'presetCount': "─── 🚀 Presets 🚀 ───\n\nThe number of presets that will be generated and available for use from the presets menu (right-click) of a BunnyButton\n\nHover over '🚀 Preset' header for details on how each field can be filled in\n\n⚠️ Lowering this number will REMOVE those rows which will DELETE the settings of the removed rows",
            'globalLeftClickAction': "─── 🖱️ Left-Click \\ Tap 🖱️ ───\n\nThe default action to take when performing a Left-Click\\Tap on a Bunny button\n\nℹ️ Affects all BuunyButtons with the 'Global' setting",
            'globalMiddleClickAction': '─── 🖱️ Middle-Click 🖱️ ───\n\nThe action to take when performing a Middle-Click on a BunnyButton',
            'bunnyButtonPlacement': '─── ↔️ Placement  ↔️ ───\n\nThe placement of the BunnyButtons relative to the sites download buttons',
            'thirdPartyDelay': "─── 🤝 3rd Party Delay 🤝 ───\n\nThe delay in milliseconds to wait until scanning for third-party integrated quiCKIE links\n\nOnly affects trackers that have the '🤝' column set to 'On'\n\nℹ️ This delay only affects the FIRST scan of third-party quiCKIE links, not every scan thereafter",
            'hiddenTrackers': "─── 🙈 Hidden trackers 🙈 ───\n\nA comma separated list of trackers to be removed from the quiCKIE settings panel\n\nUse the name (case-insensitive) displayed in the '🌎 Tracker' column\n\nHover over the tracker name for a '🙈' button that will quickly add the tracker to the hidden list\n\nℹ️ This does not disable the BunnyButtons from being generated on those trackers, it only hides the tracker from cluttering this settings Panel\n\nExample:  HDBits, secret-cinema, NYAA",
            'globalForcedTorrentFile': '─── 🧲 Torrent File  🧲 ───\n\nForce all BunnyButtons to download the .torrent file through the browser before sending it to qui\n\nℹ️ By default, quiCKIE will determine for itself if the torrentURL should be sent directly to qui or first downloaded through the browser',

        },

        'columnText': {
            'tracker': '🌎 Tracker',

            'preset': '🚀 Preset',
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
            'tracker': "─── 🌎 Tracker 🌎 ───\n\nThe tracker (site) for which this row of settings fields will be applied to\n\nClicking a name below will re-direct you to the tracker's website\n\nℹ️ Hovering over a BunnyButton will provide a tooltip of the current tracker settings",

            'preset': "─── 🚀 Preset 🚀 ───\n\nThe name that will be displayed in the presets menu (right-click)\n\nBoth text and emojis are supported\n\nPresets without a name will NOT be displayed\n\nℹ️ Hovering over a preset in the presets menu will provide a tooltip of the preset's settings\n\nℹ️ To display a divider in your list, pick one of these characters and use it as the name...\n- = . [space]",
            'presettrackers': "─── 👀 Preset Trackers 👀 ───\n\nA comma seperated list of trackers on which to display this preset\n\nUse the name (case-insensitive) displayed in the '🌎 Tracker' column\n\nPresets without any trackers listed will NOT be displayed\n\nℹ️ Use the * wildcard to display this preset on ALL trackers\n\nExample:  HDBits, secret-cinema, NYAA",

            'category': '─── 🗃️ Category 🗃️ ───\n\nSpecify the category to apply to these these torrents',
            'savepath': '─── 💾 Save Path 💾 ───\n\nSpecify the full-path for where to save these torrents\n\n⚠️ The path MUST be accessible and writable by the torrent client itself, otherwise it will use the default save path',
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
            'startpaused': "─── ⏸️ Start Paused ⏸️ ───\n\nPause torrents when they are added so that they do not automatically begin downloading\n\nℹ️ Useful for when you want to give yourself a chance to pick which files of the torrent should be downloaded",
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
                <div style="margin: 15px 0px 0px 0px;"><span style="color: #b7b7b7; display: block; font-size: 14px; font-weight: 300">★ Hover over emojis for details ★</span></div>
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
            'bunnyButtonPlacement': {
                'label': '↔️ Placement:',
                'type': 'select',
                'options': ['Before', 'After'],
                'default': 'After',
            },
            'thirdPartyDelay': {
                'label': '🤝 Delay:',
                'type': 'int',
                'default': 2000,
            },
            'hiddenTrackers': {
                'label': '🙈 Hidden Trackers:',
                'type': 'text',
                'default': '',
            },
            'globalForcedTorrentFile': {
                'label': '🧲 Torrent File:',
                'type': 'checkbox',
                'default': false
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
                    headerElement.textContent = panelTextData.columnText[`${columnHeader}`]
                    headerElement.setAttribute('title', panelTextData.columnTitles[`${columnHeader}`])
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
                    let trackerDomain = settingsLabelToDomain[trackerLabel]
                    let trackerRow = document.getElementById(`quiCKIE_config_tracker_table_tr_${trackerDomain}`)
                    trackerRow ? trackerRow.remove() : null
                }


                // For each tracker, add the element that will hide the tracker from view
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

                // --- quiURL ---
                let quiURLLabel = document.getElementById('quiCKIE_config_quiURL_field_label')
                let quiURLField = document.getElementById('quiCKIE_config_field_quiURL')
                quiURLLabel.classList.add('settingsDivLabel')
                quiURLTooltip = panelTextData.globalsTitles.quiURL
                quiURLLabel.title = quiURLTooltip
                quiURLField.title = quiURLTooltip
                settingsDivSecond.appendChild(quiURLLabel)
                settingsDivSecond.appendChild(quiURLField)

                // --- ApiKey ---
                let quiApiKeyLabel = document.getElementById('quiCKIE_config_quiApiKey_field_label')
                let quiApiKeyField = document.getElementById('quiCKIE_config_field_quiApiKey')
                quiApiKeyLabel.classList.add('settingsDivLabel')
                quiApiKeyLabel.title = panelTextData.globalsTitles.quiApiKey
                settingsDivSecond.appendChild(quiApiKeyLabel)
                settingsDivSecond.appendChild(quiApiKeyField)

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

                for ( let field of document.getElementById('quiCKIE_config').querySelectorAll('input[data-fieldtype="dlLimit"]') ) {
                    field.value <= 0 ? field.value = '' : null
                }

                for ( let field of document.getElementById('quiCKIE_config').querySelectorAll('input[data-fieldtype="upLimit"]') ) {
                    field.value <= 0 ? field.value = '' : null
                }

                for ( let field of document.getElementById('quiCKIE_config').querySelectorAll('input[data-fieldtype="instance"]') ) {
                    field.value <= 0 ? field.value = '' : null
                }

                for ( let field of document.getElementById('quiCKIE_config').querySelectorAll('input[data-fieldtype="paginationLoop"]') ) {
                    field.value < 500 ? field.value = '' : null
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

                if ( this.get('welcomeMessage') == 'show' ) {
                    confirm("🐰 Welcome to quiCKIE! 🐰\n\nMany of the trackers supported by quiCKIE were contributed by a member of that tracker. If there's a tracker that you'd like to see included, check the quiCKIE WiKi for a 3-step guide on how to get it added, no programming experience required!\n\nIf during your usage you encounter either a buggy feature, missing url, or broken\\dead tracker, open an issue on the quiCKIE GitHub page.\n\nEnjoy your quiCKIE, hover over the emojis for details, and finally a big shout-out to the people that have come together and kept this community thriving 🫶\n\n - Wirly")

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

    return [presetCount, settingsLabelToDomain]

}


function getTrackerSettings(trackerDomain) {
    // Define the main SETTINGS object and populate it with the current trackerDomain specific settings
    
    // @trackerSettings
    let SETTINGS = {
        trackerDomain: trackerDomain,
        forceTorrentFile: false,
        firstThirdPartyScan: true,

        // The global qui saved settings
        quiURL: GM_config.get('quiURL'),
        quiApiKey: GM_config.get('quiApiKey'),
        globalLeftClickAction: GM_config.get('globalLeftClickAction'),
        globalMiddleClickAction: GM_config.get('globalMiddleClickAction'),
        thirdPartyDelay: GM_config.get('thirdPartyDelay'),
        bunnyButtonPlacement: GM_config.get('bunnyButtonPlacement'),
        globalForcedTorrentFile: GM_config.get('globalForcedTorrentFile'),

        // The saved settings of the current tracker
        category: GM_config.get(`${trackerDomain}-category`),
        savePath: GM_config.get(`${trackerDomain}-savePath`),
        tags: GM_config.get(`${trackerDomain}-tags`),
        ratioLimit: GM_config.get(`${trackerDomain}-ratioLimit`),
        seedTime: GM_config.get(`${trackerDomain}-seedTime`),
        dlLimit: GM_config.get(`${trackerDomain}-dlLimit`),
        upLimit: GM_config.get(`${trackerDomain}-upLimit`),
        instance: GM_config.get(`${trackerDomain}-instance`),
        paginationLoop: GM_config.get(`${trackerDomain}-paginationLoop`),
        leftClick: GM_config.get(`${trackerDomain}-leftClick`),
        thirdPartyScan: GM_config.get(`${trackerDomain}-thirdPartyScan`),
        hideDL: GM_config.get(`${trackerDomain}-hideDL`),
        startPaused: GM_config.get(`${trackerDomain}-startPaused`),
        subFolder: GM_config.get(`${trackerDomain}-subFolder`),
        seqPieces: GM_config.get(`${trackerDomain}-seqPieces`),
        autoTMM: GM_config.get(`${trackerDomain}-autoTMM`),
        skipHash: GM_config.get(`${trackerDomain}-skipHash`),
        
    }

    // GM_config() saves what should be blank int/float fields as 0, which is qbitTorrent interprets problematically, so set 0 to ''
    SETTINGS.ratioLimit == 0 ? SETTINGS.ratioLimit = '' : null
    SETTINGS.seedTime == 0 ? SETTINGS.seedTime = '' : null
    SETTINGS.dlLimit <= 0 ? SETTINGS.dlLimit = '' : null
    SETTINGS.upLimit <= 0 ? SETTINGS.upLimit = '' : null
    SETTINGS.instance <= 0 ? SETTINGS.instance = '' : null
    SETTINGS.paginationLoop < 500 ? SETTINGS.paginationLoop = '' : null

    let presetMenuItems = createPresetItems([SETTINGS.trackerDomain])

    return [SETTINGS, presetMenuItems]

}


function createPresetItems(trackerDomains) {
    // For all the trackerDomains (array), generate and return a object who's properties equal the presetMenu items of a trackerDomain

    let allPresetItems = {}

    for ( let trackerDomain of trackerDomains ) {
        // For each trackerDomain, determine the presets that apply to that tracker and add them to the object
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
                if ( presetTrackersItem == '*' || settingsLabelToDomain[`${presetTrackersItem}`] == trackerDomain ) {
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
                        click: function(event) {
                            // This menuItem was clicked, so use the selected preset
                            let bunnyButton = document.getElementById('__CONTEXTCLICKED__')
                            bunnyButton.id = '__CLICKED__'
                            bunnyButton.textContent = ' 🕓 '

                            let torrentURL = bunnyButton.dataset.torrenturl

                            addTorrent({
                                quiURL: SETTINGS.quiURL, 
                                quiApiKey: SETTINGS.quiApiKey, 
                                torrentURL: torrentURL,
                                instance: presetSettings.instance, 
                                category: presetSettings.category, 
                                savePath: presetSettings.savePath, 
                                tags: presetSettings.tags, 
                                ratioLimit: presetSettings.ratioLimit, 
                                seedTime: presetSettings.seedTime, 
                                dlLimit: presetSettings.dlLimit, 
                                upLimit: presetSettings.upLimit, 
                                startPaused: presetSettings.startPaused, 
                                subFolder: presetSettings.subFolder, 
                                seqPieces: presetSettings.seqPieces, 
                                autoTMM: presetSettings.autoTMM, 
                                skipHash: presetSettings.skipHash})

                        },
                        mouseover: function(event) {
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
                    'mouseover': function(event) {
                        // this.parentElement.setAttribute('style', 'background: none !important; background-color: transparent !important')
                        this.setAttribute('style', 'box-shadow: none !important; background-color: transparent !important')
                    },
                }
            },
            {   content: 'quiCKIE Settings',
                events: {
                    'click': function(event) {
                        GM_config.open()
                    }
                }
            },
            {   content: 'qui Tab',
                events: {
                    'click': function(event) {
                        window.open(SETTINGS.quiURL, '_blank').focus()
                    }
                }
            }]

        }

        allPresetItems[trackerDomain] = menuItems

    }

    return allPresetItems

}


GM_addStyle(GM_getResourceText('presetsMenuCSS'))
function attachPresetsMenu(targetSelector, trackerDomain = trackerDomain) {
    // append the menuItems to the target elements

    const presetsMenu = new ContextMenu({
        // targetSelector == CSS Selector
        target: targetSelector,
        // An array of objects to display in the presets-menu
        menuItems: presetMenuItems[trackerDomain]
    })
    
    // init() will stack a 'contextmenu' eventlistener on elements, so don't call it more than once per bunnyButton
    presetsMenu.init()

}


// @quickieTrackerHandler
function quickieTrackerHandler({
    // A universal tracker handler, use the provided options to generate bunnyButtons for all the queries downloadElements
    
    downloadElementsSelector,
    bunnyButtonFontSize = 'inherit',
    bunnyButtonText = ' 🐰 ' ,
    bunnyButtonAltStyles = '',
    torrentURLAttribute = 'href',
    separator = 'automatic',
    bunnyButtonParentPlacement = false,
    forceTorrentFile = false,
    callAttachPresetsMenu = true,
    trackProcessedDownloadElements = false}) {
    // Using the provided arguments, generate bunnyButtons for this page

    // If the .torrent file should be forced to download through the browser
    forceTorrentFile == true ? SETTINGS.forceTorrentFile = true : null
    
    // The global setting for where to place the bunnyButton relative to the downloadElement
    let bunnyButtonPlacement
    SETTINGS.bunnyButtonPlacement == 'After' ? bunnyButtonPlacement = 'afterend' : bunnyButtonPlacement = 'beforebegin'

    // If there is a paginationLoop timer, mark the processed elements so that bunnyButtons are not repeatedly generated
    SETTINGS.paginationLoop >= 500 ? trackProcessedDownloadElements = true : null

    function processDownloadElements(delay) {
        // query and create a BunnyButton for all downloadElements

        setTimeout(() => {
            // Using the provided CSS selector, get an array of all the downloadElements
            let allDownloadElements = document.querySelectorAll(`${downloadElementsSelector}:not([data-quickie_processed="true"])`)

            if ( allDownloadElements.length >= 1 ) {
                // The query returned results that have not yet been processed, so generate a bunnyButton for each downloadElement
                
                // The separator used between the DL button and the BunnyButton
                separator == true ? separator = 'automatic' : null
                separator == 'automatic' ? separator = getPageSeparator(allDownloadElements[0]) : null

                // Process each downloadElement in the list one at a time, generating a bunnyButton for each and then inserting it after the downloadElement
                for (let downloadElement of allDownloadElements) {

                    // Use the supplied attribute (which should be a torrentURL) to create a bunnyButton for this downloadElement
                    let bunnyButton = createBunnyButton({torrentURL: downloadElement[torrentURLAttribute], fontSize: bunnyButtonFontSize, buttonText: bunnyButtonText, torrentSettings: SETTINGS, altButtonStyles: bunnyButtonAltStyles})

                    let placementElement
                    bunnyButtonParentPlacement == true ? placementElement = downloadElement.parentElement : placementElement = downloadElement
                    
                    // Insert the bunnyButton after the placementElement
                    placementElement.insertAdjacentElement(bunnyButtonPlacement, bunnyButton)
                    
                    if ( SETTINGS.hideDL == false ) {
                        // Insert the separator between the placementElement and the bunnyButton
                        separator == false ? null : placementElement.insertAdjacentText(bunnyButtonPlacement, separator)
                    } else {
                        // Hide the DL button and don't insert a separator
                        downloadElement.style.display = 'none'
                    }

                    if ( trackProcessedDownloadElements ) {
                        // Keep track of this downloadElement as having been processed my marking it with a unique attribute
                        downloadElement.setAttribute('data-quickie_processed', 'true')
                    }
                }

                // After the bunnyButtons have been generated, call the function that will attach to them the right-click presetsMenu
                callAttachPresetsMenu == true ? attachPresetsMenu('a.quickie_newBunnyButton', SETTINGS.trackerDomain) : null
            }

            if ( SETTINGS.paginationLoop >= 500 ) {
                // The tracker handler will continuosly scan the page for new downloadElements
                processDownloadElements(SETTINGS.paginationLoop)
            }

        }, delay )

    }

    processDownloadElements(0)

}


function unit3dTrackerHandler(downloadElementsSelector) {
    // A tracker handler focused on the layout of the UNIT3D Framework. Generate a bunnyButton for each queried DownloadElement
    // ! This function used 'Oldtoons' as the model and is not WirlyWirly tested for other sites

    // Mutable variables dependent on the current page
    let trackProcessedDownloadElements = false
    let bunnyButtonPlacement
    let torrentDetailsPage = false
    let bunnyButtonAltStyles = ''
    let bunnyButtonText = ' 🐰 '

    // If there is a specified paginationLoop, mark the processed elements so that bunnyButtons are not repeatedly generated
    SETTINGS.paginationLoop >= 500 ? trackProcessedDownloadElements = true : null

    if ( document.location.pathname.match(/(\/|\/torrents[^/]*)$/) && SETTINGS.paginationLoop < 500 ) {
        // This is the homepage or search page, so enable paginationLooping
        SETTINGS.paginationLoop = 750
        trackProcessedDownloadElements = true

    } else if ( trackerURL.match(/\/torrents\/\d+/) ) {
        // The torrents details page, so change the look of the BunnyButton
        torrentDetailsPage = true

        // Give the bunnyButton a bar appearance, to fit in better with the other buttons
        bunnyButtonText = ' 🐰 quiCKIE '
        bunnyButtonAltStyles = 'background: rgba(0, 0, 0, 0.70); backdrop-filter: blur(9px); color: rgb(203, 233, 255); font-weight: bold; border-radius: 999px; width: inherit; padding: 2%'

    }


    function processDownloadElements(delay) {
        // query and create a BunnyButton for all downloadElements

        setTimeout(() => {
            let allDownloadElements = document.querySelectorAll(`${downloadElementsSelector}:not([data-quickie_processed="true"])`)

            if ( allDownloadElements.length >= 1 ) {

                SETTINGS.bunnyButtonPlacement == 'After' ? bunnyButtonPlacement = 'afterend' : bunnyButtonPlacement = 'beforebegin'

                for (let downloadElement of allDownloadElements) {
                    // For each downloadElement, generate and insert a bunnyButton

                    let bunnyButton = createBunnyButton({torrentURL: downloadElement.href, altButtonStyles: bunnyButtonAltStyles, buttonText: bunnyButtonText})
                    
                    if ( torrentDetailsPage == true ) {
                        // Place alongside the parentElement so that the bunnyButton appears on the same row
                        downloadElement.parentElement.insertAdjacentElement(bunnyButtonPlacement, bunnyButton)

                    } else {
                        downloadElement.insertAdjacentElement(bunnyButtonPlacement, bunnyButton)
                    }

                    // Hide the DL button if enabled
                    SETTINGS.hideDL == true ? downloadElement.style.display = 'none' : null


                    if ( trackProcessedDownloadElements ) {
                        // Keep track of this downloadElement as having been processed my marking it with a unique attribute
                        downloadElement.setAttribute('data-quickie_processed', 'true')
                    }

                }

                attachPresetsMenu('a.quickie_newBunnyButton', trackerDomain)

            }

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
    altButtonStyles = '',
}) {

    let bunnyButton = document.createElement('a')
    bunnyButton.classList.add('quickie_bunnyButton')
    bunnyButton.classList.add('quickie_newBunnyButton')
    bunnyButton.href = 'javascript:undefined'
    bunnyButton.textContent = buttonText

    bunnyButton.setAttribute('style', `font-size: ${fontSize}; text-align: center; text-decoration: none; text-shadow: none;${altButtonStyles}`)

    bunnyButton.setAttribute('data-torrenturl', torrentURL)

    bunnyButton.title = ` ─── 🌎 ${settingsPanelEntries[`${torrentSettings.trackerDomain}`]} 🌎 ─── 
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

🔗 ${bunnyButton.dataset.torrenturl}`

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
                bunnyButtonClickedActions(this, torrentSettings, 'globalLeftClickAction')
            } else {
                // This tracker is using a specified leftClick action
                bunnyButtonClickedActions(this, SETTINGS.leftClick)
            }


        } else if ( event.button == 1 ) {
            // Middle-Click: Do what is saved by SETTINGS.globalMiddleClickAction

            bunnyButtonClickedActions(this, torrentSettings, 'globalMiddleClickAction')

        }


    })

    return bunnyButton

}


function getPageSeparator(downloadElement, manualSeparator=false) {
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

        } catch(error) {
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
        // Add the torrentURL to qui using the tracker settings

        if ( SETTINGS.quiURL == '' || SETTINGS.quiApiKey == '' ) {
            // Alert the user that both a quiURL and ApiKey are required

            window.alert('🐰 quiCKIE 🐰\n\nBoth a quiURL and ApiKey are required to communicate with qui\n\nShift-Click the BunnyButton to open the setting panel')

        } else {
            // Run the function to add the torrent to qui with the current site settings
            bunnyButton.id = '__CLICKED__'
            bunnyButton.textContent = ' 🕓 '

            addTorrent({
                quiURL: SETTINGS.quiURL,
                quiApiKey: SETTINGS.quiApiKey,
                torrentURL: bunnyButton.dataset.torrenturl,
                intance: torrentSettings.instance,
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


function addTorrent({
    // Using the provided parameters, create a object containing all the info needed to POST a new torrent to the client, then pass that object to the appropriate POST function depending on if the torrentURL has authentication
    quiURL,
    quiApiKey,
    torrentURL,
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
    if ( torrentPostData.torrentURL.match(/(auth=|authkey=|magnet:\?xt=urn:btih:)/) && SETTINGS.globalForcedTorrentFile == false && SETTINGS.forceTorrentFile == false ) {
        // Yes, this is an authenticated url or magnet link, so send it directly to the client
        quiPOST(torrentPostData)

    } else {
        // No, this url has no authentication or is being forced to download the .torrentt file through the browser before sending it to the client
        document.getElementById('__CLICKED__').textContent = ' 🧲 '
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

            window.alert(`❌ quiCKIE ❌\n\nStatus Code: ${response.status}\n\n${response.responseText}\n\nThere was a problem connecting to qui. This is usually caused by qui not running or a bad quiURL. Check the service is running and the quiURL for typos, usually it's the same url you can copy-paste from your browser...\n\nquiURL: ${SETTINGS.quiURL}\n\nThe full response has been printed in the console`)

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
    // Check for elements that have the unique 'data-quickie_torrenturl' attribute designating them as integrated thirdParty torrentURLs for which to generate a BunnyButton. This process will loop every 5000ms.
    
    setTimeout(() => {

        let allThirdPartyElements = document.querySelectorAll('[data-quickie_torrenturl]')

        if ( allThirdPartyElements.length > 0 ) {

            // Use an existing BunnyButton as the base for which to pull styles from
            let existingBB = document.querySelector('a.quickie_bunnyButton:not(a.quickie_thirdParty)')

            for (let downloadElement of allThirdPartyElements) {
                // For each thirdPartyElement, create a BunnyButton using the elements 'data-quickie_torrenturl' attribute

                let torrentSettings = {
                    trackerDomain: trackerDomain,
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
                        presetMenuItems = createPresetItems(Object.keys(settingsPanelEntries))
                        SETTINGS.firstThirdPartyScan = false

                    }

                    // [quickie_tracker] : Check if the thirdParty element has specified from which tracker the bunnyButtons should get their settings
                    if ( downloadElement.dataset.quickie_tracker != undefined ) {
                        let thirdPartyDomain = settingsLabelToDomain[`${downloadElement.dataset.quickie_tracker.toLowerCase()}`]

                        torrentSettings.trackerDomain = thirdPartyDomain
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
                attachPresetsMenu('a.quickie_newBunnyButton', torrentSettings.trackerDomain)

            }


        }

        // Repeat this function after 5000ms
        scanForThirdPartyTorrentURLS(5000)

    }, delay)

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
