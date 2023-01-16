import Image from "next/image";

const Project = () => {
  return (
    <div className="wrapper mt-[20px] mid:mt-[80px] lg:mt-[150px]">
      <div className="contain lg:flex-row flex-col 3xl:justify-center justify-start lg:justify-between 3xl:gap-[80px] 1xl:gap-0 gap-6 items-start">
        <div className="flex max-w-full lg:max-w-[490px] 1xl:max-w-[690px] justify-start items-start flex-col gap-5">
          <h2 className="text-cream leading-[1] uppercase font-medium text-[40px] sm:text-[64px] lg:text-[94px] 2xl:text-[120px]">
            Release your project
          </h2>
          <p className="text-lg lg:text-[24px] leading-[1.2] 2xl:text-[32px] text-cream">
            We are giving artists and labels the opportunity to showcase their
            talents to a wider audience and reach new listeners.
          </p>
        </div>
        <div className="flex justify-start lg:max-w-[860px] lg:justify-center items-start lg:mt-0 mt-10 lg:items-center flex-col gap-16 mid:gap-[80px]">
          <div className="flex w-full justify-start items-start gap-2">
            <Image
              src={"/logo-circle.png"}
              width={80}
              height={80}
              alt="logo-circle"
              className="lg:block hidden"
            />
            <div className="flex justify-start w-full items-start lg:items-center flex-col gap-4 mid:gap-8 max-w-[700px]">
              <h3 className="text-cream uppercase font-medium text-[32px] sm:text-[35px] 1xl:text-[45px] 2xl:text-[62px] leading-[1]">
                Are you an artist?
              </h3>
              <p className="text-lg 2xl:text-[25px] text-cream">
                Are you an artist looking to take your career to the next level?{" "}
              </p>
              <button
                className="bg-cream hover:bg-transparent hover:text-white transition-all duration-500 cursor-pointer flex  sm:p-0 px-5 justify-center items-center gap-2 
        w-full sm:w-[300px] lg:w-[290px] h-[40px] rounded-full text-lg border-[1px] border-cream border-solid font-medium sm:text-[22px] uppercase text-black "
              >
                REGISTER{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex w-full justify-start items-start gap-2">
            <Image
              src={"/logo-circle.png"}
              width={80}
              height={80}
              alt="logo-circle"
              className="lg:block hidden"
            />
            <div className="flex w-full justify-start items-start lg:items-center flex-col gap-4 mid:gap-8 max-w-[700px]">
              <h3 className="text-cream uppercase font-medium text-[32px] sm:text-[35px] 1xl:text-[45px] 2xl:text-[62px] leading-[1]">
                Are you a label?
              </h3>
              <p className="text-lg 2xl:text-[25px] text-cream">
                As a label, you{"'"}re always looking for new ways to promote
                your artists and reach new fans.
              </p>
              <button
                className="bg-cream hover:bg-transparent hover:text-white transition-all duration-500 cursor-pointer flex justify-between sm:p-0 px-5 sm:justify-center items-center gap-2 
        w-full sm:w-[300px] lg:w-[290px] h-[40px]  rounded-full text-lg border-[1px] border-cream border-solid font-medium sm:text-[22px] uppercase text-black "
              >
                CONTACT US{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
