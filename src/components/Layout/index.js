/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import "../../scss/main.scss"

export default function Layout({ children, products }) {
  return (
    <>
      <Header products={products} />
      <main sx={{ paddingTop: 50 }}>{children}</main>
      <footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
