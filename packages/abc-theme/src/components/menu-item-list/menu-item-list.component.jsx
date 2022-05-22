import React from 'react'
import { connect } from 'frontity'

import { MenuItem, IconContainer, ListContainer, HoverWrapper, SpecialDiv } from './menu-item-list.styles'

const MenuItemList = ({ state, menu, hoverEnter=null, hoverLeave=null, style="" }) => {
  //Takes in a menu object and returns a list of menu links
  //If the slug is included in the state activeMenu array,
  //MenuItem receives active class

  const handleLogout = () => {
    state.theme.token = false;
    localStorage.removeItem('user');
  }

  const MenuNameSwitch = (menuSwitch="") => {
    const name = menuSwitch.menuSwitch;
    switch (name) {
      case "Daytime Trade School":
        return (
          <span>
            <SpecialDiv>{name}</SpecialDiv>
          </span>
        )
      case "Login":
        return (
          <span>
            {state.theme.token ?
              <div onClick={() => handleLogout() }>
                Logout
              </div>
            :
              <>
                Member Login
              </>
            }
          </span>
        )
      default :
        return (
          <span>{name}</span>  
        )
    }
  }
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
            <ListContainer
              onClick={menuName === "Login" && state.theme.token ? (()=> handleLogout()) : null }
              link={menuName === "Login" && state.theme. token ? "#" : `${link}`} 
              className={Object.values(state.theme.activeMenu).includes(slug) ? `active menu-border ${style}` : `menu-border ${style}`}
            >
            {icon || alticon ?
              <>
              {Object.values(state.theme.activeMenu).includes(slug) ?
                <IconContainer>
                  <img src={alticon} width="30px" alt="icon"/>
                </IconContainer>
              : 
                <IconContainer>
                  < img className="active" src={icon} width="30px" alt="icon"/>
                </IconContainer>
              }
              </>
            :
              null
            }          
            <MenuItem className={style !== "" ? `${style}` : ""}>
              <MenuNameSwitch menuSwitch={menuName}/>
            </MenuItem>
            </ListContainer>
          </HoverWrapper>
        )
      })}
      </>
  )
}

export default connect(MenuItemList);