import { styled } from "frontity";
import Link from "@frontity/components/link";

import apprenticeship from "../../static/images/apprenticeship.jpg";
import events from "../../static/images/events.jpg";
import membership from "../../static/images/membership.jpg";
import political from "../../static/images/political.jpg";
import safety from "../../static/images/safety.jpg";
import building from "../../static/images/building.jpg";
import membersonly from "../../static/images/members-only.jpg";
import aluminum from "../../static/images/2.jpg";

import apprenticeshipmobile from "../../static/images/apprenticeship_mobile.jpg";
import eventsmobile from "../../static/images/events_mobile.jpg";
import membershipmobile from "../../static/images/membership_mobile.jpg";
import politicalmobile from "../../static/images/political_mobile.jpg";
import safetymobile from "../../static/images/safety_mobile.jpg";
import membersonlymobile from "../../static/images/membersonly_mobile.jpg";

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

  &:hover{
      opacity: 100%;
      pointer-events: auto;
    }

  @media (any-hover: hover){
    &:hover{
      opacity: 100%;
      pointer-events: auto;
    }
  }  

  @media (hover: none){
    pointer-events: auto;
  }

  @media screen and (max-width: 1100px){
    display: block;
    overflow: auto;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  /* background-image: url(${aluminum}); */
  background-position: 50% 100vh;
  background-size: cover;
  background-repeat: none;

  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

export const SplashTitleContainer = styled.div`
  position: absolute;
  height: 60px;
  top: 30%;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    #000000dc 100%
  );
`;

export const SplashTitle = styled.h1`
  color: white;
  font-size: 3em;
  line-height: 1;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
`;

export const GridWrapper = styled.div`
  padding: 15px;
  padding-top: 5px;
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 1100px) {
    display: block;
    padding: 0px;
  }
`;

export const Column = styled.div`
  width: calc((100vw) / 5);
  height: calc(100vh - 100px);
  overflow: visible;
  transition: 0.5s all;
  /* margin-top: 100px; */

  @media screen and (max-width: 1100px) {
    width: 100vw;
    height: calc(var(--screen-height) / 4.5);
    margin-top: 0px;

    &.expanded {
      height: 500px;
      pointer-events: none;
      touch-action: none;

      &.large {
      }
    }
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.5s all;
  overflow: hidden;
  /* pointer-events: none; */

  @media (any-hover: hover) {
    &:hover {
      div {
        transition-delay: 10ms;
        visibility: visible;
        opacity: 100%;
        pointer-events: auto;
      }
      h1 {
        margin-left: calc((100vw) / 5 + 40px);
      }
      .grow {
        /* background-size: 112% */
        transform: scale(1.02);
      }
    }
  }

  &.bordered {
    border-right: 5px solid white;
  }

  /* @media screen and (max-width: 1200px){
    &.expanded{
      pointer-events: auto;
      
      div{
        margin-top: 0px;
        visibility: visible;
        opacity: 100%;
        pointer-events: auto;
      }
       .grow{
        transform: scale(1.02);
      }
       h1{
        margin-left: calc((100vw) / 5 + 50px);
      }
    }
  } */

  @media screen and (max-width: 1100px) {
    &.expanded {
      pointer-events: auto;

      div {
        transition: 0.45s all;
        visibility: visible;
        opacity: 100%;
        pointer-events: auto;
        /* height: 400px !important; */
      }
      .grow {
        /* background-size: 112% */
        transform-origin: top right;
        transform: scale(1.42);
      }
      h1 {
        margin-left: 5px;
        bottom: -20%;
      }
      div > img {
      }
    }
  }
`;
export const GradientDiv = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0) 70%,
    #000000ab 100%
  );

  @media screen and (max-width: 1100px) {
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 75%,
      #000000ab 100%
    );
  }
`;
export const ItemTitle = styled(Link)`
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
  color: white;
  line-height: 1.2;
  display: inline-block;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 1100px) {
    font-size: 1.4em;
  }
`;

export const ItemList = styled.div`
  width: 100%;
  padding-top: 10px;
  font-size: 1em;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1100px) {
    font-size: 1.2em;
  }
`;

export const ListGroup = styled.div`
  @media screen and (max-width: 1100px) {
    display: flex;
  }
`;

const backgroundStyles = `
  transition: .5s all;
  height: var(--screen-height);
  pointer-events: none;
  touch-events: none;
  overflow: hidden;

`;

export const MembershipBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${membership});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px) {
    background-image: url(${membershipmobile});
    height: 500px;
  }
`;
export const MembershipItemsContainer = styled.div`
  overflow: hidden;
  background: var(--colors-membership-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px) {
    height: 500px;
  }
`;

export const ApprenticeshipBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${apprenticeship});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px) {
    background-image: url(${apprenticeshipmobile});
    height: 500px;
  }
`;
export const ApprenticeshipItemsContainer = styled.div`
  overflow: hidden;
  background: var(--colors-apprenticeship-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px) {
    height: 500px;
  }
`;

export const SafetyBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${safety});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px) {
    background-image: url(${safetymobile});
    background-position: top right;
    height: 500px;
    margin-top: -80px;
  }
`;

export const SafetyItemsContainer = styled.div`
  overflow: hidden;
  background: var(--colors-safety-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px) {
    height: 500px;
  }
`;

export const EventsBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${events});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px) {
    background-image: url(${eventsmobile});
    background-position: top right;
    height: 500px;
    margin-top: -50px;
  }
`;

export const EventsItemsContainer = styled.div`
  overflow: hidden;
  background-color: var(--colors-events-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px) {
    height: 500px;
  }
`;

export const ManagementBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${apprenticeship});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px) {
    background-image: url(${apprenticeshipmobile});
    background-position: top right;
    height: 500px;
  }
`;

export const ManagementItemsContainer = styled.div`
  overflow: hidden;
  background-color: var(--colors-management-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px) {
    height: 500px;
  }
`;

export const PoliticalBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${political});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px) {
    background-image: url(${politicalmobile});
    background-position: top right;
    height: 500px;
    margin-top: -100px;
  }
`;

export const PoliticalItemsContainer = styled.div`
  overflow: hidden;
  background-color: var(--colors-political-overlay);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px) {
    height: 500px;
  }
`;

export const MembersBackground = styled.div`
  ${backgroundStyles};
  background-image: url(${membersonly});
  background-size: cover;
  background-position: top right;

  @media screen and (max-width: 1100px) {
    background-image: url(${membersonlymobile});
    background-position: top right;
    height: 500px;
  }
`;

export const MembersItemsContainer = styled.div`
  overflow: hidden;
  background-color: var(--colors-menuGold);
  ${itemContainerStyles}

  @media screen and (max-width: 1100px) {
    height: 500px;
  }
`;

export const CardHeading = styled.h1`
  transition: 0.3s all;
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

  &::before,
  &::after {
    display: none;
  }

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 1400px) {
    font-size: 2em;
  }

  @media screen and (max-width: 1100px) {
    bottom: 3%;
    transform: rotate(0deg);
    margin-left: 5px;
  }
`;
export const ListItem = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  display: inline-block;

  &:hover {
    transform: scale(1.02);
  }
`;
export const HorizontalLine = styled.hr`
  width: 90px;
  border-width: 0;
  height: 1px;
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const GrowContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

export const Break = styled.br`
  @media screen and (max-width: 670px) {
    display: none;
  }
`;
export const MobileBreak = styled.br`
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const EventListItem = styled.li`
  color: red;
  margin-bottom: 10px;
  list-style: none;

  &:hover {
    /* border-left: 3px solid red; */
    padding-left: 5px;
    font-weight: bold;
  }
`;

export const DescriptionContainer = styled.div`
  background-color: var(--colors-site-white);
  min-height: 200px;
  padding: 30px 0px 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.h4`
  color: var(--colors-site-mainTheme);
  font-weight: 400;
  padding: 20px 40px;
  text-align: center;
  margin: 0 auto;
`;

export const UpcomingContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 27%;
  height: 60px;
  background-color: var(--colors-site-darkGray);
  text-align: center;
  /* background-image:
    linear-gradient(45deg, transparent 85%, var(--colors-site-white) 0),
    linear-gradient(135deg, transparent 85%, var(--colors-site-white) 0); */
  clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0 100%, 0 0);
  z-index: 2;

  &:before {
    content: "";
    background-color: red;
    /* background-image:
    linear-gradient(135deg, transparent 85%, var(--colors-site-white) 0),
    linear-gradient(45deg, red 85%, transparent 0); */
    position: absolute;
    width: calc(100% + 30px);
    height: 100%;
    right: -5px;
    top: 0;
    bottom: 0;
    z-index: -5;
    /* mix-blend-mode: darken; */
    clip-path: polygon(88% 0, 95% 0%, 100% 50%, 95% 100%, 88% 100%, 93% 50%);
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Rule = styled.hr`
  border: 1px solid var(--colors-site-mainTheme);
  margin: 0px;

  &.red {
    border: 1px solid red;
  }

  &.short {
    width: 25%;
    margin-top: 10px;
  }
`;

export const EventListDate = styled.span`
  font-size: 1.1em;
`;

export const QuoteContainer = styled.div`
  height: auto;
  /* min-height: 600px; */
  background-image: url(${building});
  background-position: 50% 90%;
`;

export const QuoteBlurContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
  backdrop-filter: blur(20px);
`;

export const InfoWrapper = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    padding-top: 80px;
    margin-bottom: 10px;
  }
`;

export const InfographicContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  img {
    padding: 20px;
  }
`;

export const InfoColumnLeft = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h2 {
    text-align: center;
  }
`;

export const InfoColumnRight = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const LinkBar = styled.div`
  height: 75px;
  width: calc(100vw - 30px);
  margin: 5px 0px 0px 15px;
  background-color: var(--colors-site-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 50px;
  font-size: 1.2em;
  color: var(--colors-site-mainTheme);

  @media screen and (max-width: 1100px) {
    display: none;
  }

  span {
    cursor: pointer;
    font-weight: 600;
  }
`;

export const LinkBarLink = styled(Link)`
  color: var(--colors-site-mainTheme);
  font-weight: 600;
`;

export const IconContainer = styled.div`
  margin-top: -5px;
  cursor: pointer;
`;

export const CalendarIcon = styled.div`
  transition: all 0.4s;
  &.white {
    filter: invert(1%) sepia(0%) saturate(0%) hue-rotate(1deg) brightness(1000%)
      contrast(100%);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const IconImage = styled.img`
  width: 40px;
  @media screen and (max-width: 1100px) {
    width: 30px;
  }
`;

export const RightLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
  min-width: 500px;
`;
