import React,{useState,useRef} from 'react';
import {Link} from 'dva/router';
import {connect} from 'dva';


function Index (props) {
  
  return (
    <div className="file">
      {/* <Button type="primary" onClick={handleGetValue}>获取内容</Button> */}
      <Link to="/file/cssReg">To CSS Format</Link>
      <p/>
      <Link to="/file/viewReg">To View Format</Link>
    </div>
  )
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