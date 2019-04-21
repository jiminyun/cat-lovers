import React, { Component } from "react";
import PropTypes from "prop-types";
import GridItem from "components/GridItem";

import { GridWrapper } from "./styles";

class Grid extends Component {
  static propTypes = {
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired
      })
    ).isRequired
  };

  render() {
    return (
      <GridWrapper>
        <GridItem />
      </GridWrapper>
    );
  }
}

export default Grid;
