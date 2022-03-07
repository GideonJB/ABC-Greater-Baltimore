import { styled } from "frontity"
import Link from "@frontity/components/link"

export const Wrapper = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;
  }
  display: none;
  opacity: 0%;
  transition: .5s all;
  pointer-events: none;
  touch-action: none;

  &.open{
    display: block;
    opacity: 100%;
    pointer-events: auto;
    touch-action: auto;
  }
`

export const MenuContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: var(--screen-height-mobile);
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  text-align: center;
  overflow: auto;
  /* border-radius: 0px 10px 10px 0px; */
`

export const CloseButton = styled. div`
  color: white;
`

export const MainMenuContainer = styled.div`
  width: 100%;
`

export const MenuListContainer = styled.div`
  height: fit-content;
  margin: 0px;
  text-align: left;
  /* border-top: 1px solid var(--colors-menuBlue); */
  a, p {
    font-size: 1.3em;
    color: white;
  }
`

export const MenuItem = styled(Link)`
  width: 100%;
  line-height: 1;
  white-space: pre-line;
  text-decoration: none;
  display: inline-block;
  padding: 15px;
  padding-left: 20px;
  

  &.active {
    box-shadow: none;
    background-color: white;
    color: var(--colors-text);
    font-weight: 600;
    text-decoration: red underline;
    text-underline-offset: 5px;

  }
`

export const MainSubContainer = styled.div`
  width: 90vw;
  margin-bottom: -25px;
  background-color: white;
  text-align: left;
  padding: 10px 0px 5px 0px;
  a{
    display: inline-block;
    padding-left: 50px;
    text-align: left;
    color: var(--colors-text);
  }
`

export const MemberMenuContainer = styled.div`
  padding-top: 10px;
  padding-top: 20px;
  width: 100%;
  border-top: solid 3px var(--colors-text);
  color: white;
`

export const MemberSubContainer = styled.div`
  width: 90vw;
  margin-left: -20px;
  margin-bottom: -25px;
  background-color: var(--colors-active);
  padding: 10px 0px;
  a{
    color: white;
  }
`

export const IconContainer = styled.div`
  position: fixed;
  top: 0px;
  margin-left: 10px;
  font-size: 2em;
  color: var(--colors-text);
  z-index: 5;

  @media screen and (min-width: 1000px) {
    display: none;
  }
`
export const TransparentDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
`