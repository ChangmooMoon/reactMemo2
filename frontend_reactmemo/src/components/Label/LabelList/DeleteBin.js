import React, { Component} from 'react';
import styles from './LabelList.scss'
import classNames from 'classnames/bind'
import { DropTarget } from 'react-dnd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Bin from 'static/Bin'

import * as label from 'store/modules/label'


const cx = classNames.bind(styles)

const labelTarget = {
  drop(props, monitor,component) {
    console.log(props)
    const id = monitor.getItem().id
    if(props.targetLabel === id) {
      props.label.resetTargetLabel()
    }
    props.label.deleteLabel(id)
  }
}

class DeleteBin extends Component {
  render(){
    const { connectDropTarget } = this.props
    return connectDropTarget(
      <span className={cx('bin-box')}>
        <span className={cx('button','button2')}>
          <Bin />
        </span>
      </span>
  )}
}

DeleteBin = DropTarget('label',labelTarget,(connect,monitor) => ({
  connectDropTarget: connect.dropTarget()
}))(DeleteBin)

let mapStateToProps = state => {
  return {
    targetLabel : state.label.targetLabel
  }
}

let mapDispatchToProps = dispatch => {
  return {
    label: bindActionCreators(label, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteBin)