import React from 'react';
import styles from './Header.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import TitleSVG from 'components/common/TitleSVG'
import Hamburger from 'static/Hamburger'
import AddCircle from 'static/AddCircle'
import Search from 'static/Search'

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

const SearchBar = () => {
  return (
  <div className={cx('searchbar')}>
    <form action="">
      <input className={cx('bar')} type="text" placeholder="search"/>
      <div className={cx('search-icon')} value="Rechercher" type="submit"/>
    </form>
</div>
  )
}

const Header = () => (
  <header className={cx('header-content')}>
      <HamburgerButton />
      <TitleSVG />
      <SearchBar />
  </header>
)

export default Header;