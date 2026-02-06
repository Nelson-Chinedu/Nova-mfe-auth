import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AUTHS_PATHS } from "./constants/paths";
import "./index.css";

const Signin_page = lazy(() => import("~/pages/signin"));
const Signup_page = lazy(() => import("~/pages/signup"));
const ForgotPassword_page = lazy(() => import("~/pages/forgot-password"));

export default function Root() {
  return (
    <div id="nova-mfe-auth">
      <BrowserRouter>
        <Routes>
          <Route path={""} element={<Navigate to={AUTHS_PATHS.SIGNIN} replace />} />
          <Route path={AUTHS_PATHS.SIGNIN} element={<Signin_page />} />
          <Route path={AUTHS_PATHS.SIGNUP} element={<Signup_page />} />
          <Route path={AUTHS_PATHS.FORGOT_PASSWORD} element={<ForgotPassword_page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
