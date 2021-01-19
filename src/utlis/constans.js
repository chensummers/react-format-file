
export const SWAN_REG_VAL = {
    text: 'span',
    view: 'div',
    image: 'img',
    'class=': 'className='
}

export const HTML_REG_VAL = {
    span: 'text',
    div: 'view',
    img: 'image',
    'className=': 'class='
}

export const SWAN_REG = /(view)|(image)|(text)|(class=)/g;
export const HTML_REG = /(div)|(img)|(span)|(className=)/g;
export const SWAN_CSS_REG = /(\s*)(\d+)px/g;
export const HTML_CSS_REG = /(\s*)(\d+)rpx/g;
export const SWAN_TITLE = 'swan';
export const HTML_TITLE = 'html';