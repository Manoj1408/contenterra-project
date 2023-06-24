import React from 'react';
import he from "he";
import './App.css'


function Card({ title, selfTextHTML, url, score }) {
    console.log(score)
    const decodedSelfTextHTML = selfTextHTML ? he.decode(selfTextHTML) : "";
    return (
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <div
          className="card-selftext"
          dangerouslySetInnerHTML={{ __html: decodedSelfTextHTML }}
        ></div>
        <a className="card-url" href={url}>
          {url}
        </a>
        <p className="card-score">Score: {score}</p>
        {/* <hr /> */}
      </div>
    );
}

 export default Card;