import React from 'react'
import PropTypes from 'prop-types'

const LinkComponent = ({ to, children, className }) => (
  <a href={ to } className={ className }>{ children }</a>
)

LinkComponent.proTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}

export default LinkComponent