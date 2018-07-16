import React from 'react';
import styles from './LabelList.scss'
import classNames from 'classnames/bind'

import AddCircle from 'static/AddCircle'
import Bin from 'static/Bin'

const cx = classNames.bind(styles)

const LabelItem = ({
  labelName,
  amount,
  value,
  targetLabel,
  onClick,
}) => {
  const clicked = (value === targetLabel) ? 'clicked' : 'label'
  return (
      <label className={cx(clicked)} draggable='true' id={value}>
        <input type='radio' className={cx('radio')} name='label' value={value} onClick={onClick}/>
        <div>
          {labelName}
          ({amount})
        </div>
      </label>
  )
}

const AddLabel = ({onClick}) => {
  return(
    <span className={cx('button')} onClick={onClick}>
      <AddCircle />
    </span>
  )
}

const DeleteLabel = () => {
  return (
    <span className={cx('bin-box')}>
      <span className={cx('button','button2')}>
        <Bin />
      </span>
    </span>
  )
}

const NameNewLabel = ({onChange, onKeyPress}) => {
  return (
    <input
      type='text'
      id='hello'
      className={cx('label', 'naming-label')}
      autoFocus
      onChange={onChange}
      onKeyPress={onKeyPress}
      maxLength='16'
    />
  )
}

const LabelList = ({
  data,
  addLabelMode,
  targetLabel,
  addLabel,
  onChangeNewLabelName,
  createNewLabel,
  onChangeTargetLabel,
}) => {
  if (!data) return null
  else {
    const amountAll = data.reduce((a,b) => {
      return a + b.memos.length
    },0)
    return (
    <div className={cx('label-list')}>
      <DeleteLabel />
      <LabelItem labelName={'All'} amount={amountAll} value={'All'} onClick={onChangeTargetLabel} targetLabel={targetLabel}/>
      {
        data.map(element => {
        return (
          <LabelItem
            key={element._id}
            value={element._id}
            labelName={element.title}
            amount={element.memos.length}
            targetLabel={targetLabel}
            onClick={onChangeTargetLabel}
            />
          )
        })
      }
      {
        addLabelMode ?
        <NameNewLabel
          onChange={onChangeNewLabelName}
          onKeyPress={createNewLabel}
          />
        : null
      }
      <AddLabel onClick={addLabel}/>
    </div>
  )}
}

export default LabelList;