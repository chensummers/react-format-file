const fs = require('fs');
const path = require('path');//解析需要遍历的文件夹
const reg = require('./reg');
const FILE_PATH = __dirname+'/s';

const CREATE_PATH_H5 = __dirname+'/h5';
let CREATE_FILE_PATH = CREATE_PATH_H5;

const swanToHtmlCssFormat = (content,filename) => {
    console.log('/fs.js [8]--1',filename,reg.swanCssReg.test(content));
    if(reg.swanCssReg.test(content)) {
        fs.writeFileSync(filename,reg.swanToHtmlCssFormat(content))
    }
}


console.log('/fs.js [3]--1-FILE_PATH',FILE_PATH);
//调用文件遍历方法
fileDisplay(FILE_PATH);
//文件遍历方法

function fileDisplay(FILE_PATH){
    if (!fs.existsSync(FILE_PATH)) return false;
    if(!fs.existsSync(CREATE_PATH_H5)) {
        fs.mkdirSync(CREATE_PATH_H5)
    }
    const files = fs.readdirSync(FILE_PATH);

    console.log('/fs.js [36]--1',files);
    files.map(file=>{
        const curPath = FILE_PATH + "/" + file;
        const createPath = CREATE_PATH_H5+'/'+file
        if(fs.statSync(curPath).isDirectory()) {
            CREATE_FILE_PATH = createPath;
            if(!fs.existsSync(createPath)) {
                fs.mkdirSync(createPath)
            }
            fileDisplay(curPath);
        } else {
            console.log('/fs.js [36]--1','createPath',createPath);
            console.log('/fs.js [40]--1','CREATE_FILE_PATH',CREATE_FILE_PATH);
            const content = fs.readFileSync(curPath,'utf8');
            swanToHtmlCssFormat(content,CREATE_FILE_PATH+'/'+file)
        }
        console.log('/fs.js [42]--1','CREATE_FILE_PATH',CREATE_FILE_PATH);
    })
    return;
    //根据文件路径读取文件，返回文件列表
    
}