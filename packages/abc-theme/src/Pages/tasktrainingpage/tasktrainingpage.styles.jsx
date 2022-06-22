import { styled, keyframes } from 'frontity'

export const Wrapper = styled.div`
  width: var(--screen-width);
  /* margin-left: 150px; */
  @media screen and (max-width: 1100px){
    width: 100vw;
  }
`

export const GlassWrap = styled.div`
  position: relative;
`

export const FormWrapper = styled.div`

  p{
    color: var(--colors-site-white);
  }

  h3, label{
    color: var(--colors-site-white);
  }
  position: relative;
  margin-left: 220px;
  padding: 20px;
  width: 50%;
  
  @media screen and (max-width: 1100px){
    margin: 0 auto;
    width: 100%;
  }
`

export const ErrorMessage = styled.p`
  font-size: .8em;
  margin-top: -20px;
  color: red !important;
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
  color: gray;
  font-size: 20px;
  font-weight: normal;

  p{
    font-size: .8em;
  }
`

