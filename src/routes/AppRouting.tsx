import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RocketsPage from "../pages/RocketsPage";

export default function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="rockets" element={<RocketsPage />} />
    </Routes>
  );
}
