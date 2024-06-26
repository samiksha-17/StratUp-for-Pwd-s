import React from 'react'

import PropTypes from 'prop-types'

import './guide1.css'

const Guide1 = (props) => {
  return (
    <div className={`guide1-guide ${props.rootClassName} `}>
      <img alt="image" src={props.portrait} className="guide1-portrait" />
      <div className="guide1-details">
        <h3 className="guide1-name">{props.name}</h3>
        <span className="guide1-location">{props.location}</span>
      </div>
    </div>
  )
}

Guide1.defaultProps = {
  rootClassName: '',
  name: 'Miura Avaron',
  portrait: '6eb3173f-7401-4028-b190-0da86e81df12',
  location: 'Tokyo, Japan',
}

Guide1.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  portrait: PropTypes.string,
  location: PropTypes.string,
}

export default Guide1
