import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Signin = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSignin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Log in Your Account Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        //update Last Login Data

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;

        const loginInfo = { email, lastSignInTime };
        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type":"application/json"
          },
          body:JSON.stringify(loginInfo)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("update data info", data);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Log In</button>
            </div>
            <div className="form-control mt-2">
              <h2>
                Don't Have An Account ?{" "}
                <span className="text-red-500">
                  {" "}
                  <Link to={"/signup"}> Sign Up</Link>
                </span>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
