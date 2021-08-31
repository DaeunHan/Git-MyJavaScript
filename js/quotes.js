const quotes = [
    {
        quote: "Courage is being scared to death... and saddling up anyway.",
        author: "John Wayne",
    },
    {
        quote: "One person with a belief is equal to a force of 99 who have only interests.",
        author: "John Stuart Mill",
    },
    {
        quote: "If you can give your son or daughter only one gift, let it be enthusiasm.",
        author: "Bruce Barton",
    },
    {
        quote: "If one remains not annoyed when his greatness is not recognized in his time, isn't he a sage?",
        author: "Confucius",
    },
    {
        quote: "He that is good at making excuses is seldom good at anything else.",
        author: "Benjamin Franklin",
    },
    {
        quote: "He who can, does. He who cannot, teaches.",
        author: "George Bernard Shaw",
    },
    {
        quote: "It is the working man who is the happy man. It is the idle man who is the miserable man.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Maybe I wanted to hear it so badly that my ears betrayed my mind in order to secure my heart.",
        author: "Margaret Cho",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//todayQuote = 이하 -> quotes Array 내부에서 뭔지 탐색하는 것

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;