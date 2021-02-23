import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/react"

const Header = ({ siteTitle }) => (
  <header>
    <nav
      css={css`
        z-index: 100;
        position: fixed;
        top: 0;
        display: flex;
        width: 100%;
        max-height: 7vh;
        align-items: center;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5) 20%,
          rgba(0, 0, 0, 0.5046393557422969) 100%
        );
        padding: 5vh calc((100vw - 345px) / 2) 0.5rem;
        @media screen and (min-width: 425px) {
          padding: 0.7rem calc((100vw - 400px) / 2);
        }
        @media screen and (min-width: 600px) {
          padding: 0.5rem calc((100vw - 580px) / 2);
        }
        @media screen and (min-width: 768px) {
          padding: 0.5rem calc((100vw - 750px) / 2);
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
            color: whitesmoke;
          }
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
  </header>
)

export default Header
