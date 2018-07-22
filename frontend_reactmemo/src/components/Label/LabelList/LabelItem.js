import React, { Fragment } from 'react';
import styles from './LabelList.scss'
import classNames from 'classnames/bind'
import { DragSource } from 'react-dnd'
import { Link, withRouter } from 'react-router-dom'

const cx = classNames.bind(styles)

const labelSource = {
  beginDrag(props) {
    return {
      type: 'label',
      id : props.value,
    }
  }
}

const LabelItem = ({
  labelName,
  amount,
  value,
  targetLabel,
  editLabelMode,
  onChange,
  onClick,
  onKeyPress,
  connectDragSource,
}) => {
  const clicked = (value === targetLabel) ? 'clicked' : 'label'
  return connectDragSource(
      <label className={cx(clicked)} id={value} >
        <input type='radio' className={cx('radio')} name='label' value={value} onClick={onClick} />
        { editLabelMode && targetLabel === value ?
        (
          <input
            className={cx('edit')}
            type='text'
            autoFocus
            maxLength='11'
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        )
        :
        (
          <Fragment>
            <div>
              {labelName}
            </div>
            <div>
              ({amount})
            </div>
          </Fragment>
        )
        }
      </label>
  )
}
export default DragSource('label',labelSource, connect => ({
  connectDragSource: connect.dragSource()
}))(withRouter(LabelItem))