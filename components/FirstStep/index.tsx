/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Dropdown from '../Dropdown'
import LatencySelector from '../LatencySelector'
import Presets from '../Presets'

/* eslint-disable react/no-unescaped-entities */
const FirstStep = () => {
  const [cloudProvider, setCloudProvider] = useState<String>('equinix')
  const [serviceRegion, setServiceRegion] = useState<String>('US East (Boston)')
  const [latencyPreference, setLatencyPreference] = useState<String>('Low')

  const [showTooltipCloudProvider, setShowTooltipCloudProvider] =
    useState<boolean>(false)
  const [showTooltipServiceRegion, setShowTooltipServiceRegion] =
    useState<boolean>(false)

  const handleServiceRegionChange = (newValue) => {
    setServiceRegion(newValue)
  }

  const handleLatencyPreferenceChange = (newValue) => {
    setServiceRegion(newValue)
  }

  return (
    <>
      <section
        id="home"
        className="bg-white px-[30px] pt-[25px]  pb-[52px] text-[#000000] md:pl-[132px] md:pr-[288px] md:pt-[31px] md:pb-[63px]  lg:pl-[154px] lg:pr-[336px] lg:pt-[36px] lg:pb-[72px] xl:pl-[176px] xl:pr-[384px] xl:pt-[41px] xl:pb-[83px] 2xl:pl-[220px] 2xl:pr-[480px] 2xl:pt-[52px] 2xl:pb-[104px]"
      >
        <div className="mx-auto w-full max-w-[1093px]">
          <div>
            <div className="text-[18px] font-medium -tracking-[2%] text-[#959595] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:text-[32px]">
              Cloud deployment preference
            </div>
            <div className="mt-[15px] grid gap-y-[10px] md:mt-[18px] md:gap-y-[12px] lg:mt-[21px] lg:gap-y-[14px]  2xl:mt-[30px] 2xl:gap-y-[20px]">
              <div className="rounded-[10px] bg-[#F9F9F9] px-[10px] py-[8px] md:px-[12px] md:py-[9px] lg:px-[14px] lg:py-[11px] xl:px-[16px] xl:py-[12px] 2xl:px-[20px] 2xl:py-[15px]">
                <div className="relative flex items-center gap-x-[10px]">
                  <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[24px] xl:pl-[5px] xl:text-[16px] 2xl:text-[20px]">
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
                        setCloudProvider('equinix')
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
                        setCloudProvider('aws')
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
                  <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[24px] xl:pl-[5px] xl:text-[16px] 2xl:text-[20px]">
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
                  <div className="flex">
                    <div>
                      <div className="text-[10px] font-medium  md:text-[12px]  lg:text-[14px]  lg:!leading-[24px] xl:text-[16px] 2xl:text-[20px]">
                        Service region:
                      </div>
                      <div className="mt-[5px] text-[7px] text-[#959595] md:text-[8px] lg:text-[10px] lg:!leading-[17px] xl:text-[11px] 2xl:text-[14px]">
                        Closest location recommended: US East (Boston)
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Dropdown onValueChange={handleServiceRegionChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] bg-[#F9F9F9] px-[10px] py-[8px] md:px-[12px] md:py-[9px] lg:px-[14px] lg:py-[11px] xl:px-[16px] xl:py-[12px] 2xl:px-[20px] 2xl:py-[15px]">
                <div className="relative flex items-center gap-x-[10px]">
                  <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[24px] xl:pl-[5px] xl:text-[16px] 2xl:text-[20px]">
                    3. Select latency preference
                  </div>
                </div>
                <div className="mt-[12.5px] items-center md:mt-[15px] md:flex md:gap-x-[91px] lg:mt-[17.5px] lg:gap-x-[107px] xl:gap-x-[122px] 2xl:mt-[25px] 2xl:gap-x-[153px]">
                  <div className="text-[10px] font-medium  md:text-[12px]  lg:text-[14px]  lg:!leading-[24px] xl:text-[16px] 2xl:text-[20px]">
                    Latency
                  </div>
                  <div className="mt-[5px] ml-auto w-full max-w-[213px] text-[7px] text-[#959595] md:text-[8px] lg:text-[10px] lg:!leading-[17px] xl:text-[11px] 2xl:text-[14px]">
                    Low latency ensures response time to be around 2-10ms
                  </div>
                  <div className="ml-auto">
                    <LatencySelector
                      onValueChange={handleLatencyPreferenceChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[31px] md:mt-[37px] lg:mt-[43px] 2xl:mt-[62px]">
                <Presets />
              </div>
              <div>
                <div className="mx-auto mt-[12px] flex w-fit cursor-pointer gap-x-[10px] rounded-[5px] bg-[#0354EC] px-[11px] py-[6.25px]  text-[7px] font-medium text-[#fff] hover:bg-[#2061d8] md:mt-[39px] md:py-[5px] md:px-[12.5px] md:text-[8.5px] lg:mt-[45.5px] lg:py-[9px] lg:px-[14.5px] lg:text-[10px] lg:!leading-[19px] xl:py-[10px] xl:px-[17px] xl:text-[11px] 2xl:mt-[65px] 2xl:py-[12.5px] 2xl:px-[21px] 2xl:text-[14px]">
                  <div>Next</div>
                  <img
                    src={`/images/dataset/arrow.svg`}
                    alt="image"
                    className="my-auto h-[7.5px] w-[8px] md:h-[9px] md:w-[9.4px] lg:h-[10.5px] lg:w-[11px] xl:h-[12px] xl:w-[12.3px] 2xl:h-[15px] 2xl:w-[15.4px]"
                  />
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
