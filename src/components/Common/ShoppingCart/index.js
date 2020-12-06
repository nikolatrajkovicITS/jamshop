/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import onClickOutside from "react-onclickoutside"

import cardImg from "../../../images/products/dumy.svg"

const ShoppingCart = ({ products }) => {
  const [showCart, setShowCart] = useState(false)

  const toggleCart = isShown => {
    setShowCart(isShown)
  }

  ShoppingCart.handleClickOutside = () => toggleCart(false)

  return (
    <div>
      <div>
        <button
          onClick={() => toggleCart(!showCart)}
          className="shopping-cart-btn"
          type="button"
        >
          <span className="material-icons md-34 md-white">shopping_cart</span>
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

ShoppingCart.prototype = {}

export default onClickOutside(ShoppingCart, clickOutsideConfig)
