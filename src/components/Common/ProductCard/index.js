/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default ({ name, slug, excerpt, imageUrl }) => {
  const redirectUrl = `/products/${slug.trim()}`

  return (
    <article sx={styles.product}>
      <Link to={redirectUrl}>
        <div sx={{ backgroundImage: `url('${imageUrl}')` }} />
        <div sx={styles.productContent}>
          <div>
            <p sx={styles.productContent}> {name}</p>
          </div>

          <h1> {slug}</h1>
          <h1 className="color"> {excerpt}</h1>
        </div>
      </Link>
    </article>
  )
}

const styles = {
  product: {
    flex: "0 0 21%",
    maxWidth: "21%",
    height: "auto",
    minHeight: 270,
    padding: "0 10px",
    margin: "30px 32px",
    scrollSnapAlign: "start",
    border: "2px solid white",
  },
}
