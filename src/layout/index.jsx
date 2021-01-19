import React from 'react';
import { withRouter } from 'dva/router';
import { Layout, Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import Header from './header';

import './index.less';

const { Footer, Content } = Layout;

class LayoutIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { history, match, location } = this.props;
        // if (location.pathname !== match.path) {
        //     history.push('/404')
        // }
    }

    goBack () {
        console.log('/index.jsx [23]--1','this.props.history',this.props.history);
        this.props.history.back()
    }

    render() {

        return (
            <div className="app">
                <Layout>
                    <Header></Header>
                    <Content>
                        <Button type="primary" shape="circle" icon={<LeftOutlined />} onClick={this.goBack.bind(this)}/>
                        <span dangerouslySetInnerHTML={{ __html: '<br />' }} ></span>
                        <br />
                        {this.props.children}
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default withRouter(LayoutIndex);
