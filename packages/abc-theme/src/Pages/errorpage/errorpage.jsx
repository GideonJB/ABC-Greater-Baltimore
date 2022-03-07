import { connect } from 'frontity';
import Link from "@frontity/components/link"
import React from 'react';

import { Background, ErrorContainer, HeadlineWrapper } from '../errorpage/errorpage.styles';

const ErrorPage = () => {

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

export default ErrorPage;