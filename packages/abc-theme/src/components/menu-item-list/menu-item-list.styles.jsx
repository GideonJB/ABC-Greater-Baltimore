import { styled } from "frontity"
import Link from "@frontity/components/link"

export const HoverWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  /* border-bottom: 2px solid var(--colors-site-mainTheme); */
  /* border-right: 2px solid var(--colors-site-mainTheme); */
  height: 100px;
  background-color: var(--colors-site-white);
  
  span{
    text-transform: uppercase;
    font-weight: 600;
    font-size: .8rem;
  }
  
  &.sub{
    background-color: var(--colors-site-mainTheme);
    padding-left: 10px;
    height: 80px;
    border: none;

  }
  &.member {
    border-bottom: none;
    
     
    &.active{
      /* background: linear-gradient(90deg, ${props => props.backgroundColor} 50%, ${props => props.activeBackgroundColor} 100%) */
      /* background-color: ${props => props.activeBackgroundColor}; */
      background-color: var(--colors-site-mainTheme);
      border-right: none;
    }
    
    a{
      /* color: red; */
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  &.background {
    
    &.active{
      /* background-color: ${props => props.activeBackgroundColor}; */
      background-color: var(--colors-site-mainTheme);
      border-right: none;
    }
    a{
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`
export const ListContainer = styled(Link)`
  /* transition: .5s all; */
  width: 100%;
  /* margin-left: 5px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  font-weight: 400;
  font-size: .8rem;
  font-family: "Poppins";
  cursor: pointer;

  &.sub{
    flex-direction: row;
  }

  &:hover{
    transform: scale(1.02);
  }

  &.inactive{
    background: green;
  }
  
  &.active{
    &:hover{
      transform: none;
    }
    color: var(--colors-site-white) !important;
    img{
      &.active{
        filter: invert(1%) sepia(0%) saturate(0%) hue-rotate(1deg) brightness(1000%) contrast(100%);
      }
    }
  }
  
`
export const MenuItem = styled.div`
  
  /* height: 40px; */
  
  &.sub {
    color: var(--colors-site-white) !important;
    font-size: 1rem;
  }
  
  &.active {
    -webkit-box-shadow: inset 1px 0px 2px 1px hsla(0, 0%, 0%, .75);
    box-shadow: inset 1px 0px 2px 1px hsla(0, 0%, 0%, .75);
    background-color: var(--colors-active);
  
    /* .menu-border{
      color: white;
    text-decoration: underline;
    text-decoration-color: red;
    text-underline-offset: .5em;
    
    } */
  }

  &:hover{
    
  }
`

export const IconContainer = styled.div`
  min-width: 25px;
  display: flex;
  justify-content: center;
  margin: 0px 5px 5px 0px;

`

export const SpecialDiv = styled.div`
  color: red;
`