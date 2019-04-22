import React from "react";
import { ThemeProvider } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Nav from "components/Nav";
import Grid from "components/Grid";
import Search from "components/Search";
import Loader from "components/Loader";
import { colorsDark } from "styles/colors";
import { Wrapper } from "./styles";
import PropTypes from "prop-types";

const Presenter = props => {
  // console.log("handleInputChange", props.handleInputChange);
  // console.log("searchOption", props.searchOption);
  console.log(props.cats.length);
  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Nav />
        <Search
          searchOption={props.searchOption}
          handleInputChange={props.handleInputChange}
        />
        <Wrapper>
          <InfiniteScroll
            dataLength={props.cats.length}
            next={props.fetchCats}
            hasMore={props.hasMoreCats}
            loader={<Loader />}
            style={{
              height: "100%",
              overflow: "visible"
            }}
          >
            <Grid cats={props.cats} />
          </InfiniteScroll>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
};

Presenter.propTypes = {
  cats: PropTypes.array
};
export default Presenter;
