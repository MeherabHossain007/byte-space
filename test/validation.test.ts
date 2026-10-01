import { describe, it, expect } from "vitest";
import {
  isValidEmail,
  isValidPassword,
  validateLoginForm,
  validateSignupForm,
} from "@/lib/utils";

describe("Validation Utilities", () => {
  describe("isValidEmail", () => {
    it("returns true for standard email addresses", () => {
      expect(isValidEmail("user@example.com")).toBe(true);
      expect(isValidEmail("student.growth@bytespace.edu")).toBe(true);
    });

    it("returns false for invalid email strings", () => {
      expect(isValidEmail("")).toBe(false);
      expect(isValidEmail("invalid-email")).toBe(false);
      expect(isValidEmail("missing@domain")).toBe(false);
      expect(isValidEmail("@missingusername.com")).toBe(false);
    });
  });

  describe("isValidPassword", () => {
    it("returns valid for passwords >= minLength", () => {
      expect(isValidPassword("password123").isValid).toBe(true);
    });

    it("returns error for passwords < 8 characters", () => {
      const result = isValidPassword("short");
      expect(result.isValid).toBe(false);
      expect(result.error).toContain("at least 8 characters");
    });
  });

  describe("validateLoginForm", () => {
    it("passes for valid email and password", () => {
      const result = validateLoginForm({
        email: "user@example.com",
        password: "securepassword",
      });
      expect(result.isValid).toBe(true);
    });

    it("fails when fields are missing", () => {
      const result = validateLoginForm({ email: "", password: "" });
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("Please enter both email and password.");
    });
  });

  describe("validateSignupForm", () => {
    it("passes for valid signup input", () => {
      const result = validateSignupForm({
        fullName: "Jamie Davis",
        email: "jamie@example.com",
        password: "longpassword123",
      });
      expect(result.isValid).toBe(true);
    });

    it("rejects names shorter than 2 characters", () => {
      const result = validateSignupForm({
        fullName: "J",
        email: "jamie@example.com",
        password: "longpassword123",
      });
      expect(result.isValid).toBe(false);
      expect(result.error).toContain("Full name must be at least 2 characters");
    });
  });
});
