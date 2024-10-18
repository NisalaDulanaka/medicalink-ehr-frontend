import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import { AuthContextProvider } from "./contexts/AuthProvider.tsx";
import AppLoader from "./components/app-loader/AppLoader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" Component={LoginPage} />
          <Route path="/test" Component={AppLoader} />
          <Route path="*" Component={App} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
