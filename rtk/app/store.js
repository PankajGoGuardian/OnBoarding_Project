const configureStore= require("@reduxjs/toolkit").configureStore
const { getDefaultMiddleware } = require("@reduxjs/toolkit")
const reduxLogger= require("redux-logger")
const logger= reduxLogger.createLogger()
// const applyMiddleware= redux.applyMiddleware

const cakeReducer = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/icecream/icecreamSlice.js")

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

module.exports= store