/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import cardImg from "../../../images/products/dumy.svg"

export default ({ name, slug, excerpt, imageUrl }) => {
  const redirectUrl = `/products/${slug.trim()}`

  return (
    <article className="product-card">
      <Link to={redirectUrl}>
        <img
          className="product-card-img"
          src={cardImg}
          alt="product"
          sx={{ maxWidth: "1" }}
        />
        <div>
          <div>
            <p className="product-card-title">{name}</p>
          </div>

          <h1 className="product-card-description"> {excerpt}</h1>
        </div>
      </Link>
    </article>
  )
}
