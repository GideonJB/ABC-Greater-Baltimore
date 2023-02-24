import { connect } from 'frontity';
import Link from "@frontity/components/link"
import React from 'react';
import dayjs from 'dayjs'

import { myunescape } from "../../utils/utility-functions"
import LogoContainer from "../../components/logo-container/logo-container.component"
import Spinner from '../../components/spinner/spinner.component';

import abcCares from "../../static/images/ABC_Cares_Crop.png"

import {CalendarWrapper,
        DateContainer,
        Date,
        Day,
        EventContainer,
        EventList,
        EventTitle,
        CallToAction,
        CaresInfo,
        CaresPageWrapper,
        CaresTile,
        CaresTileWrapper,
        FeaturedContainer,
        FeaturedImage,
        ImageList,
        InfoContainer,
        LogoWrapper,
        Month,
        TimeContainer,
        
      } from "./abccarespage.styles"

    

const ABCCaresPage = ({ state, actions }) => {

  const mappedCaresList = () => {
    console.log("MAPPED LIST", state.theme.caresPosts)
    const list = state.theme.caresPosts.map((items) => {
      if(items.featured_image_urls.large){
        return (
          <div key={items.id}>
              <Link link={`cares-blog/${items.id}`}>
                <CaresTile>
                  <FeaturedContainer >
                      <img src={items.featured_image_urls.large[0]} />
                  </FeaturedContainer>
                  <CaresInfo>
                    <h4>{items.title.rendered}</h4>
                    <p>{dayjs(`${items.date}`).format('M/DD/YYYY').toUpperCase()}</p>
                  </CaresInfo>
                </CaresTile>
              </Link>
          </div>
        )
      }
    })
    console.log("list", list);
    return list.filter(el => el !== undefined);
  }

  return (
    <>
      <CaresPageWrapper>
        <LogoWrapper>
          <LogoContainer className="centered" source={abcCares} alt="ABC Logo" widthValue="400px" heightValue="auto" link="/" margin="0" />
        </LogoWrapper>
        <h4>Together, We are Building a Greater Baltimore One Project, One Community, and One Career at a Time</h4>
        <br/>
        <CallToAction><strong>GOT GOOD DEEDS?</strong> We want to hear about them! Send us a brief write-up and photos of the charitable event / project and we will include in future magazines and on our ABCCares website. Please send your material to <a target="_blank" href="mailto:mpusateri@abcbaltimore.org">Mandi Pusateri</a></CallToAction>
        <ImageList>
          {state.theme.caresPosts && state.theme.caresPosts.length > 0 ?
            <CaresTileWrapper>
              {mappedCaresList()}
            </CaresTileWrapper>
            :
              <Spinner />
          }
        </ImageList>
      <CalendarWrapper>
      {/* {state.theme.caresPosts && state.theme.caresPosts.length > 0 ?
          
        state.theme.caresPosts.map((items) => {
          {items.categories[0]? console.log("NAME", items.categories[0].name): null }
          {items.categories[0] && items.categories[0].name === 'unlisted' ? null : console.log(items)}
          return (
          <>
          {items.categories[0] && items.categories.some(cat => cat.name === 'unlisted' ) ?
            
            null
            :
            
            <EventList key={items.id}>
              <a target="_blank" href={items.url}>
                <EventContainer>
                  <DateContainer>
                    <Day>{dayjs(`${items.start_date}`).format('ddd').toUpperCase()}</Day>
                    <Month>{dayjs(`${items.start_date}`).format('MMM')}</Month>
                    <Date>{dayjs(`${items.start_date}`).format('D')}</Date>
                  </DateContainer>
                  {items.image ?

                    <FeaturedImage>

                      <img src={items.image.url} />

                    </FeaturedImage>

                    :
                    null
                  }
                  <InfoContainer>
                    <EventTitle>
                      {myunescape(items.title)}
                    </EventTitle>
                    <TimeContainer>
                      <img src={clock} width="12px" height="12px"></img>
                      <p>
                        {dayjs(`${items.start_date}`).format('ha')}-
                        {dayjs(`${items.end_date}`).format('ha')}
                      </p>
                    </TimeContainer>
                  </InfoContainer>
                </EventContainer>
              </a>
            </EventList>
            }</>)         
        })
        :
        null
        } */}
      </CalendarWrapper>    
    </CaresPageWrapper>
    </>
  );
}

export default connect(ABCCaresPage);