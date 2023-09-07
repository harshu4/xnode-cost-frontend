/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggler from './ThemeToggler'
import menuData from './menuData'
import { List } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { HeaderModal } from '../Modals/HeaderModal'

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

  return (
    <>
      {/* <Link href="#">
        <div className="max-w-screen flex h-[32px] w-full items-center justify-center bg-gradient-to-r from-[#2250C4] via-[#D18BC0] to-[#E48D92]">
          <span className="text-xs text-white">
            Query engine is live! Apply for beta testing here
          </span>
        </div>
      </Link> */}
      <header className="max-w-screen top-0 left-0 z-40 mx-0 flex h-[95px] w-full items-center bg-[#F9F9F9]  bg-opacity-80 text-[#000000]">
        <div className="w-full justify-between px-[10px] xl:hidden">
          <div>
            <a className="text-[21px] font-bold !leading-[34px]">/OpenMesh</a>
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
            className={`navbar absolute right-0 z-50 w-[250px] rounded border-[.5px] border-body-color/50 bg-dark py-6  px-6 text-[13px] text-[#fff] duration-300 dark:border-body-color/20  ${
              navbarOpen
                ? 'visibility top-20 opacity-100'
                : 'invisible top-20 opacity-0'
            }`}
          >
            <div
              onClick={() => {
                onClickTrans('certification')
              }}
              className="mt-[10px] cursor-pointer"
            >
              Certification
            </div>
            <div
              onClick={() => {
                onClickTrans('learning')
              }}
              className="mt-[10px] cursor-pointer"
            >
              Learning
            </div>
            <div
              onClick={() => {
                onClickTrans('stories')
              }}
              className="mt-[10px] cursor-pointer"
            >
              Success Stories
            </div>
            <div
              onClick={() => {
                onClickTrans('faqs')
              }}
              className="mt-[10px] cursor-pointer"
            >
              FAQs
            </div>
            <div className="mt-[20px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://calendly.com/`}
                className=" cursor-pointer rounded-[5px] bg-[#0354EC] py-[9.5px] px-[18px] text-[13px] font-bold !leading-[19px] text-white hover:bg-[#0447c5]"
              >
                Schedule a Call
              </a>
            </div>
          </nav>
        </div>
        <div className="hidden w-full justify-between px-[90px] xl:flex">
          <div className="flex">
            <a className="text-[28px] font-bold !leading-[34px]">/OpenMesh</a>
            <div className="ml-[60px] flex items-center text-[16px] font-medium !leading-[19px]">
              <a
                onClick={() => {
                  onClickTrans('certification')
                }}
                className="cursor-pointer"
              >
                Certification
              </a>
              <a
                onClick={() => {
                  onClickTrans('learning')
                }}
                className="ml-[60px] cursor-pointer"
              >
                Learning
              </a>
              <a
                onClick={() => {
                  onClickTrans('stories')
                }}
                className="ml-[60px] cursor-pointer"
              >
                Success Stories
              </a>
              <a
                onClick={() => {
                  onClickTrans('faqs')
                }}
                className="ml-[60px] cursor-pointer"
              >
                FAQs
              </a>
            </div>
          </div>
          <div className="">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://calendly.com/`}
              className="flex cursor-pointer items-center rounded-[5px] border  border-[#000] bg-transparent py-[11.5px] px-[24px] text-[16px] font-bold !leading-[19px] text-[#575757] hover:bg-[#ececec]"
            >
              Become an expert
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
