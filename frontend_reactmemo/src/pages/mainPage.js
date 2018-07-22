import React from 'react';
import PageTemplate from 'components/common/PageTemplate'

import LabelListWrapper from 'components/Label/LabelListWrapper'
import LabelContainer from 'containers/LabelContainer'

import MemoListBoxWrapper from 'components/MemoList/MemoListBoxWrapper'
import MemoListContainer from 'containers/MemoListContainer'

const mainPage = ({history}) => {
  return (
    <PageTemplate>

      <LabelListWrapper>
        <LabelContainer history={history}/>
      </LabelListWrapper>

      <MemoListBoxWrapper>
        <MemoListContainer />
      </MemoListBoxWrapper>

    </PageTemplate>
  );
};

export default mainPage;