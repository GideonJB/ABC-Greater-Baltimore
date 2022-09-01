import React, { useEffect } from 'react';
import { connect } from 'frontity'

import Page from '../../components/page/page.component';
import Login from '../../components/login/login.component';

import { resumeFetch } from '../../utils/events-fetch';

import { LoggedOutWrapper, InnerWrapper } from "./resumepage.styles";

const ResumePage = ({ state, actions }) => {

  useEffect(() => {

    console.log('RESUMES', resumeFetch());

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      state.theme.token = loggedInUser;
    } else{
      // console.log(state.theme.token);
    }
  }, []);

  return (
    <>
      <div>
        <h1>
          TESTING
        </h1>
      </div>
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

export default connect(ResumePage);