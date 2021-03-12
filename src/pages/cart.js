import React from "react"

import Cart from "../components/Cart"
import { Container } from "../utils/styles"
import Layout from "../components/layout"
import { MainDiv } from "../components/MyStyledComponents"
import { css } from "@emotion/react"

const CartPage = () => (
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
  </Layout>
)

export default CartPage
