import React, { Component } from 'react'

export default class User extends Component {
  render() {
    const { login, name, picture } = this.props.user
    return (
      <div style={styles.flexRow}>
        <img style={styles.avatar} src={picture.large} alt={name.first} />
        <span>{`${name.first} ${name.last}`}</span>
      </div>
    )
  }
}

const styles = {
  flexRow: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '60px',
    borderRadius: '50%',
    margin: '10px',
  },
}
