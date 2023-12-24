import Image from "next/image";
import Link from "next/link";

function AccountType() {
  return (
    <>
      <section className="bg-secondary w-full h-screen relative flex justify-center items-start">
        <Link
          className="bg-white rounded-full absolute left-12 top-12"
          href="/splash1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              fill="#000"
            />
            <path
              d="M13.2599 16.2802C13.0699 16.2802 12.8799 16.2102 12.7299 16.0602L9.19992 12.5302C8.90992 12.2402 8.90992 11.7602 9.19992 11.4702L12.7299 7.94016C13.0199 7.65016 13.4999 7.65016 13.7899 7.94016C14.0799 8.23016 14.0799 8.71016 13.7899 9.00016L10.7899 12.0002L13.7899 15.0002C14.0799 15.2902 14.0799 15.7702 13.7899 16.0602C13.6499 16.2102 13.4599 16.2802 13.2599 16.2802Z"
              fill="#000"
            />
          </svg>
        </Link>

        <Image
          src="/images/cyclecarelogo2.png"
          alt="logo"
          width={200}
          height={200}
          className="mt-44"
        />

        <div className="bg-white w-full md:w-2/4 absolute bottom-0 h-2/4 rounded-ss-[62px] rounded-se-[62px] flex gap-8 justify-center items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M30 31.875C22.075 31.875 15.625 25.425 15.625 17.5C15.625 9.575 22.075 3.125 30 3.125C37.925 3.125 44.375 9.575 44.375 17.5C44.375 25.425 37.925 31.875 30 31.875ZM30 6.875C24.15 6.875 19.375 11.65 19.375 17.5C19.375 23.35 24.15 28.125 30 28.125C35.85 28.125 40.625 23.35 40.625 17.5C40.625 11.65 35.85 6.875 30 6.875Z"
                fill="#202020"
              />
              <path
                d="M8.5254 56.875C7.5004 56.875 6.6504 56.025 6.6504 55C6.6504 44.325 17.1254 35.625 30.0005 35.625C32.5255 35.625 35.0003 35.95 37.4003 36.625C38.4003 36.9 38.9755 37.925 38.7005 38.925C38.4255 39.925 37.4003 40.5 36.4005 40.225C34.3505 39.65 32.2005 39.375 30.0005 39.375C19.2004 39.375 10.4004 46.375 10.4004 55C10.4004 56.025 9.5504 56.875 8.5254 56.875Z"
                fill="#202020"
              />
              <path
                d="M45 56.875C42.05 56.875 39.25 55.775 37.075 53.8C36.2 53.05 35.425 52.125 34.825 51.1C33.725 49.3 33.125 47.175 33.125 45C33.125 41.875 34.325 38.95 36.475 36.725C38.725 34.4 41.75 33.125 45 33.125C48.4 33.125 51.625 34.575 53.825 37.075C55.775 39.25 56.875 42.05 56.875 45C56.875 45.95 56.75 46.9 56.5 47.8C56.25 48.925 55.775 50.1 55.125 51.125C53.05 54.675 49.15 56.875 45 56.875ZM45 36.875C42.775 36.875 40.725 37.75 39.175 39.325C37.7 40.85 36.875 42.85 36.875 45C36.875 46.475 37.275 47.925 38.05 49.175C38.45 49.875 38.975 50.5 39.575 51.025C41.075 52.4 43 53.15 45 53.15C47.825 53.15 50.5 51.65 51.95 49.225C52.375 48.525 52.7 47.725 52.875 46.95C53.05 46.3 53.125 45.675 53.125 45.025C53.125 43.025 52.375 41.1 51.025 39.6C49.525 37.85 47.325 36.875 45 36.875Z"
                fill="#202020"
              />
              <path
                d="M48.7495 46.825H41.2745C40.2495 46.825 39.3995 45.975 39.3995 44.95C39.3995 43.925 40.2495 43.075 41.2745 43.075H48.7495C49.7745 43.075 50.6245 43.925 50.6245 44.95C50.6245 45.975 49.7745 46.825 48.7495 46.825Z"
                fill="#202020"
              />
              <path
                d="M45 50.65C43.975 50.65 43.125 49.8 43.125 48.775V41.3C43.125 40.275 43.975 39.425 45 39.425C46.025 39.425 46.875 40.275 46.875 41.3V48.775C46.875 49.825 46.025 50.65 45 50.65Z"
                fill="#202020"
              />
            </svg>
            As a User
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M31.2492 56.8755H10.1993C6.27432 56.8755 3.04932 53.7255 3.04932 49.8255V12.7255C3.04932 8.90047 4.47432 5.92547 7.07432 4.30047C9.69932 2.65047 13.0993 2.70047 16.6243 4.45047L27.7242 9.90047C30.7492 11.4005 33.1242 15.1755 33.1242 18.5255V55.0005C33.1242 56.0255 32.2742 56.8755 31.2492 56.8755ZM11.3993 6.87547C10.5243 6.87547 9.72432 7.07547 9.04932 7.50047C7.59932 8.40047 6.79932 10.2755 6.79932 12.7255V49.8255C6.79932 51.6505 8.32432 53.1255 10.1993 53.1255H29.3742V18.5255C29.3742 16.6005 27.8242 14.1255 26.0492 13.2755L14.9493 7.82547C13.6743 7.20047 12.4743 6.87547 11.3993 6.87547Z"
                fill="#202020"
              />
              <path
                d="M47.025 56.8745H31.25C30.225 56.8745 29.375 56.0245 29.375 54.9995V26.0495C29.375 25.4745 29.625 24.9494 30.075 24.5994C30.525 24.2494 31.075 24.0994 31.65 24.2244L32.825 24.4744L49.175 28.1245C54.15 29.2245 56.65 32.1495 56.8 37.1245C56.825 37.1245 56.825 37.3745 56.825 37.6495V47.0995C56.8 53.4995 53.425 56.8745 47.025 56.8745ZM33.125 53.1245H47.025C51.425 53.1245 53.05 51.4995 53.05 47.0995V37.4495C52.925 34.0245 51.625 32.4995 48.35 31.7745L33.125 28.3745V53.1245Z"
                fill="#202020"
              />
              <path
                d="M22.425 24.375H13.75C12.725 24.375 11.875 23.525 11.875 22.5C11.875 21.475 12.725 20.625 13.75 20.625H22.425C23.45 20.625 24.3 21.475 24.3 22.5C24.3 23.525 23.475 24.375 22.425 24.375Z"
                fill="#202020"
              />
              <path
                d="M22.425 34.375H13.75C12.725 34.375 11.875 33.525 11.875 32.5C11.875 31.475 12.725 30.625 13.75 30.625H22.425C23.45 30.625 24.3 31.475 24.3 32.5C24.3 33.525 23.475 34.375 22.425 34.375Z"
                fill="#202020"
              />
              <path
                d="M38.0492 44.375C33.9242 44.375 30.5492 41 30.5492 36.875V26.3C30.5492 25.725 30.7992 25.2 31.2492 24.825C31.6992 24.45 32.2742 24.325 32.8242 24.45L44.0742 26.975C44.9242 27.175 45.5492 27.925 45.5492 28.8V36.85C45.5492 41 42.1992 44.375 38.0492 44.375ZM34.2992 28.65V36.875C34.2992 38.95 35.9742 40.625 38.0492 40.625C40.1242 40.625 41.7992 38.95 41.7992 36.875V30.325L34.2992 28.65Z"
                fill="#202020"
              />
              <path
                d="M49.2992 44.3752C45.1742 44.3752 41.7992 41.0002 41.7992 36.8752V28.8252C41.7992 28.2502 42.0492 27.7252 42.4992 27.3752C42.9492 27.0252 43.5242 26.8752 44.0742 27.0002L49.1493 28.1252C54.1243 29.2252 56.6243 32.1502 56.7743 37.1252C56.7743 37.1752 56.7743 37.2252 56.7743 37.2752C56.5742 41.2502 53.2992 44.3752 49.2992 44.3752ZM45.5492 31.1502V36.8752C45.5492 38.9502 47.2242 40.6252 49.2992 40.6252C51.2742 40.6252 52.8992 39.1002 53.0242 37.1502C52.8992 34.0002 51.5993 32.5002 48.3493 31.7752L45.5492 31.1502Z"
                fill="#202020"
              />
            </svg>
            As a Donor
          </button>
        </div>
      </section>
    </>
  );
}

export default AccountType;