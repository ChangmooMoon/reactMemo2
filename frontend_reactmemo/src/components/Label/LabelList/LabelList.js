import React from 'react';
import styles from './LabelList.scss'
import classNames from 'classnames/bind'

import AddCircle from 'static/AddCircle'
import Bin from 'static/Bin'

const cx = classNames.bind(styles)

const LabelItem = ({
  labelName = 'label',
  amount = 0,
}) => {
  return (
    <div className={cx('label')} draggable='true'>
      <span>{labelName}</span>
      <span>({amount})</span>
    </div>
  )
}

const AddLabel = () => {
  return(
    <span className={cx('button')}>
      <AddCircle />
    </span>
  )
}

const DeleteLabel = () => {
  return (
    <span className={cx('bin-box')}>
      <span className={cx('button','button2')}>
        <Bin />
      </span>
    </span>
  )
}

let LabelItems = [<LabelItem />,<LabelItem />,<LabelItem />,<LabelItem />,<LabelItem />]

const LabelList = () => {
  return (
    <div className={cx('label-list')}>
      <DeleteLabel />
      <LabelItem labelName={'All'}/>
      {LabelItems.map(item => item)}
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <LabelItem />
      <AddLabel />
    </div>
  );
};

export default LabelList;