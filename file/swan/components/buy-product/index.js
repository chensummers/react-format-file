import {commonLink} from '../../../utils/tools';
Component({
    name:'buy-product',
    properties:{
        list:{
            type:Array
        }
    },
    data:{

    },
    created(){
        
    },
    handleGoConsult() {
        commonLink({
            url:'https://gpo-act.iyunbao.com/m/daily/202010/leaveInfo?resource=OnlineLiuZi&platform=BaiduBXPD&source=BaiBaoJun&from=%25E7%2599%25BE%25E4%25BF%259D%25E5%2590%259B&location=Banner&is_agent=y',
        })
    },
    handToPath(e){
        const url = e.currentTarget.dataset.url
        if(url.indexOf('http')===-1) {
            swan.navigateTo({
                url: `/pages/infoDetail/index?id=${url}`
            })
        }else{
            commonLink({
                url:e.currentTarget.dataset.url,
            })
        }
    }
})