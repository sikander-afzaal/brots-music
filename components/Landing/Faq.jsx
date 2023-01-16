import { useEffect, useRef, useState } from "react";

const Faq = () => {
  const FAQ__DATA = [
    {
      question: "Why should I purchase digital collectibles?",
      answer:
        "By purchasing digital collectibles of your favorite artists, you’re not only supporting them financially, but you’re also gaining access to exclusive content, opportunities, and experiences. ",
    },
    {
      question: "How can I verify the authenticity of a digital collectible?",
      answer:
        "Each digital collectible is paired with a unique NFT that serves as proof of authenticity. This NFT can be easily verified on the blockchain.",
    },
    {
      question: "Can I resell my digital collectibles?",
      answer:
        "Yes, you can export and resell your digital collectibles on the marketplaces that support NFTs like OpenSea or Rarible.",
    },
    {
      question:
        "What kind of benefits can I expect from purchasing digital collectibles?",
      answer:
        "By purchasing digital collectibles, you’ll be able to flex your collection to prove your authenticity and passion as a music fan, unlock special access, and gain entry to exclusive contests, meet-and-greets with Brots artists, and much more.",
    },
    {
      question:
        "I’m not very familiar with cryptocurrency, can I still use Brots?",
      answer:
        "Absolutely! Using Brots is very easy and you don’t need to have any prior knowledge or experience with cryptocurrency. You can pay with your standard fiat currency (€/$) and at the time of registration, we’ll set up a digital wallet for you for free. This way, you can easily purchase and own digital collectibles on our platform, without needing to know anything about cryptocurrency.",
    },
  ];
  return (
    <div className="wrapper mt-[100px] lg:mt-[190px]">
      <div className="contain lg:flex-row flex-col justify-around items-start gap-12 lg:gap-8 ">
        <div className="flex justify-start items-start flex-col w-full max-w-[600px] gap-5">
          <h2 className="text-cream text-[40px] sm:text-[79px] lg:text-[94px] 1xl:text-[120px] font-medium">
            FAQs
          </h2>
          <p className="text-2xl lg:block hidden 1xl:text-[32px] text-cream">
            Welcome to our FAQ section, where you can find answers to some of
            the most commonly asked questions about our platform.
          </p>
        </div>
        <div className="flex justify-start w-full items-start flex-col gap-10 3xl:max-w-[1200px] max-w-[1000px]">
          {FAQ__DATA.map((elem, idx) => {
            return <FAQ__ITEM {...elem} key={idx + "faq"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const FAQ__ITEM = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  const answerRef = useRef();
  const answerRef2 = useRef();
  useEffect(() => {
    if (active) {
      answerRef.current.style.height = answerRef2.current.clientHeight + "px";
    } else {
      answerRef.current.style.height = "0px";
    }
  }, [active]);

  return (
    <div className="flex w-full justify-start items-start flex-col gap-5">
      <div
        onClick={() => setActive((prev) => !prev)}
        className="flex cursor-pointer justify-start items-center w-full gap-4 sm:gap-8"
      >
        <div
          className={`${
            active ? "text-lightBlue" : "text-cream"
          } rounded-full border-[1px] border-white border-solid grid transition-all duration-500 place-items-center min-w-[40px] 1xl:min-w-[60px] min-h-[40px] 1xl:min-h-[60px]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 1xl:w-9 h-6 1xl:h-9 ${
              active ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
        <p
          className={`${
            active ? "text-lightBlue" : "text-cream"
          } text-[22px] sm:text-[25px] 1xl:text-[42px]`}
        >
          {question}
        </p>
      </div>
      <div
        ref={answerRef}
        className={`transition-all duration-500 overflow-hidden w-full`}
      >
        <p
          ref={answerRef2}
          className="text-white font-normal text-lg sm:text-xl 1xl:text-2xl"
        >
          {answer}
        </p>
      </div>
    </div>
  );
};
