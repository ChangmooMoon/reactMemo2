import React, { Fragment } from 'react'
import styles from './MemoListBox.scss'
import classNames from 'classnames/bind'
import MemoItem from './MemoItem'

import AddCircle from 'static/AddCircle'

const cx = classNames.bind(styles)

const AddMemo = ({
  onClick
}) => {
  return (
    <span className={cx('memo-item','button')} onClick={onClick}>
      <AddCircle />
    </span>
  )
}

const MemoListBox = ({
  memoData,
  labelData,

  openMemoModal,
  targetLabel
}) => {
  if(!memoData || !labelData) return null
  else {
    const targetLabelMemoData = labelData.find(element => element._id === targetLabel )
    return (
      <div className={cx('memo-list-box')}>
        {
          targetLabel === 'All' && memoData.length === 0 ?
          <span className={cx('memo-item','button')}>
              메모가 없습니다
          </span>
          : null
        }
        {
          targetLabel === 'All' ?
            (
              memoData.map(element => (
                <MemoItem
                  key={element._id}
                  value={element._id}
                  title={element.title}
                  createdAt={element.createdAt}
                  content={element.content}

                  onClick={openMemoModal}
              />))
            )
            :
            (
              <Fragment>
                <AddMemo onClick={openMemoModal}/>
                {
                  targetLabelMemoData.memos.map(element => (
                    <MemoItem
                      key={element._id}
                      value={element._id}
                      title={element.title}
                      createdAt={element.createdAt}
                      content={element.content}

                      onClick={openMemoModal}
                      />
                  ))
                }
              </Fragment>

            )
        }
      </div>
    )}
}

export default MemoListBox;