import { styled } from "frontity"

export const Wrapper = styled.div`
  
  width: var(--screen-width);
  /* margin-left: 150px; */
  @media screen and (max-width: 1100px){
    width: 100vw;
  }
`

export const GlassWrap = styled.div`
  
`

export const FormWrapper = styled.div`
  position: relative;
  margin-left: 220px;
  padding: 20px;
  padding-top: 60px;
  width: 60%;

  h3, h4, label, p, li{
    color: var(--colors-site-mainTheme);
  }

  &.entry-content{
    margin: 0 auto;
    padding: 0px;
  }
  
  @media screen and (max-width: 1100px){
    margin: 0 auto;
    width: 100%;
    padding: 5px;
  }
`

export const ErrorMessage = styled.p`
  font-size: .8em;
  margin-top: -20px;
  color: red !important;
`

export const FormFrame = styled.iframe`
  height: 4500px;
  width: 1000px;
  border: none;
`

export const InputLabel = styled.label`
  color: gray;
  font-size: 20px;
  font-weight: normal;

  p{
    font-size: .8em;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  outline: none;
  margin-bottom: 25px;
`