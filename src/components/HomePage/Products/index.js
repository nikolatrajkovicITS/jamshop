/** @jsx jsx */
import React, { useRef } from "react"
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import ProductCard from "../../Common/ProductCard"
import ScrollBtn from "../../Common/ScrollBtn"

function Products({ handleAddProduct }) {
  const productsListRef = useRef()
  const productRef = useRef()

  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          data {
            name
            slug
            excerpt
            imageUrl
            price
          }
        }
      }
    }
  `)

  const scrollProducts = (e, isRight) => {
    e.stopPropagation()
    if (!productsListRef) {
      return
    }
    productsListRef.current.scrollLeft = isRight
      ? productsListRef.current.scrollLeft + productRef.current.offsetWidth
      : productsListRef.current.scrollLeft - productRef.current.offsetWidth
  }

  return (
    <section sx={{ marginTop: 70 }}>
      <div>
        <p className="products-section-title"> Explore community choices </p>
        <p className="products-section-title-sub">
          Updated daily based on most popular choices among dev community
        </p>
      </div>
      <div className="arrow-btns-wrapper">
        <ScrollBtn
          isRight={false}
          cssClass="arrow-btn-left"
          handleScroll={scrollProducts}
        />
        <ScrollBtn
          isRight
          cssClass="arrow-btn-right"
          handleScroll={scrollProducts}
        />
      </div>
      <div className="products" ref={productsListRef}>
        {site.siteMetadata.data.map(product => (
          <ProductCard
            key={product.name}
            product={product}
            productRef={productRef}
            handleClick={handleAddProduct}
            redirectUrl={`/products/${product.slug}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Products
