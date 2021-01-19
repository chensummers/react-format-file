export default {
    namespace: "global",
    state: {
        userName:'',
        isLogin:false
    },
    reducers: {
        setLogin(state,{payload}) {
            return ({...state,...payload})
        }
    },
    effects: {
        *login({payload={}},{put,call,select}) {
            console.log('/global.js [13]--1',payload);
            yield put({
                type:'setLogin',
                payload:{
                    isLogin: true,
                    ...payload
                }
            })
        },

    },
    
    subscriptions : {},
}