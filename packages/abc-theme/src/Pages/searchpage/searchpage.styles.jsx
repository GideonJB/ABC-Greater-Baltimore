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

  @media screen and (max-width: 800px){
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
  text-decoration: none;
  cursor:pointer;
  color: var(--colors-text);
  }
  label{
    padding: 2px;
    color: var(--colors-site-white);
  }

  button{
    margin: 5px;
    color: var(--colors-site-white);
    background-color: var(--colors-site-mainTheme);
    border: none;
    border-radius: 8px;
    min-width: 150px;
    width: auto;
    height: 50px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }
`

export const LoggedOutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: hsla(0, 0%, 0%, .75);
  z-index: 2;

  @media screen and (max-width: 1100px){
    top: 50px;
  }
`

export const InnerWrapper = styled.div`
  padding-top: 40px;
  padding-left: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1500px) and (min-width: 1100px) {
    width: 80%;
  }

  @media screen and (max-width: 1100px){
    padding-left: 0px;
  }
`

