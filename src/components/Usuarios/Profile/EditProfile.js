import { useAuth } from "../../../context/authContext";
import { updateProfile, updateEmail } from "firebase/auth";
import { Home } from "../../NabBar/Home";
import { useState } from "react";
import { storage } from "../../../config/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Fade } from "react-reveal";
export function EditProfile() {
  const { user } = useAuth();
  //console.log(user);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  //console.log(image);

  const handleSubmit = (e) => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "No se ha podido actualizar la foto");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  updateProfile(user, {
    displayName: name,
    photoURL: url,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  updateEmail(user, email)
    .then(() => {
      // Email updated
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  return (
    <div className="w-full bg-[url('/public/vessel.png')]">
      <Home />{" "}
      <div className="mx-auto mt-4 py-12 ">
        <div className="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg fondo">
          <Fade top>
            <div className="h-40 bg-gradient-to-br from-blue-400 via-indigo-500 fondo">
              <div className="flex justify-center">
                <span className="mt-5 text-xl font-extrabold text-white">
                  {user.displayName || user.email}
                </span>
              </div>
              <div className="w-full py-2 mx-auto flex justify-center">
                <img
                  src={user.photoURL}
                  className="rounded-full w-32"
                  alt="Avatar"
                  onClick={handleImageChange}
                />
              </div>
              <div className="w-full mx-auto flex justify-center ">
                <input
                  type="file"
                  id="customFile"
                  name="file"
                  hidden=""
                  src={user.photoURL}
                  className=""
                  onChange={handleImageChange}
                />
                <input
                  type="file"
                  id="file-upload"
                  name="file"
                  class="hidden"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <Fade left>
              <div className="px-6 py-8">
                <div className="flex justify-center mt-10 mb-4 text-xl font-medium">
                  Datos personales
                </div>
                <div className="flex my-1 ml-10 text-black mr-10">
                  <img
                    className="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                    src="account.png"
                    alt=""
                  />
                  <span className="mx-5 py-4">
                    <input
                      id="username"
                      className="border-1  rounded-r px-4 py-2 w-full"
                      type="text"
                      placeholder="Introduce el nombre nuevo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </span>
                </div>

                <div className="flex my-1 ml-10 text-black mr-10">
                  <img
                    className="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                    src="email.png"
                    alt=""
                  />
                  <span className="mx-5 py-4">
                    <input
                      id="email"
                      className="border-1  rounded-r px-4 py-2 w-full"
                      type="email"
                      placeholder="Introduce el email nuevo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </span>
                </div>

                <div className="flex my-1 mt-2 ml-32 ">
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                    onClick={updateProfile && handleSubmit}
                  >
                    Actualizar
                  </button>
                </div>
              </div>
            </Fade>
          </Fade>
        </div>

        <form
          action="#"
          class="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner"
        >
          <input type="file" id="file-upload" class="hidden" />
          <label
            for="file-upload"
            class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
          >
            <svg
              class="z-10 w-8 h-8 text-indigo-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
            </svg>
          </label>
        </form>
      </div>
    </div>
  );
}
