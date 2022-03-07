import { styled } from "frontity"
import Link from "@frontity/components/link"

export const LoginContainer = styled.div`
  height: 80%;
  width: 60%;
  z-index: 2;
  padding: 40px 40px 80px 40px;
  transition: all .5s;
  background-color: white;

  @media screen and (max-width: 1100px){
    width: 80%;
  }
  
`

export const LoginText = styled.p`
  font-family: 'Poppins';

`

export const LoginForm = styled.form`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &.nodisplay{
    display: none;
  }
`

export const ErrorMessage = styled.p`
  padding: 2px;
  color: red;
`

export const SuccessMessage = styled.p`
  padding: 2px;
  color: green;
`

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: var(--colors-menuBlue);
`

export const ForgottenButton = styled.a`
 cursor: pointer;
`