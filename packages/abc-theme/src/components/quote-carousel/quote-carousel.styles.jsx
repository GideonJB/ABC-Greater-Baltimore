import { styled } from "frontity"


export const Heading = styled.h2`
  text-align: center;
  color: var(--colors-site-white);
  padding-top: 10px;
  padding-bottom: 20px;
`
export const Carousel = styled.div`
  overflow: hidden;
  /* margin-bottom: 40px; */
`

export const InnerDiv = styled.div`
  transition: transform 1s ease-in-out;
  white-space: nowrap;
`

export const CarouselItem = styled.div`
  padding: 0px 80px;
  white-space: normal;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 300px;

  @media screen and (max-width: 1100px){
    height: auto;
    padding: 0px 20px;
  }
`

export const ItemContent = styled.div`
  color: var(--colors-site-white);
  font-style: italic;
`

export const Caption = styled.h4`
  text-align: right;
  @media screen and (max-width: 1000px){
    font-size: 1.2em;
  }
`

export const QuoteIcon = styled.svg`
  width: 30px;
  height: auto;
  
  &.reverse{
    transform: scaleX(-1);
  }
`

export const QuoteText = styled.h4`
  @media screen and (max-width: 1000px){
    font-size: 1em;
  }
`

export const ArrowRight = styled.h1`
  cursor: pointer;
  position: absolute;
  left : 20px;
  top: 250px;
`

export const ArrowLeft = styled.h1`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 250px;
`