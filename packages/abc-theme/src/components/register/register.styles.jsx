import { styled } from "frontity"
import Link from "@frontity/components/link"

export const LoginContainer = styled.div`
  height: 80%;
  width: 60%;
  z-index: 2;
  padding: 40px 40px 80px 40px;
  transition: all .5s;
  background-color: white;
  
`
export const SuccessMessage = styled.p`
  padding: 2px;
  color: green;
`

export const ErrorMessage = styled.p`
  padding: 2px;
  color: red;
`

export const ForgottenButton = styled.a`
 cursor: pointer;
`