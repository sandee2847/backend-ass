const express = require("express");
const auth = require("../middleware/auth");
const {
  addBook,
  getBook,
  getBookById,
  borrowBook,
  returnBook,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/books", auth, addBook); //add books
router.get("/books", getBook); //get books
router.get("/books/:id", getBookById); //get books by id
router.post("/borrow/:bookId/:userId", auth, borrowBook); //allow user to borrow the book
router.post("/return/:bookId/:userId", auth, returnBook); //allow user to return the book

module.exports = router;
