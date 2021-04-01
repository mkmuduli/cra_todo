import { useCallback, useEffect, useState } from 'react';
import './todo-container.css';
import { InputBox } from './common/input';
import { Button } from './common/button';
import { TodoItem } from './todo-item';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import { todoSelector, addTask, TodoState, Todo, fetchTodo } from '../redux/todo-slice';

export interface TodoContainerProp { }


export function TodoContainer(props: TodoContainerProp) {
    const [todoName, setTodoName] = useState<string>('');
    const todoData: TodoState = useAppSelector(todoSelector);
    console.log(todoData);
    const dispatch = useAppDispatch();
    const onCreateTodo = useCallback((event: React.FormEvent<HTMLButtonElement>) => {
        dispatch(addTask({ name: todoName, isCompleted: false }))
        setTodoName("");
    }, [todoName, dispatch]);
    const onChangeTodoName = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        setTodoName(event.currentTarget.value)
    }, []);
    useEffect(() => {
        // dispatch(fetchTodo())
        const fetchData = async () => {
            try {
                const resp = await axios.get(`http://localhost:3001/task`);
                // console.log(resp.data)
                const data:Todo[] = resp.data;                
                dispatch(addTask(data[0]))
            } catch (err) { console.log(err) }
        }
        fetchData();
        // axios.get(`http://localhost:3001/task`).then((resp)=>{
        //             console.log(resp)
        //             const data:Todo[] = resp.data;                    
        //             dispatch(addTask(data[0]))
        // })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div data-testid="todo-container" >
            <h1>TODO</h1>
            <div className="main-container" >
                <div className="todo-create-box">
                    <InputBox
                        value={todoName}
                        onChange={onChangeTodoName}
                        type="text"
                        placeholder="TASK"
                        name="task-name" />
                    <Button name="CREATE" onClick={onCreateTodo} className="button" />
                </div>
                <div className="todo-item-box" data-testid="todoItemBox">
                    {todoData.entities.map((todo: Todo, index) => {
                        return <TodoItem key={index} name={todo.name} isCompleted={todo.isCompleted} />
                    })}
                </div>

            </div>
        </div>
    )
}
