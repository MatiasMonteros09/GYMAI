import SignupForm from "@/app/(auth)/signup/SignupForm";

import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Signup = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/create");
  }
  return (
    <div>
      <SignupForm />
    </div>
  );
};
export default Signup;
