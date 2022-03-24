import { styled } from "frontity"

export const SubMenuWrapper = styled.div`
  position: absolute;
  /* top: 75px; */
  top: 0;
  left: 165px;
  width: 150px;
  height: var(--screen-height);
  /* background: linear-gradient(to right, var(--colors-active) 0%, var(--colors-sub) 100%);*/
  background: var(--colors-site-mainTheme);
  /* transition: all .5s; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 50px;
  z-index: 10;

  &.subalt{
    position: relative;
    width: 100%;
    height: auto;
    top: auto;
    left: auto;
  }
  
  a{
    color: white;
    /* justify-content: left; */
    white-space: pre-line;
    padding: 0 10px;

    &:hover{
      border-left: 5px solid red;
    }

    &.active{
      /* -webkit-box-shadow: inset 1px 0px 2px 1px hsla(0, 0%, 0%, .75);
      box-shadow: inset 1px 0px 2px 1px hsla(0, 0%, 0%, .75); */
      /* background-color: lightgrey; */
      /* color: black; */
      border-left: 5px solid red;
      text-decoration: none;
    }
  }
  &.open{
    /* width: var(--screen-width); */
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

export const SubMenuItemWrapper = styled.div`
  height: 800 px;
  padding-bottom: 100px;
`

export const SubMenuLine = styled.div`
  transition: all .5s;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 10px;
  height: calc(((100vh - 75px)/7) * 5);
  background: var(--colors-active);
  z-index: -1;
`