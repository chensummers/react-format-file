import dva from 'dva';
import {createBrowserHistory as createHistory, createHashHistory} from 'history';
import './index.css'


// 创建应用
const app = dva({ 
  history: createHistory(),
  onError(err,dispatch) {
    console.log('/index.js [9]--1',err,dispatch);
  }
})

const files = require.context('./models',false,/^(?!index).*\.js$/)
files.keys().map(key=>{
    // if(key === './index.config.js') return;
    if(files(key).default) {
      console.log('/index.js [18]--1',
        `
          key-${key},
          ${files(key)}
        `
      );
      app.model(files(key).default)
  }
})
// 注册model, 会这样会自动导入global的model
// app.model(require('./models/global').default)
// app.model(require('./models/home').default)
// app.model(require('./models/count').default)

// 注册路由
app.router(require('./route/index').default)

// 启动应用
app.start('#root')


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './pages/App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

