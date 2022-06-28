import React from "react";
import { Fade } from "react-reveal";

import {
  UsersIcon,
  PencilAltIcon,
  UserGroupIcon,
  CurrencyEuroIcon,
} from "@heroicons/react/outline";
import { useAuth } from "../../context/authContext";
import { Home } from "../NabBar/Home";
import { NavBar } from "../NabBar/NavBar";

export function Sostenibilidad() {
  const { user } = useAuth();
  console.log(user);
  const features = [
    {
      name: "Empleados",
      description:
        "Los empleados de ETG, su gerencia y partes afiliadas se dedican a trabajar para un ambiente saludableLos empleados de ETG, su gerencia y partes afiliadas se dedican a trabajar para un ambiente saludable.",
      icon: UsersIcon,
    },
    {
      name: "Salarios",
      description:
        "Nuestros programas de Responsabilidad Social Corporativa han sido diseñados para abordar las necesidades.",
      icon: CurrencyEuroIcon,
    },
    {
      name: "Contratos",
      description:
        "Contrato de viaje firmado con precio cerrado sin sorpresas.",
      icon: PencilAltIcon,
    },
    {
      name: "Equipos",
      description:
        "Posibilidad de uniros a otro grupo de universitarios que viaje a vuestro mismo destino para conseguir mayores ventajas (open groups).",
      icon: UserGroupIcon,
    },
  ];
  return (
    <div className="w-full bg-[url('/public/vessel.png')]">
      {user ? <Home /> : <NavBar />}
      <div className="py-12 bg-blue-200 w-full max-w-screen-xl  mx-auto">
        <Fade top>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="lg:text-center ">
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
                SOSTENIBILIDAD Y RESPONSABILIDAD SOCIAL CORPORATIVA
              </h1>
            </div>

            <div className="mt-10">
              <div className="md:grid md:grid-cols-2">
                <Fade left>
                  <div className="w-2/3 mb-20">
                    <p className="font-light text-lg text-left text-black">
                      Inmediatas y futuras de nuestras comunidades. Cada región
                      en cada país tiene sus propios obstáculos únicos. Nuestro
                      equipo de CSR analiza estos requisitos y, con la ayuda de
                      los directores de país y su personal de apoyo, se
                      implementa una solución de CSR a medida. Sin embargo, la
                      distribución de alimentos se mantiene al frente de
                      nuestros objetivos.
                    </p>
                  </div>
                </Fade>
                <Fade right>
                  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt>
                          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <feature.icon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                            {feature.name}
                          </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                          {feature.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
