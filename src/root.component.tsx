import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AUTHS_PATHS } from "./constants/paths";
import "./index.css";
import Signin from "./pages/signin";

export default function Root() {
  return (
    <div id="nova-mfe-auth">
      <BrowserRouter>
        <Routes>
          <Route path={AUTHS_PATHS.SIGNIN} element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
