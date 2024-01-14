"use client";
import Link from "next/link";
import Button from "@/app/components/Button";
import Image from "next/image";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function AddProduct() {
  const [productName, setProductname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null); // Change the initial state to null
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const uploadFile = async () => {
      try {
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.error(error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              setFile(downloadURL);
            } catch (error) {
              console.error(error);
            }
          }
        );
      } catch (error) {
        console.error("error");
      }
    };

    file && uploadFile();
  }, [file]);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        const { uid } = user;
        const res = await addDoc(collection(db, "products"), {
          productName,
          quantity,
          location,
          file,
          userid: uid,
          timestamp: serverTimestamp(),
        });
        console.log(res);
        setError(!error);
      } else {
        alert("You need to be signed in to create a product");
        router.push("/usersignin");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <section className="p-8 w-full md:w-2/4 mx-auto">
        <h1>Upload Product</h1>
        <form onSubmit={handleAdd}>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Product Name *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Enter your product name"
                className="bg-transparent w-full text-sm outline-none"
                onChange={(e) => setProductname(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Quantity *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="how many of this product are you willing to donate"
                className="bg-transparent w-full text-sm outline-none"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Location *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="What is your location"
                className="bg-transparent w-full text-sm outline-none"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Add product image *
            </label>
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          {file && (
            <Image
              src={file}
              width={100}
              height={100}
              alt="UploadedProduct"
              className="mt-4 rounded-lg object-cover"
            />
          )}
          <div className="mt-8">
            <Button
              color={error ? "bg-gray-300" : "bg-accent"}
              label={"Upload Product"}
              type="submit"
            />
          </div>
        </form>
        {error ? (
          <div className="flex items-center gap-2 justify-center py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99984 18.9583C5.05817 18.9583 1.0415 14.9417 1.0415 9.99999C1.0415 5.05832 5.05817 1.04166 9.99984 1.04166C14.9415 1.04166 18.9582 5.05832 18.9582 9.99999C18.9582 14.9417 14.9415 18.9583 9.99984 18.9583ZM9.99984 2.29166C5.74984 2.29166 2.2915 5.74999 2.2915 9.99999C2.2915 14.25 5.74984 17.7083 9.99984 17.7083C14.2498 17.7083 17.7082 14.25 17.7082 9.99999C17.7082 5.74999 14.2498 2.29166 9.99984 2.29166Z"
                fill="#29D395"
              />
              <path
                d="M8.81625 12.9834C8.64959 12.9834 8.49125 12.9167 8.37459 12.8001L6.01621 10.4417C5.77454 10.2001 5.77454 9.80008 6.01621 9.55841C6.25788 9.31675 6.65788 9.31675 6.89954 9.55841L8.81625 11.4751L13.0996 7.19175C13.3413 6.95008 13.7413 6.95008 13.9829 7.19175C14.2246 7.43341 14.2246 7.83341 13.9829 8.07508L9.25792 12.8001C9.14125 12.9167 8.98292 12.9834 8.81625 12.9834Z"
                fill="#29D395"
              />
            </svg>
            <p className="text-green-500 font-bold">
              Product Uploaded successfull
            </p>
          </div>
        ) : (
          " "
        )}
      </section>
    </>
  );
}

export default AddProduct;
