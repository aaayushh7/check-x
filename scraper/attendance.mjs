"use server"
import { getBrowserInstance } from '../utils/browserManager.mjs';
import fs from 'fs';
import path from 'path'; // Import path module to handle file paths


const url = 'https://academia.srmist.edu.in/#Page:My_Attendance';

export async function getAttendance() {
    try {
        const browser = await getBrowserInstance();
        const page = await browser.newPage(); // Create a new page


        await page.goto(url);
        // await new Promise(resolve => setTimeout(resolve, 2000));
        await page.waitForSelector('table:nth-of-type(2) .cntdDiv');
        console.log("Found .cntdDiv element inside the second table");
        const thirdTableData = await page.evaluate(() => {
            const tables = document.querySelectorAll('table');

            if (tables.length >= 3) {
                const thirdTable = tables[4]; // Adjusted index to 4 as per your description
                const rows = thirdTable.querySelectorAll('tr');
            
                const data = [];
                for (let i = 1; i < rows.length; i++) {
                    const firstCell = rows[i].querySelector('td:nth-child(1)'); // Select the first column cell
                    const secondCell = rows[i].querySelector('td:nth-child(2)');
                    const eighthCell = rows[i].querySelector('td:nth-child(8)'); // Select the 8th column cell
            
                    if (firstCell && secondCell && firstCell.textContent && secondCell.textContent && eighthCell && eighthCell.textContent) {
                        const codeWithBr = firstCell.textContent.trim();
                        let code = codeWithBr.split('<br>')[0];
                        code = code.replace('Regular', '');
                        const subject = secondCell.textContent.trim();
                        const attendance = eighthCell.textContent.trim();
                        data.push({ index: i, code, subject, attendance }); // Include the index along with other data
                    }
                }
                return data;
            }
            return null;
        });

        const dataFolderPath = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataFolderPath)) {
            fs.mkdirSync(dataFolderPath);
        }

        // Write the data to attendance.js file inside the data folder
        const filePath = path.join(dataFolderPath, 'attendance.js');
        fs.writeFile(filePath, `export const Attendance = ${JSON.stringify(thirdTableData)}`, (err) => {
            if (err) {
                console.error('Error writing data to file:', err);
            } else {
                console.log('Data saved to data/attendance.js');
            }
        });
        // await browser.close();
    }
    catch (err) {
        console.log(err)
        return null;
    }
}