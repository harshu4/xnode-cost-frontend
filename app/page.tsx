/* eslint-disable no-unused-vars */
'use client'

import L3AContributors from '@/components/About/L3AContributors'
import Categories2 from '@/components/Categories2'
import ScrollUp from '@/components/Common/ScrollUp'
import Contribute2 from '@/components/Contribute2'
import Hero from '@/components/Hero'
import SuccessStories from '@/components/SuccessStories'
import ExpertsList from '@/components/ExpertsList'
import Hero3 from '@/components/Hero3'
import Hero4 from '@/components/Hero4'
import SocialMedia from '@/components/SocialMedia'
import TallyForms from '@/components/TallyForms'
import Techs from '@/components/Techs'
import { Inter } from '@next/font/google'
import { useRef } from 'react'
import { RevealWrapper } from 'next-reveal'
import Hero5 from '@/components/Hero5'
import Hero6 from '@/components/Hero6'
import Hero7 from '@/components/Hero7'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pricingRef = useRef(null)
  const contributorsRef = useRef(null)
  const tallyFormsRef = useRef(null)

  return (
    <>
      <ScrollUp />
      <Hero />
      <SuccessStories />
      <ExpertsList />
    </>
  )
}
