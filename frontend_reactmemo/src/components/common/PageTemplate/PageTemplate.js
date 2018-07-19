import React from 'react';
import styles from './PageTemplate.scss'
import classNames from 'classnames/bind'

import HeaderContainer from 'containers/HeaderContainer'
import HamburgerModalContainer from 'containers/HamburgerModalContainer'
import MemoModalContainer from 'containers/MemoModalContainer'

const cx = classNames.bind(styles)

const PageTemplate = ({children}) => {
  return (
    <div className={cx('template')}>
      <HamburgerModalContainer />
      <MemoModalContainer />
        <HeaderContainer/>
        <main>
          {children}
        </main>
    </div>
  );
};

export default PageTemplate;