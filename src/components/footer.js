import React from "react"
import { FooterTag, MainDiv } from "./MyStyledComponents"
import { css } from "@emotion/react"
import {
  faCcMastercard,
  faCcVisa,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <MainDiv
      css={css`
        font-family: "Prompt", sans-serif;
        justify-content: center;
        margin-top: 2em;

        & > section {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          & > h5 {
            font-family: "Prompt", sans-serif;
            text-transform: uppercase;
            font-size: 18px;
          }
          .icon {
            margin: 0 10px;
          }

          .footer-link {
            text-decoration: none;
            color: #332e30;
            font-size: 16px;
          }

          .partners-row {
            display: flex;
            align-items: center;
            justify-content: center;

            .p-icon {
              margin: 20px 5px 5px 5px;
            }
          }
        }
        @media screen and (min-width: 768px) {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
          & > .section {
            margin-bottom: unset;
          }
        }
      `}
    >
      <section>
        <h5>Products</h5>
        <a className="footer-link" href="">
          Shoes
        </a>
        <a className="footer-link" href="">
          Clothing
        </a>
        <a className="footer-link" href="">
          Accessories
        </a>
        <br />
        <a className="footer-link" href="">
          Gift Cards
        </a>
        <a className="footer-link" href="">
          New Arrivals
        </a>
        <a className="footer-link" href="">
          Best Sellers
        </a>
        <a className="footer-link" href="">
          Sales
        </a>
      </section>
      <section>
        <h5>Collections</h5>
        <a href="#" className="footer-link">
          Adidas
        </a>
        <a href="#" className="footer-link">
          Nike
        </a>
        <a href="#" className="footer-link">
          Converse
        </a>
      </section>
      <section>
        <h5>Support</h5>
        <a href="#" className="footer-link">
          Help
        </a>
        <a href="#" className="footer-link">
          Orders & Shipping
        </a>
        <a href="#" className="footer-link">
          Promotions
        </a>
      </section>
      <section>
        <h5>Company Info</h5>
        <a href="#" className="footer-link">
          About Us
        </a>
        <a href="#" className="footer-link">
          Locations
        </a>
        <a href="#" className="footer-link">
          Privacy Policy
        </a>
        <a href="#" className="footer-link" style={{ marginBottom: "20px" }}>
          Zambia Revenue Authority
        </a>
        <h5 style={{ marginBottom: "10px" }}>Social</h5>
        <p>
          <FontAwesomeIcon
            className="icon"
            icon={faFacebook}
            size={"2x"}
            color={"blue"}
          />
          <FontAwesomeIcon
            className="icon instagram"
            icon={faInstagram}
            size={"2x"}
          />
          <FontAwesomeIcon
            className="icon instagram"
            icon={faYoutube}
            size={"2x"}
            color={"red"}
          />
        </p>
      </section>
      <section
        style={{
          gridColumn: "1/6",
          gridRow: "2/3",
          textAlign: "center",
          fontSize: "12px",
          marginBottom: "0",
        }}
      >
        © {new Date().getFullYear()}, Urbanwear Zambia.
        <br />
        Website Designed & Developed By Axon Zambia.
        <div className="partners-row">
          <FontAwesomeIcon className={"p-icon"} icon={faCcVisa} size={"2x"} />
          <FontAwesomeIcon
            className={"p-icon"}
            icon={faCcMastercard}
            size={"2x"}
          />
        </div>
      </section>
    </MainDiv>
  )
}

export default Footer
