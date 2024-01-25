"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useChat } from "ai/react";
import Link from "next/link";

function Message() {
  const [user] = useAuthState(auth);
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat();

  console.log(input);
  return (
    <>
      <section className="w-full md:w-2/4 mx-auto p-8 h-screen">
        <div className="flex justify-between">
          <div className="flex justify-center items-center gap-3">
            <p className="font-bold text-2xl">
              Cycle Care <br />
              Ai Assitant
            </p>
          </div>
        </div>

        <div className="py-4 h-[70%]">
          <div className="mb-4">
            <p className="font-bold">You</p>
            <div className="bg-accent py-2 px-4 rounded-2xl rounded-ee-none ">
              <p className="text-sm text-white">Hy </p>
            </div>
          </div>
          <div className="mb-8">
            <p className="font-bold">Cyclevcare AI Assitant</p>
            <div className="bg-gray-200 py-2 px-4 rounded-lg w-3/4 ">
              <p className="text-sm text-gray-400">
                Hello {user?.email.split("@")[0]}, How may i be of help to you
                today
              </p>
            </div>
          </div>
        </div>

        <label htmlFor="">Ask any question</label>
        <div className="flex gap-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              value={input}
              placeholder="Enter message"
              className="border p-2 rounded-2xl w-3/4"
            />

            <Link
              href={"/v2"}
              className="bg-accent py-2 px-3 text-white rounded-2xl"
            >
              Send
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}

export default Message;
