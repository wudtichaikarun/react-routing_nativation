import React from 'react'
import PropTypes from 'prop-types'

const RouteComponent = (props, context) => (
  props.path === context.path && (
    React.createElement(props.component)
  )
)

// Props
RouteComponent.propTypes = {
  path: PropTypes.string.isRequired
}

// Context
RouteComponent.contextTypes = {
  path: PropTypes.string.isRequired
}

export default RouteComponent