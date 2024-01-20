import Image from "next/image";
import profile from "@/public/images/user_placeholder.png";

function Insights() {
  return (
    <>
      <section className="bg-secondary relative w-full h-screen ">
        <div className="w-full md:w-2/4 mx-auto">
          <div className="flex justify-between p-8 ">
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

          <div className="flex justify-center items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M22.5 22.75H2.5C2.09 22.75 1.75 22.41 1.75 22C1.75 21.59 2.09 21.25 2.5 21.25H22.5C22.91 21.25 23.25 21.59 23.25 22C23.25 22.41 22.91 22.75 22.5 22.75Z"
                  fill="#EC4653"
                />
                <path
                  d="M14.75 22.75H10.25C9.84 22.75 9.5 22.41 9.5 22V4C9.5 2.28 10.45 1.25 12.05 1.25H12.95C14.55 1.25 15.5 2.28 15.5 4V22C15.5 22.41 15.16 22.75 14.75 22.75ZM11 21.25H14V4C14 2.85 13.46 2.75 12.95 2.75H12.05C11.54 2.75 11 2.85 11 4V21.25Z"
                  fill="#EC4653"
                />
                <path
                  d="M7.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22V10C2.75 8.28 3.63 7.25 5.1 7.25H5.9C7.37 7.25 8.25 8.28 8.25 10V22C8.25 22.41 7.91 22.75 7.5 22.75ZM4.25 21.25H6.75V10C6.75 8.75 6.2 8.75 5.9 8.75H5.1C4.8 8.75 4.25 8.75 4.25 10V21.25Z"
                  fill="#EC4653"
                />
                <path
                  d="M21.5 22.75H17.5C17.09 22.75 16.75 22.41 16.75 22V15C16.75 13.28 17.63 12.25 19.1 12.25H19.9C21.37 12.25 22.25 13.28 22.25 15V22C22.25 22.41 21.91 22.75 21.5 22.75ZM18.25 21.25H20.75V15C20.75 13.75 20.2 13.75 19.9 13.75H19.1C18.8 13.75 18.25 13.75 18.25 15V21.25Z"
                  fill="#EC4653"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-white text-sm">Cycle Insights</h1>
              <p className="text-accent text-sm">See your cycle progress</p>
            </div>
          </div>

          <div className="bg-white w-full md:w-2/4 h-3/4 p-8 rounded-s-3xl rounded-e-3xl mx-auto absolute bottom-0">
            <div className="flex justify-between">
              <h1>Cycle insights</h1>
              <h1>2024</h1>
            </div>

            <div className="flex items-center gap-2 w-full">
              <div className="w-[20px] h-[20px] bg-accent rounded-full"></div>
              <h1>Periods</h1>
            </div>

            <div className="mt-4 flex justify-center">
              <h1>December</h1>
            </div>

            <div className="flex justify-between">
              <h1>Mon</h1>
              <h1>Tue</h1>
              <h1>Wed</h1>
              <h1>Thu</h1>
              <h1>Fri</h1>
              <h1>Sat</h1>
              <h1>Sun</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-gray-400">1</h1>
              <h1 className="text-gray-400">2</h1>
              <h1 className="text-gray-400">3</h1>
              <h1 className="text-gray-400">4</h1>
              <h1 className="text-gray-400">5</h1>
              <h1 className="text-gray-400">6</h1>
              <h1 className="text-gray-400">7</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-gray-400">8</h1>
              <h1 className="text-gray-400">9</h1>
              <h1 className="text-gray-400">10</h1>
              <h1 className="text-gray-400">11</h1>
              <h1 className="text-gray-400">12</h1>
              <h1 className="text-gray-400">13</h1>
              <h1 className="text-gray-400">14</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-gray-400">15</h1>
              <h1 className="text-gray-400">16</h1>
              <h1 className="text-gray-400">17</h1>
              <h1 className="text-gray-400">18</h1>
              <h1 className="text-gray-400">19</h1>
              <h1 className="text-gray-400">20</h1>
              <h1 className="text-gray-400">21</h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-gray-400">22</h1>
              <h1 className="text-gray-400">23</h1>
              <h1 className="text-gray-400">24</h1>
              <h1 className="text-gray-400">25</h1>
              <h1 className="text-gray-400">26</h1>
              <h1 className="text-gray-400">27</h1>
              <h1 className="text-gray-400">28</h1>
            </div>

            <div className="flex justify-between ">
              <h1 className="text-gray-400">29</h1>
              <h1 className="text-gray-400">30</h1>
              <h1 className="text-gray-400">31</h1>
              <h1 className="text-white">29</h1>
              <h1 className="text-white">30</h1>
              <h1 className="text-white">31</h1>
              <h1 className="text-white">31</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Insights;
