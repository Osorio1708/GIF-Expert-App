import { GifGrid } from "../../src/components/GifGrid";
import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Tests on <GifGrif/>", () => {
  const category = "kira";
  test("should show loading at the beginning", () => {
    //Arrange
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    //Act
    render(<GifGrid category={category} />);
    //Assert
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should show items when useFetchGifs charges some images", () => {
    //Arrange
    const gifs = [
      {
        id: "mockId",
        title: "mockTitle",
        url: "mockURL",
      },
      {
        id: "mockId2",
        title: "mockTitle2",
        url: "mockURL2",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    //Act
    render(<GifGrid category={category} />);
    //Assert
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
