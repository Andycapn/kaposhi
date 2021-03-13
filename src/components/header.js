import React, { useContext, useState } from "react"
import reduce from "lodash/reduce"
import PropTypes from "prop-types"
import StoreContext from "~/context/StoreContext"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faSearch,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Header = ({ dark }) => {
  const [hasItems, quantity] = useQuantity()

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
      {/*<Container>*/}
      {/*  <MenuLink to="/">{siteTitle}</MenuLink>*/}
      {/*  <MenuLink to="/cart">*/}
      {/*    {hasItems && <CartCounter>{quantity}</CartCounter>}*/}
      {/*    Cart 🛍*/}
      {/*  </MenuLink>*/}
      {/*</Container>*/}
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
            color: ${dark === true ? "white" : "black"};
          }
          & > .logo {
            color: ${dark === true ? "white" : "black"};
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
                color: ${dark === true ? "white" : "black"};
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
            <Link to="/">
              <FontAwesomeIcon icon={faSearch} size={"lg"} />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              href=""
              css={css`
                position: relative;
                .quantity {
                  position: absolute;
                  top: -12px;
                  left: 12px;
                  width: 22px;
                  height: 22px;
                  font-family: "adineue PRO Bold Web", sans-serif;
                  font-size: 12px;
                  background-color: ${dark === true ? "black" : "white"};
                  text-align: center;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50%;
                  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
                }
              `}
            >
              <FontAwesomeIcon icon={faShoppingCart} size={"lg"} />
              {hasItems ? <div className="quantity">{quantity}</div> : null}
            </Link>
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
          {/*<li className="nav-item">*/}
          {/*  <a href="">{count}</a>*/}
          {/*</li>*/}
        </ul>
      </div>
      <div
        className={`backdrop ${state.drawerOpen ? "open" : ""}`}
        onClick={handleBackdropClick}
      />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
