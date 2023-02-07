import React from 'react';
import { styled } from "frontity"
import Link from "@frontity/components/link"

const LogoContainer = ({ screenType, source, altText, widthValue="100%", heightValue="120px", link= null, margin="5px"}) => {
  
  const styles = {
    width: widthValue,
    height: heightValue,
  }
  
  return (
    <>
      <Link link={link}>
        <LogoWrapper className={screenType} style={styles} margin={margin}>
          { link !== null
          ?
          
          <img className="link" src={source} alt={altText} width={widthValue} height={heightValue} />
        
          :
          <img src={source} alt={altText} />
          }
        </LogoWrapper>
      </Link>
    </>
  )
}

export default LogoContainer;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.margin};

  img{
    &.link{
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1100px){
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