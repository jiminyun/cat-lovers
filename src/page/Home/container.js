import React, { Component } from "react";
import Presenter from "./presenter";
import { routes } from "store/app/utils";

class Container extends Component {
  static defaultProps = {
    cats: []
  };

  state = {
    order: "",
    type: "",
    category: "",
    breed: ""
  };

  componentDidMount() {
    this.props.setCurrentRoute(routes.home);
    this.props.fetchCats(1, {});
    this.props.fetchFavCats(1, {});
  }

  fetchCats = () => {
    const { page, isFetching, fetchCats } = this.props;
    if (!isFetching) {
      fetchCats(page);
    }
  };
  render() {
    const cat = [];
    const { cats, hasMoreCats, layout } = this.props;
    cat.push(this.props.cats[0]);

    console.log("a", cat);

    return (
      <Presenter
        cats={cats}
        fetchCats={this.fetchCats}
        hasMoreCats={hasMoreCats}
        layout={layout}
        cat={cat} //slide
        // searchOption={this.state}
        // handleInputChange={this._handleInputChange}
      />
    );
  }
  _handleInputChange = async event => {
    const target = event.target;
    const { name, value } = target;
    const { fetchCats } = this.props;

    await this.setState({
      [name]: value
    });
    //console.log(this.state);
    fetchCats(1, this.state);
  };
}

export default Container;
