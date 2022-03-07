const settings = {
  "name": "abc-website",
  "state": {
    "frontity": {
      "url": "https://dev.abcbaltimore.org",
      "title": "ABC Greater Baltimore",
      "description": "Labor Organization Website"
    }
  },
  "packages": [
    {
      "name":"abc-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "theme": {
          "autoPrefetch": "hover"
        },
        "source": {
          "url": "https://dev.abcbaltimore.org",
          "api": "https://dev.abcbaltimore.org/wp-json",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
