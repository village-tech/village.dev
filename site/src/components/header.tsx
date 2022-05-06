import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header: React.VFC<{ siteTitle: string }> = ({ siteTitle }) => {
  return (
    <header className="relative w-full max-w-screen-lg px-12 pt-4 mx-auto text-gray-700 bg-white body-font">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <Link
          to="/"
          className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none hover:text-indigo-500"
        >
          {siteTitle}
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
