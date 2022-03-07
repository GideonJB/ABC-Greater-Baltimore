import React, { useEffect } from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"

import { MenuItemContainer,
        SideHoverWrapper,
        Wrapper,
        CEALogoContainer,
        MemberMenuContainer
      } from "./side-menu.styles"

import logoImage from "../../assets/images/logo-square.png";
import ceaLogo from "../../assets/images/cea-logo.png"
import MenuItemList from "../menu-item-list/menu-item-list.component";
import SubmenuItemList from "../submenu-item-list/submenu-item-list-component";
import LogoContainer from "../logo-container/logo-container.component"

const SideMenu = ({ state, actions, style="" }) => {
  //the active menu is set in state to handle color changes
  //As well if a submenu is present it is set to a submenu list

  const route = state.router.link
  //Strip slashes from url to match slug
  const cleanRoute = state.router.link.replace(/^\/|\/$/g, '');

  //Get all the menu and membermenu object slugs in an array
  //HEY GIDEON MAKE THIS AN ACCESSIBLE STATE VARIABLE
  const mainEntries = Object.entries(state.menu.mainMenu).map(item => item[1].slug)
  const memberEntries = Object.entries(state.menu.memberMenu).map(item => item[1].slug)
  const cleanMenu = () => {
    return mainEntries.concat(memberEntries)
  }

  //Filter the menu to the current route menu object
  const currentMenu = (menuRoute) => {
    const currentMenuEntry = []
    Object.entries(state.menu).forEach((menu) => {
      Object.entries(menu[1]).forEach((item) => {
        if (item[1].link === menuRoute) {
          currentMenuEntry.push(item)
          return
        } else {
          Object.entries(item[1].submenu).forEach((sub) => {
            if (sub[1].link === menuRoute) {
              currentMenuEntry.push(sub)
              return
            }
          })
        }
      })
    })
    return currentMenuEntry
  }

  const subCreate = () => {
    const currentMenuObject = currentMenu(route)

    if (currentMenuObject.length > 0) {
      const mainEntry = currentMenuObject[0][1].main
      if (cleanMenu().includes(cleanRoute)) {
        actions.theme.createSubMenuList(currentMenuObject[0][1].submenu)
        actions.theme.setActiveMenu("main", cleanRoute)
        actions.theme.setActiveMenu("sub", "")
        document.documentElement.style.setProperty(
          '--colors-active',
          currentMenuObject[0][1].activecolor
        );
        document.documentElement.style.setProperty(
          '--colors-sub',
          currentMenuObject[0][1].subcolor
        );
      } else if (state.menu.mainMenu[mainEntry]) {
        actions.theme.createSubMenuList(state.menu.mainMenu[mainEntry].submenu)
        actions.theme.setActiveMenu("main", state.menu.mainMenu[mainEntry].slug)
        actions.theme.setActiveMenu("sub", cleanRoute)
        document.documentElement.style.setProperty(
          '--colors-active',
          state.menu.mainMenu[mainEntry].activecolor
        );
        document.documentElement.style.setProperty(
          '--colors-sub',
          state.menu.mainMenu[mainEntry].subcolor
        );

      } else if (state.menu.memberMenu[mainEntry]) {
        actions.theme.createSubMenuList(state.menu.memberMenu[mainEntry].submenu)
        document.documentElement.style.setProperty(
          '--colors-active',
          state.menu.memberMenu[mainEntry].activecolor
        );
        document.documentElement.style.setProperty(
          '--colors-sub',
          state.menu.memberMenu[mainEntry].subcolor
        );
        actions.theme.setActiveMenu("main", state.menu.memberMenu[mainEntry].slug)
        actions.theme.setActiveMenu("sub", cleanRoute)
      }
    } else {
      console.log("closing menu")
      actions.theme.setActiveMenu("main", "");
      actions.theme.setActiveMenu("sub", "");
      actions.theme.closeSubMenu(false);
    }
  }

  const mouseEnter = () => {
    if(state.router.link !== "/"){
      actions.theme.openSubMenu(true);
    }
    
    const currentMenuObject = currentMenu(state.theme.hoverLink)
    actions.theme.createSubMenuList(currentMenuObject[0][1].submenu)
    actions.theme.setActiveMenu("main", state.theme.hoverLink.replace(/^\/|\/$/g, ''))
    
    document.documentElement.style.setProperty(
      '--colors-active',
      currentMenuObject[0][1].activecolor
    );
    document.documentElement.style.setProperty(
      '--colors-sub',
      currentMenuObject[0][1].subcolor
    );
  }

  const mouseLeave = () => {
    if(!state.theme.menuList.includes(cleanRoute)){
      console.log("no sub")
      actions.theme.closeSubMenu(false);
    }
    subCreate()
  }

  useEffect (() => {
    if (state.theme.menuList.includes(cleanRoute)) {
      state.theme.isSubMenuVisible = true;
    }
    subCreate()
  }, [state.router.link])

  
  
  return (
    <SideHoverWrapper onMouseLeave={() => mouseLeave()}>
      <Wrapper>
        <MenuItemContainer className={style==="alt" ? "altborder" : ""}>
          {/* Non-MemberMenu */}
            {style === "alt" ?
            <MenuItemList menu={state.menu.mainMenu}
              style="alt background"
              hoverEnter={() => mouseEnter()}
            />
            :
            <MenuItemList menu={state.menu.mainMenu}
                          style="background" 
                          hoverEnter={() => mouseEnter()}            
            />
            }
        </MenuItemContainer>        
        {/* Member Menu */}
        <MemberMenuContainer>
          <MenuItemList menu={state.menu.memberMenu}
            style="member"
            hoverEnter={() => mouseEnter()}
          />
        </MemberMenuContainer>
      </Wrapper>
      {style === "alt" ?
      null
      :
      <SubmenuItemList menu={state.theme.SubmenuItemList} />
      }
    </SideHoverWrapper>
  )
}

export default connect(SideMenu);