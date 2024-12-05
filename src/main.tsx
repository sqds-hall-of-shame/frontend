import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import { strictMode } from "../config";
import "./styles/index.css";

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark", "bg-[#0a0a0a]");
  document.documentElement.classList.remove("bg-gradient");
} else {
  document.documentElement.classList.remove("dark", "bg-[#0a0a0a]");
  document.documentElement.classList.add("bg-gradient");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  strictMode ? (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  ) : (
    <Router />
  ),
);
