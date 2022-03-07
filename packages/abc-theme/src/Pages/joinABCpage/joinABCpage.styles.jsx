import { styled, keyframes } from 'frontity'

export const Wrapper = styled.div`
  width: var(--screen-width);
  /* margin-left: 150px; */
  @media screen and (max-width: 1100px){
    width: 100vw;
  }
`

export const GlassWrap = styled.div`
  width: 100%;

  /* background: linear-gradient(-90deg, hsla(0,0%,100%,0.1) 0%, hsla(202,85%,7%,0.3) 100%) !important;
  -webkit-backdrop-filter: blur( 25.0px );
  backdrop-filter: blur( 25.0px );
  border: 1px solid hsla( 0, 0%, 100%, 0.18 ); */
`

export const FormWrapper = styled.div`
  margin-left: 220px;
  padding: 20px;
  padding-top: 40px;
  width: 50%;
  
  @media screen and (max-width: 1100px){
    margin: 0 auto;
    width: 100%;
  }
`

export const ErrorMessage = styled.p`
  font-size: .8em;
  margin-top: -20px;
  color: red;
`
export const SuccessMessage = styled.p`
  margin-left: 220px;
  font-size: 1.2em;
  color: #07c507;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  outline: none;
  margin-bottom: 25px;
`

export const InputLabel = styled.label`
  color: var(--colors-site-mainTheme);
  font-size: 20px;
  font-weight: normal;

  p{
    font-size: .8em;
  }
`

export const DropDown = styled.select`
  color: var(--colors-site-mainTheme);
`

export const RadioLabel = styled.label`
  color: var(--colors-site-mainTheme);
`

