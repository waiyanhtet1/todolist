import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import CreateNewPage from "./pages/CreateNewPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import UpdatePage from "./pages/UpdatePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/new" element={<CreateNewPage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/:id/update" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
