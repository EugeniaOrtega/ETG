import { Home } from "../../NabBar/Home";
import { useAuth } from "../../../context/authContext";
import { Fade } from "react-reveal";
export function Profile() {
  const { user } = useAuth();
  //console.log(user);

  return (
    <div className="w-full bg-[url('/public/vessel.png')]">
      <Home />{" "}
      <div className="mx-auto mt-4 py-12 ">
        <div className="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg fondo">
          <Fade left>
            <div className="h-40 bg-gradient-to-br from-blue-400 via-indigo-500 fondo">
              <div className="flex justify-center">
                <span className="mt-10 text-xl font-extrabold text-white">
                  {user.displayName || user.email}
                </span>
              </div>
              <div className="flex justify-center">
                <img
                  className="object-cover w-24 h-24 mt-4 border-4 border-blue-600 rounded-full"
                  src={user.photoURL || "default.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex justify-center mt-10 mb-4 text-xl font-medium">
                Datos personales
              </div>
              <div className="flex my-1  text-black justify-center">
                <img
                  className="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                  src="account.png"
                  alt=""
                />
                <span className="mx-5 py-4">
                  {user.displayName || user.email}
                </span>
              </div>

              <div className="flex my-1 text-black justify-center">
                <img
                  className="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                  src="email.png"
                  alt=""
                />
                <span className="mx-5 py-4">{user.email}</span>
              </div>

              <div className="flex my-1 mt-2 justify-center ">
                <button
                  type="button"
                  className="inline-flex  px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  <a href="/editProfile" className="text-white">
                    {" "}
                    Editar perfil
                  </a>
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
