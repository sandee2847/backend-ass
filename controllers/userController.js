const jwt = require("jsonwebtoken");
const User = require("../models/User");
// ---------user register----------
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .send({ message: "Username or email already exists" });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).send("User registered successfully!");
  } catch (error) {
    res.status(400).send("Error registered user");
  }
};
// --------------user login-----------------
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send("Invalid credentials");
    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send("Invalid credentials");
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).send("Error logging in");
  }
};
// -------------Retrieve a list of books borrowed by a specific user-------------
const getUserBooks = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate("borrowedBooks");
    if (!user) {
      return res.status(400).send("User not found");
    }
    res.json(user.borrowedBooks);
  } catch (error) {
    res.status(400).send("error reteriving books");
  }
};

module.exports = { register, login, getUserBooks };
