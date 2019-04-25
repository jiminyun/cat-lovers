import React, { Component } from "react";
import SlideItem from "./presenter";

class Container extends Component {
  render() {
    const { url } = this.props;
    return <SlideItem url={url} />;
  }

  favClick = id => {
    const { favoriteImage } = this.props;
    favoriteImage(id);
  };

  delFavClick = id => {
    const { deleteImage } = this.props;
    deleteImage(id);
  };

  getHeart = id => {
    const { favCats } = this.props;
    const heart = favCats.filter(favCat => favCat.image_id === id);
    const IsFav = heart.map(item => item.id);
    if (IsFav > 0) return "heart" + IsFav;
    else return "";
  };
}
export default Container;
