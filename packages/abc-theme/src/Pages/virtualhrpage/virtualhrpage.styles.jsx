import { styled } from "frontity"

export const LoggedOutWrapper = styled.div`
  position: fixed;
  top: 75px;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, .75);

  @media screen and (max-width: 1100px){
    top: 50px;
  }
`

export const InnerWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

