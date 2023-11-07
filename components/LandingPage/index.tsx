/* eslint-disable no-unused-vars */

import Footer from "../Footer";
import CostSaving from "./lp-components/CostSaving";

const LandingPage = () => {
  return (
    <>
      <div className="ml-[8px]  flex w-full max-w-[1800px] flex-col items-center rounded-[10px] bg-[#F9F9F9] pl-[85px] pr-[132px] pt-[45px] pb-[172px] md:pl-[102px] md:pr-[158px] md:pt-[54px] md:pb-[213px] lg:pl-[119px] lg:pr-[184px] lg:pt-[63px] lg:pb-[248px] xl:pl-[136px] xl:pr-[211px] xl:pt-[72px] xl:pb-[284px] 2xl:pl-[170px] 2xl:pr-[264px] 2xl:pt-[90px] 2xl:pb-[355px]   ">
        <div className="flex flex-col items-center  ">
          <div className="mt-[60px] h-[200px] w-[939px] ">
            <h1 className="text-center text-[110px] font-bold leading-[100px] tracking-[-5%] text-black">
              Revolution Has Started!
            </h1>
          </div>
          <div className="mt-[20px] mb-[20px] h-[228px] w-[710px]  px-[20px]">
            <p className="text-center text-[30px] leading-[36.31px] tracking-[-5%] text-[#444444]">
              Build your own data clouds, infrastructure, data connectivity,
              APIs, analytics&nbsp;
              <span className="underline">in minutes, instead of weeks.</span>
            </p>
            <div className="mt-[30px] flex flex-col items-center">
              <div className="flex flex-row gap-4">
                <img src="/images/landingPage/aproved.svg"></img>
                <span className="text-[26px] font-normal leading-[31.47px] tracking-[1%] text-[#2656D6]">
                  Pay only for bare metal servers.
                </span>
              </div>
              <div className="flex flex-row gap-4">
                <img src="/images/landingPage/aproved.svg"></img>
                <span className="text-[26px] font-normal leading-[31.47px] tracking-[1%] text-[#2656D6]">
                  No license, no setup fees.
                </span>
              </div>
            </div>
          </div>
          <CostSaving></CostSaving>
          <div></div>
          <div className="mt-[100px] flex h-[169px] w-[417px] flex-col items-center ">
            <h2 className="text-[40px] font-normal leading-[110px] text-black">
              Play around it now
            </h2>
            <button className="h-[59px] w-[265px] rounded-[50px] bg-gradient-to-r from-[#4255FF] via-[#6069EC] to-[#4023B5] p-[10px] text-center text-[20px] font-normal text-[#FFFFFF]">
              <a href="/start-here">Launch</a>
            </button>
          </div>
        </div>
        <hr className="mt-[150px] mb-[100px] h-[2px] w-full bg-[#DFD6D6] md:w-3/5 md:w-2/4  lg:w-[70%] xl:w-4/5 2xl:w-full"></hr>
        <div className="flex h-[435px] w-[1215px] flex-col items-start justify-center">
          <div className="mr-[300px] flex h-[130px] w-[1081px] flex-col  items-start ">
            <h1 className="text-[30px] font-bold leading-[36.31px] text-black">
              Data Cloud Management
            </h1>
            <p className="mt-[25px] text-start text-[20px] font-normal leading-[24.2px] text-[#5A5A5A]">
              Cryptocurrency arbitrage detection, DeFi yield forecasting, GameFi
              engagement analytics, metaverse asset valuation, medical research
              data sharing, financial trend analysis, weather pattern trading
              strategies, cross-disciplinary scientific data management, cancer
              research outcome predictions.
            </p>
          </div>
          <div className=" flex flex-col items-center gap-y-20">
            <div className="mt-[30px] flex h-[78px] w-full flex-row items-center justify-start">
              <img
                className="h-[39] w-[99px]"
                src="/images/logo/xnode-logo.svg"
              ></img>
              <p className="ml-[40px] text-[14px] font-normal leading-[30px] text-black">
                Cost
                <br /> Speed to production <br />
                Ongoing cost
              </p>
              <div className="ml-[20px] flex flex-col gap-y-5">
                <hr className="via-rgba to-opacity-33 h-[12px] w-[327px] rounded-xl bg-gradient-to-tl from-[#707070]"></hr>
                <hr className="via-rgba to-opacity-33 to-opacity-33 h-[12px] w-[679px] rounded-xl bg-gradient-to-tl from-[#5A5A5A] via-[rgba(123,123,123,0.707391)]"></hr>
                <hr className="via-rgba to-opacity-33 via-rgba to-opacity-33 via-rgba-65-65-65-33 to-opacity-33 h-[12px] w-[435px] rounded-xl bg-gradient-to-tl from-[#CCCCCC] "></hr>
              </div>
              <div className="ml-[40px] flex flex-col gap-y-5">
                <div className=" flex flex-row items-center ">
                  <h1 className="text-[20px] font-bold text-black">27X</h1>
                  <p className="ml-[7px] text-[14px] font-normal text-black">
                    Cost Saving
                  </p>
                </div>
                <div className="flex w-[200px] flex-row items-center ">
                  <h1 className="text-[20px] font-bold text-black">10X</h1>
                  <p className="ml-[7px] text-center text-[14px] font-normal text-black">
                    Development Time
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[30px]  flex h-[78px] w-full flex-row items-center justify-start">
              <h2 className="text-[19px] font-bold text-black">Others</h2>
              <p className="ml-[75px] text-[14px] font-normal leading-[30px] text-black">
                Cost
                <br /> Speed to production <br />
                Ongoing cost
              </p>

              <div className="ml-[20px] flex flex-col gap-y-5">
                <hr className=" via-rgba-255-164-164-33 to-opacity-33 h-[12px] w-[679px] rounded-xl bg-gradient-to-tl from-[#FD003D]"></hr>
                <hr className="via-rgba-255-164-164-33 to-opacity-33 h-[12px] w-[238px] rounded-xl bg-gradient-to-tl from-[#FFCF96]"></hr>
                <hr className=" via-rgba-255-164-164-33 to-opacity-33 h-[12px] w-[435px] rounded-xl bg-gradient-to-tl from-[#FD003D] "></hr>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[40px] mb-[30px] h-[2px] w-[w-full] bg-[#DFD6D6] md:w-3/5 md:w-2/4  lg:w-[70%] xl:w-4/5 2xl:w-full"></hr>
        <div className="flex h-[535px] w-[1215px] flex-col items-center justify-center  ">
          <div className=" flex flex-col items-start">
            <h1 className="text-[30px] font-bold leading-[36.31px] text-black">
              Explore possibilites
            </h1>
            <p className="mt-[25px] text-start text-[20px] font-normal leading-[24.2px] text-[#5A5A5A]">
              Cryptocurrency arbitrage detection, DeFi yield forecasting, GameFi
              engagement analytics, metaverse asset valuation, medical research
              data sharing, financial trend analysis, weather pattern trading
              strategies, cross-disciplinary scientific data management, cancer
              research outcome predictions.
            </p>
          </div>
          <div className="grid h-full w-full grid-cols-3 pt-[30px] ">
            <div className="flex h-[324px]  w-[340px] flex-col gap-y-[10px]  p-[20px]">
              <img
                className="h-[48.5px] w-[44.06px]"
                src="/images/landingPage/cube.svg"
              ></img>
              <p className="text-[18px] font-normal leading-[30px] text-black">
                Blockchain and Smart Contracts
              </p>
              <h1 className="text-[24px] font-bold leading-[30px] text-black">
                On-chain Query Execution for Blockchain Applications.
              </h1>
            </div>
            <div className="flex h-[324px]  w-[340px] flex-col gap-y-[10px]  p-[20px]">
              <img
                className="h-[48.5px] w-[44.06px]"
                src="/images/landingPage/cube.svg"
              ></img>
              <p className="text-[18px] font-normal leading-[30px] text-black">
                Blockchain and Smart Contracts
              </p>
              <h1 className="text-[24px] font-bold leading-[30px] text-black">
                On-chain Query Execution for Blockchain Applications.
              </h1>
            </div>
            <div className=" flex h-[324px] w-[340px] flex-col items-start   text-[#0354EC]">
              <a
                className="ml-[5px] font-inter text-[16px] font-bold leading-[18px]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
              >
                Understanding Xnode
              </a>
              <a
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[5px] mt-[4px] text-justify font-inter text-[14px] font-medium leading-[24px]"
              >
                An introduction to xNode's role in decentralizing data
                infrastructure.
              </a>

              <a
                className="mt-[50px] ml-[5px] font-inter text-[16px] font-bold leading-[18px]"
                target="_blank"
                rel="noopener noreferrer"
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
              >
                Setting Up
              </a>
              <a
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[5px] mt-[1px] text-justify font-inter text-[14px] font-medium leading-[24px]"
              >
                Step-by-step guide to deploying an xNode.
              </a>
              <a
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[5px] mt-[1px] text-justify font-inter text-[14px] font-medium leading-[24px]"
              >
                Technical design
              </a>
              <a
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[5px] mt-[22px] text-justify font-inter text-[14px] font-medium leading-[24px]"
              >
                Developer support and resources
              </a>
              <a
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[5px] mt-[1px] text-justify font-inter text-[14px] font-medium leading-[24px]"
              >
                Docs & Research
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
