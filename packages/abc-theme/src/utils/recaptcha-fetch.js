import { fetch } from "frontity"

export const recaptchaFetch = ( secret, token ) => {

  const fetchFromAPI = async () => {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
      body: {
        'secret': secret,
        'response': token
      }
    });
    const body = await response.json();
    return body;
  };

  const getPromise = () => {
    return Promise.resolve(fetchFromAPI())
  }

  const data = getPromise().then((fetchedData) => {
      return fetchedData
  }) 
  return data
};

export default recaptchaFetch