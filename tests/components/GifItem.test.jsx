import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Test of <GifItem />", () => {
  const title = "L";
  const url = "https://death-note/L.png";

  test("should match with snapshot", () => {
    //Arrange
    //Act
    const { container } = render(<GifItem title={title} url={url} />);
    //Assert
    expect(container).toMatchSnapshot();
  });

  test("should show image with respective URL and ALT", () => {
    //Arrange
    //Act
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    //Assert
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show component title", () => {
    //Arrange
    //Act
    render(<GifItem title={title} url={url} />);
    //Assert
    expect(screen.getByText(title)).toBeTruthy();
  });
});
