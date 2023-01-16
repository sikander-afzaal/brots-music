import Music from "@/components/Details/Music";
import Faq from "@/components/Landing/Faq";
import Partners from "@/components/Landing/Partners";
import Releases from "@/components/Landing/Releases";
import Steps from "@/components/Landing/Steps";

const Details = () => {
  return (
    <div>
      <Music />
      <Releases heading={"MORE COLLECTIBLES"} />
      <Steps />
      <Partners />
      <Faq />
    </div>
  );
};

export default Details;
