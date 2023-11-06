"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const router = useRouter();

  // console.log(errors);

  const onSubmit = handleSubmit(async (data) => {
    const { email, username, password } = data;

    // if (data.password == !data.confirmPassword) {
    //   return alert("Paswords do not match");
    // }

    const res = await fetch("api/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    res.ok
      ? (toast.success(result.message), reset(), "continue.html")
      : toast.error(result.message);
  });

  return (
    <div className="mx-2 min-h-screen lg:flex lg:justify-center lg:items-center mt-2">
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
                pattern: {
                  value:
                    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                  message: "Email is not valid",
                },
              })}
              autoFocus
              placeholder="user@email.com"
            />
          </label>
        </div>
        {errors.email ? (
          <p className="text-red-400 mb-3 lg:text-xl">{errors.email.message}</p>
        ) : null}
        <div className="rounded-lg bg-appOrange p-3 mb-3 ">
          <label>
            <p className="m-0">Username</p>
            <input
              className="w-full p-2 lg:text-2xl font-semibold rounded-md text-slate-800"
              type="text"
              {...register("username", {
                required: { value: true, message: "Username is required" },
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username must be less than 20 characters",
                },
                pattern:{
                  value:/^[a-zA-Z0-9]+$/,
                  message:"Invalid username"
                }
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
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
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
              type="password"
              {...register("confirmPassword", {
                required: {
                  value: "true",
                  message: "Confirm Password is required",
                },
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              placeholder="********"
            />
          </label>
        </div>
        {errors.confirmPassword ? (
          <p className="text-red-500 mb-3">{errors.confirmPassword.message}</p>
        ) : null}

        <button className="w-full text-zinc-50 text-2xl font-semibold rounded-lg bg-appOrangeButton hover:bg-appOrangeButtonHover p-2 mb-4 mt-3">
          Register
        </button>

        <Link
          href="/"
          className=" bg-appOrangeButton hover:bg-gray-700 rounded-lg text-2xl px-6 font-semibold"
        >
          Back
        </Link>
      </form>
      
      <Toaster />
    </div>
  );
};
export default SignupForm;
