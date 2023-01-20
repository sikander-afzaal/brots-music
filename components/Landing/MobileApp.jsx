import Image from "next/image";

const MobileApp = () => {
  return (
    <div className="wrapper mt-[150px] lg:mt-[200px] bg-mob bg-cover lg:bg-contain bg-top bg-no-repeat">
      <div className="contain justify-center items-start">
        <div className="flex lg:flex-row flex-col w-full max-w-[1600px] justify-start items-center lg:items-end gap-10">
          <div className="relative w-full sm:w-auto sm:min-w-[500px]">
            <Image
              alt=".."
              src={"/mobile.png"}
              width={500}
              height={870}
              style={{ objectFit: "contain" }}
            />
            <div className="absolute sm:block hidden left-[5%] top-[22%]">
              <Image src={"/qr2.png"} width={230} height={230} />
            </div>
            <div className="flex justify-start absolute top-[28%] right-1/2  translate-x-1/2 sm:translate-x-0 sm:right-[7%] items-center w-max flex-col gap-4">
              <a target={"_blank"} href="#">
                <Image width={161} height={50} src="/btn1.png" />
              </a>
              <a target={"_blank"} href="#">
                <Image width={161} height={50} src="/btn2.png" />
              </a>
              {/* <button className="bg-black border-[1px] w-full border-solid border-[#707070] rounded flex justify-center items-center gap-3 px-4 py-3">
                <Image src={"/apple.png"} width={30} height={30} />
                <div className="flex justify-start items-start flex-col">
                  <p className="text-white font-medium text-xs leading-[1]">
                    Available on the
                  </p>
                  <p className="text-white font-bold text-xl">App Store</p>
                </div>
              </button>
              <button className="bg-black border-[1px] w-full border-solid border-[#707070] rounded flex justify-center items-center gap-3 px-4 py-3">
                <Image src={"/playstore.png"} width={30} height={30} />
                <div className="flex justify-start items-start flex-col">
                  <p className="text-white uppercase font-medium text-xs leading-[1]">
                    Get it on
                  </p>
                  <p className="text-white font-bold text-xl">Google Play</p>
                </div>
              </button> */}
            </div>
            <div className="flex justify-start items-start flex-col bottom-[14%] absolute left-[5%] gap-[30px] sm:gap-[70px]">
              <h2 className="text-[29px] sm:text-[47px] font-medium text-white ">
                Take Brots with You Everywhere
              </h2>
              <button className="bg-btnGr w-[78px] sm:w-[130px] h-[30px] sm:h-[50px] text-white border-none rounded-full cursor-pointer text-[11px] sm:text-[21px] font-medium">
                Explore
              </button>
            </div>
          </div>
          <p className="text-cream  text-[25px] lg:block hidden max-w-[500px] 1xl:max-w-[830px]">
            Available on both iOS and Android, our app makes it easy to browse
            and purchase digital collectibles, manage your collection, and stay
            up-to-date on the latest releases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
