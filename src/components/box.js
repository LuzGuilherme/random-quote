import React from "react";
import "./app.css";

const Box = ({quote, author, nextQuote}) => {

    return (
        <div id="quote-box">
            <div id="quote-text">
                <h1 id="text">{quote}</h1>
                <h2 id="author">{author}</h2>
            </div>
            <button onClick={nextQuote} id="new-quote">New Quote</button>
        </div>
    )
}

export default Box;