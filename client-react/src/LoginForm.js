import React from 'react'

class loginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
        nick: '',
        password: ''
    }
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.loginFunc(this.state.nick, this.state.password)
  }

  handleLoginChange (event) {
    this.setState({ nick: event.target.value })
  }

  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
  }
  
  render () {
    return (
      <form id='send-message' onSubmit={this.handleSubmit.bind(this)}>
        <input id='nickname' type='text' placeholder='enter nickname' value={this.state.nick} onChange={this.handleLoginChange.bind(this)} />
        <input id='password' type='text' placeholder='enter password' value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
        <button type='submit'>Login</button>
      </form>
    )
  }
}

export default loginForm

//this.props means it is somewhere else

//onChange events change state

//actively re-rendering everytime

//if you need to pass data up, you do it through prop drilling

//CamelCase for React - classes and functional components

//nuggets of wisdom from Dustin