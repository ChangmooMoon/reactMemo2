import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import * as db from 'store/modules/db'
import * as label from 'store/modules/label'

import LabelList from 'components/Label/LabelList'

class LabelContainer extends Component {

  onChangeTargetLabel = (e) => {
    const { label } = this.props
    label.onChangeTargetLabel(e.target.value)
  }

  addLabel = () => {
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
        this.addLabel()
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

  onDragStart = (e) => {
    e.dataTransfer.setData('text/plain',e.target.id)
    console.log(e.target.id)
  }

  onDragEnd = (e) => {
    console.log(e.target.id)
  }

  onDrop = (e) => {
    console.log(e.target.id)
  }

  async componentDidMount(){
    try {
      this.getLabelList()
    } catch (e) {
      console.log(e)
    }
  }


  render() {
    const { data, addLabelMode, targetLabel } = this.props
    const { addLabel,onChangeNewLabelName,createNewLabel, onChangeTargetLabel } = this
    return (
      <LabelList
        data={data}
        targetLabel={targetLabel}
        addLabelMode={addLabelMode}
        addLabel={addLabel}
        onChangeNewLabelName={onChangeNewLabelName}
        createNewLabel={createNewLabel}
        onChangeTargetLabel={onChangeTargetLabel}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    data : state.db.data,
    targetLabel : state.label.targetLabel,
    addLabelMode : state.label.addLabelMode,
    newLabelName : state.label.newLabelName
  }
}

let mapDispatchToProps = dispatch => {
  return {
    db : bindActionCreators(db, dispatch),
    label: bindActionCreators(label, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(LabelContainer))