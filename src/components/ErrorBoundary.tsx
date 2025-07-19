
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    
    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error reporting service
      // errorReportingService.captureException(error, { extra: errorInfo });
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col justify-center items-center h-screen text-center bg-neutral-light p-4" role="alert">
          <header className="mb-4">
            <h1 className="text-2xl font-bold text-destructive mb-2">Oops! Something went wrong.</h1>
          </header>
          <div className="mb-8">
            <p className="text-neutral-taupe mb-4">
              We've logged the error and our team will look into it. Please try refreshing the page or go back home.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left text-sm text-gray-600 bg-gray-100 p-4 rounded mt-4">
                <summary className="cursor-pointer">Error Details (Development Only)</summary>
                <pre className="mt-2 whitespace-pre-wrap">{this.state.error.stack}</pre>
              </details>
            )}
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button onClick={this.handleRetry} variant="outline">
              Try Again
            </Button>
            <Button onClick={this.handleGoHome}>
              Go to Homepage
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
