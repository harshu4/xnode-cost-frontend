/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggler from './ThemeToggler'
import menuData from './menuData'

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

  return (
    <>
      <header
        className="header top-0 left-0 z-40 flex w-full items-center bg-transparent bg-white bg-opacity-80 border-b border-[#dddd]"
      >
        <div className="container flex">
          <div className="">
            <div className="w-32 max-w-full md:w-48">
              <Link
                href="/"
                className="header-logo block w-full py-5 lg:py-2"
              >
                <Image
                  src="/images/logo/l3a-logo.svg"
                  alt="logo"
                  width={200}
                  height={50}
                  className="w-1/2 md:w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header