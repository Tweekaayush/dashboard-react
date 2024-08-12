import {combineReducers, configureStore} from '@reduxjs/toolkit'
import themeReducer from '../features/themeSlice'
import teamReducer from '../features/teamSlice'
import contactReducer from '../features/contactSlice'
import invoiceReducer from '../features/invoiceSlice'
import chartReducer from '../features/chartSlice'
import transactionReducer from '../features/transactionSlice'
import todoReducer from '../features/todoSlice'

const rootReducer = combineReducers({
    theme: themeReducer,
    teams: teamReducer,
    contacts: contactReducer,
    invoices: invoiceReducer,
    chart: chartReducer,
    transaction: transactionReducer,
    todos: todoReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export default store