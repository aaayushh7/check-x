const puppeteer = require('puppeteer');
import { Browser } from 'puppeteer';

const url = 'https://academia.srmist.edu.in/';
const email = 'at7257@srmist.edu.in';
const pass = 'Helloworld@123';

export async function getData() {
    try {
        const Browser: Browser = await puppeteer.launch({headless: true});

        const page = await Browser.newPage();
        page.goto(url);
    }
    catch(err){
        console.log(err);
    }
};