// components/ui/CTAButton.tsx

import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-4 lg:px-8 py-3 lg:py-4 text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-95";

  const variants = {
    primary:
      "bg-brand-dark text-white border border-white/20 shadow-lg hover:bg-brand-dark/90",

    secondary:
      "border border-brand-medium text-brand-medium hover:bg-brand-medium hover:text-white",
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
