import { fetch } from "frontity"

export const generalFetch = (url) => {

  const fetchFromAPI = async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authentication': Buffer.toString("")
      }
    });
    const body = await response.json();
    return body;
  };

  const getPromise = () => {
    return Promise.resolve(fetchFromAPI())
  }

  const data = getPromise().then((fetchedData) => {
      return fetchedData.events
  }) 
  return data
};

export const eventsFetch = () => {

  const fetchFromAPI = async () => {
    const response = await fetch("https://events.abcbaltimore.org/wp-json/tribe/events/v1/events?page=1&per_page=30");
    const body = await response.json();
    return body;
  };

  const getPromise = () => {
    return Promise.resolve(fetchFromAPI())
  }

  const data = getPromise().then((fetchedData) => {
      return fetchedData.events
  }) 
  return data
};

export const blogFetch = () => {

  const fetchFromAPI = async () => {
    const response = await fetch("https://secure.abcbaltimore.org/wp-json/wp/v2/posts?_embed?page=1&per_page=100");
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

export const youTubeFetch = () => {

  const fetchFromAPI = async () => {
    const response = await fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBZjbZUUsNaaG_29vjZpW7I51ITBHPrIyM&channelId=UC1HN8StFmyDwnMN3Qzk6X8A&part=snippet,id&order=date&maxResults=20");
                                                                                    
    const body = await response.json();
    console.log(body);
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

export const resumeFetch = () => {

  const fetchFromAPI = async () => {
    const response = await fetch("http://dev.abcbaltimore.org/wp-json/gf/v2/forms/4?api_key=d9cf16e66ee9df8");
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


