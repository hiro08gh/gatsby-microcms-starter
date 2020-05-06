import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-white h-16 relative flex items-center shadow-lg">
    <div className="container mx-auto px-2">
      <h1 className="text-base m-0">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

export default Header
