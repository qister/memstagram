import React from 'react'
import { AuthPage } from '../pages/AuthPage'
import { connect } from 'react-redux'
import { authLogin } from '../actions/AuthActions'
import { setCurrentUser } from '../actions/actions.mjs'

const mapStateToProps = state => {
  return {
    authStarted: state.authorization.authStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authLoginAction: (credentials) => dispatch(authLogin(credentials)),
    setCurrentUser: (username) => dispatch(setCurrentUser(username))
  }
}

const AuthPage_ = connect(mapStateToProps, mapDispatchToProps)(AuthPage)

export const AuthContainer = () => {

  return (
    <AuthPage_ />
  )
}




