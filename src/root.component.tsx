import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AUTHS_PATHS, BASE_PATHS } from "./constants/paths";
import "./index.css";
import Layout from "./layout";

const Signin_page = lazy(() => import("~/pages/signin"));
const Signup_page = lazy(() => import("~/pages/signup"));
const ForgotPassword_page = lazy(() => import("~/pages/forgot-password"));

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_PATHS.AUTH} element={<Layout />}>
          <Route path={""} element={<Navigate to={AUTHS_PATHS.SIGNIN} replace />} />
          <Route path={AUTHS_PATHS.SIGNIN} element={<Signin_page />} />
          <Route path={AUTHS_PATHS.SIGNUP} element={<Signup_page />} />
          <Route path={AUTHS_PATHS.FORGOT_PASSWORD} element={<ForgotPassword_page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
