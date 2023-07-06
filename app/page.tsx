/* eslint-disable no-unused-vars */
'use client'
import AboutL3A from '@/components/About/AboutL3A'
import AboutSectionOne from '@/components/About/AboutSectionOne'
import AboutSectionTwo from '@/components/About/AboutSectionTwo'
import L3AContributors from '@/components/About/L3AContributors'
import Blog from '@/components/Blog'
import Brands from '@/components/Brands'
import CTA from '@/components/CTA'
import Categories from '@/components/Categories'
import ScrollUp from '@/components/Common/ScrollUp'
import Contact from '@/components/Contact'
import Contribute from '@/components/Contribute'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import SocialMedia from '@/components/SocialMedia'
import TallyForms from '@/components/TallyForms'
import Testimonials from '@/components/Testimonials'
import Video from '@/components/Video'
import { Inter } from '@next/font/google'
import { useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pricingRef = useRef(null)
  const contributorsRef = useRef(null)

  return (
    <>
      <ScrollUp />
      <Hero />
      <Testimonials />
      <CTA scrollIntoView={contributorsRef} />
      <AboutL3A />
      <Categories />
      <div ref={contributorsRef}>
        <L3AContributors />
      </div>
      <Contribute />
      <TallyForms />
      <SocialMedia />
    </>
  )
}
