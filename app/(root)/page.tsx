// import Image from "next/image";
import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log("Loged-In", session);
  return (
    <>
      <h1 className="text-3xl font-black">Welcome to nextjs 👏</h1>

      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
      </form>
    </>
  );
};

export default Home;
