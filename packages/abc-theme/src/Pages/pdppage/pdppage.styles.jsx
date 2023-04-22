import { styled, keyframes } from "frontity";

export const Wrapper = styled.div`
  width: var(--screen-width);
  /* margin-left: 150px; */
  @media screen and (max-width: 1100px) {
    width: 100vw;
  }
`;

export const GlassWrap = styled.div`
  display: none;
  visibility: hidden;
`;

export const FormWrapper = styled.div`
  p,
  input,
  label {
    color: var(--colors-site-mainTheme);
  }
  position: relative;
  margin-left: 220px;
  padding: 20px;
  padding-top: 40px;
  width: 50%;

  @media screen and (max-width: 1100px) {
    margin: 0 auto;
    width: 100%;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.8em;
  margin-top: -20px;
  color: red !important;
`;
export const SuccessMessage = styled.p`
  margin-left: 220px;
  font-size: 1.2em;
  color: #07c507;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  outline: none;
  margin-bottom: 25px;
`;

export const InputLabel = styled.label`
  font-size: 20px;
  font-weight: normal;

  p {
    font-size: 0.8em;
  }
`;

export const FormFrame = styled.iframe`
  height: 3200px;
  width: 100%;
  border: none;
`;
