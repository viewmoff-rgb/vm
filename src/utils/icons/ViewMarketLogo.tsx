/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from "react";

interface ViewMarketLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ViewMarketLogo: React.FC<ViewMarketLogoProps> = ({
  className = "",
  size = "md",
}) => {
  const sizes = {
    sm: { width: 120, height: 24 },
    md: { width: 150, height: 32 },
    lg: { width: 180, height: 40 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* AI Brain/Circuit Icon */}
      <g>
        {/* Outer circle */}
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
        />
        {/* Inner brain/AI pattern */}
        <path
          d="M12 16C12 14 14 12 16 12C18 12 20 14 20 16C20 18 22 20 24 20C26 20 28 18 28 16"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12 24C12 26 14 28 16 28C18 28 20 26 20 24C20 22 22 20 24 20C26 20 28 22 28 24"
          stroke="url(#gradient1)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Center dot */}
        <circle cx="20" cy="20" r="3" fill="url(#gradient1)" />
        {/* Connection nodes */}
        <circle cx="12" cy="16" r="2" fill="#8B5CF6" />
        <circle cx="28" cy="16" r="2" fill="#06B6D4" />
        <circle cx="12" cy="24" r="2" fill="#8B5CF6" />
        <circle cx="28" cy="24" r="2" fill="#06B6D4" />
      </g>

      {/* ViewMarket Text */}
      <text
        x="44"
        y="26"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="currentColor"
      >
        <tspan fill="url(#gradient1)">View</tspan>
        <tspan fill="currentColor">Market</tspan>
      </text>

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ViewMarketLogo;
