import React, { useEffect } from "react"
import { connect } from "frontity"

import MenuItemList from "../menu-item-list/menu-item-list.component"

import { SubMenuWrapper, SubMenuLine, SubMenuItemWrapper } from "./submenu-item-list.styles"

const SubMenuItemList = ({ state, actions }) => {
  
  return ( 
   <>
    {state.theme.isSubMenuVisible && 
      Object.keys(state.theme.subMenuList).length !== 0
    ?
    <SubMenuWrapper className="open">
      <SubMenuItemWrapper>
        {/* <SubMenuLine /> */}
        <MenuItemList menu={state.theme.subMenuList} style="sub" />
      </SubMenuItemWrapper>
    </SubMenuWrapper>
    :
    null
    }
  </>
  )
};

export default connect(SubMenuItemList);