import handler from "@/api/runpuppeteer";


async function setName(string1: string, string2: string) {
    try {
        const checkEmail = string1;
        const checkPass = string2;
        console.log(checkEmail + " : " + checkPass);

        await handler(checkEmail,checkPass);
        console.log("called handler")

    }
    catch (err) { console.log(err) }
}

export default setName;
