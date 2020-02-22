import React from "react";
import "../../style/css/error-boundary.css";

const ErrorBoundary = message => (
  <div className="paper">
    <div className="error-message">{message}</div>
  </div>
);

export default ErrorBoundary;
