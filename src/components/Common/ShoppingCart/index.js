/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import onClickOutside from "react-onclickoutside"

import cardImg from "../../../images/products/dumy.svg"

function ShoppingCart({ products }) {
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

          <span
            className={`items-notification ${!itemsCounter && "black-color"}`}
          >
            {itemsCounter > 9 ? "9+" : itemsCounter}
          </span>

          <span className="material-icons md-19 md-white shopping-cart-arrow-icon">
            {showCart ? "expand_less" : "expand_more"}
          </span>

          {showCart && <div className="background-blur" />}
        </button>
      </div>

      {showCart && (
        <div className="cart">
          <div>
            {products && products.length > 0 ? (
              products.map(({ name, price }, i) => (
                <div className="cart-product" key={name}>
                  <img src={cardImg} alt="Product" className="cart-image" />
                  <p className="cart-title" title={name}>
                    {name} #{i + 1}
                  </p>
                  <p className="cart-price" title={price}>
                    ${price}
                  </p>
                </div>
              ))
            ) : (
              <p className="cart-empty-msg">Your cart is empty</p>
            )}
          </div>
          <div className="cart-btn">
            <button
              sx={{
                variant: "button.primary",
                padding: "6px 14px 6px",
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
