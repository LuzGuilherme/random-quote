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
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote:"Life is what happens when you’re busy making other plans.",
        author:"John Lennon"
    },
    {
        quote:"Get busy living or get busy dying.",
        author:"Stephen King"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"Mae West"
    },
    {
        quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote:"If you want to live a happy life, tie it to a goal, not to people or things.",
        author:"Albert Einstein"
    },
    {
        quote:"Never let the fear of striking out keep you from playing the game.",
        author:"Babe Ruth"
    },
    {
        quote:"Money and success don’t change people; they merely amplify what is already there.",
        author:"Will Smith"
    },
    {
        quote:"Not how long, but how well you have lived is the main thing.",
        author:"Seneca"
    }
]

const RandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotesArr.length);
    return quotesArr[randomIndex];
}

export default RandomQuote;