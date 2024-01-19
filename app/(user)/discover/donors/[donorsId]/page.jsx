"use client";
import Button from "@/app/components/Button";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { useEffect, useState } from "react";

import profile from "@/public/images/user_placeholder.png";

function DonorsId({ params }) {
  const id = params.donorsId;
  const [donordetails, setdonorDetails] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let data = [];
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          data = docSnap.data();
          console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
        setdonorDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const router = useRouter();

  const handleClick = () => {
    router.push("/discover/donors/123/message");
  };
  return (
    <>
      <section className="w-full md:w-2/4 mx-auto h-screen relative">
        <div className="w-full h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126834.05801193304!2d3.3488896!3d6.5765376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sng!4v1704388854964!5m2!1sen!2sng"
            width=""
            height=""
            className="border-0 w-full h-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-white w-full rounded-ss-3xl rounded-se-3xl px-12 pt-12 h-2/3 absolute bottom-0">
          <div className="flex justify-between items-center">
            <h1>Donors Details</h1>

            <div className="flex gap-2">
              <Link
                href={"+2349034980910"}
                className="bg-red-200 rounded-lg p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z"
                    fill="#EC4653"
                  />
                </svg>
              </Link>
              <Link
                href={"/discover/donors/123/message"}
                className="bg-red-200 rounded-lg p-2"
              >
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
              </Link>
            </div>
          </div>

          <div className="">
            <div className="flex gap-4 items-center py-4">
              <div className="rounded-lg border-4 border-white ">
                <Image
                  src={profile}
                  alt="profile"
                  height={50}
                  width={50}
                  className="object-cover rounded-lg"
                />
              </div>

              <div>
                <h1 className="font-bold">{donordetails.donorname}</h1>
                <p className="text-gray-300">{donordetails.phone}</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <Link href={`tel:+${donordetails.phone}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                >
                  <path
                    d="M7.57341 1.39058C8.02244 0.00861168 9.97756 0.00860953 10.4266 1.39058L11.3574 4.25532C11.5582 4.87336 12.1341 5.2918 12.784 5.2918H15.7962C17.2492 5.2918 17.8534 7.15122 16.6778 8.00532L14.2409 9.77583C13.7152 10.1578 13.4952 10.8348 13.696 11.4529L14.6268 14.3176C15.0759 15.6996 13.4941 16.8488 12.3186 15.9947L9.88168 14.2242C9.35595 13.8422 8.64405 13.8422 8.11832 14.2242L5.68143 15.9947C4.50586 16.8488 2.92413 15.6996 3.37316 14.3176L4.30397 11.4529C4.50479 10.8348 4.2848 10.1578 3.75907 9.77583L1.32217 8.00532C0.1466 7.15122 0.750763 5.2918 2.20385 5.2918H5.21602C5.86586 5.2918 6.44179 4.87336 6.6426 4.25532L7.57341 1.39058Z"
                    fill="#29D395"
                  />
                </svg>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M7.57341 1.39058C8.02244 0.00861168 9.97756 0.00860953 10.4266 1.39058L11.3574 4.25532C11.5582 4.87336 12.1341 5.2918 12.784 5.2918H15.7962C17.2492 5.2918 17.8534 7.15122 16.6778 8.00532L14.2409 9.77583C13.7152 10.1578 13.4952 10.8348 13.696 11.4529L14.6268 14.3176C15.0759 15.6996 13.4941 16.8488 12.3186 15.9947L9.88168 14.2242C9.35595 13.8422 8.64405 13.8422 8.11832 14.2242L5.68143 15.9947C4.50586 16.8488 2.92413 15.6996 3.37316 14.3176L4.30397 11.4529C4.50479 10.8348 4.2848 10.1578 3.75907 9.77583L1.32217 8.00532C0.1466 7.15122 0.750763 5.2918 2.20385 5.2918H5.21602C5.86586 5.2918 6.44179 4.87336 6.6426 4.25532L7.57341 1.39058Z"
                  fill="#29D395"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M7.57341 1.39058C8.02244 0.00861168 9.97756 0.00860953 10.4266 1.39058L11.3574 4.25532C11.5582 4.87336 12.1341 5.2918 12.784 5.2918H15.7962C17.2492 5.2918 17.8534 7.15122 16.6778 8.00532L14.2409 9.77583C13.7152 10.1578 13.4952 10.8348 13.696 11.4529L14.6268 14.3176C15.0759 15.6996 13.4941 16.8488 12.3186 15.9947L9.88168 14.2242C9.35595 13.8422 8.64405 13.8422 8.11832 14.2242L5.68143 15.9947C4.50586 16.8488 2.92413 15.6996 3.37316 14.3176L4.30397 11.4529C4.50479 10.8348 4.2848 10.1578 3.75907 9.77583L1.32217 8.00532C0.1466 7.15122 0.750763 5.2918 2.20385 5.2918H5.21602C5.86586 5.2918 6.44179 4.87336 6.6426 4.25532L7.57341 1.39058Z"
                  fill="#29D395"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M7.57341 1.39058C8.02244 0.00861168 9.97756 0.00860953 10.4266 1.39058L11.3574 4.25532C11.5582 4.87336 12.1341 5.2918 12.784 5.2918H15.7962C17.2492 5.2918 17.8534 7.15122 16.6778 8.00532L14.2409 9.77583C13.7152 10.1578 13.4952 10.8348 13.696 11.4529L14.6268 14.3176C15.0759 15.6996 13.4941 16.8488 12.3186 15.9947L9.88168 14.2242C9.35595 13.8422 8.64405 13.8422 8.11832 14.2242L5.68143 15.9947C4.50586 16.8488 2.92413 15.6996 3.37316 14.3176L4.30397 11.4529C4.50479 10.8348 4.2848 10.1578 3.75907 9.77583L1.32217 8.00532C0.1466 7.15122 0.750763 5.2918 2.20385 5.2918H5.21602C5.86586 5.2918 6.44179 4.87336 6.6426 4.25532L7.57341 1.39058Z"
                  fill="#29D395"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M7.57341 1.39058C8.02244 0.00861168 9.97756 0.00860953 10.4266 1.39058L11.3574 4.25532C11.5582 4.87336 12.1341 5.2918 12.784 5.2918H15.7962C17.2492 5.2918 17.8534 7.15122 16.6778 8.00532L14.2409 9.77583C13.7152 10.1578 13.4952 10.8348 13.696 11.4529L14.6268 14.3176C15.0759 15.6996 13.4941 16.8488 12.3186 15.9947L9.88168 14.2242C9.35595 13.8422 8.64405 13.8422 8.11832 14.2242L5.68143 15.9947C4.50586 16.8488 2.92413 15.6996 3.37316 14.3176L4.30397 11.4529C4.50479 10.8348 4.2848 10.1578 3.75907 9.77583L1.32217 8.00532C0.1466 7.15122 0.750763 5.2918 2.20385 5.2918H5.21602C5.86586 5.2918 6.44179 4.87336 6.6426 4.25532L7.57341 1.39058Z"
                  fill="#DDDDDD"
                />
              </svg>
              <p className="text-gray-300">4.0</p>
            </div>
          </div>

          <div className="py-12 flex flex-col gap-4">
            <div className="flex justify-between">
              <h1 className="text-gray-300">Donation</h1>
              <h1 className="font-bold">{donordetails.productName}</h1>
            </div>

            <div className="flex justify-between">
              <h1 className="text-gray-300">Location</h1>
              <h1 className="font-bold">{donordetails.location}</h1>
            </div>
            <Image
              src={donordetails.file}
              width={100}
              height={100}
              alt="prod"
            />
          </div>

          <div className="bg-red-100 rounded-2xl p-8 border-spacing-2 border-red-500">
            <div className="flex gap-6 py-4">
              <div className="bg-red-200 w-[20px] h-[20px] rounded-full flex items-center justify-center">
                <div className="bg-red-500 w-[10px] h-[10px] rounded-full"></div>
              </div>
              <p className="font-bold text-sm">Your Location</p>
            </div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-slate-200">.</div>
            <div className="flex items-start py-4">
              <div className="flex items-center justify-center gap-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.0009 14.1699C9.87086 14.1699 8.13086 12.4399 8.13086 10.2999C8.13086 8.15994 9.87086 6.43994 12.0009 6.43994C14.1309 6.43994 15.8709 8.16994 15.8709 10.3099C15.8709 12.4499 14.1309 14.1699 12.0009 14.1699ZM12.0009 7.93994C10.7009 7.93994 9.63086 8.99994 9.63086 10.3099C9.63086 11.6199 10.6909 12.6799 12.0009 12.6799C13.3109 12.6799 14.3709 11.6199 14.3709 10.3099C14.3709 8.99994 13.3009 7.93994 12.0009 7.93994Z"
                      fill="black"
                    />
                    <path
                      d="M11.9997 22.76C10.5197 22.76 9.02969 22.2 7.86969 21.09C4.91969 18.25 1.65969 13.72 2.88969 8.33C3.99969 3.44 8.26969 1.25 11.9997 1.25C11.9997 1.25 11.9997 1.25 12.0097 1.25C15.7397 1.25 20.0097 3.44 21.1197 8.34C22.3397 13.73 19.0797 18.25 16.1297 21.09C14.9697 22.2 13.4797 22.76 11.9997 22.76ZM11.9997 2.75C9.08969 2.75 5.34969 4.3 4.35969 8.66C3.27969 13.37 6.23969 17.43 8.91969 20C10.6497 21.67 13.3597 21.67 15.0897 20C17.7597 17.43 20.7197 13.37 19.6597 8.66C18.6597 4.3 14.9097 2.75 11.9997 2.75Z"
                      fill="#202020"
                    />
                  </svg>
                </div>
                <p className="font-sm font-bold">{donordetails.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 pb-32">
            <Button
              label={"Connect"}
              color={"bg-accent"}
              onClick={handleClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default DonorsId;
