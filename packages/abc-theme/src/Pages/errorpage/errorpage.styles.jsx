import { styled } from "frontity"
import { fullFrameDiv } from "../../styles/global-variables.styles"
import Guy from "../../static/images/guy.jpg"

export const Background = styled.div`
  ${fullFrameDiv}
  background-image: url(${Guy});
  background-position: center center;
  background-size: cover;
  z-index: -1;
`

export const ErrorContainer = styled.div`
  height: 50vh;
  padding: 10vw;
  font-size: 1.2em;
  color: var(--colors-site-white);
  display: flex;
  align-items: center;
`
export const HeadlineWrapper = styled.div`
  position: relative;
`