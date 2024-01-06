import Image from "next/image";

function Message() {
  return (
    <>
      <section className="w-full md:w-2/4 mx-auto p-8">
        <div className="flex justify-between">
          <div className="flex justify-center items-center">
            <Image
              src="/images/user.png"
              width={50}
              height={50}
              alt="user"
              className="border rounded-full border-rose-600"
            />

            <p className="font-bold">Ganiu Samuel</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Message;
