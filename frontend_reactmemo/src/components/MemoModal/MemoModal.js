import React from 'react';
import styles from './MemoModal.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const MemoModal = ({
  isOpen,
  title,
  content,
  readMode,

  toggleModal,
  typeMemoTitle,
  typeMemoContent,
  createMemo,
  clearMemo,
  closeMemo,
  handleReadMode
}) => {
    if(!isOpen) return null
    else {
      return (
      <div className={cx('backdrop')}>
        <div className={cx('modal')}>

          <div className={cx('pad-top')}>
            <div className={cx('button-group')}>
              <button className={cx('button')} onClick={closeMemo}>
                CLOSE
              </button>
              <button className={cx('button')} onClick={clearMemo}>
                CLEAR
              </button>
              <button className={cx('button')} onClick={createMemo}>
                SAVE
              </button>
            </div>
          </div>

          <div className={cx('pad-content')}>
              <div className={cx('pad-header')}>
                <div className={cx('pad-margin')} />
                <input
                  type='text'
                  className={cx('title')}
                  placeholder='Untitled Memo'
                  value={title}
                  onChange={typeMemoTitle}
                  onClick={handleReadMode}
                  readOnly={readMode}
                  maxLength='25'
                  />
              </div>

              <div className={cx('pad-body')}>
                <div className={cx('pad-margin')}/>
                <textarea
                  className={cx('content')}
                  placeholder='Start typing your Memo'
                  value={content}
                  autoFocus
                  onChange={typeMemoContent}
                  onClick={handleReadMode}
                  readOnly={readMode}
                  />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default MemoModal;