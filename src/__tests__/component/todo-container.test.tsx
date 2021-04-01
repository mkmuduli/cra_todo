import React from 'react';
import { render, screen, cleanup, waitFor } from '../../utils/test-utils';
import { TodoContainer } from '../../component/todo-container';
import { createStore } from '../../redux/create-store';


afterEach(cleanup);


test("todo-container render successful", async () => {
    render(<TodoContainer />, { hasRedux: true, store: createStore() });
    await waitFor(() => {
        expect(screen.getByTestId("todoItemBox").children.length).toBe(0);
    });
    // you can check with class
    // expect(container.childNodes[0].childNodes[1]).toHaveClass("main-container");
    // you can check with text
    expect(screen.getByText("TODO")).not.toBeNull();
});
// test("on create todo input box should be empty", async () => {
//     const { container, getByRole, getByPlaceholderText, getByTestId } = render(<TodoContainer />, { hasRedux: true, store: createStore() });
//     await waitFor(() => {
//         expect(getByTestId("todoItemBox").children.length).toBe(0);
//     })
//     const createBtn = getByRole('button', { name: "CREATE" });
//     const input = getByPlaceholderText("TASK");
//     fireEvent.change(input, {
//         target: { value: "aaa" }
//     });
//     fireEvent(createBtn, new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true
//     }));
//     expect(input).toHaveValue("");
// })
// test("create a todo when click on create button", async () => {
//     // const store = createStore();
//     const { container, getByRole, getByPlaceholderText, getByTestId } = render(<TodoContainer />, { hasRedux: true });
//     await waitFor(() => {
//         expect(getByTestId("todoItemBox").children.length).toBe(0);
//     })

//     const createBtn = getByRole('button', { name: "CREATE" });
//     const input = getByPlaceholderText("TASK");
//     // console.log(store.getState())

//     fireEvent.change(input, {
//         target: { value: "bbb" }
//     });
//     fireEvent(createBtn, new MouseEvent('click', {
//         bubbles: true,
//         cancelable: true
//     }));
//     // console.log(store.getState())
//     expect(getByTestId("todoItemBox").children.length).toBe(1);
// })








