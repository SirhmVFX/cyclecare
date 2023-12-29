import Toast from "@/app/components/Toast";
import Image from "next/image";

function Userprofile({ params }) {
  const user = params.userId;
  return (
    <>
      <section className="w-full md:w-2/4 mx-auto p-8 bg-[#F8F8F8] pb-32">
        <div className="flex justify-between items-center">
          <div className="bg-white p-2 rounded-xl shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
                fill="#202020"
              />
              <path
                d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
                fill="#202020"
              />
              <path
                d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
                fill="#202020"
              />
            </svg>
          </div>
          <Image
            src="/images/profile.png"
            alt="profile"
            width={50}
            height={50}
            className="rounded-full border-2 border-accent"
          />
        </div>

        <div className="py-4">
          <h1 className="font-bold text-3xl text-secondary">Welcome, {user}</h1>
          <p className="text-sm text-accent">Wednessday, 28 Dec 2023</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl">
            <div className="p-8">
              <div>
                <h1 className="text-base text-secondary">Previous Cycle</h1>
                <p className="text-sm text-accent">18 Dec, 2023</p>
              </div>
              <div className="flex justify-end">
                <Image
                  src="/images/blood.png"
                  alt="blood"
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-3xl">
            <div className="p-8">
              <div>
                <h1 className="text-base text-white">Next Cycle</h1>
                <p className="text-sm text-accent">21 Jan, 2023</p>
              </div>
              <div className="flex justify-end">
                <Image
                  src="/images/blood.png"
                  alt="blood"
                  height={30}
                  width={30}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 gap-4 my-4 bg-white shadow-lg rounded-2xl">
          <h1 className="font-bold text-2xl text-secondary">
            Daily health tips
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus..
          </p>

          <p className="text-sm text-gray-300">Ayomide - 2023</p>
        </div>

        <div className="pt-4">
          <h1 className="text-2xl font-bold text-secondary">Categories</h1>

          <div className="bg-white shadow-lg p-4 mt-4 rounded-2xl ">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.2299 21.5199C17.0399 21.5199 16.8499 21.4499 16.6999 21.2999C16.4099 21.0099 16.4099 20.5299 16.6999 20.2399L20.2399 16.6999C20.5299 16.4099 21.0099 16.4099 21.2999 16.6999C21.5899 16.9899 21.5899 17.4699 21.2999 17.7599L17.7599 21.2999C17.6199 21.4399 17.4199 21.5199 17.2299 21.5199Z"
                  fill="#EC4653"
                />
                <path
                  d="M20.7699 21.5199C20.5799 21.5199 20.3899 21.4499 20.2399 21.2999L16.6999 17.7599C16.4099 17.4699 16.4099 16.9899 16.6999 16.6999C16.9899 16.4099 17.4699 16.4099 17.7599 16.6999L21.2999 20.2399C21.5899 20.5299 21.5899 21.0099 21.2999 21.2999C21.1499 21.4399 20.9599 21.5199 20.7699 21.5199Z"
                  fill="#EC4653"
                />
                <path
                  d="M7 14.25C6.59 14.25 6.25 13.91 6.25 13.5V10.5C6.25 10.09 6.59 9.75 7 9.75C7.41 9.75 7.75 10.09 7.75 10.5V13.5C7.75 13.91 7.41 14.25 7 14.25Z"
                  fill="#EC4653"
                />
                <path
                  d="M12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V10.5C11.25 10.09 11.59 9.75 12 9.75C12.41 9.75 12.75 10.09 12.75 10.5V13.5C12.75 13.91 12.41 14.25 12 14.25Z"
                  fill="#EC4653"
                />
                <path
                  d="M17 14.25C16.59 14.25 16.25 13.91 16.25 13.5V10.5C16.25 10.09 16.59 9.75 17 9.75C17.41 9.75 17.75 10.09 17.75 10.5V13.5C17.75 13.91 17.41 14.25 17 14.25Z"
                  fill="#202020"
                />
                <path
                  d="M13 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V13C22.75 13.41 22.41 13.75 22 13.75C21.59 13.75 21.25 13.41 21.25 13V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H13C13.41 21.25 13.75 21.59 13.75 22C13.75 22.41 13.41 22.75 13 22.75Z"
                  fill="#202020"
                />
              </svg>

              <div>
                <h1 className=" text-secondary">Track cycle</h1>
                <p className="text-sm text-accent">See your cycle progress</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg p-4 mt-4 rounded-2xl ">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
                  fill="#EC4653"
                />
                <path
                  d="M14.25 22.75H9.75C9.34 22.75 9 22.41 9 22V4C9 2.28 9.95 1.25 11.55 1.25H12.45C14.05 1.25 15 2.28 15 4V22C15 22.41 14.66 22.75 14.25 22.75ZM10.5 21.25H13.5V4C13.5 2.85 12.96 2.75 12.45 2.75H11.55C11.04 2.75 10.5 2.85 10.5 4V21.25Z"
                  fill="#EC4653"
                />
                <path
                  d="M7 22.75H3C2.59 22.75 2.25 22.41 2.25 22V10C2.25 8.28 3.13 7.25 4.6 7.25H5.4C6.87 7.25 7.75 8.28 7.75 10V22C7.75 22.41 7.41 22.75 7 22.75ZM3.75 21.25H6.25V10C6.25 8.75 5.7 8.75 5.4 8.75H4.6C4.3 8.75 3.75 8.75 3.75 10V21.25Z"
                  fill="#EC4653"
                />
                <path
                  d="M21 22.75H17C16.59 22.75 16.25 22.41 16.25 22V15C16.25 13.28 17.13 12.25 18.6 12.25H19.4C20.87 12.25 21.75 13.28 21.75 15V22C21.75 22.41 21.41 22.75 21 22.75ZM17.75 21.25H20.25V15C20.25 13.75 19.7 13.75 19.4 13.75H18.6C18.3 13.75 17.75 13.75 17.75 15V21.25Z"
                  fill="#EC4653"
                />
              </svg>

              <div>
                <h1 className=" text-secondary">Cycle Insights</h1>
                <p className="text-sm text-accent">See your cycle progress</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg p-4 mt-4 rounded-2xl ">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.5 11.25H8.5C8.09 11.25 7.75 10.91 7.75 10.5C7.75 10.09 8.09 9.75 8.5 9.75H15.5C15.91 9.75 16.25 10.09 16.25 10.5C16.25 10.91 15.91 11.25 15.5 11.25Z"
                  fill="#EC4653"
                />
                <path
                  d="M16 22.3199C15.66 22.3199 15.32 22.22 15.03 22.03L10.77 19.1899H7C3.56 19.1899 1.25 16.8799 1.25 13.4399V7.43994C1.25 3.99994 3.56 1.68994 7 1.68994H17C20.44 1.68994 22.75 3.99994 22.75 7.43994V13.4399C22.75 16.6199 20.77 18.84 17.75 19.15V20.5699C17.75 21.2199 17.4 21.8099 16.83 22.1099C16.57 22.2499 16.28 22.3199 16 22.3199ZM7 3.17993C4.42 3.17993 2.75 4.84993 2.75 7.42993V13.4299C2.75 16.0099 4.42 17.6799 7 17.6799H11C11.15 17.6799 11.29 17.7199 11.42 17.8099L15.87 20.77C15.98 20.84 16.08 20.81 16.13 20.78C16.18 20.75 16.26 20.6899 16.26 20.5599V18.4299C16.26 18.0199 16.6 17.6799 17.01 17.6799C19.59 17.6799 21.26 16.0099 21.26 13.4299V7.42993C21.26 4.84993 19.59 3.17993 17.01 3.17993H7Z"
                  fill="#EC4653"
                />
              </svg>

              <div>
                <h1 className=" text-secondary">Need a Doctor</h1>
                <p className="text-sm text-accent">
                  Do you need to do a check?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Userprofile;
