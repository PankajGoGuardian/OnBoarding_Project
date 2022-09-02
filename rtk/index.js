const store = require("./app/store")



const cakeActions = require("./features/cake/cakeSlice").cakeActions
const icecreamActions = require("./features/icecream/icecreamSlice.js").icecreamActions



console.log("initial State", store.getState())
const unsubscribe= store.subscribe(()=>{})

// store.dispatch(cakeActions.ordered(3))
store.dispatch(cakeActions.restocked(5))
store.dispatch(icecreamActions.restocked(5))


unsubscribe()