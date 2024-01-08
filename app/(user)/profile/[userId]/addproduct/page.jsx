import Link from "next/link";
import Button from "@/app/components/Button";

function AddProduct() {
  return (
    <>
      <section className="p-8 w-full md:w-2/4 mx-auto">
        <h1>Upload Product</h1>
        <form>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Product Name *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Enter your product name"
                className="bg-transparent w-full text-sm"
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
                className="bg-transparent w-full text-sm"
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
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Add product image *
            </label>
            <input type="file" name="" id="" />
          </div>
          <div className="mt-8">
            <Button color={"bg-accent"} label={"Upload Product"} />
          </div>
        </form>
      </section>
    </>
  );
}

export default AddProduct;
