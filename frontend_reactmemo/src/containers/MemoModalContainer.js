import React, { Component } from 'react';
import MemoModal from 'components/MemoModal'

class MemoModalContainer extends Component {
  state = {
    isOpen: true
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
        <MemoModal
          show={this.state.isOpen}
          onClose={this.toggleModal}
        />
    );
  }
}

export default MemoModalContainer;