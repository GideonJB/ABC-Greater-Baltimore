import { styled } from "frontity";
import Link from "@frontity/components/link"

export const NewsContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 0px;
  height: 95vh;
  background-color: var(--colors-site-white);
  border-radius: 10px 0px 0px 0px;
  transition: all .5s;
  z-index: 1;
  overflow: hidden;
  padding: 0px 0px 30px 0px;
  width: 350px;
  pointer-events: auto;
  -webkit-box-shadow: -5px 0px 13px 3px rgba(0,0,0,0.30);
  box-shadow: -5px 0px 13px 3px rgba(0,0,0,0.30);
  text-align: center;

  &.close {
    margin-right: -360px;
  }
  &.open {
    margin-right: 0px;
  }

  @media screen and (max-width: 600px){
    top: 50px;
    width: 100vw;
    &.close{
      margin-right: -100vw;
    }
  }
`

export const SectionWrapper = styled.div`
  overflow: scroll;
  height: calc(100% - 45px);
`

export const CloseButton = styled.div`
  width: 20%;
  float: right;
  text-align: right;
  padding-right: 20px;
  margin: 0 0 -35px 0;
  font-size: 1.4em;
  position: sticky;
  top: 10px;
  cursor: pointer;
  color: var(--colors-site-mainTheme);
  z-index: 2;
`

export const NewsTabs = styled.div`
  position: sticky;
  top: 0;
  left:0;
  display: flex;
  height: 45px;
  width: 100%;
  background: var(--colors-site-white);
  
  justify-content: space-between;
  /* padding: 15px 80px 0px 10px; */
  padding-right: 70px;
  border-bottom: 3px solid var(--colors-site-mainTheme);
`

export const Blog = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
  cursor: pointer;
  &.active{
    background: var(--colors-site-mainTheme);
    color: var(--colors-site-white);
  }

`

export const Magazine = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 5px 0px 5px;
  cursor: pointer;
  margin: 0 auto;
  &.active{
    background: var(--colors-site-mainTheme);
    color: var(--colors-site-white);
  }
`

export const Videos = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 15px;
  cursor: pointer;
  &.active{
    background: var(--colors-site-mainTheme);
    color: var(--colors-site-white);
  }
`

export const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
  
`
export const BlogTile = styled.div`
  
  border-bottom: 3px solid var(--colors-site-mainTheme);
  &:hover{
    border-left: 5px solid red;
    background:  white;
  }
`

export const BlogTitleContainer = styled.div`
  color: var(--colors-site-lightAccent);
  padding: 10px 5px;
  top: 0;
  right: 0;
`

export const MagazineContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const MagazineTile = styled.img`
  width: 360px;
  height: 473px;
  margin-bottom: 10px;

  &:hover{
    border-left: 5px solid red;
  }

  @media screen and (max-width: 600px){
    width: 100vw;
    height: auto;
  }
`

export const VideosContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const VideoTile = styled.div`
  img{
    width: 100vw;
  }
  border-bottom: 3px solid var(--colors-menuBlue);
`

export const VideoTitleContainer = styled.div`
  color: var(--colors-menuLightBlue);
  padding: 10px;
  
  top: 0;
  right: 0;
`

export const BlogLink = styled(Link)`

`

