import React from "react";
import { Item, Card, Image, Content, Title, Source } from "./styles";

const GridItem = ({ id, url }) => {
  return (
    <Item>
      <Card>
        <Image src={url} />
        {/* <Content>
          <Title>name</Title>
          <Source>
            <div>breeds</div>
          </Source>
        </Content> */}
      </Card>
    </Item>
  );
};

export default GridItem;
