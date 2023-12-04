/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
'use client'
// import { useState } from 'react'
import { useEffect, useState, ChangeEvent, FC, useContext } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Eye, EyeSlash } from 'phosphor-react'
import * as Yup from 'yup'
import axios from 'axios'
import Checkbox from '@material-ui/core/Checkbox'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-quill/dist/quill.snow.css' // import styles
import 'react-datepicker/dist/react-datepicker.css'
import { getData } from '@/utils/data'
import { DataProvider } from '@/types/dataProvider'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { format } from 'sql-formatter'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { formatDistanceToNow, differenceInDays } from 'date-fns'
import {
  getDataXnodeValidatorsInfo,
  getXnodeWithNodesValidatorsStats,
} from '@/utils/xnode'
import { XnodeValidatorsStats, XnodeWithValidatorsStats } from '@/types/node'
import Stats from './Stats'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const Validators = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [nextCongrats, setNextCongrats] = useState<boolean>(false)
  const [data, setData] = useState<XnodeValidatorsStats>()

  const { push } = useRouter()

  const searchParams = useSearchParams()
  const newDeploy = searchParams.get('newDeploy')

  async function getData() {
    try {
      const res = await getDataXnodeValidatorsInfo()
      setData(res)
      console.log(res)
    } catch (err) {
      toast.error(`An error occurred`)
      //   push('/community')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    getData()
  }, [])

  const MapChart = () => {
    return (
      <Geographies geography={'...'}>
        {({ geographies }) =>
          geographies.map((geography) => (
            <Geography key={geography.rsmKey} geography={geography} />
          ))
        }
      </Geographies>
    )
  }

  if (isLoading) {
    return (
      <section className=" pl-[30px] pr-[30px] pt-[46px] pb-[50px] text-[#000] md:pl-[90px]  md:pr-[130px] lg:min-w-[800px] xl:min-w-[1200px] 2xl:min-w-[1200px]">
        <div className="container hidden h-60 animate-pulse px-0 pb-12 md:flex">
          <div className="mr-10 w-3/4 animate-pulse bg-[#dfdfdf]"></div>
          <div className="w-1/4 animate-pulse bg-[#dfdfdf]"></div>
        </div>
        <div className="container h-60 animate-pulse px-0 pb-12 md:hidden">
          <div className="mt-[10px] h-10 w-full animate-pulse bg-[#dfdfdf]"></div>
          <div className="mt-[10px] h-10 w-full animate-pulse bg-[#dfdfdf]"></div>
          <div className="mt-[20px] h-32 w-full animate-pulse bg-[#dfdfdf]"></div>
        </div>
      </section>
    )
  }

  if (data) {
    return (
      <section className="base:pt-[78px] w-full rounded-[10px] bg-[#F9F9F9] px-[20px] pb-[150px] md:pt-[93px] md:pb-[180px] lg:pt-[109px] lg:pb-[210px] xl:w-[1379px] xl:pt-[124px] xl:pb-[240px] 2xl:w-[1724px] 2xl:pt-[155px] 2xl:pb-[300px]">
        {' '}
        <div className="mt-[130px] md:mt-[156px] lg:mt-[182px] xl:mt-[208px] 2xl:mt-[260px]">
          <Stats
            averagePayoutPeriod={data.stats.averagePayoutPeriod}
            nodes={data.nodes}
            totalAverageReward={data.stats.totalAverageReward}
            totalStakeAmount={data.stats.totalStakeAmount}
            totalValidators={data.stats.totalValidators}
          />
          <MapChart />
        </div>
      </section>
    )
  }
}

export default Validators
