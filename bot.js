// require your node modules
const bot = require("puppeteer");
const fs = require("fs");
const useProxy = require('puppeteer-page-proxy')


// this getRandomItem function will be getting a random item from a link (json file)
async function getRandomItem(link) {
    let data = await fs.readFileSync(link, "utf-8");
    let proccessedData = JSON.parse(data)
    let proccessedDataLength = proccessedData.length;
    let urlIndex = Math.floor(Math.random() * proccessedDataLength)
    return (proccessedData[urlIndex])
}
// pls note that duration time of each bot would be done 
// on the management system, how ever for now we would set it at 1,200,000 mili seconds
// which is 1.2m milli seconds / 1000 =  1200 (seconds)
// which is same as 1200 seconds / 60 = 20 minutes
var timeLimit = 1200000; // 20 mins

async function getCookie(link) {
    let data = await fs.readFileSync(link, "utf-8");
    let proccessedData = JSON.parse(data)
    return proccessedData;
}

// The runAsenseBot is the main function (thing) that will run when ever we lauch this
// software that is when ever we run the command "node bot" , the runAdsenseBot is
//what will run first

async function runAdsenseBot() {


    const botConfiguration = {

        headless: false,
        defaultViewport: null,
        args: ['--no-sandbox', '--disable-setuid-sandbox']

    }

    let userAgent = await getRandomItem("assets/list-of-UA.json")
    console.log(" we have picked a user agent  :", userAgent)


    let url = await getRandomItem("assets/list-of-links.json")
    console.log(" we have picked a link", url)


    let proxy = await getRandomItem("assets/list-of-proxy.json");
    console.log(" we have picked this proxy: ", proxy)

    let cookies = await getRandomItem("assets/list-of-cookies.json");
    console.log("the cookies are : ", cookies)

    // lets launch the browser here (chrome)
    const chromeBrowser = await bot.launch(botConfiguration)
    console.log(" chrome browser launched !")
    const searchKeyword = 'site:https://getshoppings.com/';
    try {
        const chromeBrowserPage = await chromeBrowser.newPage()
        //await useProxy(chromeBrowserPage, `socks://PUpJbwHGHcKu:Unxss85oKa@${proxy}:1080`)
        await chromeBrowserPage.setUserAgent(userAgent);
        await chromeBrowserPage.setCookie(...cookies);
        await chromeBrowserPage.goto(url)

        await chromeBrowserPage.type('input[name="q"]', `${searchKeyword}`);
        await chromeBrowserPage.keyboard.press('Enter');

        await chromeBrowserPage.waitForNavigation();
        const linkHandlers = await chromeBrowserPage.$x('//h3[contains(text(), "' + '")]/ancestor::a[1]');
        if (linkHandlers.length > 0) {
            await linkHandlers[0].click();
        } else {
            throw new Error("No search result found");
        }
        // We must move our mouse to mimic movement else videos will not automatically play 
        //and ads might not show
        // movement of this mouse would be crafted ina new class of its own
        // for now we would just use the pre mouse movement to get the job done

        await chromeBrowserPage.waitForNavigation();
        await chromeBrowserPage.waitForTimeout(5000);
        // Scroll down three times
        for (let i = 0; i < 6; i++) {
            await chromeBrowserPage.evaluate(() => {
                window.scrollBy(0, window.innerHeight);
            });
            await chromeBrowserPage.waitForTimeout(2000);
        }
        for (let i = 0; i < 5; i++) {
            await chromeBrowserPage.evaluate(() => {
                window.scrollBy(0, -window.innerHeight);
            });
            await chromeBrowserPage.waitForTimeout(2000);
        }


        const pageWidth = await chromeBrowserPage.evaluate(() => window.innerWidth);
        const pageHeight = await chromeBrowserPage.evaluate(() => window.innerHeight);
        const randomX = Math.floor(Math.random() * pageWidth);
        const randomY = Math.floor(Math.random() * pageHeight);
        await chromeBrowserPage.mouse.click(randomX, randomY);

        await chromeBrowserPage.waitForNavigation();
        // find all the links to the posts in the sidebar
        const postLinks = await chromeBrowserPage.$$eval('#recent-posts-10 a', links => links.map(link => link.href));

        // open each post link in a new tab
        for (let i = 0; i < 6; i++) {
            await chromeBrowserPage.evaluate(link => {
                window.open(link, '_blank');
            }, postLinks[i]);
            await chromeBrowserPage.waitForTimeout(2000); // wait for the new tab to load
        }

        await chromeBrowserPage.mouse.move(100, 100);
        await chromeBrowserPage.mouse.down();
        await chromeBrowserPage.mouse.move(200, 200);
        await chromeBrowserPage.mouse.up();
    } catch (e) {

    } finally {

        setTimeout(function () {

            chromeBrowser.close()

            runAdsenseBot()

        }, timeLimit)
    }

}

runAdsenseBot()