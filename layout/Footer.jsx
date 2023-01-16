import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="wrapper mt-[100px] mid:mt-[200px] pb-8">
      <div className="contain flex-col justify-start items-start gap-8">
        <div className="flex justify-start items-start flex-col gap-5">
          <p className="text-[#989898] text-sm ">
            Brots srl innovativa Via Roberto da Sanseverino, 95, 38122 Trento TN
            P.IVA IT02570890224
          </p>
          <div className="flex justify-start items-start flex-col gap-2">
            <p className="text-[#989898] text-sm ">Backed By:</p>
            <div className="flex justify-start items-center gap-4">
              <Image src={"/prana.png"} width={113} height={16} alt="...." />
              <Image src={"/prana.png"} width={77} height={22} alt="...." />
            </div>
          </div>
        </div>
        <div className="flex flex-col mid:flex-row mid:grid mid:grid-cols-[1fr__auto] mid:grid-rows-2 2xl:flex pt-8 w-full justify-start mid:justify-between items-start mid:items-center place-items-center gap-5 md:gap-y-10 2xl:gap-2 border-t-[1px] border-solid border-[#2E2E31]">
          <div className="flex 2xl:w-auto w-full justify-start items-center gap-1">
            <Image src={"/purple-brot.png"} width={41} height={20} alt="...." />
            <p className="text-[#989898] text-sm ">
              © 2022 Brots Srl, all right reserved. Powered by blockchain
              technology.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-start items-start sm:items-center gap-5 col-start-1 col-end-3 row-start-1 row-end-2">
            <a className="text-[#989898] hover:underline text-sm " href="#">
              Privacy Policy
            </a>
            <a className="text-[#989898] hover:underline text-sm " href="#">
              Terms of Use
            </a>
            <a className="text-[#989898] hover:underline text-sm " href="#">
              Cookie Policy
            </a>
            <a className="text-[#989898] hover:underline text-sm " href="#">
              Contact Us
            </a>
            <a className="text-[#989898] hover:underline text-sm " href="#">
              FAQ
            </a>
            <a className="text-[#989898] hover:underline text-sm " href="#">
              Download App
            </a>
          </div>
          <div className="flex justify-start mid:justify-end 2xl:w-auto w-full items-center gap-4">
            <a href="#" target={"blank"}>
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-[#707070] w-[25px] h-[18px] hover:text-purple text-2xl"
              />
            </a>
            <a href="#" target={"blank"}>
              <FontAwesomeIcon
                icon={faInstagram}
                className=" w-[25px] h-[18px] text-[#707070] hover:text-purple text-2xl"
              />
            </a>
            <a href="#" target={"blank"}>
              <FontAwesomeIcon
                icon={faFacebook}
                className=" w-[25px] h-[18px] text-[#707070] hover:text-purple text-2xl"
              />
            </a>
            <a href="#" target={"blank"}>
              <FontAwesomeIcon
                icon={faYoutube}
                className=" w-[25px] h-[18px] text-[#707070] hover:text-purple text-2xl"
              />
            </a>
            <a href="#" target={"blank"}>
              <FontAwesomeIcon
                icon={faTiktok}
                className=" w-[25px] h-[18px] text-[#707070] hover:text-purple text-2xl"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
