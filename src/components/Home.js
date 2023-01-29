import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.get("http://localhost:5000/book", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBooks(data.data);

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      <button onClick={getBooks}>View Books</button>
      {books?.map((book) => {
        return (
          <div key={book.id}>
            <p>author: {book.author}</p>
            <p>title: {book.title}</p>
            <p>description: {book.description}</p>
            <br />
          </div>
        );
      })}
      <Link to="/">Logout</Link>
    </div>
  );
}

export default Books;
