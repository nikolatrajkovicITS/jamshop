/** @jsx jsx */
import React, { useRef } from "react"
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "../../Grid"
import ProductCard from "../../Common/ProductCard"

import HeroBackground from "../../../images/elements/hero_background.svg"
import HeroImage from "../../../images/elements/monitor.svg"
import HeroDecor from "../../../images/elements/hero_decor.svg"
import { useStaticQuery, graphql } from "gatsby"

function HomepageHero(props) {
  const productsRef = React.createRef()

  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          data {
            name
            slug
            excerpt
            imageUrl
          }
        }
      }
    }
  `)

  const scrollProducts = isRight => {
    if (!productsRef) {
      return
    }
    productsRef.current.scrollLeft = isRight
      ? productsRef.current.scrollLeft + productsRef.current.scrollWidth
      : productsRef.current.scrollLeft - productsRef.current.scrollWidth
  }

  return (
    <>
      <section sx={{ paddingTop: [60, 60, 105] }}>
        <Row styles={{ justifyContent: ["center"] }}>
          <Col styles={styles.imgWrapper}>
            <img src={HeroImage} alt="Vector Monitor" sx={{ maxWidth: "1" }} />
          </Col>
          <Col styles={styles.leadWrapper}>
            <Styled.h1 sx={styles.heading}>
              Don't waste time
              <br />
              on boring things
            </Styled.h1>
            <button sx={{ variant: "button.primary", mx: ["auto", null, 0] }}>
              GO EXPLORE
            </button>
          </Col>
        </Row>
        <img src={HeroBackground} sx={styles.backgroundImg} />
      </section>

      <section ref={productsRef}>
        <div>
          <button onClick={() => scrollProducts(false)}>Left</button>
          <button onClick={() => scrollProducts(true)}>Right</button>
        </div>
        <Row styles={styles.productCards}>
          {site.siteMetadata.data.map(product => (
            <ProductCard key={product.name} {...product} />
          ))}
        </Row>
      </section>
    </>
  )
}

export default HomepageHero

const styles = {
  heading: {
    variant: "text.heading",
    position: "relative",
    ml: [null, null, null, "30px"],
    textAlign: ["center", null, "left"],
    textShadow: "1px 2px rgba(0, 0, 0, .2)",
    "::after": {
      position: "absolute",
      content: `url("${HeroDecor}")`,
      width: "97px",
      height: "43px",
      top: -15,
      right: -55,
      display: ["none", null, null, "block"],
      zIndex: -1,
    },
  },

  imgWrapper: {
    width: ["1", "1", "2/5", null, 450],
    textAlign: ["center", "center", "left"],
    order: [2, 2, 1],
  },

  leadWrapper: {
    width: ["1", "1", "3/5", null, 650],
    ml: ["auto", 0, 0, 0, 0, 100],
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    order: [1, 1, 2],
    mb: ["65px", "65px", 0],
  },

  backgroundImg: {
    position: "absolute",
    top: 0,
    right: 0,
    display: ["none", null, "block"],
    zIndex: -1,
  },

  productCards: {
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    overflowY: "auto",
    overflowX: "scroll",
    marginTop: 50,
    webkitScrollSnapType: "mandatory",
    scrollSnapType: "x mandatory",
    webkitScrollSnapPointsX: "repeat(100%)",
    scrollSnapPointsX: "repeat(100%)",
    scrollBehavior: "smooth",
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE 10+ */,
    "::-webkit-scrollbar": {
      width: 0,
      height: 0,
      background: "transparent" /* Chrome/Safari/Webkit */,
    },
  },
}
