import React from 'react'
import { connect } from 'frontity'
import LogoContainer from "../logo-container/logo-container.component"

import logoImage from "../../assets/images/abc-logo-new.png";
import facebookLogo from "../../assets/images/Facebook.png"
import youtubeLogo from "../../assets/images/Youtube.png"
import linkedinLogo from "../../assets/images/LinkedIn.png"
import instagramLogo from "../../assets/images/Instagram.png"
import twitterLogo from "../../assets/images/Twitter.png"

import { FooterContainer,
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

  return(
    <>
    {state.router.link !== '/' ? 
      <FooterContainer>
        <Address>2101 E. Biddle St. Suite 5000<br />
          Baltimore. MD 21213<br />
          410-821-0351<br />
        </Address>
        <SecondRow>
          <Facebook>
            <LogoContainer source={facebookLogo}
              alt="Facebook Logo"
              widthValue="30px"
              heightValue="30px"
              link="http://www.facebook.com/abcgreaterbaltimore"
              target="_blank"
            />
          </Facebook>
          <Youtube>
            <LogoContainer source={youtubeLogo}
              alt="Youtube Logo"
              widthValue="30px"
              heightValue="30px"
              link="https://www.youtube.com/channel/UC1HN8StFmyDwnMN3Qzk6X8A/videos"
            />
          </Youtube>
          <Twitter>
            <LogoContainer source={twitterLogo}
              alt="Twitter Logo"
              widthValue="30px"
              heightValue="30px"
              link="http://www.twitter.com/abcbaltimore"
            />
          </Twitter>
          <Instagram>
            <LogoContainer source={instagramLogo}
              alt="Instagram Logo"
              widthValue="30px"
              heightValue="30px"
              link="https://www.instagram.com/abcgreaterbaltimore/"
            />
          </Instagram>
          <LinkedIn>
            <LogoContainer source={linkedinLogo}
              alt="LinkedIn Logo"
              widthValue="30px"
              heightValue="30px"
              link="https://www.linkedin.com/company/associated-builders-and-contractors-baltimore-metro-chapter/"
            />
          </LinkedIn>
          <Copyright>&copy; 2022</Copyright>
        </SecondRow>
        <FirstRow>
          <LogoContainer source={logoImage} alt="ABC Logo" widthValue="280px" heightValue="60px" link="/" />
        </FirstRow>
      </FooterContainer>
    :
    null
    }
    </>
  )
}

export default connect(Footer)