import { Component } from "react";
import { Home } from "../Home";
import Employees from "./Employees";
import AddEmploye from "./AddEmploye";
import { getDatabase, ref, onValue } from "firebase/database";
class Employe extends Component {
  constructor() {
    super();

    this.state = {
      empleados: [],
    };

    this.addEmploye = this.addEmploye.bind(this);
    let empleado = [];
    let data;
    const db = getDatabase();
    const starCountRef = ref(db, "Empleados/");
    onValue(starCountRef, (snapshot) => {
      data = snapshot.val();

      console.log(data);
    });
    for (let i in data) {
      empleado.push(data[i]);
    }
    console.log(empleado);
  }

  removeEmploye() {}
  addEmploye({ empleado }) {
    const { empleados } = this.state;
    /*empleados.push({
      empleadoId: empleados.length + 1,
      nombre: empleado.nombre,
      apellido: empleado.apellido,
      cargo: empleado.cargo,
      dni: empleado.dni,
      email: empleado.email,
      tipo: empleado.tipo,
    });*/
    this.setState({
      empleados,
    });
  }
  render() {
    return (
      <div className="w-full bg-[url('/public/vessel.png')]">
        <Home />
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
          </thead>

          {this.empleado.map((empleado) => {
            return (
              <Employees
                empleadoId={empleado.empleadoId}
                nombre={empleado.nombre}
                apellido={empleado.apellido}
                email={empleado.email}
                cargo={empleado.cargo}
                dni={empleado.dni}
                tipo={empleado.tipo}
                key={empleado.empleadoId}
              />
            );
          })}
        </table>

        <div>
          <AddEmploye addEmploye={this.addEmploye} />
        </div>
      </div>
    );
  }
}
export default Employe;
