import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import { BlogWrapper, GlassWrap } from "./blog.styles"

const Blog = ({ state, libraries }) => {
  const [blogPost, setBlogPost] = useState();

  const Html2React = libraries.html2react.Component

  const blogID = (state.router.link.split('/')[2]);
  console.log("blog ID", blogID)

  useEffect (() => {
    if(state.theme.blogPosts.length > 0){
      console.log(state.theme.blogPosts);
      
      state.theme.blogPosts.map((el) => {
        console.log(el.id)
        if (el.id.toString() === blogID){
          console.log("ELEMENT", el)
          setBlogPost(el)
        }
      })

      console.log("blog Post", blogPost)
    }
  }, [state.theme.blogposts])
  

  return (
    <>
    {blogPost !== undefined ?
    <GlassWrap>
      <BlogWrapper>
        <img src={blogPost.fimg_url} />
        <h3>{blogPost.title.rendered}</h3>
        <Html2React html={blogPost.content.rendered} />
      </BlogWrapper>
    </GlassWrap>
    :
    null}
    </>
  )
}

export default connect(Blog)