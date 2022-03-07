import { connect } from 'frontity';
import React from 'react';
import Register from "../../components/register/register.component"

import { Wrapper, 
        Background,
        FormWrapper,
      } from "./registrationpage.styles"

const Registrationpage = ({ state, actions }) => {

  return (
    <Wrapper>
      <Background />
      <FormWrapper>
        <Register />   
      </FormWrapper>
    </Wrapper>
  );
}

export default connect(Registrationpage);