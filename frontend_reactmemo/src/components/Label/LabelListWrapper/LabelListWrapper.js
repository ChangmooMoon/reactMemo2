import React from 'react';
import styles from './LabelListWrapper.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const LabelListWrapper = ({children}) => {
  return (
    <div className={cx('label-box')}>
      {children}
    </div>
  );
};

export default LabelListWrapper;