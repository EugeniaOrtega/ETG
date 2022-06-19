import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { NavBar } from "./NavBar";
import { Fade } from "react-reveal";
export function Registro() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
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
      await signup(user.email, user.password);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <section class="w-full gradient-form bg-gray-200 md:h-screen">
      <div className="w-full bg-[url('/public/vessel.png')]">
        <NavBar />
        <div class="container py-0 px-6 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <Fade top>
              <div class="xl:w-10/12">
                <div class="block bg-white shadow-lg rounded-lg">
                  <div class="lg:flex lg:flex-wrap g-0">
                    <div class="lg:w-6/12 px-4 md:px-0">
                      <div class="md:p-12 md:mx-6">
                        <div class="text-center">
                          <img
                            class="mx-auto w-48 animate-bounce"
                            src="logo512.png"
                            alt="logo"
                          />
                          <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                            ETG
                          </h4>
                        </div>
                        {error && <Alert message={error} />}{" "}
                        <form onSubmit={handleSubmit}>
                          <div class="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="email"
                            >
                              Email{" "}
                            </label>{" "}
                            <input
                              type="email"
                              name="email"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="Introduce tu email"
                              onChange={handleChange}
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2 py-2"
                              htmlFor="password"
                            >
                              Contraseña{" "}
                            </label>{" "}
                            <input
                              type="password"
                              name="password"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="******"
                              onChange={handleChange}
                            />
                          </div>
                          <div class="text-center pt-1 mb-12 pb-1">
                            <button
                              class=" text-white group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 login"
                              type="submit"
                              href="/login2"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Registrarse
                            </button>
                          </div>
                          <div class="flex items-center justify-between pb-1 pt-1">
                            <p class="mb-0 mr-2">¿Ya tienes cuenta?</p>
                            <a
                              href="/login"
                              class="text-white group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 login"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Iniciar Sesion
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none login2">
                      <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                        <h4 class="text-xl font-semibold mb-6">¿QUE ES ETG?</h4>
                        <p class="text-sm">
                          ETG se ha convertido en un jugador global con una
                          cartera diversa de experiencia en múltiples
                          industrias, que abarca insumos agrícolas, logística,
                          comercialización y procesamiento, optimización de la
                          cadena de suministro, transformación digital y
                          energía. Nuestra pasión radica en la mejora de las
                          comunidades agrícolas; un compromiso sin trabas desde
                          su creación. Nuestros promotores identificaron tres
                          desafíos que enfrentaban las cadenas de suministro en
                          África y crearon un modelo comercial globalizado en
                          torno a soluciones que abordan estos obstáculos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}
