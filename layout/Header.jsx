import Image from "next/image";

const Header = () => {
  return (
    <div className="wrapper py-[30px] fixed top-0 left-0">
      <header className="contain justify-between items-center ">
        <Image alt="..." alt="logo" src="/logo.png" width={80} height={50} />
        <div className="flex justify-start items-center gap-3">
          <button className="uppercase border-0 bg-transparent text-black text-lg font-normal">
            Sign IN
          </button>
          <button className="uppercase transition-all duration-300 cursor-pointer w-[140px] h-[38px] border-[1px] border-solid border-[#EEEDE4] rounded-full text-[#EEEDE4] bg-transparent hover:bg-[#EEEDE4] hover:text-black text-lg font-normal">
            For Artists
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
