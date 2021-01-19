import React from 'react';
import {connect} from 'dva';
import {Button} from 'antd';

class Index extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ...this.props.state
    }
    
  }
  componentDidMount() {

  }
  
  render() {

    return(
      <></>
    )
  }
}

export default connect(
    ({
        global
    })=>({
        state:global
    })
)(Index);
