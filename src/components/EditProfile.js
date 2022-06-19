import { useAuth } from "../context/authContext";
import { updateProfile, updateEmail } from "firebase/auth";
import { Home } from "./Home";
import { useState } from "react";
import { storage } from "../config/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Fade } from "react-reveal";
export function EditProfile() {
  const { user } = useAuth();
  console.log(user);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  console.log(image);

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
      <div class="max-w-sm pb-5 mx-auto mt-4 overflow-hidden rounded-lg shadow-lg fondo">
        <Fade top>
          <div class="h-40 bg-gradient-to-br from-blue-400 via-indigo-500 fondo">
            <div class="flex justify-center">
              <span class="mt-10 text-xl font-extrabold text-white">
                {user.displayName || user.email}
              </span>
            </div>
            <div class="w-full p-8 mx-2 flex justify-center">
              <img
                src={user.photoURL}
                class="rounded-full w-32"
                alt="Avatar"
                onClick={handleImageChange}
              />
            </div>
            <div class="w-full  mx-2 flex justify-center">
              <input
                type="file"
                id="customFile"
                name="file"
                hidden=""
                src={user.photoURL}
                className=""
                onChange={handleImageChange}
              ></input>
            </div>
          </div>
          <Fade left>
            <div class="px-6 py-4">
              <div class="flex justify-center mt-10 mb-4 text-xl font-medium">
                Datos personales
              </div>
              <div class="flex my-1 ml-10 text-black mr-10">
                <img
                  class="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                  src="account.png"
                  alt=""
                />
                <span className="mx-5 py-4">
                  <input
                    id="username"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    placeholder="Introduce el nombre nuevo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </span>
              </div>

              <div class="flex my-1 ml-10 text-black mr-10">
                <img
                  class="object-cover w-8 h-8 mt-4 border-4 border-blue-600 rounded-full"
                  src="email.png"
                  alt=""
                />
                <span className="mx-5 py-4">
                  <input
                    id="email"
                    class="border-1  rounded-r px-4 py-2 w-full"
                    type="email"
                    placeholder="Introduce el email nuevo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
              </div>

              <div class="flex my-1 mt-2 ml-32 ">
                <button
                  type="button"
                  class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  onClick={updateProfile && handleSubmit}
                >
                  Actualizar
                </button>
              </div>
            </div>
          </Fade>
        </Fade>
      </div>
    </div>
  );
}
