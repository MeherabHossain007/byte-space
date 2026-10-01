import { NavItem, FooterColumn, FooterLink, LearningPath } from "@/types";

export const NAV_LINKS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
] as const;

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    links: [
      { label: "Product", href: "#" },
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Help", href: "#" },
    ],
  },
  {
    links: [
      { label: "Development", href: "#courses" },
      { label: "Marketing", href: "#courses" },
      { label: "Photography", href: "#courses" },
      { label: "Finance", href: "#courses" },
      { label: "Sport", href: "#courses" },
    ],
  },
  {
    links: [
      { label: "Become a Creator", href: "#creators" },
      { label: "Affiliate Program", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Help", href: "#" },
      { label: "About", href: "#about" },
    ],
  },
] as const;

export const LEGAL_LINKS: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
] as const;

export const LEARNING_PATHS: readonly LearningPath[] = [
  {
    name: "Design",
    icon: "/icons/design.svg",
  },
  {
    name: "Development",
    icon: "/icons/development.svg",
  },
  {
    name: "IT & Software",
    icon: "/icons/laptop.svg",
  },
  {
    name: "Business",
    icon: "/icons/business.svg",
  },
  {
    name: "Marketing",
    icon: "/icons/marketing.svg",
  },
  {
    name: "Photography",
    icon: "/icons/photography.svg",
  },
] as const;
