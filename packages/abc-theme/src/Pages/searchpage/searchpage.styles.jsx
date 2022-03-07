import { styled } from "frontity"

export const Wrapper = styled.div`
  width: var(--screen-width);
  @media screen and (max-width: 1100px){
    width: 100vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SearchContainer = styled.div`
  
  width: 80%;
  padding-left: 50px;


  @media screen and (max-width: 1100px){
    width: 100%;
    margin-left: 0px;
  }

  a {
  text-decoration: none;
  cursor:pointer;
  color: var(--colors-text);
  }
`

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

