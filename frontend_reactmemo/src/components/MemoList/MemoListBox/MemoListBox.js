import React from 'react';
import styles from './MemoListBox.scss'
import classNames from 'classnames/bind'

import AddCircle from 'static/AddCircle'

const cx = classNames.bind(styles)

const AddMemo = () => {
  return(
    <span className={cx('memo-item','button')}>
      <AddCircle />
    </span>
  )
}

const MemoItem = ({
  title = '제목이 넘나 길어서 큰일일세',
  createdAt = '2018-07-07',
  contents = '미리보기내용이라네 이것도 너무 길어서 큰일일세'
}) => {
  return(
    <div className={cx('memo-item')} draggable='true'>
      <div className={cx('title')}>{title}</div>
      <div className={cx('date')}>Created: {createdAt}</div>
      <div className={cx('contents')}>{contents}</div>
    </div>
  )
}

let MemoItems = [<MemoItem />]

const MemoListBox = () => {
  return (
    <div className={cx('memo-list-box')}>
      <AddMemo />
      {MemoItems.map(item => item)}
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
      <MemoItem />
    </div>
  );
};

export default MemoListBox;