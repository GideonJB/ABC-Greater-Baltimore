import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import { BlogWrapper, GlassWrap, NewsTitle, LeftBar, LogoWrapper } from "./blog.styles"

import LogoContainer from "../logo-container/logo-container.component"
import { myunescape } from "../../utils/utility-functions"

import abcCares from "../../static/images/abc_cares.png"

const CaresBlog = ({ state, libraries }) => {
  const [blogPost, setBlogPost] = useState();

  const Html2React = libraries.html2react.Component

  const blogID = (state.router.link.split('/')[2]);
  console.log("blog ID", blogID)

  useEffect (() => {
    if(state.theme.caresPosts.length > 0){
      console.log("CARES", state.theme.caresPosts);
      
      state.theme.caresPosts.map((el) => {
        console.log(el.id)
        if (el.id.toString() === blogID){
          console.log("ELEMENT", el)
          setBlogPost(el)
        }
      })

    
    }
  }, [state.theme.caresPosts])
  

  return (
    <>
    <LeftBar />
    {blogPost !== undefined ?
    <GlassWrap>
      <BlogWrapper>
        <LogoWrapper>
          <LogoContainer className="centered" source={abcCares} alt="ABC Logo" widthValue="250px" heightValue="auto" link="/" />
        </LogoWrapper>
        <img src={blogPost.featured_image_urls.large[0]} /><br/>
        <h3>{myunescape(blogPost.title.rendered)}</h3><br/>
        <Html2React html={blogPost.content.rendered} />
      </BlogWrapper>
    </GlassWrap>
    :
    null}
    </>
  )
}

export default connect(CaresBlog)