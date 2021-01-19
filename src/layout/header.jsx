import {useState} from 'react';
import {Layout} from 'antd';
import { NodeExpandOutlined, FrownOutlined, MehOutlined} from '@ant-design/icons';
import {connect} from 'dva';

import './index.less';

const {Header} = Layout;

function Index(props) {
    console.log('/header.jsx [6]--1--header',props);
    return(
        <Header>
            <div className="header">
                <div className="left">
                    <NodeExpandOutlined style={{marginRight:10}}/>
                    Welcome Everybody！
                </div>
                <div className="right">
                    {
                        props.global.isLogin ? 
                        <>
                            <MehOutlined style={{marginRight:10}}/>
                            {
                                props.global.userName
                            }
                        </>:
                        <>
                            <FrownOutlined style={{marginRight:10}}/>
                            未登录
                        </>
                    }
                </div>
            </div>
        </Header>
    )
}

export default connect(
    ({
        global
    }) => (
        {global}
    )
)(Index)