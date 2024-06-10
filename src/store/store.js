import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginTokenSlice from '../features/Login/user-login-slice'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import sessionStorage from 'redux-persist/es/storage/session'
import loadingSlice from '../features/loading-slice'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'

const rootReducer = combineReducers({
  token: loginTokenSlice,
  loading: loadingSlice,
})
const persistConfig = {
  key: 'main-root',
  whitelist: ['token'],
  storage: sessionStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const Persistor = persistStore(store)

export { Persistor }
export default store
