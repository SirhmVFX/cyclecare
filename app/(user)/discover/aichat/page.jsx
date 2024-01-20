"use client";
import ChatBubble from "@/app/components/ChatBubble";
import ChatBubbleReceive from "@/app/components/ChatBubbleReceive";
import { useChat } from "ai/react";

function Message() {
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
          <ChatBubble />
          <ChatBubbleReceive />
        </div>

        <label htmlFor="">Ask any question</label>
        <div className="flex gap-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name=""
              value={input}
              onChange={handleInputChange}
              placeholder="Enter message"
              className="border p-2 rounded-2xl w-3/4"
            />

            <button className="bg-accent py-2 px-3 text-white rounded-2xl">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Message;
