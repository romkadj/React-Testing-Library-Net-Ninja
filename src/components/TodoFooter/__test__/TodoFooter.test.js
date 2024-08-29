import { render, screen } from '@testing-library/react';
import TodoFooter from "../TodoFooter";
import {BrowserRouter} from "react-router-dom";

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>

}

describe('ToDoFooter', () => {
    test('Should render the correct amount of incomplete tasks', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test('Should render "task" when incomplete task list is 1', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test('test 3', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeVisible();
    });

    test('test 4', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toContainHTML('p');
    });

    test('test 5', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement.textContent).toBe('1 task left');
    });
});


