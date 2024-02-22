import express from 'express'; 
import cors from 'cors'; 
import path from 'path'; 
import { closeBrowserInstance } from '../utils/browserManager.mjs';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, '../app/login/page.js'));
});

import setName from '../scraper/index.mjs';

app.post('/api/login', async (req, res,next) => {
    try {
        const { email, password } = req.body;

        await setName(email, password);
        // closeBrowserInstance

        // next();
        console.log("after next");
        res.redirect('../app/attendance/page.js');
        console.log("after next");
        // res.sendFile(path.join(__dirname, '../app/login/page.js'));
        

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal server error');
    }
});

app.get("/attendance", async(req,res)=>{
    console.log("inside get");
    // const response=true;
    res.sendFile(path.join(__dirname, '../app/attendance/page.js'));

});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


// node --experimental-modules index.mjs