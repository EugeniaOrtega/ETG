import { getDatabase, ref, set } from "firebase/database";

export function Prueba() {
  const db = getDatabase();
  set(ref(db, "users/"), {
    username: "jhh",
    email: "emailnnn",
    profile_picture: "kbp",
  });
  return (
    <div className="bg-blue-200 w-full">
      <form className="p-6 flex flex-col justify-center" onSubmit={Prueba}>
        <div className="lg:text-center">
          <h1 className=" text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Formulario De Contacto
          </h1>
        </div>
        <div className="flex flex-col">
          <label className="hidden">Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Introduce tu nombre"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="hidden">Apellido</label>
          <input
            type="text"
            name="apellido"
            placeholder="Introduce tu apellido"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label className="hidden">Cargo</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Introduce tu email"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="hidden">Email</label>
          <input
            type="text"
            name="asunto"
            placeholder="Introduce el asunto del mensaje"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label className="hidden">Dni</label>
          <input
            type="textarea"
            name="mensaje"
            id="tel"
            placeholder="Mensaje"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="hidden">Tipo</label>
          <input
            type="textarea"
            name="mensaje"
            id="tel"
            placeholder="Mensaje"
            className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300 mx-auto"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
