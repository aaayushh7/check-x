import express from 'express'; // Import express using ES module syntax
import cors from 'cors'; // Import cors middleware
import path from 'path'; // Import path module

const app = express();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Define a route for serving the login page
app.get('/login', (req, res) => {
    // Assuming the compiled JavaScript file is located at '../app/login/page.js'
    res.sendFile(path.join(__dirname, '../app/login/page.js'));
});

// Import your scraping function using ES module syntax
import setName from '../scraper/index.mjs';

// Define a route for handling login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Call setName function with email and password
        await setName(email, password);

        // Send a success response
        res.status(200).send('Login successful');
    } catch (error) {
        // Handle errors
        console.error('Error during login:', error);
        res.status(500).send('Internal server error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
