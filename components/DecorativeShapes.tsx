import React from "react";

// Lime 3D Helix / Spring Doodle
export function LimeSpring({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        d="M20 30C45 10 95 15 90 45C85 75 25 65 35 90C45 115 100 110 95 130"
        stroke="#CEFF1A"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Lime 3D Cylinder / Cone
export function LimeCylinder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none drop-shadow-lg ${className}`}
    >
      <defs>
        <linearGradient id="limeCyl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2FF4F" />
          <stop offset="60%" stopColor="#CEFF1A" />
          <stop offset="100%" stopColor="#A3D400" />
        </linearGradient>
      </defs>
      <path
        d="M20 25 L75 10 L85 95 L30 110 Z"
        fill="url(#limeCyl)"
      />
      <ellipse cx="47" cy="17" rx="28" ry="12" fill="#F1FFA6" transform="rotate(-15 47 17)" />
      <ellipse cx="57" cy="102" rx="28" ry="12" fill="#92C400" transform="rotate(-15 57 102)" />
    </svg>
  );
}

// White 3D Torus / Donut
export function WhiteTorus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none drop-shadow-xl ${className}`}
    >
      <defs>
        <linearGradient id="whiteTorusGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <radialGradient id="torusHole" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1856F3" />
          <stop offset="100%" stopColor="#1344C4" />
        </radialGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70 10C103.137 10 130 36.8629 130 70C130 103.137 103.137 130 70 130C36.8629 130 10 103.137 10 70C10 36.8629 36.8629 10 70 10ZM70 42C85.464 42 98 54.536 98 70C98 85.464 85.464 98 70 98C54.536 98 42 85.464 42 70C42 54.536 54.536 42 70 42Z"
        fill="url(#whiteTorusGrad)"
        transform="rotate(-20 70 70)"
      />
    </svg>
  );
}

// White 3D Triangular Wedge / Prism
export function WhitePrism({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none drop-shadow-lg ${className}`}
    >
      <polygon points="50,15 90,85 10,75" fill="#FFFFFF" />
      <polygon points="50,15 90,85 85,95 20,88" fill="#E2E8F0" opacity="0.8" />
    </svg>
  );
}

// White Scribble Zig-Zag
export function WhiteZigzag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        d="M10 25 L25 10 L40 38 L55 12 L70 28"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Lime Scribble Zig-Zag
export function LimeZigzag({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <path
        d="M12 40 L28 14 L44 46 L60 16 L72 35"
        stroke="#CEFF1A"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
