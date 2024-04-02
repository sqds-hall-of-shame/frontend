import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Index } from "@/routes/Index";
import { Random } from "@/routes/Random";
import { MessageId } from "./routes/message/[id]";
import { FreeRobuxObbyRobloxRobuxFreeRoboxApp } from "@/routes/FreeRobuxObbyRobloxRobuxFreeRoboxApp";
import { NotFound } from "@/routes/NotFound";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/random" element={<Random />} />
      <Route path="/message/:id" element={<MessageId />} />
      <Route
        path="/free-robux-obby-roblox-robux-free-robox-app"
        element={<FreeRobuxObbyRobloxRobuxFreeRoboxApp />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
