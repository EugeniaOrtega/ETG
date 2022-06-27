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
import { Inicio } from "./components/Inicio";
import { Empleado } from "./components/Empleado";

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
          <Route
            path="/employe"
            element={
              <ProtectedRoute>
                <Empleado />
              </ProtectedRoute>
            }
          />{" "}
          <Route path="/login" element={<Login />} />{" "}
          <Route path="/registro" element={<Registro />} />{" "}
          <Route path="/resetPassword" element={<ResetPassword />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/contact" element={<Formulario />} />{" "}
          <Route path="/sustainability" element={<Sostenibilidad />} />{" "}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />{" "}
          <Route
            path="/editProfile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />{" "}
          <Route path="/questions" element={<Questions />} />{" "}
          <Route path="/inicio" element={<Inicio />} />{" "}
        </Routes>{" "}
      </AuthProvider>{" "}
    </div>
  );
}

export default App;
