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
import LogIn from './LogIn'
import ThirdParty from './ThirdParty'
import nookies, { parseCookies, setCookie, destroyCookie } from 'nookies'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/* eslint-disable react/no-unescaped-entities */
const Signup = () => {
  const {
    selectionSideNavBar,
    setSelectionSideNavBar,
    next,
    setNext,
    reviewYourBuild,
    setReviewYourBuild,
    setFinalBuild,
    finalNodes,
    user,
    setUser,
  } = useContext(AccountContext)

  function handleFinalBuild() {
    if (!user) {
      toast.error('Please log in before proceeding')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      setFinalBuild(true)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <section
        id="home"
        className={`w-full bg-[#fff] px-[48px] pb-[1000px] pt-[88px] 2xl:px-[60px] 2xl:pt-[110px]`}
      >
        <div>
          <div className="text-[18px]  font-bold -tracking-[2%] text-[#000000] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:text-[32px]">
            Signup for Xnode
          </div>
          <div className="mt-[25px] text-[18px] font-normal -tracking-[2%] text-[#C8C8C8] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:mt-[32px] 2xl:text-[32px]">
            Finalise your integrations easy
          </div>
          <div className="mt-[15px]">
            <LogIn />
          </div>
          <div className="mt-[50px] md:mt-[60px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[100px]">
            <ThirdParty />
          </div>
          <div
            onClick={() => {
              console.log(finalNodes)
              handleFinalBuild()
            }}
            className={`mt-[41px] flex h-fit w-fit justify-center gap-x-[8px] rounded-[5px] ${
              !user
                ? 'bg-[#578ae9]'
                : 'cursor-pointer bg-[#0354EC] hover:bg-[#0e2e69] '
            } py-[6.2px] px-[11px] text-center text-[7px] font-medium text-[#fff]  md:mt-[49px] md:py-[7.5px] md:px-[12.5px] md:text-[8.4px] lg:mt-[57px] lg:py-[8.75px]  lg:px-[14.5px] lg:text-[10px]   xl:mt-[65px] xl:py-[10px]    xl:px-[17px]  xl:text-[11.2px]  2xl:mt-[82px] 2xl:gap-x-[10px]  2xl:py-[12.5px] 2xl:px-[21px] 2xl:text-[14px]`}
          >
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/header/storm.svg`}
              alt="image"
              className={`w-[5px] md:w-[6px] lg:w-[7px] xl:w-[8px] 2xl:w-[10px]`}
            />
            <div>Finalize the deployment</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
