import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemoModal.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class MemoModal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className={cx('backdrop')}>
        <div className={cx('modal')}>

          <div className={cx('pad-top')}>
            <div className={cx('button-group')}>
              <button className={cx('button')}>
                CLOSE
              </button>
              <button className={cx('button')}>
                CLEAR
              </button>
              <button className={cx('button')}>
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
                  autoFocus
                  />
              </div>

              <div className={cx('pad-body')}>
                <div className={cx('pad-margin')}/>
                <textarea
                  className={cx('content')}
                  placeholder='Start typing your Memo'
                  />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

MemoModal.defaultProps = {
  title : 'Untitled Memo',
  contents: ''
}

export default MemoModal;