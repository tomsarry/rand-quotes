import React from "react";
import twitterSVG from "./twitter.svg";

const Quote = (props) => {
  const link = `https://twitter.com/intent/tweet?text=${props.quote}%20-${props.author}`;
  return (
    <div className="div-quote">
      <h1 className="content">{props.quote}</h1>
      <p className="author">{props.author ? props.author : "unknown"}</p>
      <button className="btn-quote" onClick={props.handleClick}>
        Get a new Quote
      </button>
      <a className="twitter-share-button" href={link}>
        <img
          className="svg"
          id="share"
          src={twitterSVG}
          alt="share it on twitter"
        ></img>
        <label for="share">Share this quote on Twitter</label>
      </a>
    </div>
  );
};

export default Quote;
