import {productTypeList} from '../../../services/productType'

Component({
    name:'tab-product',
    data:{
        tabs:[],
    },
    created(){
        this.getTabs()
    },
    getTabs() {
        productTypeList({}).then(res => {
            if(res.success){
              this.setData({
                tabs: res.data,
              })
            }
          })
    },
    handleTab(e) {
        swan.setStorageSync('tabId',e.currentTarget.dataset.id)
        swan.switchTab({
            url:`/pages/products/index`
        })
    }
})