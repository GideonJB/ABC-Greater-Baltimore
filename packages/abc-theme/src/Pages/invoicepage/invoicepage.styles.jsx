import { styled } from 'frontity'

export const Wrapper = styled.div`
  width: var(--screen-width);
  /* height: var(--screen-height); */
  position: relative;

  @media screen and (max-width: 1100px){
    width: 100vw;
  }
`

export const GlassWrap = styled.div`

`

export const FormWrapper = styled.div`
  position: relative;
  margin-left: 200px;
  padding: 20px;
  padding-top: 40px;
  width: 60%;

  option, h3, p{
    color: var(--colors-site-mainTheme);
  }
  
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