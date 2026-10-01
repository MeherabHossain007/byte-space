import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CourseCard from "@/components/ui/cards/CourseCard";

describe("CourseCard Component", () => {
  const mockCourse = {
    thumb: "/images/courses/figma.jpg",
    title: "Master Next.js App Router",
    instructor: "ByteSpace Academy",
    price: "$49",
    period: "lifetime",
    rating: 4.8,
    level: "Intermediate",
    lessonsCount: "32 Lessons",
    duration: "4 hours 30 mins",
    commentsCount: "128 Comments",
    studentsCount: "1.2K+",
  };

  it("renders course title, instructor, and price", () => {
    render(<CourseCard {...mockCourse} />);
    expect(screen.getByText("Master Next.js App Router")).toBeInTheDocument();
    expect(screen.getByText("ByteSpace Academy")).toBeInTheDocument();
    expect(screen.getByText("$49")).toBeInTheDocument();
    expect(screen.getByText("/lifetime")).toBeInTheDocument();
  });

  it("renders metadata tags for lessons, duration, and comments", () => {
    render(<CourseCard {...mockCourse} />);
    expect(screen.getByText("32 Lessons")).toBeInTheDocument();
    expect(screen.getByText("4 hours 30 mins")).toBeInTheDocument();
    expect(screen.getByText("128 Comments")).toBeInTheDocument();
  });

  it("displays level badge", () => {
    render(<CourseCard {...mockCourse} />);
    expect(screen.getByText("Intermediate")).toBeInTheDocument();
  });
});
