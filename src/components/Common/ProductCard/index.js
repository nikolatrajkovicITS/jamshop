/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { navigate } from "gatsby"

import cardImg from "../../../images/products/dumy.svg"

export default ({ product, redirectUrl, handleClick }) => {
  const { name, excerpt } = product

  const handleRedirect = url => {
    navigate(url)
  }

  const handleBtnClick = e => {
    e.stopPropagation()
    // handleClick(product)
  }

  return (
    <article
      className="product-card"
      onClick={() => handleRedirect(redirectUrl)}
    >
      <div className="product-card-body">
        <div>
          <img
            className="product-card-img"
            src={cardImg}
            alt="product"
            sx={{ maxWidth: "1" }}
          />
        </div>
        <div>
          <p className="product-card-title" title={name}>
            {name}
          </p>
          <p className="product-card-description">{excerpt}</p>
        </div>
        <div>
          <div className="add-btn-wrapper">
            <button className="add-btn" onClick={handleBtnClick} type="button">
              <span className="material-icons md-37 md-purply">add_circle</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
