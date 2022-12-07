import React, { useState } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link"

import forgottenPassword from "../../actions/forgotten-password.actions"

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { LoginContainer, ErrorMessage, RegisterLink, LoginForm, LoginText, SuccessMessage, ForgottenButton } from "./login.styles";

const Login = ({ state, actions }) => {
  const [forgotten, setForgotten] = useState(false);
  const [recovered, setRecovered] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async event =>{
    event.preventDefault();
    await actions.theme.fetchToken();
    if (state.theme.token !== false){
      // state.theme.isLoginMenuVisible = false;
      state.theme.userPass = "";
      if (state.router.link === "/login/"){
        actions.router.set("/members/")
      }
      
    }
    //handle the actions.theme credential setting
  }

  const handleClick = () => {
    setForgotten(true)
  }

  const handleForgottenPassword = async () => {
    const passwordUrl = `${state.source.api}/wp/v2/users/lost-password`
    let userName = state.theme.userName
    let x = await forgottenPassword(passwordUrl, userName)
    // console.log(x)
    if(x === true){ 
      state.theme.userName = "";
      state.theme.includes = "";
      setRecovered(true)
      setForgotten(false)
      setErrorMessage()
    }else {
      setErrorMessage(x.message)
    }

  }

  return (
    <LoginContainer className="">
      <LoginText>LOG IN TO YOUR ACCOUNT <br/>
        All ABC Members can create an account to gain access to 
        members-only features.
        <br/>
        <br />
        Don't have an account?
      </LoginText>
      <Link link="/register/">
        <CustomButton>Create Account</CustomButton>
      </Link>
      <LoginForm onSubmit={handleSubmit} className={forgotten? "nodisplay" : ""}>
        {recovered ? <SuccessMessage>Please Check Your Email for Password Reset Instructions</SuccessMessage> : null}
        <FormInput className={state.theme.loginError.includes('email') ?
                    "error"
                    :
                    ""
                    }
          id="loginEmail"
          name="email"
          type="userName"
          value={state.theme.userName}
          handleChange={(e) => actions.theme.updateField("userName", e.target.value)}
          label="email"
          required
        />
        { state.theme.loginError.includes('username') ?
        <ErrorMessage>{state.theme.loginError}</ErrorMessage>
        :
        null
        }
        <FormInput className={state.theme.loginError.includes('password') ?
                    "error"
                    :
                    ""
                    }
          id="loginPassword"
          style="eye"
          name="password"
          type="password"
          value={state.theme.userPass}
          handleChange={(e) => actions.theme.updateField("userPass", e.target.value)}
          label="password"
          required
        />
        { state.theme.loginError.includes('password') ?
        <ErrorMessage>{state.theme.loginError}</ErrorMessage>
        :
        null
        }
        <CustomButton type='submit'>Log In</CustomButton>
        <br/>
        <ForgottenButton onClick={handleClick}>Forgot Password</ForgottenButton>
        
      </LoginForm>
      {forgotten ?
        <>
          <br/>
          <br/>
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
          <br/><br/>
          {errorMessage ? <ErrorMessage>{ errorMessage }</ErrorMessage> : null}
        </>
        :
        null
      }
    </LoginContainer>
  );
};

export default connect(Login);