import { connect } from "frontity";
import Link from "@frontity/components/link";
import React from "react";
import dayjs from "dayjs";

import { myunescape } from "../../utils/utility-functions";

import Page from "../../components/page/page.component";

import clock from "../../static/images/clock.png";
import {
  FeaturedContainer,
  ImageList,
  EventsPageWrapper,
  FeaturedImage,
  CalendarWrapper,
  EventList,
  EventContainer,
  DateContainer,
  Day,
  Month,
  Date,
  InfoContainer,
  EventTitle,
  TimeContainer,
} from "./eventspage.styles";

const EventsPage = ({ state, actions }) => {
  const mappedEventList = () => {
    // console.log("MAPPING")
    const list = state.theme.eventsCalendar.map((items) => {
      if (items.image) {
        return (
          <div key={`{Math.random()} ${items.id}`}>
            <FeaturedContainer>
              <a target="_blank" href={items.url}>
                <img src={items.image.url} />
              </a>
            </FeaturedContainer>
          </div>
        );
      }
    });
    // console.log("list", list);
    return list.filter((el) => el !== undefined).slice(0, 2);
  };

  return (
    <>
      <Page />
      <EventsPageWrapper>
        <ImageList>
          {state.theme.eventsCalendar &&
          state.theme.eventsCalendar.length > 0 ? (
            <>{mappedEventList()}</>
          ) : null}
        </ImageList>
        <CalendarWrapper>
          <h3>Upcoming Events and Training</h3>
          {state.theme.eventsCalendar && state.theme.eventsCalendar.length > 0
            ? state.theme.eventsCalendar.map((items) => {
                // {items.categories[0]? console.log("NAME", items.categories[0].name): null }
                // {items.categories[0] && items.categories[0].name === 'unlisted' ? null : console.log(items)}
                return (
                  <>
                    {items.categories[0] &&
                    items.categories.some(
                      (cat) => cat.name === "unlisted"
                    ) ? null : (
                      <EventList key={`{Math.random()} ${items.id}`}>
                        <a target="_blank" href={items.url}>
                          <EventContainer>
                            {/* <DayContainer>
                
              </DayContainer> */}
                            <DateContainer>
                              <Day>
                                {dayjs(`${items.start_date}`)
                                  .format("ddd")
                                  .toUpperCase()}
                              </Day>
                              <Month>
                                {dayjs(`${items.start_date}`).format("MMM")}
                              </Month>
                              <Date>
                                {dayjs(`${items.start_date}`).format("D")}
                              </Date>
                            </DateContainer>
                            {items.image ? (
                              <FeaturedImage>
                                <img src={items.image.url} />
                              </FeaturedImage>
                            ) : null}
                            <InfoContainer>
                              <EventTitle>{myunescape(items.title)}</EventTitle>
                              <TimeContainer>
                                <img
                                  src={clock}
                                  width="12px"
                                  height="12px"
                                ></img>
                                <p>
                                  {dayjs(`${items.start_date}`).format("ha")}-
                                  {dayjs(`${items.end_date}`).format("ha")}
                                </p>
                                {/* <p>{myunescape(items.description).split('@ ').join('').split(' ').slice(1,20).join(' ')}...</p> */}
                                {/* <div dangerouslySetInnerHTML={{ __html: items.description }} /> */}
                              </TimeContainer>
                            </InfoContainer>
                          </EventContainer>
                        </a>
                      </EventList>
                    )}
                  </>
                );
              })
            : null}
        </CalendarWrapper>
      </EventsPageWrapper>
    </>
  );
};

export default connect(EventsPage);
