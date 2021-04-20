import styled from 'styled-components';

import backgroundImg from "../../assets/images/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImg});
  background-size: 75% 100%;
  background-repeat: no-repeat;
  background-position-x: right;
  overflow: hidden;
`;

export const GreenGraph = styled.img`
  position: absolute;
  left: 860px;
  top: 200px;
  width: 250px;
  height: 250px;
`;