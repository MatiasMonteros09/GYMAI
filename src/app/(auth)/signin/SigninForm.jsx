"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import CircularMenuButton from "@/components/CircularMenu";

// Your SigninForm component
const SigninForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.name,
      password: data.password,
      redirect: false,
    });

    res.ok
      ? (toast.success(res.message),
        reset(),
        "continue.html",
        router.push("/create"),
        router.refresh())
      : toast.error(res.error);
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-center text-white text-3xl mb-10 font-extrabold">
        NICE TO SEE YOU!
      </h1>
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <div className="mb-5">
          <label className="block text-white font-bold mb-2">Email</label>
          <input
            className="w-full px-3 py-2 rounded-md text-gray-800 bg-white"
            type="email"
            {...register("name", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
        </div>
        <div className="mb-5">
          <label className="block text-white font-bold mb-2">Password</label>
          <input
            className="w-full px-3 py-2 rounded-md text-gray-800 bg-white"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
        </div>
        <div className="mb-5">
          <button
            className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 rounded-md"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <Toaster position="bottom-right" />
      <CircularMenuButton/>
    </div>
  );
};

export default SigninForm;