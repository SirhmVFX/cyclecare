import Image from "next/image";
function Donors() {
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
              </select>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 py-2">
              <Image
                src="/images/donor1.png"
                width={80}
                height={80}
                alt="donor"
                className="rounded-3xl"
              />

              <div>
                <h1 className="font-bold">Darlene Robertson</h1>
                <div className="flex gap-2">
                  <p className="text-sm text-accent font-bold">Sanitary Pads</p>
                  <p className="text-sm text-gray-300">| Ojodu, Lagos State</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2">
              <Image
                src="/images/donor (1).png"
                width={80}
                height={80}
                alt="donor"
                className="rounded-3xl"
              />

              <div>
                <h1 className="font-bold">Theresa Webb</h1>
                <div className="flex gap-2">
                  <p className="text-sm text-accent font-bold">Toiletries</p>
                  <p className="text-sm text-gray-300">| Ojodu, Lagos State</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2">
              <Image
                src="/images/donor (2).png"
                width={80}
                height={80}
                alt="donor"
                className="rounded-3xl"
              />

              <div>
                <h1 className="font-bold">Wade Warren</h1>
                <div className="flex gap-2">
                  <p className="text-sm text-accent font-bold">Sanitary Pads</p>
                  <p className="text-sm text-gray-300">| Ojodu, Lagos State</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 py-2">
              <Image
                src="/images/donor (2).png"
                width={80}
                height={80}
                alt="donor"
                className="rounded-3xl"
              />

              <div>
                <h1 className="font-bold">Wade Warren</h1>
                <div className="flex gap-2">
                  <p className="text-sm text-accent font-bold">Sanitary Pads</p>
                  <p className="text-sm text-gray-300">| Ojodu, Lagos State</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donors;
