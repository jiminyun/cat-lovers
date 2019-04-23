import React, { Component } from "react";
import Presenter from "./presenter";
import { themes } from "store/app/utils";
import { colorsDark, colorsLight } from "styles/colors";

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
    this.setBodyBackgroundColor();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }
  setBodyBackgroundColor() {
    if (this.props.theme === themes.light) {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }

  fetchCats = () => {
    const { page, isFetching, fetchCats } = this.props;
    if (!isFetching) {
      fetchCats(page);
    }
  };

  render() {
    const { cats, hasMoreCats, theme } = this.props;
    return (
      <Presenter
        cats={cats}
        hasMoreCats={hasMoreCats}
        fetchCats={this.fetchCats}
        searchOption={this.state}
        handleInputChange={this._handleInputChange}
        theme={theme}
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
