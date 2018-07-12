import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as header from 'store/modules/header'
import HamburgerModal from 'components/HamburgerModal'

class HamburgerModalContainer extends Component {

  toggleHamburgerModal = () => {
    const { header } = this.props
    header.toggleHamburgerModal()
  }

  componentDidUpdate(prevProps,prevState) {
    const { isHamburgerModalOn } = prevProps.header
    return (
      <HamburgerModal
        isHamburgerModalOn={isHamburgerModalOn}
      />
    )
  }

  render() {
    const { toggleHamburgerModal } = this
    const { isHamburgerModalOn } = this.props
    return (
      <HamburgerModal
        toggleHamburgerModal={toggleHamburgerModal}
        isHamburgerModalOn={isHamburgerModalOn}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    isHamburgerModalOn: state.header.isHamburgerModalOn,
  }
}

let mapDispatchToProps = dispatch => {
  return {
    header : bindActionCreators(header, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerModalContainer)