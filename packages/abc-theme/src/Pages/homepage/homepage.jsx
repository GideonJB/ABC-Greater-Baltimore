import { connect } from 'frontity';
import React, { useEffect } from 'react';
import dayjs from 'dayjs';

import { myunescape } from "../../utils/utility-functions"
import { youTubeFetch } from "../../utils/events-fetch"

import LogoContainer from '../../components/logo-container/logo-container.component';
import QuoteCarousel from "../../components/quote-carousel/quote-carousel.component";
import Header from "../../components/header/header.component";

import galaimage from "../../static/images/GALA-LOGO-2023_smaller.png"
import logoImage from "../../static/images/abc_logo.svg"
import logoImageWhite from "../../static/images/abc_logo_white.svg"
import calIcon from "../../static/images/cal-icon.png"
import cealLogo from "../../static/images/cea_logo.svg";
import info1 from "../../static/images/IG1.gif";
import info2 from "../../static/images/IG2.gif";
import info3 from "../../static/images/IG3.gif";
import quotes from "./homepageQuotes";

import {  Break,
          CalendarIcon,
          CardHeading,
          Column,
          DescriptionContainer,
          EventsBackground,
          EventsItemsContainer,
          EventListDate,
          EventListItem,
          Description,
          GradientDiv,
          GridWrapper,
          GrowContainer,
          HorizontalLine,
          IconContainer,
          IconImage,
          InfoColumnLeft,
          InfoColumnRight,
          InfographicContainer,
          InfoWrapper,
          ItemList,
          ItemTitle,
          LinkBar,
          LinkBarLink,
          ListItem,
          LogoWrapper,
          ManagementBackground,
          ManagementItemsContainer,
          MembersBackground,
          MembersItemsContainer,
          MembershipBackground,
          MembershipItemsContainer,
          MenuContainer,
          MobileBreak,
          PoliticalBackground,
          PoliticalItemsContainer,
          QuoteBlurContainer,
          QuoteContainer,
          RightLinks,
          Rule,
          SafetyBackground,
          SafetyItemsContainer,
          Wrapper,
        } from './homepage.styles';


const HomePage = ({ state, actions }) => {

  useEffect (() => {
    if(state.router.link === "/"){
      actions.theme.closeSubMenu(false);
      actions.theme.menuExpansion("");
    }
  }, []);

  const menuExpand = (name) => {
    // console.log("click!");
    state.theme.expandedMenu !== name ? 
    actions.theme.menuExpansion(name) :
    actions.theme.menuExpansion("closed");
    // console.log(state.theme.expandedMenu);
  }

  const preventBubble = (e) => {
    e.stopPropagation();
    state.theme.isHamburgerOpen = false;
  }

  const handleLogout = () => {
    state.theme.token = false;
    localStorage.removeItem('user');
  }

  const toggleNews = () => {
    if(state.theme.youTubePosts !== null){
      // console.log("no fetch needed")
    }else{
      // console.log("fetching youtube")
      youTubeFetch().then(res => actions.theme.setYouTubePosts(res));
    }
    if (state.theme.isNewsOpen === true) {
      actions.theme.toggleNews(false)
    } else {
      actions.theme.toggleNews(true)
      actions.theme.toggleCalendar(false)
      if (state.router.link !== "/") {
        actions.theme.toggleHamburger(false)
      }
    }
  }

  const toggleCalendar = () => {
    if (state.theme.isCalendarOpen === true) {
      actions.theme.toggleCalendar(false)
    }else { 
      actions.theme.toggleCalendar(true)
      actions.theme.toggleNews(false)
    if (state.router.link !== "/"){
      actions.theme.toggleHamburger(false)
    }

    }
  }

  const mappedList = (category, range="") => {
    if(state.theme.eventsCalendar && state.theme.eventsCalendar.length > 0){
      if (range==="opposite"){
        const output = state.theme.eventsCalendar.map(event => { 
          if (event.categories[0] && event.categories.every(cat => !category.includes(cat.name)) || !event.categories[0]) {
            return (
              <>
                <EventListItem>
                    <a target="_blank" href={event.url}>
                    <EventListDate>{dayjs(`${event.start_date}`).format('M/D')} - </EventListDate>
                    {myunescape(event.title)}</a>
                </EventListItem>
              </>
            )
          }
        })
        return output.filter(el => el !== undefined).slice(0, 4);
      } else {
        const output = state.theme.eventsCalendar.map(event => {       
          if (event.categories[0] && event.categories.some(cat => cat.name.includes(category))) {  
            return (
              <>
                <EventListItem>
                    <a target="_blank" href={event.url}>
                    <EventListDate>{dayjs(`${event.start_date}`).format('M/D')} - </EventListDate>
                    {myunescape(event.title)}</a>
                </EventListItem>
              </>
            )
          }
        })
        return output.filter(el => el !== undefined).slice(0, 4);
      }
    } else {

      return null
    }
  }
  
  const handleColumn = (category) => {
    switch(category){
      case 'membership':
        return (
          <Column onClick={() => menuExpand("membership")}
                  className={state.theme.expandedMenu === "membership" ? "expanded" : ""}>
            <MenuContainer className={state.theme.expandedMenu === "membership" ? "expanded bordered" : "bordered"}>
              <GrowContainer>
                <MembershipBackground className="grow"/>
              </GrowContainer>
              <GradientDiv />
              <CardHeading>Membership</CardHeading>
              <MembershipItemsContainer >
                <ItemList>
                  <ItemTitle onClick={preventBubble} link="/membership">Membership</ItemTitle>
                  <HorizontalLine />
                  <ListItem onClick={preventBubble} link="/save-money">Save Money</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/resources">Resources</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/peer-groups">Peer Groups</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/general-contractors">General Contractors</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/specialty-contractors">Specialty Contractors</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/facility-rental">Facility Rental</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/join-abc">Join ABC</ListItem><br /><br />
                </ItemList>
              </MembershipItemsContainer>
            </MenuContainer>
          </Column>
        )
      case 'events':
        return (
          <Column onClick={() => menuExpand("events")}
            className={state.theme.expandedMenu === "events" ? "expanded" : ""}>
            <MenuContainer className={state.theme.expandedMenu === "events" ? "expanded bordered" : "bordered"}>
              <GrowContainer>
                <EventsBackground className="grow"/>
              </GrowContainer>
              <GradientDiv />
              <CardHeading>Events</CardHeading>
              <EventsItemsContainer>
                <ItemList >
                  <ItemTitle onClick={preventBubble} link="/events">Events</ItemTitle>
                  <HorizontalLine />
                  <ListItem onClick={preventBubble} link="/signature-events">Signature Events</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/excellence-in-construction">Excellence in Construction</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/pro-sponsorship">PRO Sponsorship</ListItem><br /><br />
                </ItemList>
              </EventsItemsContainer>
            </MenuContainer>
          </Column>
        )
      case 'management':
        return (
          <Column onClick={() => menuExpand("management")}
            className={state.theme.expandedMenu === "management" ? "expanded large" : ""}>
            <MenuContainer className={state.theme.expandedMenu === "management" ? "expanded bordered" : "bordered"}>
              <GradientDiv />
              <GrowContainer>
                <ManagementBackground className="grow" />
              </GrowContainer>
              <GradientDiv />
              <CardHeading>Education</CardHeading>
                <ManagementItemsContainer >
                  <ItemList>
                  <ItemTitle onClick={preventBubble} link="/education">Construction <Break />Education</ItemTitle>
                    <HorizontalLine />
                    <ListItem onClick={preventBubble} link="/apprenticeship">Apprenticeship</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/continuing-education">Continuing Education</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/craft-courses">Craft Courses</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="http://constructioneducationacademy.org/">Daytime Trade School</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/management-education">Management Education</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/pdp">Professional Development</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="http://projectjumpstarttraining.org/">Project JumpStart</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/task-training">Task Training</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/blog/28493">MD NEW Electric Law</ListItem><br /><br />
                    {state.theme.intViewportWidth > 1001
                    ?
                    <LogoWrapper>
                      <LogoContainer source={cealLogo} 
                        altText="construction education academy logo"
                        widthValue="75px"
                        heightValue="auto"
                        link="/education"
                      />
                    </LogoWrapper>
                    :
                    null
                    }
                  </ItemList>
                </ManagementItemsContainer>
            </MenuContainer>
          </Column>
        )
      case 'safety':
        return (
          <Column onClick={() => menuExpand("safety")}
            className={state.theme.expandedMenu === "safety" ? "expanded" : ""}>
            <MenuContainer className={state.theme.expandedMenu === "safety" ? "expanded bordered" : "bordered"}>
              <GrowContainer>
                <SafetyBackground className="grow" />
              </GrowContainer>
              <GradientDiv />
              <CardHeading>Safety</CardHeading>
              <SafetyItemsContainer>
                <ItemList >
                  <ItemTitle onClick={preventBubble} link="/safety">Safety</ItemTitle>
                  <HorizontalLine />
                  <ListItem onClick={preventBubble} link="/site-inspections">Site Inspections</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/safety-peer-group">Safety Peer Group</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/new-hire">New Hire Safety Orientation</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/step">STEP</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="https://events.abcbaltimore.org/events/category/safety/">Safety Training</ListItem><br /><br />
                </ItemList>
              </SafetyItemsContainer>
            </MenuContainer>
          </Column>
        )
      case 'political':
        return (
          <Column onClick={() => menuExpand("political")}
            className={state.theme.expandedMenu === "political" ? "expanded" : ""}>
            <MenuContainer className={state.theme.expandedMenu === "political" ? "expanded bordered" : "bordered"}>
              <GrowContainer>
                <PoliticalBackground className="grow" />
              </GrowContainer>
              <GradientDiv />
              <CardHeading>Political <MobileBreak />Advocacy</CardHeading>
              <PoliticalItemsContainer>
                <ItemList>
                  <ItemTitle onClick={preventBubble} link="/political-advocacy">Political<Break /> Advocacy</ItemTitle>
                  <HorizontalLine />
                  <ListItem onClick={preventBubble} link="https://www.abc.org/Politics-Policy/ABC-PAC">National PAC</ListItem><br /><br />
                </ItemList>
              </PoliticalItemsContainer>
            </MenuContainer>
          </Column>
        )
      case 'members':
        return (
          <Column onClick={() => menuExpand("members")}
            className={state.theme.expandedMenu === "members" ? "expanded" : ""}>
            <MenuContainer className={state.theme.expandedMenu === "members" ? "expanded" : ""}>
              <GrowContainer>
                <MembersBackground className="grow" />
              </GrowContainer>
              <GradientDiv />
              <CardHeading>Members Only</CardHeading>
              <MembersItemsContainer>
                <ItemList>
                  <ItemTitle onClick={preventBubble} link="/members">Members<Break /> Only</ItemTitle>
                  <HorizontalLine />
                  <ListItem onClick={preventBubble} link="/virtual-hr">Virtual HR</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/find-a-contractor">Find a Contractor</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/personal-coaching">Personal Business Coaching</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/pay-invoice">Pay an Invoice</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/other-resources">Other Member Resource</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/about-us">About Us</ListItem><br /><br />
                  {state.theme.token ?
                    <ListItem link="#" onClick={() => handleLogout()}>Logout</ListItem>
                  :
                    <ListItem onClick={preventBubble} link="/login">Member Login</ListItem>
                  }
                </ItemList>
              </MembersItemsContainer>
            </MenuContainer>
          </Column>
        )
      default: null
    }
  }

  return (
    <Wrapper>
      {state.theme.intViewportWidth > 1100 ?
        <>
          <LinkBar>
            <LogoContainer link="/" source={logoImage} widthValue="200px" heightValue="auto"/>
            <LogoContainer link="https://secure.abcbaltimore.org/buildbaltimoregala" source={galaimage} widthValue="315px" heightValue="auto"/>
            <RightLinks>  
              <LinkBarLink link="/about-us">ABOUT US</LinkBarLink>
              <LinkBarLink link="/find-a-contractor">FIND A CONTRACTOR</LinkBarLink>
              <span onClick={() => toggleNews()}>MEDIA</span>
              <IconContainer>
                <CalendarIcon onClick={() => toggleCalendar()}>
                  <IconImage src={calIcon} alt="ABC Events Calendar"/>
                </CalendarIcon>
              </IconContainer> 
            </RightLinks>
          </LinkBar>
          <GridWrapper>
            {handleColumn('membership')}
            {handleColumn('events')}
            {handleColumn('management')}
            {handleColumn('safety')}
            {handleColumn('members')}
          </GridWrapper>
          <DescriptionContainer>
            <Description>
              Associated Builders and Contractors of Greater Baltimore is the <strong>largest
              organization in Maryland</strong> to represent the commercial construction industry.<br/>
              Our 650  members represent the leading general contractors and specialty
              contractors in the region.
            </Description>
            <Rule className="red short" />
          </DescriptionContainer>
          <QuoteContainer>
            <QuoteBlurContainer>
              <QuoteCarousel quoteArray={quotes} heading="What the Industry is Saying About ABC Baltimore" />
            </QuoteBlurContainer>
          </QuoteContainer>
          <InfoWrapper>
            <h2><strong>ABC by the Numbers</strong></h2>
            <InfographicContainer>
              <InfoColumnLeft>
                <img src={info1} alt="ABC member total 640" width="75%" height="77%" />
              </InfoColumnLeft>
              <InfoColumnRight>
                <img src={info2} alt="ABC member total 640" width="75%" />

                <img src={info3} alt="ABC member total 640" width="85%" />
              </InfoColumnRight>
            </InfographicContainer>
          </InfoWrapper>
          <Rule />
        </>
      :
        <>
          {state.theme.isHamburgerOpen ? null : <Header style="alt"/>}
          <GridWrapper>
            {handleColumn('membership')}
            {handleColumn('events')}
            {handleColumn('management')}
            {handleColumn('safety')}
            {handleColumn('political')}
            {handleColumn('members')}
          </GridWrapper>
        </>
      }
    </Wrapper>
  )

} 

export default connect(HomePage);