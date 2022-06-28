import { MailIcon } from "@heroicons/react/outline";
import emailjs from "emailjs-com";
import { Fade } from "react-reveal";
import { useAuth } from "../../context/authContext";
import { Home } from "../NabBar/Home";
import { NavBar } from "../NabBar/NavBar";

export function Formulario({ setAlertContent, setShowAlert }) {
  const { user } = useAuth();
  //console.log(user);
  const REACT_APP_EMAILJS_SERVICE_ID = "service_8szdt6h";
  const REACT_APP_EMAILJS_TEMPLATE_ID = "template_ohi70d3";
  const REACT_APP_EMAILJS_USER_ID = "RDmcnsefOrJLCvOsG";

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    alert("El correo se ha enviado correctamente");
  }

  return (
    <div className="w-full bg-[url('/public/vessel.png')]">
      {user ? <Home /> : <NavBar />}
      <div className="py-12 bg-blue-200 w-full max-w-screen-xl mt-10 mx-auto">
        <Fade top>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="">
              <div className="md:grid md:grid-cols-3">
                <Fade left>
                  <div className="order-1 col-span-1 md:py-5 ">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9341419260245!2d-3.8050105847416904!3d40.43245717936327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41879da16e840d%3A0x49d86a64ab9d8a6a!2sExport%20Trading%20Group%20Commodities%20(ETG)%20-%20Spain!5e0!3m2!1ses!2ses!4v1655404393838!5m2!1ses!2ses"
                      title="map"
                      scrolling="no"
                      frameborder="0"
                      className="w-full h-full"
                    />
                  </div>
                </Fade>
                <Fade right>
                  <div className="order-3 md:order-2 col-span-full md:col-span-1 px-6  ">
                    <form
                      class="p-6 flex flex-col justify-center"
                      onSubmit={sendEmail}
                    >
                      <div className="lg:text-center">
                        <h1 className=" text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                          Formulario De Contacto
                        </h1>
                      </div>
                      <div className="flex flex-col">
                        <label className="hidden">Nombre</label>
                        <input
                          type="text"
                          name="nombre"
                          placeholder="Introduce tu nombre"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="hidden">Apellido</label>
                        <input
                          type="text"
                          name="apellido"
                          placeholder="Introduce tu apellido"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-2">
                        <label className="hidden">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Introduce tu email"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="hidden">Asunto</label>
                        <input
                          type="text"
                          name="asunto"
                          placeholder="Introduce el asunto del mensaje"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        />
                      </div>

                      <div class="flex flex-col mt-2">
                        <label className="hidden">Mensaje</label>
                        <input
                          type="textarea"
                          name="mensaje"
                          id="tel"
                          placeholder="Mensaje"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300 mx-auto"
                      >
                        Enviar
                      </button>
                    </form>
                  </div>
                </Fade>
                <Fade right>
                  <div className="order-2 md:order-3 col-span-full md:col-span-1 md:py-5 px-6 ">
                    <div className="mx-auto max-w-xl flex flex-col space-y-5">
                      {/* ::Title Contact Us */}
                      <h2 className="text-3xl font-oswald uppercase">
                        ¿Quieres saber mas acerca de nosotros?
                      </h2>
                      <h3 className="text-2xl font-oswald uppercase">
                        CONTACTANOS!
                      </h3>
                      {/* ::Text */}
                      <p className="text-sm text-gray-500">
                        Nuestro equipo de atencion al cliente te contestara en
                        la medida de lo posible,lo antes posible.
                      </p>
                      {/* ::Email contact */}
                      <a
                        href="#mail"
                        className="inline-flex items-center text-sm text-blue-400 font-semibold hover:text-blue-500"
                      >
                        <MailIcon className="mr-2 w-5 text-gray-400" />
                        atencionalclienteEtg@gmail.com
                      </a>
                      {/* ::Address */}
                      <p className="text-sm text-gray-500 leading-6">
                        Vía de las Dos Castillas, <br />
                        9C, <br /> 28224 Pozuelo de Alarcón, <br /> Madrid
                      </p>
                      {/* ::Socials */}
                      <div className="flex items-center">
                        {/* :FACEBOOK */}
                        <a
                          href="https://www.facebook.com/exporttrading"
                          target={"blank"}
                          className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125"
                          style={{ backgroundColor: "#4267B2" }}
                        >
                          {/* ::facebook svg */}
                          <svg
                            className="w-5 h-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z" />
                          </svg>
                        </a>
                        {/* :Instagram */}
                        <a
                          href="https://www.linkedin.com/company/export-trading-group"
                          target={"blank"}
                          className="m-1.5 w-8 h-8 inline-flex justify-center items-center shadow-sm rounded-full bg-[#4267B2] text-white filter hover:brightness-125"
                          style={{ backgroundColor: "#4267B2" }}
                        >
                          {/* ::facebook svg */}
                          <img
                            className=" w-8 h-8 "
                            src="linkedin.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
