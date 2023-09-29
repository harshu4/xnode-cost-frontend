import { useState } from 'react'
import Dropdown from '../Dropdown'

/* eslint-disable react/no-unescaped-entities */
const FirstStep = () => {
  const [cloudProvider, setClouProvider] = useState<String>('equinix')
  const [showTooltipCloudProvider, setShowTooltipCloudProvider] =
    useState<boolean>(false)
  const [showTooltipServiceRegion, setShowTooltipServiceRegion] =
    useState<boolean>(false)

  return (
    <>
      <section
        id="home"
        className="bg-white px-[30px] pt-[25px]  pb-[36px] text-[#000000] md:pl-[132px] md:pr-[288px] md:pt-[31px] md:pb-[43px]  lg:pl-[154px] lg:pr-[336px] lg:pt-[36px] lg:pb-[50px] xl:pl-[176px] xl:pr-[384px] xl:pt-[41px] xl:pb-[58px] 2xl:pl-[220px] 2xl:pr-[480px] 2xl:pt-[52px] 2xl:pb-[73px]"
      >
        <div className="mx-auto w-full max-w-[1093px]">
          <div>
            <div className="text-[18px] font-medium -tracking-[2%] text-[#959595] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:text-[32px]">
              Cloud deployment preference
            </div>
            <div className="mt-[15px] grid gap-y-[10px] md:mt-[18px] md:gap-y-[12px] lg:mt-[21px] lg:gap-y-[14px]  2xl:mt-[30px] 2xl:gap-y-[20px]">
              <div className="rounded-[10px] bg-[#F9F9F9] px-[10px] py-[8px] md:px-[12px] md:py-[9px] lg:px-[14px] lg:py-[11px] xl:px-[16px] xl:py-[12px] 2xl:px-[20px] 2xl:py-[15px]">
                <div className="relative flex items-center gap-x-[10px]">
                  <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[24px] xl:text-[16px] 2xl:text-[20px]">
                    1. Select cloud provider
                  </div>
                  <img
                    src={`/images/firstStep/question-mark.svg`}
                    alt="image"
                    className="h-[9px] w-[9px] transform cursor-pointer transition-transform hover:scale-105 md:h-[11px] md:w-[11px]  lg:h-[12px] lg:w-[12px] xl:h-[14px] xl:w-[14px] 2xl:h-[18px] 2xl:w-[18px]"
                    onMouseEnter={() => setShowTooltipCloudProvider(true)}
                    onMouseLeave={() => setShowTooltipCloudProvider(false)}
                  />
                  {showTooltipCloudProvider && (
                    <div className="absolute left-[130px] top-[0px] w-full max-w-[270px]  rounded-[10px] bg-[#000] px-[13px] py-[10px] text-[8px] font-medium text-[#fff] md:left-[162px] md:px-[15px] md:py-[12px] md:text-[9px] lg:left-[189px] lg:px-[17px] lg:py-[14px] lg:text-[11px] lg:!leading-[19px] xl:left-[216px] xl:px-[20px] xl:py-[16px] xl:text-[13px] 2xl:left-[270px] 2xl:px-[25px] 2xl:py-[20px] 2xl:text-[16px]">
                      <div className="mb-[7px]">Cloud provider</div>
                      <div>Choose the cloud provider of your preference</div>
                    </div>
                  )}
                </div>
                <div className="mt-[12.5px] flex gap-x-[25px] md:mt-[15px] md:gap-x-[30px] lg:mt-[17.5px] lg:gap-x-[35px] xl:gap-x-[40px] 2xl:mt-[25px] 2xl:gap-x-[50px]">
                  <div className="flex items-center gap-x-[7px] lg:gap-x-[15px]">
                    <div
                      onClick={() => {
                        setClouProvider('equinix')
                      }}
                      className={`h-[10px] w-[10px] cursor-pointer rounded-[5px] border-[1px] border-[#D9D9D9] hover:bg-[#0354EC] md:h-[12px] md:w-[12px] lg:h-[14px] lg:w-[14px] xl:h-[16px] xl:w-[16px] 2xl:h-[20px] 2xl:w-[20px] ${
                        cloudProvider === 'equinix'
                          ? 'bg-[#0354EC]'
                          : 'bg-[#fff]'
                      }`}
                    ></div>
                    <div className="text-[10px] font-medium  md:text-[12px]  lg:text-[14px]  lg:!leading-[24px] xl:text-[16px] 2xl:text-[20px]">
                      Equinix
                    </div>
                  </div>
                  <div className="flex items-center gap-x-[7px] lg:gap-x-[15px]">
                    <div
                      onClick={() => {
                        setClouProvider('aws')
                      }}
                      className={`h-[10px] w-[10px] cursor-pointer rounded-[5px] border-[1px] border-[#D9D9D9] hover:bg-[#0354EC] md:h-[12px] md:w-[12px] lg:h-[14px] lg:w-[14px] xl:h-[16px] xl:w-[16px] 2xl:h-[20px] 2xl:w-[20px] ${
                        cloudProvider === 'aws' ? 'bg-[#0354EC]' : 'bg-[#fff]'
                      }`}
                    ></div>
                    <div className="text-[10px] font-medium  md:text-[12px]  lg:text-[14px]  lg:!leading-[24px] xl:text-[16px] 2xl:text-[20px]">
                      AWS
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] bg-[#F9F9F9] px-[10px] py-[8px] md:px-[12px] md:py-[9px] lg:px-[14px] lg:py-[11px] xl:px-[16px] xl:py-[12px] 2xl:px-[20px] 2xl:py-[15px]">
                <div className="relative flex items-center gap-x-[10px]">
                  <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[24px] xl:text-[16px] 2xl:text-[20px]">
                    2. Select service region
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
                        Choose the service region that is closest to your
                        deployment area to ensure best latency and performance
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-[12.5px] md:mt-[15px] lg:mt-[17.5px] 2xl:mt-[25px]">
                  <div className="text-[10px] font-medium  md:text-[12px]  lg:text-[14px]  lg:!leading-[24px] xl:text-[16px] 2xl:text-[20px]">
                    Service region:
                  </div>
                  <div className="flex">
                    <div className="mt-[5px] text-[7px] text-[#959595] md:text-[8px] lg:text-[10px] lg:!leading-[17px] xl:text-[11px] 2xl:text-[14px]">
                      Closest location recommended: US East (Boston)
                    </div>
                    <div className="ml-auto">
                      <Dropdown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-b-[1px] text-[#D4D4D4]"></div>
    </>
  )
}

export default FirstStep
