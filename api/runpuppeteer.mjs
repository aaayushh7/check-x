
import { Login } from "../scraper/login.mjs";
async function handler(email,pass) {

    try {
       await Login(email,pass);
        console.log("Custom Login api called.")
        console.log("Login success") 
        
        
    } catch (error) {
        console.error('Error executing Login:', error);
    }
}
export default handler