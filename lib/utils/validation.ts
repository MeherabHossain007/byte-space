/**
 * Client-side validation utilities for authentication and subscription forms.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  return EMAIL_REGEX.test(email.trim());
}

export function isValidPassword(password: string, minLength = 8): { isValid: boolean; error?: string } {
  if (!password || typeof password !== "string") {
    return { isValid: false, error: "Password is required." };
  }
  if (password.length < minLength) {
    return { isValid: false, error: `Password must be at least ${minLength} characters.` };
  }
  return { isValid: true };
}

export interface LoginFormFields {
  email: string;
  password: string;
}

export function validateLoginForm(fields: LoginFormFields): { isValid: boolean; error?: string } {
  if (!fields.email.trim() || !fields.password) {
    return { isValid: false, error: "Please enter both email and password." };
  }
  if (!isValidEmail(fields.email)) {
    return { isValid: false, error: "Please enter a valid email address." };
  }
  return { isValid: true };
}

export interface SignupFormFields {
  fullName: string;
  email: string;
  password: string;
}

export function validateSignupForm(fields: SignupFormFields): { isValid: boolean; error?: string } {
  if (!fields.fullName.trim() || !fields.email.trim() || !fields.password) {
    return { isValid: false, error: "Please fill in all fields." };
  }
  if (fields.fullName.trim().length < 2) {
    return { isValid: false, error: "Full name must be at least 2 characters." };
  }
  if (!isValidEmail(fields.email)) {
    return { isValid: false, error: "Please enter a valid email address." };
  }
  const passwordCheck = isValidPassword(fields.password, 8);
  if (!passwordCheck.isValid) {
    return passwordCheck;
  }
  return { isValid: true };
}
