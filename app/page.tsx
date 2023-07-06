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
import Categories2 from '@/components/Categories2'
import ScrollUp from '@/components/Common/ScrollUp'
import Contact from '@/components/Contact'
import Contribute from '@/components/Contribute'
import Contribute2 from '@/components/Contribute2'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Hero3 from '@/components/Hero3'
import Hero4 from '@/components/Hero4'
import Pricing from '@/components/Pricing'
import SocialMedia from '@/components/SocialMedia'
import TallyForms from '@/components/TallyForms'
import Techs from '@/components/Techs'
import Testimonials from '@/components/Testimonials'
import Video from '@/components/Video'
import { Inter } from '@next/font/google'
import { useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pricingRef = useRef(null)
  const contributorsRef = useRef(null)
  const tallyFormsRef = useRef(null)

  return (
    <>
      <ScrollUp />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Techs />
      <Categories2 />
      {/* <Testimonials /> */}
      {/* <CTA scrollIntoView={contributorsRef} /> */}
      {/* <AboutL3A />
      <Categories /> */}
      <div ref={contributorsRef}>
        <L3AContributors />
      </div>
      <Contribute2 scrollIntoView={tallyFormsRef} />
      <div ref={tallyFormsRef}>
        <TallyForms />
      </div>
      <SocialMedia />
    </>
  )
}
