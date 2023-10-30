import { useState } from 'react'

const LogIn = () => {
  const [showTooltipCloudProvider, setShowTooltipCloudProvider] =
    useState<boolean>(false)

  return (
    <div className="rounded-[10px] bg-[#F9F9F9] px-[10px] py-[8px] pb-[60px] pr-[100px] text-[#000] md:px-[12px] md:py-[9px] lg:px-[14px] lg:py-[11px] xl:px-[16px] xl:py-[20px] xl:pb-[80px] xl:pr-[192px] 2xl:px-[20px] 2xl:py-[25px] 2xl:pb-[100px] 2xl:pr-[240px]">
      <div className="relative flex gap-x-[10px]">
        <div className="text-[10px] font-bold md:text-[12px] lg:text-[14px] lg:!leading-[24px] xl:pl-[5px] xl:text-[16px] 2xl:text-[20px]">
          Signup section{' '}
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
            <div className="mb-[7px]">Sign up</div>
            <div>Sign up</div>
          </div>
        )}
      </div>
      <div className="flex gap-x-[240px] 2xl:gap-x-[300px]">
        <div className="mt-[56px] ml-[112px] 2xl:mt-[70px] 2xl:ml-[140px]">
          <div>
            <img
              src={`/images/header/rec.svg`}
              alt="image"
              className="w-[325px] md:w-[395px] lg:w-[459px] xl:w-[525px] 2xl:w-[657px]"
            />{' '}
            <img
              src={`/images/header/rec.svg`}
              alt="image"
              className="mt-[48px] w-[325px] md:w-[395px] lg:w-[459px] xl:w-[525px] 2xl:mt-[60px] 2xl:w-[657px]"
            />
          </div>

          <div className="flex gap-x-[35px]">
            <div className="mt-[41px] flex h-fit w-fit cursor-pointer justify-center gap-x-[8px] rounded-[5px] bg-[#0354EC] py-[6.2px] px-[11px] text-center text-[7px] font-medium text-[#fff] hover:bg-[#0e2e69] md:mt-[49px] md:py-[7.5px] md:px-[12.5px] md:text-[8.4px] lg:mt-[57px] lg:py-[8.75px]  lg:px-[42px] lg:text-[10px]   xl:mt-[65px] xl:py-[10px]    xl:px-[48px]  xl:text-[11.2px]  2xl:mt-[82px] 2xl:gap-x-[10px]  2xl:py-[12.5px] 2xl:px-[60px] 2xl:text-[14px]">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/header/storm.svg`}
                alt="image"
                className={`w-[5px] md:w-[6px] lg:w-[7px] xl:w-[8px] 2xl:w-[10px]`}
              />
              <div onClick={() => {}}>Signin</div>
            </div>
            <div className=" mt-auto text-[9px] font-normal text-[#838383] underline underline-offset-1 md:text-[10.8px]  lg:text-[12.5px]   xl:text-[14.5px] 2xl:text-[18px] ">
              Forgot Password
            </div>
          </div>
        </div>
        <div className="my-auto">
          <div className="flex h-fit w-fit cursor-pointer justify-center gap-x-[8px] rounded-[5px] bg-[#0354EC] py-[6.2px] px-[11px] text-center text-[7px] font-medium text-[#fff] hover:bg-[#0e2e69] md:py-[7.5px] md:px-[12.5px] md:text-[8.4px] lg:py-[8.75px]  lg:px-[42px] lg:text-[10px]  xl:py-[10px]  xl:px-[48px]  xl:text-[11.2px] 2xl:gap-x-[10px]  2xl:py-[12.5px] 2xl:px-[60px] 2xl:text-[14px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/header/storm.svg`}
              alt="image"
              className={`w-[5px] md:w-[6px] lg:w-[7px] xl:w-[8px] 2xl:w-[10px]`}
            />
            <div onClick={() => {}}>SignUp</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
