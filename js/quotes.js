const quotes = [
  {
    quotes:
      "You are built not to shrink down to less but to blossom into more.",
    author: "Oprah Winfrey",
  },
  {
    quotes:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: "Bill Gates",
  },
  {
    quotes: "Why be a man when you can be a success?",
    author: "Bertolt Brecht",
  },
  {
    quotes:
      "A great secret of success is to go through life as a man who never gets used up.",
    author: "Albert Schweitzer",
  },
  {
    quotes:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quotes:
      "If you want the present to be different from the past, study the past.",
    author: "Baruch Spinoza",
  },
  {
    quotes:
      "It has never been my object to record my dreams, just to realize them.",
    author: "Man Ray",
  },
  {
    quotes: "Blaze with the fire that is never extinguished.",
    author: "Luisa Sigea",
  },
  {
    quotes: "We're so trendy we can't even escape ourselves.",
    author: "Kurt Cobain",
  },
  {
    quotes:
      "Education is what survives when what has been learned has been forgotten.",
    author: "B. F. Skinner",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;

author.innerText = todaysQuote.author;
