"use server"
import { getBrowserInstance } from '../utils/browserManager';
import fs from 'fs';
import path from 'path';

const url = 'https://academia.srmist.edu.in/#Page:My_Time_Table_2023_24';

export async function getSlots(){
    try {
        const browser = await getBrowserInstance();
        const page = await browser.newPage();
        await page.goto(url);       
        await page.waitForSelector('table .cntdDiv');
        const secondTable = await page.evaluate(() => {
            const tables = document.querySelectorAll('table');
            if (tables.length >= 2) {
                // Extract the contents of the second table
                const secondTableData = [];
                const rows = tables[1].querySelectorAll('tr');
                console.log("Number of <tr> elements in the second table:", rows.length); // Log the number of <tr> elements
        
                // Loop through the rows starting from the second row (index 1) up to the ninth row (index 8)
                for (let i = 6; i < Math.min(rows.length, 15); i++) {
                    const row = rows[i];
                    const cells = row.querySelectorAll('td');
                    if (cells.length >= 9) {
                        // Extract the text content of the 8th <td> element (index 7)
                        const eighthCellText = cells[8].innerText.trim();
                        secondTableData.push(eighthCellText);
                    } else {
                        secondTableData.push(''); // If there are less than 8 <td> elements, push an empty string
                    }
                }
                return secondTableData;
            } else {
                return null; // Return null if the second table is not found
            }
        });

        console.log("Data of the 8th column from the second table:", secondTable);

        const dataFolderPath = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataFolderPath)) {
            fs.mkdirSync(dataFolderPath);
        }

        // Write the data to attendance.js file inside the data folder
        const filePath = path.join(dataFolderPath, 'slots.js');
        fs.writeFile(filePath, `export const slots = ${JSON.stringify(secondTable)}`, (err) => {
            if (err) {
                console.error('Error writing data to file:', err);
            } else {
                console.log('Data saved to data/attendance.js');
            }
        });
        await browser.close();
        
        

    } catch (error) {
        console.log(error)
    }
}