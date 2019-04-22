import React from "react";
import { SearchWrapper } from "./styles";

const Search = props => (
  <SearchWrapper>
    <form>
      <select name="order" onChange={props.handleInputChange}>
        <option value="desc">Desc</option>
        <option value="asc">Asc</option>
        <option value="random">Random</option>
      </select>
      <select name="type" onChange={props.handleInputChange}>
        <option value="All">All</option>
        <option value="Static">Static</option>
        <option value="Animated">Animated</option>
      </select>
      <select name="category" onChange={props.handleInputChange}>
        <option value="clothes">clothes</option>
        <option value="hats">hats</option>
        <option value="sinks">sinks</option>
        <option value="space">space</option>
        <option value="sunglasses">sunglasses</option>
        <option value="ties">ties</option>
      </select>
      <select name="breed" onChange={props.handleInputChange}>
        <option value="None">None</option>
        <option value="Toyger">Toyger</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </form>
  </SearchWrapper>
);

export default Search;
