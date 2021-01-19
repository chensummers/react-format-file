import React, { useState, useRef, useEffect } from 'react';
import debounce from 'loadsh/debounce';
import { connect } from 'dva';
import { Button, Input, message, Tabs } from 'antd';

import {
  SWAN_CSS_REG,
  HTML_CSS_REG,
  SWAN_TITLE,
  HTML_TITLE,
} from '@/utlis/constans';

import  './index.less';

const { TextArea } = Input;
const { TabPane } = Tabs;

function Index(props) {
  const [originVal, setOriginVal] = useState(null);
  const [formatVal, setFormatVal] = useState('');
  const [volidFormat, setVolidFormat] = useState({})
  const [tab, setTab] = useState(1)
  const [title, setTitle] = useState({})
  const originRef = useRef(null)

  useEffect(() => {
    setOriginVal(null)
    setTitle({
      left: tab === 1 ? SWAN_TITLE : HTML_TITLE,
      right: tab === 1 ? HTML_TITLE : SWAN_TITLE,
    })
  }, [tab])

  useEffect(() => {
    if (tab === 1) {
      setVolidFormat({
        isSwanBtnDisabled: !SWAN_CSS_REG.test(originVal),
      })
    }
    if (tab === 2) {
      setVolidFormat({
        isHtmlBtnDisabled: !HTML_CSS_REG.test(originVal),
      })
    }
  }, [originVal, tab]);

  const handleGetValueSwanToHtml = () => {
    if (!originVal) {
      message.error('不能为空');
      return;
    }
    setFormatVal(originVal.replace(SWAN_CSS_REG, (o,a,b,c,d) => {
      return `${a} ${b*2}rpx`
    }))
  }

  const handleGetValueHtmlToSwan = () => {
    if (!originVal) {
      message.error('不能为空');
      return;
    }
    setFormatVal(originVal.replace(HTML_CSS_REG, (o,a,b,c,d) => {
      return `${a} ${Math.floor(b/2)}px`
    }))
  }

  const debounceInput = debounce(e => {
    console.log('/viewReg.jsx [67]--1','e-input',e,e.target.value);
    setOriginVal(e.target.defaultValue)
  }, 100);

  const handleChangeTab = tab => setTab(Number(tab));

  const handleClearInput = () => {
    setOriginVal(null)
    setFormatVal(null)
  };

  return (
    <div className="file">
      <h2>Html/Swan CSS format</h2>
      <Tabs defaultActiveKey={tab} onChange={handleChangeTab}>
        <TabPane tab="Swan" key={1}></TabPane>
        <TabPane tab="Html" key={2}></TabPane>
      </Tabs>
      {
        tab === 1 &&
        <Button
          type="primary"
          onClick={handleGetValueSwanToHtml}
          disabled={volidFormat.isSwanBtnDisabled}
        >Swan CSS format to Html</Button>
      }
      {
        tab === 2 &&
        <Button
          type="primary"
          onClick={handleGetValueHtmlToSwan}
          disabled={volidFormat.isHtmlBtnDisabled}
        >Html CSS format to swan</Button>
      }
      <Button
          type="link"
          onClick={handleClearInput}
        >clear</Button>
      <span dangerouslySetInnerHTML={{ __html: '<br />' }} ></span>
      <br />
      <div className="content">
        <div className="left">
          <span>{title.left}</span>
          <TextArea
            allowClear
            onChange={e=>{
              setOriginVal(e.target.value)
            }}
            value={originVal}
            ref={originRef}
            autoSize={{ minRows: 15, maxRows: 15 }}
            showCount
            onInput={debounceInput}
          />
        </div>
        <div className="right">
          <span>{title.right}</span>
          <TextArea
            showCount
            autoSize={{ minRows: 15, maxRows: 15 }}
            value={formatVal}
          />
        </div>
      </div>
    </div>
  )
}

export default connect(
  ({
    global,
    home
  }) => ({
    global,
    home
  })
)(Index);