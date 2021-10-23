import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <nav>
      <h1>
        <span />
        <Link to="/">About</Link>
      </h1>
      <h1>
        <span />
        <Link to="/about">Thibaud</Link>
      </h1>
      <h1 />
    </nav>
  </header>
)

export default Header
