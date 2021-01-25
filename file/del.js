const fs = require("fs");

// 执行前创建一个空的 /file/test 目录
const PATH = __dirname + '/h5'
let n =0; //遍历次数

// d1()
d2()
function del2 (_path) {
    n++
    if (!fs.existsSync(_path)) return false;

    const files = fs.readdirSync(_path);
    files.map(file=>{
        let curPath = _path + "/" + file;
        if(fs.statSync(curPath).isDirectory()) {
            del2(curPath);
        } else {
            fs.unlinkSync(curPath);
        }
    })
    fs.rmdirSync(_path)
}

function del1 (_path) {
    n++
    if (!fs.existsSync(_path)) return false;

    const statSync = fs.statSync(_path)

    if (statSync.isFile()) {
        fs.unlinkSync(_path)
    }

    if (statSync.isDirectory()) {
        const files = fs.readdirSync(_path);
        files.map(file => {
            del1(_path + '/' + file)
        })
        fs.rmdirSync(_path)
    }
}


function d1 () {
    console.time('del1')
    del1(PATH)
    console.timeEnd('del1')
    console.log('/del.js [36]--1','n',n);
}

function d2 () {
    console.time('del2')
    del2(PATH)
    console.timeEnd('del2')
    console.log('/del.js [36]--1','n',n);
}

