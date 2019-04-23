import React, { Component } from "react";
import { Item, Card, Image, Content, Title, Source } from "./styles";

class Container extends Component {
  favClick = id => {
    const { favoriteImage } = this.props;
    favoriteImage(id);
  };
  render() {
    const { url, id } = this.props;
    return (
      <Item>
        <Card>
          <Image src={url} />
          <Content>
            {/* <Title>name</Title> */}
            <Source>
              <button onClick={() => this.favClick(id)}>Fav-In</button>
            </Source>
          </Content>
        </Card>
      </Item>
    );
  }
}
export default Container;
