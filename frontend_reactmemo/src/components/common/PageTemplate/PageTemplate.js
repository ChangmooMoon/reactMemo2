import React from 'react';
import styles from './PageTemplate.scss'
import classNames from 'classnames/bind'

import HeaderContainer from 'containers/HeaderContainer'
import NavContainer from 'containers/NavContainer'
import MemoModalContainer from 'containers/MemoModalContainer'

const cx = classNames.bind(styles)

const PageTemplate = ({children}) => {
  return (
    <div className={cx('template')}>
      {/* <NavContainer /> */}
      {/* <MemoModalContainer /> */}
        <HeaderContainer/>
        <main>
          {children}
        </main>
    </div>
  );
};

export default PageTemplate;