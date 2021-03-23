import React from 'react';
import { render, screen, cleanup } from '../../utils/test-utils';
import TodoContainer from '../../component/todo-container';


afterEach(cleanup);


test("todo-container render successful", () => {
    const { container } = render(<TodoContainer />);
    const ele = screen.getAllByTestId('todo-container');

    // you can check with class
    expect(container.childNodes[0].childNodes[1]).toHaveClass("main-container");
    // you can check with text
    expect(screen.getByText("TODO")).not.toBeNull();
});







