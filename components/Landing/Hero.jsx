import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="wrapper bg-none mid:bg-heroMid 3xl:min-h-[1304px] 2xl:min-h-[985px] 1xl:min-h-[675px]
    xl:min-h-[675px] min-h-screen 3xl:bg-heroBig py-[100px] bg-contain bg-right-top bg-no-repeat "
    >
      <div className="flex w-full mid:gap-[100px] lg:gap-[150px] 3xl:gap-[60px] flex-col justify-center items-start h-full">
        <h1 className="text-white uppercase mx-auto leading-[1] w-full max-w-[90%] font-bold text-[10vw]  mid:text-[7vw] 2xl:text-[145px] 3xl:text-[200px]">
          Music <br /> in <span className="animate-colorChange">Limited</span>{" "}
          <br /> Edition
        </h1>
        <div className="relative -mt-[70px] sm:-mt-[100px] mb-[10px] sm:mb-[50px] -z-10 mid:hidden block w-full aspect-square">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src="/hero-mobile.jpg"
            alt="hero-img"
          />
        </div>
        <div className="w-full mx-auto max-w-[90%] flex justify-start items-start">
          <button
            className="bg-white hover:bg-btnHover cursor-pointer flex justify-between sm:p-0 px-5 sm:justify-center items-center gap-2 
        w-full sm:w-[300px] lg:w-[352px] h-[50px] rounded-md text-lg font-medium sm:text-[22px] uppercase text-black "
          >
            start collecting{" "}
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
  );
};

export default Hero;
