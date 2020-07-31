import React from "react";

const Quote = (props) => {
  return (
    <div className="div-quote">
      <h1 className="content">{props.quote}</h1>
      <p className="author">{props.author ? props.author : "unknown"}</p>
      <button className="btn-quote" onClick={props.handleClick}>
        Get a new Quote
      </button>
    </div>
  );
};

export default Quote;
