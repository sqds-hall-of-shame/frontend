import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import "./styles/index.css";

setInterval(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark", "bg-[#0a0a0a]");
    document.documentElement.style.setProperty(
      "--scrollbar-track-color",
      "#212121",
    );
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      "#f2f2f2",
    );
    localStorage.setItem("theme", "dark");
    return;
  }

  document.documentElement.classList.remove("dark", "bg-[#0a0a0a]");
  document.documentElement.style.setProperty(
    "--scrollbar-track-color",
    "#979797",
  );
  document.documentElement.style.setProperty(
    "--scrollbar-thumb-color",
    "#3b3b3b",
  );
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
