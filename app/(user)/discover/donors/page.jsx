"use client";
import Image from "next/image";
import Link from "next/link";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { useEffect, useState } from "react";

function Donors() {
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
      <section className="w-full md:w-2/4 mx-auto h-screen relative mb-20">
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
        <div className="bg-white w-full rounded-ss-3xl rounded-se-3xl px-8 pt-12 h-2/3 absolute bottom-0">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-bold">Discover</h1>
              <p className="text-gray-300">See donations closer to your area</p>
            </div>

            <div>
              <select name="" id="">
                <option value="" className="text-sm p-2">
                  lagos
                </option>
                <option value="" className="text-sm p-2">
                  Abuja
                </option>
                <option value="" className="text-sm p-2">
                  Ogun
                </option>
                <option value="" className="text-sm p-2">
                  Ibadan
                </option>
              </select>
            </div>
          </div>
          <div>
            {data.map((prod) => (
              <Link
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
      </section>
    </>
  );
}

export default Donors;
