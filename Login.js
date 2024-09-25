const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "Harkirat Singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman Singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya Kumari",
  },
];

// Function to check if a user exists
function userExists(username, password) {
  return ALL_USERS.some(user => user.username === username && user.password === password);
}

// POST /signin route
app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  // Check if the user exists
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in-memory db",
    });
  }

  // Generate JWT token
  const token = jwt.sign({ username }, jwtPassword);
  return res.json({
    token,
  });
});

// GET /users route to get the list of users excluding the one in the token
app.get("/users", function (req, res) {
  const authHeader = req.headers.authorization;

  // Check if authorization header is present
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      msg: "Authorization token missing or malformed",
    });
  }

  const token = authHeader.split(" ")[1]; // Extract the token part

  try {
    // Verify the token
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Filter out the logged-in user from the list of users
    const filteredUsers = ALL_USERS.filter(user => user.username !== username);

    return res.json(filteredUsers);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

// Start the Express server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});