import React, { useContext } from "react";
import login from "../assets/login.jpg";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "@/Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const { setUser, createUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const users = result.user;
      console.log(users);
      setUser(users);

      const userData = {
        name: data.fname +' '+ data.lname,
        email: data.email,
        photo: data.photo,
        role: "student",
      };

      axios.post("https://career-nest-server-one.vercel.app/users", userData).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signed up successfully",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/dashboard");
        }
      });
    });
  };

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const users = result.user;
      console.log(users);
      setUser(users);

      const userData = {
        name: users.displayName,
        email: users.email,
        photo: users.photoURL,
        role: "student",
      };

      axios.post("https://career-nest-server-one.vercel.app/users", userData).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signed up with google successfully",
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/dashboard");
        }
      });
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4 justify-between font-poppins">
      <div className="">
        <img src={login} alt="" className="h-full" />
      </div>
      <div className="p-8">
        <h1 className="mt-2 font-semibold text-3xl">Sign up for an account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="text-left p-3">
          {/* fname field  */}
          {/* register your input into the hook by invoking the "register" function */}
          <Label htmlFor="fname">First Name</Label>
          <Input
            defaultValue=""
            {...register("fname", { required: true })}
            type="text"
            id="fname"
            placeholder="First Name"
            className="my-3"
          />
          {errors.fname && (
            <p className="text-red-700 text-sm">First Name is required</p>
          )}

          {/* lname field  */}
          {/* register your input into the hook by invoking the "register" function */}
          <Label htmlFor="lname">Last Name</Label>
          <Input
            defaultValue=""
            {...register("lname", { required: true })}
            type="text"
            id="lname"
            placeholder="Last Name"
            className="my-3"
          />
          {errors.lname && (
            <p className="text-red-700 text-sm">Last Name is required</p>
          )}

          {/* email field  */}
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
          {errors.email && (
            <p className="text-red-700 text-sm">Email is required</p>
          )}

          {/* password field  */}
          {/* include validation with required or other standard HTML validation rules */}
          <Label htmlFor="password">Password</Label>
          <Input
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&_])[A-Za-z\d@$!%*?#&_]{6,}$/,
                message:
                  "Password must be at least 6 characters, include uppercase, lowercase, number and special character",
              },
            })}
            type="text"
            placeholder="Password"
            className="my-3"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <p className="text-red-700 text-sm">{errors.password.message}</p>
          )}

          {/* photo url field  */}
          {/* register your input into the hook by invoking the "register" function */}
          <Label htmlFor="photo">PhotoUrl</Label>
          <Input
            defaultValue=""
            {...register("photo")}
            type="text"
            id="photo"
            placeholder="Your Photo"
            className="my-3"
          />
          {/* {errors.photo && (
            <p className="text-red-700 text-sm">First Name is required</p>
          )} */}

          <input
            type="submit"
            className="bg-sky-400 font-bold my-2 rounded-md w-full px-3 py-2 cursor-pointer"
            value="Register"
          />

          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-sky-500 font-semibold">
              Login
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
    </div>
  );
};

export default Register;
