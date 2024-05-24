# Library Management System

A simple Library Management System built with Node.js, Express.js, and MongoDB. This project allows librarians to add books, users to register and login, and manage book borrow/return operations.

## Features

- User registration and login with JWT authentication
- Add new books to the library
- Borrow and return books
- Retrieve lists of books and borrowed books by users

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- nodemon

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (>=14.x)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/library-management-system.git
   cd library-management-system

Install dependencies:npm install

Set up environment variables:
Create a .env file in the root directory and add the following variables:
PORT=3000
MONGO_URI=mongodb://localhost:27017/library
JWT_SECRET=your_secret_key

Run the server: nodemon start



### Explanation:

1. **Project Description**: Provides an overview of the project and its features.
2. **Technologies Used**: Lists the main technologies and libraries used.
3. **Getting Started**: Includes prerequisites, installation steps, and how to set up environment variables.
4. **API Endpoints**: Documents the available API endpoints with example requests.
5. **Project Structure**: Outlines the directory structure of the project.
6. **Contributing**: Guidelines for contributing to the project.
7. **License**: License information.

Replace `your-username` and `your_secret_key` with your actual GitHub username and your desired JWT secret key, respectively. This README should help users understand how to set up and use your project.
