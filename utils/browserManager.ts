import * as puppeteer from 'puppeteer';

let browserInstance: puppeteer.Browser | null = null;

export async function getBrowserInstance(): Promise<puppeteer.Browser> {
    if (!browserInstance) {
        browserInstance = await puppeteer.launch({ headless: false });
    }
    return browserInstance;
}

export async function closeBrowserInstance() {
    if (browserInstance) {
        await browserInstance.close();
        browserInstance = null;
    }
}
