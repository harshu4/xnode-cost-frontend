/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
import { useContext, useState, useEffect } from 'react'
import Dropdown from '../Dropdown'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import LatencySelector from '../LatencySelector'
import { title } from 'process'
import { AccountContext } from '@/contexts/AccountContext'
import SubBarData from '../SubBarData'
import SubBarServers from '../SubBarServers'
import SubBarAPIs from '../SubBarAPIs'
import SubBarAnalytics from '../SubBarAnalytics'
import SubBarRPC from '../SubBarRPC'
import SubBarUtility from '../SubBarUtility'
import SubBarML from '../SubBarML'
import SubBarStorage from '../SubBarStorage'
import SubBarDataManagement from '../SubBarDataManagement'
import SubBarCompute from '../SubBarCompute'
import SubBarTrading from '../SubBarTrading'

/* eslint-disable react/no-unescaped-entities */
const Sidebar = ({ onValueChange }) => {
  const [categoriesOptions, setCategoriesOptions] = useState([])
  const [presetId, setPresetId] = useState(0)
  const {
    selectionSideNavBar,
    setSelectionSideNavBar,
    next,
    setNext,
    nextFromScratch,
    setNextFromScratch,
    setReviewYourBuild,
    setFinalBuild,
    setSignup,
    user,
  } = useContext(AccountContext)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [greenDotOpacity, setGreenDotOpacity] = useState(0)
  const { push } = useRouter()
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const preSetsOptionsUser = [
    {
      icon: '/images/lateralNavBar/new-home.png',
      iconStyle: 'w-[10px] md:w-[12px] lg:w-[14px] xl:w-[16px] 2xl:w-[20px]',
      title: 'Home',
    },
    {
      icon: '/images/lateralNavBar/new-profile.png',
      iconStyle: 'w-[10px]  md:w-[12px] lg:w-[14px] xl:w-[16px] 2xl:w-[20px]',
      title: 'Profile',
    },
  ]

  const preSetsOptions = [
    {
      icon: '/images/lateralNavBar/new-home.png',
      iconStyle: 'w-[10px] md:w-[12px] lg:w-[14px] xl:w-[16px] 2xl:w-[20px]',
      title: 'Home',
    },
  ]

  const [sideBarOptions, setSideBarOptions] = useState<any>(preSetsOptions)

  function handleButtonClick(title: string) {
    if (title === 'Workspace') {
      push(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
            ? `/xnode/workspace`
            : `/workspace`
        }`,
      )
      setNext(true)
      setReviewYourBuild(false)
      setFinalBuild(false)
      setSignup(false)
      setSelectionSideNavBar('Workspace')
      return
    }
    if (title === 'Docs') {
      push(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
            ? `/xnode/docs`
            : `/docs`
        }`,
      )
      setSelectionSideNavBar('Docs')
    }
    if (title === 'Profile') {
      push(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
            ? `/xnode/profile`
            : `/profile`
        }`,
      )
      setSelectionSideNavBar('Profile')
    }
    if (title === 'Dashboard') {
      push(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
            ? `/xnode/dashboard`
            : `/dashboard`
        }`,
      )
      setSelectionSideNavBar('Dashboard')
    }
    if (title === 'Home') {
      setNextFromScratch(false)
      console.log('set next false yes')
      setNext(false)
      setReviewYourBuild(false)
      setSelectionSideNavBar('Home')
      setFinalBuild(false)
      setSignup(false)
      push(
        `${
          process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
            ? `/xnode/start-here`
            : `/start-here`
        }`,
      )
      return
    }
    // if (!next && !nextFromScratch && title !== 'Home' && !user) {
    //   setGreenDotOpacity(1) // Mostrar a bolinha verde com opacidade total
    //   setTimeout(() => setGreenDotOpacity(0), 1000) // Esconder a bolinha verde após 5 segundos
    // } else {
    //   setSelectionSideNavBar(title)
    // }
    setSelectionSideNavBar(title)
    setHoveredIcon(title)
  }

  function handleButtonHover(title: string) {
    // if (!next && !nextFromScratch && title !== 'Home' && !user) {
    //   return
    // } else {
    //   setHoveredIcon(title)
    // }
    setHoveredIcon(title)
  }

  useEffect(() => {
    if (user) {
      setSideBarOptions(preSetsOptionsUser)
    } else {
      setSideBarOptions(preSetsOptions)
    }
  }, [user])

  if (!isOpen) {
    return (
      <>
        <div
          onMouseEnter={() => setIsOpen(true)}
          className="z-50 h-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
        >
          <div className="flex w-[42px]  flex-col items-center justify-center px-[15px] pb-[45px] pt-[49px]  lg:w-[85px] lg:px-[15px] lg:pb-[90px] lg:pt-[98px]">
            <div className="absolute top-[14px] flex w-[10.5px] cursor-pointer flex-col items-center lg:top-[38px] lg:w-[21.5px]">
              <img
                onClick={() => setIsOpen(true)}
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/lateralNavBar/nav.svg`}
                alt="image"
              />
            </div>
            <ul className="flex flex-col items-center gap-[20px] md:gap-[24px] lg:gap-[28px] xl:gap-[32px] 2xl:gap-[40px]">
              {sideBarOptions.map((option, index) => (
                <li className="relative" key={index}>
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                        ? process.env.NEXT_PUBLIC_BASE_PATH
                        : ''
                    }${option.icon}`}
                    alt="image"
                    className={`${option.iconStyle}`}
                  />
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                        ? process.env.NEXT_PUBLIC_BASE_PATH
                        : ''
                    }/images/lateralNavBar/new-arrow.svg`}
                    alt="image"
                    className={` ${
                      option.title === 'Home' ||
                      option.title === 'Dashboard' ||
                      option.title === 'Workspace'
                        ? 'hidden'
                        : ''
                    } absolute top-[2.5px] right-[14px] w-[4px] md:top-[3px] md:right-[16.8px] md:w-[4.8px] lg:top-[3.5px] lg:right-[19.6px] lg:w-[5.6px] xl:top-[4px] xl:right-[22.4px] xl:w-[6.4px] 2xl:top-[5px] 2xl:right-[28px] 2xl:w-[8px]`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div
        onMouseLeave={() => setIsOpen(false)}
        className="relative z-50 h-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
      >
        <div className="flex w-[220px] flex-col items-start">
          <div className="mb-[14.5px] mt-[24.5px] ml-[16px]  flex flex-row items-center  justify-between lg:mt-[49px] lg:mb-[29px] lg:ml-[32px]">
            <div className="absolute top-[14px] flex w-[10.5px] cursor-pointer flex-col items-center lg:top-[38px] lg:w-[21.5px]">
              <img
                onClick={() => setIsOpen(false)}
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/lateralNavBar/nav.svg`}
                alt="image"
              />
              <a
                href={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? `/xnode/`
                    : '/'
                }`}
                className="absolute -top-[8px] left-[15px] flex w-[50px] cursor-pointer flex-col items-center lg:-top-[22px] lg:left-[50px] lg:w-[100px] "
              >
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/logo/pythia.svg`}
                  alt="image"
                  className="w-[40px] lg:w-[300px]"
                />
              </a>
            </div>
          </div>
          {sideBarOptions.map((option, index) => (
            <div
              key={index}
              onMouseEnter={() => handleButtonHover(option.title)}
              onClick={() => {
                handleButtonClick(option.title)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`relative flex w-full flex-row items-center justify-between gap-[7.5px] px-[13px] py-[10px] md:gap-[9px] md:px-[20px]  md:py-[12px]  lg:gap-[10.5px] lg:px-[23px] lg:py-[14px] xl:gap-[12px] xl:px-[26.4px] xl:py-[16px] 2xl:gap-[15px] 2xl:px-[33px]  2xl:py-[20px] ${
                // !next &&
                // !nextFromScratch &&
                // option.title !== 'Home' && option.title !== 'Workspace' && !user
                //   ? 'w-full opacity-50 hover:bg-[#fff]':
                'cursor-pointer hover:bg-[#F4F4F4]'
              } ${selectionSideNavBar === option.title ? 'bg-[#F4F4F4]' : ''}`}
            >
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }${option.icon}`}
                alt="image"
                className={`${option.iconStyle}  mx-auto`}
              />
              {option.title === 'Home' && (
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                      ? process.env.NEXT_PUBLIC_BASE_PATH
                      : ''
                  }/images/lateralNavBar/green-ellipse.svg`}
                  alt="green dot"
                  style={{ opacity: greenDotOpacity }}
                  className="absolute top-2 right-2 h-3 w-3 transition-opacity duration-500"
                />
              )}
              <div className=" flex w-full items-center text-start font-inter text-[9px] font-medium !-tracking-[2%] text-[#000]  md:text-[8.4px] lg:text-[10px] xl:text-[11.2px]  2xl:text-[14px] 2xl:!leading-[19px]">
                {option.title}
              </div>
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/lateralNavBar/new-arrow.svg`}
                alt="image"
                className={` ${
                  option.title === 'Home' ||
                  option.title === 'Dashboard' ||
                  option.title === 'Workspace'
                    ? 'hidden'
                    : ''
                } absolute top-[12.5px] left-[7px] w-[4px] md:top-[15px] md:left-[10.2px] md:w-[4.8px] lg:top-[17.5px] lg:left-[12px] lg:w-[5.6px] xl:top-[20px] xl:left-[13.6px] xl:w-[6.4px] 2xl:top-[25px] 2xl:left-[17px] 2xl:w-[8px]`}
              />
            </div>
          ))}
          {hoveredIcon === 'Data' && (
            <div className="absolute top-[80px] right-0 translate-x-[100%] transform">
              <SubBarData onValueChange={console.log('')} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar
