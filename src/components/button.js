import React from "react"
import { css } from "@emotion/react"

const Button = ({ children, background, textColor, width, mbWidth }) => {
  return (
    <div
      css={css`
        position: relative;
        display: block;
        left: 5px;
        width: ${mbWidth === undefined ? "150px" : mbWidth};
        margin-top: 30px;
        padding: 26px 2px 14px 30px;
        border: 2px solid ${background};
        border-radius: 4px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
        & > .button {
          display: block;
          height: 50px;
          background-color: ${background};
          border: solid ${background};
          border-radius: 4px;
          border-width: 0 10px;
          color: ${textColor};
          margin: -37px 0px -25px -37px;
          padding: 12.5px 15px 15px 15px;
          transition: 75ms ease-in-out;
          text-decoration: none;
          font-family: "adineue PRO Bold Web", sans-serif;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 12px;
        }
        @media screen and (min-width: 768px) {
          width: ${width === undefined ? "200px" : width};
          & > .button {
            font-size: 16px;
          }
        }
        & > .button:active {
          transform: translateY(5px) translateX(5px);
        }
      `}
    >
      <a href="" className="button">
        {children}
      </a>
    </div>
  )
}

export default Button
