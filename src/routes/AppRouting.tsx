import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RocketPage from "../pages/RocketPage";
import RocketsPage from "../pages/RocketsPage";

export default function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="rockets" element={<RocketsPage />} />
      <Route path="rockets/:rocketId" element={<RocketPage />} />
    </Routes>
  );
}
