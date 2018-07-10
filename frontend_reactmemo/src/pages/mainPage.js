import React from 'react';
import PageTemplate from 'components/common/PageTemplate'

import LabelListWrapper from 'components/Label/LabelListWrapper'
import LabelList from 'components/Label/LabelList'

import MemoListBoxWrapper from 'components/MemoList/MemoListBoxWrapper'
import MemoListBox from 'components/MemoList/MemoListBox'

const mainPage = () => {
  return (
    <PageTemplate>

      <LabelListWrapper>
        <LabelList />
      </LabelListWrapper>

      <MemoListBoxWrapper>
        <MemoListBox />
      </MemoListBoxWrapper>

    </PageTemplate>
  );
};

export default mainPage;