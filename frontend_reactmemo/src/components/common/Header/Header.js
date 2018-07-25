import React from 'react';
import styles from './Header.scss'
import classNames from 'classnames/bind'

import TitleSVG from 'components/common/TitleSVG'
import Hamburger from 'static/Hamburger'

const cx = classNames.bind(styles)

const HamburgerButton = ({toggleHamburgerModal}) => {
  return (
    <span className={cx('button')} onClick={toggleHamburgerModal}>
      <Hamburger />
    </span>
  )
}


const SearchBar = ({
  changeSearchKeyword,
  keyword
}) => {
  return (
  <div className={cx('searchbar')}>
    <form onSubmit={e => {e.preventDefault()}}>
      <input
        className={cx('bar')}
        type="text"
        placeholder="search"
        value={keyword}
        onChange={changeSearchKeyword}
        />
      <div className={cx('search-icon')}/>
    </form>
</div>
  )
}

const Header = ({
  toggleHamburgerModal,
  changeSearchKeyword,
  keyword
}) => (
  <header className={cx('header-content')}>
      <HamburgerButton toggleHamburgerModal={toggleHamburgerModal}/>
      <TitleSVG />
      <SearchBar changeSearchKeyword={changeSearchKeyword} keyword={keyword} />
  </header>
)

export default Header;