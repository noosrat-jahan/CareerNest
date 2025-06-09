import React, { useContext } from "react";
import login from "../assets/login.jpg";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "@/Provider/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { setUser, loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    loginUser(data.email, data.password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        setUser(users);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Signed in successfully",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log("Login Error:", err.message);
        if (err.message === "Firebase: Error (auth/invalid-credential).") {
          toast(
            <p className="text-red-600 font-bold">
              {err.message.slice(22, 40).toUpperCase()}
            </p>
          );
        }
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const users = result.user;
      console.log(users);
      setUser(users);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Signed in with google is successful",
        showConfirmButton: false,
        timer: 3000,
      });
      navigate("/dashboard");
    });
  };
  return (
    <div className="grid grid-cols-2 gap-4 justify-between font-poppins">
      <div className="">
        <img src={login} alt="" className="" />
      </div>
      <div className="p-8">
        <h1 className="mt-5 font-semibold text-3xl">Login to your account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="text-left p-3">
          {/* register your input into the hook by invoking the "register" function */}
          <Label htmlFor="email">Email</Label>
          <Input
            defaultValue=""
            {...register("email", { required: true })}
            type="email"
            id="email"
            placeholder="Email"
            className="my-3"
          />
          {errors.email && <span>Email is required</span>}
          {/* include validation with required or other standard HTML validation rules */}
          <Label htmlFor="password">Password</Label>
          <Input
            {...register("password", { required: true })}
            type="text"
            placeholder="Password"
            className="my-3"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>Password is required</span>}

          <input
            type="submit"
            className="bg-sky-400 font-bold my-2 rounded-md w-full px-3 py-2"
            value="Sign in"
          />

          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-sky-500 font-semibold">
              Register
            </Link>
          </p>

          <div className="divider">OR</div>

          <button
            onClick={handleGoogleLogin}
            className="btn border-t-cyan-50 text-base w-full flex items-center gap-5"
          >
            <FcGoogle />
            Continue With Google
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
