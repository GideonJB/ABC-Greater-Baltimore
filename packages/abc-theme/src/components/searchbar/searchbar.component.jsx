import React from 'react';
import { Arrow, BarStyling, NumberStyle, SearchWrapper, PageNumberWrapper } from "./searchbar.styles.jsx"

const SearchBar = ({ input:keyword, onChange:setKeyword, pageNumber, onClick:changePage, data, total, ...props }) => {  

  const totalPageNumber = total/10;

  const pageUp = (pageNumber) => {
    changePage(pageNumber => pageNumber +1)
  }

  const pageDown = (pageNumber) => {
      changePage(pageNumber => {
        if(pageNumber > 1){
          return pageNumber -1
        }else
          return 1
      })    
  }

  return (
    <>
      <SearchWrapper>
        <BarStyling {...props}
          key="random1"
          value={keyword}
          placeholder={"search members by name, trade, or code"}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <PageNumberWrapper>
          {pageNumber > 1 ?
            <Arrow className="" onClick={pageDown}>&#10094;</Arrow>
            : 
            <Arrow className="hidden">&#10094;</Arrow>
          }
          <NumberStyle className="">{pageNumber} of {Math.ceil(totalPageNumber)}</NumberStyle>
          {data === 10 && pageNumber < totalPageNumber ?
            <Arrow className="" onClick={pageUp}>&#10095;</Arrow>
            : 
            <Arrow className="hidden">&#10095;</Arrow>
          }
        </PageNumberWrapper>
      </SearchWrapper>
    </>
  );
}

export default SearchBar

