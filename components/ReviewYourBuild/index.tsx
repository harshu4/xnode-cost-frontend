/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react'
import Dropdown from '../Dropdown'
import LatencySelector from '../LatencySelector'
import Presets from '../Presets'
import CostEstimator from '../CostEstimator'
import ServerProvision from '../ServerProvision'
import IncludedServices from '../IncludedServices'
import AddOns from '../AddOns'
import SelectCloudProvider from '../SelectCloudProvider'
import SelectServiceRegion from '../SelectServiceRegion'
import SelectLatencyPreference from '../SelectLatencyPreference'
import SelectUseCase from '../SelectUseCase'
import Hero from '../Hero'
import { useRouter } from 'next/navigation'
import CloudProvider from './CloudProvider'
import { AccountContext } from '@/contexts/AccountContext'
import ServiceRegion from './ServiceRegion'

/* eslint-disable react/no-unescaped-entities */
const ReviewYourBuild = () => {
  const [cloudProvider, setCloudProvider] = useState<string>('Equinix')
  const [serviceRegion, setServiceRegion] = useState<string>()
  const {
    selectionSideNavBar,
    setSelectionSideNavBar,
    next,
    setNext,
    reviewYourBuild,
    setReviewYourBuild,
    finalNodes,
  } = useContext(AccountContext)

  const { push } = useRouter()

  useEffect(() => {
    console.log('fui chamado meu mano brown')
    console.log(finalNodes)

    if (finalNodes) {
      const existingServerIndex = finalNodes.findIndex(
        (node) => node.type === 'server',
      )
      console.log('o existing')
      console.log(existingServerIndex)
      if (existingServerIndex !== -1) {
        console.log('existe simsmsmsmsmsmsmsm')
        setServiceRegion(
          finalNodes[existingServerIndex].data.defaultValueLocation,
        )
      }
    }
  }, [])

  return (
    <>
      <section
        id="home"
        className={`w-full bg-[#fff] px-[48px] pt-[88px] 2xl:px-[60px] 2xl:pt-[110px]`}
      >
        <div>
          <div className="text-[18px]  font-bold -tracking-[2%] text-[#000000] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:text-[32px]">
            Review your build
          </div>
          <div className="mt-[25px] text-[18px] font-normal -tracking-[2%] text-[#C8C8C8] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:mt-[32px] 2xl:text-[32px]">
            Finalise your integrations easy
          </div>
          <div className="mt-[15px] grid gap-y-[10px] md:mt-[18px] md:gap-y-[12px] lg:mt-[21px] lg:gap-y-[14px]  2xl:mt-[30px] 2xl:gap-y-[20px]">
            <CloudProvider
              onValueChange={() => setReviewYourBuild(false)}
              cloudProvider={cloudProvider}
            />
            <ServiceRegion
              onValueChange={() => setReviewYourBuild(false)}
              serviceRegion={serviceRegion}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewYourBuild
