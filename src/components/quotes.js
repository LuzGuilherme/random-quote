import React from "react";
import "./app.scss"

const quotesArr = [
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
        author: "Bernard M. Baruch"
    }
]

const RandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotesArr.length);
    return quotesArr[randomIndex];
}

export default RandomQuote;