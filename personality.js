
class Person {
constructor(meta){
    this.location = meta.proxy;
    this.timeZone = meta.tZ;
    this.email = meta.email;
    this.name = meta.name;
    this.signature = meta.cookie;
    this.userAgent = meta.device.UA;
    this.screen = meta.device.screen;
    this.skipBtn = meta.btnLoc;

    this.botConfiguration = {
        headless: false,
        defaultViewport: null,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
}

async lifeSpan(){
    // this method co-ordinate the activity of this bot personality
this.workTime = ("09:00","13:00");
this.liteTime = ("13:01","20:59");
this.sleepTime = ("21:00","23:59");


}



async infoMe(){
    //tell us everything about this bot person!
console.log( ' I am bot: ${this.name}, my location is : ${this.location} and my timeZone ${this.timeZone} ')
}





async startLife(bot,useProxy){  
    //start the life of the bot
    const browser = await bot.launch(this.botConfiguration);
    console.log(" we just opened the chrome browser App ")
    //launch a browser for this bot in person.

    // below We would use the meta data of the bot construct a life
    // the bot would start with an active page, called page one, this page would
    // be active on all its existence till bot is destroyed

    const page = await browser.newPage();
    console.log(" new page created, lets proceed into validating the page browser instant")
    // active page has been set up above, lets move to use the bot meta data
    // below would be the bot meta data embeded on a bot personality

    // Configure the navigation timeout
    await page.setDefaultNavigationTimeout(0);

    //lets set the device resolution in respect to the userAgent
    await page.setViewport({width: this.screen.width, height: this.screen.height})
    console.log(" we have configured our viewPort")

    // lets set the Device used
    await page.setUserAgent(this.userAgent)
    console.log("UserAgent has been set to emulate a device")

    //lets set the location (proxy address of the personality)
    //await useProxy(page, this.location)
    console.log(" we have secured a tunnel location via proxy")


    //lets set save the details this person would use to fill forms, if any is detected
    //details are now saved in object mode (env)

    //lets load a cookie for the person, this cookie woul also be modified after each
    //page load using method cookieReloader

    await page.setCookie(...this.signature)
    console.log(" Cookies has been set to logged User")

    //let emulate a timeZone and tunnel timeZone properly
    await page.emulateTimezone(this.timeZone)
    console.log(' we have changed our time zone to match meta data')

    console.log(' we are about visiting the website')
    await page.goto("https://www.youtube.com")
    console.log(" The website above has been successfully accessed")

    console.log(" lets alert our name !")
    var name = '${this.name}';
    await page.evaluate (function(name) { alert ('This is bot (${name})') }, name); 

}

async cookieReloader(){
    // after page reloads are done, cookies get modified with new state setting and
    //config. This config comes with hashed keys that get regenerated

               // save cookies
               const cookies = await page.cookies();
               // save to bot personality
               this.signature = cookies;
}

}


module.exports.Person = Person;




