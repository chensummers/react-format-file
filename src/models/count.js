export default {
    namespace: "count",
    state: {
        count:0
    },
    reducers: {
        setStateAdd(state) {
            let {count} = state;
            return {...state,count:++count}
        },
        setStateMinus(state) {
            let {count} = state;
            return {...state,count:--count}
        }
    },
    effects: {
        *changeNum({payload={}},{put,call,select}) {
            const {type} = payload;
            if(type === 'add') {
                yield put({
                    type:'setStateAdd',
                })
            }else{
                yield put({
                    type:'setStateMinus',
                })
            }
            
        },

    },
    
    subscriptions : {},
}