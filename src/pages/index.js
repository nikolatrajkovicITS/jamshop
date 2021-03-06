import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import Products from "../components/HomePage/Products"

import { Container } from "../components/Grid"

export default function IndexPage() {
  const [products, setProducts] = useState([])

  const handleAddProduct = product => {
    const tempProducts = [...products]
    tempProducts.push(product)
    setProducts(tempProducts)
  }

  return (
    <Layout products={products}>
      <SEO title="Home" />
      <Container>
        <Hero />
        <Products handleAddProduct={handleAddProduct} />
      </Container>
    </Layout>
  )
}
