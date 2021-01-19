import React from 'react';
import {connect} from 'dva';
import {Button} from 'antd';

class Index extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ...this.props.state
    }
    this.handleLogin = this.handleLogin.bind(this)
  }
  componentDidMount() {
    console.log('/index.jsx [14]--1',this.props);
  }
  handleLogin(userName) {
    this.props.dispatch({type:'global/login',payload:{userName}})
  }
  render() {

    return(
        <div className="home">
            {`admin `}
            <Button type="primary" onClick={()=>this.handleLogin('user')}>Login in(admin)</Button>
        </div>
    )
  }
}

export default connect(
    ({
        global,
        home
    })=>({
        global,
        home
    })
)(Index);