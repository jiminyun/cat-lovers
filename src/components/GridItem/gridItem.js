import React, { Component } from "react";
import { Item, Card, Image, Content, Title, Source } from "./styles";

class Container extends Component {
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
    if (heart.length > 0) return "heart";
    else return "";
  };

  render() {
    const { url, id, f_id } = this.props;
    //console.log(this.props);
    return (
      <Item>
        <Card>
          <Image src={url} />
          <Content>
            {/* <Title>name</Title> */}
            <Source>
              <button onClick={() => this.favClick(id)}>Fav-In</button>
              <button onClick={() => this.delFavClick(f_id)}>unFav-In</button>
              <h1>{this.getHeart(id)}</h1>
            </Source>
          </Content>
        </Card>
      </Item>
    );
  }
}
export default Container;
