/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Dropdown from '../Dropdown'
import LatencySelector from '../LatencySelector'

interface ModalProps {
  includedServicesArray: string[]
  onChangeIncludedService(string): void
}

/* eslint-disable react/no-unescaped-entities */
const IncludedServices = ({ ...data }: ModalProps) => {
  const preSetsOptions = [
    {
      title: 'Kubernetes',
      description:
        'automating deployment, scaling, and management of containerized applications',
    },
    {
      title: 'Openmesh Consensus',
      description: 'Explanation here',
    },
    {
      title: 'BitTorrent Protocol Client',
      description: 'Used for seeding purposes',
    },
    {
      title: 'Phytia Pro',
      description: 'Explanation here',
    },
    {
      title: 'APIs & Connectivity',
      description: 'Websockets',
    },
  ]

  return (
    <>
      <div className="w-full">
        <div>
          <div className="text-[18px] font-medium -tracking-[2%] text-[#959595] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:text-[32px]">
            Included services
          </div>
        </div>
        <div className="mt-[15px] rounded-[10px] bg-[#F9F9F9] p-[10px] md:mt-[18px] md:p-[12px] lg:mt-[21px] lg:p-[14px] xl:p-[16px] 2xl:mt-[30px] 2xl:p-[20px]">
          <div className="text-[10px] font-bold text-[#000]  md:text-[12px]  lg:text-[14px] lg:!leading-[24px] xl:pl-[5px] xl:text-[16px]  2xl:text-[20px]">
            Your preset includes the following services by default
          </div>
          <div className="relative mt-[12.5px] grid justify-between gap-x-[15px] gap-y-[15px] md:mt-[15px] md:grid-cols-2 md:gap-x-[18px] md:gap-y-[18px] lg:mt-[17.5px] lg:grid-cols-2 lg:gap-x-[21px] lg:gap-y-[21px] xl:grid-cols-3 xl:gap-x-[24px] xl:gap-y-[24px] 2xl:mt-[25px] 2xl:grid-cols-3 2xl:gap-x-[30px] 2xl:gap-y-[30px]">
            {preSetsOptions.map((option, index) => (
              <div
                className={`relative h-[100px] cursor-pointer rounded-[5px] border-[0.5px] border-[#D9D9D9] bg-[#fff] p-[10px] hover:shadow-[0_4px_20px_0px_rgba(3,84,236,0.40)] md:p-[12px] lg:h-[150px] lg:p-[14px] xl:p-[16px] 2xl:p-[20px] ${
                  data.includedServicesArray.includes(option.title)
                    ? 'shadow-[0_5px_8px_0px_rgba(0,0,0,0.10)]'
                    : ''
                }`}
                key={index}
                onClick={() => {
                  data.onChangeIncludedService(option.title)
                }}
              >
                <div className="h-full w-full max-w-[300px]">
                  <div className="text-[9px] font-bold text-[#313131] md:text-[11px]  lg:text-[12.5px] lg:!leading-[22px] xl:text-[14.5px]  2xl:text-[18px]">
                    {option.title}
                  </div>
                  <div className=" mt-[5px] mr-[10px] text-[8px]  font-medium text-[#959595] md:mt-[6px] md:mr-[12px]  md:text-[9px] lg:mt-[7px] lg:mr-[14px] lg:text-[11px] lg:!leading-[19px] xl:text-[13px] 2xl:mt-[10px] 2xl:mr-[20px] 2xl:text-[16px]">
                    {option.description}
                  </div>
                </div>
                {data.includedServicesArray.includes(option.title) && (
                  <div className="absolute top-[1px] right-0">
                    <img
                      src="/images/presets/check.svg"
                      alt="image"
                      className={
                        'h-[21px] w-[25px] md:h-[25px] md:w-[30px] lg:h-[29.5px] lg:w-[35px] xl:h-[33px] xl:w-[40px] 2xl:h-[42px] 2xl:w-[50px]'
                      }
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default IncludedServices
