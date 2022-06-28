import React, { useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link"

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { LoginContainer, ErrorMessage, ForgottenButton, SuccessMessage, } from "./register.styles";

const Register = ({state, actions}) => {

  const [forgotten, setForgotten] = useState(false);
  const [recovered, setRecovered] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async event => {
    event.preventDefault();
    await actions.theme.registerUser()
    if (state.theme.registrationSuccess === false) {

    } else {
      state.theme.userEmail = "";
      state.theme.userName = "";
      state.theme.userPass = "";
    }
  }

  const handlePassword = () => {
    setForgotten(true)
  }

  const handleForgottenPassword = async () => {
    const passwordUrl = `${state.source.api}/wp/v2/users/lost-password`
    let userName = state.theme.userName
    let x = await forgottenPassword(passwordUrl, userName)
    // console.log(x)
    if (x === true) {
      setRecovered(true)
      setForgotten(false)
      setErrorMessage()
    } else {
      setErrorMessage(x.message)
    }

  }

  const handleClick = () => {
    actions.theme.closeLoginMenu();
  }

    return (
      <LoginContainer>
        <h3>Register</h3>
        <p>Please note: All registrations will remain pending until
            approved by ABC staff. You will receive an email confirmation
            when your registration is approved.
        </p>
        {state.theme.registrationSuccess === true 
        ?
          <h4>Your Registration is being Processed</h4>
        :
          <form onSubmit={handleSubmit}>
            {recovered ? <SuccessMessage>Please Check Your Email for Password Reset Instructions</SuccessMessage> : null}
            <FormInput className={state.theme.registrationError.includes('Email')
              ?
              "error"
              :
                ""
              }
              name="email"
              type="email"
              value={state.theme.userEmail}
              handleChange={(e) => {
                actions.theme.updateField("userEmail", e.target.value)
                actions.theme.updateField("userName", e.target.value)
              }}
              label="email"
              required
            />
            {state.theme.registrationError.includes('Email')
              ?
              <ErrorMessage>{state.theme.registrationError}</ErrorMessage>
              :
              null
            }
            
            <FormInput className={state.theme.registrationError.includes('password')
              ?
              "error"
              :
                ""
              }
              name="password"
              type="password"
              value={state.theme.userPass}
              handleChange={(e) => actions.theme.updateField("userPass", e.target.value)}
              label="create password"
              required
            />
            {state.theme.registrationError.includes('password')
            ?
              <ErrorMessage>{state.theme.registrationError}</ErrorMessage>
            :
              null
            }
            <CustomButton type='submit'>Register</CustomButton>
            <br/>
            <br/>
            <ForgottenButton onClick={handlePassword}>Forgot Password</ForgottenButton>
          </form>
        }

        {forgotten ?
          <>
            <br />
            <br />
            <FormInput className={state.theme.loginError.includes('email') ?
              "error"
              :
              ""
            }
              name="email"
              type="userName"
              value={state.theme.userName}
              handleChange={(e) => actions.theme.updateField("userName", e.target.value)}
              label="email"
              required
            />
            <CustomButton onClick={handleForgottenPassword}>Recover Password</CustomButton>
            <br /><br />
            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
          </>
          :
          null
        }
      </LoginContainer>
    );
}

export default connect(Register);