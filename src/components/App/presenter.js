import React from "react";
import { ThemeProvider } from "styled-components";
import Grid from "components/Grid";
import { colorsDark } from "styles/colors";

import { Wrapper, Title } from "./styles";
import PropTypes from "prop-types";
const Presenter = ({ cats }) => (
  <ThemeProvider theme={colorsDark}>
    <div>
      <Wrapper>
        <Grid cats={cats} />
      </Wrapper>
    </div>
  </ThemeProvider>
);

Presenter.propTypes = {
  cats: PropTypes.array
};
export default Presenter;
