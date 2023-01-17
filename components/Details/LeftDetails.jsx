import Image from "next/image";

const LeftDetails = () => {
  return (
    <div className="flex static lg:sticky top-[100px] w-full justify-start items-start flex-col gap-5">
      <div className="w-full aspect-square rounded-lg overflow-hidden relative">
        <Image src={"/image-detail.jpg"} fill alt="..." />
      </div>
      <div className="flex justify-start items-start gap-4 w-full opacity-30">
        <Image
          src={"/play-ico.png"}
          width={60}
          height={60}
          alt="play-ico"
          className="mt-5"
        />
        <div className="flex justify-start items-center max-w-[430px] flex-col w-full gap-5">
          <p className="text-cream">Listening available to owners</p>
          <div className="relative w-full ">
            <div className="w-full bg-[#707070] rounded-full h-[14px]"></div>
            <div className="absolute border-[2px] border-solid border-[#B4B4B4] z-20 left-0 top-1/2 -translate-y-1/2 h-[16px] aspect-square rounded-full bg-white"></div>
            <p className="absolute right-0 bottom-full text-cream">00:00</p>
          </div>
        </div>
      </div>{" "}
      <div className="hidden mid:flex justify-start items-start flex-col gap-3">
        <h3 className="uppercase text-cream font-medium text-[42px] leading-[1]">
          Behind <br /> the music
        </h3>
        <p className="text-cream text-lg leading-[1.2]">
          The story of this track start in the glorious nineties again, as the
          original version has been made. The story of this track start in the
          glorious nineties again, as the original version has been…
          <span className="text-[#005CEF]">Read more</span>
        </p>
      </div>
    </div>
  );
};

export default LeftDetails;
