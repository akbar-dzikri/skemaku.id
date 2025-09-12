import { useState, useEffect, useCallback } from "react";

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

  const updateBreakpoint = useCallback(() => {
    // Handle SSR - return default breakpoint if window is not available
    if (typeof window === "undefined") {
      return;
    }

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
  }, []);

  useEffect(() => {
    // Set initial breakpoint
    updateBreakpoint();

    // Add event listener for window resize with throttling
    let timeoutId: NodeJS.Timeout;
    const throttledUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateBreakpoint, 100);
    };

    window.addEventListener("resize", throttledUpdate);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", throttledUpdate);
      clearTimeout(timeoutId);
    };
  }, [updateBreakpoint]);

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

// Utility function to get breakpoint width without hook
export function getBreakpointWidth(breakpoint: Breakpoint): number {
  return breakpoints[breakpoint];
}

// Utility function to get current breakpoint from width
export function getBreakpointFromWidth(width: number): Breakpoint {
  switch (true) {
    case width >= breakpoints["2xl"]:
      return "2xl";
    case width >= breakpoints.xl:
      return "xl";
    case width >= breakpoints.lg:
      return "lg";
    case width >= breakpoints.md:
      return "md";
    case width >= breakpoints.sm:
      return "sm";
    default:
      return "xs";
  }
}
