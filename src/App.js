import "./styles.css";
import React, { useState } from "react";
const movieRecommendation = {
  Romance: [
    { name: "Me Before You", ratings: "5/5" },
    { name: "The Princess Switch", ratings: "4.5/5" },
    { name: "The Kissing Booth", ratings: "3.5/5" },
    { name: "365 Days", ratings: "2.5/5" }
  ],
  Action: [
    { name: "Extraction", ratings: "4.7/5" },
    { name: "Suicide Squad", ratings: "4.5/5" },
    { name: "6 underground", ratings: "3.5/5" },
    { name: "Ava", ratings: "3.5/5" }
  ],
  Drama: [
    { name: "The Irishman", ratings: "4.5/5" },
    { name: "Mudbound", ratings: "3.5/5" },
    { name: "Roma", ratings: "4.5/5" },
    { name: "The Trial of Chicago", ratings: "3.5/5" }
  ],
  Mystery: [
    { name: "Murder Mystery", ratings: "4/5" },
    { name: "The Sleepover", ratings: "3.5/5" },
    { name: "The Invitation", ratings: "2.5/5" },
    { name: "Hush", ratings: "3.5/5" }
  ]
};

export default function App() {
  const [movies, setMovie] = useState("Romance");

  function clickHandler(genre) {
    setMovie(genre);
  }
  return (
    <div className="App">
      <h1>
        What movie to watch on <strong id="netflix-logo">Netflix?📽</strong>
      </h1>

      <h3>
        Here are some of the best movies on Netflix you can see this lockdown :)
      </h3>

      <div>
        {Object.keys(movieRecommendation).map((genre) => (
          <button className="btn-genre" onClick={() => clickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {movieRecommendation[movies].map((movie) => (
            <li className="list-non-bullet" key={movie.name}>
              <div style={{ fontSize: "bolder" }}>{movie.name}</div>
              <div style={{ fontSize: "smaller" }}>{movie.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
      <div> Made With Love ❤</div>
    </div>
  );
}
