import React from "react";
import { Fade } from "react-reveal";
import { useAuth } from "../../context/authContext";
import { NavBar } from "../NabBar/NavBar";
import { Home } from "../NabBar/Home";
export function About() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="w-full bg-[url('/public/vessel.png')]">
      {user ? <Home /> : <NavBar />}

      <div className="py-12 bg-blue-200 w-full max-w-screen-lg mt-10 mx-auto ">
        <Fade bottom>
          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="lg:text-center">
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                ¿QUE ES ETG?
              </h1>
            </div>

            <div className="mt-10">
              <div className="md:grid md:grid-cols-2">
                <Fade left>
                  <div className="w-full flex flex-col items-start">
                    <p className=" font-light text-black font-semibold text-left text-2xl">
                      ACERCA ETG S.L
                    </p>
                    <p className="font-light text-black  text-left mt-5 text-xl">
                      ETG se ha convertido en un jugador global con una cartera
                      diversa de experiencia en múltiples industrias, que abarca
                      insumos agrícolas, logística, comercialización y
                      procesamiento, optimización de la cadena de suministro y
                      energía.
                    </p>
                    <p className="font-light text-black  text-left mt-5 text-xl">
                      Nuestra pasión radica en la mejora de las comunidades
                      agrícolas; un compromiso sin trabas desde su creación.
                      Nuestros promotores identificaron tres desafíos que
                      enfrentaban las cadenas de suministro en África y crearon
                      un modelo comercial globalizado en torno a soluciones que
                      abordan estos obstáculos.
                    </p>
                  </div>
                </Fade>
                <Fade right>
                  <img
                    alt="ship"
                    src="logo512.png"
                    className="w-60 h-auto mt-10 ml-20 "
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
