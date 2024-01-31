import profile from "@/public/images/user_placeholder.png";
import Image from "next/image";
import Link from "next/link";

function TrackCycle({ params }) {
  return (
    <>
      <section className="bg-accent relative w-full h-screen ">
        <div className="flex justify-between px-8 py-4">
          <div className="p-3 bg-white rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                fill="#202020"
              />
              <path
                d="M13.2599 16.2802C13.0699 16.2802 12.8799 16.2102 12.7299 16.0602L9.19992 12.5302C8.90992 12.2402 8.90992 11.7602 9.19992 11.4702L12.7299 7.94016C13.0199 7.65016 13.4999 7.65016 13.7899 7.94016C14.0799 8.23016 14.0799 8.71016 13.7899 9.00016L10.7899 12.0002L13.7899 15.0002C14.0799 15.2902 14.0799 15.7702 13.7899 16.0602C13.6499 16.2102 13.4599 16.2802 13.2599 16.2802Z"
                fill="#202020"
              />
            </svg>
          </div>

          <div>
            <Image
              src={profile}
              width={40}
              height={40}
              alt="user"
              className="border bg-white rounded-full border-rose-600"
            />
          </div>
        </div>

        <div className="px-12 pb-8">
          <h1 className="font-bold text-white text-lg">22 Jan, 2024</h1>

          <div className="flex justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-sm text-secondary">Mo</p>
              <h1 className="font-bold text-white text-lg">22</h1>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-secondary">Tu</p>
              <h1 className="font-bold text-white text-lg">23</h1>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-secondary">We</p>
              <h1 className="font-bold text-white text-lg">24</h1>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-secondary">Th</p>
              <h1 className="font-bold text-white text-lg">25</h1>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-secondary">Fr</p>
              <h1 className="font-bold text-white text-lg">26</h1>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-secondary">Sa</p>
              <h1 className="font-bold text-white text-lg">27</h1>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm text-secondary">Su</p>
              <h1 className="font-bold text-white text-lg">28</h1>
            </div>
          </div>
        </div>

        <div className="bg-white w-full md:w-2/4  md:mx-auto rounded-s-3xl rounded-e-3xl  p-8">
          <div className="flex items-center gap-2 pb-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="55"
                viewBox="0 0 72 55"
                fill="none"
              >
                <g clip-path="url(#clip0_138_2606)">
                  <path
                    d="M0 49.8518C0 49.9122 0.0483853 49.9607 0.108639 49.9607H71.8914C71.9516 49.9607 72 49.9122 72 49.8518C72 49.7914 71.9516 49.7429 71.8914 49.7429H0.108639C0.0483853 49.7429 0 49.7914 0 49.8518Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M39.444 19.0312L40.1853 14.3892L35.1852 12.3469L34.4448 19.4019L39.444 19.0312Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M38.1807 15.8813C40.9967 15.8813 43.2795 13.5923 43.2795 10.7688C43.2795 7.9452 40.9967 5.65625 38.1807 5.65625C35.3648 5.65625 33.082 7.9452 33.082 10.7688C33.082 13.5923 35.3648 15.8813 38.1807 15.8813Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M37.7741 3.89596C37.922 3.98201 38.1191 3.85202 38.1666 3.68725C38.2141 3.52247 38.1584 3.34763 38.1045 3.18561C38.0132 2.91373 37.921 2.64094 37.8297 2.36907C37.6344 1.78962 37.4271 1.19003 37.0054 0.748812C36.3672 0.0833159 35.3539 -0.0860332 34.4419 0.0366304C33.2706 0.194079 32.1139 0.830282 31.5698 1.88208C31.0248 2.93387 31.2567 4.40217 32.2417 5.05852C30.8385 6.67054 30.3492 8.46838 30.4268 10.6068C30.5044 12.7451 32.8278 14.7132 34.3442 16.22C34.6829 16.014 34.9905 15.0501 34.8043 14.6995C34.6181 14.3489 34.8846 13.9434 34.6546 13.6212C34.4245 13.299 34.231 13.8125 34.4647 13.4912C34.6117 13.2889 34.0374 12.8229 34.2565 12.7021C35.3137 12.1163 35.6652 10.7944 36.3298 9.7829C37.1304 8.56267 38.5017 7.73606 39.9523 7.59875C40.7511 7.52277 41.5956 7.66008 42.2501 8.12511C42.9047 8.59013 43.3292 9.42131 43.1777 10.2122C43.5712 9.81127 43.7665 9.2245 43.6926 8.66794C43.6186 8.11138 43.2772 7.59509 42.7924 7.31223C43.0864 6.33642 42.8344 5.21413 42.1516 4.45893C41.4687 3.70372 38.697 3.8328 37.7001 4.03144"
                    fill="#2F2E41"
                  />
                  <path
                    d="M37.6193 7.62714C36.2983 7.76994 35.3443 8.91785 34.5391 9.97697C34.0753 10.5875 33.5887 11.2622 33.6006 12.0302C33.6124 12.8065 34.1301 13.472 34.3775 14.2079C34.7819 15.4108 34.3875 16.8406 33.4253 17.6645C34.3766 17.8457 35.4045 17.1308 35.5688 16.1742C35.7597 15.0611 34.9179 13.9864 35.0174 12.8605C35.1051 11.8691 35.8847 11.1057 36.5466 10.3642C37.2085 9.62271 37.8311 8.63865 37.5262 7.69121"
                    fill="#2F2E41"
                  />
                  <path
                    d="M37.8722 54.4508C37.8722 54.4508 26.8257 55.5493 26.0041 54.2677C25.1825 52.9862 37.214 51.7046 37.214 51.7046L37.8722 54.4508Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M30.8288 33.9147L30.6006 35.1294C31.2223 36.0494 31.2816 37.0215 30.9201 38.034L43.5185 38.1255C43.3834 36.757 43.2346 35.2905 43.7532 33.9458L30.8288 33.9147Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M51.4645 42.9469L46.8953 39.2816C46.2882 38.7947 45.8947 38.0706 45.8171 37.2952L45.1133 30.3135L49.3082 28.9111L50.3197 35.8242L52.8403 41.5683L51.4654 42.9469H51.4645Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M33.9781 18.5817L40.0947 18.3071L46.5765 21.403L43.929 34.052L30.509 35.0589L28.6831 21.0533L33.9781 18.5817Z"
                    fill="#EC4653"
                  />
                  <path
                    d="M43.7533 36.9666C44.6726 38.1813 45.0578 41.1061 45.4486 44.0152C45.4486 44.0152 28.4681 43.9237 28.3768 43.9237C28.2855 43.9237 30.9722 37.7905 30.9722 37.7905L43.7533 36.9666Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M44.3083 43.239L45.4494 44.0152C45.4494 44.0152 61.6083 42.9167 60.2389 48.043C58.8695 53.1692 54.5787 53.9931 54.5787 53.9931L37.2331 55L37.0505 52.1623C37.0505 52.1623 20.3439 55.9154 18.7919 48.2261C17.2399 40.5367 28.3777 43.9237 28.3777 43.9237L44.3083 43.239Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M37.4893 49.3245C37.4893 49.3245 37.8718 47.3106 40.6106 48.1345C43.3494 48.9584 44.9013 50.0568 44.9013 50.0568L38.3282 51.7046L37.4893 49.3245Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M44.3398 21.1906C44.3398 21.1906 47.4438 20.0921 48.6306 23.6622C49.8174 27.2322 49.5435 30.1615 49.5435 30.1615L44.9789 31.6262L44.3398 21.1906Z"
                    fill="#EC4653"
                  />
                  <path
                    d="M23.0551 43.5044L22.0591 41.745L24.2109 36.3743L25.2224 29.4603L29.4173 30.8627L28.7043 37.9296C28.6313 38.6519 28.2652 39.3256 27.7001 39.7787L23.0551 43.5053V43.5044Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M30.1895 21.1906C30.1895 21.1906 27.0855 20.0921 25.8987 23.6622C24.7119 27.2322 24.9858 30.1615 24.9858 30.1615L29.5505 31.6262L30.1895 21.1906Z"
                    fill="#EC4653"
                  />
                  <path
                    d="M52.7848 43.7552C53.9949 43.7552 54.9758 42.3003 54.9758 40.5055C54.9758 38.7108 53.9949 37.2559 52.7848 37.2559C51.5747 37.2559 50.5938 38.7108 50.5938 40.5055C50.5938 42.3003 51.5747 43.7552 52.7848 43.7552Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M22.0192 44.3045C23.2292 44.3045 24.2102 42.8495 24.2102 41.0548C24.2102 39.26 23.2292 37.8051 22.0192 37.8051C20.8091 37.8051 19.8281 39.26 19.8281 41.0548C19.8281 42.8495 20.8091 44.3045 22.0192 44.3045Z"
                    fill="#A0616A"
                  />
                  <path
                    d="M30.3857 46.4868L38.3282 48.7753L39.8802 51.5215L36.9123 52.1622"
                    fill="#2F2E41"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_138_2606">
                    <rect width="72" height="55" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h1>
                How are you <br /> feeling today?
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-3">
            <input type="checkbox" name="" id="" />

            <div className="bg-white shadow-lg p-6 rounded-2xl flex gap-3 w-full">
              <Image
                src="/images/check.png"
                width={50}
                height={30}
                alt="check"
              />

              <div>
                <h1 className="font-bold text-base">Day 1, Monday</h1>
                <p className="text-sm">Obeserving, 22nd January, 2024</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-3">
            <input type="checkbox" name="" id="" />

            <div className="bg-white shadow-lg p-6 rounded-2xl flex gap-3 w-full">
              <Image
                src="/images/check.png"
                width={50}
                height={30}
                alt="check"
              />

              <div>
                <h1 className="font-bold text-base">Day 2, Tueday</h1>
                <p className="text-sm">Obeserving, 23rd January, 2024</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-3">
            <input type="checkbox" name="" id="" />

            <div className="bg-white shadow-lg p-6 rounded-2xl flex gap-3 w-full">
              <Image
                src="/images/check.png"
                width={50}
                height={30}
                alt="check"
              />

              <div>
                <h1 className="font-bold text-base">Day 3, Wednessday</h1>
                <p className="text-sm">Obeserving, 24th January, 2024</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-3">
            <input type="checkbox" name="" id="" />

            <div className="bg-white shadow-lg p-6 rounded-2xl flex gap-3 w-full">
              <Image
                src="/images/check.png"
                width={50}
                height={30}
                alt="check"
              />

              <div>
                <h1 className="font-bold text-base">Day 4, Thursday</h1>
                <p className="text-sm">Obeserving, 25th January, 2024</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-3">
            <input type="checkbox" name="" id="" />

            <div className="bg-white shadow-lg p-6 rounded-2xl flex gap-3 w-full">
              <Image
                src="/images/check.png"
                width={50}
                height={30}
                alt="check"
              />

              <div>
                <h1 className="font-bold text-base">Day 5, Friday</h1>
                <p className="text-sm">Obeserving, 26th January, 2024</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <Link href={"./track/success"} className="button bg-secondary">
              Completed
            </Link>
            <Link
              href={"./doctorappointment"}
              className="text-sm text-secondary"
            >
              Not Observing? Schedule a doctors appointment
            </Link>
          </div>
          <div className="pb-20">.</div>
        </div>
      </section>
    </>
  );
}

export default TrackCycle;
