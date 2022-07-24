import { connect } from 'frontity';
import React from 'react';

import { Background, ErrorContainer, HeadlineWrapper } from '../errorpage/errorpage.styles';

const ErrorPage = ({ state, actions }) => {

  return (
    <>
      <Background />
      <ErrorContainer>
        <HeadlineWrapper>
          <h4>Looks like we haven't built this page yet.<br/>
            Try a different one.
          </h4>
        </HeadlineWrapper>
      </ErrorContainer>
    </>
  );
}

export default connect(ErrorPage);