import React, { Fragment } from 'react';
import styles from './LabelList.scss'
import classNames from 'classnames/bind'
import { DragSource } from 'react-dnd'

const cx = classNames.bind(styles)

const labelSource = {
  beginDrag(props) {
    return {
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
  connectDragSource,
}) => {
  const clicked = (value === targetLabel) ? 'clicked' : 'label'
  return connectDragSource(
      <label className={cx(clicked)} draggable='true' id={value} >
        <input type='radio' className={cx('radio')} name='label' value={value} onClick={onClick} />
        { editLabelMode && targetLabel === value ?
        (
          <input
            placeholder='        edit mode'
            className={cx('edit')}
            type='text'
            autoFocus
            maxLength='11'
            onChange={onChange}
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
}))(LabelItem)