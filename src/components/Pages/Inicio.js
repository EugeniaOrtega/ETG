import { useAuth } from "../../context/authContext";
import { Home } from "../NabBar/Home";
import { NavBar } from "../NabBar/NavBar";

export function Inicio() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="w-full bg-[url('/public/vessel.png')]">
      {user ? <Home /> : <NavBar />}
    </div>
  );
}
