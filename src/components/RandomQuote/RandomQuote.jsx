"use client";
import { useState } from "react";
import "./RandomQuote.css";
import { FaXTwitter } from "react-icons/fa6";
import { IoReloadCircleOutline } from "react-icons/io5";

function RandomQuote() {
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
  loadQuotes();

  const random = () => {
    const select = quotes[~~(Math.random() * quotes.length)];
    setQuote(select);
  };

  const twitterFunc = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(",")[0]}</div>
          <div className="icons">
            <IoReloadCircleOutline
              size={42}
              width={40}
              color="#fff"
              className="img"
              onClick={random}
            />
            <FaXTwitter
              color="#fff"
              size={42}
              className="img"
              onClick={twitterFunc}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
