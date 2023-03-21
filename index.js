const redux = require('redux')
const createStore = redux.createStore;
const combineReducer = redux.combineReducers

const {incrementAction, decrementAction} = require('./action/counterActions')
const {addItemAction} = require('./action/ListActions')
const counterReducer = require('./reducers/CounterReducer')
const listReducer = require('./reducers/ListReducer')

 


const allReducers = combineReducer({
    counter: counterReducer,
    list: listReducer
})

const store = createStore(allReducers)
console.log(store.getState())
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(addItemAction('Um novo item'))
store.dispatch(incrementAction())
store.dispatch(incrementAction(1))
store.dispatch(incrementAction(2))