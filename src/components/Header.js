/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import ShoppingCart from "./Common/ShoppingCart"

export default function Header({ products }) {
  return (
    <header className="header">
      <Link to="/" sx={styles.mainLink}>
        JAM SHOP
      </Link>
      <div className="shopping-cart">
        <ShoppingCart products={products} />
      </div>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

const styles = {
  mainLink: {
    variant: "text.link",
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
}
