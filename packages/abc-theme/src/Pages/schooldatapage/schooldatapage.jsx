import React, { useEffect, useState } from 'react';
import { connect } from 'frontity'

import { generalFetch } from '../../utils/events-fetch';

import Page from '../../components/page/page.component';


const SchoolDataPage = ({ state, actions }) => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    generalFetch("https://dev.abcbaltimore.org/wp-json/gf/v2/forms/4/entries").then(res => setData(res))
  }, []);

  return (
    <>
      <Page />
      {data ?
      
      <div>
        FOUND DATA
        {console.log(data)}
      </div>

      :
      null
      }
    </>
  )

}

export default connect(SchoolDataPage);