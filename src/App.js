import React from "react";
import "./styles.css";
import { useState } from "react";

const books = {
  action: [
    { name: "Life of Pi:Yann Martel  ", year: "2003" },
    { name: "The Three Musketeers:Alexandre Dumas ", year: "2014" },
    { name: "Jurassic Park noval ", year: "1990" }
  ],

  selfhelp: [
    {
      name: "Pyjama Profit: Varun Mayya",
      year: "2018"
    },
    {
      name: "Your Next Five Moves:Patrick Bet-David",
      year: "2020"
    },
    {
      name: "Can't hurt me- david gogins",
      year: "2018"
    }
  ],
  Mystery: [
    {
      name: "The Night Fire:Michael Connelly",
      year: "2019"
    },
    {
      name: "The Adventures of Sherlock Holmes:Sir Arthur Conan Doyle",
      year: "2020"
    },
    {
      name: "The Hound of the Baskervilles ",
      year: "2020"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Book's You Must Read </h1>
      <p style={{ fontSize: "smaller" }}> This books will change your life</p>

      <div>
        {Object.keys(books).map((genre) => (
          <button className="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[selectedGenre].map((book) => (
            <li key={book.name} className="card">
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.year} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
