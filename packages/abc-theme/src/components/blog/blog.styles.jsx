import { styled } from "frontity"

export const GlassWrap = styled.div`
  width: 100%;

  background: linear-gradient(-90deg, hsla(0,0%,100%,0.1) 0%, hsla(0, 0%, 100%, .88) 100%) !important;
  -webkit-backdrop-filter: blur( 25.0px );
  backdrop-filter: blur( 25.0px );
  border: 1px solid hsla( 0, 0%, 100%, 0.18 );
`

export const BlogWrapper = styled.div`
  margin-top: -2px;
  position: relative;
  background-color: var(--colors-site-white);
  padding: 40px 10vw 40px 10vw;
  height: 100%;
  width: 75%;
  border-left: 150px solid var(--colors-site-mainTheme);

  @media screen and (max-width: 1100px){
    margin-left: 0px;
    padding: 0px 20px;
    max-width: 100vw;
    width: 100vw;
    border-left: none;
  
  }
`