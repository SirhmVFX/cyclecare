"use client";
import Link from "next/link";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

function ForgotPassword() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/resetpassword");
  };
  return (
    <>
      <section className="w-full md:w-2/4 mx-auto h-screen p-8">
        <div className=" flex flex-col items-center py-4 text-center">
          <h1 className="font-bold text-2xl">Forgot Password</h1>
          <p>
            Enter the email associated with your account to recieve a mail with
            a One time password to reset your password
          </p>
        </div>

        <form>
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
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>

          <div className="mt-8 w-full flex justify-center">
            <Button
              color={"bg-accent"}
              label={"Get OTP"}
              onClick={handleClick}
            />
          </div>
        </form>

        <div className="flex justify-center p-4 gap-2">
          <h1 className="font-bold">Back to</h1>
          <Link href="/usersignin" className="font-bold text-accent">
            HOME
          </Link>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
