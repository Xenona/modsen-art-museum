import { ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
  customErrorC?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
