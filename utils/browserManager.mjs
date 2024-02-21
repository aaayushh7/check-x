import puppeteer from 'puppeteer';

let browserInstance = null;

export async function getBrowserInstance() {
    if (!browserInstance) {
        browserInstance = await puppeteer.launch({ headless: true });
    }
    return browserInstance;
}

export async function closeBrowserInstance() {
    if (browserInstance) {
        await browserInstance.close();
        browserInstance = null;
    }
}
