import { connect } from "frontity";
import React from "react";

import Page from "../../components/page/page.component";

import {
  Row,
  Column,
  Overlay,
  Wrapper,
  SectionTitle,
  Name,
  Title,
  Description,
  StaffWrap,
} from "./aboutuspage.styles";

const staffList = require("../../static/StaffMemberData.js");
const boardList = require("../../static/BoardMemberData.js");

const AboutUsPage = ({ state, actions }) => {
  const columnNumber = 3;
  const staffListSplit = staffList.default
    .map((e, i) => {
      return i % columnNumber === 0
        ? staffList.default.slice(i, i + columnNumber)
        : null;
    })
    .filter((e) => {
      return e;
    });
  const boardListSplit = boardList.default
    .map((e, i) => {
      return i % columnNumber === 0
        ? boardList.default.slice(i, i + columnNumber)
        : null;
    })
    .filter((e) => {
      return e;
    });

  return (
    <Wrapper>
      <Page />
      <StaffWrap>
        <SectionTitle>ABC Board Members</SectionTitle>
        {boardListSplit.map((arrays, index) => {
          return (
            <Row key={index}>
              {arrays.map((data, index) => {
                const { Image } = data;
                return (
                  <a href={`mailto:${data.email}`} target="_blank">
                    <Column key={data.id} imageBackground={Image.default}>
                      <Overlay>
                        <Name>{data.Name}</Name>
                        <Title>{data.Title}</Title>
                        <Description>{data.Description}</Description>
                      </Overlay>
                    </Column>
                  </a>
                );
              })}
            </Row>
          );
        })}
        <br />
        <br />
        <SectionTitle id="#">ABC Staff</SectionTitle>
        {staffListSplit.map((arrays, index) => {
          return (
            <Row key={Math.random()}>
              {arrays.map((data, index) => {
                const { Image } = data;
                return (
                  <a href={`mailto:${data.email}`} target="_blank">
                    <Column key={data.id} imageBackground={Image.default}>
                      <Overlay>
                        <Name>{data.Name}</Name>
                        <Title>{data.Title}</Title>
                        {/* <Description>{data.Description}</Description> */}
                      </Overlay>
                    </Column>
                  </a>
                );
              })}
            </Row>
          );
        })}
      </StaffWrap>
    </Wrapper>
  );
};

export default connect(AboutUsPage);
