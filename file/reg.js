
/***
 *  Regexp
 *  */
const SWAN_REG = /(view)|(image)|(text)|(class=)/g;
const HTML_REG = /(div)|(img)|(span)|(className=)/g;
const SWAN_CSS_REG = /(\s*)(\d+)rpx/;
const SWAN_CSS_REG_FORMAT = /(\s*)(\d+)rpx/g;
const HTML_CSS_REG = /(\s*)(\d+)px/;
const HTML_CSS_REG_FORMAT = /(\s*)(\d+)px/g;

const swanToHtmlCssFormat = (content) => {
    console.log('/reg.js [12]--1',content);
    return content.replace(SWAN_CSS_REG_FORMAT, (o,a,b,c,d) => `${a} ${Math.floor(b/2)}px`)
    // return content.replace(SWAN_CSS_REG_FORMAT, (o,a,b,c,d) => '')
};

const HtmlToSwanCssFormat = (content) => {
    return content.replace(HTML_CSS_REG_FORMAT, (o,a,b,c,d) => `${a} ${b*2}rpx`)
};

module.exports = {
    swanReg:SWAN_REG,
    htmlReg:HTML_REG,
    swanCssReg:SWAN_CSS_REG,
    swanCssRegFormat:SWAN_CSS_REG_FORMAT,
    htmlCssReg:HTML_CSS_REG,
    htmlCssRegFormat:HTML_CSS_REG_FORMAT,
    swanToHtmlCssFormat,
    HtmlToSwanCssFormat
}