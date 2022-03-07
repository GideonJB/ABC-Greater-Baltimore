import { styled } from "frontity"

export const Wrapper = styled.div`
  /* height: 100vh; */
  width: var(--screen-width);
  /* height: var(--screen-height); */
  /* position: relative; */
  @media screen and (max-width: 1100px){
    width: 100vw;
  }

  /* overflow-x: hidden; */
`

export const StaffWrap = styled.div`
  padding-left: 150px;

  @media screen and (max-width: 1100px){
    padding: 0px;
  }
`

export const SectionTitle = styled.h1`
  margin-bottom: 30px;
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Column = styled.div`
  max-width: 300px;
  max-height: 350px;
  width: calc(var(--screen-width)/4);
  height: calc(var(--screen-width)/3);
  background-image: url(${props => props.imageBackground});
  background-position: center;
  background-size: cover;
  box-shadow: var(--shadow-elevation-medium-local);
  margin-right: 20px;
  text-align: center;


  @media screen and (max-width: 1100px){
    width: calc(100vw / 3.3);
    width: calc(100vw / 3.1);
  }

  @media screen and (max-width: 800px){
    margin-right: 10px;
    height: 200px;
  }

`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p{
    color: var(--colors-site-white);
    
    transition: all .6s ease;
    opacity: 0;
    z-index: 99;
  }

  &:hover{
    p{
      opacity: 1;
    }
  }

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: var(--colors-site-mainThemeOverlay); */
    background: var(--colors-site-mainThemeOverlay) !important;
          -webkit-backdrop-filter: blur( 5.0px );
          backdrop-filter: blur( 5.0px );
          /* border: 1px solid hsla( 0, 0%, 100%, 0.18 );  */
    transform: translate(-100%);
    transition: all 0.4s ease;
    
  }

  &:hover::after{
    transform: translate(0%);
  }

  @media screen and (max-width: 800px){
    background: var(--colors-site-mainThemeOverlay) !important;
    justify-content: flex-end;
    p{
      opacity: 1;
      font-size: .8em;
      
    }
  }
`

export const Name = styled.p`

`

export const Title = styled.p`

`

export const Description = styled.p`

`