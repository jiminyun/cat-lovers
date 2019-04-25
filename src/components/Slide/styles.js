import styled from "styled-components";
import { mobile, tablet, monitor } from "styles/mediaQueries";

export const Card = styled.div``;

export const Slider = styled.div`
  position: relative;
  max-width: 500px;
  margin: 50px auto;
  ${Card} & {
    flex: 1;
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 500px;
    outline: 5px solid #61dafb;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const SlideWrapper = styled.div`
  display: flex;
`;
