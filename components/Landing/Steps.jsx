const Steps = () => {
  return (
    <div className="wrapper sm:mt-[100px] py-[70px] mt-[50px] sm:py-[150px] bg-wall bg-cover">
      <div className="w-full 3xl:max-w-[2128px] max-w-[90%] gap-y-[40px] xl:gap-y-[80px] 3xl:gap-x-0 gap-x-[60px] grid grid-cols-1 mid:grid-cols-2 grid-rows-[auto__0.3fr__auto__auto__auto] 3xl:grid-rows-[auto__0.1fr__auto__auto] ">
        <div className="flex justify-start items-start w-full max-w-[290px] sm:max-w-[477px] xl:max-w-[634px] 3xl:justify-self-center justify-self-start flex-col gap-5">
          <div className="bg-white text-black w-full sm:py-5 sm:px-5 p-3 flex justify-start gap-2 items-start flex-col">
            <p className="text-stroke-black flex justify-center items-center h-[40px] leading-[0] text-lg sm:text-[20px] xl:text-[24px]  2xl:text-[32px]  font-bold">
              01
            </p>
            <p className="text-black text-[29px] sm:text-[33px] xl:text-[48px] 2xl:text-[62px] leading-[1.1] font-medium uppercase">
              Collect your favourite music
            </p>
          </div>
          <p className="text-white text-right  text-lg sm:text-[20px] xl:text-[24px] 2xl:text-[32px] leading-[1.3]">
            You{"'"}ll be able to design a beautiful, personalized page that
            proudly displays your Brots music collection for all to see.
          </p>
        </div>
        <div className="flex justify-start mid:row-start-2 mid:row-end-4 mid:col-start-2 mid:col-end-3 items-start w-full max-w-[290px] sm:max-w-[520px] xl:max-w-[690px] 3xl:justify-self-start justify-self-end self-end flex-col gap-5">
          <div className="bg-white text-black w-full sm:py-5 sm:px-5 p-3 flex justify-start gap-2 items-start flex-col">
            <p className="text-stroke-black flex justify-center items-center h-[40px] leading-[0] text-lg sm:text-[20px] xl:text-[24px]  2xl:text-[32px]  font-bold">
              02
            </p>
            <p className="text-black text-[29px] sm:text-[33px] xl:text-[48px] 2xl:text-[62px] text-right self-end leading-[1.1] font-medium uppercase">
              SHOW YOUR LOVE FOR ARTISTS
            </p>
          </div>
          <p className="text-white text-left  text-lg sm:text-[20px] xl:text-[24px] 2xl:text-[32px] leading-[1.3]">
            Support your favorite artists with confidence and trust, thanks to
            the secure nature of blockchain technology.
          </p>
        </div>
        <div className="flex justify-start mid:row-start-4 mid:row-end-5 mid:col-start-1 mid:col-end-2 items-start w-full max-w-[315px] sm:max-w-[600px] xl:max-w-[700px] 3xl:justify-self-end justify-self-start self-center flex-col gap-5">
          <div className="bg-white text-black w-full sm:py-5 sm:px-5 p-3 flex justify-start gap-2 items-start flex-col">
            <p className="text-stroke-black flex justify-center items-center h-[40px] leading-[0] text-lg sm:text-[20px] xl:text-[24px]  2xl:text-[32px]  font-bold">
              03
            </p>
            <p className="text-black text-[29px] sm:text-[33px] xl:text-[48px] 2xl:text-[62px]  leading-[1.1] font-medium uppercase">
              DISCOVER AMAZING NEW MUSIC
            </p>
          </div>
          <p className="text-white self-end text-right  text-lg sm:text-[20px] xl:text-[24px] 2xl:text-[32px] leading-[1.3]">
            Find out new releases and prove that <br /> you were the first fan.
          </p>
        </div>
        <div className="flex justify-start xl:-mt-[80px] 3xl:-mt-0 3xl:row-start-4 3xl:row-end-5 mid:row-start-5 mid:row-end-6 mid:col-start-2 mid:col-end-3 items-start w-full max-w-[270px] sm:max-w-[350px] xl:max-w-[460px] justify-self-end self-center flex-col gap-5">
          <div className="bg-white text-black w-full sm:py-5 sm:px-5 p-3 flex justify-start gap-2 items-start flex-col">
            <p className="text-stroke-black flex justify-center items-center h-[40px] leading-[0] text-lg sm:text-[20px] xl:text-[24px]  2xl:text-[32px]  font-bold">
              04
            </p>
            <p className="text-black self-end text-right text-[29px] sm:text-[33px] xl:text-[48px] 2xl:text-[62px]  leading-[1.1] font-medium uppercase">
              EXCLUSIVE EXPERIENCES
            </p>
          </div>
          <p className="text-white  text-lg sm:text-[20px] xl:text-[24px]  2xl:text-[32px] leading-[1.3]">
            Unlock exclusive experiences directly from your favorite artists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
