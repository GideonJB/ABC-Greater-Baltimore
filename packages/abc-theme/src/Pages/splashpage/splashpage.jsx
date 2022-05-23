import { connect } from 'frontity';
import React, { useEffect } from 'react';
import dayjs from 'dayjs';

import { myunescape } from "../../utils/utility-functions"

import LogoContainer from '../../components/logo-container/logo-container.component';
import SideMenu from "../../components/side-menu/side-menu.component";

import cealLogo from "../../static/images/cea_logo.svg";
import building from "../../static/images/building.jpg";
import safety from "../../static/images/safety-square.jpg"
import networking from "../../static/images/network-square.jpg"

import {  Wrapper,
          GridWrapper,
          Column,
          MenuContainer,
          GradientDiv,
          ItemTitle,
          ItemList,
          MembershipBackground,
          MembershipItemsContainer,
          ManagementBackground,
          ManagementItemsContainer,
          PoliticalBackground,
          PoliticalItemsContainer,
          ApprenticeshipBackground,
          ApprenticeshipItemsContainer,
          EventsBackground,
          EventsItemsContainer,
          SafetyBackground,
          SafetyItemsContainer,
          MembersBackground,
          MembersItemsContainer,
          CardHeading,
          ListItem,
          HorizontalLine,
          GrowContainer,
          Break,
          MobileBreak,
          EventListItem,
          EventListDate,
          DescriptionContainer,
          Description,
          TaglineContainer,
          UpcomingTagline,
          TagFlex,
          TrainingWrapper,
          TrainingContainer,
          TrainingColumn,
          ListMap,
          Tagline,
          UpcomingContainer,
          LogoWrapper,
          Rule,
          Banner,
          ListContainer,
          TitleContainer,
          EventLinkContainer,
        } from './splashpage.styles';
import { BlogTitleContainer } from '../../components/news-bar/news-bar.styles';

const SplashPage = ({ state, actions }) => {

  useEffect (() => {
    if(state.router.link === "/"){
      actions.theme.closeSubMenu(false);
      actions.theme.menuExpansion("");
    }
    
  }, []);

  const handleScroll = () => {
    state.theme.isHamburgerOpen = true
  }

  const menuExpand = (name) => {
    console.log("click!");
    state.theme.expandedMenu !== name ? 
    actions.theme.menuExpansion(name) :
    actions.theme.menuExpansion("");
    console.log(state.theme.expandedMenu);
  }

  const preventBubble = (e) => {
    e.stopPropagation();
    state.theme.isHamburgerOpen = false;
  }

  const handleLogout = () => {
    state.theme.token = false;
    localStorage.removeItem('user');
  }

  const mappedList = (category, range="") => {
    if(state.theme.eventsCalendar.length > 0){
      const output = state.theme.eventsCalendar.map(event => {       
        if (!range && event.categories[0] && event.categories.some(cat => cat.name.includes(category))) {  
          return (
            <>
            <EventListItem>
                <a target="_blank" href={event.url}>
                <EventListDate>{dayjs(`${event.start_date}`).format('M/D')} - </EventListDate>
                {myunescape(event.title)}</a>
            </EventListItem>
            </>
          )
        } else if (range === "opposite" && event.categories.every(cat => !category.includes(cat.name)) || !event.categories[0]) {
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
      return output.filter(el => el !== undefined).slice(0,3);
    }  
  }
  

  return (
    <>
      {/* <MobileColumn onScroll={() => handleScroll()} 
                    className={!state.theme.isHamburgerOpen && state.theme.intViewportWidth < 1001 && state.router.link === "/"  ? "visible" : ""}>
        <SplashTitleContainer>
          <SplashTitle>Your <strong>Sucess</strong> Is Our <strong>Mission</strong></SplashTitle>
          <Arrow onClick={() => handleScroll()}>&#x229A;</Arrow>
        </SplashTitleContainer>
        <MobileColumnA />
        <MobileColumnA />
      </MobileColumn> */}
      <Wrapper>
        {/* <SideMenu style="alt"></SideMenu> */}
        <GridWrapper>
            {/* <Overlay width="2400" height="2400" viewBox="0 0 24 24">
              <path d="M24 13.616v-3.232l-2.869-1.02c-.198-.687-.472-1.342-.811-1.955l1.308-2.751-2.285-2.285-2.751 1.307c-.613-.339-1.269-.613-1.955-.811l-1.021-2.869h-3.232l-1.021 2.869c-.686.198-1.342.471-1.955.811l-2.751-1.308-2.285 2.285 1.308 2.752c-.339.613-.614 1.268-.811 1.955l-2.869 1.02v3.232l2.869 1.02c.197.687.472 1.342.811 1.955l-1.308 2.751 2.285 2.286 2.751-1.308c.613.339 1.269.613 1.955.811l1.021 2.869h3.232l1.021-2.869c.687-.198 1.342-.472 1.955-.811l2.751 1.308 2.285-2.286-1.308-2.751c.339-.613.613-1.268.811-1.955l2.869-1.02zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/><path d="M24 13.616v-3.232l-2.869-1.02c-.198-.687-.472-1.342-.811-1.955l1.308-2.751-2.285-2.285-2.751 1.307c-.613-.339-1.269-.613-1.955-.811l-1.021-2.869h-3.232l-1.021 2.869c-.686.198-1.342.471-1.955.811l-2.751-1.308-2.285 2.285 1.308 2.752c-.339.613-.614 1.268-.811 1.955l-2.869 1.02v3.232l2.869 1.02c.197.687.472 1.342.811 1.955l-1.308 2.751 2.285 2.286 2.751-1.308c.613.339 1.269.613 1.955.811l1.021 2.869h3.232l1.021-2.869c.687-.198 1.342-.472 1.955-.811l2.751 1.308 2.285-2.286-1.308-2.751c.339-.613.613-1.268.811-1.955l2.869-1.02zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
            </Overlay> */}
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
                  <ListItem onClick={preventBubble} link="/resource">Resources</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/peer-groups">Peer Groups</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/general-contractors">General Contractors</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/specialty-contractors">Specialty Contractors</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/facility-rental">Facility Rental</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/join-abc">Join ABC</ListItem><br /><br />
                </ItemList>
              </MembershipItemsContainer>
            </MenuContainer>
          </Column>
          
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
                  <ListItem onClick={preventBubble} link="https://awards.abcbaltimore.org">Excellence in Construction</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="/pro-sponsorship">PRO Sponsorship</ListItem><br /><br />
                </ItemList>
              </EventsItemsContainer>
            </MenuContainer>
          </Column>

          {/* <Column onClick={() => menuExpand("apprenticeship")}
            className={state.theme.expandedMenu === "apprenticeship" ? "expanded" : ""}>
            <MenuContainer className={state.theme.expandedMenu === "apprenticeship" ? "expanded bordered" : "bordered"}>
              <GrowContainer>
                <ApprenticeshipBackground className="grow" />
              </GrowContainer>
              <GradientDiv />
              <CardHeading>Apprenticeship</CardHeading>
              <ApprenticeshipItemsContainer>
                <ItemList>
                  <ItemTitle onClick={preventBubble} link="/apprenticeship">Apprenticeship</ItemTitle>
                  <HorizontalLine />
                  <ListItem onClick={preventBubble} link="/apprenticeship-application">Apprenticeship Application</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="http://constructioneducationacademy.org/">Daytime Trade School</ListItem><br /><br />
                </ItemList>
              </ApprenticeshipItemsContainer>
            </MenuContainer>
          </Column> */}

          <Column onClick={() => menuExpand("management")}
            className={state.theme.expandedMenu === "management" ? "expanded" : ""}>
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
                    {/* <ListItem onClick={preventBubble} link="/legal-regulatory">Legal & Regulatory</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/blueprint-reading">Blueprint Reading</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/academies">Academies</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/operations">Operations</ListItem><br /><br /> */}
                    <ListItem onClick={preventBubble} link="/apprenticeship">Apprenticeship</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/management-education">Management Education</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/craft-courses">Craft Courses</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/continuing-education">Continuing Education</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/pdp">Professional Development</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="/task-training">Task Training</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="http://projectjumpstarttraining.org/">Project JumpStart</ListItem><br /><br />
                    <ListItem onClick={preventBubble} link="http://constructioneducationacademy.org/">Daytime Trade School</ListItem><br /><br />
                    {state.theme.intViewportWidth > 1001
                    ?
                    <LogoWrapper>
                      <LogoContainer source={cealLogo} 
                        altText="construction education academy logo"
                        widthValue="125px"
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
                  <ListItem onClick={preventBubble} link="/new-hire">New Hire Orientation</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="http://www.abcstep.org">STEP</ListItem><br /><br />
                  <ListItem onClick={preventBubble} link="https://events.abcbaltimore.org/events/category/safety/">Safety Training</ListItem><br /><br />
                </ItemList>
              </SafetyItemsContainer>
            </MenuContainer>
          </Column>
          
          {state.theme.intViewportWidth > 1001
          ?
          <>
            <Column onClick={() => menuExpand("members")}
              className={state.theme.expandedMenu === "members" ? "expanded" : ""}>
              <MenuContainer className={state.theme.expandedMenu === "members" ? "expanded bordered" : "bordered"}>
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
          </>
          :
            null
          }
          {state.theme.intViewportWidth < 1001
            ?
            <>

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

              <Column onClick={() => menuExpand("members")}
                className={state.theme.expandedMenu === "members" ? "expanded" : ""}>
                <MenuContainer className={state.theme.expandedMenu === "members" ? "expanded bordered" : "bordered"}>
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
            </>
            :
            null
          }
        </GridWrapper>
        {state.theme.intViewportWidth < 1001
          ?
            null
          :
            <>
              <DescriptionContainer>
                <Description>
                  Associated Builders and Contractors of Greater Baltimore is the largest
                  organization in Maryland to represent the commercial construction industry.
                  Our 650  members represent the leading general contractors and specialty
                  contractors in the region.
                </Description>
              </DescriptionContainer>
              <TaglineContainer>
                <UpcomingContainer>
                  <UpcomingTagline>Upcoming Events</UpcomingTagline>
                </UpcomingContainer>
                <TagFlex>
                <Tagline><em>Connect to Opportunity</em></Tagline>
                <Tagline><em>Gain a Competetive Advantage</em></Tagline>
                  <Tagline><em>Protect Your Interests</em></Tagline>
                </TagFlex>
              </TaglineContainer>
              <TrainingWrapper>
                <TrainingContainer>
                  <TrainingColumn className="column1">
                    <TitleContainer>
                      <Banner background={networking}/>
                      <h4>Networking</h4>
                    </TitleContainer>
                    <ListContainer>
                      <ListMap>
                        {mappedList("Networking")}
                      </ListMap>
                    </ListContainer>
                    <EventLinkContainer>
                      <p><a target="_blank"
                          href="https://events.abcbaltimore.org/events/category/networking/">
                            All Networking Events
                      </a></p>
                    </EventLinkContainer>
                  </TrainingColumn>
                  <TrainingColumn className="column2">
                    <TitleContainer>
                      <Banner background={safety}/>
                      <h4>Safety Training</h4>
                    </TitleContainer>
                    <ListContainer>
                      <ListMap>
                        {mappedList("Safety")}
                      </ListMap>
                    </ListContainer>
                    <EventLinkContainer>
                      <p><a target="_blank"
                          href="https://events.abcbaltimore.org/events/category/safety/">
                            All Safety Classes
                      </a></p>
                    </EventLinkContainer>
                  </TrainingColumn>
                  <TrainingColumn className="column3">
                    <TitleContainer>
                      <Banner background={building}/>
                      <h4>Education</h4>
                    </TitleContainer>
                    <ListContainer>
                      <ListMap>
                        {mappedList(["Safety", "Networking"], "opposite")}
                      </ListMap>
                    </ListContainer>
                    <EventLinkContainer>
                      <p><a target="_blank"
                          href="https://events.abcbaltimore.org">
                            All Education Opportunities
                      </a></p>
                    </EventLinkContainer>
                  </TrainingColumn>
                </TrainingContainer>
              </TrainingWrapper>
              <Rule />
            </>
      }
      </Wrapper>
    </>
  )

} 

export default connect(SplashPage);