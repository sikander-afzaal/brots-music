import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const scrollFunc = () => {
      if (window.scrollY > 100) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <div
      className={`wrapper transition-all duration-300 py-[30px] fixed top-0 left-0 z-[100] ${
        bg ? "bg-black" : ""
      }`}
    >
      <header className="contain justify-between items-center ">
        <Link href="/">
          <Image alt="..." src="/logo.png" width={80} height={50} />
        </Link>
        <div className="flex justify-start items-center gap-5">
          <button
            className={`uppercase border-0 bg-transparent ${
              bg ? "text-white" : "text-black"
            } text-base sm:text-lg font-normal`}
          >
            Sign IN
          </button>
          <button className="uppercase transition-all duration-300 cursor-pointer w-[140px] sm:w-[160px] h-[38px] border-[1px] border-solid border-[#EEEDE4] rounded-full text-[#EEEDE4] bg-transparent hover:bg-[#EEEDE4] hover:text-black text-base sm:text-lg font-normal">
            For Artists
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
