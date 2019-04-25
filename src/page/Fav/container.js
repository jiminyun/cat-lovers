import React, { Component } from "react";
import Presenter from "./presenter";
import { routes } from "store/app/utils";

class Container extends Component {
  static defaultProps = {
    favCats: []
  };

  state = {
    order: "",
    type: "",
    category: "",
    breed: ""
  };

  componentDidMount() {
    this.props.setCurrentRoute(routes.favorite);
    this.props.fetchFavCats(1, {});
  }

  fetchFavCats = () => {
    const { page, isFetching, fetchFavCats } = this.props;
    if (!isFetching) {
      fetchFavCats(page);
    }
  };

  render() {
    const { favCats, hasMoreCats } = this.props;

    return (
      <Presenter
        favCats={favCats}
        hasMoreCats={hasMoreCats}
        fetchFavCats={this.fetchFavCats}
        searchOption={this.state}
        handleInputChange={this._handleInputChange}
      />
    );
  }

  _handleInputChange = async event => {
    const target = event.target;
    const { name, value } = target;
    const { fetchFavCats } = this.props;

    await this.setState({
      [name]: value
    });
    //console.log(this.state);
    fetchFavCats(1, this.state);
  };
}

export default Container;
