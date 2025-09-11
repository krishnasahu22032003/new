const axios = require('axios');
const readline = require('readline-sync');

const BASE_URL = "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data"; // Replace with your actual API URL

// Task 1: Get all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    console.log("All Books:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 2: Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/books/${isbn}`);
    console.log(`Book Details (ISBN: ${isbn}):`, response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 3: Get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log(`Books by ${author}:`, response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 4: Get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log(`Books with title "${title}":`, response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 5: Get book review
async function getBookReview(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/reviews/${isbn}`);
    console.log(`Reviews for ISBN ${isbn}:`, response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 6: Register new user
async function registerUser(username, password) {
  try {
    const response = await axios.post(`${BASE_URL}/register`, { username, password });
    console.log("User Registered:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 7: Login user
async function loginUser(username, password) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { username, password });
    console.log("User Logged In:", response.data);
    return response.data.token; // Save token for further requests
  } catch (error) {
    console.error(error.message);
  }
}

// Task 8: Add/Modify review
async function addBookReview(isbn, review, token) {
  try {
    const response = await axios.put(`${BASE_URL}/reviews/${isbn}`, 
      { review },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("Review Added/Modified:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 9: Delete review
async function deleteBookReview(isbn, token) {
  try {
    const response = await axios.delete(`${BASE_URL}/reviews/${isbn}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("Review Deleted:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 10: Async callback example
function getAllBooksAsync(callback) {
  axios.get(`${BASE_URL}/books`)
    .then(response => callback(null, response.data))
    .catch(err => callback(err));
}

// Task 11: Search by ISBN using Promises
function searchByISBNPromise(isbn) {
  return axios.get(`${BASE_URL}/books/${isbn}`)
    .then(res => res.data)
    .catch(err => console.error(err.message));
}

// Task 12: Search by Author using async/await
async function searchByAuthor(author) {
  await getBooksByAuthor(author);
}

// Task 13: Search by Title using async/await
async function searchByTitle(title) {
  await getBooksByTitle(title);
}

// Example usage
(async () => {
  await getAllBooks(); // Task 1
  await getBookByISBN("12345"); // Task 2
  await getBooksByAuthor("J.K. Rowling"); // Task 3
  await getBooksByTitle("Harry Potter"); // Task 4
  await getBookReview("12345"); // Task 5
  await registerUser("newuser", "password123"); // Task 6
  const token = await loginUser("newuser", "password123"); // Task 7
  await addBookReview("12345", "Amazing book!", token); // Task 8
  await deleteBookReview("12345", token); // Task 9

  getAllBooksAsync((err, data) => { // Task 10
    if(err) console.error(err);
    else console.log("Async Callback Books:", data);
  });

  const isbnBook = await searchByISBNPromise("12345"); // Task 11
  console.log("Promise Search by ISBN:", isbnBook);
})();
