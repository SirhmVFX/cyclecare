import Button from "@/app/components/Button";
import Link from "next/link";

function DoctorAppointment() {
  return (
    <>
      <section className="p-8 w-full md:w-2/4 mx-auto mb-36">
        <h1 className="font-bold text-2xl">Schedule a doctors appointment</h1>
        <p>
          Tell us a little about what’s wrong and how you are feeling, let’s
          schedule an appointment with a doctor for you
        </p>
        <form>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Your Fullname *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <input
                type="text"
                placeholder="Enter your fullname"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-sm">
              Describe what the issue is
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Tell us what’s wrong"
              className="w-full p-4 bg-gray-300 rounded-2xl"
            ></textarea>
          </div>
          <div className="mt-8 w-full flex">
            <Link href={"/v2"} className="button bg-secondary">
              Schedule Appointment
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default DoctorAppointment;
