import React from 'react';
import styles from './Header.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import TitleSVG from 'components/common/TitleSVG'
import Hamburger from 'static/Hamburger'
import AddCircle from 'static/AddCircle'
import Setting from 'static/Setting'

const cx = classNames.bind(styles)

const HamburgerButton = () => {
  return (
    <span className={cx('button')}>
      <Hamburger />
    </span>
  )
}

const AddCircleButton = () => {
  return (
    <span className={cx('button')}>
      <AddCircle />
    </span>
  )
}

const SettingButton = () => {
  return (
    <span className={cx('button','button2')}>
      <Setting />
    </span>
  )
}
const Header = () => (
  <header className={cx('header-content')}>
      <HamburgerButton />
      <TitleSVG />
      <SettingButton />
  </header>
)

export default Header;