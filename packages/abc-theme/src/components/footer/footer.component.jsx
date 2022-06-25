import React from 'react'
import { connect } from 'frontity'
import dayjs from 'dayjs'

import LogoContainer from "../logo-container/logo-container.component"

import logoImage from "../../static/images/abc-logo-new.png";
import facebookLogo from "../../static/images/Facebook.png"
import youtubeLogo from "../../static/images/Youtube.png"
import linkedinLogo from "../../static/images/LinkedIn.png"
import instagramLogo from "../../static/images/Instagram.png"
import twitterLogo from "../../static/images/Twitter.png"

import { FooterContainer,
        ScrollTopContainer,
        FirstRow,
        SecondRow,
        Facebook,
        Youtube,
        Twitter,
        Instagram,
        LinkedIn,
        Address,
        Copyright,
       } from "./footer.styles"

const Footer = ({ state }) => {

  const scrollClick = () => {
    console.log("scroll clicked")
    const body = document.getElementById("scrollBody")
    console.log("body", body);
    body.scrollTo({top:0 , behavior: "smooth"});
  }

  return(
    <>
    {state.router.link !== '/test' ? 
      <>
      <ScrollTopContainer>
            <div onClick={scrollClick}>^<br/>Back to Top</div>
      </ScrollTopContainer>
      <FooterContainer className='sfari_only'>
          {state.theme.intViewportWidth < 1100 ?
            <FirstRow>
              <LogoContainer source={logoImage} alt="ABC Logo" widthValue="280px" heightValue="auto" link="/" />
            </FirstRow>
            :
            null
          }
        <Address>
          ABC Greater Baltimore<br />
          2101 E. Biddle St. Suite 5000<br />
          Baltimore, MD 21213<br />
          410-821-0351<br />
        </Address>
        <SecondRow>
          <Facebook>
            <LogoContainer margin="0px" source={facebookLogo}
              alt="Facebook Logo"
              widthValue="30px"
              heightValue="30px"
              link="http://www.facebook.com/abcgreaterbaltimore"
              target="_blank"
            />
          </Facebook>
          <Youtube>
            <LogoContainer margin="0px" source={youtubeLogo}
              alt="Youtube Logo"
              widthValue="30px"
              heightValue="30px"
              link="https://www.youtube.com/channel/UC1HN8StFmyDwnMN3Qzk6X8A/videos"
            />
          </Youtube>
          <Twitter>
            <LogoContainer margin="0px" source={twitterLogo}
              alt="Twitter Logo"
              widthValue="30px"
              heightValue="30px"
              link="http://www.twitter.com/abcbaltimore"
            />
          </Twitter>
          <Instagram>
            <LogoContainer margin="0px" source={instagramLogo}
              alt="Instagram Logo"
              widthValue="30px"
              heightValue="30px"
              link="https://www.instagram.com/abcgreaterbaltimore/"
            />
          </Instagram>
          <LinkedIn>
            <LogoContainer margin="0px" source={linkedinLogo}
              alt="LinkedIn Logo"
              widthValue="30px"
              heightValue="30px"
              link="https://www.linkedin.com/company/associated-builders-and-contractors-baltimore-metro-chapter/"
            />
          </LinkedIn>
          <Copyright>&copy; {dayjs().year()}</Copyright>
        </SecondRow>
        {state.theme.intViewportWidth > 1100 ?
            <FirstRow>
              <LogoContainer source={logoImage} alt="ABC Logo" widthValue="280px" heightValue="auto" link="/" />
            </FirstRow>
            :
            null
        }
      </FooterContainer>
     
      </>
    :
    null
    }
    </>
  )
}

export default connect(Footer)