import { useCallback, useState } from 'react';
import './todo-container.css';
import { InputBox } from './common/input';
import { Button } from './common/button';
import { TodoItem } from './todo-item';

import { useAppDispatch, useAppSelector } from '../redux/redux-hooks';
import { todoSelector, addTask,Todo } from '../redux/todo-slice';

export interface TodoContainerProp { }


export function TodoContainer(props: TodoContainerProp) {
    const [todoName, setTodoName] = useState<string>('');
    const todos : Todo [] = useAppSelector(todoSelector);
    const dispatch = useAppDispatch();
    const onCreateTodo = useCallback((event: React.FormEvent<HTMLButtonElement>) => {
        dispatch(addTask({ name: todoName, isCompleted: false }))
        setTodoName("");
    }, [todoName, dispatch]);
    const onChangeTodoName = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        setTodoName(event.currentTarget.value)
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
                    {todos.map((todo:Todo,index)=>{
                       return <TodoItem key={index} name={todo.name} isCompleted={todo.isCompleted} />
                    })}
                </div>

            </div>
        </div>
    )
}
