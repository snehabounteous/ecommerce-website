import React from "react";

interface CTAButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  badgeCount?: number;
  badgeColor?: string;
}

const CTAButtonLight: React.FC<CTAButtonProps> = ({
  text,
  icon,
  onClick,
  className = "",
  badgeCount,
  badgeColor = "bg-red-600",
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={text || "CTA Button"}
      className={`relative flex items-center gap-x-2 px-4 py-2 border-2 border-primary text-primary bg-[#f7f7f7] hover:bg-[#e4e4e4] rounded transition-all whitespace-nowrap ${className}`}
    >
      <span className="flex items-center">{icon}</span>
      <span className="hidden lg:block">{text}</span>

      {badgeCount && (
        <span
          className={`absolute top-0 right-0 ${badgeColor} text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center`}
        >
          {badgeCount}
        </span>
      )}
    </button>
  );
};

export default CTAButtonLight;
