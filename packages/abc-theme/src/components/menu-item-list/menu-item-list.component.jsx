import React from 'react'
import { connect } from 'frontity'

import { MenuItem, IconContainer, ListContainer, HoverWrapper, SpecialDiv } from './menu-item-list.styles'

const MenuItemList = ({ state, menu, hoverEnter=null, hoverLeave=null, style="" }) => {
  //Takes in a menu object and returns a list of menu links
  //If the slug is included in the state activeMenu array,
  //MenuItem receives active class
  return(
    <>
      {Object.entries(menu).map(menu => {
        const items = menu[1]
        const {id, menuName, slug, link, icon, alticon, color, activecolor} = items;
        return(
          <HoverWrapper key={id} onMouseEnter={() => {
                          if (hoverEnter !== null) {
                            state.theme.hoverLink = link;
                            hoverEnter();
                          }
                        }}
                        onMouseLeave={hoverLeave}
                        className={Object.values(state.theme.activeMenu).includes(slug) ? `active ${style}` : `${style}`}
                        backgroundColor={color}
                        activeBackgroundColor={activecolor}
          >
            <ListContainer link={link} 
                            className={Object.values(state.theme.activeMenu).includes(slug) ? "active menu-border" : "menu-border"}
            >
            {icon || alticon ?
              <>
              {Object.values(state.theme.activeMenu).includes(slug) ?
                <IconContainer>
                  <img src={alticon} width="25px" alt="icon"/>
                </IconContainer>
              : 
                <IconContainer>
                  < img className="active" src={icon} width="25px" alt="icon"/>
                </IconContainer>
              }
              </>
            :
              null
            }          
            <MenuItem className={style !== "" ? `${style}` : ""}
              
              // key={id}
              >
                <span >
                  {menuName === "Daytime Trade School" ?
                  <SpecialDiv>{menuName}</SpecialDiv>
                  :
                  <>
                    {menuName}
                  </>
                  }
                </span>
            </MenuItem>
            </ListContainer>
          </HoverWrapper>
        )
      })}
      </>
  )
}

export default connect(MenuItemList);