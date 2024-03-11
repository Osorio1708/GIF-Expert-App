import { AddCategory } from "../../src/components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test of <AddCategory />", () => {
  const inputValue = "Kira";

  test("should change textbox", () => {
    //Arrange
    //Act
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    //Assert
    expect(input.value).toBe(inputValue);
  });

  test("should call onNewCategory if input has value", () => {
    //Arange
    const onNewCategory = jest.fn();
    //Act
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    //Assert
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call onNewCategory if input dont have value", () => {
    //Arange
    const onNewCategory = jest.fn();
    //Act
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: "" } });
    fireEvent.submit(form);
    //Assert
    expect(input.value).toBe("");
    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
