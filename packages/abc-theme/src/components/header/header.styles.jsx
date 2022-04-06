import { styled } from "frontity"
import Link from "@frontity/components/link"

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 75px;
  /* background-color: var(--colors-site-white); */
  z-index: 5;
  /* border-bottom: 3px solid var(--colors-site-mainTheme); */

  &.alt{
    background-color: var(--colors-site-white);
    height: 100px;
    border-bottom: 2px solid var(--colors-site-mainTheme);

    @media screen and (max-width: 1100px) {
      height: 50px;
    }
  }

  @media screen and (max-width: 1100px) {
    height: 50px;
    background-color: var(--colors-site-white);
  }
`

export const HeaderWrapper = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 20px;
  right: 25px;
  /* z-index: 5; */
  height: 100%;
  width: 100%;
 

  @media screen and (max-width: 1100px) {
    float: right;
    padding: 5px;
    

    &.logo{
      display: none;
    }
  }
`

export const HeaderLinkContainer = styled.div`
  width: auto;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: end;
  font-size: 1.3em;

  &.white{
    color: white;
  }

  p, div, span, a{
    font-family: "Poppins";
    font-weight: 500;
  }
  @media screen and (max-width: 1100px) {
    font-size: 1em;
    width: 400px;
  }

  @media screen and (max-width: 600px) {
    width: 200px;
    font-size: .8em;
    
    
    
  }
`

export const Tagline = styled.h3`
  margin-top: 40px;
  font-family: sans-serif;

  @media screen and (max-width: 1200px) {
   display: none;
  }

  span{
    text-decoration: underline;
  }
`

export const PhoneText = styled.div`
  color: var(--colors-site-mainTheme);
  @media screen and (max-width: 1100px) {
    display: none;
  }
`
export const HeaderLink = styled(Link)`
  color: var(--colors-site-white);
  margin-right: 20px;
  filter: drop-shadow(2px 2px 2px var(--colors-site-mainTheme));

  &.blue{
    color: var(--colors-site-mainTheme);
    filter: none;
  }

  
  @media screen and (max-width: 1100px) {
    &.large-only{
      display: none;
    }
    filter: none;
  }

`

export const NewsLink = styled.span`
  color: var(--colors-site-white);
  cursor: pointer;
  margin-right: 25px;
  filter: drop-shadow(2px 2px 2px var(--colors-site-mainTheme));

  &.blue{
    color: var(--colors-site-mainTheme);
    filter: none;
  }

  @media screen and (max-width: 1100px){
    color: var(--colors-site-mainTheme);
    filter: none;
  }
`

export const IconContainer = styled.div`
  margin-top: -5px;
  cursor: pointer;
`

export const CalendarIcon = styled.div`
  transition: all .4s;
  &.white{
    filter: invert(1%) sepia(0%) saturate(0%) hue-rotate(1deg) brightness(1000%) contrast(100%);
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const IconImage = styled.img`
  width: 40px;
  @media screen and (max-width: 1100px) {
    width: 30px;
  }
`

export const HamburgerIcon = styled.div`
  margin-left: 10px;
  font-size: 2em;
  color: var(--colors-site-mainTheme);
  z-index: 5;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`

export const LeftGroup = styled.div`
  margin-left: 175px;
  display: flex;

  &.inner {
    margin-left: 0px;
  }
`