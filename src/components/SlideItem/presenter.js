import React from "react";
import { Item, Card, Image, A } from "./styles";

const presenter = props => {
  return (
    <Item>
      <A>
        <Card>
          <Image src={props.url} />
        </Card>
      </A>
    </Item>
  );
};

export default presenter;
