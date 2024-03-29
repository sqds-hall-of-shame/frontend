import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import "./styles/index.css";

const extraStyleElement = document.getElementById(
  "extra-style",
)! as HTMLStyleElement;

setInterval(() => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark", "bg-[#0a0a0a]");
    document.documentElement.classList.remove("bg-gradient");
    return;
  }

  document.documentElement.classList.remove("dark", "bg-[#0a0a0a]");
  document.documentElement.classList.add("bg-gradient");

  if (localStorage.getItem("scrollbar-hidden") === "true") {
    extraStyleElement.innerHTML = "::-webkit-scrollbar { width: 0; }";
  } else {
    extraStyleElement.innerHTML = "";
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
