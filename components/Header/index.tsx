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
      <header className="max-w-screen top-0 left-0 z-40 mx-0 flex h-[80px] w-full items-center border-b border-[#dddd] bg-transparent bg-white bg-opacity-80">
        <div className="mx-auto flex w-full max-w-[1280px] pr-8 2xl:max-w-[1440px] 2xl:px-0">
          <div className="flex w-full items-center justify-between lg:gap-12 2xl:gap-24">
            <Link href="/">
              <Image
                src="/images/logo/l3a-logo.svg"
                alt="logo"
                width={200}
                height={45}
              />
            </Link>
            {/* <ul className="hidden flex-1 items-center gap-16 lg:flex">
              {navigationItems.map((navItem) => {
                return (
                  <Link key={navItem.href} href={navItem.href}>
                    <li className="text-base text-black">{navItem.label}</li>
                  </Link>
                )
              })}
              <Link href="#" className="border border-[#5485FF] py-1 px-3">
                <li>
                  <span className="text-base text-[#5485FF]">
                    Start Building
                  </span>
                </li>
              </Link>
            </ul> */}
            <div className="lg:hidden">
              <Dialog.Root>
                <Dialog.Trigger>
                  <List className="text-black" size={24} weight="bold" />
                </Dialog.Trigger>
                <HeaderModal navigationItems={navigationItems} />
              </Dialog.Root>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
