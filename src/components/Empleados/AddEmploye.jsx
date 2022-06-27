import React, { Component } from "react";
import { getDatabase, push, ref } from "firebase/database";
class AddEmploye extends Component {
  constructor() {
    super();
    this.addEmploye = this.addEmploye.bind(this);
  }
  addEmploye() {
    const empleado = {
      nombre: this.inputNombre.value,
      apellido: this.inputApellido.value,
      cargo: this.inputCargo.value,
      email: this.inputEmail.value,
      dni: this.inputDni.value,
      tipo: this.selectNuevo.value,
    };
    const db = getDatabase();
    push(ref(db, "Empleados/"), {
      nombre: this.inputNombre.value,
      apellido: this.inputApellido.value,
      cargo: this.inputCargo.value,
      email: this.inputEmail.value,
      dni: this.inputDni.value,
      tipo: this.selectNuevo.value,
    });
    this.props.addEmploye({ empleado });
    this.inputNombre.value = "";
    this.inputApellido.value = "";
    this.inputCargo.value = "";
    this.inputEmail.value = "";
    this.inputDni.value = "";
    this.selectNuevo.value = "";
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="nombre"
          ref={(input_nombre) => {
            this.inputNombre = input_nombre;
          }}
        />
        <input
          type="text"
          placeholder="apellido"
          ref={(input_apellido) => {
            this.inputApellido = input_apellido;
          }}
        />
        <input
          type="text"
          placeholder="cargo"
          ref={(input_cargo) => {
            this.inputCargo = input_cargo;
          }}
        />
        <input
          type="text"
          placeholder="email"
          ref={(input_email) => {
            this.inputEmail = input_email;
          }}
        />
        <input
          type="text"
          placeholder="dni"
          ref={(input_dni) => {
            this.inputDni = input_dni;
          }}
        />

        <select
          defaultValue={this.tipo}
          className="bg-gray-200 w-3/4 rounded-lg pl-3 outline-none"
          ref={(select) => {
            this.selectNuevo = select;
          }}
        >
          <option value="admin">Admin</option>
          <option value="empleado">Empleado</option>
        </select>
        <button onClick={this.addEmploye}>Guardar</button>
        <br></br>
        <button
          className="btn btn-primary"
          onClick={() => {
            const db = getDatabase();
            push(ref(db, "Empleados/"), {
              nombre: this.inputNombre.value,
              apellido: this.inputApellido.value,
              cargo: this.inputCargo.value,
              email: this.inputEmail.value,
              dni: this.inputDni.value,
              tipo: this.selectNuevo.value,
            });
          }}
        >
          Guardar2
        </button>
      </div>
    );
  }
}
export default AddEmploye;
