"use client";

import Image from "next/image";
import Link from "next/link";
import profile from "@/public/images/user_placeholder.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

function Account() {
  const [user] = useAuthState(auth);
  return (
    <>
      <section className="w-full md:w-2/4 mx-auto bg-accent h-screen flex items-end">
        <div className="bg-white w-full h-3/4 p-12 relative rounded-s-2xl rounded-e-2xl">
          <div className="absolute -top-10 w-3/4 mx-auto flex flex-col items-center">
            <div className="rounded-full border-4 border-white ">
              <Image
                src={profile}
                alt="profile"
                height={90}
                width={90}
                className="object-cover rounded-full"
              />
            </div>

            <h1 className="text-2xl font-bold">{user?.email.split("@")[0]}</h1>
            <p className="text-camera text-accent">Edit Profile</p>
          </div>

          <div className="mt-32">
            <div className="flex justify-between items-center py-4">
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.30677 15.1667C8.19344 15.1667 8.0801 15.1667 7.96677 15.1601C4.23346 14.9934 1.11346 11.9867 0.853462 8.32007C0.626793 5.17341 2.4468 2.23341 5.38013 1.00008C6.21346 0.653411 6.65346 0.920075 6.8401 1.11341C7.02677 1.30008 7.28677 1.73341 6.9401 2.52674C6.63346 3.23341 6.48013 3.98674 6.4868 4.76008C6.50013 7.7134 8.95344 10.2201 11.9468 10.3401C12.3801 10.3601 12.8068 10.3267 13.2201 10.2534C14.1001 10.0934 14.4668 10.4467 14.6068 10.6734C14.7468 10.9001 14.9068 11.3867 14.3734 12.1067C12.9601 14.0401 10.7134 15.1667 8.30677 15.1667ZM1.8468 8.24674C2.07346 11.4201 4.78013 14.0201 8.00677 14.1601C10.2001 14.2667 12.2801 13.2667 13.5601 11.5201C13.6601 11.3801 13.7068 11.2801 13.7268 11.2267C13.6668 11.2201 13.5601 11.2134 13.3934 11.2467C12.9068 11.3334 12.4001 11.3667 11.9001 11.3467C8.3801 11.2067 5.50013 8.2534 5.48013 4.77341C5.48013 3.85341 5.66013 2.96674 6.0268 2.13341C6.09346 1.98674 6.1068 1.88674 6.11346 1.83341C6.05346 1.83341 5.9468 1.84674 5.77346 1.92008C3.23346 2.98674 1.66013 5.53341 1.8468 8.24674Z"
                    fill="#202020"
                  />
                </svg>

                <p>Dark Mode</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.3335 13.8333H6.66683C3.44683 13.8333 0.833496 11.2133 0.833496 8C0.833496 4.78666 3.44683 2.16666 6.66683 2.16666H9.3335C12.5535 2.16666 15.1668 4.78666 15.1668 8C15.1668 11.2133 12.5535 13.8333 9.3335 13.8333ZM6.66683 3.16666C4.00016 3.16666 1.8335 5.33333 1.8335 8C1.8335 10.6667 4.00016 12.8333 6.66683 12.8333H9.3335C12.0002 12.8333 14.1668 10.6667 14.1668 8C14.1668 5.33333 12.0002 3.16666 9.3335 3.16666H6.66683Z"
                  fill="#202020"
                />
                <path
                  d="M6.66667 11.1667C4.92 11.1667 3.5 9.74667 3.5 8C3.5 6.25333 4.92 4.83333 6.66667 4.83333C8.41333 4.83333 9.83333 6.25333 9.83333 8C9.83333 9.74667 8.41333 11.1667 6.66667 11.1667ZM6.66667 5.83333C5.47333 5.83333 4.5 6.80667 4.5 8C4.5 9.19333 5.47333 10.1667 6.66667 10.1667C7.86 10.1667 8.83333 9.19333 8.83333 8C8.83333 6.80667 7.86 5.83333 6.66667 5.83333Z"
                  fill="#202020"
                />
              </svg>
            </div>

            <div className="flex justify-between items-center py-4">
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.0131 13.6866C6.45975 13.6866 4.90642 13.4399 3.43308 12.9466C2.87308 12.7533 2.44642 12.3599 2.25975 11.8466C2.06642 11.3333 2.13308 10.7666 2.43975 10.2599L3.20642 8.9866C3.36642 8.71993 3.51308 8.1866 3.51308 7.87327V5.94661C3.51308 3.46661 5.53308 1.44661 8.0131 1.44661C10.4931 1.44661 12.5131 3.46661 12.5131 5.94661V7.87327C12.5131 8.17993 12.6598 8.71993 12.8198 8.99327L13.5798 10.2599C13.8664 10.7399 13.9198 11.3199 13.7264 11.8466C13.5331 12.3733 13.1131 12.7733 12.5864 12.9466C11.1198 13.4399 9.56644 13.6866 8.0131 13.6866ZM8.0131 2.44661C6.08642 2.44661 4.51308 4.01328 4.51308 5.94661V7.87327C4.51308 8.35993 4.31308 9.07993 4.06642 9.49993L3.29975 10.7733C3.15308 11.0199 3.11308 11.2799 3.19975 11.4999C3.27975 11.7266 3.47975 11.8999 3.75308 11.9933C6.53975 12.9266 9.4931 12.9266 12.2798 11.9933C12.5198 11.9133 12.7064 11.7333 12.7931 11.4933C12.8798 11.2533 12.8598 10.9933 12.7264 10.7733L11.9598 9.49993C11.7064 9.0666 11.5131 8.35327 11.5131 7.8666V5.94661C11.5131 4.01328 9.94644 2.44661 8.0131 2.44661Z"
                    fill="#202020"
                  />
                  <path
                    d="M9.25306 2.62679C9.2064 2.62679 9.15973 2.62012 9.11306 2.60679C8.91973 2.55345 8.73306 2.51345 8.55306 2.48679C7.9864 2.41345 7.43973 2.45345 6.9264 2.60679C6.73973 2.66679 6.53975 2.60679 6.41308 2.46679C6.28642 2.32679 6.24642 2.12679 6.31975 1.94679C6.59308 1.24679 7.25973 0.786787 8.01973 0.786787C8.77973 0.786787 9.4464 1.24012 9.71973 1.94679C9.7864 2.12679 9.75306 2.32679 9.6264 2.46679C9.5264 2.57345 9.3864 2.62679 9.25306 2.62679Z"
                    fill="#202020"
                  />
                  <path
                    d="M8.01316 15.2067C7.35316 15.2067 6.71316 14.9401 6.24652 14.4734C5.77985 14.0067 5.51318 13.3667 5.51318 12.7067H6.51318C6.51318 13.1001 6.67316 13.4867 6.95316 13.7667C7.23316 14.0467 7.61983 14.2067 8.01316 14.2067C8.83983 14.2067 9.51316 13.5334 9.51316 12.7067H10.5132C10.5132 14.0867 9.39316 15.2067 8.01316 15.2067Z"
                    fill="#202020"
                  />
                </svg>

                <Link href="/">Notification Settings</Link>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_94_1538)">
                  <path
                    d="M10.0002 15.1667H6.00016C2.38016 15.1667 0.833496 13.62 0.833496 10V6C0.833496 2.38 2.38016 0.833333 6.00016 0.833333H10.0002C13.6202 0.833333 15.1668 2.38 15.1668 6V10C15.1668 13.62 13.6202 15.1667 10.0002 15.1667ZM6.00016 1.83333C2.92683 1.83333 1.8335 2.92667 1.8335 6V10C1.8335 13.0733 2.92683 14.1667 6.00016 14.1667H10.0002C13.0735 14.1667 14.1668 13.0733 14.1668 10V6C14.1668 2.92667 13.0735 1.83333 10.0002 1.83333H6.00016Z"
                    fill="#202020"
                  />
                  <path
                    d="M7.15996 10.8535C7.03329 10.8535 6.90663 10.8068 6.80663 10.7068C6.61329 10.5135 6.61329 10.1935 6.80663 10.0001L8.80663 8.00013L6.80663 6.00011C6.61329 5.80677 6.61329 5.48677 6.80663 5.29344C6.99996 5.10011 7.31996 5.10011 7.51329 5.29344L9.86663 7.6468C10.06 7.84013 10.06 8.16013 9.86663 8.35347L7.51329 10.7068C7.41329 10.8068 7.28663 10.8535 7.15996 10.8535Z"
                    fill="#202020"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_1538">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex justify-between items-center py-4">
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.99984 8.5C5.8865 8.5 4.1665 6.78 4.1665 4.66667C4.1665 2.55333 5.8865 0.833332 7.99984 0.833332C10.1132 0.833332 11.8332 2.55333 11.8332 4.66667C11.8332 6.78 10.1132 8.5 7.99984 8.5ZM7.99984 1.83333C6.43984 1.83333 5.1665 3.10667 5.1665 4.66667C5.1665 6.22667 6.43984 7.5 7.99984 7.5C9.55984 7.5 10.8332 6.22667 10.8332 4.66667C10.8332 3.10667 9.55984 1.83333 7.99984 1.83333Z"
                    fill="#202020"
                  />
                  <path
                    d="M13.7267 15.1667C13.4534 15.1667 13.2267 14.94 13.2267 14.6667C13.2267 12.3667 10.8801 10.5 8.00013 10.5C5.1201 10.5 2.77344 12.3667 2.77344 14.6667C2.77344 14.94 2.54677 15.1667 2.27344 15.1667C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56676 9.5 8.00013 9.5C11.4335 9.5 14.2267 11.82 14.2267 14.6667C14.2267 14.94 14.0001 15.1667 13.7267 15.1667Z"
                    fill="#202020"
                  />
                </svg>

                <Link href="/">Account preferences</Link>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_94_1538)">
                  <path
                    d="M10.0002 15.1667H6.00016C2.38016 15.1667 0.833496 13.62 0.833496 10V6C0.833496 2.38 2.38016 0.833333 6.00016 0.833333H10.0002C13.6202 0.833333 15.1668 2.38 15.1668 6V10C15.1668 13.62 13.6202 15.1667 10.0002 15.1667ZM6.00016 1.83333C2.92683 1.83333 1.8335 2.92667 1.8335 6V10C1.8335 13.0733 2.92683 14.1667 6.00016 14.1667H10.0002C13.0735 14.1667 14.1668 13.0733 14.1668 10V6C14.1668 2.92667 13.0735 1.83333 10.0002 1.83333H6.00016Z"
                    fill="#202020"
                  />
                  <path
                    d="M7.15996 10.8535C7.03329 10.8535 6.90663 10.8068 6.80663 10.7068C6.61329 10.5135 6.61329 10.1935 6.80663 10.0001L8.80663 8.00013L6.80663 6.00011C6.61329 5.80677 6.61329 5.48677 6.80663 5.29344C6.99996 5.10011 7.31996 5.10011 7.51329 5.29344L9.86663 7.6468C10.06 7.84013 10.06 8.16013 9.86663 8.35347L7.51329 10.7068C7.41329 10.8068 7.28663 10.8535 7.15996 10.8535Z"
                    fill="#202020"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_1538">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex justify-between items-center py-4">
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00003 15.1667C7.84003 15.1667 7.6801 15.1467 7.52676 15.1001C4.06674 14.1467 1.56006 10.9133 1.56006 7.40667V4.48002C1.56006 3.73335 2.10007 2.92672 2.7934 2.64006L6.50674 1.12004C7.47343 0.726702 8.53337 0.726702 9.49337 1.12004L13.2067 2.64006C13.9 2.92672 14.4401 3.73335 14.4401 4.48002V7.40667C14.4401 10.9067 11.9267 14.1401 8.47336 15.1001C8.32003 15.1467 8.16003 15.1667 8.00003 15.1667ZM8.00003 1.83338C7.62003 1.83338 7.2467 1.90672 6.8867 2.05338L3.17341 3.57336C2.85341 3.7067 2.56006 4.14003 2.56006 4.4867V7.4134C2.56006 10.4734 4.76007 13.3001 7.79337 14.1401C7.9267 14.1801 8.07337 14.1801 8.2067 14.1401C11.24 13.3001 13.4401 10.4734 13.4401 7.4134V4.4867C13.4401 4.14003 13.1467 3.7067 12.8267 3.57336L9.11343 2.05338C8.75343 1.90672 8.38003 1.83338 8.00003 1.83338Z"
                    fill="#202020"
                  />
                </svg>

                <Link href="/">Security</Link>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_94_1538)">
                  <path
                    d="M10.0002 15.1667H6.00016C2.38016 15.1667 0.833496 13.62 0.833496 10V6C0.833496 2.38 2.38016 0.833333 6.00016 0.833333H10.0002C13.6202 0.833333 15.1668 2.38 15.1668 6V10C15.1668 13.62 13.6202 15.1667 10.0002 15.1667ZM6.00016 1.83333C2.92683 1.83333 1.8335 2.92667 1.8335 6V10C1.8335 13.0733 2.92683 14.1667 6.00016 14.1667H10.0002C13.0735 14.1667 14.1668 13.0733 14.1668 10V6C14.1668 2.92667 13.0735 1.83333 10.0002 1.83333H6.00016Z"
                    fill="#202020"
                  />
                  <path
                    d="M7.15996 10.8535C7.03329 10.8535 6.90663 10.8068 6.80663 10.7068C6.61329 10.5135 6.61329 10.1935 6.80663 10.0001L8.80663 8.00013L6.80663 6.00011C6.61329 5.80677 6.61329 5.48677 6.80663 5.29344C6.99996 5.10011 7.31996 5.10011 7.51329 5.29344L9.86663 7.6468C10.06 7.84013 10.06 8.16013 9.86663 8.35347L7.51329 10.7068C7.41329 10.8068 7.28663 10.8535 7.15996 10.8535Z"
                    fill="#202020"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_1538">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex justify-between items-center py-4">
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6.10719 7.74666C6.08719 7.74666 6.07386 7.74666 6.05386 7.74666C6.02053 7.73999 5.97386 7.73999 5.93386 7.74666C4.00053 7.68666 2.54053 6.16666 2.54053 4.29333C2.54053 2.38666 4.09386 0.833328 6.00053 0.833328C7.90716 0.833328 9.46049 2.38666 9.46049 4.29333C9.45383 6.16666 7.98716 7.68666 6.12719 7.74666C6.12053 7.74666 6.11386 7.74666 6.10719 7.74666ZM6.00053 1.83333C4.64719 1.83333 3.54053 2.93999 3.54053 4.29333C3.54053 5.62666 4.58053 6.69999 5.90719 6.74666C5.94719 6.73999 6.03386 6.73999 6.12053 6.74666C7.42716 6.68666 8.45383 5.61333 8.46049 4.29333C8.46049 2.93999 7.35383 1.83333 6.00053 1.83333Z"
                    fill="#202020"
                  />
                  <path
                    d="M11.0271 7.83334C11.0071 7.83334 10.9871 7.83334 10.9671 7.82667C10.6937 7.85334 10.4137 7.66001 10.3871 7.38667C10.3604 7.11334 10.5271 6.86667 10.8004 6.83334C10.8804 6.82667 10.9671 6.82667 11.0404 6.82667C12.0137 6.77334 12.7737 5.97334 12.7737 4.99334C12.7737 3.98001 11.9537 3.16 10.9404 3.16C10.6671 3.16667 10.4404 2.94001 10.4404 2.66667C10.4404 2.39334 10.6671 2.16667 10.9404 2.16667C12.5004 2.16667 13.7737 3.44001 13.7737 5.00001C13.7737 6.53334 12.5737 7.77334 11.0471 7.83334C11.0404 7.83334 11.0337 7.83334 11.0271 7.83334Z"
                    fill="#202020"
                  />
                  <path
                    d="M6.11307 15.0333C4.80641 15.0333 3.49307 14.7 2.49974 14.0333C1.57307 13.42 1.06641 12.58 1.06641 11.6667C1.06641 10.7533 1.57307 9.90667 2.49974 9.28667C4.49974 7.96001 7.73973 7.96001 9.7264 9.28667C10.6464 9.90001 11.1597 10.74 11.1597 11.6533C11.1597 12.5667 10.6531 13.4133 9.7264 14.0333C8.7264 14.7 7.41973 15.0333 6.11307 15.0333ZM3.05307 10.1267C2.41307 10.5533 2.06641 11.1 2.06641 11.6733C2.06641 12.24 2.41974 12.7867 3.05307 13.2067C4.71307 14.32 7.51307 14.32 9.17307 13.2067C9.81307 12.78 10.1597 12.2333 10.1597 11.66C10.1597 11.0933 9.8064 10.5467 9.17307 10.1267C7.51307 9.02 4.71307 9.02 3.05307 10.1267Z"
                    fill="#202020"
                  />
                  <path
                    d="M12.2268 13.8333C11.9934 13.8333 11.7868 13.6733 11.7401 13.4333C11.6868 13.16 11.8601 12.9 12.1268 12.84C12.5468 12.7533 12.9334 12.5867 13.2334 12.3533C13.6134 12.0667 13.8201 11.7067 13.8201 11.3267C13.8201 10.9467 13.6134 10.5867 13.2401 10.3067C12.9468 10.08 12.5801 9.92 12.1468 9.82C11.8801 9.76 11.7068 9.49333 11.7668 9.22C11.8268 8.95333 12.0934 8.78 12.3668 8.84C12.9401 8.96666 13.4401 9.19333 13.8468 9.50666C14.4668 9.97333 14.8201 10.6333 14.8201 11.3267C14.8201 12.02 14.4601 12.68 13.8401 13.1533C13.4268 13.4733 12.9068 13.7067 12.3334 13.82C12.2934 13.8333 12.2601 13.8333 12.2268 13.8333Z"
                    fill="#202020"
                  />
                </svg>

                <Link href="/">Contact us</Link>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_94_1538)">
                  <path
                    d="M10.0002 15.1667H6.00016C2.38016 15.1667 0.833496 13.62 0.833496 10V6C0.833496 2.38 2.38016 0.833333 6.00016 0.833333H10.0002C13.6202 0.833333 15.1668 2.38 15.1668 6V10C15.1668 13.62 13.6202 15.1667 10.0002 15.1667ZM6.00016 1.83333C2.92683 1.83333 1.8335 2.92667 1.8335 6V10C1.8335 13.0733 2.92683 14.1667 6.00016 14.1667H10.0002C13.0735 14.1667 14.1668 13.0733 14.1668 10V6C14.1668 2.92667 13.0735 1.83333 10.0002 1.83333H6.00016Z"
                    fill="#202020"
                  />
                  <path
                    d="M7.15996 10.8535C7.03329 10.8535 6.90663 10.8068 6.80663 10.7068C6.61329 10.5135 6.61329 10.1935 6.80663 10.0001L8.80663 8.00013L6.80663 6.00011C6.61329 5.80677 6.61329 5.48677 6.80663 5.29344C6.99996 5.10011 7.31996 5.10011 7.51329 5.29344L9.86663 7.6468C10.06 7.84013 10.06 8.16013 9.86663 8.35347L7.51329 10.7068C7.41329 10.8068 7.28663 10.8535 7.15996 10.8535Z"
                    fill="#202020"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_1538">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex justify-between items-center py-4">
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M11.6272 10.2466C11.5006 10.2466 11.3739 10.1999 11.2739 10.0999C11.0806 9.9066 11.0806 9.5866 11.2739 9.39327L12.6272 8.03993L11.2739 6.6866C11.0806 6.49329 11.0806 6.17329 11.2739 5.97996C11.4672 5.78663 11.7872 5.78663 11.9806 5.97996L13.6872 7.6866C13.8806 7.87993 13.8806 8.19993 13.6872 8.39327L11.9806 10.0999C11.8806 10.1999 11.7539 10.2466 11.6272 10.2466Z"
                    fill="#202020"
                  />
                  <path
                    d="M13.2864 8.54007H6.50635C6.23301 8.54007 6.00635 8.3134 6.00635 8.04007C6.00635 7.76674 6.23301 7.54007 6.50635 7.54007H13.2864C13.5597 7.54007 13.7864 7.76674 13.7864 8.04007C13.7864 8.3134 13.5597 8.54007 13.2864 8.54007Z"
                    fill="#202020"
                  />
                  <path
                    d="M7.8397 13.8333C4.40635 13.8333 2.00635 11.4333 2.00635 8C2.00635 4.56667 4.40635 2.16667 7.8397 2.16667C8.11303 2.16667 8.3397 2.39334 8.3397 2.66667C8.3397 2.94001 8.11303 3.16667 7.8397 3.16667C4.99301 3.16667 3.00635 5.15334 3.00635 8C3.00635 10.8467 4.99301 12.8333 7.8397 12.8333C8.11303 12.8333 8.3397 13.06 8.3397 13.3333C8.3397 13.6067 8.11303 13.8333 7.8397 13.8333Z"
                    fill="#202020"
                  />
                </svg>

                <Link href="/">Log Out s</Link>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_94_1538)">
                  <path
                    d="M10.0002 15.1667H6.00016C2.38016 15.1667 0.833496 13.62 0.833496 10V6C0.833496 2.38 2.38016 0.833333 6.00016 0.833333H10.0002C13.6202 0.833333 15.1668 2.38 15.1668 6V10C15.1668 13.62 13.6202 15.1667 10.0002 15.1667ZM6.00016 1.83333C2.92683 1.83333 1.8335 2.92667 1.8335 6V10C1.8335 13.0733 2.92683 14.1667 6.00016 14.1667H10.0002C13.0735 14.1667 14.1668 13.0733 14.1668 10V6C14.1668 2.92667 13.0735 1.83333 10.0002 1.83333H6.00016Z"
                    fill="#202020"
                  />
                  <path
                    d="M7.15996 10.8535C7.03329 10.8535 6.90663 10.8068 6.80663 10.7068C6.61329 10.5135 6.61329 10.1935 6.80663 10.0001L8.80663 8.00013L6.80663 6.00011C6.61329 5.80677 6.61329 5.48677 6.80663 5.29344C6.99996 5.10011 7.31996 5.10011 7.51329 5.29344L9.86663 7.6468C10.06 7.84013 10.06 8.16013 9.86663 8.35347L7.51329 10.7068C7.41329 10.8068 7.28663 10.8535 7.15996 10.8535Z"
                    fill="#202020"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_94_1538">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
