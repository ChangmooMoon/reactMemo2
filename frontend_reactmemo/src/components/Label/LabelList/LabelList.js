import React from 'react';
import styles from './LabelList.scss'
import classNames from 'classnames/bind'
import LabelItem from './LabelItem'
import DeleteBin from './DeleteBin'

import AddCircle from 'static/AddCircle'

const cx = classNames.bind(styles)

const AddLabel = ({onClick}) => {
  return(
    <span className={cx('button')} onClick={onClick}>
      <AddCircle />
    </span>
  )
}

const NameNewLabel = ({onChange, onKeyPress}) => {
  return (
    <input
      type='text'
      className={cx('label', 'naming-label')}
      autoFocus
      onChange={onChange}
      onKeyPress={onKeyPress}
      maxLength='11'
    />
  )
}

const LabelList = ({
  data,
  addLabelMode,
  editLabelMode,
  targetLabel,
  handleLabelAdd,
  onChangeNewLabelName,
  createNewLabel,
  editLabelName,
  onChangeTargetLabel,
  handleClick
}) => {
  if (!data) return null
  else {
    const amountAll = data.reduce((a,b) => {
      return a + b.memos.length
    },0)
    return (
    <div className={cx('label-list')}>
      <DeleteBin />
      <LabelItem labelName={'All'} amount={amountAll} value={'All'} onClick={onChangeTargetLabel} targetLabel={targetLabel} />
      {
        data.map(element => {
        return (
          <LabelItem
            key={element._id}
            value={element._id}
            labelName={element.title}
            amount={element.memos.length}
            targetLabel={targetLabel}
            editLabelMode={editLabelMode}
            onChange={onChangeNewLabelName}
            onKeyPress={editLabelName}
            onClick={handleClick}
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
      <AddLabel onClick={handleLabelAdd}/>
    </div>
  )}
}

export default LabelList;