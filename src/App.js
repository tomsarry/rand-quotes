import React, { Component } from "react";
import "./App.css";
import Quote from "./components/Quote";
import quotes from "./quotes";
import "./styles.scss";

// async function randomQuote() {
//   const response = await fetch("https://api.quotable.io/random");
//   const data = await response.json();
//   console.log(`${data.content} —${data.author}`);
//   return data;
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }

  getRandomQuote() {
    // create random 0 <= n <= quotes.length
    var rand = Math.floor(Math.random() * Math.floor(quotes.length));
    return quotes[rand];
  }

  handleClick = () => {
    const newQuote = this.getRandomQuote();
    this.setState({ quote: newQuote.quote, author: newQuote.author });
  };

  render() {
    return (
      <React.Fragment>
        <Quote {...this.state} />
        <button className="btn-quote" onClick={this.handleClick}>
          Get a new Quote
        </button>
      </React.Fragment>
    );
  }
}

export default App;
