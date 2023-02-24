import { styled } from "frontity"

export const CallToAction = styled.p`
  margin: 0 auto;
  width: 60%;
  a{
    color: var(--colors-site-lightAccent);
    cursor: pointer;

    &:hover{
      color: var(--colors-site-darkGray);
    }
  }

  @media screen and (max-width: 1100px){
    width: 90%;
  }
`

export const CaresPageWrapper = styled.div`
  width: var(--screen-width);
  padding: 75px 20px 0px 150px;
  text-align: center;

  h4{
    padding: 20px 0px;
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (max-width: 1100px){
    width: 100vw;
    padding: 20px;
  }
`

export const CaresInfo = styled.div`
  border: .5px solid gray;
  border-top: none;
`

export const CaresTile = styled.div`

  width: 400px;
  margin: 10px 0px;
  text-align: left;

  p{
    padding: 0px 10px 10px 15px;
  }

  h4{
    text-align: left;
    margin: 0;
    width: 100%;
    padding: 10px 10px 0px 15px;
    font-size: 1.2em;
  }
  


  &:hover{
    border-left: 5px solid red;
  }

  box-shadow: var(--shadow-elevation-medium-local);
`

export const CaresTileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`

export const FeaturedContainer = styled.div`
  width: 100%;
  max-width: 600px;
  max-height: 260px;
  // object-fit: cover;
  overflow: hidden;
`

export const ImageList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0px;

  @media screen and (max-width: 1100px){
    width: 100%;
    display: block;
    margin: 0px auto;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const CalendarWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
  background-color: var(--colors-site-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px){
    width: 100vw;
    margin-left: -20px;

    h3{
      padding-left: 5px;
    }
  }
`

export const EventList = styled.div`
  background-color: var(--colors-site-white);
  width: 60%;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

export const EventContainer = styled.div`
  display: flex;
  border-bottom: 2px solid var(--colors-site-mainTheme);
  overflow: hidden;
  height: 150px;
  transition: all .1s;
  align-items: center;
  padding: 5px 0px;
  /* white-space: nowrap; */

  &:hover {
    background-color: white;
    border-left: 5px solid red;
    
  }

  @media screen and (max-width: 600px){
    height: auto;
    min-height: 150px;
  }
  
`


export const FeaturedImage = styled.div`
  margin: 0px 20px;
  width: 200px;
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