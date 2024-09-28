const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/raj");

// Define the User model
const User = mongoose.model('User', { name: String, email: String, password: String });

// Middleware to parse JSON request bodies
app.use(express.json());

// Signup route
app.post('/signup', async function(req, res) {
    const username = req.body.username;  // Should be 'email' if that's what you intend
    const name = req.body.name;
    const password = req.body.password;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: username });
        if (existingUser) {
            return res.status(400).send("Username already exists");
        }


        // Create a new user
        const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/raj");

// Define the User model
const User = mongoose.model('User', { name: String, email: String, password: String });

// Middleware to parse JSON request bodies
app.use(express.json());

// Signup route
app.post('/signup', async function(req, res) {
    const username = req.body.username;  // Should be 'email' if that's what you intend
    const name = req.body.name;
    const password = req.body.password;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: username });
        if (existingUser) {
            return res.status(400).send("Username already exists");
        }

        // Create a new user
        const user = new User({
            name: name,
            email: username,
            password: password
        });

        // Save the user to the database
        await user.save();

        // Send response
        res.json({ msg: "User saved successfully" });
    } catch (error) {
        res.status(500).send("Error saving user: " + error.message);
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

        // const user = new User({
        //     name: name,
        //     email: username,
        //     password: password
        // });

        // Save the user to the database
        await user.save();

        // Send response
        res.json({ msg: "User saved successfully" });
    } catch (error) {
        res.status(500).send("Error saving user: " + error.message);
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
