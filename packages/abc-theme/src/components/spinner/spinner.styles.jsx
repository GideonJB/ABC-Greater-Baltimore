import { styled, keyframes } from 'frontity'

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const prixClipFix = keyframes`
  0% { clip-path: polygon(50% 50%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%);}
  25% { clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);}
  50% { clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);}
  75% { clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%);}
  100% { clip-path: polygon(50% 50%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%);}
`

export const SpinnerDiv = styled.div`
        margin: 0 auto;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: relative;
        animation: ${rotate} 2s linear infinite;
      
      &:before , &:after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 2px;
        border: 5px solid var(--colors-abcBlue);
        border-radius: 50%;
        animation: ${prixClipFix} 3s linear infinite;
      }
      &:after{
        border-color: var(--colors-menuRed);
        animation: ${prixClipFix} 3s linear infinite , ${rotate} 1s linear infinite reverse;
        inset: 8px;
      } 
`

