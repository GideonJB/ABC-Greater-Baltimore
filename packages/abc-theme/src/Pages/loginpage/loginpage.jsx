import { connect } from 'frontity';
import React from 'react';

import Login from '../../components/login/login.component';
import { ImageWrapper, Wrapper, LoginWrapper } from './loginpage.styles';

const LoginPage = ({ state, actions }) => {

  return (
    <Wrapper>
      <ImageWrapper />
      <LoginWrapper>
        <Login />
      </LoginWrapper>
    </Wrapper>
  );
}

export default connect(LoginPage);

// {
//   "somebodys-name": "Marian Kenney",
//     "any-email": "marian2210@geocities.com",
//       "before-space-age": "1922-03-11",
//         "optional-message": "",
//           "fake-terms": "1"
// }