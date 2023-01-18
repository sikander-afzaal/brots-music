import Image from "next/image";

const RightDetails = () => {
  return (
    <div className="w-full max-w-[39%] flex mt-5 justify-start items-start flex-col gap-5">
      <div className="flex justify-between w-full items-center gap-4">
        <div className="flex justify-start items-center gap-3">
          <Image src={"/artists.png"} width={42} height={42} alt="..." />
          <p className="text-cream">RÜDE CÅT</p>
        </div>
        <div className="flex justify-start items-center gap-5">
          <Image src={"/share-ico.png"} width={23} height={23} alt="..." />
          <Image src={"/opensea.png"} width={30} height={30} alt="..." />
        </div>
      </div>
      <h2 className="text-cream font-druk text-[35px] sm:text-[50px] font-medium mt-3">
        Do You Mind
      </h2>
      <div className="flex justify-start mt-8 items-start flex-col w-full gap-5">
        <div className="flex justify-start items-center gap-4 ">
          <span className="text-2xl text-[#989898] font-normal uppercase">
            Editions:
          </span>{" "}
          <p className="text-cream text-2xl font-normal">150</p>
        </div>
        <div className="flex justify-start items-center gap-4 ">
          <span className="text-2xl text-[#989898] font-normal uppercase">
            Price:
          </span>{" "}
          <p className="text-cream text-2xl font-normal">2,99 €</p>
        </div>
        <div className="flex justify-start items-start flex-col gap-1 w-full">
          <p className="text-[#989898] text-[18px] sm:text-[22px]">
            Select QUANTITY
          </p>
          <div className="w-full flex justify-between items-center bg-[#1F1E1E] rounded-md px-[6px] py-[6px]">
            <button className="bg-black rounded-md border-[1px] border-solid border-[#989898] w-[76px] h-[32px] text-white font-bold text-xl leading-[1] pb-1">
              -
            </button>
            <p className="text-white font-normal text-2xl">1</p>
            <button className="bg-black rounded-md border-[1px] border-solid border-[#989898] w-[76px] h-[32px] text-white font-bold text-xl leading-[1] pb-1">
              +
            </button>
          </div>
        </div>
        <div className="flex justify-start items-center mt-5 gap-4 ">
          <span className="text-2xl text-[#989898] font-normal uppercase">
            Total Amount:
          </span>{" "}
          <p className="text-cream text-2xl font-normal">2,99 €</p>
        </div>
        <button className="uppercase w-full text-black h-[50px] flex justify-between items-center px-3 rounded-sm bg-white hover:bg-transparent border-2 border-solid border-white hover:text-white transition-all duration-500">
          <p className="w-full text-center font-medium text-[22px] ">COLLECT</p>
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
        <div className="flex sm:flex-row flex-col justify-between w-full items-start sm:items-center gap-4">
          <p className="flex text-white justify-start items-center gap-2 text-sm">
            Minting on Polygon{" "}
            <Image src={"/polygon.png"} width={18} height={16} />
          </p>
          <p className="text-sm text-[#989898]">
            First time buying NFTs?{" "}
            <a href="#" className="underline">
              Start here
            </a>
          </p>
        </div>
      </div>
      <div className="flex mid:hidden justify-start mt-5 items-start flex-col gap-3">
        <h3 className="uppercase text-cream text-medium text-[38px] leading-[1]">
          Behind <br /> the music
        </h3>
        <p className="text-cream text-base leading-[1.1]">
          The story of this track start in the glorious nineties again, as the
          original version has been made. The story of this track start in the
          glorious nineties again, as the original version has been…
          <span className="text-[#005CEF]">Read more</span>
        </p>
      </div>
      <div className="flex justify-start w-full items-start flex-col gap-6 mt-[50px] mid:mt-[80px]">
        <div>
          <h3 className="text-cream font-medium text-[38px] sm:text-[42px] leading-[1]">
            REWARDS
          </h3>
          <p className="text-base sm:text-lg font-normal mt-2 text-cream">
            View all rewards and perks for collecting this release.
          </p>
        </div>
        <div className="flex justify-start w-full items-start gap-2 sm:gap-5 mt-[20px]">
          <Image src={"/download_ico.png"} width={61} height={61} alt="...." />
          <div className="flex w-full justify-start items-start flex-col gap-2">
            <h3 className="text-cream leading-[1] uppercase font-medium text-[26px] sm:text-[32px]">
              Download
            </h3>
            <p className="text-cream leading-[1] text-base sm:text-lg font-normal">
              Download or play after purchasing a release
            </p>
            <div className="flex justify-between mt-2 items-center gap-2 opacity-30 border-cream border-solid border-[1px] rounded-md px-3 py-2 w-full">
              {" "}
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={"/download-ico2.png"}
                  width={41}
                  height={41}
                  alt="...."
                />
                <div>
                  <p className="text-cream  sm:text-base text-sm">
                    Do You Mind
                  </p>
                  <p className="text-[#989898] text-xs sm:text-sm ">
                    Unlock with purchase
                  </p>
                </div>
              </div>{" "}
              <Image src={"/lock.png"} width={20} height={24} alt="...." />
            </div>
          </div>
        </div>
        <div className="flex justify-start w-full items-start gap-2 sm:gap-5 mt-[20px]">
          <Image src={"/comment-ico.png"} width={61} height={61} alt="...." />
          <div className="flex w-full justify-start items-start flex-col gap-2">
            <h3 className="text-cream leading-[1] uppercase font-medium text-[26px] sm:text-[32px]">
              COMMENT WALL
            </h3>
            <p className="text-cream leading-[1.1] text-base sm:text-lg font-normal">
              Make a public comment on the song. Prove you were a supporter from
              way back in the day. Sell your NFT, and your comment is
              replaceable by the new owner.
            </p>
            <button className="uppercase w-full text-black h-[45px] flex justify-between items-center px-3 rounded-sm bg-white hover:bg-transparent border-2 border-solid border-white hover:text-white transition-all duration-500 opacity-30 mt-3">
              <p className=" text-center font-medium text-base sm:text-[17px] ">
                LEAVE A COMMENT
              </p>
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
        <div className="flex justify-start w-full items-start gap-2 sm:gap-5 mt-[20px]">
          <Image src={"/music-ico.png"} width={61} height={61} alt="...." />
          <div className="flex w-full justify-start items-start flex-col gap-2">
            <h3 className="text-cream leading-[1] uppercase font-medium text-[26px] sm:text-[32px]">
              Exclusive First Listen
            </h3>
            <p className="text-cream leading-[1.1] text-base sm:text-lg font-normal">
              Collectors get exclusive first listen access to all future drops
              from RÜDE CÅT as soon as they mint their release.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-16 w-full items-start flex-col gap-2">
        <h3 className="text-cream leading-[1] text-[38px] sm:text-[42px] font-medium">
          COLLECTORS
        </h3>
        <p className="text-base sm:text-lg text-cream">
          Become a part of the audience by purchasing the limited edition. Be
          the first to own this limited edition.
        </p>
        <div className="flex w-full justify-start mt-5 items-start flex-col gap-5">
          <div className="w-full flex justify-between items-center gap-3">
            <div className="w-full aspect-square relative">
              <Image src={"/coll1.png"} fill />
            </div>
            <div className="w-full aspect-square relative">
              <Image src={"/coll2.png"} fill />
            </div>
            <div className="w-full aspect-square relative">
              <Image src={"/coll3.png"} fill />
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-3">
            <div className="w-full aspect-square relative">
              <Image src={"/coll4.png"} fill />
            </div>
            <div className="w-full aspect-square relative">
              <Image src={"/coll5.png"} fill />
            </div>
            <div className="w-full aspect-square relative">
              <Image src={"/coll6.png"} fill />
            </div>
            <div className="w-full aspect-square relative">
              <Image src={"/coll7.png"} fill />
            </div>
            <div className="w-full aspect-square relative">
              <Image src={"/coll8.png"} fill />
            </div>
            <div className="w-full aspect-square relative">
              <Image src={"/coll9.png"} fill />
            </div>
          </div>
          <button className="bg-transparent self-center mt-3 hover:bg-white text-white hover:text-black border-[1px] border-solid border-white transition-all duration-500 w-[123px] h-[44px] rounded-md text-[17px] font-medium">
            SEE ALL
          </button>
        </div>
      </div>
      <div className="flex justify-start items-start mt-12 flex-col w-full gap-3">
        <h3 className="text-[34px] sm:text-[42px] text-cream leading-[1] font-medium">
          Contract Details
        </h3>
        <p className="text-base sm:text-lg text-cream mt-2">
          View details of the contracts for this release.
        </p>
        <div className="flex justify-start items-start flex-col gap-4 mt-5 w-full">
          <div className="w-full gap-2 flex justify-between items-center">
            <p className="text-base sm:text-sm text-[#707070]">Release Date</p>
            <p className="text-base sm:text-sm text-cream">October 23,2002</p>
          </div>
          <div className="w-full gap-2 flex justify-between items-center">
            <p className="text-base sm:text-sm text-[#707070]">
              Contract Address
            </p>
            <p className="text-base sm:text-sm text-cream">0x16sh…323ca0</p>
          </div>
          <div className="w-full gap-2 flex justify-between items-center">
            <p className="text-base sm:text-sm text-[#707070]">Blockchain</p>
            <p className="text-base sm:text-sm text-cream">Polygon</p>
          </div>
          <div className="w-full gap-2 flex justify-between items-center">
            <p className="text-base sm:text-sm text-[#707070]">
              Token Standard
            </p>
            <p className="text-base sm:text-sm text-cream">ERC-721</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightDetails;
