import Image from "next/image";
import Button from "./components/Button";

function NotFound() {
  return (
    <>
      <section className="w-full h-screen bg-secondary flex items-center ">
        <div className="w-full md:w-2/4 flex flex-col gap-8 justify-center items-center mx-auto">
          <Image
            src="/images/error.png"
            width={900}
            height={900}
            alt="error "
          />

          <div>
            <h1 className="text-white text-2xl font-extrabold">
              You Seem Lost!
            </h1>
            <p>Something went wrong.</p>
          </div>

          <div className="mt-8 w-full flex justify-center">
            <Button label={"Back to home"} color={"bg-accent"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
