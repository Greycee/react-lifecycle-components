import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
  constructor() {
    super()
    this.state = { secondsVisible: 0 }
    this.interval = null
  }
  componentDidMount() {
    console.log('componentDidMount of Users')
    this.interval = setInterval(() => {
      const { secondsVisible } = this.state
      this.setState({ secondsVisible: secondsVisible + 1 })
    }, 1000)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate of Users')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount of Users')
    //to avoid errors on console
    clearInterval(this.interval)
  }
  render() {
    const { users } = this.props
    const { secondsVisible } = this.state
    return (
      <div>
        <p>Users component visible for {secondsVisible} seconds</p>
        <ul>
          {users.map((user) => {
            const { login } = user
            return (
              <li key={login.uuid}>
                <User user={user} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
