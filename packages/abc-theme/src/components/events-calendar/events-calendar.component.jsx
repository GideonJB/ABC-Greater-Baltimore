import React, { useEffect } from 'react'
import { connect, fetch } from "frontity"
import dayjs from 'dayjs'

import { myunescape } from "../../utils/utility-functions"

import clock from "../../static/images/clock.png"

import {
  CalendarContainer,
  CloseButton,
  EventContainer,
  FeaturedImage,
  DateContainer,
  Day,
  Month,
  Date,
  InfoContainer,
  EventTitle,
  TimeContainer,
  FullSiteLink,
  CalendarTitle,
} from './events-calendar.styles'



const EventsCalendar = ({ state, actions }) => {

  const handleClick = () => {
    state.theme.isCalendarOpen = false;
  }

  return(
    <>
      
      <CalendarContainer className={state.theme.isCalendarOpen ? "open" : "close"}>
        <CloseButton onClick={() => handleClick()}>&#x2716;</CloseButton>
        <CalendarTitle>&nbsp;Events & Training Calendar</CalendarTitle>
        {state.theme.eventsCalendar.length > 0 ?
          
          state.theme.eventsCalendar.map((items) => {

          return (
            <>
            {items.categories[0] && items.categories.some(cat => cat.name === 'unlisted') ?

            null
            :
            <div key={items.id}>
            {items.image ?
              
                <FeaturedImage>
                    <a target="_blank" href={items.url}>
                      <img src={items.image.url} />
                    </a>
                </FeaturedImage>
            
            :
            <EventContainer >
              
              {/* <DayContainer>
                
              </DayContainer> */}
              <DateContainer>
                <Day>{dayjs(`${items.start_date}`).format('ddd').toUpperCase()}</Day>
                <Month>{dayjs(`${items.start_date}`).format('MMM')}</Month>
                <Date>{dayjs(`${items.start_date}`).format('D')}</Date>
              </DateContainer>
              <InfoContainer>
                <EventTitle target="_blank" 
                            href={items.url}>{myunescape(items.title)}
                </EventTitle>
                <TimeContainer>
                  <img src={clock} width="12px" height="12px"></img>
                  <p>
                    {dayjs(`${items.start_date}`).format('ha')}-
                    {dayjs(`${items.end_date}`).format('ha')}
                  </p>
                  {/* <p>{myunescape(items.description).split('@ ').join('').split(' ').slice(1,20).join(' ')}...</p> */}
                  {/* <div dangerouslySetInnerHTML={{ __html: items.description }} /> */}
                </TimeContainer>
              </InfoContainer>
            </EventContainer>
            }
            </div>
          }</>)
        })
        :
        null
        }
        <FullSiteLink target="_blank" href="https://events.abcbaltimore.org">
          FULL EVENTS CALENDAR
        </FullSiteLink>
      </CalendarContainer>
    </>
  )
};

export default connect(EventsCalendar);