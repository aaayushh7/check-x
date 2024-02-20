
import { Login } from "@/scraper/login";
export default async function handler(email:string,pass:string) {
    try {
       await Login(email,pass);
        console.log("Custom Login api called.")
        console.log("Login success") 
        
    } catch (error) {
        console.error('Error executing Login:', error);
    }
}