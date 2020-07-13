import React from 'react'
import { AuthPage } from '../pages/AuthPage'
import { connect } from 'react-redux'
import { authLogin } from '../actions/AuthActions'

const mapStateToProps = state => {
  return {
    authIsStart: state.authorization.authIsStart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authLoginAction: (credentials) => dispatch(authLogin(credentials))
  }
}

const AuthPage_ = connect(mapStateToProps, mapDispatchToProps)(AuthPage)

export const AuthContainer = () => {

  return (
    <AuthPage_ />
  )
}




