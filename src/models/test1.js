export default {
    namespace: "test1",
    state: {
        name:'test1'
    },
    reducers: {
        setStateAdd(state) {
            let {count} = state;
            console.log('/global.js [8]--1',count);
            return {...state,count:++count}
        }
    },
    effects: {
        *changeNum({payload={}},{put,call,select}) {
            
        },

    },
    
    subscriptions : {},
}