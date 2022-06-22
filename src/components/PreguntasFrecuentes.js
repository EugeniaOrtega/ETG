import { Fade } from "react-reveal";
import { Home } from "./Home";

export function Questions() {
  return (
    <div className="w-full bg-[url('/public/vessel.png')]">
      <Home />{" "}
      <div className="mt-12 bg-blue-200 w-full max-w-screen-sm mx-auto">
        <div className="md:grid md:grid-cols-1 bg-blue-200 w-full max-w-screen-lg mx-auto ">
          <Fade right>
            <div class="w-auto max-w-screen-lg px-10 py-8 mx-auto bg-blue-200 rounded-lg shadow-xl">
              <h1 class="text-xl mb-2 text-center">Preguntas Frecuentes</h1>

              <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
                <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">
                  ¿Que es ETG?
                </summary>
                <Fade bottom>
                  <p class="px-4 py-3 ">
                    ETG se ha convertido en un jugador global con una cartera
                    diversa de experiencia en múltiples industrias, que abarca
                    insumos agrícolas, logística, comercialización y
                    procesamiento, optimización de la cadena de suministro,
                    transformación digital y energía.
                  </p>
                </Fade>
              </details>

              <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
                <summary class="w-full bg-white text-dark flex justify-between px-4 py-3 after:content-['+']">
                  ¿Que hacemos en ETG?
                </summary>
                <Fade left>
                  <p class="px-4 py-3">
                    ETG visualiza un mundo donde transcendemos las
                    limitaciones,mientras que a su vez impactamos positivamente
                    en la vida de todos nuestros socios
                  </p>
                </Fade>
              </details>

              <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
                <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">
                  ¿Cual es el objetivo de ETG?
                </summary>
                <Fade right>
                  <p class="px-4 py-3">
                    ¡El espiritu emprendedor está vivo en ETG!{" "}
                  </p>
                  <p class="px-4 py-3">
                    Nos adaptamos y crecemos responsablemente como una empresa
                    diversificada,creadno un futuro sostenible para todos
                    nuestros grupos de interés.
                  </p>
                </Fade>
              </details>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
