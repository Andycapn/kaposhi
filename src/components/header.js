import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faSearch,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle, dark }) => {
  const [state, setState] = useState({
    drawerOpen: false,
  })
  const handleDrawerToggle = () => {
    setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen }
    })
  }
  const handleBackdropClick = () => {
    setState({ drawerOpen: false })
  }

  return (
    <header
      css={css`
        & > .sidebar {
          position: fixed;
          top: 0;
          width: 85%;
          height: 100%;
          background-color: white;
          z-index: 200;
          display: flex;
          flex-direction: column;
          transform: translateX(-100%);
          transition: 200ms ease-out;
          padding: 2rem;
          & > .close-icon {
            cursor: pointer;
            margin-left: auto;
          }
          & > .nav-items {
            margin: 0;
            padding: 0;
            & > .nav-item {
              font-family: "Prompt", sans-serif;
              list-style: none;
              font-weight: 400;
              letter-spacing: 1.5px;
              font-size: 14px;
              margin: 10px 0;
            }
          }

          a {
            text-decoration: none;
            color: black;
          }
        }
        & > .sidebar.open {
          transform: translateX(0px);
        }
        & > .backdrop {
          display: none;
          z-index: 100;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.7);
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 300ms ease-in;
        }
        & > .backdrop.open {
          display: block;
          opacity: 1;
        }
      `}
    >
      <nav
        css={css`
          z-index: 100;
          position: absolute;
          top: 0;
          display: flex;
          width: 100vw;
          max-height: 7vh;
          align-items: center;
          background-color: transparent;
          & > .nav-items {
            display: none;
          }
          & > .hamburger {
            margin-left: auto;
            color: ${dark ? "white" : "black"};
          }
          & > .logo {
            color: ${dark ? "white" : "black"};
            text-decoration: none;
            font-family: "adineue PRO Bold Web", sans-serif;
            letter-spacing: 2px;
            font-weight: bold;
            font-size: 13px;
          }
          padding: 0.5rem calc((100vw - 345px) / 2) 0.5rem;
          @media screen and (min-width: 425px) {
            padding: 0.7rem calc((100vw - 400px) / 2);
          }
          @media screen and (min-width: 600px) {
            padding: 0.5rem calc((100vw - 580px) / 2);
          }
          @media screen and (min-width: 768px) {
            padding: 0.5rem calc((100vw - 750px) / 2);
            & > .hamburger {
              display: none;
            }
            & > .nav-items {
              margin-left: auto;
              margin-bottom: 0;
              display: flex;
              & > .nav-item {
                font-family: "Prompt", sans-serif;
                list-style: none;
                font-weight: 400;
                letter-spacing: 2px;
                font-size: 16px;
                margin: 0 10px;
              }
              a {
                text-decoration: none;
                color: ${dark ? "white" : "black"};
              }
            }
            & > .logo {
              font-size: 16px;
            }
          }
          @media screen and (min-width: 1024px) {
            padding: 1rem calc((100vw - 960px) / 2);
          }
          @media screen and (min-width: 1366px) {
            padding: 1rem calc((100vw - 1280px) / 2);
          }
          @media screen and (min-width: 1440px) {
            padding: 1.5rem calc((100vw - 1300px) / 2);
          }
        `}
      >
        <Link to="/" className="logo">
          DELAMODA
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          color={"white"}
          className="hamburger"
          size={"lg"}
          onClick={handleDrawerToggle}
        />
        <ul className="nav-items">
          <li className="nav-item">
            <a href="">
              <FontAwesomeIcon icon={faSearch} size={"lg"} />
            </a>
          </li>
          <li className="nav-item">
            <a href="">
              <FontAwesomeIcon icon={faShoppingCart} size={"lg"} />
            </a>
          </li>
          <li className="nav-item">
            <a href="">NEW ARRIVALS</a>
          </li>
        </ul>
      </nav>
      <div className={`sidebar ${state.drawerOpen ? "open" : ""}`}>
        <FontAwesomeIcon
          icon={faTimes}
          size={"lg"}
          className="close-icon"
          onClick={handleDrawerToggle}
          color={"white"}
        />
        <ul className="nav-items">
          <li className="nav-item">
            <a href="">MENSWEAR</a>
          </li>
          <li className="nav-item">
            <a href="">WOMENSWEAR</a>
          </li>
          <li className="nav-item">
            <a href="">NEW ARRIVALS</a>
          </li>
        </ul>
      </div>
      <div
        className={`backdrop ${state.drawerOpen ? "open" : ""}`}
        onClick={handleBackdropClick}
      />
    </header>
  )
}

export default Header
