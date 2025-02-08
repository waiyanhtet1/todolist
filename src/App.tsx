import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import CreateNewPage from "./pages/CreateNewPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import UpdatePage from "./pages/UpdatePage";
import AuthRoutes from "./routes/AuthRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* private routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<CreateNewPage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="/:id/update" element={<UpdatePage />} />
        </Route>

        {/* not found route */}
        <Route path="*" element={<div>Page not Found!</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
