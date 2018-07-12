import React from 'react';
import styles from './Nav.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Nav = () => {
  return (
    <div className={cx('side-nav')}>
      <span className={cx('left')}>
        <div className={cx('menu')}>
          About
        </div>
        <div className={cx('menu')}>
          Contact
        </div>
      </span>
      <span className={cx('right')} />
    </div>
  );
};

export default Nav;