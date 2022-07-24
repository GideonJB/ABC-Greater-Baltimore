import React from 'react';
import { CodeWrapper,
      CompanyNameWrapper,
      ContactWrapper,
      GridWrapper,
      ListWrapper,
      MemberHeading,
      AwardWrapper,
      StepHeading } from './memberlist.styles'

import steplogo from "../../static/images/abc-step-new.png"
import eiclogo from "../../static/images/eic-winner-icon.png"

export const MemberList = ({ memberList = [] }) => {

  if (memberList.length ===0) {
    return(
      <ListWrapper>
        <p>NO MEMBERS MATCH YOUR SEARCH CRITERIA</p>
      </ListWrapper>
      
    )
  }else{
  return (
    <>
      { memberList.map((data, index) => {
        if (data) {
          return (
            <ListWrapper className="" key={data.Company}>
              <GridWrapper>
                <CompanyNameWrapper>
                  {data.CoWebsite ? 
                    <a href={`http://${data.CoWebsite}`} target="_blank" rel="noreferrer">
                      <MemberHeading>{data.Company}</MemberHeading>
                      <p>{data.CoWebsite}</p>
                    </a> 
                    :
                    <MemberHeading>{data.Company}</MemberHeading>
                  }
                  <p>{data.CoPhone}</p>
                </CompanyNameWrapper>
                <ContactWrapper>
                  {data.Title !== "" ? <h4>{data.NameTitle}:</h4> : null}
                  <p>{data.NameFull}</p>
                  {data.IndEmailAddress ? 
                    <a href={`mailto:${data.IndEmailAddress}`} target="_blank" rel="noreferrer">
                      <p>{data.IndEmailAddress}</p>
                    </a>
                  :
                    <p>{data.IndEmailAddress}</p>
                  }
                  
                  <p>{data['Mail-Address1']} &nbsp;&nbsp; {data['Mail-Address2']}</p>
                  <p>{data['Mail-City']}, {data['Mail-State']} {data['Mail-Zip']}</p>
                  <br/>
                  {data.mWBE === "TRUE" && <p><strong>M/WBE</strong></p>}
                </ContactWrapper>
              </GridWrapper>
              <AwardWrapper>
                {data.STEP && data.STEP.includes("PLATINUM") && <div><img src={steplogo} width="150px" height="auto" /><StepHeading>PLATINUM</StepHeading></div>}
                {data.STEP && data.STEP.includes("DIAMOND") && <div><img src={steplogo} width="150px" height="auto" /><StepHeading>DIAMOND</StepHeading></div>}
                {data.STEP && data.STEP.includes("GOLD") && <div><img src={steplogo} width="150px" height="auto" /><StepHeading>GOLD</StepHeading></div>}
                {data.STEP && data.STEP.includes("SILVER") && <div><img src={steplogo} width="150px" height="auto" /><StepHeading>SILVER</StepHeading></div>}
                {data.STEP && data.STEP.includes("BRONZE") && <div><img src={steplogo} width="150px" height="auto" /><StepHeading>BRONZE</StepHeading></div>}
                <br />
                {data['2022 ABC Construction Award Winner'] && <img src={eiclogo} width="150px" height="auto" />}
              </AwardWrapper>
              <div>
                {data.WorkDesc !== "" ? <p>{data.WorkDesc}</p> : null}
              </div>
              <br />
              <CodeWrapper>
                {data['TradeCode 1'] ? <p>&bull; <strong>{data['TradeCode 1']}&nbsp;</strong> {data['TradeDesc 1']}&nbsp;</p> : null}
                {data['TradeCode 2'] ? <p>&bull; <strong>{data['TradeCode 2']}&nbsp;</strong> {data['TradeDesc 2']}&nbsp;</p> : null}
                {data['TradeCode 3'] ? <p>&bull; <strong>{data['TradeCode 3']}&nbsp;</strong> {data['TradeDesc 3']}&nbsp;</p> : null}
                {data['TradeCode 4'] ? <p>&bull; <strong>{data['TradeCode 4']}&nbsp;</strong> {data['TradeDesc 4']}&nbsp;</p> : null}
                {data['TradeCode 5'] ? <p>&bull; <strong>{data['TradeCode 5']}&nbsp;</strong>  {data['TradeDesc 5']}&nbsp;</p> : null}
                {data['TradeCode 6'] ? <p>&bull; <strong>{data['TradeCode 6']}&nbsp;</strong>  {data['TradeDesc 6']}&nbsp;</p> : null}
                {data['TradeCode 7'] ? <p>&bull; <strong>{data['TradeCode 7']}&nbsp;</strong>  {data['TradeDesc 7']}&nbsp;</p> : null}
                {data['TradeCode 8'] ? <p>&bull; <strong>{data['TradeCode 8']}&nbsp;</strong>  {data['TradeDesc 8']}&nbsp;</p> : null}
                {data['TradeCode 9'] ? <p>&bull; <strong>{data['TradeCode 9']}&nbsp;</strong>  {data['TradeDesc 9']}&nbsp;</p> : null}
                {data['TradeCode 10'] ? <p>&bull; <strong>{data['TradeCode 10']}&nbsp;</strong>  {data['TradeDesc 10']}&nbsp;</p> : null}
                {data['TradeCode 11'] ? <p>&bull; <strong>{data['TradeCode 11']}&nbsp;</strong>  {data['TradeDesc 11']}&nbsp;</p> : null}
                {data['TradeCode 13'] ? <p>&bull; <strong>{data['TradeCode 13']}&nbsp;</strong>  {data['TradeDesc 13']}&nbsp;</p> : null}
                {data['TradeCode 14'] ? <p>&bull; <strong>{data['TradeCode 14']}&nbsp;</strong>  {data['TradeDesc 14']}&nbsp;</p> : null}
                {data['TradeCode 15'] ? <p>&bull; <strong>{data['TradeCode 15']}&nbsp;</strong>  {data['TradeDesc 15']}&nbsp;</p> : null}
                {data['TradeCode 16'] ? <p>&bull; <strong>{data['TradeCode 16']}&nbsp;</strong>  {data['TradeDesc 16']}&nbsp;</p> : null}
                {data['TradeCode 17'] ? <p>&bull; <strong>{data['TradeCode 17']}&nbsp;</strong>  {data['TradeDesc 17']}&nbsp;</p> : null}
                {data['TradeCode 18'] ? <p>&bull; <strong>{data['TradeCode 18']}&nbsp;</strong>  {data['TradeDesc 18']}&nbsp;</p> : null}
                {data['TradeCode 19'] ? <p>&bull; <strong>{data['TradeCode 19']}&nbsp;</strong>  {data['TradeDesc 19']}&nbsp;</p> : null}
                {data['TradeCode 20'] ? <p>&bull; <strong>{data['TradeCode 20']}&nbsp;</strong>  {data['TradeDesc 20']}&nbsp;</p> : null}
                {data['TradeCode 21'] ? <p>&bull; <strong>{data['TradeCode 21']}&nbsp;</strong>  {data['TradeDesc 21']}&nbsp;</p> : null}
                {data['TradeCode 22'] ? <p>&bull; <strong>{data['TradeCode 22']}&nbsp;</strong>  {data['TradeDesc 22']}&nbsp;</p> : null}
                {data['TradeCode 23'] ? <p>&bull; <strong>{data['TradeCode 23']}&nbsp;</strong>  {data['TradeDesc 23']}&nbsp;</p> : null}
                {data['TradeCode 24'] ? <p>&bull; <strong>{data['TradeCode 24']}&nbsp;</strong>  {data['TradeDesc 24']}&nbsp;</p> : null}
              </CodeWrapper>
              
            </ListWrapper>
          )
        }
        return null
      })}
    </>
  )};
}

