import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { LoginSignup } from "./pages/LoginSignup/LoginSignup";
import { Navbar } from "./components/Navbar/Navbar";

function AppRoutes() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/"
          element={
            <PageContainer>
              <Home />
            </PageContainer>
          }
        />
      </Routes>
    </>
  );
}

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ padding: "0 10% 100px 10%" }}>{children}</div>;
};

export { AppRoutes };
