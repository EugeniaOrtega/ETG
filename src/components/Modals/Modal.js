import React from "react";

export default function AddEmployeModal({ visible, onClose }) {
  const handleClose = () => {
    onClose();
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-full max-w-5xl">
        <div className="mx-4 flex  justify-end ">
          <img
            className="object-cover w-12 h-12  rounded-full "
            src="close.png"
            onClick={handleClose}
            alt=""
          />
        </div>

        <div class="container mx-auto p-4 bg-white ">
          <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-6 ">
            <h1 class="text-lg font-bold flex justify-center my-4">
              Crear empleado
            </h1>
            <form class="flex flex-col px-4 mx-4 ">
              <input
                type="text"
                name="nombre"
                class="px-4 py-3 my-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Nombre"
              />
              <input
                type="text"
                name="apellido"
                class="px-4 py-3 my-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Apellido"
              />
              <input
                type="text"
                name="cargo"
                class="px-4 py-3 my-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="Cargo"
              />
              <input
                type="email"
                name="email"
                class="px-4 py-3 my-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="youremail@gmail.com"
              />
              <input
                type="text"
                name="dni"
                class="px-4 py-3 my-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                placeholder="123456789F"
              />
              <select
                className="bg-gray-200 w-full rounded-lg pl-3 outline-none my-3 "
                name="tipo"
              >
                <option value="admin">Admin</option>
                <option value="empleado">Empleado</option>
              </select>
              <button
                type="submit"
                class="my-3 px-4 py-3   rounded-md t text-white  bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
              >
                Crear
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
