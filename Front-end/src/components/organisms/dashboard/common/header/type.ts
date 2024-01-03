import type { ReactNode } from "react";

export type headerProps = {
  title: string;
  showButton?: boolean;
  onClick?: () => void;
  children: ReactNode
};
