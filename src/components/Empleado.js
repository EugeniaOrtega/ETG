import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Carta } from "./CartaEmpleados";
import { Home } from "./Home";
import { AñadirEmpleado } from "./CrearEmpleado";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
export function Empleado({ empleado }) {
  let empleados = [];

  const db = getDatabase();

  let data;
  const starCountRef = ref(db, "Empleados/");
  onValue(starCountRef, (snapshot) => {
    data = snapshot.val();

    console.log(data);
  });
  for (let i in data) {
    empleados.push(data[i]);
    console.log(empleados);
  }
  return (
    <div className="w-full bg-[url('/public/vessel.png')]">
      <div className="w-full bg-[url('/public/vessel.png')]">
        <Home />

        {empleados.map((item, index) => {
          console.log(item);
          return (
            <>
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
                      {item.nombre}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.apellido}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.email}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.cargo}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <span className="inline-block w-1/3 md:hidden font-bold"></span>
                      {item.dni}
                    </td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <select
                        defaultValue={item.tipo}
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
                          className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex items-center justify-center mx-auto"
                          onClick={""}
                        >
                          <PencilAltIcon className="w-5" />
                        </button>
                        <button className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex items-center justify-center mx-auto">
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
      </div>
      <AñadirEmpleado />
    </div>
  );
}
