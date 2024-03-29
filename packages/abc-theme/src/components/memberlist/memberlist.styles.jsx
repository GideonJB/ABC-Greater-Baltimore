import { styled } from "frontity"

export const ListWrapper = styled.div`
  justify-content: center;
  width: 95%;
  height: fit-content;
  margin-top: 1em;
  color: var(--colors-text);
  line-height: 1;
  padding: 10px;
  padding-left: 30px;
  background: var(--colors-site-white);
  border-radius: 10px;

  &.glass {
    background: rgba(255, 255, 255, 0.25);
    -webkit-backdrop-filter: blur(5.0px);
    backdrop-filter: blur(5.0px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  a, h1{
    color: var(--colors-text);
  }

  @media screen and (max-width: 800px) {
    width: auto;
    margin: 1em 5px 0 5px;
  }
`

export const CompanyNameWrapper = styled.div`
  width: 95%;
  overflow-wrap: break-word;
  padding-bottom: 20px;

  @media screen and (max-width: 800px) {
   width: 100%; 
  }
`

export const ContactWrapper = styled.div`
  width: 95%;
  overflow-wrap: break-word;
  padding-bottom: 10px;

  h4{
    font-size: 1.2em;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const MemberHeading = styled.h2`
  font-size: 1.3em !important;
  font-weight: 600;
`

export const CodeWrapper = styled.div`
  overflow-wrap: normal;
`

export const SmallText = styled.p`
  font-size: .9em;
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 0px;
  line-height: 1.3;

  @media screen and (max-width: 800px) {
    display: block;
    padding-bottom: 0;
  }

  a{
    text-decoration: underline;
  }
`

export const AwardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  img{
    object-fit: contain;
    
  }
`

export const StepHeading = styled.h4`
  text-align: center;
`