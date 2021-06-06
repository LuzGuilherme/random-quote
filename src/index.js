import { Component } from "react";
import ReactDOM from "react-dom";
import Box from "./components/box";
import RandomQuote from "./components/quotes";

class App extends Component {
  state = {
    displayQuote: {},
  };

  getRandomQuote = () => {
    this.setState({
      displayQuote: RandomQuote(),
    });
  };

  componentDidMount() {
    this.getRandomQuote();
  }

  render() {
    return (
      <div>
        <Box
          quote={this.state.displayQuote.quote}
          author={this.state.displayQuote.author}
          nextQuote={this.getRandomQuote}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
