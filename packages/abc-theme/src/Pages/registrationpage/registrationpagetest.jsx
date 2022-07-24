import { connect } from 'frontity';
import React from 'react';
import Register from "../../components/register/register.component"
import CustomButton from '../../components/custom-button/custom-button.component'

import { Wrapper, 
        FormWrapper,
      } from "./registrationpage.styles"

const RegistrationPageTest = ({ state, actions }) => {

  const handleTest = () => {
    console.log(process.env.REACT_APP_TEST_VARIABLE)
  }

  return (
    <Wrapper>
      <FormWrapper>
        <Register />
      </FormWrapper>
      <FormWrapper>
        <CustomButton onClick={handleTest}>TEST BUTTON</CustomButton>
      </FormWrapper>
    </Wrapper>
  );
}

export default connect(RegistrationPageTest);