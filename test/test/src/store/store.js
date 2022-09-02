import {configureStore} from "@reduxjs/toolkit"
import dataSlice from "./features/Data/dataSlice"


const store = configureStore({
    reducer:{
        data: dataSlice.reducer,
    }
})

console.log(store.getState())

export default store