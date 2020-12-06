/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import onClickOutside from "react-onclickoutside"

import cardImg from "../../../images/products/dumy.svg"

const ShoppingCart = ({ products }) => {
  const [showCart, setShowCart] = useState(false)

  function toggleCart(isShown) {
    setShowCart(isShown)
  }

  ShoppingCart.handleClickOutside = () => toggleCart(false)

  const itemsCounter = (products && products.length) || 0

  return (
    <div>
      <div>
        <button
          onClick={() => toggleCart(!showCart)}
          className="shopping-cart-btn"
          type="button"
        >
          <span className="material-icons md-34 md-white">shopping_cart</span>

          {itemsCounter > 0 && (
            <span className="items-notification">
              {itemsCounter > 9 ? "9+" : itemsCounter}
            </span>
          )}

          <span className="material-icons md-19 shopping-cart-arrow-icon">
            {showCart ? "expand_less" : "expand_more"}
          </span>

          {showCart && <div className="background-blur" />}
        </button>
      </div>

      {showCart && (
        <div className="cart">
          <div>
            <div className="cart-product">
              <img src={cardImg} alt="Product" className="cart-image" />
              <p className="cart-title">Title product</p>
              <p className="cart-price">Price 123$</p>
            </div>
          </div>
          <div className="cart-btn">
            <button
              sx={{
                variant: "button.primary",
                padding: "4px 14px 4px",
                fontSize: 12,
              }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => ShoppingCart.handleClickOutside,
}

export default onClickOutside(ShoppingCart, clickOutsideConfig)
