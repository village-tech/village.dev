import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai'
import { FaBookOpen } from 'react-icons/fa'

const Footer: React.VFC<{ siteTitle: string }> = ({ siteTitle }) => {
  const linkStyle =
    'ml-4 mr-4 text-xl rounded-full transition duration-100 ease-in-out transform hover:scale-125 text-black p-3 hover:bg-blue-100'

  return (
    <footer className="max-w-screen-lg mx-auto text-gray-700 bg-white body-font">
      {/* <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
        <a
          href="#_"
          className="text-2xl font-black leading-none text-gray-900 select-none logo hover:text-indigo-500"
        >
          {siteTitle}
        </a>
        <p className="mt-4 text-gray-500 text-md sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
          2022
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-end">
          <Link to="https://twitter.com/village_tech_co" className={linkStyle}>
            <span className="sr-only">Twitter</span>
            <AiFillTwitterCircle />
          </Link>

          <Link to="https://github.com/village-tech" className={linkStyle}>
            <span className="sr-only">GitHub</span>
            <AiFillGithub />
          </Link>

          <a
            href="https://village.substack.com"
            className={linkStyle}
            target="_blank"
            rel="noreferrer"
          >
            <FaBookOpen />
          </a>

          <a href="https://linkedin.com/in/village" className={linkStyle}>
            <span className="sr-only">LinkedIn</span>
            <AiFillLinkedin />
          </a>
        </span>
      </div> */}
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
