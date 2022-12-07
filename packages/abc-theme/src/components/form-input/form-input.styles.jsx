import { styled, css } from 'frontity';

const subColor = 'var(--colors-site-mainTheme)';
const mainColor = "var(--colors-site-lightAccent)";

// Can I export this file and import here to make a master style variable
// to be accessed with pseudoclass selectors?
const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 30px;
  max-width: 600px;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  /* background-color: white; */
  color: var(--colors-site-mainTheme);
  font-size: 20px;
  padding: 5px;
  display: block;
  width: 100%;
  max-width: 600px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles};
  }

  &.error{
    border: 2px solid red;
    border-style: inset;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 20px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 100ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;

export const Eye = styled.p`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
  float: right;
`

