"use server"
import { getBrowserInstance } from '../utils/browserManager.mjs';
import { getAttendance } from './attendance.mjs';
import { getSlots } from './slot.mjs';

const url = 'https://academia.srmist.edu.in/';


export async function Login(email,pass) {
    
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
       const list = await getAttendance();
        await getSlots();
        return list;
        // console.log('getAttendance')
        await browser.close();
        // return browser;
    }
    catch(err){
        console.log(err);
    }
};
