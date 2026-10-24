import type { CSSProperties, HTMLAttributes } from "react";

/**
 * Types for the vendored React Bits `GradientASCII` component
 * (components/GradientASCII.jsx). The source ships as JS, so its props are
 * declared here to keep them optional and typed at the call site.
 */
export type GradientASCIIShape = "horizon" | "pinch" | "rise" | "eclipse";
export type GradientASCIIClickEffect = "none" | "wave" | "burst";

export interface GradientASCIIProps extends HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  shape?: GradientASCIIShape;
  characters?: string;
  cellSize?: number;
  density?: number;
  glyphOpacity?: number;
  glow?: number;
  depthOfField?: number;
  flicker?: number;
  softness?: number;
  scale?: number;
  flow?: number;
  speed?: number;
  gradientOpacity?: number;
  grain?: number;
  variation?: number;
  mouseInteraction?: boolean;
  scrambleRadius?: number;
  clickEffect?: GradientASCIIClickEffect;
  intro?: boolean;
  lightMode?: boolean;
  fontFamily?: string;
  dpr?: number;
  className?: string;
  style?: CSSProperties;
}

export default function GradientASCII(props: GradientASCIIProps): JSX.Element;
