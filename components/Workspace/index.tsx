/* eslint-disable no-unused-vars */
'use client'
import { useState, useContext } from 'react'
import Dropdown from '../Dropdown'
import LatencySelector from '../LatencySelector'
import { AccountContext } from '@/contexts/AccountContext'
import NodesFlow from '../NodesFlow'
import ReviewYourBuild from '../ReviewYourBuild'
import Signup from '../Signup'
import Connections from '../Connections'
import FinalBuild from '../FinalBuild'

/* eslint-disable react/no-unescaped-entities */
const Workspace = () => {
  return (
    <>
      <div className="mx-auto mb-[50px] h-[1300px] w-[300px] rounded-[10px] bg-[#F9F9F9] md:w-[600px] lg:w-[950px] xl:w-[1200px] 2xl:mb-[100px] 2xl:w-[1500px]">
        <NodesFlow fromScratch={false} />
      </div>
    </>
  )
}

export default Workspace
