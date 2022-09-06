import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div class="container-fluid">
        <div class="text-center">
          <div class="error mx-auto" data-text="404">
            404
          </div>
          <p class="lead text-gray-800 mb-5">Page Not Found</p>
          <p class="text-gray-500 mb-0">
            It looks like you found a glitch in the matrix...
          </p>
          <a onClick={() => navigate("/")}>&larr; Back to Dashboard</a>
        </div>
      </div>
    </>
  );
}
