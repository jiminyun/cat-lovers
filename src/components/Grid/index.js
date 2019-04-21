import React, { Component } from "react";

import GridItem from "components/GridItem";

import { GridWrapper } from "./styles";

class Grid extends Component {
  render() {
    console.log(this.props);
    return (
      <GridWrapper>
        {this.props.cats.map(cat => (
          <GridItem key={cat.id} {...cat} />
        ))}
      </GridWrapper>
    );
  }
}

export default Grid;
