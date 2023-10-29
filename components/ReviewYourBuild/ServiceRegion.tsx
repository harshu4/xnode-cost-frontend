/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Dropdown from '../Dropdown'

interface ModalProps {
  serviceRegion: string
  onValueChange(): void
}

const ServiceRegion = ({ ...data }: ModalProps) => {
  const [showTooltipServiceRegion, setShowTooltipServiceRegion] =
    useState<boolean>(false)

  return (
    <div className="flex rounded-[10px] bg-[#F9F9F9] px-[10px] py-[8px] text-[#000] md:px-[12px] md:py-[9px] lg:px-[14px] lg:py-[11px] xl:px-[16px] xl:py-[12px] 2xl:px-[20px] 2xl:py-[15px]">
      <div className="relative flex items-center gap-x-[10px]">
        <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[24px] xl:pl-[5px] xl:text-[16px] 2xl:text-[20px]">
          Service region
        </div>
        <img
          src={`/images/firstStep/question-mark.svg`}
          alt="image"
          className="h-[9px] w-[9px] transform cursor-pointer transition-transform hover:scale-105 md:h-[11px] md:w-[11px]  lg:h-[12px] lg:w-[12px] xl:h-[14px] xl:w-[14px] 2xl:h-[18px] 2xl:w-[18px]"
          onMouseEnter={() => setShowTooltipServiceRegion(true)}
          onMouseLeave={() => setShowTooltipServiceRegion(false)}
        />
        {showTooltipServiceRegion && (
          <div className="absolute left-[130px] top-[0px] w-full max-w-[270px]  rounded-[10px] bg-[#000] px-[13px] py-[10px] text-[8px] font-medium text-[#fff] md:left-[162px] md:px-[15px] md:py-[12px] md:text-[9px] lg:left-[189px] lg:px-[17px] lg:py-[14px] lg:text-[11px] lg:!leading-[19px] xl:left-[216px] xl:px-[20px] xl:py-[16px] xl:text-[13px] 2xl:left-[270px] 2xl:px-[25px] 2xl:py-[20px] 2xl:text-[16px]">
            <div className="mb-[7px]">Service region</div>
            <div>
              Choose the service region that is closest to your deployment area
              to ensure best latency and performance
            </div>
          </div>
        )}
      </div>
      <div className="ml-[47.5px]  flex text-[10px]  font-bold  text-[#000] md:ml-[57px] md:text-[12x] lg:ml-[66.5px] lg:text-[14px] lg:!leading-[24px] xl:ml-[76px] xl:text-[16px] 2xl:ml-[95px] 2xl:text-[20px]">
        <div>{data.serviceRegion}</div>
        <img
          src={`${
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
              ? process.env.NEXT_PUBLIC_BASE_PATH
              : ''
          }/images/header/arrow-down.svg`}
          alt="image"
          className={`ml-[8px] w-[7px] md:w-[9px] lg:w-[10.5px] xl:w-[12px] 2xl:ml-[10px] 2xl:w-[15px]`}
        />
      </div>
      <div
        onClick={() => {
          data.onValueChange()
        }}
        className="ml-auto mr-[22.5px] cursor-pointer border-b-[1px] border-[#0354EC] text-[10px] font-medium  text-[#0354EC] hover:border-[#123981] hover:text-[#123981] md:mr-[27px] md:text-[12px] lg:mr-[31.5px] lg:text-[14px]  lg:!leading-[24px]  xl:mr-[36px]  xl:text-[16px] 2xl:mr-[45px] 2xl:text-[20px]"
      >
        Edit
      </div>
    </div>
  )
}

export default ServiceRegion
