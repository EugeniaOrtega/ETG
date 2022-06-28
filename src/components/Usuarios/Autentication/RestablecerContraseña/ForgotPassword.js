import { useState } from "react";
import { useAuth } from "../../../../context/authContext";
import { NavBar } from "../../../NabBar/NavBar";
import { Alert } from "../../../Utils/Alert";
import { Fade } from "react-reveal";
export function ResetPassword() {
  const [user, setUser] = useState({
    email: "",
  });
  const [error, setError] = useState();
  const { resetPassword } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    //console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(user.email);
      setError("Check your email to reset your password");
    } catch (error) {
      //console.log(error);
      setError(error.message);
    }
  };

  return (
    <section className="w-full gradient-form bg-gray-200 md:h-screen">
      <div className="h-screen bg-[url('/public/vessel.png')]">
        <NavBar />
        <div className="container py-3   ml-auto mr-auto ">
          <div className="flex justify-center flex-wrap h-full g-6 text-gray-800 bg-white w-full max-w-sm mx-auto">
            <div className="block bg-white shadow-lg rounded-lg ">
              {" "}
              <Fade bottom>
                <div className="w-full px-4 md:px-0">
                  <div className="md:p-12 md:mx-6 ">
                    <div className="text-center ">
                      <img className="w-48 " src="logo512.png" alt="logo" />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                        RESTABLECER CONTRASEÑA
                      </h4>{" "}
                      {error && <Alert message={error} />}{" "}
                    </div>

                    <form onSubmit={handleResetPassword}>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email{" "}
                        </label>{" "}
                        <input
                          type="email"
                          name="email"
                          className="shadow appearance-none border rounded w-full py-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Introduce tu email"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className=" text-white group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 login"
                          type="submit"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Restablecer contraseña
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Fade>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
}
