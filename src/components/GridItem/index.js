import React from "react";
import { Item, Card, Image, Content, Title, Source } from "./styles";

const GridItem = props => {
  return (
    <Item>
      <Card>
        <Image src="https://miro.medium.com/max/1176/1*F9RzuXseG1VrTjFJd403gw.png" />
        <Content>
          <Title>title</Title>
          <Source>
            <div>source</div>
          </Source>
        </Content>
      </Card>
    </Item>
  );
};

export default GridItem;
