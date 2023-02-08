import React, { useState, useEffect } from 'react';
import { connect, fetch } from 'frontity'

import Page from "../../components/page/page.component"
import CustomButton from '../../components/custom-button/custom-button.component';

import {
    Category,
    CategoryItems,
    CategoryTitle,
    LeftColumn,
    Name,
    NameBanner,
    ResumeMain,
    RightColumn,
    Rule,
    Wrapper,
} from './apprenticeresumeprintpage.styles';
import { set } from 'react-hook-form';

//
//
// TURN BACK ON THE FETCH FUNCTIONS...(NOT YOUTUBE!)
//
//

const ResumePrint = ({state, actions}) => {

    useEffect( () => {
        console.log("RESUME DATA", state.theme.resumeData);
    }, [])

    const printFormat = () => {
        state.theme.isVisible === "visible" ?  state.theme.isVisible = "hidden" : state.theme.isVisible = "visible";
    }

    const dummyData = {
        input_1: "TEST NAME", input_3: "123-123-1234", input_4: "Test@testemail.com", input_5_1: "Test Street Address",
      input_5_3: "Test City", input_5_4: "Test State", input_5_5: "12345",
      input_6: "Yes",
      input_7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis sit amet sapien non convallis. Cras finibus tempus risus non sagittis. Sed bibendum justo sed sapien sollicitudin convallis. Aliquam est ligula, viverra vitae pharetra sit amet, viverra ut ex. Suspendisse commodo sem eros, semper varius purus hendrerit vitae. Sed sit amet scelerisque risus. Etiam faucibus nibh et sem eleifend facilisis. Donec facilisis fringilla diam et rutrum. Duis tincidunt laoreet nisi eget hendrerit. Suspendisse ligula neque, mollis at odio id, aliquam sollicitudin ex. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris in pharetra diam. Mauris dignissim.",
      input_10: "Traditional High School", input_11: "Test Degree",
      input_12: "Test Institution Name", input_13: "EXTRA CERTIFICATIONS", input_15: "Test Company 1", input_16: "Start Date",
      input_17: "End Date", input_18: "Test Title 1",
      input_19: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis sit amet sapien non convallis. Cras finibus tempus risus non sagittis. Sed bibendum justo sed sapien sollicitudin convallis. Aliquam est ligula, viverra vitae pharetra sit amet, viverra ut ex. Suspendisse commodo sem eros, semper varius purus hendrerit vitae. Sed sit amet scelerisque risus. Etiam faucibus nibh et sem eleifend facilisis. Donec facilisis fringilla diam et rutrum. Duis tincidunt laoreet nisi eget hendrerit. Suspendisse ligula neque, mollis at odio id, aliquam sollicitudin ex. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris in pharetra diam. Mauris dignissim.",
      input_20: "Test Company 2", input_21: "Start Date", input_22: "End Date", input_23: "Test Title 2",
      input_24: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis sit amet sapien non convallis. Cras finibus tempus risus non sagittis. Sed bibendum justo sed sapien sollicitudin convallis. Aliquam est ligula, viverra vitae pharetra sit amet, viverra ut ex. Suspendisse commodo sem eros, semper varius purus hendrerit vitae. Sed sit amet scelerisque risus. Etiam faucibus nibh et sem eleifend facilisis. Donec facilisis fringilla diam et rutrum. Duis tincidunt laoreet nisi eget hendrerit. Suspendisse ligula neque, mollis at odio id, aliquam sollicitudin ex. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris in pharetra diam. Mauris dignissim.",
      input_25: "", input_26_1: "Carpentry", input_26_2: "", input_26_3: "HVAC",
      input_26_4: "", input_26_5: "", input_26_6: "", input_26_7: "",
      input_26_8: "", input_26_9: "", input_26_10: "", input_26_11: "",
      input_26_12: "", input_26_13: "", input_26_14: "", input_26_15: "",
      input_26_16: "", input_26_17: "", input_26_18: "", input_26_19: "",
      input_26_20: "", input_26_21: "", input_26_22: "", input_26_22: "Sprinkler Fitting"
    }

    return(
        <Wrapper className='printable'>
            <CustomButton className='not-printable' onClick={() => printFormat()}>
                {state.theme.isVisible === "visible" ? <span>Click Here to Format Page for Printing</span> : <span>Return to Site</span>}
            </CustomButton><br/>
            <p className='not-printable'>For best results when printing, disable headers and enable background graphics (if desired)</p><br/>
            <NameBanner>
                <Name>{state.theme.resumeData.input_1}</Name>
                <Rule />
            </NameBanner>
            <ResumeMain>
                <LeftColumn>
                    <Category>
                        <CategoryTitle>CONTACT</CategoryTitle>
                        <CategoryItems>
                            <p><strong>Address: </strong>{state.theme.resumeData.input_5_1} {state.theme.resumeData.input_5_3}, {state.theme.resumeData.input_5_4} {state.theme.resumeData.input_5_5}</p>
                            <p><strong>Phone: </strong>{state.theme.resumeData.input_3}</p>
                            <p><strong>Email: </strong>{state.theme.resumeData.input_4}</p>
                        </CategoryItems>
                    </Category>
                    <Category>
                        <CategoryTitle>SKILLS</CategoryTitle>
                        <CategoryItems>
                            <ul>
                                {state.theme.resumeData.input_6 === "Yes" ? <li><strong>Have Access to a Vehicle</strong></li> : ""}
                                {state.theme.resumeData.input_26_1 ? <li>{state.theme.resumeData.input_26_1}</li> : ""}
                                {state.theme.resumeData.input_26_2 ? <li>{state.theme.resumeData.input_26_2}</li> : ""}
                                {state.theme.resumeData.input_26_3 ? <li>{state.theme.resumeData.input_26_3}</li> : ""}
                                {state.theme.resumeData.input_26_4 ? <li>{state.theme.resumeData.input_26_4}</li> : ""}
                                {state.theme.resumeData.input_26_5 ? <li>{state.theme.resumeData.input_26_5}</li> : ""}
                                {state.theme.resumeData.input_26_6 ? <li>{state.theme.resumeData.input_26_6}</li> : ""}
                                {state.theme.resumeData.input_26_7 ? <li>{state.theme.resumeData.input_26_7}</li> : ""}
                                {state.theme.resumeData.input_26_8 ? <li>{state.theme.resumeData.input_26_8}</li> : ""}
                                {state.theme.resumeData.input_26_9 ? <li>{state.theme.resumeData.input_26_9}</li> : ""}
                                {state.theme.resumeData.input_26_10 ? <li>{state.theme.resumeData.input_26_10}</li> : ""}
                                {state.theme.resumeData.input_26_11 ? <li>{state.theme.resumeData.input_26_11}</li> : ""}
                                {state.theme.resumeData.input_26_12 ? <li>{state.theme.resumeData.input_26_12}</li> : ""}
                                {state.theme.resumeData.input_26_13 ? <li>{state.theme.resumeData.input_26_13}</li> : ""}
                                {state.theme.resumeData.input_26_14 ? <li>{state.theme.resumeData.input_26_14}</li> : ""}
                                {state.theme.resumeData.input_26_15 ? <li>{state.theme.resumeData.input_26_15}</li> : ""}
                                {state.theme.resumeData.input_26_16 ? <li>{state.theme.resumeData.input_26_16}</li> : ""}
                                {state.theme.resumeData.input_26_17 ? <li>{state.theme.resumeData.input_26_17}</li> : ""}
                                {state.theme.resumeData.input_26_18 ? <li>{state.theme.resumeData.input_26_18}</li> : ""}
                                {state.theme.resumeData.input_26_19 ? <li>{state.theme.resumeData.input_26_19}</li> : ""}
                                {state.theme.resumeData.input_26_20 ? <li>{state.theme.resumeData.input_26_20}</li> : ""}
                                {state.theme.resumeData.input_26_21 ? <li>{state.theme.resumeData.input_26_21}</li> : ""}
                                {state.theme.resumeData.input_26_22 ? <li>{state.theme.resumeData.input_26_22}</li> : ""}
                                {state.theme.resumeData.input_26_23 ? <li>{state.theme.resumeData.input_26_23}</li> : ""}
                                {state.theme.resumeData.input_26_24 ? <li>{state.theme.resumeData.input_26_24}</li> : ""}
                                {state.theme.resumeData.input_13 ? <li><strong>{state.theme.resumeData.input_13}</strong></li> : ""}
                            </ul>
                        </CategoryItems>
                    </Category>
                    <Category>
                        <CategoryTitle>EDUCATION</CategoryTitle>
                        <CategoryItems>
                            <p><strong>{state.theme.resumeData.input_10}</strong><br/>
                                <strong>{state.theme.resumeData.input_12}</strong><br/>
                                {state.theme.resumeData.input_11}</p>
                        </CategoryItems>
                    </Category>
                </LeftColumn>
                <RightColumn>
                    <Category>
                        <CategoryTitle>PROFESSIONAL SUMMARY</CategoryTitle>
                        <CategoryItems>
                            <p>{state.theme.resumeData.input_7}</p>
                        </CategoryItems>
                    </Category>
                        <CategoryTitle>WORK HISTORY</CategoryTitle>
                        <CategoryItems>
                            <p>
                                <strong>{state.theme.resumeData.input_18} </strong>{state.theme.resumeData.input_16} to {state.theme.resumeData.input_17}<br/>
                                <strong>{state.theme.resumeData.input_15}</strong>
                            </p>
                            <ul>
                                <li>{state.theme.resumeData.input_19}</li>
                            </ul>
                            <br/><br/>
                            <p>
                                <strong>{state.theme.resumeData.input_23} </strong>{state.theme.resumeData.input_21} to {state.theme.resumeData.input_22}<br/>
                                <strong>{state.theme.resumeData.input_20}</strong>
                            </p>
                            <ul>
                                <li>{state.theme.resumeData.input_24}</li>
                            </ul>
                        </CategoryItems>
                </RightColumn>
            </ResumeMain>
        </Wrapper>
    )

};

export default connect(ResumePrint);