import React, { useEffect } from 'react'
import { connect, fetch } from "frontity"

import { myunescape } from "../../utils/utility-functions"

import { NewsContainer,
        CloseButton,
        NewsTabs,
        SectionWrapper,
        Blog,
        BlogContainer,
        BlogTile,
        BlogTitleContainer,
        Magazine,
        MagazineContainer,
        MagazineTile,
        Videos,
        VideosContainer,
        VideoTile,
        VideoTitleContainer,
        BlogLink,
        } from "./news-bar.styles"


const NewsBar = ({state, actions}) => {

  useEffect( () => {
  }, [state.theme.newsItem])
  
  const handleClick = () => {
    state.theme.isNewsOpen = false;
  }

  const handleTab = (tab) => {
    state.theme.newsItem = tab
  }

  return (
    <>
      <NewsContainer className={state.theme.isNewsOpen ? "open" : "close"}>
        <CloseButton onClick={() => handleClick()}>&#x2716;</CloseButton>
        <NewsTabs>
          <Blog onClick={() => handleTab("blog")}
                className={state.theme.newsItem === "blog" ? "active" : ""}>
            News
          </Blog>
          <Magazine onClick={() => handleTab("magazine")}
                    className={state.theme.newsItem === "magazine" ? "active" : ""}>
            Magazine
          </Magazine>
          <Videos onClick={() => handleTab("videos")}
                  className={state.theme.newsItem === "videos" ? "active" : ""}>
            Videos
          </Videos>
        </NewsTabs>
        <SectionWrapper>
          {state.theme.newsItem === "blog" ?
            <BlogContainer className={state.theme.newsItem === "blog" ? "active" : ""}>
              {state.theme.blogPosts.length > 0 ?

                state.theme.blogPosts.map((items) => {

                  return (
                    <BlogLink key={items.id} link={`blog/${items.id}`}>
                      <BlogTile>
                        <div>
                          {items.fimg_url ?
                          <img src={items.fimg_url} alt="" />
                          :
                          null
                          }
                        </div>
                        <BlogTitleContainer>
                            {myunescape(items.title.rendered)}
                        </BlogTitleContainer>
                      </BlogTile>
                    </BlogLink>
                  )
                })
                :
                null
              }
            </BlogContainer>
          :
            null
          }
          {state.theme.newsItem === "magazine" ?
            
            <MagazineContainer>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?i=750888">
                <MagazineTile src="https://cdn.coverstand.com/14697/750888/smalljpg/6e5a461bc3fc19d35b55a9b3b5f3307424a3a748.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=742435&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/742435/iphonejpg/320/a14c97e7b7f62102f633cf55f0dd9bfae3bcf641.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=727570&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/727570/iphonejpg/320/58f2eb1215e062b91220d69f4e6c286da5297661.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=716694&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/716694/iphonejpg/320/9b49859d577c45c90a26835f19fd9f86d42512c3.jpg"/>
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=710012&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/710012/iphonejpg/320/8a2cb18e10169efa3f8bc95ebd1fe3d52cbbc20e.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=701311&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/701311/iphonejpg/320/21d9f24ccd16b9d292cfcda1d98d268d4dd329be.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=690289&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/690289/iphonejpg/320/78e4eaa0c5024b4920d7b946cfc8645c0b8f8b8c.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=678914&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/678914/iphonejpg/320/3f97ce9360dd1e44a0548f6a5f2c446e4a492a8c.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=667100&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/667100/iphonejpg/320/0a4df31a4ad3e2c84bc2c65079708305edde8d99.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=660242&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/660242/iphonejpg/320/1ffcf352c4eb37bd734341237cfc78d15c768c32.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=634263&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/634263/iphonejpg/320/7130fedb869ac8b459cd8afe58d4c500c42e7a2d.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=614104&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/614104/iphonejpg/320/16182bfdb9d242c9964e917e758e4bdf979bcc6a.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=596986&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/596986/iphonejpg/320/61f615749bd2272c5b497b6e43ab0f614586f422.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=583013&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/583013/iphonejpg/320/f201fec3c62108daf23fa72bbeea2fcb3881ec6a.jpg" />
              </a>
              <a target="_blank" href="https://mydigitalpublication.com/publication/?m=14697&i=574117&p=1&ver=html5">
                <MagazineTile src="https://cdn.coverstand.com/14697/574117/iphonejpg/320/09ef9490e681681cd28ef2d5bc74bec7bfb0fabb.jpg"/>
              </a>
            </MagazineContainer>
          :
          null
          }
          {state.theme.newsItem === "videos" ? 
            <VideosContainer>
              {state.theme.youTubePosts ?

                state.theme.youTubePosts.items.map((items) => {

                  return (
                    <a key={items.etag} href={`https://www.youtube.com/watch?v=${items.id.videoId}`}>
                      <VideoTile>
                        <div>
                          <img src={items.snippet.thumbnails.medium.url} width="350px" alt="" />
                        </div>
                        <VideoTitleContainer>
                            {items.snippet.title}
                        </VideoTitleContainer>
                      </VideoTile>
                    </a>
                  )
                })
                :
                null
              }
            </VideosContainer>
          :
          null
          }
        </SectionWrapper>
      </NewsContainer>
    </>
  )
}

export default connect(NewsBar);