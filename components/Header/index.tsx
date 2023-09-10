/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggler from './ThemeToggler'
import menuData from './menuData'
import { List } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

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

  const navigationItems = [
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Technology', href: '/technology' },
    { label: 'Infrastructure', href: '/infrastructure' },
    {
      label: 'Transparency & Governance',
      href: '/transparency-and-governance',
    },
    { label: 'Community', href: '/community' },
  ]

  const features = [
    { label: 'About', isCurrentlyPage: false, href: '/' },
    {
      label: 'Expert community',
      isCurrentlyPage: false,
      href: 'https://openmesh-expert-community.vercel.app/',
    },
    {
      label: 'Academy',
      isCurrentlyPage: true,
      href: 'https://openmesh-expert-academy.vercel.app/',
    },
    {
      label: 'Success Stories',
      isCurrentlyPage: false,
      href: '/',
    },
    {
      label: 'FAQs',
      isCurrentlyPage: false,
      href: '/',
    },
  ]

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
        <div className="w-full justify-between px-[20px] xl:hidden">
          <div className="">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/header/openmesh-logo.png`}
              alt="image"
              className={`w-[150px]`}
            />
          </div>
          <button
            onClick={navbarToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            className="absolute right-0 top-7 block  rounded-lg px-3 py-[6px] ring-primary focus:ring-2"
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
            className={`navbar absolute right-0 z-50 w-[250px] rounded border-[.5px] bg-[#e6e4e4] py-6  px-6 text-[13px] text-[#fff] duration-300  ${
              navbarOpen
                ? 'visibility top-20 opacity-100'
                : 'invisible top-20 opacity-0'
            }`}
          >
            <div className=" grid gap-y-[15px] text-[12px]  font-medium !leading-[19px]">
              {features.map((feature, index) => (
                <div className="flex h-full items-center" key={index}>
                  <a
                    className={`flex h-full cursor-pointer items-center text-[#000]  hover:bg-[#ececec] ${
                      feature.isCurrentlyPage
                        ? 'border-b  text-[14px] font-bold '
                        : ''
                    }`}
                  >
                    {feature.label}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-[35px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://calendly.com/`}
                className=" cursor-pointer items-center rounded-[5px] border  border-[#000] bg-transparent py-[11.5px] px-[18px] text-[13px] font-bold !leading-[19px] text-[#575757] hover:bg-[#ececec]"
              >
                Become an expert
              </a>
              <div className="mt-[25px]">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`/`}
                  className=" cursor-pointer items-center bg-transparent text-[13px]  font-bold !leading-[19px] text-[#000] hover:text-[#3b3a3a]"
                >
                  Login
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="hidden h-full w-full items-center justify-between px-[90px] xl:flex">
          <div className="flex  h-full items-center">
            <img
              src={`${
                process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                  ? process.env.NEXT_PUBLIC_BASE_PATH
                  : ''
              }/images/header/openmesh-logo.png`}
              alt="image"
              className={`mr-[60px]`}
            />
            <div className="flex h-full items-center gap-x-[20px] text-[16px] font-medium !leading-[19px]">
              {features.map((feature, index) => (
                <div className="flex h-full items-center" key={index}>
                  <a
                    className={`flex h-full cursor-pointer  items-center px-[30px] hover:bg-[#ececec] ${
                      feature.isCurrentlyPage ? 'bg-[#ececec] font-bold' : ''
                    }`}
                    href={feature.href}
                  >
                    {feature.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className=" flex justify-between gap-x-[80px]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://calendly.com/`}
              className="flex cursor-pointer items-center rounded-[5px] border  border-[#000] bg-transparent py-[11.5px] px-[24px] text-[16px] font-bold !leading-[19px] text-[#575757] hover:bg-[#ececec]"
            >
              Become an expert
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`/`}
              className=" my-auto h-fit cursor-pointer items-center   border-b  border-[#000] bg-transparent text-[16px]  font-bold !leading-[19px] text-[#000] hover:text-[#3b3a3a]"
            >
              Login
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
