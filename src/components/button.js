import React from "react"
import { css } from "@emotion/react"

const Button = ({ children, background, textColor, width, mbWidth }) => {
  return (
    <a
      href=""
      css={css`
        background-color: ${background};
        display: block;
        margin: 10px 10px 10px 0;
        padding: 0.7rem 1rem;
        font-family: "adineue PRO Bold Web", sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
        color: ${textColor};
        border-radius: 4px;
        width: ${width === undefined ? "150px" : width};
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
        @media screen and (min-width: 768px) {
          width: ${width === undefined ? "200px" : width};
          font-size: 16px;
        }
      `}
    >
      {children}
    </a>
  )
}

export default Button
