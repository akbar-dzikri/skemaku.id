import { useState, useEffect } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints: Record<Breakpoint, number> = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;

      switch (true) {
        case width >= breakpoints["2xl"]:
          setBreakpoint("2xl");
          break;
        case width >= breakpoints.xl:
          setBreakpoint("xl");
          break;
        case width >= breakpoints.lg:
          setBreakpoint("lg");
          break;
        case width >= breakpoints.md:
          setBreakpoint("md");
          break;
        case width >= breakpoints.sm:
          setBreakpoint("sm");
          break;
        default:
          setBreakpoint("xs");
          break;
      }
    };

    // Set initial breakpoint
    updateBreakpoint();

    // Add event listener for window resize
    window.addEventListener("resize", updateBreakpoint);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}

// Helper hook to check if current breakpoint is above a certain threshold
export function useBreakpointAbove(threshold: Breakpoint): boolean {
  const currentBreakpoint = useBreakpoint();
  const currentWidth = breakpoints[currentBreakpoint];
  const thresholdWidth = breakpoints[threshold];

  return currentWidth >= thresholdWidth;
}

// Helper hook to check if current breakpoint is below a certain threshold
export function useBreakpointBelow(threshold: Breakpoint): boolean {
  const currentBreakpoint = useBreakpoint();
  const currentWidth = breakpoints[currentBreakpoint];
  const thresholdWidth = breakpoints[threshold];

  return currentWidth < thresholdWidth;
}

// Helper hook to check if current breakpoint is between two thresholds
export function useBreakpointBetween(
  min: Breakpoint,
  max: Breakpoint,
): boolean {
  const currentBreakpoint = useBreakpoint();
  const currentWidth = breakpoints[currentBreakpoint];
  const minWidth = breakpoints[min];
  const maxWidth = breakpoints[max];

  return currentWidth >= minWidth && currentWidth < maxWidth;
}
