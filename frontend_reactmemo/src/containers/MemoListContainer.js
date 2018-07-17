import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import MemoListBox from 'components/MemoList/MemoListBox'

class MemoListContainer extends Component {
  render() {
    return (
      <MemoListBox />
    );
  }
}

export default MemoListContainer;