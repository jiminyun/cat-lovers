import React, { Component } from "react";
import SlideItem from "components/SlideItem";
import { Slider, SlideWrapper, Card } from "./styles";
import "./styles.scss";

class Slide extends Component {
  state = {
    cat: [],
    cats: []
  };

  componentWillReceiveProps(props) {
    this.setState({ cats: props.cats });
    this.setState({ cat: props.cat });
  }

  nextProperty = () => {
    const newIndex = this.state.cat.index + 1;
    const obj = this.state.cats.filter(cat => cat.index === newIndex);
    this.setState({
      cat: obj
    });
  };

  prevProperty = () => {
    const newIndex = this.state.cat.index - 1;
    const obj = this.state.cats.filter(cat => cat.index === newIndex);
    this.setState({
      cat: obj
    });
  };

  render() {
    console.log("v", this.state);

    const { cat, cats } = this.state;
    return (
      <div className="slider">
        <div className="slide-wrapper">
          {cats.map(cat => (
            <div className="card">
              <SlideItem key={cat.id} url={cat.url} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Slide;
