import { Fade } from "react-reveal";
import { useAuth } from "../../context/authContext";
import { Home } from "../NabBar/Home";
import { NavBar } from "../NabBar/NavBar";

export function Questions() {
  const { user } = useAuth();
  //console.log(user);
  return (
    <div className="w-full bg-[url('/public/vessel.png')]">
      {user ? <Home /> : <NavBar />}
      <div className="py-12 bg-blue-200 w-full max-w-screen-sm  mx-auto">
        <Fade right>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl mb-2 text-center">Preguntas Frecuentes</h1>

            <details className="w-full bg-white border border-blue-500 cursor-pointer mb-3">
              <summary className="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">
                ¿Que es ETG?
              </summary>
              <Fade bottom>
                <p className="px-4 py-3 ">
                  ETG se ha convertido en un jugador global con una cartera
                  diversa de experiencia en múltiples industrias, que abarca
                  insumos agrícolas, logística, comercialización y
                  procesamiento, optimización de la cadena de suministro,
                  transformación digital y energía.
                </p>
              </Fade>
            </details>

            <details className="w-full bg-white border border-blue-500 cursor-pointer mb-3">
              <summary className="w-full bg-white text-dark flex justify-between px-4 py-3 after:content-['+']">
                ¿Que hacemos en ETG?
              </summary>
              <Fade left>
                <p className="px-4 py-3">
                  ETG visualiza un mundo donde transcendemos las
                  limitaciones,mientras que a su vez impactamos positivamente en
                  la vida de todos nuestros socios
                </p>
              </Fade>
            </details>

            <details className="w-full bg-white border border-blue-500 cursor-pointer mb-3">
              <summary className="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">
                ¿Cual es el objetivo de ETG?
              </summary>
              <Fade right>
                <p className="px-4 py-3">
                  ¡El espiritu emprendedor está vivo en ETG!{" "}
                </p>
                <p className="px-4 py-3">
                  Nos adaptamos y crecemos responsablemente como una empresa
                  diversificada,creadno un futuro sostenible para todos nuestros
                  grupos de interés.
                </p>
              </Fade>
            </details>
          </div>
        </Fade>
      </div>
    </div>
  );
}
