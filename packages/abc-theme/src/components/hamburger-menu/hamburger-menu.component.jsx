import React, { useEffect, useRef } from "react"
import { connect } from "frontity"

import MenuItemList from "../menu-item-list/menu-item-list.component";
import SplashPage from "../../Pages/splashpage/splashpage"

import { Wrapper,
        MenuContainer,
        } from "./hamburger-menu.styles"

const HamburgerMenu = ({ state, actions }) => {

  const scrollPos = useRef(0);

  useEffect( () => {
    // scrollPos.current.scrollTop;
  }, [])

  return (
    <>
      <Wrapper className={state.theme.isHamburgerOpen && state.router.link !== "/" ? "open" : ""}>
        <MenuContainer>
          <SplashPage />
        </MenuContainer>
      </Wrapper>
    </>
  )
}

export default connect(HamburgerMenu);