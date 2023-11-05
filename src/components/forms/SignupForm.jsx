"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password == !data.confirmPassword) {
      return alert("Paswords do not match");
    }

    const res = await fetch("api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        username: data.username,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/login");
    }
  });

  return (
    <div className=" mx-2 min-h-screen md:flex md:justify-center md:items-center mt-2">
      <form className="md:w-1/4" onSubmit={onSubmit}>
        <h1 className="text-center text-zinc-50 text-3xl mb-4 font-extrabold py-2">
          Register
        </h1>
        <div className="rounded-lg bg-appOrange p-3 mb-3">
          <label>
            <p className="m-0">Email </p>
            <input
              className="w-full p-2 lg:text-2xl font-semibold rounded-md text-slate-950 "
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                }, 
              })}
              autoFocus
              placeholder="user@email.com"
            />
          </label>
        </div>
        {errors.email ? (
          <p className="text-red-500 mb-3">{errors.email.message}</p>
        ) : null}
        <div className="rounded-lg bg-appOrange p-3 mb-3 ">
          <label>
            <p className="m-0">Username</p>
            <input
              className="w-full p-2 lg:text-2xl font-semibold rounded-md text-slate-800"
              type="text"
              {...register("username", {
                required: { value: true, message: "User is required" },
              })}
              placeholder="user123"
            />
          </label>
        </div>
        {errors.username ? (
          <p className="text-red-500 mb-3">{errors.username.message}</p>
        ) : null}
        <div className="rounded-lg bg-appOrange p-3 mb-3">
          <label>
            <p className="m-0">Password</p>
            <input
              className="w-full p-2 lg:text-2xl font-semibold rounded-md text-slate-800"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              placeholder="********"
            />
          </label>
        </div>
        {errors.password ? (
          <p className="text-red-500 mb-3">{errors.password.message}</p>
        ) : null}
        <div className="rounded-lg bg-appOrange p-3 mb-3">
          <label>
            <p className="m-0">Confirm Password</p>
            <input
              className="w-full p-2 lg:text-2xl font-semibold rounded-md text-slate-800"
              type="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  value: "true",
                  message: "Confirm Password is required",
                },
              })}
              placeholder="********"
            />
          </label>
        </div>
        {errors.confirmPassword ? (
          <p className="text-red-500 mb-3">{errors.confirmPassword.message}</p>
        ) : null}
        <div className="rounded-lg bg-appOrangeButton p-2 mb-4 mt-3 flex justify-center items-center">
          <button className="text-zinc-50 text-2xl font-semibold">
            Register
          </button>
        </div>
        <Link
          href="/"
          className="bg-appOrangeButton hover:bg-gray-700 rounded-lg text-2xl px-6 font-semibold"
        >
          Back
        </Link>
      </form>
    </div>
  );
};
export default SignupForm;
