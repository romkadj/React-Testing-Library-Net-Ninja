import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
    test('Should render input element', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    test('Should render input element', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

        fireEvent.change(inputElement, { target: {value: "Go grocery shopping"} })

        expect(inputElement.value).toBe("Go grocery shopping");
    });

    test('Should have empty input when add button is clicked', async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

        fireEvent.change(inputElement, { target: {value: "Go grocery shopping"} })

        expect(inputElement.value).toBe("Go grocery shopping");
        const buttonElement = screen.getByRole("button", {name: /Add/i});
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe("");
    });
});
