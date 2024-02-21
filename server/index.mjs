import express from 'express'; 
import cors from 'cors'; 
import path from 'path'; 

const app = express();

app.use(cors());

app.use(express.json());

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../app/login/page.js'));
});

import setName from '../scraper/index.mjs';

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        await setName(email, password);

        res.status(200).send('Login successful');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal server error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


// node --experimental-modules index.mjs