import Link from "next/link";

function Navigation() {
  return (
    <>
      <section className="fixed bottom-0 bg-secondary w-full p-8 flex gap-14 justify-center ">
        <Link
          href={`/`}
          className="flex flex-col items-center text-accent text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.6666 18.8001H5.33321C3.81654 18.8001 2.43321 17.6334 2.18321 16.1334L1.07487 9.50007C0.89987 8.46674 1.39988 7.14175 2.22488 6.48342L7.99989 1.85837C9.11659 0.958374 10.8748 0.966716 11.9998 1.86672L17.7749 6.48342C18.5916 7.14175 19.0916 8.46674 18.9249 9.50007L17.8166 16.1334C17.5666 17.6084 16.1583 18.8001 14.6666 18.8001ZM9.99159 2.45006C9.54992 2.45006 9.10817 2.58337 8.78317 2.8417L3.00821 7.46674C2.53321 7.85007 2.20822 8.70007 2.30822 9.30007L3.41655 15.9334C3.56655 16.8084 4.44154 17.5501 5.33321 17.5501H14.6666C15.5583 17.5501 16.4332 16.8084 16.5832 15.9251L17.6915 9.29174C17.7915 8.69174 17.4583 7.8334 16.9916 7.4584L11.2166 2.8417C10.8833 2.58337 10.4416 2.45006 9.99159 2.45006Z"
              fill="#EC4653"
            />
            <path
              d="M10.0001 13.5417C8.50841 13.5417 7.29175 12.325 7.29175 10.8333C7.29175 9.34167 8.50841 8.125 10.0001 8.125C11.4917 8.125 12.7084 9.34167 12.7084 10.8333C12.7084 12.325 11.4917 13.5417 10.0001 13.5417ZM10.0001 9.375C9.20008 9.375 8.54175 10.0333 8.54175 10.8333C8.54175 11.6333 9.20008 12.2917 10.0001 12.2917C10.8001 12.2917 11.4584 11.6333 11.4584 10.8333C11.4584 10.0333 10.8001 9.375 10.0001 9.375Z"
              fill="#EC4653"
            />
          </svg>
          Home
        </Link>
        <Link
          href={`/`}
          className="flex flex-col items-center text-white text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M4.59105 19.0167C3.68272 19.0167 2.90772 18.725 2.34105 18.1583C1.53272 17.35 1.28272 16.1167 1.64105 14.6833L3.70772 6.40835C4.06605 4.97502 5.46605 3.58335 6.89105 3.22502L15.1661 1.15835C16.5994 0.800023 17.8328 1.05002 18.6411 1.85835C19.4494 2.66669 19.6994 3.90002 19.3411 5.33335L17.2744 13.6083C16.9161 15.0417 15.5161 16.4333 14.0911 16.7917L5.81605 18.8583C5.39105 18.9583 4.98272 19.0167 4.59105 19.0167ZM15.4828 2.35835L7.20772 4.43335C6.23272 4.67502 5.17438 5.73335 4.92438 6.70835L2.85772 14.9833C2.60772 15.975 2.74105 16.7833 3.22438 17.275C3.70772 17.7583 4.52438 17.8917 5.51605 17.6417L13.7911 15.575C14.7661 15.3333 15.8244 14.2667 16.0661 13.3L18.1328 5.02502C18.3828 4.03335 18.2494 3.22502 17.7661 2.73335C17.2828 2.24169 16.4744 2.11669 15.4828 2.35835Z"
              fill="#FBFBFB"
            />
            <path
              d="M10.4999 13.5417C8.54992 13.5417 6.95825 11.95 6.95825 10C6.95825 8.05001 8.54992 6.45834 10.4999 6.45834C12.4499 6.45834 14.0416 8.05001 14.0416 10C14.0416 11.95 12.4499 13.5417 10.4999 13.5417ZM10.4999 7.70834C9.23325 7.70834 8.20825 8.73334 8.20825 10C8.20825 11.2667 9.23325 12.2917 10.4999 12.2917C11.7666 12.2917 12.7916 11.2667 12.7916 10C12.7916 8.73334 11.7666 7.70834 10.4999 7.70834Z"
              fill="#FBFBFB"
            />
          </svg>
          Explore
        </Link>

        <Link
          href={`/`}
          className="flex flex-col items-center text-white text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M15.5 10.625H5.5C5.15833 10.625 4.875 10.3417 4.875 10C4.875 9.65833 5.15833 9.375 5.5 9.375H15.5C15.8417 9.375 16.125 9.65833 16.125 10C16.125 10.3417 15.8417 10.625 15.5 10.625Z"
              fill="#FBFBFB"
            />
            <path
              d="M10.5 15.625C10.1583 15.625 9.875 15.3417 9.875 15V5C9.875 4.65833 10.1583 4.375 10.5 4.375C10.8417 4.375 11.125 4.65833 11.125 5V15C11.125 15.3417 10.8417 15.625 10.5 15.625Z"
              fill="#FBFBFB"
            />
          </svg>
          Upload
        </Link>
        <Link
          href={`/profile/account`}
          className="flex flex-col items-center text-white text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M10.6004 11.275C10.5837 11.275 10.5587 11.275 10.5421 11.275C10.5171 11.275 10.4837 11.275 10.4587 11.275C8.56706 11.2167 7.15039 9.74167 7.15039 7.92498C7.15039 6.07498 8.65872 4.56665 10.5087 4.56665C12.3587 4.56665 13.8671 6.07498 13.8671 7.92498C13.8587 9.75 12.4337 11.2167 10.6254 11.275C10.6087 11.275 10.6087 11.275 10.6004 11.275ZM10.5004 5.80832C9.33375 5.80832 8.39206 6.75832 8.39206 7.91665C8.39206 9.05833 9.28375 9.98333 10.4171 10.025C10.4421 10.0167 10.5254 10.0167 10.6087 10.025C11.7254 9.96667 12.6004 9.05 12.6087 7.91665C12.6087 6.75832 11.6671 5.80832 10.5004 5.80832Z"
              fill="#FBFBFB"
            />
            <path
              d="M10.5008 18.9584C8.25909 18.9584 6.11743 18.1251 4.45909 16.6084C4.30909 16.4751 4.24243 16.2751 4.25909 16.0834C4.36743 15.0917 4.98409 14.1667 6.00909 13.4834C8.49243 11.8334 12.5174 11.8334 14.9924 13.4834C16.0174 14.1751 16.6341 15.0917 16.7424 16.0834C16.7674 16.2834 16.6924 16.4751 16.5424 16.6084C14.8841 18.1251 12.7424 18.9584 10.5008 18.9584ZM5.56743 15.9167C6.95076 17.0751 8.69243 17.7084 10.5008 17.7084C12.3091 17.7084 14.0508 17.0751 15.4341 15.9167C15.2841 15.4084 14.8841 14.9167 14.2924 14.5167C12.2424 13.1501 8.76743 13.1501 6.70076 14.5167C6.10909 14.9167 5.71743 15.4084 5.56743 15.9167Z"
              fill="#FBFBFB"
            />
            <path
              d="M10.5001 18.9583C5.55842 18.9583 1.54175 14.9417 1.54175 9.99999C1.54175 5.05832 5.55842 1.04166 10.5001 1.04166C15.4417 1.04166 19.4584 5.05832 19.4584 9.99999C19.4584 14.9417 15.4417 18.9583 10.5001 18.9583ZM10.5001 2.29166C6.25008 2.29166 2.79175 5.74999 2.79175 9.99999C2.79175 14.25 6.25008 17.7083 10.5001 17.7083C14.7501 17.7083 18.2084 14.25 18.2084 9.99999C18.2084 5.74999 14.7501 2.29166 10.5001 2.29166Z"
              fill="#FBFBFB"
            />
          </svg>
          Profile
        </Link>

        <div className="flex gap-3 absolute -top-8 right-7 items-center">
          <div className="py-3 px-8 bg-white rounded-3xl">
            <p className="text-sm text-gray-300">CycleCare AI Assitant</p>
          </div>

          <div className="p-4 bg-accent rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.45505 15.6657C7.99766 15.6657 7.56679 15.4337 7.26187 15.0294L6.26755 13.7036C6.24766 13.6771 6.16812 13.6439 6.13497 13.6373H5.80353C3.03933 13.6373 1.3291 12.8883 1.3291 9.16288V5.84849C1.3291 2.91856 2.87361 1.37405 5.80353 1.37405H11.1066C14.0365 1.37405 15.581 2.91856 15.581 5.84849V9.16288C15.581 12.0928 14.0365 13.6373 11.1066 13.6373H10.7751C10.7221 13.6373 10.6757 13.6638 10.6425 13.7036L9.64823 15.0294C9.34331 15.4337 8.91244 15.6657 8.45505 15.6657ZM5.80353 2.36837C3.43043 2.36837 2.32342 3.47538 2.32342 5.84849V9.16288C2.32342 12.1591 3.35088 12.643 5.80353 12.643H6.13497C6.47304 12.643 6.85751 12.8352 7.063 13.107L8.05732 14.4328C8.28933 14.7377 8.62077 14.7377 8.85278 14.4328L9.84709 13.107C10.0658 12.8153 10.4105 12.643 10.7751 12.643H11.1066C13.4797 12.643 14.5867 11.536 14.5867 9.16288V5.84849C14.5867 3.47538 13.4797 2.36837 11.1066 2.36837H5.80353Z"
                fill="#FBFBFB"
              />
              <path
                d="M8.45487 8.49998C8.08366 8.49998 7.79199 8.20169 7.79199 7.8371C7.79199 7.47252 8.09029 7.17422 8.45487 7.17422C8.81945 7.17422 9.11775 7.47252 9.11775 7.8371C9.11775 8.20169 8.82608 8.49998 8.45487 8.49998Z"
                fill="#FBFBFB"
              />
              <path
                d="M11.1062 8.49998C10.735 8.49998 10.4434 8.20169 10.4434 7.8371C10.4434 7.47252 10.7417 7.17422 11.1062 7.17422C11.4708 7.17422 11.7691 7.47252 11.7691 7.8371C11.7691 8.20169 11.4775 8.49998 11.1062 8.49998Z"
                fill="#FBFBFB"
              />
              <path
                d="M5.80253 8.49998C5.43132 8.49998 5.13965 8.20169 5.13965 7.8371C5.13965 7.47252 5.43794 7.17422 5.80253 7.17422C6.16711 7.17422 6.46541 7.47252 6.46541 7.8371C6.46541 8.20169 6.17374 8.49998 5.80253 8.49998Z"
                fill="#FBFBFB"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navigation;
