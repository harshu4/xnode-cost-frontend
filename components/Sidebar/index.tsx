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
            <div className="absolute top-[46px] flex w-[10.5px] cursor-pointer flex-col items-center lg:top-[92px] lg:w-[21.5px]">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/logo/search.svg`}
                alt="image"
              />
            </div>
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
            <div className="absolute top-[46px] flex w-[10.5px] cursor-pointer flex-col items-center lg:top-[38px] lg:w-[21.5px]">
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
            <div className="absolute top-[14px] flex w-[10.5px] cursor-pointer flex-col items-center lg:top-[92px] lg:w-[21.5px]">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/logo/search.svg`}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
