import { keyframes, styled } from "frontity"
import Link from "@frontity/components/link"

import apprenticeship from "../../static/images/apprenticeship.jpg"
import events from "../../static/images/events.jpg"
import management from "../../static/images/management.jpg"
import membership from "../../static/images/membership.jpg"
import political from "../../static/images/political.jpg"
import safety from "../../static/images/safety.jpg"
import building from "../../static/images/building.jpg"
import membersonly from "../../static/images/members-only.jpg"

import apprenticeshipmobile from "../../static/images/apprenticeship_mobile.jpg"
import eventsmobile from "../../static/images/events_mobile.jpg"
import managementmobile from "../../static/images/management_mobile.jpg"
import membershipmobile from "../../static/images/membership_mobile.jpg"
import politicalmobile from "../../static/images/political_mobile.jpg"
import safetymobile from "../../static/images/safety_mobile.jpg"
import membersonlymobile from "../../static/images/membersonly_mobile.jpg"

import { fullFrameDiv } from "../../styles/global-variables.styles"

const itemContainerStyles = `
  transition: .5s all;
  transition-delay: 10ms;
  opacity: 0;
  visibility: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--colors-menuOverlay);
  background-image:  var(--gradient-lightRight);
  overflow: hidden;
  pointer-events: none;
  // z-index: 2;

  @media (hover: hover){
    &:hover{
      opacity: 100%;
      pointer-events: auto;
    }
  }

  // @media screen and (max-width: 1200px){
  //   opacity: 100%;
  // }
  

  @media screen and (max-width: 1100px){
    display: block;
    overflow: auto;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  

 @media screen and (max-width: 1100px){
   display: block;
 }
`

export const SplashTitleContainer = styled.div`
  position: absolute;
  height: 60px;
  top: 30%;
  width: 100%;
  background-image:  linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000000dc 100%);
`

export const SplashTitle = styled.h1`
  color: white;
  font-size: 3em;
  line-height: 1;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
`

export const GridWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 1100px){
    display: block;
  }
  
`

export const Column = styled.div`
  width: calc((100vw) /5);
  height: calc(100vh - 100px);
  overflow: visible;
  transition: .5s all;
  margin-top: 100px;

  @media screen and (max-width: 1200px){
    &.expanded{
      
    }
  }
  

  @media screen and (max-width: 1100px){
    width: 100vw;
    height: calc(var(--screen-height)/4.5);
    margin-top: 0px;

    &.expanded {
      height: 500px;
      pointer-events: none;
      touch-action: none;
    }
  }

`

// export const Row = styled.div`
//   width: 40vw;
//   height: 10vw;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;

//   &:not(:first-of-type){
//     margin-top: 15px;
//   }

//   @media screen and (max-width: 670px){
//     flex-direction: column;
//   }

// `

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: .5s all;
  overflow: hidden;

  @media (hover: hover){
    &:hover{
      div {
        transition-delay: 10ms;
        visibility: visible;
        opacity: 100%;
        pointer-events: auto;
      }
      h1{
        margin-left: calc((100vw) / 5 + 20px);
      }
      .grow{
        /* background-size: 112% */
        transform: scale(1.02);
      }
    }
  }
  
  
  &.bordered{
    border-right: 5px solid white;
  }

  @media screen and (max-width: 1200px){
    &.expanded{
      div{
        margin-top: 0px;
        visibility: visible;
        opacity: 100%;
        pointer-events: auto;
      }
       .grow{
        /* background-size: 112% */
        transform: scale(1.02);
      }
       h1{
        margin-left: calc((100vw) / 5 + 50px);
      }
    }
  }

  @media screen and (max-width: 1100px){

    &.expanded{
      div{
        transition: .45s all;
        visibility: visible;
        opacity: 100%;
        pointer-events: auto;
        /* height: 400px !important; */
      }
        .grow{
        /* background-size: 112% */
        transform-origin: top right;
        transform: scale(1.42);
      }
      h1{
        margin-left: 5px;
        bottom: -20%;
      }
      div > img{
        
      }
     
    }
  }
`
export const GradientDiv = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:  linear-gradient(to right, hsla(0,0%,0%,0) 70%, #000000ab 100%);

  @media screen and (max-width: 1100px){
    background-image:  linear-gradient(to bottom, hsla(0,0%,0%,0) 75%, #000000ab 100%);
  }
`
export const ItemTitle = styled(Link)`
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
  color: white;
  line-height: 1.2;
  display: inline-block;
  

  &:hover{
      transform: scale(1.02);   
  }

  @media screen and (max-width: 1200px){
    font-size: 1.2em;
  }

  @media screen and (max-width: 1100px){
    font-size: 1.4em;
  }
`

export const ItemList = styled.div`
  width: 100%;
  padding-top: 10px;
  font-size: 1.2em;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1200px){
    font-size: .8em;
  }

  @media screen and (max-width: 1100px){
    font-size: 1.2em;
  }
  
`

export const ListGroup = styled.div`
  @media screen and (max-width: 1100px){
    display: flex;
  }
`

const backgroundStyles = `
  transition: .5s all;
  height: var(--screen-height);
  pointer-events: none;
  touch-events: none;
  overflow: hidden;

`

export const MembershipBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${membership});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px){
    background-image: url(${membershipmobile});
    height: 500px;
  }
`
export const MembershipItemsContainer = styled.div`
  overflow: hidden;
  background: var(--colors-membership-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px){
    height: 500px;
  }
`

export const ApprenticeshipBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${apprenticeship});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px){
    background-image: url(${apprenticeshipmobile});
    height: 500px;
  }
  
`
export const ApprenticeshipItemsContainer = styled.div`
  overflow: hidden;
  background: var(--colors-apprenticeship-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px){
    height: 500px;
  }
`

export const SafetyBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${safety});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px){
    background-image: url(${safetymobile});
    background-position: top right;
    height: 500px;
    margin-top: -80px;
  }
  
`

export const SafetyItemsContainer = styled.div`
  overflow: hidden;
  background: var(--colors-safety-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px){
    height: 500px;
  }
`

export const EventsBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${events});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px){
    background-image: url(${eventsmobile});
    background-position: top right;
    height: 500px;
    margin-top: -50px;
  }
  
`

export const EventsItemsContainer = styled.div`
  overflow: hidden;
  background-color: var(--colors-events-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px){
    height: 500px;
  }
`

export const ManagementBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${apprenticeship});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px){
    background-image: url(${apprenticeshipmobile});
    background-position: top right;
    height: 500px;
    
  }
  
`

export const ManagementItemsContainer = styled.div`
  overflow: hidden;
  background-color: var(--colors-management-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px){
    height: 500px;
  }
`

export const PoliticalBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${political});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px){
    background-image: url(${politicalmobile});
    background-position: top right;
    height: 500px;
    margin-top: -100px;
  }
  
`

export const PoliticalItemsContainer = styled.div`
  overflow: hidden;
  background-color: var(--colors-political-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px){
    height: 500px;
  }
`

export const MembersBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${membersonly});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px){
    background-image: url(${membersonlymobile});
    background-position: top right;
    height: 500px;
  }
  
`

export const MembersItemsContainer = styled.div`
  overflow: hidden;
  background-color: var(--colors-menuGold);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px){
    height: 500px;
  }
`


export const CardHeading = styled.h1`
  transition: .3s all;
  font-size: 2.8em;
  position: absolute;
  bottom: 5%;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 6px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  transform-origin: bottom left;
  transform: rotate(-90deg);
  white-space: nowrap;
  margin-left: calc((100vw - 90px) / 5);
  margin-bottom: 0px;

  &::before, &::after{
    display: none;
  }
  
  
  a{
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 1400px){
    font-size: 2em;
  }

  @media screen and (max-width: 1100px){
    bottom: 3%;
    transform: rotate(0deg);
    margin-left: 5px;
    
  }
  
`
export const ListItem = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  display: inline-block;

  &:hover{
    transform: scale(1.02);
  }
  
  
`
export const HorizontalLine = styled.hr`
  width: 90px;
  border-width: 0;
  height: 1px;
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Overlay = styled.svg`
  pointer-events: none;
  mix-blend-mode: overlay;
  position: absolute;
  bottom: -250px;
  left: -50;
  opacity: .25;
  /* animation: ${rotate} 500s; */
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

export const GrowContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`

export const Break = styled.br`
  @media screen and (max-width: 670px){
    display: none;
  }
`
export const MobileBreak = styled.br`
  @media screen and (min-width: 1000px){
    display: none;
  }
`

export const MobileColumn = styled.div`
  position: absolute;
  /* top: 50px; */
  height: var(--screen-height-mobile);
  width: 100vw;
  background-image: url(${building});
  background-position: center bottom;
  overflow: auto;
  transition: .8s all;
  visibility: hidden;
  opacity: 0%;
  z-index: 2;

  &.visible{
    visibility: visible;
    opacity: 100%;
  }

  @media screen and (min-width: 1000px){
    display: none;
  }
`

export const MobileColumnA = styled.div`
  height: 100vh;
`

export const EventListItem = styled.li`
  color: red;
  margin-bottom: 5px;
`

export const DescriptionContainer = styled.div`
  background-color: var(--colors-site-darkGray);
  min-height: 100px;
  margin-bottom: 20px;
`

export const Description = styled.h4`
  color: var(--colors-site-white);
  font-weight: 400;
  padding: 20px 40px;
  text-align: center;
  margin: 0 auto;
`

export const TaglineContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: var(--colors-site-white);
  margin-bottom: 30px;
`

export const UpcomingContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 30%;
  height: 60px;
  background-color: var(--colors-site-darkGray);
  text-align: center;
  background-image:
    linear-gradient(45deg, transparent 85%, var(--colors-site-white) 0),
    linear-gradient(135deg, transparent 85%, var(--colors-site-white) 0);
  z-index: 2;
  
  &:after {
    content: "";
    background-image:
    linear-gradient(135deg, transparent 85%, var(--colors-site-white) 0),
    linear-gradient(45deg, red 85%, transparent 0);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 30px;
    top: 0;
    bottom: 0;
    z-index: -5;
    mix-blend-mode: darken;
  }

`

export const UpcomingTagline = styled.h2`
  font-size: 2.3em;
  margin: 0 auto;
  text-transform: uppercase;
  color: var(--colors-site-white);

  @media screen and (max-width: 1300px){
    font-size: 1.8em !important;
  }
`

export const TagFlex = styled.div`
  width: 65%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`

export const Tagline = styled.div`
  /* text-transform: uppercase; */
  color: var(--colors-site-mainTheme);
  font-size: 1.4em;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
`

export const TrainingWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 70px;
`

export const TrainingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const TrainingColumn = styled.div`
  margin-right: 20px;
  width: 33%;
  background-color: hsl(0, 0%, 92%);
  padding: 15px;
  text-align: center;
  h4 > a{
    color: red;
  }
`

export const ListMap = styled.ul`
  height: 100%;
  padding-inline-start: 15px;
  text-align: left;
  a{
    color: var(--colors-site-mainTheme);
    cursor: pointer;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`

export const Rule = styled.hr`
  border: 1px solid var(--colors-site-mainTheme);
`

export const Banner = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 15px;
`

export const ListContainer = styled.div`
  height: auto;
  padding: 15px;
`

export const EventListDate = styled.span`
  font-size: 1.1em;
`

export const TitleContainer =styled.div`
  display: flex;
  align-items: center;

  h4{
    font-size: 1.8em;
    color: var(--colors-site-mainTheme);
  }
`