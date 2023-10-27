/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from 'react'
import Dropdown from '../Dropdown'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import LatencySelector from '../LatencySelector'
import { title } from 'process'
import { AccountContext } from '@/contexts/AccountContext'
import SubBarData from '../SubBarData'
import SubBarServers from '../SubBarServers'

/* eslint-disable react/no-unescaped-entities */
const LateralNav = ({ onValueChange }) => {
  const [presetId, setPresetId] = useState(0)
  const { selectionSideNavBar, setSelectionSideNavBar, next, setNext } =
    useContext(AccountContext)
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [greenDotOpacity, setGreenDotOpacity] = useState(0)
  const { push } = useRouter()

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

  function handleButtonClick(title: string) {
    if (title === 'Start here') {
      push('/console')
      return
    }
    if (!next && title !== 'Start here') {
      setGreenDotOpacity(1) // Mostrar a bolinha verde com opacidade total
      setTimeout(() => setGreenDotOpacity(0), 1000) // Esconder a bolinha verde após 5 segundos
    } else {
      setSelectionSideNavBar(title)
    }
  }

  if (!isOpen) {
    return (
      <>
        <div className="z-50 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="">
            <div className="px-[9.5px] pb-[24px] pt-[17px] md:px-[11.5px] md:pb-[30px] md:pt-[20px] lg:px-[13.5px] lg:pb-[34px] lg:pt-[24px] xl:px-[15px] xl:pb-[39px] xl:pt-[27px] 2xl:px-[19px] 2xl:pb-[49px] 2xl:pt-[34px]">
              <img
                onClick={() => setIsOpen(true)}
                src="/images/lateralNavBar/nav-close.svg"
                alt="image"
                className={`mx-auto w-[13px]  cursor-pointer md:w-[14px] md:hover:scale-105 lg:w-[16px] xl:w-[18.5px] 2xl:w-[23px]`}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="relative z-50 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="">
          <div className="pb-[24px] pt-[17px] md:pb-[30px] md:pt-[20px] lg:pb-[34px] lg:pt-[24px] xl:pb-[39px] xl:pt-[27px] 2xl:pb-[49px] 2xl:pt-[34px]">
            <img
              onClick={() => setIsOpen(false)}
              src="/images/lateralNavBar/nav.svg"
              alt="image"
              className={`mx-auto w-[16px]  cursor-pointer md:w-[19.5px] md:hover:scale-105 lg:w-[22.5px] xl:w-[25.5px] 2xl:w-[32px]`}
            />
          </div>
          {preSetsOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                handleButtonClick(option.title)
              }}
              className={`relative px-[11px] py-[14px]  md:px-[13px] md:py-[17px] lg:px-[15.5px] lg:py-[20px] xl:px-[17.5px] xl:py-[22.5px] 2xl:px-[22px] 2xl:py-[28px] ${
                !next && option.title !== 'Start here'
                  ? 'opacity-50 hover:bg-[#fff]'
                  : 'cursor-pointer hover:bg-[#F4F4F4]'
              } ${selectionSideNavBar === option.title ? 'bg-[#F4F4F4]' : ''}`}
            >
              <img
                src={option.icon}
                alt="image"
                className={`${option.iconStyle}  mx-auto`}
              />
              {option.title === 'Start here' && (
                <img
                  src="/images/lateralNavBar/green-ellipse.svg"
                  alt="green dot"
                  style={{ opacity: greenDotOpacity }}
                  className="absolute top-2 right-2 h-3 w-3 transition-opacity duration-500" // Adicionando uma transição de 2 segundos
                />
              )}
              <div className="mt-[5px] flex justify-center text-center text-[8px] !-tracking-[2%] text-[#000] md:mt-[6px] md:text-[9.5px] lg:mt-[7px] lg:text-[11px] lg:!leading-[19px] xl:mt-[8px] xl:text-[13px] 2xl:mt-[9px] 2xl:text-[16px]">
                {option.title}
              </div>
            </div>
          ))}
        </div>
        {selectionSideNavBar === 'Data' && (
          <div className="absolute top-[80px] -right-[283px]">
            <SubBarData onValueChange={console.log('hello')} />
          </div>
        )}
        {selectionSideNavBar === 'Servers' && (
          <div className="absolute top-[80px] -right-[283px]">
            <SubBarServers onValueChange={console.log('hello')} />
          </div>
        )}
      </div>
    </>
  )
}

export default LateralNav
