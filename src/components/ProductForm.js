import React, { useState, useContext, useEffect, useCallback } from "react"
import find from "lodash/find"
import isEqual from "lodash/isEqual"
import PropTypes from "prop-types"
import StoreContext from "../context/StoreContext"
import { css } from "@emotion/react"

const ProductForm = ({ product }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /*
  Using this in conjunction with a select input for variants
  can cause a bug where the buy button is disabled, this
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways -
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(variant.price)

  return (
    <>
      {options.map(({ id, name, values }, index) => (
        <React.Fragment key={id}>
          <label htmlFor={name}>{name} </label>
          <select
            name={name}
            key={id}
            onBlur={event => handleOptionChange(index, event)}
            css={css`
              padding: 0.5rem 1rem;
              font-family: "adineue PRO Bold Web", sans-serif;
              margin: 10px 0;
              border-radius: 4px;

              :focus {
                border-color: #aaa;
                /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
                box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
                box-shadow: 0 0 0 3px -moz-mac-focusring;
                color: #222;
                outline: none;
              }
            `}
          >
            {values.map(value => (
              <option
                value={value}
                key={`${name}-${value}`}
                disabled={checkDisabled(name, value)}
              >
                {value}
              </option>
            ))}
          </select>
          <br />
        </React.Fragment>
      ))}
      <label htmlFor="quantity">Quantity </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
        css={css`
          padding: 0.5rem 1rem;
          margin: 10px 0;
          font-family: "adineue PRO Bold Web", sans-serif;
          border: none;
          width: 100px;
          :focus {
            border-color: #aaa;
            /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
            box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
            box-shadow: 0 0 0 3px -moz-mac-focusring;
            color: #222;
            outline: none;
          }
        `}
      />
      <br />
      <button
        type="submit"
        disabled={!available || adding}
        onClick={handleAddToCart}
        css={css`
          background-color: black;
          cursor: pointer;
          display: block;
          margin: 10px 10px 10px 0;
          padding: 0.7rem 1rem;
          font-family: "adineue PRO Bold Web", sans-serif;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 12px;
          color: white;
          border-radius: 4px;
          width: 150px;
          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
          @media screen and (min-width: 768px) {
            width: 200px;
            font-size: 16px;
          }
        `}
      >
        Add to Cart
      </button>
      {!available && <p>This Product is out of Stock!</p>}
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm