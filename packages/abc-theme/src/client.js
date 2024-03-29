import Root from "./components/index";
import fetchToken from "./actions/fetch-token.actions";
import registerUser from "./actions/register-user.actions";
import image from "@frontity/html2react/processors/image";
import link from "@frontity/html2react/processors/link";
import membershipquote from "./processors/membershipquote";

import safetyicon from "./static/images/safety-icon.png";
import safetyiconwhite from "./static/images/safety-icon-white.png";
import membershipicon from "./static/images/membership-icon.png";
import membershipiconwhite from "./static/images/membership-icon-white.png";
import politicalicon from "./static/images/political.png";
import managementicon from "./static/images/mgmt-icon.png";
import managementiconwhite from "./static/images/mgmt-icon-white.png";
import ceaLogo from "./static/images/cea_logo.svg";
import ceaLogoBlue from "./static/images/cea_logo_blue.svg";
import eventsicon from "./static/images/events-icon.png";
import eventsiconwhite from "./static/images/events-icon-white.png";
import apprenticeshipicon from "./static/images/apprenticeship-icon.png";
import apprenticeshipiconwhite from "./static/images/apprenticeship-icon-white.png";
import membersonlyicon from "./static/images/members-only-icon.png";
import membersonlyiconwhite from "./static/images/members-only-icon-white.png";

const registrationHandler = {
  pattern: "/register/",
  func: ({ state }) => {
    state.source.data["/register/"].isRegistrationPage = true;
  },
};

const loginPageHandler = {
  pattern: "/login/",
  func: ({ state }) => {
    state.source.data["/login/"].isLoginPage = true;
  },
};

const resumePrintPageHandler = {
  pattern: "/resume-print/",
  func: ({ state }) => {
    state.souerce.data["/resume-print/"].isResumePrint = true;
  },
};

// const invoicePageHandler = {
//   pattern: "/pay-invoice/",
//   func: ({ state }) => {
//     state.source.data['/pay-invoice/'].isInvoicePage = true;
//   }
// }

// const aboutUsPageHandler = {
//   pattern: "/about-us/",
//   func: ({ state }) => {
//     state.source.data['/about-us/'].isAboutUsPage = true;
//   }
// }

export default {
  name: "abc-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      activeMenu: { main: "", sub: "" },
      blogPosts: {},
      caresPosts: {},
      eventsCalendar: {},
      expandedMenu: "",
      forgotPassword: false,
      hoverLink: "",
      isCalendarOpen: false,
      isHamburgerOpen: false,
      isLoginMenuVisible: false,
      isNewsOpen: false,
      isSplashVisible: true,
      isSubMenuVisible: false,
      isVisible: "visible",
      intViewportWidth: false,
      loginError: "",
      newsItem: "blog",
      registrationError: "",
      registrationSuccess: false,
      resumeData: {},
      subMenuList: {},
      subMenuLink: "",
      token: false,
      userCompany: "",
      userEmail: "",
      userFirst: "",
      userLast: "",
      userName: "",
      userPass: "",
      youTubePosts: null,
      fetchToken,
      registerUser,
      menuList: [
        "membership",
        "apprenticeship",
        "events",
        "safety",
        "construction-education",
        "management-education",
        "political-advocacy",
        "cea",
        "save-money",
        "resources",
        "peer-groups",
        "general-contractors",
        "specialty-contractors",
        "membership-interest",
        "trades-list",
        "craft-courses",
        "customized-training",
        "trade-school",
        "signature-events",
        "pro-sponsorship",
        "eic",
        "facility-rental",
        "site-inspections",
        "safety-peer-group",
        "new-hire",
        "step",
        "safety-training",
        "legal-regulatory",
        "blueprint-reading",
        "academies",
        "continuing-education",
        "operations",
        "pdp",
        "national-pac",
        "virtual-hr",
        "find-a-contractor",
        "pay-invoice",
        "thank-you",
        "apprenticeship-application",
        "members",
        "about-us",
        "login",
        "register",
        "step",
        "company-update",
        "personal-coaching",
        "prevailing-wage",
        "excellence-in-construction",
        "other-resources",
        "blog28493",
        "resume",
        "electricals",
      ],
    },
    menu: {
      mainMenu: {
        membership: {
          id: 11,
          menuName: "Membership",
          slug: "membership",
          link: "/membership/",
          color: "var(--colors-menuBlue)",
          activecolor: "var(--colors-membershipb)",
          subcolor: "var(--colors-membershipb-dark)",
          icon: membershipicon,
          alticon: membershipiconwhite,
          submenu: {
            saveMoney: {
              id: 111,
              menuName: "Save Money",
              main: "membership",
              slug: "save-money",
              link: "/save-money/",
            },
            resources: {
              id: 112,
              menuName: "Resources",
              main: "membership",
              slug: "resources",
              link: "/resources/",
            },
            peerGroups: {
              id: 113,
              menuName: "Peer Groups",
              main: "membership",
              slug: "peer-groups",
              link: "/peer-groups/",
            },
            generalContractors: {
              id: 114,
              menuName: "General Contractors",
              main: "membership",
              slug: "general-contractors",
              link: "/general-contractors/",
            },
            specialtyContractors: {
              id: 115,
              menuName: "Specialty Contractors",
              main: "membership",
              slug: "specialty-contractors",
              link: "/specialty-contractors/",
            },
            facilityRental: {
              id: 116,
              menuName: "Facility Rental",
              main: "membership",
              slug: "facility-rental",
              link: "/facility-rental/",
            },
            aboutUs: {
              id: 118,
              menuName: "About Us",
              main: "membership",
              slug: "about-us",
              link: "/about-us/",
            },
            membershipInterest: {
              id: 117,
              menuName: "Membership Interest",
              main: "membership",
              slug: "membership-interest",
              link: "/membership-interest/",
            },
          },
        },
        events: {
          id: 33,
          menuName: "Events",
          slug: "events",
          link: "/events/",
          color: "var(--colors-menuRed)",
          activecolor: "var(--colors-events)",
          subcolor: "var(--colors-events-dark)",
          icon: eventsicon,
          alticon: eventsiconwhite,
          submenu: {
            signatureEvents: {
              id: 331,
              menuName: "Signature Events",
              main: "events",
              slug: "signature-events",
              link: "/signature-events/",
            },
            eic: {
              id: 332,
              menuName: "Excellence in Construction",
              main: "events",
              slug: "excellence-in-construction",
              link: "/excellence-in-construction/",
            },
            proSponsorship: {
              id: 333,
              menuName: "PRO Sponsorship",
              main: "events",
              slug: "pro-sponsorship",
              link: "/pro-sponsorship/",
            },
          },
        },
        // apprenticeship: {
        //   id: 22,
        //   menuName: "Apprenticeship & Craft Training",
        //   link: "/apprenticeship/",
        //   slug: "apprenticeship",
        //   color: "var(--colors-menuGray)",
        //   activecolor: "var(--colors-apprenticeship)",
        //   subcolor: "var(--colors-apprenticeship-dark",
        //   icon: apprenticeshipicon,
        //   alticon: apprenticeshipiconwhite,
        //   submenu: {
        //     // tradesList: {
        //     //   id: 220,
        //     //   menuName: "Trades List",
        //     //   main: "apprenticeship",
        //     //   slug: "trades-list",
        //     //   link: "/trades-list/"
        //     // },
        //     // craftTraining: {
        //     //   id: 221,
        //     //   menuName: "Craft Training",
        //     //   main: "apprenticeship",
        //     //   slug: "craft-training",
        //     //   link: "/craft-training/"
        //     // },
        //     apprenticeshipApplication: {
        //       id: 222,
        //       menuName: "Apprenticeship Application",
        //       main: "apprenticeship",
        //       slug: "apprenticeship-application",
        //       link: "/apprenticeship-application/"
        //     },
        //     tradeSchool: {
        //       id: 560,
        //       menuName: "Daytime Trade School",
        //       main: "apprenticeship",
        //       slug: "trade-school",
        //       link: "http://constructioneducationacademy.org/"
        //     },
        //   },
        // },
        education: {
          id: 55,
          menuName: "Education",
          slug: "construction-education",
          link: "/construction-education/",
          color: "var(--colors-menuBlue)",
          activecolor: "var(--colors-management)",
          subcolor: "var(--colors-management-dark)",
          icon: ceaLogoBlue,
          alticon: ceaLogo,
          submenu: {
            apprenticeship: {
              id: 22,
              menuName: "Apprenticeship",
              slug: "apprenticeship",
              main: "education",
              link: "/apprenticeship/",
            },
            continuingEducation: {
              id: 553,
              menuName: "Continuing Education",
              main: "education",
              slug: "continuing-education",
              link: "/continuing-education/",
            },
            craftCourses: {
              id: 556,
              menuName: "Craft Courses",
              main: "education",
              slug: "craft-courses",
              link: "/craft-courses/",
            },
            tradeSchool: {
              id: 565,
              menuName: "Daytime Trade School",
              main: "education",
              slug: "trade-school",
              link: "http://constructioneducationacademy.org/",
            },
            managementEducation: {
              id: 558,
              menuName: "Management Education",
              slug: "management-education",
              main: "education",
              link: "/management-education/",
            },
            pdp: {
              id: 557,
              menuName: "Professional Development",
              main: "education",
              slug: "pdp",
              link: "/pdp/",
            },
            projectJumpstart: {
              id: 601,
              menuName: "Project JumpStart",
              main: "education",
              slug: "project-jumpstart",
              link: "http://projectjumpstarttraining.org/",
            },
            customizedTraining: {
              id: 223,
              menuName: "Customized Training",
              main: "education",
              slug: "customized-training",
              link: "/customized-training/",
            },
            electricLaw: {
              id: 559,
              menuName: "For Electricals Only",
              main: "education",
              slug: "electricals",
              link: "/electricals/",
            },
          },
        },
        safety: {
          id: 44,
          menuName: "Safety",
          slug: "safety",
          link: "/safety/",
          color: "var(--colors-menuGold)",
          activecolor: "var(--colors-safety)",
          subcolor: "var(--colors-safety-dark)",
          icon: safetyicon,
          alticon: safetyiconwhite,
          submenu: {
            siteInspections: {
              id: 441,
              menuName: "Site Inspections",
              main: "safety",
              slug: "site-inspections",
              link: "/site-inspections/",
            },
            safetyPeerGroup: {
              id: 442,
              menuName: "Safety Peer Group",
              main: "safety",
              slug: "safety-peer-group",
              link: "/safety-peer-group/",
            },
            newHire: {
              id: 443,
              menuName: "New Hire Safety Orientation",
              main: "safety",
              slug: "new-hire",
              link: "/new-hire/",
            },
            step: {
              id: 444,
              menuName: "STEP",
              main: "safety",
              slug: "step",
              link: "/step/",
            },
            safetyTraining: {
              id: 445,
              menuName: "Safety Training",
              main: "safety",
              slug: "safety-training",
              link: "https://events.abcbaltimore.org/events/category/safety/",
            },
          },
        },
        politicalAdvocacy: {
          id: 66,
          menuName: "Political Advocacy",
          slug: "political-advocacy",
          link: "/political-advocacy/",
          color: "var(--colors-menuGray)",
          activecolor: "var(--colors-political)",
          subcolor: "var(--colors-political-dark)",
          icon: politicalicon,
          alticon: politicalicon,
          submenu: {
            nationalPac: {
              id: 664,
              menuName: "National P.A.C.",
              main: "politicalAdvocacy",
              slug: "national-pac",
              link: "https://www.abc.org/Politics-Policy/ABC-PAC",
            },
            weBuildMaryland: {
              id: 665,
              menuName: "We Build Maryland",
              main: "politicalAdvocacy",
              slug: "we-build",
              link: "http://webuildmaryland.org/",
            },
            abcActionCenter: {
              id: 666,
              menuName: "ABC Action Center",
              main: "politicalAdvocacy",
              slug: "abc-action",
              link: "https://www.abc.org/Politics-Policy/ABC-Action-App/Action-Center",
            },
          },
        },
      },
      memberMenu: {
        members: {
          id: 77,
          menuName: "Members Only",
          slug: "members",
          link: "/members/",
          color: "var(--colors-menuGold)",
          activecolor: "var(--colors-menuGold)",
          subcolor: "var(--colors-menuGold-dark)",
          icon: membersonlyicon,
          alticon: membersonlyiconwhite,
          submenu: {
            virtualHr: {
              id: 771,
              menuName: "Virtual HR Manager",
              main: "members",
              slug: "viertual-hr",
              link: "/virtual-hr/",
            },
            findAContractor: {
              id: 772,
              menuName: "Find A Contractor",
              main: "members",
              slug: "find-a-contractor",
              link: "/find-a-contractor/",
            },
            personalCoaching: {
              id: 776,
              menuName: "Personal Business Coaching",
              main: "members",
              slug: "personal-coaching",
              link: "/personal-coaching/",
            },
            payInvoice: {
              id: 773,
              menuName: "Pay Invoice",
              main: "members",
              slug: "pay-invoice",
              link: "/pay-invoice/",
            },
            otherResources: {
              id: 777,
              menuName: "Other Resources",
              main: "members",
              slug: "other-resources",
              link: "/other-resources/",
            },
            login: {
              id: 774,
              menuName: "Login",
              main: "members",
              slug: "login",
              link: "/login/",
            },
            register: {
              id: 775,
              menuName: "Register",
              main: "members",
              slug: "register",
              link: "/register/",
            },
          },
        },
      },
    },
  },
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(
          registrationHandler,
          loginPageHandler,
          resumePrintPageHandler
          // invoicePageHandler,
          // aboutUsPageHandler,
        );
      },
      makeSplashVisible:
        ({ state }) =>
        (value) => {
          state.theme.isSplashVisible = value;
        },
      openSubMenu:
        ({ state }) =>
        (value) => {
          state.theme.isSubMenuVisible = value;
        },
      closeSubMenu:
        ({ state }) =>
        (value) => {
          state.theme.isSubMenuVisible = value;
        },
      createSubMenuList:
        ({ state }) =>
        (value) => {
          state.theme.subMenuList = value;
        },
      setSubMenuLink:
        ({ state }) =>
        (value) => {
          state.theme.subMenuLink = value;
        },
      toggleCalendar:
        ({ state }) =>
        (value) => {
          state.theme.isCalendarOpen = value;
        },
      toggleHamburger:
        ({ state }) =>
        (value) => {
          state.theme.isHamburgerOpen = value;
        },
      toggleNews:
        ({ state }) =>
        (value) => {
          state.theme.isNewsOpen = value;
        },
      menuExpansion:
        ({ state }) =>
        (value) => {
          state.theme.expandedMenu = value;
        },
      setActiveMenu:
        ({ state }) =>
        (key, value) => {
          state.theme.activeMenu[key] = value;
        },
      setEventsCalendar:
        ({ state }) =>
        (value) => {
          state.theme.eventsCalendar = value;
        },
      setBlogPosts:
        ({ state }) =>
        (value) => {
          state.theme.blogPosts = value;
        },
      setCaresPosts:
        ({ state }) =>
        (value) => {
          state.theme.caresPosts = value;
        },
      setYouTubePosts:
        ({ state }) =>
        (value) => {
          state.theme.youTubePosts = value;
        },
      closeLoginMenu: ({ state }) => {
        state.theme.isLoginMenuVisible = false;
      },
      updateField:
        ({ state }) =>
        (field, value) => {
          state.theme[field] = value;
        },
      fetchToken,
      registerUser,
    },
  },
  libraries: {
    html2react: {
      processors: [image, link, membershipquote],
    },
  },
};
