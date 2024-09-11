import { Navigate, Route, Routes } from "react-router-dom";
import { MainLinksPage } from "../pages/MainLinksPage";
import { OtherInfoPage } from "../pages/OtherInfoPage";
import { PrgLinksPage } from "../pages/PrgLinksPage";
import { WeatherLinksPage } from "../pages/WeatherLinksPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLinksPage />} />
        <Route path="/other-info" element={<OtherInfoPage />} />
        <Route path="/prg-links" element={<PrgLinksPage />} />
        <Route path="/weather-links" element={<WeatherLinksPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
