const files = require.context('./',false,/^(?!index).*\.js$/)
// console.log('/index.js [14]--1',files);
// files.keys().map(key=>{
//     // if(key === './index.config.js') return;
//   console.log('/index.js [16]--1',key,'key');
// })