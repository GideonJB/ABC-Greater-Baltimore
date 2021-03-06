import React, { useEffect, useState } from "react";
import { styled } from "frontity"

const Carousel = styled.div`
  overflow: hidden;
  margin-bottom: 40px;
`

const InnerDiv = styled.div`
  transition: transform 0.5s ease;
  white-space: nowrap;
`

const CarouselItem = styled.div`
  padding: 0px 80px;
  white-space: normal;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 400px;

  @media screen and (max-width: 1100px){
    height: auto;
    padding: 0px 20px;
  }
`

const ItemContent = styled.div`
  color: var(--colors-site-white);
  font-style: italic;
`

const Caption = styled.h4`
  text-align: right;
  @media screen and (max-width: 1000px){
    font-size: 1.2em;
  }
`

const QuoteIcon = styled.svg`
  width: 30px;
  height: auto;
  transform: scaleX(-1);
`

const QuoteText = styled.h4`
  @media screen and (max-width: 1000px){
    font-size: 1em;
  }
`

const Quote = ({ quotes }) => {
  const [current, setCurrent] = useState(0);
  const time = 8000;

  /* console.log("node", { quotes });
  console.log(Array.isArray(quotes)); */

  const quoteArray = quotes.map ((el) => {
    return {
      quote: el.children[0].children[1].children[0].children[0].children[1].children[0].children[0].content,
      caption: el.children[0].children[1].children[0].children[0].children[1].children[0].children[3].content
    }
  });
  /* console.log("Quote Array", quoteArray); */

  useEffect(() => {
    const next = (current + 1) % quoteArray.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div style={{ position: "relative" }}>
      <Carousel>
        <InnerDiv style={{ transform: `translateX(-${current * 100}%)`}}>
        {quoteArray.map ((data) => {
          const { quote, caption } = data;
          return(
            <CarouselItem>
              <ItemContent>
                <QuoteIcon viewBox="0 0 100 100">
                  <path fill="#ff0000" d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262			c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459			l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506			C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834			c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z"/>
                  <path fill="#ff0000" d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902			c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004			c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506			C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834			c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z"/>
                </QuoteIcon>
                <QuoteText>{quote}</QuoteText>
                <br/>
                <Caption>{caption}</Caption>
              </ItemContent>
            </CarouselItem>
          )
        })}
        </InnerDiv>
      </Carousel>
    </div>
  );
};

const membershipquote = {
name: "quote",
  priority: 20,
  test: ({ component, props }) =>
    component === "div" && props?.className === "wp-block-columns membership-quote",
  processor: ({ node }) => {
    const quotes = node.children;
    // const quote = node.children[0].children[0].content;
    // const author = node.children[1].children[0].children[0].content;
    return {
      component: Quote,
      props: { quotes },
    };
  },
};

export default membershipquote;