import styled from "styled-components";

const RADIUS = 4;

export const Item = styled.li`
  height: 100%;
  position: relative;
`;

export const Card = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
`;

export const ExternalLink = styled.a`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  display: block;
  height: 280px;
  max-width: 100%;
  border-radius: ${RADIUS}px;
  //border-top-right-radius: ${RADIUS}px;
  object-fit: cover;
`;
export const OverLay = styled.div`
  background-color: white;
  border-bottom-left-radius: ${RADIUS}px;
  border-bottom-right-radius: ${RADIUS}px;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  //flex-grow: 1;
  margin: 100px auto;
  position: absolute;
  top: 50;
  bottom: 15;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.3s ease;

  ${Card}:hover & {
    opacity: 0.9;
    transition: 0.3s ease;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  margin: 0;
  padding: 16px;
  padding-bottom: 70px;
  font-size: 16px;
  font-weight: 400;
  flex-grow: 1;
`;

export const Source = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 16px;
`;

export const LikeBox = styled.div`
  background-color: white;
  margin: 10px;
  height: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Heart = styled.img`
  position: absolute;
  top: -10;
  width: 25px;
`;

export const FontAwesomeHeart = styled.div`
  position: absolute;
  margin: 8px;
  width: 25px;
`;

export const A = styled.a`
  cursor: pointer;
`;
