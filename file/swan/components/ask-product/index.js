import {commonLink} from '../../../utils/tools';
Component({
    name:'ask-product',
    data:{
        productAsks:[],
    },
    created(){
        this.setData({
            productAsks:[
                {title:'私人保险顾问',subTitle:'真人顾问，专属咨询服务',btnTx:'立即咨询',icon:'/images/home/counselor.png', url:'https://gpo-act.iyunbao.com/m/daily/202010/leaveInfo?resource=OnlineLiuZi&platform=BaiduBXPD&source=BaiBaoJun&from=%25E7%2599%25BE%25E4%25BF%259D%25E5%2590%259B&location=Banner&is_agent=y'},
                {title:'教你买保险',subTitle:'各种险种全面答疑',btnTx:'立即查看',icon: '/images/home/ask.png', path:'/pages/info/index'},
            ],
        })
    },
    handleTab(e) {
        if(e.currentTarget.dataset.url) {
            commonLink({
               url:e.currentTarget.dataset.url,
            })
        }else {
            console.log('/index.js [20]--1','tab');
            commonLink({
                url:e.currentTarget.dataset.path,
                navigateType:'switchTab'
             })
        }
        
    }
})