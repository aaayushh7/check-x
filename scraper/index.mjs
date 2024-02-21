import handler from '../api/runpuppeteer.mjs';

async function setName(string1, string2) {
    try {
        const checkEmail = string1;
        const checkPass = string2;
        console.log(checkEmail + " : " + checkPass);

        await handler(checkEmail,checkPass);
        console.log("Middle ware activated server to client.")

    }
    catch (err) { console.log(err) }
}

export default setName;
