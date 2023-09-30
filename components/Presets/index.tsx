/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Dropdown from '../Dropdown'
import LatencySelector from '../LatencySelector'

/* eslint-disable react/no-unescaped-entities */
const Presets = () => {
  const preSetsOptions = [
    {
      icon: '/images/presets/building.svg',
      iconStyle:
        'h-[12.5px] w-[11px] md:h-[15px] md:w-[12.5px]  lg:h-[17.5px] lg:w-[14.7px] xl:h-[20px] xl:w-[17px] 2xl:h-[25px] 2xl:w-[21px]',
      title: 'Building a decentralized data infrastructure',
      description:
        'Build, manage, and scale decentralized data clouds, interconnect Xnodes to form a mesh network for seamless global data sharing',
      list: [
        'Xnode provision',
        '2 x small server',
        'Medium latency',
        'Unified API (Websocket, Kafka)',
      ],
    },
    {
      icon: '/images/presets/computer.svg',
      iconStyle:
        'h-[12.5px] w-[15.5px] md:h-[15px] md:w-[18.5px]  lg:h-[17.5px] lg:w-[21.7px] xl:h-[20px] xl:w-[25px] 2xl:h-[25px] 2xl:w-[31px]',
      title: 'Developing Apps and dApps',
      description:
        'Rapid prototype, test, and deploy mobile, web & decentralized applications (dApps)',
      list: [
        'Xnode provision',
        '2 x small server',
        'Low latency',
        'Unified API (Websocket, REST API, Kafka, Web3 Adapter)',
      ],
    },
    {
      icon: '/images/presets/chart.svg',
      iconStyle:
        'h-[12.5px] w-[16.5px] md:h-[15px] md:w-[20px]  lg:h-[17.5px] lg:w-[23px] xl:h-[20px] xl:w-[26px] 2xl:h-[25px] 2xl:w-[33px]',
      title: 'Real time analysis engine',
      description:
        'Rapid prototype, test, and deploy mobile, web & decentralized applications (dApps)',
      list: [
        'Xnode provision',
        '2 x small server',
        'Low latency',
        'Unified API (Websocket, REST API, Kafka, Web3 Adapter)',
      ],
    },
    {
      icon: '/images/presets/search.svg',
      iconStyle:
        'h-[12.5px] w-[12.5px] md:h-[15px] md:w-[15px]  lg:h-[17.5px] lg:w-[17.5px] xl:h-[20px] xl:w-[20px] 2xl:h-[25px] 2xl:w-[25px]',
      title: 'Research and development',
      description:
        'Rapid prototype, test, and deploy mobile, web & decentralized applications (dApps)',
      list: [
        'Xnode provision',
        '2 x small server',
        'Low latency',
        'Unified API (Websocket, REST API, Kafka, Web3 Adapter)',
      ],
    },
    {
      icon: '/images/presets/person.svg',
      iconStyle:
        'h-[12.5px] w-[15.5px] md:h-[15px] md:w-[18.5px]  lg:h-[17.5px] lg:w-[21.7px] xl:h-[20px] xl:w-[25px] 2xl:h-[25px] 2xl:w-[31px]',
      title: 'Run a validator',
      description:
        'Rapid prototype, test, and deploy mobile, web & decentralized applications (dApps)',
      list: [
        'Xnode provision',
        '2 x small server',
        'Low latency',
        'Unified API (Websocket, REST API, Kafka, Web3 Adapter)',
      ],
    },
  ]

  return (
    <>
      <div className="w-full max-w-[1053px]">
        <div>
          <div className="text-[18px] font-medium -tracking-[2%] text-[#959595] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:text-[32px]">
            Get started with use cases
          </div>
          <div className="mt-[15px] text-[10px] font-bold md:mt-[18px] md:text-[12px] lg:mt-[21px] lg:text-[14px] lg:!leading-[24px] xl:pl-[5px] xl:text-[16px] 2xl:mt-[30px] 2xl:text-[20px]">
            Select one of the presets below or fully customize your
            configurations
          </div>
        </div>
        <div className="mt-[12.5px] grid justify-between gap-x-[8px] gap-y-[15px] md:mt-[15px] md:gap-x-[9px] md:gap-y-[18px] lg:mt-[17.5px] lg:gap-x-[10.5px] lg:gap-y-[21px] xl:gap-x-[12px] xl:gap-y-[24px] 2xl:mt-[25px] 2xl:grid-cols-3 2xl:gap-x-[15px] 2xl:gap-y-[30px]">
          {preSetsOptions.map((option, index) => (
            <div
              className="h-[400px] transform cursor-pointer rounded-[5px] border-[0.5px] border-[#D9D9D9] p-[10px] transition-transform hover:scale-105 md:p-[12px] lg:p-[14px] xl:p-[16px] 2xl:p-[20px]"
              key={index}
            >
              <div className="relative h-full w-full max-w-[300px]">
                <img
                  src={option.icon}
                  alt="image"
                  className={`transform cursor-pointer transition-transform hover:scale-105 ${option.iconStyle}`}
                />
                <div className="mt-[8px] text-[9px] font-bold text-[#313131] md:mt-[9px] md:text-[11px] lg:mt-[10.5px] lg:text-[12.5px] lg:!leading-[22px] xl:text-[14.5px] 2xl:mt-[15px] 2xl:text-[18px]">
                  {option.title}
                </div>
                <div className=" mt-[5px] mr-[10px] text-[8px]  font-medium text-[#959595] md:mt-[6px] md:mr-[12px]  md:text-[9px] lg:mt-[7px] lg:mr-[14px] lg:text-[11px] lg:!leading-[19px] xl:text-[13px] 2xl:mt-[10px] 2xl:mr-[20px] 2xl:text-[16px]">
                  {option.description}
                </div>
                <div className="mt-[8px] md:mt-[9px] lg:mt-[10.5px] 2xl:mt-[15px]">
                  <ul className="list-disc pl-[25px] text-[8px] font-semibold  text-[#505050]   md:text-[9px]  lg:text-[11px] lg:!leading-[150%] xl:text-[13px]  2xl:text-[16px]">
                    {option.list.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`absolute bottom-0 flex  gap-x-[5px] md:gap-x-[6px] lg:gap-x-[7px] xl:gap-x-[8px]  2xl:gap-x-[10px]`}
                >
                  <img
                    src="/images/presets/server.svg"
                    alt="image"
                    className={`h-[18px] w-[22.5px] md:h-[21.5px] md:w-[27px] lg:h-[25px] lg:w-[31.5px] xl:h-[29px] xl:w-[36px] 2xl:h-[36px] 2xl:w-[45px]`}
                  />
                  <img
                    src="/images/presets/server.svg"
                    alt="image"
                    className={`h-[18px] w-[22.5px] md:h-[21.5px] md:w-[27px] lg:h-[25px] lg:w-[31.5px] xl:h-[29px] xl:w-[36px] 2xl:h-[36px] 2xl:w-[45px]`}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="h-[400px] rounded-[5px] border-[0.5px] border-[#D9D9D9] p-[10px] md:p-[12px] lg:p-[14px] xl:p-[16px] 2xl:p-[20px]">
            <div className="relative h-full w-full max-w-[300px]">
              <img
                src="/images/presets/robot.svg"
                alt="image"
                className={`'h-[12.5px] 2xl:w-[31px]' w-[15.5px] transform cursor-pointer transition-transform hover:scale-105 md:h-[15px]  md:w-[18.5px] lg:h-[17.5px] lg:w-[21.7px] xl:h-[20px] xl:w-[25px] 2xl:h-[25px]`}
              />
              <div className="mt-[8px] text-[9px] font-bold text-[#313131] md:mt-[9px] md:text-[11px] lg:mt-[10.5px] lg:text-[12.5px] lg:!leading-[22px] xl:text-[14.5px] 2xl:mt-[15px] 2xl:text-[18px]">
                Customized LLMs, analytics, and dashboards
              </div>
              <div className=" mt-[5px] mr-[10px] text-[8px]  font-medium text-[#959595] md:mt-[6px] md:mr-[12px]  md:text-[9px] lg:mt-[7px] lg:mr-[14px] lg:text-[11px] lg:!leading-[19px] xl:text-[13px] 2xl:mt-[10px] 2xl:mr-[20px] 2xl:text-[16px]">
                Customized your Xnode provision by selecting the available
                configurations below
              </div>
              <div className="mt-[8px] w-fit rounded-[5px] border-[1px] border-[#D6D6D6] bg-[#F1F1F1] px-[4px] py-[2px] text-[5px] font-semibold md:mt-[9px] md:text-[6px] lg:mt-[10.5px] lg:px-[5px] lg:py-[3px] lg:text-[7px] lg:!leading-[12px] xl:text-[8px]  2xl:mt-[15px] 2xl:py-[5px] 2xl:px-[7px] 2xl:text-[10px]">
                COMING SOON
              </div>
              <div className={`absolute bottom-0`}>
                <img
                  src="/images/presets/config.svg"
                  alt="image"
                  className={`h-[18px] w-[22.5px] md:h-[21.5px] md:w-[27px] lg:h-[25px] lg:w-[31.5px] xl:h-[29px] xl:w-[36px] 2xl:h-[36px] 2xl:w-[45px]`}
                />
              </div>
            </div>
          </div>
          <div className="h-[400px] rounded-[5px] border-[0.5px] border-[#D9D9D9] p-[10px] md:p-[12px] lg:p-[14px] xl:p-[16px] 2xl:p-[20px]">
            <div className="relative h-full w-full max-w-[300px]">
              <img
                src="/images/presets/robot.svg"
                alt="image"
                className={`'h-[12.5px] 2xl:w-[31px]' w-[15.5px] transform cursor-pointer transition-transform hover:scale-105 md:h-[15px]  md:w-[18.5px] lg:h-[17.5px] lg:w-[21.7px] xl:h-[20px] xl:w-[25px] 2xl:h-[25px]`}
              />
              <div className="mt-[8px] text-[9px] font-bold text-[#313131] md:mt-[9px] md:text-[11px] lg:mt-[10.5px] lg:text-[12.5px] lg:!leading-[22px] xl:text-[14.5px] 2xl:mt-[15px] 2xl:text-[18px]">
                Custom configuration
              </div>
              <div className=" mt-[5px] mr-[10px] text-[8px]  font-medium text-[#959595] md:mt-[6px] md:mr-[12px]  md:text-[9px] lg:mt-[7px] lg:mr-[14px] lg:text-[11px] lg:!leading-[19px] xl:text-[13px] 2xl:mt-[10px] 2xl:mr-[20px] 2xl:text-[16px]">
                Fully customize your Xnode provision by selecting the available
                configurations in the next page
              </div>
              <div className={`absolute bottom-0`}>
                <img
                  src="/images/presets/config.svg"
                  alt="image"
                  className={`h-[18px] w-[22.5px] md:h-[21.5px] md:w-[27px] lg:h-[25px] lg:w-[31.5px] xl:h-[29px] xl:w-[36px] 2xl:h-[36px] 2xl:w-[45px]`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Presets
