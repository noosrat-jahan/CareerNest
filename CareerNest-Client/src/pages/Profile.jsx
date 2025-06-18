import { AuthContext } from "@/Provider/AuthProvider";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import userpic from "../assets/user.png";
import useAdmin from "@/hooks/useAdmin";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isAdmin, isAdminLoading] = useAdmin(); // ✅ FIXED
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const updatedProfileInfo = {
      displayName: data.name,
      email: data.email,
      photoURL: data.picture,
      phoneNumber: data.phone,
    };

    updateUser(updatedProfileInfo)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile has been updated successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log("Error:", err.message);
      });
  };

  if (isAdminLoading) return <p className="text-center mt-10">Loading...</p>; // ✅ Handle loading

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-2xl border border-neutral-300 rounded-xl p-6 shadow-md bg-white space-y-6">
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || userpic}
            alt="User"
            className="rounded-full w-28 h-28 border-2 border-accent object-cover"
          />
          <h1 className="bg-slate-100 px-4 py-2 mt-4 rounded-md text-green-700 font-semibold text-sm sm:text-base">
            Role: {isAdmin ? "Admin" : "Student"}
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <label className="form-control w-full">
            <span className="label-text ">Your Full Name</span>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Your name"
              defaultValue={user?.displayName}
              className="input input-bordered  w-full"
            />
          </label>

          {/* Email */}
          <label className="form-control w-full">
            <span className="label-text">Your Email</span>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
            />
          </label>

          {/* Image */}
          <label className="form-control w-full">
            <span className="label-text">Image URL</span>
            <input
              {...register("picture", { required: true })}
              type="text"
              placeholder="Image URL"
              defaultValue={user?.photoURL}
              className="input input-bordered w-full"
            />
          </label>

          {/* Phone */}
          <label className="form-control w-full">
            <span className="label-text">Phone</span>
            <input
              {...register("phone", { required: true })}
              type="tel"
              placeholder="Phone number"
              defaultValue={user?.phoneNumber}
              className="input input-bordered w-full"
            />
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#9eb444] to-[#dd7c58] text-white font-semibold text-lg py-2.5 rounded hover:opacity-90 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
