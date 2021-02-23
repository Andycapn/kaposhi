import React from "react"
import { css } from "@emotion/react"
import { MainDiv } from "./MyStyledComponents"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Button from "./button"

const CtaBanner = ({ message, link, btnText }) => {
  return (
    <MainDiv
      css={css`
        background-color: yellow;
        h3 {
          font-family: "Prompt", sans-serif;
          font-size: 32px;
          text-transform: uppercase;
        }
      `}
    >
      <h3>{message}</h3>
      <Button
        className={"btn"}
        background={"black"}
        textColor={"white"}
        width={"230px"}
        to={link}
      >
        <span>
          {btnText}
          <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
        </span>
      </Button>
    </MainDiv>
  )
}

export { CtaBanner }
