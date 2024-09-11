import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export const LinksApp = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
