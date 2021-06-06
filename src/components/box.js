import React from "react";

const Box = ({quote, author, nextQuote}) => {

    return (
        <div id="quote-box">
            <h1 id="text">{quote}</h1>
            <h2 id="author">{author}</h2>
            <button onClick={nextQuote} id="new-quote">New Quote</button>
            <a id="tweet-quote">Tweet</a>
        </div>
    )
}

export default Box;