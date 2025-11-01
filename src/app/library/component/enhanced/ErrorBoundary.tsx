'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { ComponentError, ErrorSeverity } from '@/types/component-docs';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: ComponentError) => void;
  showDetails?: boolean;
  componentName?: string;
  testId?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });

    // Determine error severity
    const severity: ErrorSeverity = this.getErrorSeverity(error);

    // Create structured error object
    const componentError: ComponentError = {
      message: error.message,
      code: this.state.errorId,
      component: this.props.componentName || 'Unknown Component',
      timestamp: new Date()
    };

    // Report error
    this.props.onError?.(componentError);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group(`🚨 Component Error [${severity.toUpperCase()}]`);
      console.error('Error:', error);
      console.error('Component Stack:', errorInfo.componentStack);
      console.error('Error Info:', errorInfo);
      console.groupEnd();
    }

    // Report to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(componentError, error, errorInfo, severity);
    }
  }

  private getErrorSeverity(error: Error): ErrorSeverity {
    const errorMessage = error.message.toLowerCase();
    
    if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
      return 'medium';
    }
    
    if (errorMessage.includes('syntax') || errorMessage.includes('reference')) {
      return 'high';
    }
    
    if (errorMessage.includes('memory') || errorMessage.includes('security')) {
      return 'critical';
    }
    
    return 'low';
  }

  private async reportError(
    componentError: ComponentError, 
    error: Error, 
    errorInfo: ErrorInfo,
    severity: ErrorSeverity
  ) {
    try {
      // Example: Send to error tracking service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...componentError,
      //     severity,
      //     stack: error.stack,
      //     componentStack: errorInfo.componentStack,
      //     userAgent: navigator.userAgent,
      //     url: window.location.href
      //   })
      // });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  }

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
      });
    }
  };

  private handleReset = () => {
    this.retryCount = 0;
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div 
          className="border border-red-200 rounded-lg p-6 bg-red-50"
          data-testid={this.props.testId || 'error-boundary'}
          role="alert"
          aria-live="assertive"
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-red-800">
                Something went wrong
              </h3>
              <p className="mt-1 text-sm text-red-700">
                {this.props.componentName || 'This component'} encountered an error and couldn't render properly.
              </p>
              
              {this.props.showDetails && this.state.error && (
                <details className="mt-3">
                  <summary className="text-xs text-red-600 cursor-pointer hover:text-red-800">
                    Show error details
                  </summary>
                  <pre className="mt-2 text-xs text-red-700 bg-red-100 p-2 rounded overflow-x-auto">
                    {this.state.error.message}
                    {process.env.NODE_ENV === 'development' && (
                      <>
                        {'\n\n'}
                        {this.state.error.stack}
                      </>
                    )}
                  </pre>
                </details>
              )}

              <div className="mt-4 flex space-x-3">
                {this.retryCount < this.maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="inline-flex items-center space-x-1 px-3 py-1 text-xs font-medium text-red-700 bg-red-100 hover:bg-red-200 rounded transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Try Again ({this.maxRetries - this.retryCount} left)</span>
                  </button>
                )}
                
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center px-3 py-1 text-xs font-medium text-red-700 border border-red-300 hover:bg-red-50 rounded transition-colors"
                >
                  Reset Component
                </button>
              </div>

              <p className="mt-2 text-xs text-red-600">
                Error ID: {this.state.errorId}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}