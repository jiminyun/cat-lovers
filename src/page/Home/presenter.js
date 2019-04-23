import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "components/Grid";
import Search from "components/Search";
import Loader from "components/Loader";
import { Wrapper } from "./styles";
import PropTypes from "prop-types";

const Presenter = props => {
  return (
    <>
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
    </>
  );
};

Presenter.propTypes = {
  cats: PropTypes.array
};
export default Presenter;
