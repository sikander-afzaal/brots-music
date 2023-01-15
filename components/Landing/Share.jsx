const Share = () => {
  return (
    <div className="wrapper mt-[100px] sm:mt-[200px]">
      <div className="contain flex-col justify-start items-center">
        <div className="flex w-full max-w-[370px] sm:max-w-[700px] lg:max-w-[1024px] 1xl:max-w-[1260px] justify-start items-center 1xl:items-start flex-col">
          <h2 className="self-start uppercase text-[30px] sm:text-[64px] lg:text-[94px] 1xl:text-[120px] text-white font-medium leading-[1]">
            Share your
          </h2>
          <h2 className="self-end uppercase text-[30px] sm:text-[64px] lg:text-[94px] 1xl:text-[120px] text-black p-2 bg-white font-medium leading-[1]">
            Exceptional
          </h2>
          <h2 className="self-center text-[30px] sm:text-[64px] lg:text-[94px] mr-[100px] sm:mr-[200px] lg:mr-[400px] uppercase 1xl:text-[120px] text-white font-medium leading-[1]">
            Taste
          </h2>
        </div>
        <div className="flex lg:flex-row lg:w-auto w-full flex-col justify-center items-center 3xl:ml-[260px] ml-[0px] 2xl:ml-[340px] mt-[40px] sm:mt-[70px] gap-5 sm:gap-[60px] lg:gap-5 xl:gap-[130px]">
          <p className="text-white 3xl:text-[32px] text-base sm:text-2xl 3xl:w-[650px] w-full  lg:w-[480px] leading-[1.2]">
            Impress your peers and elevate your status as a music fan by flexing
            your collection on your preferred social media platforms.
          </p>
          <div className="bg-green text-black text-[30px] sm:text-[52px] w-full max-w-[415px] h-auto aspect-square sm:aspect-auto sm:h-[380px] flex justify-center items-center">
            <p>VIDEO BLOCK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
