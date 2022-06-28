import { useState } from "react";
import { useAuth } from "../../../../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../../Utils/Alert";
import { NavBar } from "../../../NabBar/NavBar";
import { Fade } from "react-reveal";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="w-full gradient-form bg-gray-200 ">
      <div className="h-full bg-[url('/public/vessel.png')]">
        <NavBar />
        <div className="container py-0 px-6  mx-auto ">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 bg-white w-full max-w-sm mx-auto">
            <Fade left>
              <div className="md:p-6 md:mx-6">
                <div className="text-center">
                  <img className="mx-auto w-20 " src="logo512.png" alt="logo" />

                  <h4 className="text-xl font-semibold  pb-1 ">ETG</h4>
                </div>
                {error && <Alert message={error} />}{" "}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email{" "}
                    </label>{" "}
                    <input
                      type="email"
                      name="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Introduce tu email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2 py-2"
                      htmlFor="password"
                    >
                      Contraseña{" "}
                    </label>{" "}
                    <input
                      type="password"
                      name="password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="******"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center pt-1 mb-12 pb-1">
                    <button
                      className=" text-white group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 login"
                      type="submit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Iniciar sesion
                    </button>
                    <p>O</p>
                    <div className="mt-2 mb-2 grid space-y-4 ">
                      <button
                        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 "
                        type="submit"
                        onClick={handleLoginGoogle}
                      >
                        <div className="relative flex items-center space-x-4 justify-center">
                          <img
                            src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                            className="absolute left-0 w-5"
                            alt="google logo"
                          />
                          <span className="text-white  block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                            Entrar con Google
                          </span>
                        </div>
                      </button>
                    </div>
                    <a className="text-gray-500" href="/resetPassword">
                      ¿Has olvidado la contraseña?
                    </a>
                  </div>
                  <div className="flex items-center justify-between pb-3">
                    <p className="mb-0 mr-2">¿Aun no tienes cuenta?</p>
                    <a
                      href="/registro"
                      className="text-white group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 login"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Registrarse
                    </a>
                  </div>
                </form>
              </div>
            </Fade>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
