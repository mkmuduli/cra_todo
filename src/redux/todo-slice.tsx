import { CaseReducer, createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './create-store';

export interface Todo {
    name: string,
    isCompleted: boolean,
}

const initialState: Array<Todo> = [];

const addAsyncTask = createAction<Todo, 'addAsync'>('addAsync');

const addTaskAction: CaseReducer<typeof initialState, PayloadAction<Todo>> = (state, action) => {
    state.push(action.payload);
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // addTask(state: Array<Todo>, action: PayloadAction<Todo>) {
        //     state.push(action.payload);
        // }
        addTask:addTaskAction,

    },
    extraReducers: (builder) => {
        builder.addCase(addAsyncTask.type, (state, action) => {

        })
    }
})

export default todoSlice.reducer;
export const { addTask } = todoSlice.actions;

export const todoSelector = (state: RootState) => state.todoReducer ;