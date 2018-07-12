import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as label from 'store/modules/label'
import * as db from 'store/modules/db'

import LabelList from 'components/Label/LabelList'

class LabelContainer extends Component {

  render() {
    console.log(this.props.db)
    this.props.db.getLabelList()
    return (
      <LabelList />
    );
  }
}

let mapStateToProps = state => {
  return {
    isHamburgerModalOn: state.header.isHamburgerModalOn,
    Keyword: state.header.keyword
  }
}

let mapDispatchToProps = dispatch => {
  return {
    label : bindActionCreators(label, dispatch),
    db : bindActionCreators(db, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelContainer)