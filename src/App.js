import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { Registro } from "./components/Registro";
import { AuthProvider } from "./context/authContext";
import { ResetPassword } from "./components/ForgotPassword";
import { Formulario } from "./components/Formulario";
import { Sostenibilidad } from "./components/Sostenibilidad";
import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { EditProfile } from "./components/EditProfile";
import { Questions } from "./components/PreguntasFrecuentes";

function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/registro" element={<Registro />} />{" "}
          <Route path="/resetPassword" element={<ResetPassword />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/contact" element={<Formulario />} />{" "}
          <Route path="/sustainability" element={<Sostenibilidad />} />{" "}
          <Route path="/profile" element={<Profile />} />{" "}
          <Route path="/editProfile" element={<EditProfile />} />{" "}
          <Route path="/questions" element={<Questions />} />{" "}
        </Routes>{" "}
      </AuthProvider>{" "}
    </div>
  );
}

export default App;
