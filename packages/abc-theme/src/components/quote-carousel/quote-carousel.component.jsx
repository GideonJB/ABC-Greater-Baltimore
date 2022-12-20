import React, { useEffect, useState, useMemo } from "react";
import { useTransition, animated, config } from "@react-spring/web"

import {Heading,
      Carousel,
      InnerDiv,
      CarouselItem,
      ItemContent,
      Caption,
      QuoteIcon,
      QuoteText,
      ArrowLeft,
      ArrowRight,
      } from "./quote-carousel.styles"

const QuoteCarousel = ({ quoteArray, time=8000, heading="" }) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(14);
  const [direction, setDirection] = useState('right');

  const getTransitionConfig = (direction) => {
    console.log(direction);
    if (direction === 'right') {
      return [
      {
        from: { opacity: 0, position: 'absolute', width: '50vw', transform: 'translate3d(-100%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0 ,0)' },
        leave: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
        config: config.molasses,
      },
      {
        from: { opacity: .5, position: 'absolute', width: '50vw', transform: 'translate3d(0%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(100%,0 ,0)' },
        leave: { opacity: 0, transform: 'translate3d(200%, 0, 0)' },
        config: config.molasses,
      }
      ];
    }

    if (direction === 'left') {
      return [
        {
          from: { opacity: 1, position: 'absolute', width: '50vw', transform: 'translate3d(100%, 0, 0)' },
          enter: { opacity: 1, transform: 'translate3d(0%,0 ,0)' },
          leave: { opacity: .5, transform: 'translate3d(-100%, 0, 0)' },
          config: config.molasses,
        },
        {
          from: { opacity: 0, position: 'absolute', width: '50vw', transform: 'translate3d(200%, 0, 0)' },
          enter: { opacity: 1, transform: 'translate3d(100%,0 ,0)' },
          leave: { opacity: 0, transform: 'translate3d(0%, 0, 0)' },
          config: config.molasses,
        }
      ];
    }

    return {};
  };

  const transitionConfig = useMemo(() => ({
    ...getTransitionConfig(direction)
  }), [direction, getTransitionConfig]);

  const transitions = useTransition(current, transitionConfig[0]);

  const transitionsprev = useTransition(previous, transitionConfig[1]);

  useEffect(() => {
    setDirection('right');
    const next = (current + 1) % quoteArray.length;
    const prev = (current) % quoteArray.length;
    const id = setTimeout(() => setCurrent(next), time);
    const previd = setTimeout(() => setPrevious(prev), time);
    return () => {
      clearTimeout(id);
      clearTimeout(previd);
    }
  }, [current]);

  const handleNext = () => {
    setDirection('right');
    setCurrent((current + 1) % quoteArray.length);
    setPrevious((current) % quoteArray.length);
  }
  const handlePrevious = () => {
    setDirection('left');
    setCurrent(current > 0 ? (current - 1) % quoteArray.length : quoteArray.length - 1);
    if (current > 1){
      setPrevious((current - 2) % quoteArray.length);
    }else if (current > 0) {
      setPrevious(quoteArray.length - 1);    
    }else {
      setPrevious(quoteArray.length - 2);
    }
      
  }

  return (
    <div style={{ position: "relative" }}>
      {heading?
        <Heading>{heading}</Heading>
      :
      null
      }
      <Carousel>
        <InnerDiv>
          
              <>
              {transitions(({opacity, position, width, transform}, item) => (
                <animated.div style={{
                  position: position,
                  width: width,
                  opacity: opacity,
                  transform: transform,
                  
                }}>
              <CarouselItem>
                <ItemContent>
                  <QuoteText>
                    <QuoteIcon className="reverse" viewBox="0 0 100 100">
                      <path fill="#ff0000" d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262			c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459			l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506			C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834			c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z" />
                      <path fill="#ff0000" d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902			c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004			c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506			C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834			c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z" />
                    </QuoteIcon>
                    &nbsp;{quoteArray[item].quote}&nbsp;
                    <QuoteIcon viewBox="0 0 100 100">
                      <path fill="#ff0000" d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262			c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459			l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506			C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834			c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z" />
                      <path fill="#ff0000" d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902			c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004			c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506			C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834			c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z" />
                    </QuoteIcon>
                  </QuoteText>
                  <br />
                  <Caption>{quoteArray[item].caption}</Caption>
                </ItemContent>
              </CarouselItem>
              </animated.div>
                  ))}
              {transitionsprev(({opacity, position, width, transform}, item) => (
                <animated.div style={{
                  position: position,
                  width: width,
                  opacity: opacity,
                  transform: transform,
                  
                }}>
              <CarouselItem>
                <ItemContent>
                  <QuoteText>
                    <QuoteIcon className="reverse" viewBox="0 0 100 100">
                      <path fill="#ff0000" d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262			c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459			l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506			C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834			c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z" />
                      <path fill="#ff0000" d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902			c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004			c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506			C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834			c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z" />
                    </QuoteIcon>
                    &nbsp;{quoteArray[item].quote}&nbsp;
                    <QuoteIcon viewBox="0 0 100 100">
                      <path fill="#ff0000" d="M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262			c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459			l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506			C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834			c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z" />
                      <path fill="#ff0000" d="M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902			c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004			c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506			C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834			c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z" />
                    </QuoteIcon>
                  </QuoteText>
                  <br />
                  <Caption>{quoteArray[item].caption}</Caption>
                </ItemContent>
              </CarouselItem>
              </animated.div>
                  ))}
              </>          
        </InnerDiv>
      </Carousel>
      <ArrowLeft onClick={handlePrevious}>&#62;</ArrowLeft>
      <ArrowRight onClick={handleNext}>&#60;</ArrowRight>
    </div>
  );
};

export default QuoteCarousel;