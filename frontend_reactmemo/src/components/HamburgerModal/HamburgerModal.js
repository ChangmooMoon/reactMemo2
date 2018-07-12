import React from 'react';
import styles from './HamburgerModal.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const HamburgerModal = ({
  toggleHamburgerModal,
  isHamburgerModalOn
}) => {
  if(!isHamburgerModalOn) return null
  else return (
    <div className={cx('side-nav')}>
      <span className={cx('left')}>
        <div className={cx('menu')}>
          About
        </div>
        <div className={cx('menu')}>
          Contact
        </div>
      </span>
      <span className={cx('right')} onClick={toggleHamburgerModal}/>
    </div>
  );
};

export default HamburgerModal;