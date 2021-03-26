import { useCallback, useState } from 'react';
import './todo-container.css';
import { InputBox } from './common/input';
import { Button } from './common/button';

export interface TodoContainerProp { }

export function TodoContainer(props: TodoContainerProp) {
    const [todoName, setTodoName] = useState<string>('');
    const onCreateTodo = useCallback((event: React.FormEvent<HTMLButtonElement>) => {
        
    }, [todoName]);
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
                    <Button name="CREATE" onClick={onCreateTodo} className="button"  testId="create-btn" />
                </div>

            </div>
        </div>
    )
}
