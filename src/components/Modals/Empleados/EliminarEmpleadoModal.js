export function DeleteEmployeModal({ visible, onClose }) {
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

        <div class="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900">
          <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  className="object-cover w-12 h-12  rounded-full "
                  src="close.png"
                  onClick={handleClose}
                  alt=""
                />
                <div class="flex flex-col ">
                  <div class="font-medium leading-none">
                    ¿Estas seguro de eliminar el empleado ?
                  </div>
                  <p class="text-sm text-gray-600 leading-none my-4">
                    Se eliminaran los datos del empleado
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-3">
              <button class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                Cancelar
              </button>

              <button class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
