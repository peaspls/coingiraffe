import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App";

const queryClient = new QueryClient();

createRoot(document.getElementById("app")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
