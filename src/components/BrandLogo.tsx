import { cn } from "@/lib/utils";
import seekYourYLogo from "@/assets/seekyoury_logo_favicon.png";

type BrandLogoProps = {
  className?: string;
  /** Slightly larger mark for hero-style placements */
  size?: "nav" | "lg" | "custom";
  /** onLight: white header (blend removes black PNG bg). onDark: navy footer. */
  variant?: "onLight" | "onDark";
};

export function BrandLogo({ className, size = "nav", variant = "onLight" }: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-2 sm:gap-3 font-semibold tracking-wide shrink-0", className)}>
      <img
        src={seekYourYLogo}
        alt="Seek Your Y"
        className={cn(
          "w-auto object-contain shrink-0",
          size === "nav" && "h-8 sm:h-10 md:h-14",
          size === "lg" && "h-10 md:h-20",
        )}
      />
      <span className={cn("text-base sm:text-lg md:text-2xl font-black tracking-tight whitespace-nowrap shrink-0", variant === "onDark" ? "text-white" : "text-slate-900")}>
        Seek Your Y
      </span>
    </div>
  );
}
