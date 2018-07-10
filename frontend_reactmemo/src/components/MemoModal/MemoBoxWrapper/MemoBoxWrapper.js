import React from 'react';
import styles from './MemoBoxWrapper.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const MemoWrapper = ({children}) => {
  return (
    <div className={cx('memo-box')}>
      {children}
    </div>
  );
};

export default MemoWrapper;