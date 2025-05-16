const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 3000;
const route = require("./router/route");
const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

// Middleware
app.use(express.json());
app.use(cors())
app.use('/api/v1', route);


// const fetch_Cricket_Data = async () => {
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
//         return matches;

//     }
//     catch (err) {
//         console.log("err", err);

//     }
// }

// app.get('/', async (req, res) => {
//     const data = await fetch_Cricket_Data()
//     res.status(200).send({ info: data })
// })
// fetch_Cricket_Data()
// setInterval(,1000)

// const fatch_Soccer_Data = async () => {
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
//         return matches;

//     }
//     catch {
//         console.log("err");

//     }
// }


// const fatch_Cricket_Detail = async () => {

//     try {
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();

//         // Replace this with your actual page URL
//         await page.goto('https://www.skyexch.biz/exchange/member/fullMarket?eventType=4&eventId=34303643&marketId=1.243567454', { waitUntil: 'networkidle2' });

//         const result = await page.evaluate(() => {
//             const teamHome = document.querySelector('#teamHome')?.innerText.trim();
//             const teamAway = document.querySelector('#teamAway')?.innerText.trim();

//             const scoreHome = document.querySelector('#runsHome')?.innerText.trim();
//             const scoreAway = document.querySelector('#runsAway')?.innerText.trim();

//             const currentDay = document.querySelector('#currentDay')?.innerText.trim();
//             const innings = document.querySelector('.scores-inns')?.innerText.trim();

//             // Extract odds for each team
//             const oddsRows = Array.from(document.querySelectorAll('tr[id^="fullSelection_"]'));
//             const odds = oddsRows.map(row => {
//                 const team = row.querySelector('p')?.innerText?.trim();
//                 const back1 = row.querySelector('.back-1 a')?.innerText.trim();
//                 const back2 = row.querySelector('.back-2 a')?.innerText.trim();
//                 const back3 = row.querySelector('.back-3 a')?.innerText.trim();
//                 const lay1 = row.querySelector('.lay-1 a')?.innerText.trim();
//                 const lay2 = row.querySelector('.lay-2 a')?.innerText.trim();
//                 const lay3 = row.querySelector('.lay-3 a')?.innerText.trim();

//                 return {
//                     team,
//                     back: [back3, back2, back1].filter(Boolean),
//                     lay: [lay1, lay2, lay3].filter(Boolean),
//                 };
//             });

//             return {
//                 match: `${teamHome} vs ${teamAway}`,
//                 scores: {
//                     [teamHome]: scoreHome,
//                     [teamAway]: scoreAway
//                 },
//                 day: currentDay,
//                 innings,
//                 odds
//             };
//         });

//         console.log(JSON.stringify(result, null, 2));

//         await browser.close();
//         return result;  
//     } catch (err) {
//         console.log(err,"err");
        
//     }

// }


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
