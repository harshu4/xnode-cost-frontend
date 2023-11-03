/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import LatencySelector from "../LatencySelector";
import { title } from "process";
import { AccountContext } from "@/contexts/AccountContext";
import SubBarData from "../SubBarData";
import SubBarServers from "../SubBarServers";
import SubBarAPIs from "../SubBarAPIs";
import SubBarAnalytics from "../SubBarAnalytics";
import SubBarRPC from "../SubBarRPC";
import SubBarUtility from "../SubBarUtility";

/* eslint-disable react/no-unescaped-entities */
const LateralNav = ({ onValueChange }) => {
  const [presetId, setPresetId] = useState(0);
  const {
    selectionSideNavBar,
    setSelectionSideNavBar,
    next,
    setNext,
    nextFromScratch,
    setNextFromScratch,
  } = useContext(AccountContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [greenDotOpacity, setGreenDotOpacity] = useState(0);
  const { push } = useRouter();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const preSetsOptions = [
    {
      icon: "/images/lateralNavBar/start.svg",
      iconStyle:
        "w-[23px] h-[24px] md:w-[20px] lg:w-[24px] xl:w-[27px] 2xl:w-[34px]",
      title: "Start here",
    },
    {
      icon: "/images/lateralNavBar/cubo.svg",
      iconStyle:
        "w-[23px] h-[24px] md:w-[20px] lg:w-[24px] xl:w-[27px] 2xl:w-[34px]",
      title: "Dashboard",
    },
    {
      icon: "/images/lateralNavBar/server.svg",
      iconStyle:
        "w-[23px] h-[24px] md:w-[18.5px] lg:w-[22px] xl:w-[25px] 2xl:w-[31px]",
      title: "Servers",
    },
    {
      icon: "/images/lateralNavBar/tomada.svg",
      iconStyle:
        "w-[23px] h-[24px] md:w-[20px] lg:w-[25px] xl:w-[28px] 2xl:w-[35px]",
      title: "APIs",
    },
    {
      icon: "/images/lateralNavBar/database.svg",
      iconStyle:
        "w-[23px] h-[24px] md:w-[19.5px] lg:w-[23px] xl:w-[26px] 2xl:w-[33px]",
      title: "Data",
    },
    {
      icon: "/images/lateralNavBar/node.svg",
      iconStyle:
        "w-[23px] h-[24px] md:w-[20px] lg:w-[24.5px] xl:w-[28px] 2xl:w-[35px]",
      title: "RPC",
    },
    {
      icon: "/images/lateralNavBar/bolas.svg",
      iconStyle:
        "w-[23px]  h-[24px] md:w-[19.5px] lg:w-[22.5px] xl:w-[25.5px] 2xl:w-[32px]",
      title: "Analytics",
    },
    {
      icon: "/images/lateralNavBar/dash.svg",
      iconStyle:
        "w-[23px] h-[24px] md:w-[19.5px] lg:w-[22.5px] xl:w-[25.5px] 2xl:w-[32px]",
      title: "Apps",
    },
    {
      icon: "/images/lateralNavBar/ml.svg",
      iconStyle:
        "w-[23px] h-[24px] md:w-[18.5px] lg:w-[22px] xl:w-[25px] 2xl:w-[31px]",
      title: "ML/LLMs",
    },
    {
      icon: "/images/lateralNavBar/settings.svg",
      iconStyle:
        "w-[23px] h-[24px] md:w-[19.5px] lg:w-[22.5px] xl:w-[25.5px] 2xl:w-[32px]",
      title: "Utility",
    },
  ];

  function handleButtonClick(title: string) {
    if (title === "Start here") {
      setNextFromScratch(false);
      setNext(false);
      push("/");
      return;
    }
    if (!next && !nextFromScratch && title !== "Start here") {
      setGreenDotOpacity(1); // Mostrar a bolinha verde com opacidade total
      setTimeout(() => setGreenDotOpacity(0), 1000); // Esconder a bolinha verde após 5 segundos
    } else {
      setSelectionSideNavBar(title);
    }
    setHoveredIcon(title);
  }

  if (!isOpen) {
    return (
      <>
        <div
          onMouseEnter={() => setIsOpen(true)}
          className="z-50 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <div className="">
            <div className="flex w-[50px] flex-col items-center justify-center px-[15px] pb-[24px] pt-[17px] md:px-[11.5px] md:pb-[30px] md:pt-[20px] lg:px-[13.5px] lg:pb-[34px] lg:pt-[24px] xl:px-[15px] xl:pb-[39px] xl:pt-[27px] 2xl:px-[19px] 2xl:pb-[49px] 2xl:pt-[34px]">
              <div className="h-[24px] w-[32px]">
                <img src="/images/lateralNavBar/box.svg"></img>
              </div>
              <div className={` mt-[139px] mb-[33px] h-[12px] w-[20.5px] `}>
                <img
                  onClick={() => setIsOpen(true)}
                  src="/images/lateralNavBar/nav.svg"
                  alt="image"
                />
              </div>

              <ul className="flex flex-col items-center gap-[38px]">
                {preSetsOptions.map((option, index) => (
                  <li key={index}>
                    <div className=" h-[24px] w-[23px]">
                      <img src={option.icon}></img>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        onMouseLeave={() => setIsOpen(false)}
        className="relative z-50 max-w-[177px]  pb-[200px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] md:w-full md:pb-[600px]"
      >
        <div className="flex  flex-col items-start">
          <div className="mb-[139px] mt-[14px] flex h-[39px] w-[177px] flex-row items-center justify-between   ">
            <div className="ml-[15px] flex h-[12px] w-[20.4px] cursor-pointer flex-col items-center  ">
              <img
                onClick={() => setIsOpen(false)}
                src="/images/lateralNavBar/nav.svg"
                alt="image"
              />
            </div>
            <a
              href={"/"}
              className="ml-[18.6px] mr-[18.6px] flex h-[39px] w-[99px] cursor-pointer flex-col items-center "
            >
              <img src="/images/logo/xnode-logo.svg" alt="image" />
            </a>
          </div>
          {preSetsOptions.map((option, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIcon(option.title)}
              onClick={() => {
                handleButtonClick(option.title);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`relative  mb-[14px] flex h-[24px] w-full flex-row items-center justify-between gap-[15px] px-[13px]  py-[14px] md:px-[13px] md:py-[17px] lg:px-[15.5px] lg:py-[20px] xl:px-[17.5px] xl:py-[22.5px] 2xl:px-[22px] 2xl:py-[28px] ${
                !next && !nextFromScratch && option.title !== "Start here"
                  ? "w-full opacity-50 hover:bg-[#fff]"
                  : "cursor-pointer hover:bg-[#F4F4F4]"
              } ${selectionSideNavBar === option.title ? "bg-[#F4F4F4]" : ""}`}
            >
              <img
                src={option.icon}
                alt="image"
                className={`${option.iconStyle}  mx-auto`}
              />
              {option.title === "Start here" && (
                <img
                  src="/images/lateralNavBar/green-ellipse.svg"
                  alt="green dot"
                  style={{ opacity: greenDotOpacity }}
                  className="absolute top-2 right-2 h-3 w-3 transition-opacity duration-500"
                />
              )}
              <div className=" flex w-full items-center text-start font-inter text-[15px] font-medium !-tracking-[2%] text-[#000]  md:text-[9.5px] lg:text-[11px] lg:!leading-[19px]  xl:text-[13px] 2xl:text-[16px]">
                {option.title}
              </div>
            </div>
          ))}
        </div>
        {hoveredIcon === "Data" && (
          <div className="absolute top-[80px] -right-[283px] 2xl:top-[105px] 2xl:-right-[346px]">
            <SubBarData onValueChange={console.log("hello")} />
          </div>
        )}
        {hoveredIcon === "Servers" && (
          <div className="absolute top-[80px] -right-[282px] 2xl:top-[105px] 2xl:-right-[348px]">
            <SubBarServers onValueChange={console.log("hello")} />
          </div>
        )}
        {hoveredIcon === "APIs" && (
          <div className="absolute top-[80px] -right-[277px] 2xl:top-[105px] 2xl:-right-[346px]">
            <SubBarAPIs onValueChange={console.log("hello")} />
          </div>
        )}
        {hoveredIcon === "Analytics" && (
          <div
            onMouseLeave={() => setHoveredIcon(null)}
            className="absolute top-[80px] -right-[277px] 2xl:top-[105px] 2xl:-right-[346px]"
          >
            <SubBarAnalytics onValueChange={console.log("hello")} />
          </div>
        )}
        {hoveredIcon === "RPC" && (
          <div
            onMouseLeave={() => setHoveredIcon(null)}
            className="absolute top-[80px] -right-[277px] 2xl:top-[105px] 2xl:-right-[346px]"
          >
            <SubBarRPC onValueChange={console.log("hello")} />
          </div>
        )}
        {hoveredIcon === "Utility" ? (
          <div className="absolute top-[80px] -right-[277px] 2xl:top-[105px] 2xl:-right-[346px]">
            <SubBarUtility onValueChange={console.log("valueChanged")} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default LateralNav;
