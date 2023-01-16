import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const Releases = () => {
  return (
    <div className="wrapper mt-[50px] xl:mt-[100px]">
      <div className="flex w-full max-w-[1250px] flex-col justify-start items-start gap-7 xl:gap-4">
        <h2 className="text-white text-[45px] 1xl:text-[62px] font-medium">
          Recent Release
        </h2>
        <div className="flex justify-center items-center w-full sm:hidden">
          <Splide
            options={{
              width: "100%",
              autoWidth: true,
              focus: "center",
              arrows: true,
              pagination: true,
              perMove: 1,
              type: "loop",
              gap: "1rem",
              drag: true,
              breakpoints: {
                600: {
                  gap: "0.2rem",
                  autoWidth: false,
                  perPage: 1,
                  focus: false,
                },
              },
            }}
            className="release-slider"
          >
            <SplideSlide>
              <ReleaseCard />
            </SplideSlide>
            <SplideSlide>
              <ReleaseCard />
            </SplideSlide>
            <SplideSlide>
              <ReleaseCard />
            </SplideSlide>
            <SplideSlide>
              <ReleaseCard />
            </SplideSlide>
          </Splide>
        </div>
        <div className=" hidden sm:grid grid-cols-2 place-items-center grid-rows-2 xl:self-auto self-center xl:flex justify-between xl:w-full items-center gap-7 xl:gap-4 flex-wrap">
          <ReleaseCard />
          <ReleaseCard />
          <ReleaseCard />
          <ReleaseCard />
        </div>
        <button className="sm:block hidden uppercase self-center mt-8 w-[140px] h-[44px] text-white border-white border-solid border-[1px] rounded-md text-lg font-medium hover:bg-white hover:text-black transition-all duration-500 cursor-pointer">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Releases;

const ReleaseCard = () => {
  return (
    <div className="flex justify-start h-[500px] max-h-[490px] items-center flex-col w-[280px] sm:w-[290px] p-[15px] bg-card bg-[100%__100%] gap-[40px]">
      <div className="w-full max-h-[250px] min-h-[250px] mt-1 relative">
        <Image alt="..." src="/release.png" fill />
      </div>
      <div className="flex w-full h-full justify-between items-start flex-col gap-2">
        <div className="flex justify-start items-start gap-2 w-full">
          <Image alt="..." src={"/artists.png"} width={42} height={42} />
          <div className="flex justify-center items-start pt-1 flex-col gap-3">
            <p className="text-cream text-xl font-medium ">RUDE CAT</p>
            <p className="text-cream text-2xl font-medium ">Do You Mind</p>
          </div>
        </div>
        <div className="text-lg self-end  font-medium text-[#E2E5FE] border-[1px] border-solid border-[#E2E5FE] p-1 rounded-[10px]">
          $2,99
        </div>
      </div>
    </div>
  );
};
