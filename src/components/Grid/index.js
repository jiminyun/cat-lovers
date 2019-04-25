import React, { Component } from "react";

import GridItem from "components/GridItem";

import { GridWrapper } from "./styles";

const Grid = ({ cats }) => {
  return (
    <GridWrapper>
      {cats.map(cat => (
        <GridItem key={cat.id} f_id={cat.id} {...cat} {...cat.image} />
      ))}
    </GridWrapper>
  );
};

export default Grid;
