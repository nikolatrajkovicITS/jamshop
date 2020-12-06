/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/Layout/index"
import cardImg from "../../images/products/dumy.svg"

export default function Product({ params }) {
  const [productData, setProductData] = useState({})

  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          data {
            name
            slug
            imageUrl
            price
            description
          }
        }
      }
    }
  `)

  useEffect(() => {
    getProductData()
  }, [])

  function getProductData() {
    if (params.slug) {
      const data = site.siteMetadata.data.find(
        product => product.slug === params.slug
      )
      setProductData(data)
    }
  }

  return (
    <Layout>
      <section className="product">
        <div className="product-image">
          <img src={cardImg} alt="Popular product" sx={{ maxWidth: "1" }} />
        </div>
        <div className="product-details">
          <div>
            <p className="product-label">POPULAR</p>
            <p className="product-name">{productData?.name || "N/A"}</p>
          </div>
          <p>{productData?.description || "N/A"}</p>
          <p className="product-price">${productData?.price || "N/A"}</p>
          <div className="product-btn">
            <button
              sx={{
                variant: "button.primary",
                padding: "8px 25px 9px",
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
