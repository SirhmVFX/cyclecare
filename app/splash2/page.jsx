import Image from "next/image";
import Link from "next/link";

function Splash2() {
  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full bg-black h-[510px] relative">
          <Link
            className="bg-white rounded-full absolute left-12 top-12"
            href="/splash1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                fill="#000"
              />
              <path
                d="M13.2599 16.2802C13.0699 16.2802 12.8799 16.2102 12.7299 16.0602L9.19992 12.5302C8.90992 12.2402 8.90992 11.7602 9.19992 11.4702L12.7299 7.94016C13.0199 7.65016 13.4999 7.65016 13.7899 7.94016C14.0799 8.23016 14.0799 8.71016 13.7899 9.00016L10.7899 12.0002L13.7899 15.0002C14.0799 15.2902 14.0799 15.7702 13.7899 16.0602C13.6499 16.2102 13.4599 16.2802 13.2599 16.2802Z"
                fill="#000"
              />
            </svg>
          </Link>
          <Image
            src="/images/Splash3.png"
            alt="splash3"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-8 p-12">
          <div className="py-3 px-4 bg-accent text-white rounded-2xl">
            <p className="text-sm">Why CycleCare</p>
          </div>

          <h1 className="text-2xl font-bold leading-6 text-secondary">
            Your personalized companion for seamless cycle care and well-being!
          </h1>

          <Link href="/splash3" className="button bg-accent">
            Next
          </Link>
        </div>
      </section>
    </>
  );
}

export default Splash2;
