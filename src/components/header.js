import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <nav>
      <h1>
        <Link to="/">Thibaud</Link>
      </h1>
      <h1>
        <Link to="/about">About</Link>
      </h1>
    </nav>
  </header>
)

export default Header
