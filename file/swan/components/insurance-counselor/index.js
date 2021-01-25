
import {commonLink} from '../../../utils/tools';

Component({
    name:'insurance-counselor',
    data:{
        img:'https://za-www-prd.oss-cn-hzfinance.aliyuncs.com/76461ec56f8b4c0aaa42907bca375e22.png'
    },
    created(){
        
    },
    handleToPath(){
        commonLink({
            url:'https://gpo-act.iyunbao.com/m/daily/202010/leaveInfo?resource=OnlineLiuZi&platform=BaiduBXPD&source=BaiBaoJun&from=%25E7%2599%25BE%25E4%25BF%259D%25E5%2590%259B&location=Banner&is_agent=y',
         })
    }
})