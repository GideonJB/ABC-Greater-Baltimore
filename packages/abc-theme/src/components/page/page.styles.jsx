import { styled } from 'frontity';

const getPageStyle = props => {
  const style = Object.entries(props)[0][0];
  switch(style) {
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
    default:
      return
  }
};

export const PageWrapper = styled.div`
  padding: 60px 14vw 40px 14vw;

  @media screen and (max-width: 1100px){
    margin-left: 0px;
    padding: 30px 20px;
    max-width: 100vw;
    width: 100vw;
  
  }
`