import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import React, { Component } from "react";

class Employees extends Component {
  constructor(props) {
    super(props);
    this.empleadoId = props.empleadoId;
    this.nombre = props.nombre;
    this.apellido = props.apellido;
    this.email = props.email;
    this.cargo = props.cargo;
    this.tipo = props.tipo;
    this.dni = props.dni;
  }
  handleRemove(id) {}

  render() {
    return (
      <tbody className="block md:table-row-group">
        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold "></span>
            {this.nombre}
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold"></span>
            {this.apellido}
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold"></span>
            {this.email}
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold"></span>
            {this.cargo}
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold"></span>
            {this.dni}
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <select
              defaultValue={this.tipo}
              classNameName="bg-gray-200 w-3/4 rounded-lg pl-3 outline-none"
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
                classNameName="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex items-center justify-center mx-auto"
                onClick={""}
              >
                <PencilAltIcon classNameName="w-5" />
              </button>
              <button
                className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex items-center justify-center mx-auto"
                onClick={() => this.handleRemove(this.empleadoId)}
              >
                <TrashIcon className="w-5" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Employees;
