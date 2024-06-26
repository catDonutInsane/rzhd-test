import {configureStore} from '@reduxjs/toolkit'
import reducer from '../reducers/reducer'

const store= configureStore({
    reducer:{
        reducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;