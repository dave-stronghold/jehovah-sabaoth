import React, { useMemo, useState } from "react";
import Link from "next/link";
import menuData from "../../data/header.json";
import { useReducer } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
  isSearchBarOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    case "TOGGLE_SEARCHBAR":
      return {
        ...state,
        isSearchBarOpen: !state.isSearchBarOpen,
      };
    default:
      return state;
  }
}

const Header4 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const currentRoute = useRouter().pathname;
  const [isLanguageActive, setIsLanguageActive] = useState(false);

  const handleLanguageClick = () => {
    // Toggle the state when an li is clicked
    setIsLanguageActive(!isLanguageActive);
  };
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  const toggleSearchBar = () => {
    dispatch({ type: "TOGGLE_SEARCHBAR" });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const setting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 4000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
    };
  }, []);
  return (
    <>
      <div className="topbar-area style-3">
        <div className="row g-0">
          <div className="col-xxl-2 col-xl-3 col-lg-3">
            <div className="logo-area">
              <Link legacyBehavior href="/">
                <a>
                  <img src="assets/img/white-logo.svg" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xxl-10 col-xl-9 col-lg-9 d-flex align-items-center">
            <div className="search-and-contact">
              <div className="search-area">
                <div className="search-and-language">
                  <form>
                    <div className="form-inner2">
                      <input type="text" placeholder="Enter your keywords" />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                  <div className="search-bar position-relative d-xl-flex d-none">
                    <div className="lang-btn" onClick={handleLanguageClick}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8ZM7.5 1.077C6.83 1.281 6.165 1.897 5.613 2.932C5.43113 3.2761 5.27471 3.63305 5.145 4H7.5V1.077ZM4.09 4C4.25667 3.46882 4.47087 2.95373 4.73 2.461C4.90291 2.13406 5.10259 1.82199 5.327 1.528C4.088 2.04183 3.02201 2.89962 2.255 4H4.09ZM3.508 7.5C3.538 6.623 3.646 5.782 3.82 5H1.674C1.30112 5.78505 1.07861 6.63301 1.018 7.5H3.508ZM4.847 5C4.65032 5.8198 4.53707 6.6574 4.509 7.5H7.5V5H4.847ZM8.5 5V7.5H11.49C11.4623 6.65743 11.3494 5.81983 11.153 5H8.5ZM4.51 8.5C4.53774 9.34257 4.65065 10.1802 4.847 11H7.5V8.5H4.51ZM8.5 8.5V11H11.153C11.34 10.235 11.459 9.392 11.491 8.5H8.5ZM5.145 12C5.283 12.386 5.44 12.744 5.613 13.068C6.165 14.103 6.831 14.718 7.5 14.923V12H5.145ZM5.327 14.472C5.10257 14.178 4.90289 13.866 4.73 13.539C4.47088 13.0463 4.25668 12.5312 4.09 12H2.255C3.02196 13.1004 4.08797 13.9582 5.327 14.472ZM3.82 11C3.63916 10.1781 3.53472 9.34117 3.508 8.5H1.018C1.08 9.39 1.309 10.233 1.674 11H3.82ZM10.673 14.472C11.912 13.9582 12.978 13.1004 13.745 12H11.91C11.7433 12.5312 11.5291 13.0463 11.27 13.539C11.0971 13.866 10.8975 14.178 10.673 14.472ZM8.5 12V14.923C9.17 14.719 9.835 14.103 10.387 13.068C10.56 12.744 10.717 12.386 10.855 12H8.5ZM12.18 11H14.326C14.691 10.233 14.92 9.39 14.982 8.5H12.492C12.4653 9.34117 12.3608 10.1781 12.18 11ZM14.982 7.5C14.9214 6.63301 14.6989 5.78506 14.326 5H12.18C12.354 5.782 12.462 6.623 12.492 7.5H14.982ZM11.27 2.461C11.517 2.925 11.732 3.441 11.91 4H13.745C12.978 2.89958 11.912 2.04178 10.673 1.528C10.891 1.812 11.091 2.126 11.27 2.461ZM10.855 4C10.7253 3.63305 10.5689 3.27609 10.387 2.932C9.835 1.897 9.17 1.282 8.5 1.077V4H10.855Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <ul
                      className={`lang-card ${
                        isLanguageActive ? "active" : ""
                      }`}
                    >
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">Deutsch</a>
                      </li>
                      <li>
                        <a href="#">Svenska</a>
                      </li>
                      <li>
                        <a href="#">اردو</a>
                      </li>
                      <li>
                        <a href="#">عربي</a>
                      </li>
                      <li>
                        <a href="#">Nederlands</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="contact-and-menu">
                <ul className="topbar-right">
                  <li>Sun-Tue (9:00 am-7.00 pm)</li>
                  <li>
                    <a href="mailto:infoaploxn@gmail.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={10}
                        viewBox="0 0 14 10"
                      >
                        <g>
                          <path d="M12.8333 0H1.16668C0.523223 0 0 0.498307 0 1.11112V8.88891C0 9.50169 0.523223 10 1.16668 10H12.8334C13.4768 10 14 9.50169 14 8.88888V1.11112C14 0.498307 13.4768 0 12.8333 0ZM1.16668 0.555547H12.8334C12.8763 0.555547 12.9142 0.570469 12.9545 0.578906C11.9445 1.4593 8.59532 4.37732 7.42328 5.38302C7.33157 5.46169 7.18375 5.55555 7.00003 5.55555C6.8163 5.55555 6.66848 5.46169 6.57647 5.38276C5.40455 4.37721 2.05518 1.45904 1.0453 0.578958C1.08571 0.570521 1.12366 0.555547 1.16668 0.555547ZM0.583324 8.88888V1.11112C0.583324 1.05669 0.600551 1.00732 0.615973 0.957578C1.38904 1.63143 3.72594 3.66747 5.24122 4.97979C3.73086 6.21539 1.39336 8.32602 0.614141 9.03367C0.600387 8.98643 0.583324 8.94023 0.583324 8.88888ZM12.8333 9.44445H1.16668C1.12008 9.44445 1.07866 9.42898 1.03515 9.41909C1.84034 8.68805 4.19273 6.56529 5.67654 5.35635C5.8461 5.50294 6.0159 5.64928 6.18595 5.79536C6.42636 6.00208 6.70775 6.11112 7 6.11112C7.29225 6.11112 7.57364 6.00206 7.81375 5.79562C7.98389 5.64945 8.1538 5.50303 8.32347 5.35635C9.80736 6.56516 12.1594 8.68776 12.9648 9.41909C12.9213 9.42898 12.88 9.44445 12.8333 9.44445ZM13.4167 8.88888C13.4167 8.94021 13.3996 8.98643 13.3859 9.03367C12.6064 8.32565 10.2691 6.21526 8.7588 4.97982C10.2741 3.6675 12.6107 1.63164 13.384 0.957526C13.3994 1.00727 13.4167 1.05667 13.4167 1.11109V8.88888Z" />
                        </g>
                      </svg>
                      infoaploxn@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+9165678653">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <g>
                          <path d="M12.8766 9.18937C12.0195 9.18937 11.1779 9.05531 10.3804 8.79176C9.98274 8.65617 9.53004 8.76139 9.27064 9.02571L7.69648 10.214C5.87091 9.23954 4.74639 8.11538 3.7852 6.30352L4.93856 4.77038C5.23821 4.47113 5.34569 4.03399 5.21692 3.62384C4.95223 2.82212 4.81777 1.98092 4.81777 1.12342C4.81781 0.503962 4.31385 0 3.69442 0H1.12335C0.503962 0 0 0.503962 0 1.12335C0 8.22363 5.77637 14 12.8766 14C13.496 14 14 13.496 14 12.8766V10.3127C14 9.69333 13.496 9.18937 12.8766 9.18937ZM13.2222 12.8766C13.2222 13.0673 13.0673 13.2222 12.8766 13.2222C6.20512 13.2222 0.7778 7.79484 0.7778 1.12339C0.7778 0.932747 0.932748 0.7778 1.12339 0.7778H3.69446C3.8851 0.7778 4.04005 0.932747 4.04005 1.12339C4.04005 2.06408 4.18778 2.98731 4.47678 3.86195C4.51703 3.99108 4.48436 4.12474 4.35373 4.26073L3.01692 6.03118C2.97302 6.08933 2.94633 6.15864 2.93988 6.23121C2.93344 6.30379 2.9475 6.37672 2.98046 6.4417C4.07155 8.58628 5.39735 9.91208 7.5571 11.0187C7.6885 11.0875 7.84953 11.0731 7.96879 10.983L9.77992 9.61094C9.8252 9.56579 9.88218 9.53419 9.94445 9.5197C10.0067 9.50521 10.0718 9.5084 10.1324 9.52891C11.013 9.81981 11.9363 9.96717 12.8766 9.96717C13.0673 9.96717 13.2222 10.1221 13.2222 10.3128V12.8766Z" />
                        </g>
                      </svg>{" "}
                      +91 656 786 53
                    </a>
                  </li>
                </ul>
                <div
                  className={`sidebar-button  mobile-menu-btn d-lg-none d-flex ${
                    state.isSidebarOpen ? "active" : ""
                  }`}
                  onClick={toggleSidebar}
                >
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-and-banner overflow-hidden">
        {/* Start header section */}
        <div className="row g-0">
          <div className="col-xxl-2 col-xl-3 col-lg-3">
            <header
              className={`header-area style-3 ${
                state.isSidebarOpen ? "show-menu" : ""
              }`}
            >
              <div className="main-menu">
                <div className="logo-area d-lg-none d-flex">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/img/white-logo.svg" alt="" />
                    </a>
                  </Link>
                </div>
                <ul className="menu-list">
                  {menuData.map((data) => {
                    const { id, label, link, icon, subMenu } = data;
                    return (
                      <li
                        key={id}
                        className={currentRoute === link ? "active" : ""}
                      >
                        <Link legacyBehavior href={link}>
                          <a
                            className={`drop-down ${
                              state.activeMenu === label ? "active" : ""
                            }`}
                          >
                            {label}
                          </a>
                        </Link>
                        {icon && (
                          <i
                            onClick={() => toggleMenu(label)}
                            className={`bi bi-${
                              state.activeMenu === label ? "dash" : "plus"
                            } dropdown-icon`}
                          />
                        )}
                        {subMenu && (
                          <ul
                            className={`sub-menu ${
                              state.activeMenu === label ? "d-block" : ""
                            }`}
                          >
                            {subMenu.map((subItem, subIndex) => (
                              <li
                                key={subIndex}
                                className={`menu-item-has-children`}
                              >
                                <Link legacyBehavior href={subItem.link}>
                                  <a>{subItem.label}</a>
                                </Link>
                                {subItem.icon && subItem.icon ? (
                                  <>
                                    <i
                                      onClick={() =>
                                        toggleSubMenu(subItem.label)
                                      }
                                      className={`bi bi-${
                                        state.activeSubMenu === subItem.label
                                          ? "dash"
                                          : "plus"
                                      } dropdown-icon `}
                                    />
                                  </>
                                ) : (
                                  ""
                                )}
                                {subItem.subMenu && (
                                  <ul
                                    className={`sub-menu ${
                                      state.activeSubMenu === subItem.label
                                        ? "d-block"
                                        : ""
                                    }`}
                                  >
                                    {subItem.subMenu.map(
                                      (subItem, subIndex) => (
                                        <li
                                          key={subItem.id}
                                          className="menu-item-has-children"
                                        >
                                          <Link
                                            legacyBehavior
                                            href={subItem.link}
                                          >
                                            <a>{subItem.label}</a>
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <div className="d-xxl-none d-lg-block d-none">
                  <form className="mobile-menu-form mb-5">
                    <div className="input-with-btn d-flex flex-column">
                      <input type="text" placeholder="Search here..." />
                      <button type="submit" className="primary-btn1 btn-hover">
                        Search <span />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="d-lg-none d-block">
                  <ul className="topbar-right">
                    <li>Sun-Tue (9:00 am-7.00 pm)</li>
                    <li>
                      <a href="mailto:infoaploxn@gmail.com">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={10}
                          viewBox="0 0 14 10"
                        >
                          <g>
                            <path d="M12.8333 0H1.16668C0.523223 0 0 0.498307 0 1.11112V8.88891C0 9.50169 0.523223 10 1.16668 10H12.8334C13.4768 10 14 9.50169 14 8.88888V1.11112C14 0.498307 13.4768 0 12.8333 0ZM1.16668 0.555547H12.8334C12.8763 0.555547 12.9142 0.570469 12.9545 0.578906C11.9445 1.4593 8.59532 4.37732 7.42328 5.38302C7.33157 5.46169 7.18375 5.55555 7.00003 5.55555C6.8163 5.55555 6.66848 5.46169 6.57647 5.38276C5.40455 4.37721 2.05518 1.45904 1.0453 0.578958C1.08571 0.570521 1.12366 0.555547 1.16668 0.555547ZM0.583324 8.88888V1.11112C0.583324 1.05669 0.600551 1.00732 0.615973 0.957578C1.38904 1.63143 3.72594 3.66747 5.24122 4.97979C3.73086 6.21539 1.39336 8.32602 0.614141 9.03367C0.600387 8.98643 0.583324 8.94023 0.583324 8.88888ZM12.8333 9.44445H1.16668C1.12008 9.44445 1.07866 9.42898 1.03515 9.41909C1.84034 8.68805 4.19273 6.56529 5.67654 5.35635C5.8461 5.50294 6.0159 5.64928 6.18595 5.79536C6.42636 6.00208 6.70775 6.11112 7 6.11112C7.29225 6.11112 7.57364 6.00206 7.81375 5.79562C7.98389 5.64945 8.1538 5.50303 8.32347 5.35635C9.80736 6.56516 12.1594 8.68776 12.9648 9.41909C12.9213 9.42898 12.88 9.44445 12.8333 9.44445ZM13.4167 8.88888C13.4167 8.94021 13.3996 8.98643 13.3859 9.03367C12.6064 8.32565 10.2691 6.21526 8.7588 4.97982C10.2741 3.6675 12.6107 1.63164 13.384 0.957526C13.3994 1.00727 13.4167 1.05667 13.4167 1.11109V8.88888Z" />
                          </g>
                        </svg>
                        infoaploxn@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+9165678653">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        >
                          <g>
                            <path d="M12.8766 9.18937C12.0195 9.18937 11.1779 9.05531 10.3804 8.79176C9.98274 8.65617 9.53004 8.76139 9.27064 9.02571L7.69648 10.214C5.87091 9.23954 4.74639 8.11538 3.7852 6.30352L4.93856 4.77038C5.23821 4.47113 5.34569 4.03399 5.21692 3.62384C4.95223 2.82212 4.81777 1.98092 4.81777 1.12342C4.81781 0.503962 4.31385 0 3.69442 0H1.12335C0.503962 0 0 0.503962 0 1.12335C0 8.22363 5.77637 14 12.8766 14C13.496 14 14 13.496 14 12.8766V10.3127C14 9.69333 13.496 9.18937 12.8766 9.18937ZM13.2222 12.8766C13.2222 13.0673 13.0673 13.2222 12.8766 13.2222C6.20512 13.2222 0.7778 7.79484 0.7778 1.12339C0.7778 0.932747 0.932748 0.7778 1.12339 0.7778H3.69446C3.8851 0.7778 4.04005 0.932747 4.04005 1.12339C4.04005 2.06408 4.18778 2.98731 4.47678 3.86195C4.51703 3.99108 4.48436 4.12474 4.35373 4.26073L3.01692 6.03118C2.97302 6.08933 2.94633 6.15864 2.93988 6.23121C2.93344 6.30379 2.9475 6.37672 2.98046 6.4417C4.07155 8.58628 5.39735 9.91208 7.5571 11.0187C7.6885 11.0875 7.84953 11.0731 7.96879 10.983L9.77992 9.61094C9.8252 9.56579 9.88218 9.53419 9.94445 9.5197C10.0067 9.50521 10.0718 9.5084 10.1324 9.52891C11.013 9.81981 11.9363 9.96717 12.8766 9.96717C13.0673 9.96717 13.2222 10.1221 13.2222 10.3128V12.8766Z" />
                          </g>
                        </svg>{" "}
                        +91 656 786 53
                      </a>
                    </li>
                  </ul>
                  <Link legacyBehavior href="/contact">
                    <a className="primary-btn1 btn-hover">
                      Get in Touch
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                        ></path>
                      </svg>
                      <span />
                    </a>
                  </Link>
                </div>
                <ul className="tags d-lg-flex d-none">
                  <li>
                    <Link legacyBehavior href="/career">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/blog-standard">
                      <a>News &amp; Insight</a>
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      <a>Join Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </header>
            {/* End header section */}
          </div>
          <div className="col-xxl-10 col-xl-9 col-lg-9">
            {/* Start Banner section */}
            <div className="banner4-section">
              <Swiper {...setting} className="swiper banner4-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-wrapper"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(assets/img/home4/banner-img-02.jpg)",
                      }}
                    >
                      <div className="banner-content">
                        <Link legacyBehavior href="/services1">
                          <a>Business</a>
                        </Link>
                        <h1>
                          <Link legacyBehavior href="/service-details">
                            <a>International Business</a>
                          </Link>
                        </h1>
                        <p>
                          Business consulting is a professional service provided
                          by individuals or firms to help organizations improve
                          their performance
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-wrapper"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(assets/img/home4/banner-img-03.jpg)",
                      }}
                    >
                      <div className="banner-content">
                        <Link legacyBehavior href="/services1">
                          <a>Marketing</a>
                        </Link>
                        <h1>
                          <Link legacyBehavior href="/service-details">
                            <a>Marketing Research</a>
                          </Link>
                        </h1>
                        <p>
                          Helping clients improve their marketing and sales
                          strategies to increase revenue and market share.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div
                      className="banner-wrapper"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(assets/img/home4/banner-img-04.jpg)",
                      }}
                    >
                      <div className="banner-content">
                        <Link legacyBehavior href="/services1">
                          <a>Consulting</a>
                        </Link>
                        <h1>
                          <Link legacyBehavior href="/service-details">
                            <a>Finance Consulting</a>
                          </Link>
                        </h1>
                        <p>
                          Providing financial advice, including cost reduction
                          strategies, financial planning, and risk management.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            {/* End Banner section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header4;
