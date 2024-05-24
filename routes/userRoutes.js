const express = require("express");
const auth = require("../middleware/auth");
const {
  register,
  login,
  getUserBooks,
} = require("../controllers/userController");

const router = express.Router();

router.post("/users", register); //user register
router.post("/users/login", login); //user login
router.get("/users/:userId/books", auth, getUserBooks); //books borrowed by a specific user.

module.exports = router;
