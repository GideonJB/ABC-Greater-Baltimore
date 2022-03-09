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

  background: linear-gradient(-90deg, hsla(0,0%,100%,0.1) 0%, hsla(0, 0%, 100%, .88) 100%) !important;
  -webkit-backdrop-filter: blur( 25.0px );
  backdrop-filter: blur( 25.0px );
  border: 1px solid hsla( 0, 0%, 100%, 0.18 );
`

export const FormWrapper = styled.div`
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

export const InputLabel = styled.label`
  color: gray;
  font-size: 20px;
  font-weight: normal;

  p{
    font-size: .8em;
  }
`
