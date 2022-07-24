import { fetch } from "frontity";
import { useState } from "react"

const registerUser = async ({ state }) => {

  const tokenFetch = await fetch(`${state.source.api}/jwt-auth/v1/token`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      username: state.theme.devUsername,
      password: state.theme.devPass
    })
  });

  const token = await tokenFetch.json();
  console.log(token.token);
  
  
  const res = await fetch(`${state.source.api}/wp/v2/users`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.token}`
    }),
    body: JSON.stringify({
      username: state.theme.userName,
      email: state.theme.userEmail,
      password: state.theme.userPass,
      first_name: state.theme.userFirst,
      last_name: state.theme.userLast,
      description: state.theme.userCompany
    }),
    redirect: "follow"
  });
  
  const body = await res.json();
  console.log("body", body);
  
  if (body.id) {
    state.theme.registrationSuccess = true;
  }
  else {
    state.theme.registrationError = body.message
  }
  console.log("REG ERROR", state.theme.registrationError);
};

export default registerUser;
