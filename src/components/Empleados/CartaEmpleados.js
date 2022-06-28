import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { getDatabase, set, ref, onValue } from "firebase/database";
import { db } from "../../config/firebase.config";
import React, { useEffect } from "react";
import { useState } from "react";

export function Carta() {
  const [employe, setEmploye] = useState("");
  const [lista, setlista] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setlista([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((employe) => {
          setlista((listaVieja) => [...listaVieja, employe]);
          console.log(lista);
        });
      }
    });
  }, []);
  console.log(employe);
  return (
    <>
      {lista.map((employe) => {
        console.log(employe);
        return (
          <>
            <h1>{employe.nombre}</h1>
            <table className="min-w-full border-collapse block md:table">
              <thead className="block md:table-header-group">
                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Nombre
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Apellido
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Email
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Cargo
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Dni
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Tipo
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                    Acciones
                  </th>
                </tr>
              </thead>{" "}
              <tbody className="block md:table-row-group">
                <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold "></span>
                    {employe.nombre}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold"></span>
                    {employe.apellido}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold"></span>
                    {employe.email}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold"></span>
                    {employe.cargo}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold"></span>
                    {employe.dni}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <select
                      defaultValue={employe.tipo}
                      className="bg-gray-200 w-3/4 rounded-lg pl-3 outline-none"
                    >
                      <option value="admin">Admin</option>
                      <option value="empleado">Empleado</option>
                    </select>
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Acciones
                    </span>
                    <div className=" flex justify-center">
                      <button
                        className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex employes-center justify-center mx-auto"
                        onClick={""}
                      >
                        <PencilAltIcon className="w-5" />
                      </button>
                      <button
                        className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex employes-center justify-center mx-auto"
                        onClick={() => {
                          console.log(employe);
                          const db = getDatabase();

                          set(ref(db, "Empleados/" + `${employe.dni}`), {
                            nombre: null,
                            apellido: null,
                            cargo: null,
                            email: null,
                            dni: null,
                            tipo: null,
                          }).then(() => {
                            console.log(lista);
                          });
                        }}
                      >
                        <TrashIcon className="w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })}
    </>
  );
}
