import Image from "next/image";

const Press = () => {
  return (
    <div className="wrapper mt-[100px] mid:mt-[190px]">
      <div className="contain flex-col justify-center items-center gap-16">
        <h2 className="text-cream text-[35px] sm:text-[45px] 1xl:text-[62px] font-medium uppercase">
          Press Coverage
        </h2>
        <div className="flex w-full justify-around 3xl:justify-center items-center 3xl:gap-x-10 gap-x-4 gap-y-8 flex-wrap">
          <div className="relative w-[85px] sm:w-[120px] h-[23px] sm:h-[31px]">
            <Image alt="..." src={"/press1.png"} fill />
          </div>
          <div className="relative w-[141px] sm:w-[182px] h-[50px] sm:h-[74px]">
            <Image alt="..." src={"/press2.png"} fill />
          </div>
          <div className="relative w-[138px] sm:w-[195px] h-[30px] sm:h-[42px]">
            <Image alt="..." src={"/press3.png"} fill />
          </div>
          <div className="relative w-[180px] h-[60px] sm:w-[200px] sm:h-[60px]">
            <Image alt="..." src={"/press4.png"} fill />
          </div>
          <div className="relative w-[130px] sm:w-[200px] h-[34px] sm:h-[41px]">
            <Image alt="..." src={"/press5.png"} fill />
          </div>
          <div className="relative w-[114px] sm:w-[160px] h-[30px] sm:h-[44px]">
            <Image alt="..." src={"/press6.png"} fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
