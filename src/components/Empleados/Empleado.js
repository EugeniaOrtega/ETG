import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { onValue, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase.config";
import { EditEmployeModal } from "../Modals/Empleados/EditarEmpleadoModal";
import { DeleteEmployeModal } from "../Modals/Empleados/EliminarEmpleadoModal";
import { AddEmployeModal } from "../Modals/Empleados/CrearEmpleadoModal";
import { uid } from "uid";

export function Empleado() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [tipo, settipo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const [showAddEmployeModal, setShowAddEmployeModal] = useState(false);
  const [showEditEmployeModal, setShowEditEmployeModal] = useState(false);
  const [showDeleteEmployeModal, setShowDeleteEmployeModal] = useState(false);
  const handleOnCloseAdd = () => setShowAddEmployeModal(false);
  const handleOnCloseEdit = () => setShowEditEmployeModal(false);
  const handleOnCloseDelete = () => setShowDeleteEmployeModal(false);

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleChangeApellido = (e) => {
    setApellido(e.target.value);
  };
  const handleChangeCargo = (e) => {
    setCargo(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeDni = (e) => {
    setDni(e.target.value);
  };
  const handleChangetipo = (e) => {
    settipo(e.target.value);
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      nombre,
      apellido,
      cargo,
      email,
      dni,
      tipo,
      uuid,
    });

    setNombre("");
    setApellido("");
    setCargo("");
    setEmail("");
    setDni("");
    settipo("");
  };

  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempUuid(todo.uuid);
    setNombre(todo.nombre);
    setApellido(todo.apellido);
    setCargo(todo.cargo);
    setEmail(todo.email);
    setDni(todo.dni);
    settipo(todo.tipo);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      nombre,
      apellido,
      cargo,
      email,
      dni,
      tipo,
      uuid: tempUuid,
    });

    setNombre("");
    setApellido("");
    setCargo("");
    setEmail("");
    setDni("");
    settipo("");
    setIsEdit(false);
  };

  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };

  return (
    <div className="App">
      <button
        className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
        onClick={() => setShowAddEmployeModal(true)}
      >
        Crear empleado
      </button>
      <button
        className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
        onClick={() => setShowEditEmployeModal(true)}
      >
        Editar empleado
      </button>
      <button
        className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
        onClick={() => setShowDeleteEmployeModal(true)}
      >
        Elimnar empleado
      </button>

      <AddEmployeModal
        onClose={handleOnCloseAdd}
        employe={todos}
        visible={showAddEmployeModal}
      />
      <EditEmployeModal
        onClose={handleOnCloseEdit}
        visible={showEditEmployeModal}
      />
      <DeleteEmployeModal
        onClose={handleOnCloseDelete}
        visible={showDeleteEmployeModal}
      />

      <button onClick={writeToDatabase}>Crear empleado</button>
      <input type="text" value={nombre} onChange={handleChangeNombre} />
      <br></br>
      <br></br>
      <input type="text" value={apellido} onChange={handleChangeApellido} />
      <br></br>
      <br></br>
      <input type="text" value={cargo} onChange={handleChangeCargo} />
      <br></br>
      <br></br>
      <input type="text" value={email} onChange={handleChangeEmail} />
      <br></br>
      <br></br>
      <input type="text" value={dni} onChange={handleChangeDni} />
      <br></br>
      <br></br>
      <input type="text" value={tipo} onChange={handleChangetipo} />

      {isEdit ? (
        <>
          <button onClick={handleSubmitChange}>Actualizar empleado</button>
          <button
            onClick={() => {
              setIsEdit(false);

              setNombre("");
              setApellido("");
              setCargo("");
              setEmail("");
              setDni("");
              settipo("");
            }}
          >
            X
          </button>
        </>
      ) : (
        <div>
          <button onClick={writeToDatabase}>Crear empleado</button>
        </div>
      )}
      <>
        {todos.length === 0 ? (
          <>No existen empleados</>
        ) : (
          <>
            {" "}
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
              {todos.map((employe) => (
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
                          onClick={() => handleUpdate(employe)}
                        >
                          <PencilAltIcon className="w-5" />
                        </button>
                        <button
                          className="rounded-full w-10 h-10 drop-shadow-3xl bg-red-500 text-white hover:bg-white hover:text-red-500 flex employes-center justify-center mx-auto"
                          onClick={() => handleDelete(employe)}
                        >
                          <TrashIcon className="w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </>
        )}
      </>
    </div>
  );
}
