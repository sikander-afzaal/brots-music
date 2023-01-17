import LeftDetails from "./LeftDetails";
import RightDetails from "./RightDetails";

const Music = () => {
  return (
    <div className="wrapper mb-[80px] lg:mb-[200px] mt-[110px] px-5">
      <div className="flex lg:max-w-[1250px] lg:self-auto self-start max-w-[660px] lg:flex-row flex-col  justify-between items-start w-full gap-[30px] lg:gap-[130px]">
        <LeftDetails />
        <RightDetails />
      </div>
    </div>
  );
};

export default Music;
