/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import Footer from '../Footer'
import CostSaving from './lp-components/CostSaving'

const LandingPage = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center rounded-[10px] bg-[#F9F9F9] pt-[45px] pb-[20px] md:pl-[102px] md:pr-[158px] md:pt-[54px] md:pb-[213px] lg:pl-[119px] lg:pr-[184px] lg:pt-[63px] lg:pb-[248px] xl:max-w-[1800px] xl:pl-[136px] xl:pr-[211px] xl:pt-[72px] xl:pb-[284px] 2xl:pl-[170px] 2xl:pr-[264px] 2xl:pt-[90px] 2xl:pb-[355px]">
        <div className="flex flex-col items-center  ">
          <div className="mt-[30px] md:w-[564px] lg:w-[658px] xl:mt-[48px] xl:w-[752px] 2xl:mt-[60px] 2xl:w-[939px]">
            <h1 className="text-center text-[35px] font-bold leading-[100px] tracking-[-5%] text-[#000000] md:text-[66px] lg:text-[77px] xl:text-[88px] 2xl:text-[110px]">
              Revolution Has Started!
            </h1>
          </div>
          <div className="mt-[20px] mb-[20px] h-[228px] w-[355px] px-[20px]  md:w-[426px]  lg:w-[482px]  xl:w-[568px]  2xl:w-[710px]">
            <p className="text-center text-[18px] leading-[36.31px] tracking-[-5%] text-[#444444] md:text-[22px] lg:text-[25px] xl:text-[29px] 2xl:text-[36px]">
              Build your own data clouds, infrastructure, data connectivity,
              APIs, analytics&nbsp;
              <span className="underline underline-offset-[8px]">
                in minutes, instead of weeks.
              </span>
            </p>
            <div className="mt-[30px] flex flex-col items-center text-[13px] font-medium md:text-[15.6px] lg:text-[18px] xl:text-[21px] 2xl:text-[26px]">
              <div className="flex flex-row gap-4">
                <img alt="image" src="/images/landingPage/aproved.svg"></img>
                <span className=" leading-[31.47px] tracking-[1%] text-[#2656D6]">
                  Pay only for bare metal servers.
                </span>
              </div>
              <div className="flex flex-row gap-4">
                <img alt="image" src="/images/landingPage/aproved.svg"></img>
                <span className="leading-[31.47px] tracking-[1%] text-[#2656D6]">
                  No license, no setup fees.
                </span>
              </div>
            </div>
          </div>
          <CostSaving></CostSaving>
          <div></div>
          <div className="mt-[100px] flex h-[169px] w-[208px] flex-col  items-center  md:w-[250px]  lg:w-[290px]  xl:w-[333px] 2xl:w-[417px]">
            <h2 className="text-[20px] font-normal leading-[110px] text-[#000] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px]">
              Play around it now
            </h2>
            <button className="h-[59px] w-[132px] rounded-[50px] bg-gradient-to-r from-[#4255FF] via-[#6069EC] to-[#4023B5] p-[10px] text-center text-[20px] font-normal text-[#FFFFFF] md:w-[159px] lg:w-[185.5px] xl:w-[212px] 2xl:w-[265px]">
              <a href="/start-here">Launch</a>
            </button>
          </div>
        </div>
        <hr className="mt-[75px] mb-[50px] h-[2px] w-full bg-[#DFD6D6] md:mt-[90px] md:mb-[60px] md:w-3/5 lg:mt-[105px] lg:mb-[70px] lg:w-[70%] xl:mt-[120px] xl:mb-[80px] xl:w-4/5  2xl:mt-[150px] 2xl:mb-[100px] 2xl:w-full"></hr>
        <div className="flex h-[435px] w-full flex-col items-start justify-center md:w-[729px] lg:w-[850px] xl:w-[972px] 2xl:w-[1215px]">
          <div className="mr-[10px] flex h-[130px] w-full flex-col items-start md:mr-[180px] md:w-[648px] lg:mr-[210px] lg:w-[756px] xl:mr-[240px] xl:w-[864px] 2xl:mr-[300px]  2xl:w-[1081px] ">
            <h1 className="text-[15px] font-bold leading-[36.31px] text-black md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[30px]">
              Data Cloud Management
            </h1>
            <p className="mt-[25px] text-start text-[10px] font-normal leading-[24.2px] text-[#5A5A5A] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
              Cryptocurrency arbitrage detection, DeFi yield forecasting, GameFi
              engagement analytics, metaverse asset valuation, medical research
              data sharing, financial trend analysis, weather pattern trading
              strategies, cross-disciplinary scientific data management, cancer
              research outcome predictions.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-20">
            <div className="mt-[30px] flex h-[78px] w-full flex-row items-center justify-start">
              <img
                className="hidden h-[39] w-[99px] md:block"
                src="/images/logo/xnode-logo.svg"
                alt="images"
              ></img>
              <p className="text-[7px] font-normal leading-[30px] text-black md:ml-[24px] md:text-[8.4px] lg:ml-[28px] lg:text-[10px] xl:ml-[32px] xl:text-[11.2px] 2xl:ml-[40px] 2xl:text-[14px]">
                Cost
                <br /> Speed to production <br />
                Ongoing cost
              </p>
              <div className="ml-[20px] flex flex-col gap-y-5">
                <hr className="via-rgba to-opacity-33 h-[12px] w-[20px] rounded-xl bg-gradient-to-tl from-[#707070] md:w-[196px] lg:w-[230px] xl:w-[260px] 2xl:w-[327px]"></hr>
                <hr className="via-rgba to-opacity-33 to-opacity-33 h-[12px] w-[70px] rounded-xl bg-gradient-to-tl from-[#5A5A5A] via-[rgba(123,123,123,0.707391)] md:w-[408px] lg:w-[476px] xl:w-[544px] 2xl:w-[679px]"></hr>
                <hr className="via-rgba to-opacity-33 via-rgba to-opacity-33 via-rgba-65-65-65-33 to-opacity-33 h-[12px] w-[25px] rounded-xl bg-gradient-to-tl from-[#CCCCCC] md:w-[261px] lg:w-[304px] xl:w-[348px] 2xl:w-[435px] "></hr>
              </div>
              <div className="ml-[20px] flex flex-col gap-y-5 md:ml-[24px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[40px]">
                <div className=" flex flex-row items-center ">
                  <h1 className="text-[10px] font-bold  text-black  md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
                    27X
                  </h1>
                  <p className="ml-[7px] text-[7px] font-normal text-black md:text-[8.4px] lg:text-[10px] xl:text-[11.2px] 2xl:text-[14px]">
                    Cost Saving
                  </p>
                </div>
                <div className="flex w-[100px] flex-row  items-center md:w-[120px] lg:w-[140px] xl:w-[160px] 2xl:w-[200px] ">
                  <h1 className="text-[10px] font-bold  text-black  md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
                    10X
                  </h1>
                  <p className="ml-[7px] text-center text-[7px] font-normal text-black md:text-[8.4px] lg:text-[10px] xl:text-[11.2px] 2xl:text-[14px]">
                    Development Time
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[15px] flex h-[78px] w-full flex-row  items-center justify-start md:mt-[18px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[30px]">
              <h2 className="hidden text-[10px] font-bold text-black md:flex md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
                Others
              </h2>
              <p className="text-[7px] font-normal leading-[30px] text-black md:ml-[45px] md:text-[8.4px] lg:ml-[52.5px] lg:text-[10px] xl:ml-[60px] xl:text-[11.2px] 2xl:ml-[75px] 2xl:text-[14px]">
                Cost
                <br /> Speed to production <br />
                Ongoing cost
              </p>

              <div className="ml-[20px] flex flex-col gap-y-5">
                <hr className=" via-rgba-255-164-164-33 to-opacity-33 h-[12px] w-[120px] rounded-xl bg-gradient-to-tl from-[#FD003D] md:w-[408px] lg:w-[476px] xl:w-[544px] 2xl:w-[679px]"></hr>
                <hr className="via-rgba-255-164-164-33 to-opacity-33 h-[12px] w-[20px] rounded-xl bg-gradient-to-tl from-[#FFCF96] md:w-[143px] lg:w-[166px] xl:w-[190px] 2xl:w-[238px]"></hr>
                <hr className=" via-rgba-255-164-164-33 to-opacity-33 h-[12px] w-[130px] rounded-xl bg-gradient-to-tl from-[#FD003D] md:w-[261px] lg:w-[304px] xl:w-[348px] 2xl:w-[435px] "></hr>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-[20px] mb-[30px] h-[2px] w-full bg-[#DFD6D6] md:mt-[24px] md:w-3/5 lg:mt-[28px] lg:w-[70%] xl:mt-[32px]  xl:w-4/5 2xl:mt-[40px] 2xl:w-full"></hr>
        <div className="flex h-[535px] w-[607px] flex-col items-center justify-center md:w-[730px] lg:w-[850px] xl:w-[972px] 2xl:w-[1215px]  ">
          <div className=" flex flex-col items-start">
            <h1 className="text-[15px] font-bold leading-[36.31px] text-black md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[30px]">
              Explore possibilites
            </h1>
            <p className="mt-[25px] text-start text-[10px] font-normal leading-[24.2px] text-[#5A5A5A] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
              Cryptocurrency arbitrage detection, DeFi yield forecasting, GameFi
              engagement analytics, metaverse asset valuation, medical research
              data sharing, financial trend analysis, weather pattern trading
              strategies, cross-disciplinary scientific data management, cancer
              research outcome predictions.
            </p>
          </div>
          <div className="grid h-full w-full grid-cols-1 pt-[30px] md:grid-cols-3 lg:grid-cols-3 ">
            <div className="flex  w-[340px] flex-col gap-y-[10px]  p-[20px]">
              <img
                alt="images"
                className="h-[48.5px] w-[44.06px]"
                src="/images/landingPage/cube.svg"
              ></img>
              <p className="text-[9px] font-normal leading-[30px] text-black md:text-[10.8px] lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[18px]">
                Blockchain and Smart Contracts
              </p>
              <h1 className="text-[12px] font-bold leading-[30px] text-black md:text-[14.4px] lg:text-[17px] xl:text-[19.2px] 2xl:text-[24px]">
                On-chain Query Execution for Blockchain Applications.
              </h1>
            </div>
            <div className="flex  w-[340px] flex-col gap-y-[10px]  p-[20px]">
              <img
                alt="images"
                className="h-[48.5px] w-[44.06px]"
                src="/images/landingPage/cube.svg"
              ></img>
              <p className="text-[9px] font-normal leading-[30px] text-black md:text-[10.8px] lg:text-[12.5px] xl:text-[14.5px] 2xl:text-[18px]">
                Blockchain and Smart Contracts
              </p>
              <h1 className="text-[12px] font-bold leading-[30px] text-black md:text-[14.4px] lg:text-[17px] xl:text-[19.2px] 2xl:text-[24px]">
                On-chain Query Execution for Blockchain Applications.
              </h1>
            </div>
            <div className=" flex  w-[170px] flex-col  items-start  text-[#0354EC]  md:w-[204px] lg:w-[238px] xl:w-[272px]   2xl:w-[340px]">
              <a
                className="ml-[5px] font-inter text-[8px] font-bold leading-[18px] md:text-[10px] lg:text-[11.2px] xl:text-[13px] 2xl:text-[16px]"
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
                className="ml-[5px] mt-[4px] text-justify font-inter text-[7px] font-medium leading-[24px] md:text-[8.4px] lg:text-[10px] xl:text-[11.2px] 2xl:text-[14px]"
              >
                An introduction to xNode's role in decentralizing data
                infrastructure.
              </a>

              <a
                className="mt-[25px] ml-[5px] font-inter text-[8px] font-bold leading-[18px] md:mt-[30px] md:text-[10px] lg:mt-[35px] lg:text-[11.2px] xl:mt-[40px] xl:text-[13px] 2xl:mt-[50px] 2xl:text-[16px]"
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
                className="ml-[5px] mt-[1px] text-justify font-inter text-[7px] font-medium leading-[24px] md:text-[8.4px] lg:text-[10px] xl:text-[11.2px] 2xl:text-[14px]"
              >
                Step-by-step guide to deploying an xNode.
              </a>
              <a
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[5px] mt-[1px] text-justify font-inter text-[7px]  font-medium leading-[24px] md:text-[8.4px] lg:text-[10px] xl:text-[11.2px] 2xl:text-[14px]"
              >
                Technical design
              </a>
              <a
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[5px] mt-[22px] text-justify font-inter text-[7px] font-medium leading-[24px] md:text-[8.4px] lg:text-[10px] xl:text-[11.2px] 2xl:text-[14px]"
              >
                Developer support and resources
              </a>
              <a
                href="https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/openmesh-overview"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-[5px] mt-[1px] text-justify font-inter text-[7px] font-medium leading-[24px] md:text-[8.4px] lg:text-[10px] xl:text-[11.2px] 2xl:text-[14px]"
              >
                Docs & Research
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default LandingPage
