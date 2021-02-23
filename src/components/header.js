import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => {
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
          width: 70%;
          height: 100%;
          background-color: white;
          z-index: 200;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateX(-100%);
          transition: 200ms ease-in;
          & > .nav-items {
            margin-bottom: 0;
            & > .nav-item {
              font-family: "Prompt", sans-serif;
              list-style: none;
              font-weight: 400;
              letter-spacing: 2px;
              font-size: 13px;
              margin: 0 10px;
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
          position: fixed;
          top: 0;
          display: flex;
          width: 100vw;
          max-height: 7vh;
          align-items: center;
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5) 20%,
            rgba(0, 0, 0, 0.5046393557422969) 100%
          );
          & > .nav-items {
            display: none;
          }
          & > .hamburger {
            margin-left: auto;
          }
          padding: 5vh calc((100vw - 345px) / 2) 0.5rem;
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
                font-size: 13px;
                margin: 0 10px;
              }
              a {
                text-decoration: none;
                color: whitesmoke;
              }
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
          & > .logo {
            color: white;
            text-decoration: none;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            letter-spacing: 1px;
            font-weight: bold;
          }
        `}
      >
        <a href="" className="logo">
          URBANWEAR
        </a>
        <FontAwesomeIcon
          icon={faBars}
          color={"white"}
          className="hamburger"
          onClick={handleDrawerToggle}
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
      </nav>
      <div className={`sidebar ${state.drawerOpen ? "open" : ""}`}>
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
