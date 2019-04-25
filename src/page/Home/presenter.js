import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "components/Grid";
import Slide from "components/Slide";
import Loader from "components/Loader";
import { Wrapper } from "./styles";
import PropTypes from "prop-types";
import { layouts } from "store/app/utils";
import Search from "components/Search";

const Presenter = props => {
  //console.log("presenter", props);
  return (
    <>
      <Search
        searchOption={props.searchOption}
        handleInputChange={props.handleInputChange}
      />
      <Wrapper>
        {props.layout === layouts.grid ? (
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
        ) : (
          <Slide cats={props.cats} cat={props.cat} />
        )}
      </Wrapper>
    </>
  );
};

Presenter.propTypes = {
  cats: PropTypes.array
};
export default Presenter;
