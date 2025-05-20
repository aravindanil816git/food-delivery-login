import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { LoginSignup } from "./pages/LoginSignup/LoginSignup";
import { Navbar } from "./components/Navbar/Navbar";
import { AuthProvider } from "./providers/AuthProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";

function AppRoutes() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              {!hideNavbar && <Navbar />}
              <PageContainer>
                <Home />
              </PageContainer>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div style={{ padding: "0 10% 100px 10%" }}>{children}</div>;
};

export { AppRoutes };
