import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { useCurrentWidth } from "../../utils/utility-functions";

import { youTubeFetch } from "../../utils/events-fetch";

import calIcon from "../../static/images/cal-icon.png";
import newsIcon from "../../static/images/bullhorn.png";
import logoImage from "../../static/images/abc_logo.svg";
import logoImageWhite from "../../static/images/abc_logo_white.svg";
import galaimage from "../../static/images/gala_logo_date.png";

import LogoContainer from "../logo-container/logo-container.component";
import Login from "../login/login.component";
import {
  CalendarIcon,
  GalaContainer,
  HeaderLink,
  HeaderLinkContainer,
  HeaderWrapper,
  HamburgerIcon,
  IconContainer,
  IconImage,
  LeftGroup,
  NewsLink,
  PhoneText,
  Tagline,
  PrismContainer,
  Prism,
  Wrapper,
} from "./header.styles";

const Header = ({ state, actions, color = "", style = "" }) => {
  // const [current, setCurrent] = useState(1);
  // const [tagline, setTagline] = useState("Connect to Opportunity");
  // const time = 6000;
  // const taglineArray = ["Connect to Opportunity", "Protect Your Interests", "Gain a Competetive Edge"];

  // console.log(style, {style});

  // useEffect (() => {
  //   const next = (current + 1) % taglineArray.length;
  //   const id = setTimeout(() => {
  //       setCurrent(next)
  //       setTagline(taglineArray[current])
  //   }, time);
  //   return () => clearTimeout(id);
  // }, [current]);

  const handleHamburger = () => {
    if (state.router.link !== "/") {
      state.theme.isHamburgerOpen = !state.theme.isHamburgerOpen;
      // window.scrollTo(0,0);
    }
  };

  const handleClick = () => {
    // actions.theme.closeSubMenu(false)
    // actions.theme.setSubMenuLink("");
    const actives = Array.from(document.querySelectorAll(".active"));
    actives.forEach((node) => {
      node.classList.remove("active");
    });
  };

  const loginPopUp = () => {
    state.theme.isLoginMenuVisible = !state.theme.isLoginMenuVisible;
    state.theme.isCalendarOpen = false;
  };

  const handleLogout = () => {
    state.theme.token = false;
    localStorage.removeItem("user");
  };

  const toggleCalendar = () => {
    if (state.theme.isCalendarOpen === true) {
      actions.theme.toggleCalendar(false);
    } else {
      actions.theme.toggleCalendar(true);
      actions.theme.toggleNews(false);
      if (state.router.link !== "/") {
        actions.theme.toggleHamburger(false);
      }
    }
  };

  const toggleNews = () => {
    if (state.theme.youTubePosts !== null) {
      // console.log("no fetch needed")
    } else {
      // console.log("fetching youtube")
      youTubeFetch().then((res) => actions.theme.setYouTubePosts(res));
    }
    if (state.theme.isNewsOpen === true) {
      actions.theme.toggleNews(false);
    } else {
      actions.theme.toggleNews(true);
      actions.theme.toggleCalendar(false);
      if (state.router.link !== "/") {
        actions.theme.toggleHamburger(false);
      }
    }
  };

  return (
    <Wrapper className={style === "alt" ? "alt" : ""}>
      <HeaderWrapper>
        <LeftGroup className={style === "inner" ? "inner" : "inner"}>
          {state.router.link !== "/" ? (
            <HamburgerIcon onClick={() => handleHamburger()}>
              &#9776;
            </HamburgerIcon>
          ) : null}
          <LogoContainer
            link="/"
            source={logoImage}
            altText="ABC Logo"
            widthValue={style === "alt" ? "220px" : "150px"}
            screenType="desktop"
            heightValue="auto"
          />
          <LogoContainer
            link="/"
            source={style === "alt" ? logoImageWhite : logoImage}
            altText="ABC Logo"
            widthValue="120px"
            screenType="mobile"
            heightValue="auto"
          />
        </LeftGroup>
        <HeaderLinkContainer className={style === "alt" ? "alt" : color}>
          <HeaderLink
            className={style === "inner" ? "inner" : ""}
            onClick={() => handleClick()}
            link="/about-us"
          >
            ABOUT US
          </HeaderLink>
          <NewsLink
            onClick={() => toggleNews()}
            className={style === "inner" ? "inner large-only" : "large-only"}
          >
            MEDIA
          </NewsLink>
          <IconContainer>
            <CalendarIcon className={color} onClick={() => toggleCalendar()}>
              <IconImage src={calIcon} alt="ABC Events Calendar" />
            </CalendarIcon>
          </IconContainer>
        </HeaderLinkContainer>
      </HeaderWrapper>
      {/* {state.router.link === "/" ? (
        <a href="https://secure.abcbaltimore.org/buildbaltimoregala/">
          <GalaContainer>
            <LogoContainer
              link="https://secure.abcbaltimore.org/buildbaltimoregala/"
              source={galaimage}
              altText="ABC Logo"
              widthValue="180px"
              screenType="mobile"
              heightValue="auto"
            />
            <p>&nbsp;</p>
            <h4>Parking Instructions</h4>
          </GalaContainer>
        </a>
      ) : null} */}
    </Wrapper>
  );
};

export default connect(Header);
