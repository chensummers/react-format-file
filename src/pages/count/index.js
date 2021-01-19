import React from 'react';
import {connect} from 'dva';
import {Button} from 'antd';

import './index.less';


class Index extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ...this.props.state
    }
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.handleChangeMinus = this.handleChangeMinus.bind(this);
  }
  componentDidMount() {

  }
  handleChangeAdd () {
    this.props.dispatch({type:'count/changeNum',payload:{type:'add'}})
  }
  handleChangeMinus () {
    this.props.dispatch({type:'count/changeNum'})
  }
  render() {

    return(
      <div className="count">
        <div>{this.props.state.count}</div>
        <Button type="primary" onClick={this.handleChangeAdd}>change count ++</Button>
        <Button type="primary" danger onClick={this.handleChangeMinus}>change count --</Button>
        <Button onClick={()=>{
                this.props.history.push('/')
            }}>to home</Button>
      </div>
    )
  }
}

export default connect(({global,home})=>({state:{global,home}}))(Index);
