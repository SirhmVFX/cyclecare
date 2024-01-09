import Link from "next/link";

function SelfCare() {
  return (
    <>
      <section className="selfcare relative w-full h-screen">
        <div className="absolute bottom-0 w-full p-12 bg-gradient-to-t from-black to-transparent h-2/4">
          <div className="text-white w-full flex flex-col justify-end h-full">
            <h1 className="font-bold text-6xl">
              Stay Fit <br /> & Strong
            </h1>
            <p className="mb-8">A healthy mind in a healthy body</p>
            <Link
              href={"/selfcare"}
              className=" p-4 w-full rounded-xl text-black flex justify-center bg-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelfCare;
