import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import CustomButton from '../custom-button/custom-button.component';
import React, { useCallback } from 'react';
import { connect } from 'frontity';

const CaptchaButton = ({ state, onVerifyCaptcha }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const clickHandler = useCallback (async () => {
    if (!executeRecaptcha) {
      console.log("not executing")
      return;
    }

    const token = await executeRecaptcha('contact');
    onVerifyCaptcha(token);
  }, [executeRecaptcha]);

  return (
    <CustomButton type="button" onClick={clickHandler}>
      Please validate you are a human.
    </CustomButton>
  );
};

const Captcha = ({ state, onVerifyCaptcha }) => (
  <GoogleReCaptchaProvider reCaptchaKey={state.theme.captchaSecret}>
    <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} />
  </GoogleReCaptchaProvider>
);

export default connect(Captcha);