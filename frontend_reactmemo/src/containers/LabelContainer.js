import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

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
    console.log(e)
    this.clickedOnce = undefined
    const { label } = this.props
    label.onChangeTargetLabel(e.target.value)
  }

  handleLabelEdit = () => { // doubleClick label event
    const { label } = this.props
    label.editLabel()
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

  getLabelList = () =>  {
    const { db } = this.props
    db.getLabelList()
    setTimeout( () => {
      this.getLabelList()
    }, 1000 * 2)
  }

  async componentDidMount(){
    try {
      this.getLabelList()
    } catch (e) {
      console.log(e)
    }
  }


  render() {
    const { data, addLabelMode, editLabelMode, targetLabel } = this.props
    const { handleLabelAdd,onChangeNewLabelName,createNewLabel, onChangeTargetLabel,handleClick } = this
    return (
      <LabelList
        data={data}
        targetLabel={targetLabel}
        addLabelMode={addLabelMode}
        editLabelMode={editLabelMode}

        handleLabelAdd={handleLabelAdd}
        onChangeNewLabelName={onChangeNewLabelName}
        createNewLabel={createNewLabel}
        onChangeTargetLabel={onChangeTargetLabel}
        handleClick={handleClick}
      />
    );
  }
}


let mapStateToProps = state => {
  return {
    data : state.db.data,
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

LabelContainer = DragDropContext(HTML5Backend)(LabelContainer)
export default connect(mapStateToProps, mapDispatchToProps)(LabelContainer)