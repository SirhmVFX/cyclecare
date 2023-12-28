import Link from "next/link";
import Button from "../components/Button";

function UserSignUp() {
  return (
    <>
      <section className="w-full md:w-2/4 mx-auto h-screen p-8">
        <div className=" flex flex-col items-center py-4">
          <h1 className="font-bold text-2xl">Sign up</h1>
          <p>Enter your details below to get started</p>
        </div>

        <form>
          <div>
            <label htmlFor="" className="text-sm" aria-required>
              First Name *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.1004 11.275C10.0837 11.275 10.0587 11.275 10.0421 11.275C10.0171 11.275 9.98375 11.275 9.95875 11.275C8.06706 11.2167 6.65039 9.74167 6.65039 7.92498C6.65039 6.07498 8.15872 4.56665 10.0087 4.56665C11.8587 4.56665 13.3671 6.07498 13.3671 7.92498C13.3587 9.75 11.9337 11.2167 10.1254 11.275C10.1087 11.275 10.1087 11.275 10.1004 11.275ZM10.0004 5.80832C8.83375 5.80832 7.89206 6.75832 7.89206 7.91665C7.89206 9.05833 8.78375 9.98333 9.91708 10.025C9.94208 10.0167 10.0254 10.0167 10.1087 10.025C11.2254 9.96667 12.1004 9.05 12.1087 7.91665C12.1087 6.75832 11.1671 5.80832 10.0004 5.80832Z"
                  fill="#808080"
                />
                <path
                  d="M10.0007 18.9584C7.75903 18.9584 5.61736 18.1251 3.95903 16.6084C3.80903 16.4751 3.74236 16.2751 3.75903 16.0834C3.86736 15.0917 4.48403 14.1667 5.50903 13.4834C7.99236 11.8334 12.0174 11.8334 14.4924 13.4834C15.5174 14.1751 16.134 15.0917 16.2424 16.0834C16.2674 16.2834 16.1924 16.4751 16.0424 16.6084C14.384 18.1251 12.2424 18.9584 10.0007 18.9584ZM5.06736 15.9167C6.4507 17.0751 8.19236 17.7084 10.0007 17.7084C11.809 17.7084 13.5507 17.0751 14.934 15.9167C14.784 15.4084 14.384 14.9167 13.7924 14.5167C11.7424 13.1501 8.26736 13.1501 6.2007 14.5167C5.60903 14.9167 5.21736 15.4084 5.06736 15.9167Z"
                  fill="#808080"
                />
                <path
                  d="M10 18.9583C5.05835 18.9583 1.04169 14.9417 1.04169 10C1.04169 5.05834 5.05835 1.04167 10 1.04167C14.9417 1.04167 18.9584 5.05834 18.9584 10C18.9584 14.9417 14.9417 18.9583 10 18.9583ZM10 2.29167C5.75002 2.29167 2.29169 5.75001 2.29169 10C2.29169 14.25 5.75002 17.7083 10 17.7083C14.25 17.7083 17.7084 14.25 17.7084 10C17.7084 5.75001 14.25 2.29167 10 2.29167Z"
                  fill="#808080"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Last Name *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.1004 11.275C10.0837 11.275 10.0587 11.275 10.0421 11.275C10.0171 11.275 9.98375 11.275 9.95875 11.275C8.06706 11.2167 6.65039 9.74167 6.65039 7.92498C6.65039 6.07498 8.15872 4.56665 10.0087 4.56665C11.8587 4.56665 13.3671 6.07498 13.3671 7.92498C13.3587 9.75 11.9337 11.2167 10.1254 11.275C10.1087 11.275 10.1087 11.275 10.1004 11.275ZM10.0004 5.80832C8.83375 5.80832 7.89206 6.75832 7.89206 7.91665C7.89206 9.05833 8.78375 9.98333 9.91708 10.025C9.94208 10.0167 10.0254 10.0167 10.1087 10.025C11.2254 9.96667 12.1004 9.05 12.1087 7.91665C12.1087 6.75832 11.1671 5.80832 10.0004 5.80832Z"
                  fill="#808080"
                />
                <path
                  d="M10.0007 18.9584C7.75903 18.9584 5.61736 18.1251 3.95903 16.6084C3.80903 16.4751 3.74236 16.2751 3.75903 16.0834C3.86736 15.0917 4.48403 14.1667 5.50903 13.4834C7.99236 11.8334 12.0174 11.8334 14.4924 13.4834C15.5174 14.1751 16.134 15.0917 16.2424 16.0834C16.2674 16.2834 16.1924 16.4751 16.0424 16.6084C14.384 18.1251 12.2424 18.9584 10.0007 18.9584ZM5.06736 15.9167C6.4507 17.0751 8.19236 17.7084 10.0007 17.7084C11.809 17.7084 13.5507 17.0751 14.934 15.9167C14.784 15.4084 14.384 14.9167 13.7924 14.5167C11.7424 13.1501 8.26736 13.1501 6.2007 14.5167C5.60903 14.9167 5.21736 15.4084 5.06736 15.9167Z"
                  fill="#808080"
                />
                <path
                  d="M10 18.9583C5.05835 18.9583 1.04169 14.9417 1.04169 10C1.04169 5.05834 5.05835 1.04167 10 1.04167C14.9417 1.04167 18.9584 5.05834 18.9584 10C18.9584 14.9417 14.9417 18.9583 10 18.9583ZM10 2.29167C5.75002 2.29167 2.29169 5.75001 2.29169 10C2.29169 14.25 5.75002 17.7083 10 17.7083C14.25 17.7083 17.7084 14.25 17.7084 10C17.7084 5.75001 14.25 2.29167 10 2.29167Z"
                  fill="#808080"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter your last name"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Email Address *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6502 1.65341H4.50977C2.64176 1.65341 1.12744 3.17331 1.12744 5.0482V9.95179C1.12744 11.8267 2.64176 13.3466 4.50977 13.3466H11.6502C13.5182 13.3466 15.0326 11.8267 15.0326 9.95179V5.0482C15.0326 3.17331 13.5182 1.65341 11.6502 1.65341ZM4.50977 0.521816C2.01909 0.521816 0 2.54835 0 5.0482V9.95179C0 12.4517 2.01909 14.4782 4.50977 14.4782H11.6502C14.1409 14.4782 16.16 12.4517 16.16 9.95179V5.0482C16.16 2.54835 14.1409 0.521816 11.6502 0.521816H4.50977Z"
                  fill="#808080"
                />
                <path
                  d="M8.16079 8.91784C7.55391 8.91784 6.94704 8.67831 6.48755 8.20812L0.834965 3.92713C0.583545 3.66985 0.583545 3.24402 0.834965 2.98674C1.08638 2.72946 1.50253 2.72946 1.75395 2.98674L7.40653 7.26773C7.82267 7.69356 8.4989 7.69356 8.91505 7.26773L14.5677 2.98674C14.8191 2.72946 15.2352 2.72946 15.4866 2.98674C15.7381 3.24402 15.7381 3.66985 15.4866 3.92713L9.83403 8.20812C9.37454 8.67831 8.76766 8.91784 8.16079 8.91784Z"
                  fill="#808080"
                />
              </svg>
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Phone *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
              >
                <path
                  d="M11.7497 13.7513C10.9888 13.7513 10.1875 13.5943 9.35934 13.2919C8.55134 12.9953 7.73661 12.5883 6.94208 12.094C6.15428 11.5939 5.39341 11.0356 4.67294 10.425C3.95921 9.8028 3.31281 9.14569 2.74047 8.47113C2.16141 7.77331 1.69681 7.07549 1.36687 6.40094C1.01674 5.67986 0.841675 4.98204 0.841675 4.32493C0.841675 3.87134 0.935941 3.44102 1.11774 3.03978C1.30627 2.6269 1.60927 2.2431 2.02001 1.91164C2.53847 1.46969 3.13101 1.24871 3.76394 1.24871C4.02654 1.24871 4.29587 1.30105 4.52481 1.39409C4.78741 1.49876 5.00961 1.65577 5.17121 1.86512L6.73334 3.76667C6.87474 3.93531 6.98247 4.09814 7.05654 4.26096C7.14407 4.43541 7.19121 4.60987 7.19121 4.77851C7.19121 4.99948 7.11714 5.21465 6.97574 5.41818C6.87474 5.57518 6.71987 5.74382 6.52461 5.91246L6.06674 6.32534C6.07348 6.34278 6.08021 6.35442 6.08694 6.36605C6.16774 6.48816 6.32934 6.69751 6.63907 7.01153C6.96901 7.33718 7.27874 7.63375 7.58848 7.90706C7.98574 8.24434 8.31568 8.51184 8.62541 8.73281C9.00921 9.01194 9.25834 9.1515 9.40648 9.21547L9.39301 9.24455L9.88454 8.82585C10.0933 8.64559 10.2953 8.51184 10.4905 8.42461C10.8609 8.22689 11.3322 8.192 11.8035 8.36064C11.9786 8.42461 12.1671 8.51184 12.3691 8.63395L14.6046 10.0063C14.8537 10.1517 15.0355 10.3378 15.1433 10.5588C15.2443 10.7797 15.2914 10.9833 15.2914 11.1868C15.2914 11.4659 15.2173 11.7451 15.0759 12.0067C14.9345 12.2684 14.7595 12.4952 14.5373 12.7046C14.1535 13.0709 13.736 13.3326 13.2512 13.5012C12.7866 13.6641 12.2816 13.7513 11.7497 13.7513ZM3.76394 2.12098C3.39361 2.12098 3.05021 2.26055 2.72027 2.53967C2.41054 2.78973 2.19507 3.06304 2.06041 3.35961C1.91901 3.662 1.85167 3.98183 1.85167 4.32493C1.85167 4.86574 1.99981 5.45307 2.29607 6.05784C2.59907 6.67425 3.02327 7.31392 3.56194 7.95358C4.10061 8.59325 4.71334 9.21547 5.38667 9.8028C6.06001 10.3785 6.78721 10.9135 7.53461 11.3845C8.26181 11.8439 9.00921 12.2161 9.74987 12.4836C10.9013 12.9081 11.9786 13.007 12.8674 12.6871C13.2108 12.565 13.5138 12.3789 13.7899 12.1114C13.9447 11.966 14.0659 11.809 14.1669 11.6229C14.2477 11.4776 14.2881 11.3264 14.2881 11.1752C14.2881 11.0821 14.2679 10.9891 14.2141 10.8844C14.1939 10.8495 14.1535 10.7856 14.0255 10.71L11.7901 9.33759C11.6554 9.25618 11.5342 9.19803 11.4197 9.15732C11.2716 9.10498 11.211 9.05265 10.9821 9.17476C10.8474 9.23292 10.7262 9.32014 10.5915 9.43645L10.0798 9.87258C9.81721 10.0936 9.41321 10.1459 9.10348 10.047L8.92167 9.97726C8.64561 9.84932 8.32241 9.65161 7.96554 9.38993C7.64234 9.1515 7.29221 8.87238 6.86801 8.51184C6.53807 8.22108 6.20814 7.91288 5.86474 7.56978C5.54827 7.24995 5.31934 6.97664 5.17794 6.74985L5.09714 6.57539C5.05674 6.44164 5.04327 6.36605 5.04327 6.28463C5.04327 6.07529 5.13081 5.8892 5.29914 5.74382L5.80414 5.29024C5.93881 5.17394 6.03981 5.06345 6.10714 4.96459C6.16101 4.889 6.18121 4.82503 6.18121 4.76688C6.18121 4.72036 6.16101 4.65058 6.12734 4.58079C6.08021 4.48775 6.00614 4.38308 5.91187 4.27259L4.34974 2.36522C4.28241 2.28381 4.20161 2.22566 4.10061 2.18495C3.99287 2.14424 3.87841 2.12098 3.76394 2.12098ZM9.39301 9.25036L9.28527 9.64579L9.46708 9.23873C9.43341 9.23292 9.40647 9.23873 9.39301 9.25036Z"
                  fill="#808080"
                />
              </svg>
              <input
                type="number"
                placeholder="Enter your phone number"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Password *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15 8.95833C14.6583 8.95833 14.375 8.675 14.375 8.33333V6.66666C14.375 4.04166 13.6333 2.29166 10 2.29166C6.36667 2.29166 5.625 4.04166 5.625 6.66666V8.33333C5.625 8.675 5.34167 8.95833 5 8.95833C4.65833 8.95833 4.375 8.675 4.375 8.33333V6.66666C4.375 4.25 4.95833 1.04166 10 1.04166C15.0417 1.04166 15.625 4.25 15.625 6.66666V8.33333C15.625 8.675 15.3417 8.95833 15 8.95833Z"
                  fill="#808080"
                />
                <path
                  d="M10 16.0417C8.50835 16.0417 7.29169 14.825 7.29169 13.3333C7.29169 11.8417 8.50835 10.625 10 10.625C11.4917 10.625 12.7084 11.8417 12.7084 13.3333C12.7084 14.825 11.4917 16.0417 10 16.0417ZM10 11.875C9.20002 11.875 8.54169 12.5333 8.54169 13.3333C8.54169 14.1333 9.20002 14.7917 10 14.7917C10.8 14.7917 11.4584 14.1333 11.4584 13.3333C11.4584 12.5333 10.8 11.875 10 11.875Z"
                  fill="#808080"
                />
                <path
                  d="M14.1667 18.9583H5.83335C2.15835 18.9583 1.04169 17.8417 1.04169 14.1667V12.5C1.04169 8.825 2.15835 7.70834 5.83335 7.70834H14.1667C17.8417 7.70834 18.9584 8.825 18.9584 12.5V14.1667C18.9584 17.8417 17.8417 18.9583 14.1667 18.9583ZM5.83335 8.95834C2.85002 8.95834 2.29169 9.525 2.29169 12.5V14.1667C2.29169 17.1417 2.85002 17.7083 5.83335 17.7083H14.1667C17.15 17.7083 17.7084 17.1417 17.7084 14.1667V12.5C17.7084 9.525 17.15 8.95834 14.1667 8.95834H5.83335Z"
                  fill="#808080"
                />
              </svg>
              <input
                type="password"
                placeholder="Create your password"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Confirm Password *
            </label>

            <div className="bg-gray-200 flex p-4 rounded-2xl items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15 8.95833C14.6583 8.95833 14.375 8.675 14.375 8.33333V6.66666C14.375 4.04166 13.6333 2.29166 10 2.29166C6.36667 2.29166 5.625 4.04166 5.625 6.66666V8.33333C5.625 8.675 5.34167 8.95833 5 8.95833C4.65833 8.95833 4.375 8.675 4.375 8.33333V6.66666C4.375 4.25 4.95833 1.04166 10 1.04166C15.0417 1.04166 15.625 4.25 15.625 6.66666V8.33333C15.625 8.675 15.3417 8.95833 15 8.95833Z"
                  fill="#808080"
                />
                <path
                  d="M10 16.0417C8.50835 16.0417 7.29169 14.825 7.29169 13.3333C7.29169 11.8417 8.50835 10.625 10 10.625C11.4917 10.625 12.7084 11.8417 12.7084 13.3333C12.7084 14.825 11.4917 16.0417 10 16.0417ZM10 11.875C9.20002 11.875 8.54169 12.5333 8.54169 13.3333C8.54169 14.1333 9.20002 14.7917 10 14.7917C10.8 14.7917 11.4584 14.1333 11.4584 13.3333C11.4584 12.5333 10.8 11.875 10 11.875Z"
                  fill="#808080"
                />
                <path
                  d="M14.1667 18.9583H5.83335C2.15835 18.9583 1.04169 17.8417 1.04169 14.1667V12.5C1.04169 8.825 2.15835 7.70834 5.83335 7.70834H14.1667C17.8417 7.70834 18.9584 8.825 18.9584 12.5V14.1667C18.9584 17.8417 17.8417 18.9583 14.1667 18.9583ZM5.83335 8.95834C2.85002 8.95834 2.29169 9.525 2.29169 12.5V14.1667C2.29169 17.1417 2.85002 17.7083 5.83335 17.7083H14.1667C17.15 17.7083 17.7084 17.1417 17.7084 14.1667V12.5C17.7084 9.525 17.15 8.95834 14.1667 8.95834H5.83335Z"
                  fill="#808080"
                />
              </svg>
              <input
                type="password"
                placeholder="Confirm your password"
                className="bg-transparent w-full text-sm"
              />
            </div>
          </div>
          <div className="mt-8">
            <Button color={"bg-accent"} label={"Create Account"} />
          </div>
        </form>

        <div className="flex justify-center p-4 gap-2">
          <h1 className="font-bold">Already have an account?</h1>
          <Link href="/usersignin" className="font-bold text-accent">
            LOGIN
          </Link>
        </div>
      </section>
    </>
  );
}

export default UserSignUp;
