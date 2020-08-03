import React, { useEffect, useState } from "react";
import twitterSVG from "../assets/twitter.svg";
import axios from "axios";

const Quote = () => {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((response) => {
      const result = response.data;
      setQuote(result);
    });
  }, []);

  const link = `https://twitter.com/intent/tweet?text=${quote.content}%20-${quote.author}`;

  var tags = "";
  if (quote.tags) {
    tags = quote.tags.map((tag) => (
      <span key={tag} className="tag">
        {tag}
      </span>
    ));
  }

  return (
    <div className="div-quote">
      <div className="div-tags">{tags}</div>

      <h1 className="content">
        {quote.content ? quote.content : "Loading..."}
      </h1>
      <p className="author">{quote.author ? quote.author : "unknown"}</p>
      <a className="twitter-share-button" href={link}>
        <img
          className="svg"
          id="share"
          src={twitterSVG}
          alt="share it on twitter"
        ></img>
        <label htmlFor="share">Share this quote on Twitter</label>
      </a>
    </div>
  );
};

export default Quote;
