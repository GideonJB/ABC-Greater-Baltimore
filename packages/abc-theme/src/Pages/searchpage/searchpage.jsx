import React, { useState, useEffect } from 'react';
import { connect } from "frontity";
import CsvDownload from 'react-json-to-csv'

import Page from "../../components/page/page.component"
import SearchBar from "../../components/searchbar/searchbar.component.jsx" 
import Login from "../../components/login/login.component"
import { MemberList } from '../../components/memberlist/memberlist.component.jsx'
import { Wrapper, InnerWrapper, LoggedOutWrapper, SearchContainer} from "./searchpage.styles"

let collectionMap = require("../../static/ABC_Members_2022_07.json");

const SearchPage = ({state, actions}) => {
  const [input, setInput] = useState('');
  const [memberListDefault, setMemberListDefault] = useState();
  const [memberList, setMemberList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [mWBECheck, setmWBECheck] = useState(false);
  const [downloadList, setDownloadList] = useState([]);
  // const collectionRef = firestore.collection('members').orderBy("Company");

  const toggleMWBE = () => {
    setmWBECheck(!mWBECheck);
  }
  
  const setPage = (currentPage) => {
    setPageNumber(currentPage);
  }

  useEffect(() => {
    setMemberList(collectionMap)
    setMemberListDefault(collectionMap)
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      state.theme.token = loggedInUser;
    }
    
  }, []);

  

  useEffect(() => {
    const updateView = (list) =>{
      setFilteredList(list.filter((item, idx) => (pageNumber-1)*10 <= idx && idx <= ((pageNumber-1)*10)+9));
    }
    if(mWBECheck){
      if (!input) {
        populateDownload(memberList);
      }
      updateView(memberList.filter(item => item.mWBE === 'TRUE'));
    }else {
      updateView(memberList);
    }

    

  }, [pageNumber, memberList, mWBECheck]);

  const populateDownload = (list) => {
    const filteredDownloadList = list.map(item => ({ Company: item.Company, Website: item.CoWebsite, Phone: item.CoPhone, Contact: item.NameFull, Contact_Email: item.IndEmailAddress, Address: item['Mail-Address1'], City: item['Mail-City'], State: item['Mail-State'], Zipcode: item['Mail-Zip'], mWBE: item.mWBE }));
    if(mWBECheck){
      setDownloadList(filteredDownloadList.filter(item => item.mWBE === 'TRUE'));
    }else{
      setDownloadList(filteredDownloadList);
    }
  }
  

  const updateInput = async (input) => {
    setPageNumber(1);
    const filtered = memberListDefault.filter(member => {
      const { 
        Company,
        ['TradeCode 1']: TradeCode1,
        ['TradeCode 2']: TradeCode2,
        ['TradeCode 3']: TradeCode3,
        ['TradeCode 4']: TradeCode4,
        ['TradeCode 5']: TradeCode5,
        ['TradeCode 6']: TradeCode6,
        ['TradeCode 8']: TradeCode8,
        ['TradeCode 9']: TradeCode9,
        ['TradeCode 10']: TradeCode10,
        ['TradeCode 11']: TradeCode11,
        ['TradeCode 12']: TradeCode12,
        ['TradeCode 13']: TradeCode13,
        ['TradeCode 14']: TradeCode14,
        ['TradeCode 15']: TradeCode15,
        ['TradeCode 16']: TradeCode16,
        ['TradeCode 17']: TradeCode17,
        ['TradeCode 18']: TradeCode18,
        ['TradeCode 19']: TradeCode19,
        ['TradeCode 20']: TradeCode20,
        ['TradeCode 21']: TradeCode21,
        ['TradeCode 22']: TradeCode22,
        ['TradeDesc 1']: TradeDesc1,
        ['TradeDesc 2']: TradeDesc2,
        ['TradeDesc 3']: TradeDesc3,
        ['TradeDesc 4']: TradeDesc4,
        ['TradeDesc 5']: TradeDesc5,
        ['TradeDesc 6']: TradeDesc6,
        ['TradeDesc 8']: TradeDesc8,
        ['TradeDesc 9']: TradeDesc9,
        ['TradeDesc 10']: TradeDesc10,
        ['TradeDesc 11']: TradeDesc11,
        ['TradeDesc 12']: TradeDesc12,
        ['TradeDesc 13']: TradeDesc13,
        ['TradeDesc 14']: TradeDesc14,
        ['TradeDesc 15']: TradeDesc15,
        ['TradeDesc 16']: TradeDesc16,
        ['TradeDesc 17']: TradeDesc17,
        ['TradeDesc 18']: TradeDesc18,
        ['TradeDesc 19']: TradeDesc19,
        ['TradeDesc 20']: TradeDesc20,
        ['TradeDesc 21']: TradeDesc21,
        ['TradeDesc 22']: TradeDesc22,
        ['TradeDesc 23']: TradeDesc23,
        ['TradeDesc 24']: TradeDesc24,
        mWBE,
        ...partialObject } = member;
      const subset = {
        Company,
        TradeCode1,
        TradeCode2,
        TradeCode3,
        TradeCode4,
        TradeCode5,
        TradeCode6,
        TradeCode8,
        TradeCode9,
        TradeCode10,
        TradeCode11,
        TradeCode12,
        TradeCode13,
        TradeCode14,
        TradeCode15,
        TradeCode16,
        TradeCode17,
        TradeCode18,
        TradeCode19,
        TradeCode20,
        TradeCode21,
        TradeCode22,
        TradeDesc1,
        TradeDesc2,
        TradeDesc3,
        TradeDesc4,
        TradeDesc5,
        TradeDesc6,
        TradeDesc8,
        TradeDesc9,
        TradeDesc10,
        TradeDesc11,
        TradeDesc12,
        TradeDesc13,
        TradeDesc14,
        TradeDesc15,
        TradeDesc16,
        TradeDesc17,
        TradeDesc18,
        TradeDesc19,
        TradeDesc20,
        TradeDesc21,
        TradeDesc22,
        TradeDesc23,
        TradeDesc24,
        mWBE, }
      const values = Object.values(subset);
      const includesMultiDimension = (arr, str) =>
        JSON.stringify(arr).toLowerCase().includes(str.toLowerCase());
      return includesMultiDimension(values, input);      
    })
    setInput(input);
    setMemberList(filtered);
    populateDownload(filtered);
  }

  
	
  return (

    <Wrapper>
      <Page />
      <SearchContainer>
        <input type="checkbox" id="mWBE"onChange={toggleMWBE}/>
        <label htmlFor="mWBE">M/WBE</label>
        <CsvDownload data={downloadList} />
        <SearchBar 
          input={input} 
          onChange={updateInput}
          pageNumber={pageNumber}
          onClick={setPage}
          data={filteredList.length}
          total={mWBECheck ? downloadList.length : memberList.length}
        />
        <MemberList memberList={filteredList}/>
        <br/>
        <SearchBar
          noSearch
          input={input}
          onChange={updateInput}
          pageNumber={pageNumber}
          onClick={setPage}
          data={filteredList.length}
          total={memberList.length}
        />
      </SearchContainer>
      {state.theme.token ?
        null
        :
        <LoggedOutWrapper>
          <InnerWrapper>
            <Login />
          </InnerWrapper>
        </LoggedOutWrapper>
      }
    </Wrapper>
   );
}

export default connect(SearchPage);