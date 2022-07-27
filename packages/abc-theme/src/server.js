import { config } from "dotenv";

// Launch dot-env.
config();

export default {
  state: {
    theme: {
      myVariable: process.env.REACT_APP_TEST_VARIABLE,
      devUsername: process.env.REACT_APP_DEV_USERNAME,
      devPass: process.env.REACT_APP_DEV_PASS,
      captchaSite: process.env.CAPTCHA_SITE_KEY,
      captchaSecret: process.env.CAPTCHA_SECRET_KEY,
    },
  },
};