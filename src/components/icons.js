import React from "react";

const Icons =({quote, author})=> {

    let link = "https://twitter.com/intent/tweet?text=" + quote + " - " + author;

    return (
        <div>
            <a id="tweet-quote" title="Tweet this quote!" href={link} target="_blank">
                <img src="/twitter.png" alt="Twitter icon"></img>
            </a>
        </div>
    )
}

export default Icons;