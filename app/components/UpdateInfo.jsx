import React from 'react'
import { Button, wellStyles, Form, FormGroup, ControlLabel, Col, FormControl } from 'react-bootstrap'

// this form is for new users
function UpdateInfo(props) {
  return (
    <div>
      <form onSubmit={evt => {
        evt.preventDefault()
        props.update({
          id: props.auth.id,
          email: evt.target.email.value,
          address: evt.target.address.value,
          paypal: evt.target.paypal.value,
          phone: evt.target.phone.value,
        })
        props.history.push('/home')
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
          <FormGroup controlId="paypal">
            <Col componentClass={ControlLabel} sm={2}>
              PayPal Email
        </Col>
            <Col sm={4}>
              <FormControl name='paypal' type="email" placeholder="PayPal Email" />
            </Col>
          </FormGroup>
          <FormGroup controlId="address">
            <Col componentClass={ControlLabel} sm={2}>
              Address
        </Col>
            <Col sm={4}>
              <FormControl name='address' type="text" placeholder="Address" />
            </Col>
          </FormGroup>
          <FormGroup controlId="phone">
            <Col componentClass={ControlLabel} sm={2}>
              Telephone
        </Col>
            <Col sm={4}>
              <FormControl maxLength="10" name='phone' type="tel" placeholder="Phone Number" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Update Info
          </Button>
            </Col>
          </FormGroup>
        </Form>
      </form>
    </div>
  )
}

import { update } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export default connect(
  state => ({ auth: state.auth }),  // mapStateToProps
  dispatch => ({
    update: userObj => dispatch(update(userObj))
  }),        // mapDispatchToProps
)(UpdateInfo)
