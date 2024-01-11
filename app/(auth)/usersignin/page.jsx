"use client";

import Link from "next/link";
import Button from "../../components/Button";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { useState } from "react";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

function UserSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInwithemailandpassword] = useSignInWithEmailAndPassword(auth);
  const [clicked, setClicked] = useState(false);

  const router = useRouter();

  const handleSignIn = async (e) => {
    setClicked(true);
    try {
      e.preventDefault();
      const res = await signInwithemailandpassword(email, password);
      console.log({ res });

      localStorage.setItem("user", JSON.stringify(res.user));

      setTimeout(() => {
        localStorage.removeItem("user");
      }, 20 * 60 * 60 * 1000);
      setEmail("");
      setPassword("");
      router.push("/discover");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="w-full md:w-2/4 mx-auto h-screen p-8">
        <div className=" flex flex-col items-center py-4">
          <h1 className="font-bold text-2xl">Welcome Back</h1>
          <p>Sign in to continue</p>
        </div>

        <form onSubmit={handleSignIn}>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Email Address *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6502 1.65341H4.50977C2.64176 1.65341 1.12744 3.17331 1.12744 5.0482V9.95179C1.12744 11.8267 2.64176 13.3466 4.50977 13.3466H11.6502C13.5182 13.3466 15.0326 11.8267 15.0326 9.95179V5.0482C15.0326 3.17331 13.5182 1.65341 11.6502 1.65341ZM4.50977 0.521816C2.01909 0.521816 0 2.54835 0 5.0482V9.95179C0 12.4517 2.01909 14.4782 4.50977 14.4782H11.6502C14.1409 14.4782 16.16 12.4517 16.16 9.95179V5.0482C16.16 2.54835 14.1409 0.521816 11.6502 0.521816H4.50977Z"
                  fill="#808080"
                />
                <path
                  d="M8.16079 8.91784C7.55391 8.91784 6.94704 8.67831 6.48755 8.20812L0.834965 3.92713C0.583545 3.66985 0.583545 3.24402 0.834965 2.98674C1.08638 2.72946 1.50253 2.72946 1.75395 2.98674L7.40653 7.26773C7.82267 7.69356 8.4989 7.69356 8.91505 7.26773L14.5677 2.98674C14.8191 2.72946 15.2352 2.72946 15.4866 2.98674C15.7381 3.24402 15.7381 3.66985 15.4866 3.92713L9.83403 8.20812C9.37454 8.67831 8.76766 8.91784 8.16079 8.91784Z"
                  fill="#808080"
                />
              </svg>
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent w-full text-sm outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Password *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15 8.95833C14.6583 8.95833 14.375 8.675 14.375 8.33333V6.66666C14.375 4.04166 13.6333 2.29166 10 2.29166C6.36667 2.29166 5.625 4.04166 5.625 6.66666V8.33333C5.625 8.675 5.34167 8.95833 5 8.95833C4.65833 8.95833 4.375 8.675 4.375 8.33333V6.66666C4.375 4.25 4.95833 1.04166 10 1.04166C15.0417 1.04166 15.625 4.25 15.625 6.66666V8.33333C15.625 8.675 15.3417 8.95833 15 8.95833Z"
                  fill="#808080"
                />
                <path
                  d="M10 16.0417C8.50835 16.0417 7.29169 14.825 7.29169 13.3333C7.29169 11.8417 8.50835 10.625 10 10.625C11.4917 10.625 12.7084 11.8417 12.7084 13.3333C12.7084 14.825 11.4917 16.0417 10 16.0417ZM10 11.875C9.20002 11.875 8.54169 12.5333 8.54169 13.3333C8.54169 14.1333 9.20002 14.7917 10 14.7917C10.8 14.7917 11.4584 14.1333 11.4584 13.3333C11.4584 12.5333 10.8 11.875 10 11.875Z"
                  fill="#808080"
                />
                <path
                  d="M14.1667 18.9583H5.83335C2.15835 18.9583 1.04169 17.8417 1.04169 14.1667V12.5C1.04169 8.825 2.15835 7.70834 5.83335 7.70834H14.1667C17.8417 7.70834 18.9584 8.825 18.9584 12.5V14.1667C18.9584 17.8417 17.8417 18.9583 14.1667 18.9583ZM5.83335 8.95834C2.85002 8.95834 2.29169 9.525 2.29169 12.5V14.1667C2.29169 17.1417 2.85002 17.7083 5.83335 17.7083H14.1667C17.15 17.7083 17.7084 17.1417 17.7084 14.1667V12.5C17.7084 9.525 17.15 8.95834 14.1667 8.95834H5.83335Z"
                  fill="#808080"
                />
              </svg>
              <input
                type="password"
                placeholder="Create your password"
                className="bg-transparent w-full text-sm outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Link href="/forgotpassword">Forgot Password?</Link>
          </div>

          <div className="mt-8">
            <Button
              color={clicked ? "bg-red-300" : "bg-accent"}
              label={clicked ? "Signing In..." : "Sign In"}
            />
          </div>
        </form>

        <div className="flex justify-center p-4 gap-2">
          <h1 className="font-bold">New User?</h1>
          <Link href="/usersignup" className="font-bold text-accent">
            Sign up for FREE
          </Link>
        </div>
      </section>
    </>
  );
}

export default UserSignIn;
