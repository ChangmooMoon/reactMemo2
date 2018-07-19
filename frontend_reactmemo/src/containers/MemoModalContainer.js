import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as memoModal from 'store/modules/memoModal'

import MemoModal from 'components/MemoModal'

class MemoModalContainer extends Component {
  toggleModal = () => {
    const { memoModal } = this.props
    memoModal.openMemoModal()
  }

  typeMemoTitle = (e) => {
    const { memoModal } = this.props
    memoModal.typeMemoTitle(e.target.value)
  }

  typeMemoContent = (e) => {
    const { memoModal } = this.props
    memoModal.typeMemoContent(e.target.value)
  }

  closeMemo = () => {
    this.clearMemo()
    this.toggleModal()
  }

  clearMemo = () => {
    const { memoModal } = this.props
    memoModal.resetMemoState()
  }

  createMemo = () => {
    const { memoModal, title, content, targetLabel, targetMemo } = this.props
    targetMemo === ""
    ? memoModal.createMemo(title, content, targetLabel)
    : memoModal.editMemo(title,content,targetMemo)
    this.closeMemo()
  }

  handleReadMode = () => {
    const { memoModal } = this.props
    memoModal.handleReadMode()
  }



  render() {
    const { isOpen, title, content, readMode } = this.props
    const { toggleModal, typeMemoTitle, typeMemoContent, createMemo, clearMemo, closeMemo, handleReadMode } = this
    return (
        <MemoModal
          isOpen={isOpen}
          title={title}
          content={content}
          readMode={readMode}

          toggleModal={toggleModal}
          typeMemoTitle={typeMemoTitle}
          typeMemoContent={typeMemoContent}
          createMemo={createMemo}
          clearMemo={clearMemo}
          closeMemo={closeMemo}
          handleReadMode={handleReadMode}
        />
    );
  }
}

let mapStateToProps = state => {
  return {
    isOpen : state.memoModal.isOpen,
    title: state.memoModal.title,
    content : state.memoModal.content,
    readMode: state.memoModal.readMode,
    targetLabel : state.label.targetLabel,
    targetMemo: state.memoList.targetMemo
  }
}

let mapDispatchToProps = dispatch => {
  return {
    memoModal : bindActionCreators(memoModal,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MemoModalContainer);