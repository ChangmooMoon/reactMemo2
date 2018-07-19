import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withDragDropContext from 'lib/withDragDropContext'

import * as db from 'store/modules/db'
import * as label from 'store/modules/label'

import LabelList from 'components/Label/LabelList'

class LabelContainer extends Component {

  timeout = null

  handleClick = e => {
    if(this.timeout) {
      this.handleLabelEdit()
      clearTimeout(this.timeout)
      this.timeout = null
    } else {
      this.onChangeTargetLabel(e)
      this.timeout = setTimeout(() => {
        this.timeout = null
      },200)
    }
  }

  onChangeTargetLabel = (e) => { // click label event
    this.clickedOnce = undefined
    const { label } = this.props
    label.onChangeTargetLabel(e.target.value)
  }

  handleLabelEdit = () => { // doubleClick label event
    const { label } = this.props
    label.editLabel()
    label.onChangeNewLabelName(null)
  }

  handleLabelAdd = () => {
    const { label } = this.props
    label.addLabel()
  }

  onChangeNewLabelName = (e) => {
    const { label } = this.props
    label.onChangeNewLabelName(e.target.value)
  }

  createNewLabel = async (e) => {
    const { label, newLabelName } = this.props
    if (e.charCode === 13) {
      await label.enrollLabel(newLabelName)
      .then(
        this.handleLabelAdd()
      )
    }
  }

  editLabelName = async (e) => {
    const { label, targetLabel, newLabelName } = this.props
    if (e.charCode === 13) {
      await label.editLabelName(targetLabel,newLabelName)
      .then(
        this.handleLabelEdit()
      )}
  }

  getLabelList = () =>  {
    const { db } = this.props
    db.getLabelList()
    setTimeout( () => {
      this.getLabelList()
    }, 1000 * 3)
  }

  async componentDidMount(){
    try {
      this.getLabelList()
    } catch (e) {
      console.log(e)
    }
  }


  render() {
    const { data,memoData, addLabelMode, editLabelMode, targetLabel } = this.props
    const { handleLabelAdd,onChangeNewLabelName,createNewLabel,editLabelName, onChangeTargetLabel,handleClick } = this
    return (
      <LabelList
        data={data}
        memoData={memoData}
        targetLabel={targetLabel}
        addLabelMode={addLabelMode}
        editLabelMode={editLabelMode}

        handleLabelAdd={handleLabelAdd}
        onChangeNewLabelName={onChangeNewLabelName}
        createNewLabel={createNewLabel}
        editLabelName={editLabelName}
        onChangeTargetLabel={onChangeTargetLabel}
        handleClick={handleClick}
      />
    );
  }
}


let mapStateToProps = state => {
  return {
    data : state.db.labelData,
    memoData : state.db.memoData,
    targetLabel : state.label.targetLabel,
    addLabelMode : state.label.addLabelMode,
    editLabelMode : state.label.editLabelMode,
    newLabelName : state.label.newLabelName
  }
}

let mapDispatchToProps = dispatch => {
  return {
    db : bindActionCreators(db, dispatch),
    label: bindActionCreators(label, dispatch)
  }
}

LabelContainer = withDragDropContext(LabelContainer)
export default connect(mapStateToProps, mapDispatchToProps)(LabelContainer)