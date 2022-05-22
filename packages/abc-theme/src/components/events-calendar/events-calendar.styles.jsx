import { styled } from "frontity"

export const CalendarContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 0px;
  height: 95vh;
  background-color: var(--colors-site-white);
  border-radius: 10px 0px 0px 0px;
  transition: all .5s;
  z-index: 1;
  overflow: auto;
  padding: 0px 0px 30px 0px;
  width: 350px;
  pointer-events: auto;
  -webkit-box-shadow: -5px 0px 13px 3px rgba(0,0,0,0.30);
  box-shadow: -5px 0px 13px 3px rgba(0,0,0,0.30);
  text-align: center;

  &.close {
    margin-right: -360px;
  }
  &.open {
    margin-right: 0px;
  }

  @media screen and (max-width: 600px){
    top: 50px;
    width: 100vw;
    &.close{
      margin-right: -100vw;
    }
  }
`

export const CloseButton = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 20px;
  margin: 0 0 -35px 0;
  font-size: 1.4em;
  position: sticky;
  top: 10px;
  cursor: pointer;
  color: var(--colors-site-mainTheme);
`

export const EventContainer = styled.div`
  background-color: var(--colors-site-white);
  display: flex;
  border-bottom: 4px solid var(--colors-site-mainTheme);
  overflow: hidden;
  height: 150px;
  transition: all .1s;
  /* white-space: nowrap; */

  &:hover {
    border-left: 5px solid red;
    background-color: white;
    width: 354px;
  }
  
`


export const FeaturedImage = styled.div`
  border-bottom: 5px solid var(--colors-site-mainTheme);
  img{
    &:hover{
      transform: scale(1.025);
      transition: all .3s;
    }
  }
`

export const DateContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--colors-site-mainTheme);
  line-height: 1.2;
`

export const Day = styled.p`
  margin: 0;
`

export const Month = styled.p`
  font-size: 1.5em;
  margin: 0;
`

export const Date = styled.p`
  font-size: 1.5em;
  margin: 0;
`

export const InfoContainer = styled.div`
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  a {
    text-decoration: none; 
    color: var(--colors-site-lightAccent);
  }
  line-height: 1;
  
  white-space: normal;
  overflow: hidden;
`

export const EventTitle = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 400;
`

export const TimeContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  color: var(--colors-site-mainTheme);

  p{
    margin: 0px;
    margin-left: 5px;
  }
`

export const FullSiteLink = styled.a`
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: var(--colors-text);
  text-align: center;
  font-size: 1.5em;
  border: 1px solid var(--colors-text);
  border-radius: 10px;
  padding: 0px 10px;
`

export const CalendarTitle = styled.p`
  margin-top: 20px;
  margin-left: 20px;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  border-left: 2px solid red;
`