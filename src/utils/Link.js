import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const handleClick = (to, onPathChange ) => {
  return event => {
    event.preventDefault()
    onPathChange(to)
  }
}

const getClassNames = (className, to, path) => {
  return classNames(className, { active: to === path })
}

const LinkComponent = ({ to, children, className }, { onPathChange, path }) => (
  <a 
    href='#' 
    onClick={handleClick(to, onPathChange) }
    className={ getClassNames(className, to, path) } >
      { children }
  </a>
)

// Props
LinkComponent.proTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}

// Context
LinkComponent.contextTypes = {
  onPathChange: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
}

export default LinkComponent