import { fetch } from "frontity";

const forgottenPassword = async( url, userName ) => {
  
  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      user_login: userName,
    }),
    redirect: "follow"
  });

  const body = await res.json();
  console.log(body);

  if (body.code === 200) {
    return true    
  }
  else {
    return body
  }
 
};

export default forgottenPassword;
