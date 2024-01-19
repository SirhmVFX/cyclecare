"use client";

import Image from "next/image";
import Link from "next/link";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { useEffect, useState } from "react";

import img1 from "@/public/images/user_placeholder.png";

function Discover() {
  const [user] = useAuthState(auth);
  const [data, setData] = useState([]);
  const router = useRouter();
  console.log({ user });

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc._document.data.value.mapValue.fields,
          });
        });
        setData(list);
        console.log("list =", list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!user && !storedUser) {
      // No user in auth state or local storage, redirect to sign in
      router.push("/usersignin");
    }
  }, [user, router]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // If user is not authenticated, return null (or any other message/component)
  if (!user) {
    return;
  }

  return (
    <>
      <section className="w-full md:w-2/4 mx-auto px-8 pt-8 h-screen pb-32">
        <div className="flex justify-between mb-4">
          <div>
            <p className="font-bold text-gray-300 text-sm">Good Morning</p>
            <h1 className="font-bold text-xl text-secondary">{user?.email}</h1>
          </div>

          <div className="flex gap-2 items-center">
            <Link
              href={"/notifications"}
              className="bg-white rounded-2xl shadow-lg p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.0199 20.5299C9.68987 20.5299 7.35987 20.1599 5.14987 19.4199C4.30987 19.1299 3.66987 18.5399 3.38987 17.7699C3.09987 16.9999 3.19987 16.1499 3.65987 15.3899L4.80987 13.4799C5.04987 13.0799 5.26987 12.2799 5.26987 11.8099V8.91992C5.26987 5.19992 8.29987 2.16992 12.0199 2.16992C15.7399 2.16992 18.7699 5.19992 18.7699 8.91992V11.8099C18.7699 12.2699 18.9899 13.0799 19.2299 13.4899L20.3699 15.3899C20.7999 16.1099 20.8799 16.9799 20.5899 17.7699C20.2999 18.5599 19.6699 19.1599 18.8799 19.4199C16.6799 20.1599 14.3499 20.5299 12.0199 20.5299ZM12.0199 3.66992C9.12987 3.66992 6.76987 6.01992 6.76987 8.91992V11.8099C6.76987 12.5399 6.46987 13.6199 6.09987 14.2499L4.94987 16.1599C4.72987 16.5299 4.66987 16.9199 4.79987 17.2499C4.91987 17.5899 5.21987 17.8499 5.62987 17.9899C9.80987 19.3899 14.2399 19.3899 18.4199 17.9899C18.7799 17.8699 19.0599 17.5999 19.1899 17.2399C19.3199 16.8799 19.2899 16.4899 19.0899 16.1599L17.9399 14.2499C17.5599 13.5999 17.2699 12.5299 17.2699 11.7999V8.91992C17.2699 6.01992 14.9199 3.66992 12.0199 3.66992Z"
                  fill="#202020"
                />
                <path
                  d="M13.8796 3.94018C13.8096 3.94018 13.7396 3.93018 13.6696 3.91018C13.3796 3.83018 13.0996 3.77018 12.8296 3.73018C11.9796 3.62018 11.1596 3.68018 10.3896 3.91018C10.1096 4.00018 9.80962 3.91018 9.61962 3.70018C9.42962 3.49018 9.36963 3.19018 9.47963 2.92018C9.88963 1.87018 10.8896 1.18018 12.0296 1.18018C13.1696 1.18018 14.1696 1.86018 14.5796 2.92018C14.6796 3.19018 14.6296 3.49018 14.4396 3.70018C14.2896 3.86018 14.0796 3.94018 13.8796 3.94018Z"
                  fill="#202020"
                />
                <path
                  d="M12.0195 22.8101C11.0295 22.8101 10.0695 22.4101 9.36953 21.7101C8.66953 21.0101 8.26953 20.0501 8.26953 19.0601H9.76953C9.76953 19.6501 10.0095 20.2301 10.4295 20.6501C10.8495 21.0701 11.4295 21.3101 12.0195 21.3101C13.2595 21.3101 14.2695 20.3001 14.2695 19.0601H15.7695C15.7695 21.1301 14.0895 22.8101 12.0195 22.8101Z"
                  fill="#202020"
                />
              </svg>
            </Link>

            <Link
              href={"/linkdonors"}
              className="bg-white rounded-2xl shadow-lg p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.75 18.5C4.17 18.5 1.25 15.58 1.25 12C1.25 8.42 4.17 5.5 7.75 5.5C8.16 5.5 8.5 5.84 8.5 6.25C8.5 6.66 8.16 7 7.75 7C4.99 7 2.75 9.24 2.75 12C2.75 14.76 4.99 17 7.75 17C10.51 17 12.75 14.76 12.75 12C12.75 11.59 13.09 11.25 13.5 11.25C13.91 11.25 14.25 11.59 14.25 12C14.25 15.58 11.33 18.5 7.75 18.5Z"
                  fill="#202020"
                />
                <path
                  d="M16 18.75C15.59 18.75 15.25 18.41 15.25 18C15.25 17.59 15.59 17.25 16 17.25C18.89 17.25 21.25 14.89 21.25 12C21.25 9.11 18.89 6.75 16 6.75C13.11 6.75 10.75 9.11 10.75 12C10.75 12.41 10.41 12.75 10 12.75C9.59 12.75 9.25 12.41 9.25 12C9.25 8.28 12.28 5.25 16 5.25C19.72 5.25 22.75 8.28 22.75 12C22.75 15.72 19.72 18.75 16 18.75Z"
                  fill="#202020"
                />
              </svg>
            </Link>
          </div>
        </div>

        <Link
          href={"/selfcare"}
          className="bg-gray-100 rounded-3xl my-4 h-[219px]"
        >
          <div className="discover p-8 w-full rounded-3xl relative">
            <div className="bg-secondary w-full h-full absolute  left-0 top-0 rounded-3xl opacity-25">
              .
            </div>
            <div className="">
              <h1 className="font-bold text-white">Cycle Care</h1>
              <h1 className="font-bold text-white">Self Care Routine</h1>
            </div>

            <div className="flex relative">
              <Image
                src="/images/people.png"
                width={35}
                height={35}
                alt="img"
                className="rounded-full border-2 border-white "
              />
              <Image
                src="/images/people (1).png"
                width={35}
                height={35}
                alt="img"
                className="rounded-full border-2 border-white absolute left-5"
              />
              <Image
                src="/images/people (2).png"
                width={35}
                height={35}
                alt="img"
                className="rounded-full border-2 border-white absolute left-10"
              />
              <Image
                src="/images/people (3).png"
                width={35}
                height={35}
                alt="img"
                className="rounded-full border-2 border-white absolute left-16"
              />
              <Image
                src="/images/people (4).png"
                width={35}
                height={35}
                alt="img"
                className="rounded-full border-2 border-white absolute left-20"
              />
            </div>

            <p className="text-white">Your daily Selfcare Check ups</p>
          </div>

          <div className="p-2 px-6 flex justify-between items-center">
            <p className="">Click Here</p>

            <div className="flex items-center gap-2">
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

              <p>4.0</p>
            </div>
          </div>
        </Link>

        <div>
          <div className="flex justify-between">
            <h1 className="font-bold"> Donors</h1>

            <Link href="/discover/donors" className="text-sm text-gray-300">
              See More
            </Link>
          </div>

          <div>
            {data.slice(-4).map((prod) => (
              <Link
                key={prod.id}
                href={`/discover/donors/${prod.id}`}
                className="flex items-center gap-4 py-2"
              >
                <Image
                  src={prod.file.stringValue}
                  width={60}
                  height={60}
                  alt="donor"
                  className="rounded-3xl"
                />

                <div>
                  <h1 className="font-bold">{prod.productName.stringValue}</h1>
                  <div className="flex gap-2 flex-wrap">
                    <p className="text-sm text-accent font-bold">
                      {prod.donorname.stringValue}
                    </p>
                    <p className="text-sm text-gray-300">
                      | {prod.location.stringValue}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-4 pb-32">
          <h1 className="font-bold">Available Products</h1>

          <div className="flex gap-4">
            {data.slice(0, 2).map((prodd) => (
              <div
                key={prodd.id}
                className="bg-white shadow-lg p-4 w-1/2 rounded-2xl "
              >
                <Image
                  src={prodd.file.stringValue}
                  width={100}
                  height={100}
                  alt="prod"
                  className="h-[100px] object-contain"
                />
                <h1 className="text-sm font-bold">
                  {prodd.productName.stringValue}
                </h1>
                <div className="flex relative">
                  <Image
                    src="/images/people.png"
                    width={35}
                    height={35}
                    alt="prod"
                    className="rounded-full border-2 border-white "
                  />
                  <Image
                    src="/images/people (1).png"
                    width={35}
                    height={35}
                    alt="prod"
                    className="rounded-full border-2 border-white absolute left-5"
                  />
                  <Image
                    src="/images/people (2).png"
                    width={35}
                    height={35}
                    alt="prod"
                    className="rounded-full border-2 border-white absolute left-10"
                  />
                </div>

                <p className="text-sm text-gray-300">
                  {prodd.quantity.stringValue} items left.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
