import React, { useEffect } from "react"
import { connect } from "frontity"
import { useCurrentWidth } from "../../utils/utility-functions"

import calIcon from "../../static/images/cal-icon.png"
import newsIcon from "../../static/images/bullhorn.png"
import logoImage from "../../static/images/abc-logo-new.png"

import LogoContainer from "../logo-container/logo-container.component"
import Login from "../login/login.component"
import { HeaderLinkContainer,
        HeaderWrapper,
        HamburgerIcon,
        LeftGroup,
        IconContainer,
        CalendarIcon,
        PhoneText,
        HeaderLink,
        NewsLink,
        Tagline,
        IconImage,
        Wrapper,
      } from "./header.styles"


const Header = ({ state, actions, color="", style="" }) => {

  

  // useEffect (() => {
  //   console.log("rendered")
  //   state.theme.intViewportWidth = window.innerWidth;
  // })

  const handleHamburger = () => {
    if (state.router.link !== "/") {
      state.theme.isHamburgerOpen = !state.theme.isHamburgerOpen
      // window.scrollTo(0,0);
    }

  }

  const handleClick = () => {
    // actions.theme.closeSubMenu(false)
    // actions.theme.setSubMenuLink("");
    const actives = Array.from(document.querySelectorAll('.active'));
    actives.forEach(node => {
      node.classList.remove('active');
    })
  }

  const loginPopUp = () => {
    state.theme.isLoginMenuVisible = !state.theme.isLoginMenuVisible
    state.theme.isCalendarOpen = false;
  }

  const handleLogout = () => {
    state.theme.token = false;
    localStorage.removeItem('user');
  }

  const toggleCalendar = () => {
    if (state.theme.isCalendarOpen === true) {
      actions.theme.toggleCalendar(false)
    }else { 
      actions.theme.toggleCalendar(true)
      actions.theme.toggleNews(false)
    if (state.router.link !== "/"){
      actions.theme.toggleHamburger(false)
    }

    }
  }

  const toggleNews = () => {
    if (state.theme.isNewsOpen === true) {
      actions.theme.toggleNews(false)
    } else {
      actions.theme.toggleNews(true)
      actions.theme.toggleCalendar(false)
      if (state.router.link !== "/") {
        actions.theme.toggleHamburger(false)
      }
    }
  }

  return(
    <Wrapper>
      <HeaderWrapper>
        {/* {state.theme.isLoginMenuVisible === true
          ?
          <Login />
          :
          null
        } */}
        <LeftGroup className={style === "inner" ? "inner" : ""}>
          {state.router.link !== "/"
          ?
            <HamburgerIcon onClick={() => handleHamburger()}>
              &#9776;
            </HamburgerIcon>
          :
            null
          }
          <LogoContainer link="/" source={logoImage} altText="ABC Logo"
                          widthValue="170px" screenType="desktop"
                          heightValue="auto" />
          <LogoContainer link="/" source={logoImage} altText="ABC Logo"
            widthValue="120px" screenType="mobile"
            heightValue="auto" />
        </LeftGroup>
        {/* <div>
          <Tagline>Your <strong>Success</strong> Is Our <strong>Mission</strong></Tagline>
        </div> */}
        <HeaderLinkContainer className={color}>
          {/* {state.theme.token
          ?
            <HeaderLink onClick={() => handleLogout()} link="/">Logout</HeaderLink>
          :
            <HeaderLink onClick={() => handleClick()} link="/login">Member Login</HeaderLink>
          }
          
          
          <HeaderLink className="large-only" onClick={() => handleClick()} link="/about-us">About Us</HeaderLink> */}
          
          
          {/* <PhoneText>410-821-0351</PhoneText> */}
          
          <NewsLink onClick={() => toggleNews()}>News</NewsLink>
          
          <IconContainer>
            <CalendarIcon className={color} onClick={() => toggleCalendar()}>
              <IconImage src={calIcon} alt="ABC Events Calendar"/>
            </CalendarIcon>
          </IconContainer>   
        </HeaderLinkContainer>
      </HeaderWrapper>
    </Wrapper>
  )
} ;

export default connect(Header);