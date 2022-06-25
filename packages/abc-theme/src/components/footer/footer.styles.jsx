import { styled } from "frontity"

export const ScrollTopContainer = styled.div`
  background-color: var(--colors-site-white);

  div{
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 25px 30px;
    cursor: pointer;
    line-height: .8;
  }
`

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
  /* height: 200px; */
  background-color: var(--colors-site-white);
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 30px 0px 180px;

  @media screen and (max-width: 1000px){
    min-height: 400px;
    flex-direction: column;
    padding: 0 0 10px 0;
    flex-grow: 3;
  }

  @media screen and (max-width: 767px) {
    _::-webkit-full-page-media, _:future, :root .safari_only {
        padding-bottom: 74px; //resize 
    }
  }
`

export const FirstRow = styled.div`
  width: 280px;
  p{
    font-size: .8em;
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin: 0;
  }
  /* @media screen and (max-width: 800px){
    display: none;
  } */

`

export const SecondRow = styled.div`
  width: 280px;
  position: relative;
  height: 40px;
  text-align: center;
`

export const Copyright = styled.p`
  margin-top: 40px;
`

export const Facebook = styled.div`
  position: absolute;
  left: 0;
  border-radius: 50%;
  transition: all .5s;

  &:hover{
    border: 1px solid hsl(220,44%,41%);
    transform: scale(1.2);
    background-color: hsl(220,44%,41%);

    img{
      filter: invert(90%);
    }
  }
  
`

export const Youtube = styled.div`
  position: absolute;
  left: 62px;
  border-radius: 50%;
  transition: all .5s;

  &:hover{
    border: 1px solid crimson;
    transform: scale(1.2);
    background-color: crimson;

    img{
      filter: invert(100%);
    }
  }
`

export const Twitter = styled.div`
  position: absolute;
  left: 125px;
  border-radius: 50%;
  transition: all .5s;
  

  &:hover{
    border: 1px solid deepskyblue;
    transform: scale(1.2);
    background-color: deepskyblue;

    img{
      filter: invert(100%);
    }
  }
`

export const Instagram = styled.div`
  position: absolute;
  left: 189px;
  border-radius: 50%;
  transition: all .5s;

  &:hover{
    border: 1px solid black;
    transform: scale(1.2);
    background-color: black;

    img{
      filter: invert(100%);
    }
  }
`

export const LinkedIn = styled.div`
  position: absolute;
  left: 250px;
  border-radius: 50%;
  transition: all .5s;

  &:hover{
    border: 1px solid darkcyan;
    transform: scale(1.2);
    background-color: darkcyan;

    div{
      filter: invert(100%);
    }
  }
`

export const Address = styled.p`
  font-family: "Poppins", sans-serif;
  /* font-size: 12px; */
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
`