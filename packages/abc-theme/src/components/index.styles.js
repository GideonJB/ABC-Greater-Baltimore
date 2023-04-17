import { Global, css } from "frontity";

import poppinsExtraLight from "../static/fonts/Poppins/Poppins-ExtraLight.ttf";
import poppinsLight from "../static/fonts/Poppins/Poppins-Light.ttf";
import poppinsThin from "../static/fonts/Poppins/Poppins-Thin.ttf";
import poppinsRegular from "../static/fonts/Poppins/Poppins-Regular.ttf";
import poppinsMedium from "../static/fonts/Poppins/Poppins-Medium.ttf";
import poppinsSemiBold from "../static/fonts/Poppins/Poppins-SemiBold.ttf";
import polyRegular from "../static/fonts/Poly/Poly-Regular.ttf";

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      /* @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); */
      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 100;
        font-display: block;
        src: url(${poppinsThin});
      }

      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 200;
        font-display: block;
        src: url(${poppinsExtraLight});
      }

      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 300;
        font-display: block;
        src: url(${poppinsLight});
      }

      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(${poppinsRegular});
      }

      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-display: block;
        src: url(${poppinsMedium});
      }

      @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-display: block;
        src: url(${poppinsSemiBold});
      }

      @font-face {
        font-family: "Poly";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(${polyRegular});
      }
      /* Box sizing rules */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      /* Remove default margin */
      body,
      h1,
      h2,
      h3,
      h4,
      /* p, */
      figure,
      blockquote,
      dl,
      dd {
        margin: 0;
      }

      /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
      ul[role="list"],
      ol[role="list"] {
        list-style: none;
      }

      /* Set core root defaults */
      html:focus-within {
        scroll-behavior: smooth;
      }

      /* Set core body defaults */
      body {
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        overscroll-behavior: none;

        /* &.scrollBody {
          display: block;
          overflow: scroll;
          overscroll-behavior: contain;

          
        } */
      }

      /* A elements that don't have a class get default styles */
      /* a:not([class]) {
        text-decoration-skip-ink: auto;
      } */

      /* Make images easier to work with */
      img,
      picture {
        max-width: 100%;
        display: block;
      }

      /* Inherit fonts for inputs and buttons */
      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
      @media (prefers-reduced-motion: reduce) {
        html:focus-within {
          scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      @media print {
        html,
        body {
          width: 8.5in;
          height: 11in;
        }

        @page {
          size: letter;
        }
      }

      html {
        /* font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility; */

        --colors-site-overlay: hsla(34, 62%, 5%, 50%);
        --colors-site-white: white;
        /* --colors-site-white: hsl(40, 100%, 98%); */
        --colors-site-whiteOverlay: hsla(37, 70%, 94%, 70%);
        --colors-site-mainTheme: hsl(212, 57%, 15%);
        --colors-site-mainThemeOverlay: hsla(212, 57%, 15%, 70%);
        --colors-site-lightAccent: #53b6ed;
        --colors-site-darkAccent: hsl(211, 17%, 48%);
        --colors-site-darkShades: hsl(240, 7%, 8%);
        --colors-site-lightAccent-transparent: hsla(198, 40%, 53%, 70%);
        --colors-site-darkGray: hsl(0, 0%, 15%);
        --colors-active: hsl(60, 5%, 96%);
        --colors-sub: hsl(60, 5%, 96%);
        --colors-text: hsl(0, 0%, 40%);
        --colors-tagline: hsl(43, 85%, 45%);
        --colors-abcBlue: hsl(197, 97%, 14%);
        --colors-menuOverlay: hsla(212, 57%, 9%, 90%);
        --colors-menuBlue: hsl(197, 94%, 14%);
        --colors-menuLightBlue: hsl(199, 96%, 35%);
        --colors-menuGray: hsl(214, 16%, 16%);
        --colors-menuGold: hsl(41, 82%, 57%);
        --colors-menuGold-dark: hsl(41, 85%, 44%);
        --colors-menuRed: hsl(353, 84%, 57%);
        --colors-activeMenuBlue: hsl(202, 96%, 10%);
        --colors-activeMenuGray: hsl(213, 29%, 10%);
        --colors-activeMenuGold: hsl(36, 77%, 52%);
        --colors-activeMenuRed: hsl(355, 80%, 51%);
        --colors-activeMenuGray: hsl(214, 16%, 16%);
        --colors-membership: hsl(358, 92%, 66%);
        --colors-membership-dark: hsl(358, 92%, 46%);
        --colors-membershipb: hsl(24, 44%, 30%);
        --colors-membershipb-dark: hsl(24, 44%, 23%);
        --colors-membership-overlay: hsla(358, 92%, 66%, 90%);
        --colors-apprenticeship: hsl(208, 59%, 29%);
        --colors-apprenticeship-dark: hsl(208, 59%, 15%);
        --colors-apprenticeship-overlay: hsla(208, 59%, 29%, 90%);
        --colors-safety: hsl(120, 80%, 35%);
        --colors-safety-dark: hsl(120, 80%, 22%);
        --colors-safety-overlay: hsla(120, 80%, 35%, 90%);
        --colors-events: hsl(23, 83%, 42%);
        --colors-events-dark: hsl(23, 87%, 32%);
        --colors-events-overlay: hsla(23, 83%, 42%, 90%);
        --colors-management: hsl(37, 87%, 35%);
        --colors-management-dark: hsl(37, 87%, 25%);
        --colors-management-overlay: hsla(37, 87%, 35%, 90%);
        --colors-political: hsl(0, 0%, 30%);
        --colors-political-dark: hsl(0, 0%, 15%);
        --colors-political-overlay: hsla(0, 0%, 30%, 90%);

        --gradient-lightRight: linear-gradient(
          to right,
          hsla(0, 0%, 0%, 0) 85%,
          hsla(0, 0%, 0%, 0.5) 102%
        );

        --screen-width: calc(100vw - 150px);
        /* --screen-height: calc(100vh - 75px); */
        --screen-height: 100vh;
        --screen-height-mobile: calc(100vh - 50px);

        --shadow-color: 0deg 0% 0%;
        --shadow-elevation-low-local: 0.5px 0.5px 0.8px
            hsl(var(--shadow-color) / 0.12),
          0.9px 0.9px 1.4px -1.2px hsl(var(--shadow-color) / 0.12),
          2.2px 2.2px 3.5px -2.5px hsl(var(--shadow-color) / 0.12);
        --shadow-elevation-medium-local: 0.5px 0.5px 0.8px
            hsl(var(--shadow-color) / 0.13),
          1.8px 1.8px 2.9px -0.8px hsl(var(--shadow-color) / 0.13),
          4.5px 4.5px 7.2px -1.7px hsl(var(--shadow-color) / 0.13),
          11px 11px 17.5px -2.5px hsl(var(--shadow-color) / 0.13);
        --shadow-elevation-high-local: 0.5px 0.5px 0.8px
            hsl(var(--shadow-color) / 0.12),
          3.4px 3.4px 5.4px -0.4px hsl(var(--shadow-color) / 0.12),
          6.5px 6.5px 10.3px -0.7px hsl(var(--shadow-color) / 0.12),
          10.7px 10.7px 17px -1.1px hsl(var(--shadow-color) / 0.12),
          17.1px 17.1px 27.2px -1.4px hsl(var(--shadow-color) / 0.12),
          26.8px 26.8px 42.6px -1.8px hsl(var(--shadow-color) / 0.12),
          40.8px 40.8px 64.9px -2.1px hsl(var(--shadow-color) / 0.12),
          60.2px 60.1px 95.7px -2.5px hsl(var(--shadow-color) / 0.12);
      }

      body {
        margin: 0;
        font-family: "Lato", "HelveticaNeue", "Helvetica Neue", sans-serif;
        -webkit-overflow-scrolling: touch;
        background-color: var(--colors-site-white);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      li {
        color: var(--colors-site-mainTheme);
      }
      a {
        color: var(--colors-site-lightAccent);
      }

      .pageHeading {
      }

      .imageColumn-left {
        height: 100%;
        span {
          box-shadow: var(--shadow-elevation-medium-local);
          display: flex;
          height: 100%;
          img {
            flex-grow: 1;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .contentColumn-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .wpcf7-div {
        width: 500px;
        position: relative;
        margin-top: 20px;

        input[type="password"] {
          letter-spacing: 0.3em;
        }

        input {
          background: none;
          /* background-color: white; */
          color: grey;
          font-size: 18px;
          padding: 5px;
          display: block;
          width: 100%;
          border: none;
          border-radius: 0;
          border-bottom: 1px solid grey;

          &::placeholder {
            opacity: 0;
          }

          &:focus {
            outline: none;
          }

          &:focus ~ label {
            top: -14px;
            font-size: 12px;
            color: var(--colors-menuBlue);
          }
        }

        input:focus,
        input:not(:placeholder-shown),
        input:-webkit-autofill {
          & ~ label {
            top: -14px;
            font-size: 12px;
            color: var(--colors-menuBlue);
          }
        }

        label {
          color: grey;
          font-size: 16px;
          font-weight: normal;
          position: absolute;
          pointer-events: none;
          left: 5px;
          top: 10px;
          transition: 300ms ease all;
        }
      }

      .centerContainer {
        justify-content: center !important;
        align-items: center !important;
      }

      .fullWidthContainer {
        width: 100vw;
        position: relative;
        left: 32%;
        margin-left: -40vw;
        /* margin-right: -40vw; */
        /* border-radius: 20px; */
        /* padding:  20px 150px 0px 0px !important; */
        /* background-color: hsla(233, 20%, 60%, .7); */
      }
      .contentWidthContainer {
        width: 60%;
        margin-left: 22vw;
        margin-bottom: 0px;
        padding: 10px;
      }

      .imageCover {
        object-fit: cover;
        -webkit-box-shadow: 4px 4px 5px -2px #000000;
        box-shadow: 4px 4px 5px -2px #000000;
      }

      .relative {
        position: relative;
      }
      .paddingTop {
        padding-top: 20px;
      }

      .glass {
        position: relative;

        &::before {
          content: "";
          background: linear-gradient(
            90deg,
            hsla(0, 0%, 100%, 0.1) 0%,
            hsla(202, 85%, 7%, 0.3) 100%
          ) !important;
          -webkit-backdrop-filter: blur(25px);
          backdrop-filter: blur(25px);
          border: 1px solid hsla(0, 0%, 100%, 0.18);
          position: absolute;
          height: 100%;
          width: 200vw;
          left: -100vw;

          @media screen and (max-width: 800px) {
            width: 100vw;
            left: -20px;
          }
        }
      }

      .whiteContainerBackground {
        position: relative;

        &::before {
          content: "";
          background: var(--colors-site-white);
          position: absolute;
          height: 100%;
          width: 200vw;
          left: -100vw;

          @media screen and (max-width: 800px) {
            width: 100vw;
            left: -20px;
          }
        }
      }

      .wp-block-media-text {
        position: relative;
        h3,
        p {
          color: var(--colors-site-white);
        }
        a {
          color: var(--colors-site-lightAccent);
        }
      }

      .glass-dark {
        background: linear-gradient(
          90deg,
          hsla(0, 0%, 7%, 0.3) 0%,
          hsla(0, 0%, 10%, 0.6) 100%
        ) !important;
        -webkit-backdrop-filter: blur(25px);
        backdrop-filter: blur(25px);
        border-radius: 10px;
        border: 1px solid hsla(0, 0%, 100%, 0.18);
      }

      .glass-form {
        background: linear-gradient(
          -90deg,
          hsla(0, 0%, 100%, 0.1) 0%,
          hsla(0, 0%, 100%, 0.88) 100%
        ) !important;
        -webkit-backdrop-filter: blur(25px);
        backdrop-filter: blur(25px);
        border: 1px solid hsla(0, 0%, 100%, 0.18);
      }

      .solid {
        border-radius: 10px;
        background-color: white;
        -webkit-box-shadow: 3px 3px 9px 0px #000000;
        box-shadow: 3px 3px 9px 0px #000000;
      }

      .column-parent {
      }

      .column-child {
      }

      .ugb-main-block {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        span,
        li {
          color: var(--colors-site-white) !important;

          &.newsbutton {
            color: var(--colors-site-lightAccent) !important;
            cursor: pointer;
          }
        }
        a {
          color: var(--colors-site-lightAccent) !important;
        }
      }

      div {
        font-family: "Poppins", sans-serif;
      }

      h2,
      h3 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
      }

      h1 {
        color: var(--colors-site-white);
        position: relative;
        text-align: center;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 3.1em;
        text-transform: uppercase;
        margin-bottom: 40px;

        &.heading-blue {
          color: var(--colors-site-mainTheme);
        }

        &::after {
          content: "";
          /* position: absolute; */
          width: 80px;
          height: 20px;
          border-bottom: 2px solid var(--colors-site-white);
          top: 22px;
          transform: translate(30px);
          z-index: 2;
        }
        &::before {
          content: "";
          /* position: absolute; */
          width: 80px;
          height: 20px;
          border-bottom: 2px solid var(--colors-site-white);
          top: 22px;
          transform: translate(-110px);
          z-index: 2;
        }

        @media screen and (max-width: 1400px) {
          font-size: 2.5em;
          &::before,
          &::after {
            top: 12px;
          }
        }
        @media screen and (max-width: 1115px) {
          font-size: 2.5em;
          &::before,
          &::after {
            display: none;
          }
        }
      }
      h2 {
        font-size: 2.6em !important;
      }
      h3 {
        font-size: 2.3em;
        @media screen and (max-width: 699px) {
          font-size: 2em;
        }
      }

      h4,
      h6 {
        font-family: "Martel", sans-serif;
        color: var(--colors-white);
      }

      h4 {
        font-size: 1.4em;
      }
      h5 {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        font-size: 3em;
      }

      p {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        margin: 0;
        font-size: 1.1em;
      }
      a {
        text-decoration: none;
        color: var(--colors-site-mainTheme);
      }
      .wp-block-button__link {
        transition: 0.2s all;
        background-color: var(--colors-site-mainTheme);

        &:hover {
          background-color: var(--colors-site-white);
          color: var(--colors-site-mainTheme);
        }
      }

      .red-button {
        a {
          background-color: hsl(356, 99%, 49%);
        }
      }

      select {
        max-width: 300px;
      }

      @media screen and (max-width: 1100px) {
        .ugb-columns
          > .ugb-inner-block
          > .ugb-block-content
          > .ugb-columns__item {
          display: flex !important;
          flex-direction: column;
          justify-content: stretch;
          align-items: stretch;
          height: 100%;
        }
      }

      .ugb-feature-grid__image {
        span {
          padding-bottom: 0px !important;
        }
      }

      .ugb-number-box__content,
      .ugb-card__content {
        h4,
        p {
          color: var(--colors-site-mainTheme) !important;
        }
      }

      .wp-block-button {
        a {
          color: var(--colors-site-white) !important;
          &:hover {
            color: var(--colors-site-mainTheme) !important;
          }
        }
      }

      .bottom-margin {
        margin-bottom: 30px;
      }

      .top-margin {
        margin-top: 30px;
      }

      #scrolled {
        &::-webkit-scrollbar {
          -webkit-appearance: none;
          -webkit-overflow-scrolling: auto;
        }

        &::-webkit-scrollbar:vertical {
          width: 12px;
          -webkit-overflow-scrolling: auto;
        }

        &::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          border: 2px solid #ffffff;
          -webkit-overflow-scrolling: auto;
        }

        &::-webkit-scrollbar-track {
          border-radius: 10px;
          background-color: #ffffff;
          -webkit-overflow-scrolling: auto;
        }
      }

      .homepage {
        /* margin-top: 100px; */

        @media screen and (max-width: 1100px) {
          margin-top: 0px;
        }
      }

      .wp-block-buttons > .wp-block-button.wp-block-button__width-50 {
        @media screen and (max-width: 700px) {
          width: 100%;
          margin-right: 0px;
        }
      }

      .wp-block-button__link {
        @media screen and (max-width: 700px) {
          padding: 20px;
        }
      }

      .column-200-parent {
      }

      .column-200 {
        width: 200px;

        img {
          width: 180px;
          max-height: 100px;
          margin: 5px;
        }
      }

      .stk-highlight {
        padding: 0px 5px;
      }

      .text-blue {
        color: var(--colors-site-mainTheme) !important;
      }

      .wp-block-image {
        /* height: 100%; */
        width: 100%;

        img {
          object-fit: contain;
        }
      }

      .white-text {
        color: var(--colors-site-white);

        a {
          color: var(--colors-lightAccent) !important;
        }
      }
    `}
  />
);
