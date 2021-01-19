import React from 'react';
import {connect} from 'dva';
import {Link,Redirect} from 'dva/router'
import {Button} from 'antd';

class Index extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ...this.props.state
    }
    
  }
  componentDidMount() {
    console.log('/index.jsx [14]--1',this.props);
  }
  
  render() {

    return(
        <div className="home">
            home
            <Link to="/admin">admin</Link>
            <Link to="/count">count</Link>
            {/* <Redirect to="/count"/> */}
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