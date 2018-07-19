import React from 'react';
import moment from 'moment'
import styles from './MemoListBox.scss'
import classNames from 'classnames/bind'
import { DragSource } from 'react-dnd'

const cx = classNames.bind(styles)

const memoSource = {
  beginDrag(props) {
    return {
      type: 'memo',
      id: props.value
    }
  }
}

const MemoItem = ({
  title,
  updatedAt,
  content,
  value,

  onClick,
  connectDragSource
}) => {
  if(title.length > 18) {
    title = title.slice(0,18) + '...'
  }
  if(content.length > 120) {
    content = content.slice(0,120) + '...'
  }
  return connectDragSource(
    <div className={cx('memo-item')} onClick={onClick} id={value}>
      <div className={cx('title')}>{title}</div>
      <div className={cx('date')}>Updated: {moment(updatedAt).format('YY-MM-DD')}</div>
      <div className={cx('contents')}>{content}</div>
    </div>
  )
}

export default DragSource('memo',memoSource, connect => ({
  connectDragSource: connect.dragSource()
}))(MemoItem)