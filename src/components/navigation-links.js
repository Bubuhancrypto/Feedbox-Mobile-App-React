import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <div className="navigation-links-container">
        <a
          href="https://rifkipersonal.vercel.app/#about"
          className="navigation-links-link navbar-link"
        >
          {props.text}
        </a>
        <a
          href="https://rifkipersonal.vercel.app/#work"
          className="navigation-links-link1 navbar-link"
        >
          {props.text1}
        </a>
        <a
          href="https://rifkipersonal.vercel.app/#connect"
          className="navigation-links-link2 navbar-link"
        >
          {props.text2}
        </a>
      </div>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: "Let's Connect",
  rootClassName: '',
  text: 'About Me',
  text1: 'My Work',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
