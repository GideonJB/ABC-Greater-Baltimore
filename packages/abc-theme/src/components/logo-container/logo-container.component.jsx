import React from 'react';
import { styled } from "frontity"
import Link from "@frontity/components/link"

const LogoContainer = ({ screenType, source, altText, widthValue="100%", heightValue="120px", link= null}) => {
  
  const styles = {
    width: widthValue,
    height: heightValue,
  }
  
  return (
    <>
      <LogoWrapper className={screenType} style={styles}>
        { link !== null
        ?
        <Link link= {link}>
        <img src={source} alt={altText} width={widthValue} height={heightValue} />
        </Link>
        :
        <img src={source} alt={altText} />
        }
      </LogoWrapper>
    </>
  )
}

export default LogoContainer;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;

  

  @media screen and (min-width: 1099px){
    &.mobile{
      display: none;
    }
  }

  @media screen and (max-width: 1100px){
    &.desktop{
      display: none;
    }
  }
`