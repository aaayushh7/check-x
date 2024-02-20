
import { Login } from "@/scraper/login";
export default async function handler(email:string,pass:string) {
    try {
       await Login(email,pass);
        console.log("scap called") 
        
    } catch (error) {
        console.error('Error executing Login:', error);
    }
}