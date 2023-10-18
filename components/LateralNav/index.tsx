/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react'
import Dropdown from '../Dropdown'
import LatencySelector from '../LatencySelector'
import { title } from 'process'
import { AccountContext } from '@/contexts/AccountContext'

/* eslint-disable react/no-unescaped-entities */
const LateralNav = ({ onValueChange }) => {
  const [presetId, setPresetId] = useState(0)
  const { selectionSideNavBar, setSelectionSideNavBar } =
    useContext(AccountContext)

  const preSetsOptions = [
    {
      icon: '/images/lateralNavBar/start.svg',
      iconStyle: 'w-[17px]  md:w-[20px] lg:w-[24px] xl:w-[27px] 2xl:w-[34px]',
      title: 'Start here',
    },
    {
      icon: '/images/lateralNavBar/cubo.svg',
      iconStyle: 'w-[17px]  md:w-[20px] lg:w-[24px] xl:w-[27px] 2xl:w-[34px]',
      title: 'Dashboard',
    },
    {
      icon: '/images/lateralNavBar/server.svg',
      iconStyle:
        'w-[15.5px]  md:w-[18.5px] lg:w-[22px] xl:w-[25px] 2xl:w-[31px]',
      title: 'Servers',
    },
    {
      icon: '/images/lateralNavBar/tomada.svg',
      iconStyle: 'w-[17.5px]  md:w-[20px] lg:w-[25px] xl:w-[28px] 2xl:w-[35px]',
      title: 'APIs',
    },
    {
      icon: '/images/lateralNavBar/database.svg',
      iconStyle:
        'w-[16.5px]  md:w-[19.5px] lg:w-[23px] xl:w-[26px] 2xl:w-[33px]',
      title: 'Data',
    },
    {
      icon: '/images/lateralNavBar/node.svg',
      iconStyle:
        'w-[17.5px]  md:w-[20px] lg:w-[24.5px] xl:w-[28px] 2xl:w-[35px]',
      title: 'RPC',
    },
    {
      icon: '/images/lateralNavBar/bolas.svg',
      iconStyle:
        'w-[16px]  md:w-[19.5px] lg:w-[22.5px] xl:w-[25.5px] 2xl:w-[32px]',
      title: 'Analytics',
    },
    {
      icon: '/images/lateralNavBar/dash.svg',
      iconStyle:
        'w-[16px]  md:w-[19.5px] lg:w-[22.5px] xl:w-[25.5px] 2xl:w-[32px]',
      title: 'Apps',
    },
    {
      icon: '/images/lateralNavBar/ml.svg',
      iconStyle:
        'w-[15.5px]  md:w-[18.5px] lg:w-[22px] xl:w-[25px] 2xl:w-[31px]',
      title: 'ML/LLMs',
    },
    {
      icon: '/images/lateralNavBar/settings.svg',
      iconStyle:
        'w-[16px]  md:w-[19.5px] lg:w-[22.5px] xl:w-[25.5px] 2xl:w-[32px]',
      title: 'Utility',
    },
  ]

  return (
    <>
      <div className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="">
          <div className="pb-[24px] pt-[17px] md:pb-[30px] md:pt-[20px] lg:pb-[34px] lg:pt-[24px] xl:pb-[39px] xl:pt-[27px] 2xl:pb-[49px] 2xl:pt-[34px]">
            <img
              src="/images/lateralNavBar/nav.svg"
              alt="image"
              className={`mx-auto  w-[16px] cursor-pointer md:w-[19.5px] lg:w-[22.5px] xl:w-[25.5px] 2xl:w-[32px]`}
            />
          </div>
          {preSetsOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectionSideNavBar(option.title)
              }}
              className={`cursor-pointer px-[11px] py-[14px] hover:bg-[#F4F4F4] md:px-[13px] md:py-[17px] lg:px-[15.5px] lg:py-[20px] xl:px-[17.5px] xl:py-[22.5px] 2xl:px-[22px] 2xl:py-[28px] ${
                selectionSideNavBar === option.title ? 'bg-[#F4F4F4]' : ''
              }`}
            >
              <img
                src={option.icon}
                alt="image"
                className={`${option.iconStyle}  mx-auto`}
              />
              <div className="flex justify-center text-center text-[8px] !-tracking-[2%] text-[#000] md:text-[9.5px] lg:text-[11px] lg:!leading-[19px] xl:text-[13px] 2xl:text-[16px]">
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default LateralNav
