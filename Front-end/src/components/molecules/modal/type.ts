import type { ReactNode } from "react";

export type modalProps = {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  buttonLabel: string;
  bgButton?: string;
  colorScheme?: string;
  modalTitle?: string;
};
