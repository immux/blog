import React, { useEffect, useState } from 'react'
import { Link, FormattedMessage } from "gatsby-plugin-intl"
import "./style.scss"
import Language from "../language/language"

interface Props {
  title: string
  location: Location
}

const Navibar: React.FC<Props> = ({ location, title }: Props) => {
  const [showNavbar, setShowNavbar] = useState(false)

  const toggleNavbar = () => {
    setShowNavbar(showNavbar => !showNavbar)
  }

  const navbarCls = showNavbar ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'

  const isHomeRoute = ['/blog', '/contact'].every(route => !location.pathname.includes(route))

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">

        <Link className="text-center mr-4 navbar-brand" to="/">
          <img width="48" height="48" src="/img/logo.png" alt="immux"/>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={navbarCls} id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li
              className={
                isHomeRoute ? 'nav-item active' : 'nav-item'
              }
            >
              <Link to="/" className="nav-link">
                <FormattedMessage id="header.indexTitle" />
              </Link>
            </li>
            <li
              className={
                location.pathname.includes('/blog/')
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to="/blog/" className="nav-link">
                <FormattedMessage id="header.blogTitle" />
              </Link>
            </li>
            <li
              className={
                location.pathname.includes('/contact/')
                  ? 'nav-item active'
                  : 'nav-item'
              }
            >
              <Link to="/contact/" className="nav-link">
                <FormattedMessage id="header.contactTitle" />
              </Link>
            </li>
          </ul>
          <Language />
        </div>
      </div>
    </nav>
  )
}

export default Navibar
