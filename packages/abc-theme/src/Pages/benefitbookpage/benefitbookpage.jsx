import React, { useEffect } from "react";
import { connect } from "frontity";

import Page from "../../components/page/page.component";
import Login from "../../components/login/login.component";

import {
  LoggedOutWrapper,
  InnerWrapper,
  IframeDiv,
} from "./benefitbookpage.styles";

const BenefitBookPage = ({ state, actions }) => {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      state.theme.token = loggedInUser;
    } else {
      // console.log(state.theme.token);
    }
  }, []);

  return (
    <>
      {/* <Page /> */}
      <p>test</p>
      <div>HELLOOOOOOOOO</div>
      <IframeDiv>
        <iframe src="https://e.issuu.com/embed.html?backgroundColor=%2314315a&backgroundColorFullscreen=%2314315a&d=abc_business_discount_booklet_march_2023&hideIssuuLogo=true&u=associatedbuildersandcontractors"></iframe>
      </IframeDiv>
      {state.theme.token ? null : (
        <LoggedOutWrapper>
          <InnerWrapper>
            <Login />
          </InnerWrapper>
        </LoggedOutWrapper>
      )}
    </>
  );
};

export default connect(BenefitBookPage);

// allow="clipboard-write" sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms" allowfullscreen="true" style="position:absolute;border:none;width:100%;height:100%;left:0;right:0;top:0;bottom:0;"
