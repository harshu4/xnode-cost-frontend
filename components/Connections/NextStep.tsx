/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react'
import Dropdown from '../Dropdown'
import LatencySelector from '../LatencySelector'
import Presets from '../Presets'
import CostEstimator from '../CostEstimator'
import ServerProvision from '../ServerProvision'
import IncludedServices from '../IncludedServices'
import SelectCloudProvider from '../SelectCloudProvider'
import SelectServiceRegion from '../SelectServiceRegion'
import SelectLatencyPreference from '../SelectLatencyPreference'
import SelectUseCase from '../SelectUseCase'
import Hero from '../Hero'
import { useRouter } from 'next/navigation'
import { AccountContext } from '@/contexts/AccountContext'
import FinalStep from './FinalStep'

/* eslint-disable react/no-unescaped-entities */
const NextStep = () => {
  const {
    selectionSideNavBar,
    setSelectionSideNavBar,
    next,
    setNext,
    reviewYourBuild,
    setReviewYourBuild,
    finalNodes,
  } = useContext(AccountContext)

  const [finalStep, setFinalStep] = useState<boolean>(false)

  if (finalStep) {
    return (
      <>
        <FinalStep />
      </>
    )
  }

  return (
    <>
      <section
        id="home"
        className={`w-full bg-[#F9F9F9] px-[48px] pb-[1000px] pt-[88px] 2xl:px-[60px] 2xl:pt-[110px]`}
      >
        <div className="rounded-[5px] bg-[#fff] xl:py-[64px] xl:px-[96px] 2xl:py-[80px] 2xl:px-[120px]">
          <img
            src={`${
              process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                ? process.env.NEXT_PUBLIC_BASE_PATH
                : ''
            }/images/connections/new.svg`}
            alt="image"
            className={`xl:w-[820px] 2xl:w-[1024px]`}
          />
          <div className="mx-auto mt-[41px] flex h-fit w-fit cursor-pointer justify-center gap-x-[8px] rounded-[5px] bg-[#0354EC] py-[6.2px] px-[11px] text-center text-[7px] font-medium text-[#fff] hover:bg-[#0e2e69] md:mt-[49px] md:py-[7.5px] md:px-[12.5px] md:text-[8.4px] lg:mt-[57px] lg:py-[8.75px] lg:px-[14.5px] lg:text-[10px]  xl:mb-[56px] xl:mt-[65px]   xl:py-[10px] xl:px-[17px]    xl:text-[11.2px]  2xl:mb-[70px]  2xl:mt-[82px] 2xl:gap-x-[10px]  2xl:py-[12.5px] 2xl:px-[21px] 2xl:text-[14px]">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/header/storm.svg`}
              alt="image"
              className={`w-[5px] md:w-[6px] lg:w-[7px] xl:w-[8px] 2xl:w-[10px]`}
            />
            <div
              onClick={() => {
                setFinalStep(true)
              }}
            >
              Perform the connection
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NextStep
