import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Index } from "@/routes/Index";
import { FreeRobuxObbyRobloxRobuxFreeRoboxApp } from "@/routes/FreeRobuxObbyRobloxRobuxFreeRoboxApp";
import { NotFound } from "@/routes/NotFound";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/free-robux-obby-roblox-robux-free-robox-app"
        element={<FreeRobuxObbyRobloxRobuxFreeRoboxApp />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
