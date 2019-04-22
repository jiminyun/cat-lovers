import React from "react";
import { ThemeProvider } from "styled-components";
import Nav from "components/Nav";
import Grid from "components/Grid";
import Search from "components/Search";
import { colorsDark } from "styles/colors";
import { Wrapper } from "./styles";
import PropTypes from "prop-types";

const Presenter = props => {
  // console.log("handleInputChange", props.handleInputChange);
  // console.log("searchOption", props.searchOption);
  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Nav />
        <Search
          searchOption={props.searchOption}
          handleInputChange={props.handleInputChange}
        />
        <Wrapper>
          <Grid cats={props.cats} />
        </Wrapper>
      </div>
    </ThemeProvider>
  );
};

Presenter.propTypes = {
  cats: PropTypes.array
};
export default Presenter;
