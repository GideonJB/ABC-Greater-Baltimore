import React, { useEffect } from 'react';
import { connect } from 'frontity'

import Page from '../../components/page/page.component';
import Login from '../../components/login/login.component';

import { LoggedOutWrapper, InnerWrapper } from "./virtualhrpage.styles";

const VirtualHRPage = ({ state, actions }) => {

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      state.theme.token = loggedInUser;
    } else{
      // console.log(state.theme.token);
    }
  }, []);

  return (
    <>
      <Page />
      { state.theme.token ?
        null
        :
        <LoggedOutWrapper>
          <InnerWrapper>
            <Login />
          </InnerWrapper>
        </LoggedOutWrapper>
      }
    </>  
  )

}

export default connect(VirtualHRPage);