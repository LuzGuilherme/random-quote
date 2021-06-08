import { Component } from "react";
import ReactDOM from "react-dom";
import Box from "./components/box";
import RandomQuote from "./components/quotes";
import Icons from "./components/icons";

class App extends Component {
  state = {
    displayQuote: {},
    bgColor: [
      '#caf7e3',
      '#f8eded',
      '#f6dfeb',
      "#ffeedb",
      "#ffbd9b",
      "#cee5d0",
      "#f3f0d7",
      "#d8b384",
      "#faf1e6",
      "#39a9cb",
      "#2940d3",
      "#ff449f",
      "#00ead3",
      "#fc92e3",
      "#005792"
    ],
  };

  getRandomQuote = () => {
    this.setState({
      displayQuote: RandomQuote(),
    });
  };

  getRandomColor = () => {
    var item = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
    document.body.style.backgroundColor = item;
  }

  componentDidMount() {
    this.getRandomQuote();
    this.getRandomColor();
    
  }

  render() {
    return (
      <div>
        <Box
          quote={this.state.displayQuote.quote}
          author={this.state.displayQuote.author}
          nextQuote={this.getRandomQuote}
          nextColor={this.getRandomColor}
        />
        <Icons/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
