import React, { useContext, useState } from "react"
import Cart from "../components/Cart"
import Layout from "../components/layout"
import { MainDiv } from "../components/MyStyledComponents"
import { css } from "@emotion/react"
import { CtaBanner } from "../components/ctaBanner"

const CartPage = () => {
  return (
    <Layout>
      <MainDiv
        css={css`
          h1 {
            font-family: "adineue PRO Bold Web", sans-serif;
          }
        `}
      >
        <h1>Cart</h1>
        <Cart />
      </MainDiv>
      <CtaBanner
        message={"Follow Our Social Media Pages For Exclusive Deals!"}
        link={"#"}
        btnText={`Follow us now`}
      />
    </Layout>
  )
}

export default CartPage
