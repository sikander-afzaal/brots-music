import Image from "next/image";

const Partners = () => {
  return (
    <div className="wrapper mt-[170px]">
      <div className="contain flex-col justify-center items-center gap-8 sm:gap-16">
        <h4 className="text-white text-[32px] font-normal">
          We{"'"}ve partnered with
        </h4>
        <div className="lg:flex justify-between grid grid-cols-2 place-items-center grid-rows-2 2xl:justify-around 3xl:justify-center items-center w-full 3xl:gap-[100px] sm:gap-5">
          <div className="relative w-[140px] sm:w-[270px] lg:w-[300px] 1xl:w-[350px] h-[100px] xl:h-[185px]">
            <Image
              alt="..."
              alt="partners"
              fill
              src={"/part1.png"}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-[140px] sm:w-[270px] lg:w-[300px] 1xl:w-[350px] col-start-1 col-end-3 row-start-1 row-end-2  h-[100px] xl:h-[135px]">
            {" "}
            <Image
              alt="..."
              alt="partners"
              fill
              src={"/part2.png"}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-[140px] sm:w-[270px] lg:w-[300px] 1xl:w-[350px] h-[100px] xl:h-[130px]">
            {" "}
            <Image
              alt="..."
              alt="partners"
              fill
              src={"/part3.png"}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
