import { styled } from "frontity"

export const GlassWrap = styled.div`
  width: 100%;

  background: linear-gradient(-90deg, hsla(0,0%,100%,0.1) 0%, hsla(0, 0%, 100%, .88) 100%) !important;
  -webkit-backdrop-filter: blur( 25.0px );
  backdrop-filter: blur( 25.0px );
  border: 1px solid hsla( 0, 0%, 100%, 0.18 );
  display: flex;
  overfliw: hidden;
`

export const LeftBar = styled.div`
  position: fixed;
  height: 100vh;
  width: 150px;
  background-color: var(--colors-site-mainTheme);
  z-index: 5;
  isolation: isolate;

  @media screen and (max-width: 1100px){
    display: none;
  }
`

export const NewsTitle = styled.h1`
  color: var(--colors-site-mainTheme);
`

export const BlogWrapper = styled.div`
  margin-top: -2px;
  position: relative;
  background-color: var(--colors-site-white);
  padding: 40px 10vw 40px 10vw;
  height: 100%;
  width: 75%;
  margin-left: 150px;
  

  @media screen and (max-width: 1100px){
    margin-left: 0px;
    padding: 0px 20px;
    max-width: 100vw;
    width: 100vw;
    margin-left: none;
  
  }
`