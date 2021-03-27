import React from 'react';
import { render, screen, cleanup, fireEvent, waitFor, getByRole } from '../../utils/test-utils';
import { TodoContainer } from '../../component/todo-container';


afterEach(cleanup);


test("todo-container render successful", () => {
    const { container } = render(<TodoContainer />);
    const ele = screen.getAllByTestId('todo-container');

    // you can check with class
    expect(container.childNodes[0].childNodes[1]).toHaveClass("main-container");
    // you can check with text
    expect(screen.getByText("TODO")).not.toBeNull();
});

test("on create todo input box should be empty", () => {
    const { container, getByRole, getByPlaceholderText } = render(<TodoContainer />);
    const createBtn = getByRole('button', { name: "CREATE" });
    const input = getByPlaceholderText("TASK");
    fireEvent.change(input, {
        target:{value:"aaa"}
    });
    fireEvent(createBtn, new MouseEvent('click', {
        bubbles: true,
        cancelable: true
    }));
    
    expect(input).toHaveValue("")

})







