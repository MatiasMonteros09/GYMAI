import SigninForm from "@/app/(auth)/signin/SigninForm";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Signin = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/create");
  }

  return (
    <div>
      <SigninForm />
    </div>
  );
};
export default Signin;
