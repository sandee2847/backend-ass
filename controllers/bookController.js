const Book = require("../models/Book");
const User = require("../models/User");

// ------------save book---------------
const addBook = async (req, res) => {
  const { title, author, ISBN, quantity } = req.body;
  try {
    const newBook = new Book({ title, author, ISBN, quantity });
    await newBook.save();
    res.status(201).send("Book added");
  } catch (error) {
    res.status(400).send("error adding book");
  }
};
// -----------get all book-----------
const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    res.status(400).send("error reteriving books");
  }
};

// ---------------get book by bookId----------------
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById({ _id: id });
    if (!book) {
      return res.status(400).send("Book not found!");
    }
    res.json(book);
  } catch (error) {
    res.status(400).send("error reteriving book!");
  }
};
// -----------borrow the book----------
const borrowBook = async (req, res) => {
  const { bookId, userId } = req.params;
  try {
    const book = await Book.findById(bookId);
    const user = await User.findById(userId);

    if (!book || !user) return res.status(404).send("Book or user not found");
    if (book.quantity === 0) return res.status(400).send("Book not available");

    book.quantity -= 1;
    user.borrowedBooks.push(book._id);

    await book.save();
    await user.save();

    res.send("Book borrowed");
  } catch (err) {
    res.status(500).send("Error borrowing book");
  }
};
// -------------rteurn book----------------
const returnBook = async (req, res) => {
  const { bookId, userId } = req.params;
  try {
    const book = await Book.findById(bookId);
    const user = await User.findById(userId);

    if (!book || !user) return res.status(404).send("Book or user not found");

    book.quantity += 1;
    user.borrowedBooks.pull(book._id);

    await book.save();
    await user.save();

    res.send("Book returned");
  } catch (err) {
    res.status(400).send("Error returning book");
  }
};

module.exports = { addBook, getBook, getBookById, borrowBook, returnBook };
