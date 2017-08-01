import React from 'react'

function UpdateInfo(props) {
  console.log(props)
  return (
    <div>
      hello
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
