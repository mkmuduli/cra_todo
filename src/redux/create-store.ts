import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo-slice';

export function createStore (){
   return configureStore({
        reducer: { todoReducer }
    });
}

const store =  createStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;