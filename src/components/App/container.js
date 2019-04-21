import React, { Component } from "react";
import Presenter from "./presenter";

class Container extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }
  render() {
    const { cats } = this.props;
    // console.log("container", ...cats);
    // console.log("container", cats, cats.length);
    // cats.map(cat => console.log(cat.id));

    return <Presenter cats={cats} />;
  }
}

export default Container;
