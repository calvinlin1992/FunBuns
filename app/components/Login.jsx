import React from 'react'
import { Button, wellStyles, Form, FormGroup, ControlLabel, Col, FormControl } from 'react-bootstrap'

export const Login = ({ login, loginFB }) => (
  <div>
    <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.email.value, evt.target.password.value)
    }}>
      <Form horizontal>
        <FormGroup controlId="email">
          <Col componentClass={ControlLabel} sm={2}>
            Email
        </Col>
          <Col sm={4}>
            <FormControl name='email' type="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup controlId="password">
          <Col componentClass={ControlLabel} sm={2}>
            Password
        </Col>
          <Col sm={4}>
            <FormControl name='password' type="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign In
          </Button>
          </Col>
        </FormGroup>
      </Form>
    </form>
    <div className="well" style={wellStyles}>
      <a href="/api/auth/login/facebook"><Button bsStyle="primary" bsSize="large" block>Facebook Login</Button></a>
    </div>
  </div>
)

import { login, loginFB } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

// props, sends login as a prop
export default connect(
  state => ({}),  // mapStateToProps
  { login, loginFB },        // mapDispatchToProps
)(Login)

// <input name="username" />
//     <input name="password" type="password" />
//     <input type="submit" value="Login" />
