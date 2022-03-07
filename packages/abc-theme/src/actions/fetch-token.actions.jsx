import { fetch } from "frontity";

const fetchToken = async ({ state }) => {
  const res = await fetch(`${state.source.api}/jwt-auth/v1/token`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      username: state.theme.userName,
      password: state.theme.userPass
    }),
    redirect: "follow"
  });
  const body = await res.json();
  if (body.token !== undefined){
    state.theme.token = body.token;
    localStorage.setItem('user', body.token)
  } else if (body.code.includes('invalid')) {
    state.theme.loginError = "invalid username"
  } else {
    state.theme.loginError = "incorrect password"
  }
  
};

export default fetchToken;
