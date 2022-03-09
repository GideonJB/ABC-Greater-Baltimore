import { keyframes, styled } from "frontity"
import { innerFrameDiv } from "../../styles/global-variables.styles"
import Guy from "../../static/images/guy.jpg"

export const Wrapper = styled.div`
  width: var(--screen-width);
  height: var(--screen-height);
  position: relative;

  @media screen and (max-width: 1100px){
    width: 100vw;
  }
`

const openAnim = keyframes`
  from {
    margin-left: 500px;
  }
  to {
    margin-left: 0px;
  }
`
const openAnim2 = keyframes`
  from {
    margin-left: 0px;
  }
  to {
    margin-left: 500px;
  }
`

const closeAnim = keyframes`
  from {
    margin-left: 0px;
  }
  to {
    margin-left: -500px;
  }
`
const closeAnim2 = keyframes`
  from {
    margin-left: -500px;
  }
  to {
    margin-left: 0px;
  }
`

export const Background = styled.div`
  ${innerFrameDiv}
  background-image: url(${Guy});
  background-position: bottom center;
  background-size: cover;
`

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`

export const ErrorMessage = styled.p`
  padding: 2px;
  color: red !important;
`

export const ForgottenButton = styled.p`
  margin-top: 5px;
  cursor: pointer;
`

export const RegisterAnimationWrapper=styled.div`
  
  width: 420px;

  &.close{
    animation: ${closeAnim} 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  &.open{
    animation: ${closeAnim2} 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`

export const PasswordAnimationWrapper=styled.div`
  margin-top: -400px;
  width: 420px;
  margin-left: 500px;

  &.open {
    animation: ${openAnim} 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  &.close{
    animation: ${openAnim2} 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
`

export const Arrow = styled.div`
  margin-top: 10px;
  cursor: pointer;
  font-size: 2.5em;
  
`