import React, { useEffect } from "react"

if (typeof window === 'object'){
  window.__WAS_SSR = true
};
import { Head, connect, css, Global, styled } from "frontity"
import Switch from "@frontity/components/switch"
import { useTransition, animated } from "react-spring"

import { eventsFetch, blogFetch, youTubeFetch } from "../utils/events-fetch.js"
import { useCurrentWidth } from '../utils/utility-functions'

import gutenburgStyle from "../styles/gutenburg/style.css"
import gutenburgTheme from "../styles/gutenburg/theme.css"
import adminWelcome from "../styles/stackable/admin_welcome.css"
import editorBlocks from "../styles/stackable/editor_blocks_wp_v5_3.css"
import editorBlocksTwo from "../styles/stackable/editor_blocks.css"
import frontend_blocks from "../styles/stackable/frontend_blocks.css"
import { GlobalStyle } from "./index.styles.js"
import { fullFrameDiv } from "../styles/global-variables.styles.jsx"

import SideMenu from "./side-menu/side-menu.component.jsx"
import Page from "../components/page/page.component.jsx"
import PageBackground from "../components/page-background/page-background.component.jsx"
import Header from "./header/header.component.jsx"
import HamburgerMenu from "./hamburger-menu/hamburger-menu.component.jsx"
import EventsCalendar from "./events-calendar/events-calendar.component.jsx"
import NewsBar from "./news-bar/news-bar.component.jsx"
import Footer from "./footer/footer.component.jsx"
import SearchPage from "../Pages/searchpage/searchpage.jsx"
import SplashPage from "../Pages/splashpage/splashpage.jsx"
import RegistrationPage from "../Pages/registrationpage/registrationpage.jsx"
import EventsPage from "../Pages/eventspage/eventspage.jsx"
import ErrorPage from "../Pages/errorpage/errorpage.jsx"
import LoginPage from "../Pages/loginpage/loginpage.jsx"
import InvoicePage from "../Pages/invoicepage/invoicepage.jsx"
import PdpPage from "../Pages/pdppage/pdppage.jsx"
import ApprenticeAppPage from "../Pages/apprenticeapppage/apprenticeapppage.jsx"
import LogicScholarshipPage from "../Pages/logicscholarshippage/logicscholarshippage.jsx"
import JoinABCPage from "../Pages/joinABCpage/joinABCpage.jsx"
import TaskTrainingPage from "../Pages/tasktrainingpage/tasktrainingpage.jsx"
import FacilityRentalPage from "../Pages/facilityrentalpage/facilityrentalpage.jsx"
import AboutUsPage from "../Pages/aboutuspage/aboutuspage.jsx"
import VirtualHRPage from "../Pages/virtualhrpage/virtualhrpage.jsx"
import BestSponsorPage from "../Pages/bestsponsorpage/bestsponsorpage.jsx"
import CompanyUpdatePage from "../Pages/companyupdatepage/companyupdatepage.jsx"
import Blog from "../components/blog/blog.component.jsx"

import guy from "../static/images/guy.jpg"

const Background = styled.div`
  ${fullFrameDiv}
  z-index: -2;
  background-color: black;
`
const CalendarContainer = styled.div`
  ${fullFrameDiv}
  overflow: hidden;
  pointer-events: none;
  z-index: 5;
`

const NewsContainer = styled.div`
  ${fullFrameDiv}
  overflow: hidden;
  pointer-events: none;
  z-index: 5;
`

const OuterWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
 
`

const GridWrapper = styled.div`
  display: flex;
  width: 100%;
  pointer-events: none;

  @media screen and (max-width: 800px){
    display: block;

  }

`

const MainTag = styled.main`
  width: 100%;
`

const AnimationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: var(--screen-height);
  overflow-y: auto;
  overflow-X: hidden;
  /* pointer-events: none; */
  /* background-color: hsl(67, 1%, 97%); */

  &.hidden{
    display: none;
  }
`

const SpacingDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    padding-top: 50px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: var(--screen-height);
  overflow: hidden;
  pointer-events: auto;

  /* background-color: hsl(67, 1%, 97%);  */

  &.no-scroll {
    position: fixed;
  }

  @media screen and (max-width: 1100px) {
    
    /* height: var(--screen-height-mobile); */
  }

`

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  overflow: hidden;
  pointer-events: none;
  

  img {
    /* width: 100%; */
    height: 100%;
    object-fit: cover !important;
    opacity: 1;
  }
  /* div {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--colors-active);
    opacity: .4 !important;
  } */
`

const Root = ({ state, actions }) => {

  state.theme.intViewportWidth = useCurrentWidth();


  const data = state.source.get(state.router.link)
  const location = state.router.link

  const membershipIDS = [198, 991, 201, 221, 1133, 200, 1312, 1314, 1451, 435]
  const apprenticeshipIDS = []
  const eventsIDS = [203, 208, 1264, 1290]
  const safetyIDS = [210, 212, 187, 566, 2065]
  const managementIDS = [213, 1303, 1299, 1297, 1301, 1295, 1330, 1544, 1546, 1635, 1633, 1656, 1668, 1640, 2156, 1100, 206, 207, 217, 1255, 1393, 1635, 1661]
  const politicalIDS = [204, 1305, 1209, 1307, 1206]
  const membersIDS = [1741, 222, 932, 199, 2125, 2275]

  const transitions = useTransition(location, {
    from: { opacity: 0,},
    enter: { opacity: 1, height: '100%', "overflow-y": 'scroll', "overflow-x": "hidden", },
    leave: { opacity: 0, display:"none" },
    config: { duration: 500 },
    delay: 500

  });

  //Grabs user from local state to have persistence of login
  useEffect(() => {
    eventsFetch().then(res => actions.theme.setEventsCalendar(res))
    blogFetch().then(res => actions.theme.setBlogPosts(res))
    // youTubeFetch().then(res => actions.theme.setYouTubePosts(res))
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      state.theme.token = loggedInUser;
    }
  }, []);

  //fires various functions on route change
  useEffect(() => {
    const myDiv = document.getElementById('scrolled')
    myDiv.scrollTop= 0;
    state.theme.isLoginMenuVisible = false;
    state.theme.isCalendarOpen = false;
    state.theme.isNewsOpen = false;
    state.theme.isHamburgerOpen = false;
  }, [state.router.link])

  

  return (
    <>
      <Head>
        <title key="title">ABC Greater Baltimore</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta
          name="description"
          content="Workforce Development and Labor Relations"
        />
        {/* <meta
          name="keywords"
          content="saragibby, sara, gibby, who runs the world"
        /> */}

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-RP1V6H0XCH`}
        />

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RP1V6H0XCH');
              `,
          }}
        /> */}
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RP1V6H0XCH');`}
        </script>
      </Head>
      <Global styles={css(gutenburgStyle)} />
      <Global styles={css(gutenburgTheme)} />
      <Global styles={css(adminWelcome)} />
      <Global styles={css(editorBlocks)} />
      <Global styles={css(editorBlocksTwo)} />
      <Global styles={css(frontend_blocks)} />
      <GlobalStyle />
      <Header style={state.router.link !== "/" ? "inner" : "alt"}
              color={state.router.link !== "/" ? "" : "blue"}
      />          
          <ContentWrapper>
            {state.router.link !== "/" ?
            <SideMenu style=""/>
            :
            null
            }
            <MainTag>
            <AnimationWrapper id="scrolled" className="">
            {transitions((props, item) => {
                const dataitem = state.source.get(state.router.link)
                return(
                <animated.div style={props}>
                  <SpacingDiv>
                    <Switch location={item}>
                      <SplashPage when={dataitem.isHome} />
                      <LoginPage when={dataitem.isLoginPage} />
                      <Blog when={state.router.link.includes('blog')}/>
                      <EventsPage when={dataitem.isPage && state.router.link ==='/events/'} />
                      <PdpPage when={dataitem.isPage && state.router.link ==='/pdp/'} />
                      <SearchPage when={dataitem.isPage && state.router.link ==='/find-a-contractor/'}/>
                      <InvoicePage when={dataitem.isPage && state.router.link ==='/pay-invoice/'} />
                      <AboutUsPage when={dataitem.isPage && state.router.link ==='/about-us/'}/>
                      <LogicScholarshipPage when={dataitem.isPage && state.router.link ==='/logic-scholarship/'} />
                      <ApprenticeAppPage when={dataitem.isPage && state.router.link ==='/apprenticeship-application/'} />
                      <JoinABCPage when={dataitem.isPage && state.router.link ==='/join-abc/'} />
                      <VirtualHRPage when={dataitem.isPage && state.router.link ==='/virtual-hr/'} />
                      <BestSponsorPage when={dataitem.isPage && state.router.link ==='/best-sponsorship/'} />
                      <TaskTrainingPage when={dataitem.isPage && state.router.link ==='/task-training/'} />
                      <FacilityRentalPage when={dataitem.isPage && state.router.link ==='/facility-rental/'} />
                      <CompanyUpdatePage when={dataitem.isPage && state.router.link ==='/company-update/'} />
                      <RegistrationPage when={dataitem.isRegistrationPage}/>
                      
                      <Page when={dataitem.isPage} />
                      <ErrorPage when={dataitem.isError} />
                    </Switch>
                    <Footer />
                  </SpacingDiv>
                </animated.div>
            )})}
            <Switch>
              <PageBackground when={data.isPage && membershipIDS.includes(data.id) } membership/>
              <PageBackground when={data.isPage && apprenticeshipIDS.includes(data.id) } apprenticeship/>
              <PageBackground when={data.isPage && eventsIDS.includes(data.id) } events/>
              <PageBackground when={data.isPage && safetyIDS.includes(data.id) } safety/>
              <PageBackground when={data.isPage && managementIDS.includes(data.id) } management/>
              <PageBackground when={data.isPage && politicalIDS.includes(data.id) } political/>
              <PageBackground when={data.isPage && membersIDS.includes(data.id) } members/>
            </Switch>
            </AnimationWrapper>
            </MainTag>
          </ContentWrapper>
        
        
      {/* </GridWrapper> */}
      <CalendarContainer>
        <EventsCalendar />
      </CalendarContainer>
      <NewsContainer>
        <NewsBar />
      </NewsContainer>
      <HamburgerMenu />
    </>
  )
}

export default connect(Root)