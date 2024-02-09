/* eslint-disable no-unused-vars */
'use client'

import ScrollUp from '@/components/Common/ScrollUp'
import Hero from '@/components/Hero'
import { Inter } from '@next/font/google'
import { useRef } from 'react'
import PythiaLandingPage from '@/components/PythiaLandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pricingRef = useRef(null)
  const contributorsRef = useRef(null)
  const tallyFormsRef = useRef(null)

  return (
    <>
      <ScrollUp />
      <div className="h-[calc(100vh-6rem)] w-full">
        <PythiaLandingPage />
      </div>
    </>
  )
}
