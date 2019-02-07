import { configureStore } from 'redux-starter-kit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export default store
