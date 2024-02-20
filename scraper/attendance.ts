"use server"
const puppeteer = require('puppeteer');


const url = 'https://academia.srmist.edu.in/';


export async function Login(email:string,pass:string) {
    try {
        const browser = await puppeteer.launch({headless: false});

        const page = await browser.newPage();
        await page.goto(url);

        const iframeElement = await page.waitForSelector('iframe');
        const frame = await iframeElement?.contentFrame();
        await frame?.type('#login_id', email);
        await frame?.click('#nextbtn');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await frame?.type('#password_container .textbox_div #password', pass);
        await frame?.click('#nextbtn');
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log("Login succesful!")
        await browser.close();
        
        
    }
    catch(err){
        console.log(err);
    }
};
