/* eslint-disable react/no-unescaped-entities */
// import Image from 'next/image'
/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
'use client'
// import { useState } from 'react'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const Hero = () => {
  return (
    <section className="border-b border-[#CFCFCF] px-[20px] pt-[40px] pb-[43px] lg:px-[100px] lg:pt-[40px]">
      <div className="container px-[0px]">
        <div className="-mx-4 flex flex-wrap items-start">
          <div className="w-full px-4 lg:w-2/3">
            <div className="mb-1">
              <h3 className="text-[16px] font-bold !leading-[150%] text-[#000000] lg:text-[20px]">
                Add New Project
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
