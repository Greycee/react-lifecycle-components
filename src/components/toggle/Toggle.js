import React, { Component } from 'react'

export default class Toggle extends Component {
  handleChange = (e) => {
    const { onToggle } = this.props
    const isChecked = e.target.checked
    onToggle(isChecked)
  }
  render() {
    const { enabled } = this.props
    return (
      <div className="switch">
        <label>
          Show users:
          <input
            type="checkbox"
            checked={enabled}
            onChange={this.handleChange}
          />
          <span className="lever"></span>
        </label>
      </div>
    )
  }
}
