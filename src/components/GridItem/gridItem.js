import React, { Component } from "react";
import {
  Item,
  Card,
  Image,
  OverLay,
  LikeBox,
  A,
  Heart,
  FontAwesomeHeart
} from "./styles";
import { routes } from "store/app/utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faHeart);

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
    const IsFav = heart.map(item => item.id);
    if (IsFav > 0) return "heart" + IsFav;
    else return "";
  };

  render() {
    const { url, id, f_id, currentRoute } = this.props;
    const fav_id = parseInt(this.getHeart(id).replace("heart", ""));
    return (
      <Item>
        <A>
          <Card>
            {this.getHeart(id).includes("heart") &&
              currentRoute !== routes.favorite && (
                <FontAwesomeHeart>
                  <FontAwesomeIcon
                    icon="heart"
                    color="red"
                    onClick={() => this.delFavClick(fav_id)}
                  />
                </FontAwesomeHeart>
              )}
            <Image src={url} />
            {currentRoute === routes.favorite && (
              <OverLay>
                <div>
                  <LikeBox onClick={() => this.delFavClick(f_id)}>
                    <h1>UnFav it</h1>
                    <Heart
                      src={require("assets/instagram-heart-free-download-png-5a3c0b2e25bb87.6396458615138844621546.jpg")}
                    />
                  </LikeBox>
                </div>
              </OverLay>
            )}
            <OverLay>
              <div>
                {!this.getHeart(id).includes("heart") && (
                  <LikeBox onClick={() => this.favClick(id)}>
                    <h1>Fav It</h1>
                    <Heart
                      src={require("assets/instagram-heart-free-download-png-5a3c0b2e25bb87.6396458615138844621546.jpg")}
                    />
                  </LikeBox>
                )}
              </div>
            </OverLay>
          </Card>
        </A>
      </Item>
    );
  }
}
export default Container;
