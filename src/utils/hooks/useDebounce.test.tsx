import { render, act } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

const TestComponent = ({ value }: { value: string }) => {
  const debouncedValue = useDebounce(value, 300);
  return <div>{debouncedValue}</div>;
};

describe("useDebounce", () => {
  it("should debounce the value", () => {
    jest.useFakeTimers();

    const { getByText, rerender } = render(<TestComponent value="initial" />);
    expect(getByText("initial")).toBeInTheDocument();

    rerender(<TestComponent value="updated" />);
    act(() => jest.advanceTimersByTime(300));

    expect(getByText("updated")).toBeInTheDocument();
  });
});
