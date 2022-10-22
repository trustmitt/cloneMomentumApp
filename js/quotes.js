const quotes = [
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "In order to write about life first you must live it.",
        author: "Ernest Hemingway",
    },
    {
        quote: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
        author: "Leo Burnett",
    },
    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey",
    },
    {
        quote: "It's really too late when you think it's late.",
        author: "G-Park",
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
