const service = require("../service/service");
const puppeteer = require('puppeteer');

const axios = require('axios');
const cheerio = require('cheerio');

exports.manuData = async (req, res, next) => {
    try {
        // res.send("hellow world")
        const url = "https://api.radheexch.xyz/delaymarkets/Markets/menu";

        const manuData = await service.scraping(url);
        return res.status(200).json({ message: 'manu data', data: manuData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
    }
}

exports.sports = async (req, res, next) => {
    try {
        // res.send("hellow world")
        const { id } = req?.params;
        const url = `https://api.radheexch.xyz/delaymarkets/markets/eventtype/${id}`;

        const sportsData = await service.scraping(url);
        return res.status(200).json({ message: 'sports data', data: sportsData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
    }
}
exports.details = async (req, res, next) => {
    try {
        // res.send("hellow world")
        const { id } = req?.params;
        const url = `https://api.radheexch.xyz/delaymarkets/events/detail/${id}`;

        const sportsData = await service.scraping(url);
        return res.status(200).json({ message: 'sports data', data: sportsData });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error });
    }
}

// exports.fetch_Cricker_Matchs = async (req,res,next) => {
//     try {
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();

//         const url = "https://www.skyexch.biz/exchange/member/index.jsp?eventType=4"
//         await page.goto(url, { waitUntil: 'networkidle2' });
//         const matches = await page.evaluate(() => {
//             const dlElements = Array.from(document.querySelectorAll('dl.game-list-col'));

//             return dlElements.map(dl => {
//                 const eventId = dl.getAttribute('eventid');
//                 const marketid = dl.getAttribute('marketid');
//                 const eventName = dl.getAttribute('eventname');
//                 const openDate = dl.getAttribute('opendate');
//                 const inPlay = dl.getAttribute('inplay');

//                 const vsNameAnchor = dl.querySelector('a#vsName');
//                 const vsName = vsNameAnchor ? vsNameAnchor.innerText.replace(/\s+/g, ' ').trim() : null;

//                 const lowLiquidityTag = dl.querySelector('#lowLiquidityTag');
//                 const lowLiquidity = lowLiquidityTag && lowLiquidityTag.style.display !== 'none';

//                 const statusSpan = dl.querySelector('#dateTimeInfo .in_play');
//                 const status = statusSpan ? statusSpan.innerText.trim() : null;

//                 const live = dl.querySelector('#streamingIcon')?.style.display !== 'none';
//                 const fancy = dl.querySelector('#fancyBetIcon')?.style.display !== 'none';
//                 const bookmaker = dl.querySelector('#bookMakerIcon')?.style.display !== 'none';

//                 const matched = dl.querySelector('#matched')?.innerText.trim();

//                 const teamOdds = {};
//                 const oddsSections = dl.querySelectorAll('dd');

//                 oddsSections.forEach(section => {
//                     const teamName = section.querySelector('[runner]')?.getAttribute('runner');
//                     if (teamName) {
//                         const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
//                         const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
//                         teamOdds[teamName] = { back, lay };
//                     } else if (section.classList.contains('col-draw')) {
//                         const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
//                         const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
//                         teamOdds["Draw"] = { back, lay };
//                     }
//                 });

//                 return {
//                     eventId,
//                     marketid,
//                     eventName,
//                     openDate,
//                     inPlay,
//                     lowLiquidity,
//                     vsName,
//                     status,
//                     live,
//                     fancy,
//                     bookmaker,
//                     matchedAmount: matched,
//                     teamOdds
//                 };
//             });
//         });
//         await browser.close();
//         return res.status(200).json({ message: 'Cricket_Maches', data: matches });

//     }
//     catch (err) {
//         console.log("err", err);
//         return res.status(400).json({ error: err });

//     }
// }





// exports.fetch_Soccer_Data= async (req,res,next) => {
//     try {
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();

//         const url = "https://www.skyexch.biz/exchange/member/index.jsp?eventType=1"
//         await page.goto(url, { waitUntil: 'networkidle2' });
//         const matches = await page.evaluate(() => {
//             const dlElements = Array.from(document.querySelectorAll('dl.game-list-col'));

//             return dlElements.map(dl => {
//                 const eventId = dl.getAttribute('eventid');
//                 const marketid = dl.getAttribute('marketid');
//                 const eventName = dl.getAttribute('eventname');
//                 const openDate = dl.getAttribute('opendate');
//                 const inPlay = dl.getAttribute('inplay');

//                 const vsNameAnchor = dl.querySelector('a#vsName');
//                 const vsName = vsNameAnchor ? vsNameAnchor.innerText.replace(/\s+/g, ' ').trim() : null;

//                 const lowLiquidityTag = dl.querySelector('#lowLiquidityTag');
//                 const lowLiquidity = lowLiquidityTag && lowLiquidityTag.style.display !== 'none';

//                 const statusSpan = dl.querySelector('#dateTimeInfo .in_play');
//                 const status = statusSpan ? statusSpan.innerText.trim() : null;

//                 const live = dl.querySelector('#streamingIcon')?.style.display !== 'none';
//                 const fancy = dl.querySelector('#fancyBetIcon')?.style.display !== 'none';
//                 const bookmaker = dl.querySelector('#bookMakerIcon')?.style.display !== 'none';

//                 const matched = dl.querySelector('#matched')?.innerText.trim();

//                 const teamOdds = {};
//                 const oddsSections = dl.querySelectorAll('dd');

//                 oddsSections.forEach(section => {
//                     const teamName = section.querySelector('[runner]')?.getAttribute('runner');
//                     if (teamName) {
//                         const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
//                         const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
//                         teamOdds[teamName] = { back, lay };
//                     } else if (section.classList.contains('col-draw')) {
//                         const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
//                         const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
//                         teamOdds["Draw"] = { back, lay };
//                     }
//                 });

//                 return {
//                     eventId,
//                     marketid,
//                     eventName,
//                     openDate,
//                     inPlay,
//                     lowLiquidity,
//                     vsName,
//                     status,
//                     live,
//                     fancy,
//                     bookmaker,
//                     matchedAmount: matched,
//                     teamOdds
//                 };
//             });
//         });
//         await browser.close();
//         return res.status(200).json({ message: 'Cricket_Maches', data: matches });

//     }
//     catch (err) {
//         console.log("err", err);
//         return res.status(400).json({ error: err });

//     }
// }

// exports.fetch_Tennis_Data= async (req,res,next) => {
//     try {
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();

//         const url = "https://www.skyexch.biz/exchange/member/index.jsp?eventType=2"
//         await page.goto(url, { waitUntil: 'networkidle2' });
//         const matches = await page.evaluate(() => {
//             const dlElements = Array.from(document.querySelectorAll('dl.game-list-col'));

//             return dlElements.map(dl => {
//                 const eventId = dl.getAttribute('eventid');
//                 const marketid = dl.getAttribute('marketid');
//                 const eventName = dl.getAttribute('eventname');
//                 const openDate = dl.getAttribute('opendate');
//                 const inPlay = dl.getAttribute('inplay');

//                 const vsNameAnchor = dl.querySelector('a#vsName');
//                 const vsName = vsNameAnchor ? vsNameAnchor.innerText.replace(/\s+/g, ' ').trim() : null;

//                 const lowLiquidityTag = dl.querySelector('#lowLiquidityTag');
//                 const lowLiquidity = lowLiquidityTag && lowLiquidityTag.style.display !== 'none';

//                 const statusSpan = dl.querySelector('#dateTimeInfo .in_play');
//                 const status = statusSpan ? statusSpan.innerText.trim() : null;

//                 const live = dl.querySelector('#streamingIcon')?.style.display !== 'none';
//                 const fancy = dl.querySelector('#fancyBetIcon')?.style.display !== 'none';
//                 const bookmaker = dl.querySelector('#bookMakerIcon')?.style.display !== 'none';

//                 const matched = dl.querySelector('#matched')?.innerText.trim();

//                 const teamOdds = {};
//                 const oddsSections = dl.querySelectorAll('dd');

//                 oddsSections.forEach(section => {
//                     const teamName = section.querySelector('[runner]')?.getAttribute('runner');
//                     if (teamName) {
//                         const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
//                         const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
//                         teamOdds[teamName] = { back, lay };
//                     } else if (section.classList.contains('col-draw')) {
//                         const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
//                         const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
//                         teamOdds["Draw"] = { back, lay };
//                     }
//                 });

//                 return {
//                     eventId,
//                     marketid,
//                     eventName,
//                     openDate,
//                     inPlay,
//                     lowLiquidity,
//                     vsName,
//                     status,
//                     live,
//                     fancy,
//                     bookmaker,
//                     matchedAmount: matched,
//                     teamOdds
//                 };
//             });
//         });
//         await browser.close();
//         return res.status(200).json({ message: 'Cricket_Maches', data: matches });

//     }
//     catch (err) {
//         console.log("err", err);
//         return res.status(400).json({ error: err });

//     }
// }



exports.fetchCricketMatches = async (req, res, next) => {
    try {
        // Launch Puppeteer browser instance
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // URL to scrape data from
        const url = "https://www.skyexch.biz/exchange/member/index.jsp?eventType=4";
        
        // Navigate to the URL and wait until network is idle
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Extract the cricket match data using evaluate
        const matches = await page.evaluate(() => {
            const dlElements = Array.from(document.querySelectorAll('dl.game-list-col'));

            return dlElements.map(dl => {
                const eventId = dl.getAttribute('eventid');
                const marketid = dl.getAttribute('marketid');
                const eventName = dl.getAttribute('eventname');
                const openDate = dl.getAttribute('opendate');
                const inPlay = dl.getAttribute('inplay');

                const vsNameAnchor = dl.querySelector('a#vsName');
                const vsName = vsNameAnchor ? vsNameAnchor.innerText.replace(/\s+/g, ' ').trim() : null;

                const lowLiquidityTag = dl.querySelector('#lowLiquidityTag');
                const lowLiquidity = lowLiquidityTag && lowLiquidityTag.style.display !== 'none';

                const statusSpan = dl.querySelector('#dateTimeInfo .in_play');
                const status = statusSpan ? statusSpan.innerText.trim() : null;

                const live = dl.querySelector('#streamingIcon')?.style.display !== 'none';
                const fancy = dl.querySelector('#fancyBetIcon')?.style.display !== 'none';
                const bookmaker = dl.querySelector('#bookMakerIcon')?.style.display !== 'none';

                const matched = dl.querySelector('#matched')?.innerText.trim();

                const teamOdds = {};
                const oddsSections = dl.querySelectorAll('dd');

                oddsSections.forEach(section => {
                    const teamName = section.querySelector('[runner]')?.getAttribute('runner');
                    if (teamName) {
                        const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
                        const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
                        teamOdds[teamName] = { back, lay };
                    } else if (section.classList.contains('col-draw')) {
                        const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
                        const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
                        teamOdds["Draw"] = { back, lay };
                    }
                });

                return {
                    eventId,
                    marketid,
                    eventName,
                    openDate,
                    inPlay,
                    lowLiquidity,
                    vsName,
                    status,
                    live,
                    fancy,
                    bookmaker,
                    matchedAmount: matched,
                    teamOdds
                };
            });
        });

        // Close the browser after scraping is done
        await browser.close();

        // Send back the data as a JSON response
        return res.status(200).json({
            success: true,
            message: 'Cricket Matches fetched successfully',
            data: matches
        });

    } catch (err) {
        console.error("Error fetching cricket matches:", err);

        // Error handling for the API
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch cricket matches',
            error: err.message || 'Internal Server Error'
        });
    }
};

exports.fetchSoccerMatches = async (req, res, next) => {
    try {
        // Launch Puppeteer browser instance
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // URL to scrape data from
        const url = "https://www.skyexch.biz/exchange/member/index.jsp?eventType=1";
        
        // Navigate to the URL and wait until network is idle
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Extract the cricket match data using evaluate
        const matches = await page.evaluate(() => {
            const dlElements = Array.from(document.querySelectorAll('dl.game-list-col'));

            return dlElements.map(dl => {
                const eventId = dl.getAttribute('eventid');
                const marketid = dl.getAttribute('marketid');
                const eventName = dl.getAttribute('eventname');
                const openDate = dl.getAttribute('opendate');
                const inPlay = dl.getAttribute('inplay');

                const vsNameAnchor = dl.querySelector('a#vsName');
                const vsName = vsNameAnchor ? vsNameAnchor.innerText.replace(/\s+/g, ' ').trim() : null;

                const lowLiquidityTag = dl.querySelector('#lowLiquidityTag');
                const lowLiquidity = lowLiquidityTag && lowLiquidityTag.style.display !== 'none';

                const statusSpan = dl.querySelector('#dateTimeInfo .in_play');
                const status = statusSpan ? statusSpan.innerText.trim() : null;

                const live = dl.querySelector('#streamingIcon')?.style.display !== 'none';
                const fancy = dl.querySelector('#fancyBetIcon')?.style.display !== 'none';
                const bookmaker = dl.querySelector('#bookMakerIcon')?.style.display !== 'none';

                const matched = dl.querySelector('#matched')?.innerText.trim();

                const teamOdds = {};
                const oddsSections = dl.querySelectorAll('dd');

                oddsSections.forEach(section => {
                    const teamName = section.querySelector('[runner]')?.getAttribute('runner');
                    if (teamName) {
                        const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
                        const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
                        teamOdds[teamName] = { back, lay };
                    } else if (section.classList.contains('col-draw')) {
                        const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
                        const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
                        teamOdds["Draw"] = { back, lay };
                    }
                });

                return {
                    eventId,
                    marketid,
                    eventName,
                    openDate,
                    inPlay,
                    lowLiquidity,
                    vsName,
                    status,
                    live,
                    fancy,
                    bookmaker,
                    matchedAmount: matched,
                    teamOdds
                };
            });
        });

        // Close the browser after scraping is done
        await browser.close();

        // Send back the data as a JSON response
        return res.status(200).json({
            success: true,
            message: 'Soccer Matches fetched successfully',
            data: matches
        });

    } catch (err) {
        console.error("Error fetching Soccer matches:", err);

        // Error handling for the API
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch Soccer matches',
            error: err.message || 'Internal Server Error'
        });
    }
};

exports.fetchTennisMatches = async (req, res, next) => {
    try {
        // Launch Puppeteer browser instance
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // URL to scrape data from
        const url = "https://www.skyexch.biz/exchange/member/index.jsp?eventType=2";
        
        // Navigate to the URL and wait until network is idle
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Extract the cricket match data using evaluate
        const matches = await page.evaluate(() => {
            const dlElements = Array.from(document.querySelectorAll('dl.game-list-col'));

            return dlElements.map(dl => {
                const eventId = dl.getAttribute('eventid');
                const marketid = dl.getAttribute('marketid');
                const eventName = dl.getAttribute('eventname');
                const openDate = dl.getAttribute('opendate');
                const inPlay = dl.getAttribute('inplay');

                const vsNameAnchor = dl.querySelector('a#vsName');
                const vsName = vsNameAnchor ? vsNameAnchor.innerText.replace(/\s+/g, ' ').trim() : null;

                const lowLiquidityTag = dl.querySelector('#lowLiquidityTag');
                const lowLiquidity = lowLiquidityTag && lowLiquidityTag.style.display !== 'none';

                const statusSpan = dl.querySelector('#dateTimeInfo .in_play');
                const status = statusSpan ? statusSpan.innerText.trim() : null;

                const live = dl.querySelector('#streamingIcon')?.style.display !== 'none';
                const fancy = dl.querySelector('#fancyBetIcon')?.style.display !== 'none';
                const bookmaker = dl.querySelector('#bookMakerIcon')?.style.display !== 'none';

                const matched = dl.querySelector('#matched')?.innerText.trim();

                const teamOdds = {};
                const oddsSections = dl.querySelectorAll('dd');

                oddsSections.forEach(section => {
                    const teamName = section.querySelector('[runner]')?.getAttribute('runner');
                    if (teamName) {
                        const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
                        const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
                        teamOdds[teamName] = { back, lay };
                    } else if (section.classList.contains('col-draw')) {
                        const back = section.querySelector('.btn-back')?.innerText.trim() || '--';
                        const lay = section.querySelector('.btn-lay')?.innerText.trim() || '--';
                        teamOdds["Draw"] = { back, lay };
                    }
                });

                return {
                    eventId,
                    marketid,
                    eventName,
                    openDate,
                    inPlay,
                    lowLiquidity,
                    vsName,
                    status,
                    live,
                    fancy,
                    bookmaker,
                    matchedAmount: matched,
                    teamOdds
                };
            });
        });

        // Close the browser after scraping is done
        await browser.close();

        // Send back the data as a JSON response
        return res.status(200).json({
            success: true,
            message: 'Tennis Matches fetched successfully',
            data: matches
        });

    } catch (err) {
        console.error("Error fetching Tennis matches:", err);

        // Error handling for the API
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch Tennis matches',
            error: err.message || 'Internal Server Error'
        });
    }
};