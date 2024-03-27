import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import "./styles/index.css";

const music = document.getElementById(
  "music-audio-element",
)! as HTMLAudioElement;

if (localStorage.getItem("music-timestamp")) {
  music.currentTime = Number(localStorage.getItem("music-timestamp")!);
}

setInterval(() => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark", "bg-[#111111]");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark", "bg-[#111111]");
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
