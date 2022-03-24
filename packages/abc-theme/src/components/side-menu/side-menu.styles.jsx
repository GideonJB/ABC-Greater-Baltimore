import { styled } from "frontity"
import Link from "@frontity/components/link"

export const SideHoverWrapper = styled.div`
  display: flex;
  width: fit-content;

  @media screen and (max-width: 1100px) {
    display: none;
  }

`

export const Wrapper = styled.div`
  width: 165px;
  height: 100%;
  background-color: var(--colors-site-white);
  /* -webkit-box-shadow: 4px 0px 4px -2px ; */
  /* box-shadow: 4px 0px 4px -2px hsla(0, 0%, 0%, .5); */
  z-index: 3;
  padding-top: 100px;

  &.altborder{
    border-right: 2px solid var(--colors-site-mainTheme);
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }

  .active .menu-border{
     span{
       border-bottom: solid 2px red;
      }
  }

  .menu-border{
    &:hover{
      span{
        /* border-bottom: solid 2px red; */
      }
    }
  }
`

export const MenuItemContainer = styled.div`
  position: relative;
  width: 100%;
  &.altborder{
    padding-top: 100px;
  }
  
`

export const MemberMenuContainer = styled.div`
  
  height: calc(var(--screen-height)/7);
  /* margin-top: 20px; */
  /* border-bottom: 2px solid var(--colors-menuBlue); */
  /* background-color: hsl(0, 0%, 85%); */

  /* span{
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
    font-size: 1em;
    color: white;
  } */
`
export const HeaderLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`

export const HeaderLink = styled(Link)`
  font-family: "Poppins", sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  
`
