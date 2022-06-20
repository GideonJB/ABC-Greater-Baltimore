import { styled, css } from "frontity"

const getBarStyles = props => {
  if (props.noSearch) {
    return noSearchStyles;
  }
};

const noSearchStyles = css`
  opacity: 0;
  pointer-events: none;
`

export const SearchWrapper = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    align-self: center;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px 0 5px;
  }
`

export const BarStyling = styled.input`
  width: 25em;
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
  background: var(--colors-site-white);

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 1em;
  }

  ${getBarStyles}
`

export const PageNumberWrapper = styled.div`
  display: flex;
  
  width: auto;
  height: 40px;
  color: var(--colors-site-white);
  text-align: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`



export const Arrow = styled.div`
  margin: 0 0 0 15px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;  
  align-items: center;

  &.hidden {
    opacity: .2;
    pointer-events: none;
  }

  
`

export const NumberStyle = styled.div`
  /* width: clamp(50px, 50px, 50px); */
  width: fit-content;
  margin: 0 0 0 15px;
  padding: 10px 10px;
  text-align: center;
`
