import { styled } from 'frontity';

import { innerFrameDiv } from "../../styles/global-variables.styles"

import Guy from "../../assets/images/building.jpg"

export const Wrapper = styled.div`
  width: var(--screen-width);
  height: var(--screen-height);
  position: relative;

  @media screen and (max-width: 1100px){
    width: 100vw;

  }
`

export const ImageWrapper = styled.div`
  ${innerFrameDiv}
  background-image: url(${Guy});
  background-size: cover;
  background-position: bottom center;
`

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`