import { fetch } from "frontity";

const registerUser = async ({ state }) => {
  const res = await fetch(`${state.source.api}/wp/v2/users/register`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      username: state.theme.userName,
      email: state.theme.userEmail,
      password: state.theme.userPass
    }),
    redirect: "follow"
  });
  
  const body = await res.json();
  // console.log("body", body);
  
  if (body.code === 200) {
    state.theme.registrationSuccess = true;
  }
  else if (body.code === 406) {
    state.theme.registrationError = "Email already exists, please try 'Reset Password'"
  }
  else {
    state.theme.registrationError = body.message
  }
};

export default registerUser;
