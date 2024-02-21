"use server"
import { getBrowserInstance } from '../utils/browserManager';
import { getAttendance } from './attendance';
import { getSlots } from './slot';

const url = 'https://academia.srmist.edu.in/';


export async function Login(email:string,pass:string) {
    
    try {
        const browser = await getBrowserInstance();

        const page = await browser.newPage();
        await page.goto(url);

        const iframeElement = await page.waitForSelector('iframe');
        const frame = await iframeElement?.contentFrame();
        await frame?.type('#login_id', email);
        await frame?.click('#nextbtn');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await frame?.type('#password_container .textbox_div #password', pass);
        await frame?.click('#nextbtn');
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Login succesful!")
        // await browser.close(); 
        await getAttendance();
        await getSlots();
        // console.log('getAttendance')
        await browser.close();
        // return browser;
    }
    catch(err){
        console.log(err);
    }
};
