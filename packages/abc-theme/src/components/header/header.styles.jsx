import { styled, keyframes } from "frontity"
import Link from "@frontity/components/link"

const fade = keyframes`
  0% { opacity: 1 }
  45% { opacity: 0 }
  55% { opacity: 0 }
  100% { opacity: 1 }
`

const prismcycle = keyframes`
  0%{
    transform: rotateX(0deg); 
  }
  28.5714%{
    transform: rotateX(0deg);
  }
  33.3333%{
    transform: rotateX(120deg);
  }
  61.9047%{
    transform: rotateX(120deg);
  }
  66.6666%{
    transform: rotateX(240deg);
  }
  95.238%{
    transform: rotateX(240deg);
  }
  100%{
    transform: rotateX(360deg);
  }
`

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
  align-items: flex-end;
  top: 20px;
  right: 25px;
  /* z-index: 5; */
  height: 100%;
  width: 100%;
  padding-bottom: 10px;
 

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
  align-items: flex-end;
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

export const PrismContainer = styled.div`
  width: 500px;
  height: 50px;
  position: relative;
  perspective: 1000px;
  margin: 0 auto;
`

export const Prism = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: ${prismcycle} 9s ease-in-out infinite;
`

export const Tagline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 495px;
  height: 45px;
  text-align: center;
  line-height: 1;
  font-size: 2.3em;
  background: var(--colors-site-white);
  /* margin-top: 40px; */
  /* line-height: 1; */
  font-family: sans-serif;
  /* animation: ${fade} 6s ease-in-out infinite;
  animation-delay: 3.5s; */

  &.side-one{
    transform: rotateX(0deg) translateZ(14px);
  }

  &.side-two{
    transform: rotateX(120deg) translateZ(14px);
  }

  &.side-three{
    transform: rotateX(240deg) translateZ(14px);
  }
  

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
  line-height: 1;
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
  line-height: 1;
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