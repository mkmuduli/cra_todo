import { CaseReducer, createAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './create-store';
import axios from 'axios';

export interface Todo {
    name: string,
    isCompleted: boolean,
}

export enum LoadingState {
    "PENDING", "SUCCEEDED", "REJECTED"
}
export interface TodoState {
    loading: LoadingState,
    entities: Array<Todo>,
    error: null | string
}

const initialState: TodoState = {
    loading: LoadingState.PENDING,
    entities: [],
    error: null
};

const addAsyncTask = createAction<Todo, 'addAsync'>('addAsync');

export const fetchTodo = createAsyncThunk("todo/list", async () => {
    const resp = await axios.get(`http://localhost:3001/task`);
    return resp.data as Todo[];
})

const addTaskAction: CaseReducer<typeof initialState, PayloadAction<Todo>> = (state, action) => {
    state.entities.push(action.payload as Todo);
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // addTask(state: Array<Todo>, action: PayloadAction<Todo>) {
        //     state.push(action.payload);
        // }
        addTask: addTaskAction,

    },
    extraReducers: (builder) => {
        builder.addCase(addAsyncTask.type, (state, action) => {

        }).addCase(fetchTodo.fulfilled, (state: TodoState, action: PayloadAction<Todo[]>) => {
            console.log("fire... success")
            state.loading = LoadingState.SUCCEEDED;
            state.entities = action.payload;
        }).addCase(fetchTodo.pending, (state, action) => {
            console.log("fire... pending")            
            state.loading = LoadingState.PENDING;
            state.error = null;
        }).addCase(fetchTodo.rejected, (state, action) => {
            console.log("fire... rejected")
            state.loading = LoadingState.REJECTED;
            state.error = "something went wrong";
        })
    }
})

export default todoSlice.reducer;
export const { addTask } = todoSlice.actions;

export const todoSelector = (state: RootState) => state.todoReducer;