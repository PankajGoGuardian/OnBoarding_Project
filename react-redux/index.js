const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = "BUY_CAKE"
const RESTOCK_CAKE = "RESTOCK_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"
const RESTOCK_ICECREAM="RESTOCK_ICECREAM"

function buyCake(){
    return {
        type: BUY_CAKE,
        info: "first redux action"
    }
}


function restockCake(qty = 1){
    return {
        type: RESTOCK_CAKE,
        payload: qty
    }
}

function buyIcecrem(qty=1){
    return {
        type: BUY_ICECREAM,
        payload: qty
    }
}

function restockIcecream(qty=1){
    return {
        type: RESTOCK_ICECREAM,
        payload: qty
    }
}

const initialCakeState = {
    numOfCakes : 10
}

const initialIcecreamState = {
    numOfIcecreams: 20
}

const cakeReducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case RESTOCK_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        }
        default : return state
    }
}

const icecreamReducer = (state = initialIcecreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfCakes: state.numOfIcecreams - 1
        }
        case RESTOCK_ICECREAM: return{
            ...state,
            numOf: state.numOfIcecreams + action.payload
        }
        default : return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log(store.getState())
const unsubscribe = store.subscribe(()=>{})

// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(restockCake(5))

const actions = bindActionCreators({buyCake, restockCake, buyIcecrem,restockIcecream}, store.dispatch)
actions.buyCake()
actions.restockCake(5)
actions.restockIcecream(20)
unsubscribe()

