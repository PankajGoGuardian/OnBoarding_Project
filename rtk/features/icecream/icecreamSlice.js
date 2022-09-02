const { bindActionCreators } = require("@reduxjs/toolkit")

const createSlice= require("@reduxjs/toolkit").createSlice

const initialState = {
    numOfIcecreams:20,
    // stuff:10
}

const icecreamSlice=createSlice({
    name:"icecream",
    initialState,
    reducers:{
        ordered: (state,action)=>{
            state.numOfIcecreams-=action.payload
        },
        restocked: (state,action)=>{
            state.numOfIcecreams+=action.payload
            // state.stuff+=action.payload.increm2
        }
    }
})

module.exports=icecreamSlice.reducer
module.exports.icecreamActions= icecreamSlice.actions