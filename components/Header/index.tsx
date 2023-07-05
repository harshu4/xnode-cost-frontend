/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ThemeToggler from './ThemeToggler'
import menuData from './menuData'

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

  // Sticky Navbar
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)
  })

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
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? '!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition'
            : 'absolute'
        }`}
      >
        <div className="container flex justify-center">
          {' '}
          {/* Adicionado flex e justify-center aqui */}
          <div className="items-center">
            <div className="w-96 max-w-full">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? 'py-5 lg:py-2' : 'py-8'
                } `}
              >
                <Image
                  src="/images/logo/l3a-logo.svg"
                  alt="logo"
                  width={200}
                  height={50}
                  className="w-full"
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
