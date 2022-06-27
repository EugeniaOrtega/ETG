import { getDatabase, push, ref } from "firebase/database";
import { useState } from "react";

export function AñadirEmpleado() {
  const [employe, setEmploye] = useState({
    nombre: "",
    apellido: "",
    cargo: "",
    email: "",
    dni: "",
    tipo: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    setEmploye({
      ...employe,
      [name]: value,
    });
    console.log(employe);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const db = getDatabase();
      await push(ref(db, "Empleados/"), {
        nombre: employe.nombre,
        apellido: employe.apellido,
        cargo: employe.cargo,
        email: employe.email,
        dni: employe.dni,
        tipo: employe.tipo,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="nombre"
          onChange={handleChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="apellido"
          onChange={handleChange}
          name="apellido"
        />
        <input
          type="text"
          placeholder="cargo"
          onChange={handleChange}
          name="cargo"
        />
        <input
          type="text"
          placeholder="email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="dni"
          onChange={handleChange}
          name="dni"
        />

        <select
          className="bg-gray-200 w-3/4 rounded-lg pl-3 outline-none "
          onChange={handleChange}
          name="tipo"
          value="tipo"
        >
          <option value="admin">Admin</option>
          <option value="empleado">Empleado</option>
        </select>
        <br></br>
        <button className="btn btn-primary">Guardar2</button>
      </div>
    </form>
  );
}
