
import {commonLink} from '../../../utils/tools'

Component({
    name:'hot-product',
    properties:{
        list:{
            type:Array
        }
    },
    data:{

    },
    created(){
        
    },
    handleToMorePath() {
        swan.switchTab({
            url:'/pages/products/index'
        })
    },
    handleToPath(e){
        console.log('/index.js [20]--1','',e.currentTarget);
        commonLink({
            url:e.currentTarget.dataset.url,
        })
    }
})