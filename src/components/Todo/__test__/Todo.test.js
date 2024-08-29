import { render, screen, fireEvent } from '@testing-library/react';
import Todo from "../Todo";
import {BrowserRouter} from "react-router-dom";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", {name: "Add"});

    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}});
        fireEvent.click(buttonElement);
    })
}

describe("Header", () => {
    test('Should render same text passed in title', async () => {
        render(<MockTodo />);

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole("button", {name: "Add"});

        fireEvent.change(inputElement, {target: {value: "Go grocery shopping"}});
        fireEvent.click(buttonElement);

        const divElement = screen.getByText(/Go grocery shopping/i)
        expect(divElement).toBeInTheDocument();
        // const headingElement = screen.getByText(/my header/i);
        // expect(headingElement).toBeInTheDocument();
    });

    test('Should render multiple task items', async () => {
        render(<MockTodo />);

        addTasks([
            "Go grocery shopping",
            "Clean room",
            "Clean kitchen",
        ])

        const divElement = screen.getAllByTestId("task-item");
        expect(divElement.length).toBe(3);
    });

    test('Should not have completed class when initially rendered', async () => {
        render(<MockTodo />);

        addTasks([
            "Go grocery shopping",
            "Clean room",
            "Clean kitchen",
        ])

        const divElement = screen.getAllByTestId("task-item");
        expect(divElement.length).toBe(3);

        const element = screen.getByText(/Go grocery shopping/i);
        expect(element).not.toHaveClass("todo-item-active");
    });

    test('Should have completed class when clicked', async () => {
        render(<MockTodo />);

        addTasks([
            "Go grocery shopping",
            "Clean room",
            "Clean kitchen",
        ])

        const divElement = screen.getAllByTestId("task-item");
        expect(divElement.length).toBe(3);

        const element = screen.getByText(/Go grocery shopping/i);
        fireEvent.click(element);
        expect(element).toHaveClass("todo-item-active");
    });
})
