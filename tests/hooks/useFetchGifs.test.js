import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("Tests of useFetchGifs hook", () => {
  test("should return init state", () => {
    //Arrange
    //Act
    const { result } = renderHook(() => useFetchGifs("Valorant"));
    const { images, isLoading } = result.current;
    //Assert
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy;
  });
  test("should return an array of images and isLoading in false", async () => {
    //Arrange
    //Act
    const { result } = renderHook(() => useFetchGifs("Valorant"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    //Assert
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy;
  });
});
