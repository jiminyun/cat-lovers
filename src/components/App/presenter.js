import React from "react";
import { ThemeProvider } from "styled-components";
import Grid from "components/Grid";
import { colorsDark } from "styles/colors";

import { Wrapper, Title } from "./styles";

const Presenter = props => (
  <ThemeProvider theme={colorsDark}>
    <div>
      <Wrapper>
        <Grid />
      </Wrapper>
    </div>
  </ThemeProvider>
);

export default Presenter;
