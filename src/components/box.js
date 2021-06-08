import React from "react";
import "./app.scss";

const Box = ({ quote, author, nextQuote, nextColor }) => {
  return (
    <div id="quote-box">
      <div id="quote-text">
        <h1 id="text">{quote}</h1>
        <h2 id="author">{author}</h2>
      </div>
      <button
        onClick={() => {
          nextQuote();
          nextColor();
        }}
        id="new-quote"
      >
        New Quote
      </button> <br></br>
      <a>
          <img src={require('./icons/twitter.png')}></img>
      </a>
    </div>
  );
};

export default Box;
