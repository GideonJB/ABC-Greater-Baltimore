import { styled } from "frontity"

export const EventsPageWrapper = styled.div`
  width: var(--screen-width);
  /* margin-left: 150px; */

  @media screen and (max-width: 1100px){
    width: 100vw;
    padding: 20px;
  }
`

export const ImageList = styled.div`
  margin-left: 200px;
  display: flex;
  justify-content: center;
  width: 80%;
  margin-bottom: 40px;

  @media screen and (max-width: 1100px){
    width: 100%;
    display: block;
    margin: 0px auto;
  }
`

export const FeaturedContainer = styled.div`
  max-width: 600px;
  max-height: 260px;
  object-fit: contain;
  overflow: hidden;
  margin-right: 20px;
  transition: all .5s;

  &:hover {
    transform: scale(1.05)
  }

  @media screen and (max-width: 1100px){
    width: 100%;
    margin: 10px 0px;
  }
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