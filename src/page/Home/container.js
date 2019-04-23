import React, { Component } from "react";
import Presenter from "./presenter";

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
    this.props.fetchCats(1, {});
  }

  fetchCats = () => {
    const { page, isFetching, fetchCats } = this.props;
    if (!isFetching) {
      fetchCats(page);
    }
  };

  render() {
    const { cats, hasMoreCats } = this.props;
    return (
      <Presenter
        cats={cats}
        hasMoreCats={hasMoreCats}
        fetchCats={this.fetchCats}
        searchOption={this.state}
        handleInputChange={this._handleInputChange}
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
