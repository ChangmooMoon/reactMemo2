import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withDragDropContext from 'lib/withDragDropContext'

import * as db from 'store/modules/db'
import * as label from 'store/modules/label'
import * as memoModal from 'store/modules/memoModal'
import * as memoList from 'store/modules/memoList'

import MemoListBox from 'components/MemoList/MemoListBox'

class MemoListContainer extends Component {

  getAllMemoList = () => {
    const { db } = this.props
    db.getAllMemoList()
    setTimeout(() => {
      this.getAllMemoList()
    }, 1000 * 2)
  }
  openMemoModal = (e) => {
    const { memoModal, memoList, memoData } = this.props
    memoList.clickTargetMemo(e.currentTarget.id)
    const memo = memoData.find(element => element._id === e.currentTarget.id)
    if(memo !== undefined) {
      memoModal.loadTargetMemoTitle(memo.title)
      memoModal.loadTargetMemoContent(memo.content)
    }
    memoModal.openMemoModal()
  }

  async componentDidMount(){
    try {
      this.getAllMemoList()
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    const { memoData, labelData, targetLabel } = this.props
    const { openMemoModal } = this
    return (
      <MemoListBox
        memoData={memoData}
        labelData={labelData}
        targetLabel={targetLabel}

        openMemoModal={openMemoModal}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    targetLabel: state.label.targetLabel,
    targetMemo: state.memoList.targetMemo,
    memoData: state.db.memoData,
    labelData: state.db.labelData,
  }
}

let mapDispatchToProps = dispatch => {
  return {
    db: bindActionCreators(db,dispatch),
    label: bindActionCreators(label,dispatch),
    memoModal: bindActionCreators(memoModal, dispatch),
    memoList : bindActionCreators(memoList, dispatch)
  }
}

MemoListContainer = withDragDropContext(MemoListContainer)
export default connect(mapStateToProps, mapDispatchToProps)(MemoListContainer)