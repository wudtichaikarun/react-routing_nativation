import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RouterComponent extends Component {

  static childContextTypes = {
    onPathChange: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
  }

  getChildContext = () => {
    return {
      onPathChange: this.onPathChange,
      path: this.state.path
    }
  }

  state = {
    path: this.getCurrentPath()
  }

  getCurrentPath () {
    return window.location.pathname
  }

  onPathChange = (path) => {
    window.history.pushState(null, '', path)
    this.setState( { path: this.getCurrentPath() })
  }

  render() {
    return this.props.children
  }
}

export default RouterComponent