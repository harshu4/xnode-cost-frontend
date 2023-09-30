/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useContext } from 'react'
import ThemeToggler from './ThemeToggler'
import menuData from './menuData'
import { UserCircle } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { parseCookies, destroyCookie } from 'nookies'
import axios from 'axios'
import { AccountContext } from '../../contexts/AccountContext'
import { usePathname } from 'next/navigation'
const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [userNavbarOpen, setUserNavbarOpen] = useState(false)
  const [userConnected, setUserConnected] = useState()
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }
  const pathname = usePathname()
  const isFAQPage = pathname.includes('/faqs')

  const cookies = parseCookies()
  const userHasAnyCookie = cookies.userSessionToken

  const { user, setUser } = useContext(AccountContext)

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1)
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
  }

  function onClickTrans(element: string) {
    const taskStartElement = document.getElementById(element)
    taskStartElement.scrollIntoView({ behavior: 'smooth' })
  }

  function signOutUser() {
    destroyCookie(undefined, 'userSessionToken')
    setUser(null)
  }

  const features = [
    {
      label: 'Browse',
      isCurrentlyPage: false,
      href: `/`,
    },
    {
      label: 'Become a data provider',
      isCurrentlyPage: false,
      href: `/become`,
    },
    {
      label: 'FAQs',
      isCurrentlyPage: false,
      href: `/faqs`,
    },
  ]

  async function getUserData() {
    const { userSessionToken } = parseCookies()
    console.log('no user data')
    console.log(userSessionToken)
    if (userSessionToken) {
      const config = {
        method: 'post' as 'post',
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_BASE_URL}/openmesh-experts/functions/getCurrentUser`,
        headers: {
          'x-parse-application-id': `${process.env.NEXT_PUBLIC_API_BACKEND_KEY}`,
          'X-Parse-Session-Token': userSessionToken,
          'Content-Type': 'application/json',
        },
      }
      let dado

      await axios(config).then(function (response) {
        if (response.data) {
          dado = response.data
          console.log(dado)
          setUser(dado)
        }
      })
    }
  }

  useEffect(() => {
    if (userHasAnyCookie) {
      console.log('user has cookis')
      console.log(userHasAnyCookie)
      console.log(cookies.userSessionToken)
      try {
        getUserData()
      } catch (err) {
        destroyCookie(undefined, 'userSessionToken')
        setUser(null)
      }
    } else {
      localStorage.removeItem('@scalable: user-state-1.0.0')
      destroyCookie(undefined, 'userSessionToken')
      setUser(null)
    }
  }, [])

  return (
    <>
      {/* <Link href="#">
        <div className="max-w-screen flex h-[32px] w-full items-center justify-center bg-gradient-to-r from-[#2250C4] via-[#D18BC0] to-[#E48D92]">
          <span className="text-xs text-white">
            Query engine is live! Apply for beta testing here
          </span>
        </div>
      </Link> */}
      <header className="max-w-screen top-0 left-0 z-40 mx-0 flex h-[95px] w-full  items-center bg-[#F9F9F9]  bg-opacity-80 text-[#000000]">
        <div className="w-full justify-between px-[20px] md:px-[90px] xl:hidden">
          <div className="">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/logo/openmesh-logo.svg`}
              alt="image"
              className={`w-[150px]`}
            />
          </div>
          <button
            onClick={navbarToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="absolute right-7 top-7 block  rounded-lg px-3 py-[6px] ring-primary focus:ring-2"
          >
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${
                navbarOpen ? ' top-[7px] rotate-45' : ' '
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                navbarOpen ? 'opacity-0 ' : ' '
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${
                navbarOpen ? ' top-[-8px] -rotate-45' : ' '
              }`}
            />
          </button>
          <nav
            id="navbarCollapse"
            className={`navbar absolute right-7 z-50 w-[250px] rounded border-[.5px] bg-[#e6e4e4] py-6  px-6 text-[13px] text-[#fff] duration-300  ${
              navbarOpen
                ? 'visibility top-20 opacity-100'
                : 'invisible top-20 opacity-0'
            }`}
          >
            <div className=" grid gap-y-[15px] text-[12px]  font-medium !leading-[19px]">
              <div className="my-auto flex text-center md:justify-center">
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_URL}/community/register`}
                  className="flex cursor-pointer items-center rounded-[5px] bg-[#0354EC] py-[4.5px] px-[9px] text-[10px] font-bold !leading-[19px] text-[#fff] hover:border hover:border-[#0354EC] hover:bg-[#fff] hover:text-[#0354EC] md:py-[9px] md:px-[18px] md:text-[14px] 2xl:py-[11.5px] 2xl:px-[35px] 2xl:text-[16px]"
                >
                  Schedule a call
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="mx-auto hidden h-full w-full max-w-[1800px] items-center justify-between px-[90px] xl:flex">
          <div className="flex  h-full items-center">
            <a href={'/'}>
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/logo/openmesh-logo.svg`}
                alt="image"
                className={`mr-[60px]`}
              />
            </a>
          </div>
          <div className="my-auto flex justify-center text-center">
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/community/register`}
              className="flex cursor-pointer items-center rounded-[5px] bg-[#0354EC] py-[9px] px-[18px] text-[14px] font-bold !leading-[19px] text-[#fff] hover:border hover:border-[#0354EC] hover:bg-[#fff] hover:text-[#0354EC] 2xl:py-[11.5px] 2xl:px-[35px] 2xl:text-[16px]"
            >
              Schedule a call
            </a>
          </div>
          {/* <div className="lg:hidden">
              <Dialog.Root>
                <Dialog.Trigger>
                  <List className="text-black" size={24} weight="bold" />
                </Dialog.Trigger>
                <HeaderModal navigationItems={navigationItems} />
              </Dialog.Root>
            </div> */}
        </div>
      </header>
    </>
  )
}

export default Header
