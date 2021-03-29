import { useCallback } from 'react';
import { Button } from './common/button';
export interface TodoItemProps {
    name: string,
    isCompleted: boolean
}

export const TodoItem = ({ name, isCompleted }: TodoItemProps) => {
    const onEdit = useCallback(() => { }, [])
    const onDone = useCallback(() => { }, []);
    return <div className="todo-item">
        <span className="todo-item-content">{name}</span>
        {!isCompleted ? <div data-testid="todoBtnContainer" className="todo-item-btn-container">
            <Button className="button todo-item-btn" name="Edit" onClick={onEdit} />
            <Button className="button todo-item-btn" name="Done" onClick={onDone} />
        </div> : false}
    </div>
}