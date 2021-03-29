import { render, screen, cleanup } from '../../utils/test-utils';
import { TodoItem } from '../../component/todo-item';

afterEach(cleanup);

test("todo-item render successful", () => {
    const { container, queryByText } = render(<TodoItem name="Task" isCompleted={false} />);
    expect(queryByText("Task")).toBeInTheDocument();
});
test("button vissiblity conditions dependends on isComplete", () => {
    const comp1 = render(<TodoItem name="Task" isCompleted={true} />);
    expect(comp1.queryByTestId("todoBtnContainer")).not.toBeInTheDocument();

    const comp2 = render(<TodoItem name="Task" isCompleted={false} />);
    expect(comp2.queryByTestId("todoBtnContainer")).toBeInTheDocument();
});


