import { ServerError } from "@pages/500";
import { Component, ErrorInfo } from "react";
import { ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
  customErrorC?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

function log(...args: any[]) {
  console.log(args);
}
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  private customErrorC: ReactNode | null;
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.customErrorC = props.customErrorC;
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    log(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      if (this.customErrorC) return this.customErrorC;

      return <ServerError />;
    }
    return this.props.children;
  }
}
