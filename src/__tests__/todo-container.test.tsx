import React from 'react';
import { render,screen, cleanup } from '../utils/test-utils';
import TodoContainer from '../component/todo-container';


afterEach(cleanup);


test("todo-container render successful", () => {
    render(<TodoContainer />);
    const ele = screen.getAllByTestId('todo-container');
    expect(ele).not.toBeNull();
});




