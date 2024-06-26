import React from 'react'

import PropTypes from 'prop-types'

import './article1.css'

const Article1 = (props) => {
  return (
    <div className={`article1-article ${props.rootClassName} `}>
      <img alt="image" src={props.image} className="article1-image" />
      <div className="article1-content">
        <div className="article1-heading">
          <h2 className="article1-header">{props.header}</h2>
          <p className="article1-description">{props.description}</p>
        </div>
        <button className="button-arrow button">
          <span className="article1-text">Read more</span>
          <span className="article1-text1">&gt;</span>
        </button>
      </div>
    </div>
  )
}

Article1.defaultProps = {
  image: 'https://play.teleporthq.io/static/svg/default-img.svg',
  header: 'Understand your customers',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  rootClassName: '',
}

Article1.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Article1
