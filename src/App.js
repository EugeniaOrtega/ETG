import { Routes, Route } from "react-router-dom";
import { Home } from "./components/NabBar/Home";
import { Login } from "./components/Usuarios/Autentication/Login/Login";
import { ProtectedRoute } from "./components/Utils/ProtectedRoutes";
import { Registro } from "./components/Usuarios/Autentication/Registro/Registro";
import { AuthProvider } from "./context/authContext";
import { ResetPassword } from "./components/Usuarios/Autentication/RestablecerContraseña/ForgotPassword";
import { Formulario } from "./components/Pages/Formulario";
import { Sostenibilidad } from "./components/Pages/Sostenibilidad";
import { About } from "./components/Pages/About";
import { Profile } from "./components/Usuarios/Profile/Profile";
import { EditProfile } from "./components/Usuarios/Profile/EditProfile";
import { Questions } from "./components/Pages/PreguntasFrecuentes";
import { Inicio } from "./components/Pages/Inicio";
import { Empleado } from "./components/Empleados/Empleado";
import { Prueba } from "./components/pruebas";
import { Modal } from "./components/modalPrueba";

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
          <Route path="/prueba" element={<Prueba />} />{" "}
          <Route path="/modal" element={<Modal />} />
        </Routes>{" "}
      </AuthProvider>{" "}
    </div>
  );
}

export default App;
