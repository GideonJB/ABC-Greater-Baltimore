import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import CustomButton from '../custom-button/custom-button.component';
import React, { useCallback, useEffect } from 'react';
import { connect } from 'frontity';

const CaptchaButton = ({ state, onVerifyCaptcha }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback (async () => {
    if (!executeRecaptcha) {
      console.log("not executing");
      return;
    }

    const token = await executeRecaptcha('contact');
    console.log(token);
    onVerifyCaptcha(token);
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <CustomButton type="button" onClick={handleReCaptchaVerify}>
      Please validate you are a human.
    </CustomButton>
  );
};

const Captcha = ({ state, onVerifyCaptcha }) => (
  <GoogleReCaptchaProvider reCaptchaKey={state.theme.captchaSite}>
    <CaptchaButton onVerifyCaptcha={onVerifyCaptcha} />
  </GoogleReCaptchaProvider>
);

export default connect(Captcha);