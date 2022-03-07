import React, { useEffect } from 'react';
import { connect } from 'frontity'

import Page from '../../components/page/page.component';

const BestSponsorPage = ({ state, actions }) => {

  useEffect(() => {
  
    // document.getElementById("newsbutton").addEventListener('click', openMag);
    var elements = document.getElementsByClassName("newsbutton");
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', openMag)
    }
    return function cleanup() {
        window.removeEventListener('click', openMag);
    }
  }, [])

  const openMag = () => {
    state.theme.newsItem = "magazine";
    state.theme.isNewsOpen = true;
  }

  return (
    <>
      <Page />
    </>
  )

}

export default connect(BestSponsorPage);