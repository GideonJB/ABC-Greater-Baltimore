import { styled, css } from 'frontity';

import membershipbg from '../../static/images/blur1.jpg'
import apprenticeshipbg from '../../static/images/blur3.jpg'
import eventsbg from '../../static/images/events-bg.jpg'
import safetybg from '../../static/images/blur5.jpg'
import managementbg from '../../static/images/blur2.jpg'
import politicalbg from '../../static/images/blur4.jpg'
import membersbg from '../../static/images/blur7.jpg'

import membershipbgmid from '../../static/images/1.jpg'
import apprenticeshipbgmid from '../../static/images/apprenticeship_bgmid.jpg'
import eventsbgmid from '../../static/images/events_bgmid.jpg'
import safetybgmid from '../../static/images/safety_bgmid.jpg'
import managementbgmid from '../../static/images/management_bgmid.jpg'
import politicalbgmid from '../../static/images/political_bgmid.jpg'

import membershipbgmobile from '../../static/images/1.jpg'
import apprenticeshipbgmobile from '../../static/images/apprenticeship_bgmobile.jpg'
import eventsbgmobile from '../../static/images/events_bgmobile.jpg'
import safetybgmobile from '../../static/images/safety_bgmobile.jpg'
import managementbgmobile from '../../static/images/management_bgmobile.jpg'
import politicalbgmobile from '../../static/images/political_bgmobile.jpg'

const membershipStyle = css`
  background-image: url(${membershipbg});
  /* @media screen and (max-width: 1400px){
    background-image: url(${membershipbgmid});
  }
  @media screen and (max-width: 1100px){
    background-image: url(${membershipbgmobile});
  } */
`
const apprenticeshipStyle = css`
  background-image: url(${apprenticeshipbg});
  /* @media screen and (max-width: 1400px){
    background-image: url(${apprenticeshipbgmid});
  }
  @media screen and (max-width: 1100px){
    background-image: url(${apprenticeshipbgmobile});
  } */
`
const eventsStyle = css`
  background-image: url(${eventsbg});
  /* @media screen and (max-width: 1400px){
    background-image: url(${eventsbgmid});
  }
  @media screen and (max-width: 1100px){
    background-image: url(${eventsbgmobile});
  } */
`
const safetyStyle = css`
  background-image: url(${safetybg});
  /* @media screen and (max-width: 1400px){
    background-image: url(${safetybgmid});
  }
  @media screen and (max-width: 1100px){
    background-image: url(${safetybgmobile});
  } */
`
const managementStyle = css`
  background-image: url(${managementbg});
  /* @media screen and (max-width: 1400px){
    background-image: url(${managementbgmid});
  }
  @media screen and (max-width: 1100px){
    background-image: url(${managementbgmobile});
  } */
`
const politicalStyle = css`
  background-image: url(${politicalbg});
  /* @media screen and (max-width: 1400px){
    background-image: url(${politicalbgmid});
  }
  @media screen and (max-width: 1100px){
    background-image: url(${politicalbgmobile});
  } */
`

const membersStyle = css`
  background-image: url(${membersbg});
`

const getPageStyle = props => {
  const style = Object.entries(props)[0][0];
  switch (style) {
    case 'membership':
      return membershipStyle
    case 'apprenticeship':
      return apprenticeshipStyle
    case 'events':
      return eventsStyle
    case 'safety':
      return safetyStyle
    case 'management':
      return managementStyle
    case 'political':
      return politicalStyle
    case 'members':
      return membersStyle
    default:
      return
  }
};

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 75px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--colors-site-overlay);
  z-index: -1;

  @media screen and (max-width: 1100px){
    top: 50px;
    
  }
`
export const Background = styled.div`
  ${getPageStyle};
  position: fixed;
  top: 75px;
  right: 0;
  width: var(--screen-width);
  height: var(--screen-height);
  background-size: cover;
  background-position: right;
  z-index: -1;

  @media screen and (max-width: 1100px){
    top: 50px;
    bottom: 0px;
    width: 100%;
  }
`