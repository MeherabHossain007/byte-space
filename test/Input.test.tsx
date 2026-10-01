import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "@/components/ui/Input";

describe("Input UI Component", () => {
  it("renders with placeholder and forwards standard input attributes", () => {
    render(<Input placeholder="Search courses..." id="search" />);
    const input = screen.getByPlaceholderText("Search courses...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "search");
  });

  it("handles text input changes", () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Email" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Email");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("renders optional leading icon when provided", () => {
    render(<Input placeholder="With Icon" icon={<span data-testid="test-icon">🔍</span>} />);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });
});
