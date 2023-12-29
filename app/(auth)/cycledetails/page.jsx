import Link from "next/link";
import Button from "@/app/components/Button";

function CycleDetails() {
  return (
    <>
      <section className="w-full md:w-2/4 mx-auto h-screen p-8 ">
        <div className=" flex flex-col items-center py-4">
          <h1 className="font-bold text-2xl">Cycle Details</h1>
          <p>
            Please provide the correct details so we assist you on your journey.
          </p>
        </div>

        <form>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              1. When did your last cycle begin
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Provide your answer"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              2. When did it end
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Provide your answer"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              3. How long does your cycle last 'Days'
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Provide your answer"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              4. How do you feel during this process?
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Provide your answer"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>

          <div className="mt-8">
            <Button color={"bg-accent"} label={"Submit"} />
          </div>
        </form>

        <div className="flex p-4 gap-2">
          <input type="checkbox" name="" id="" />
          <h1 className="text-sm">
            I agree to the terms and conditions of Cycle Care
          </h1>
        </div>
      </section>
    </>
  );
}

export default CycleDetails;
