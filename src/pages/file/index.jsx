import React,{useState,useRef} from 'react';
import {Link} from 'dva/router';
import {connect} from 'dva';
import {Button,Input} from 'antd';

const { TextArea } = Input;

function Index (props) {
  const [originVal,setOriginVal] = useState('');
  const originRef = useRef(null)

  const handleGetValue = () => {
    let val = originRef.current.resizableTextArea.textArea.defaultValue;
    if(!val) return; 
    console.log('/index.jsx [11]--1',val);
    const r = /(\s*)(\d+)rpx/g
    setOriginVal(val.replace(r,(o,a,b,c,d)=>{
      return `${a} ${Math.floor(b/2)}px`
    }))
  }
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