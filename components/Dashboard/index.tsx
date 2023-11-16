'use client'
/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react'
import { getDatasets } from '@/utils/data'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DataProvider } from '@/types/dataProvider'
import { SmileySad } from 'phosphor-react'
import Filter from '@/components/Filter'
import { TextField, Autocomplete } from '@mui/material'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import ProductsList from '../ProductsList'
import { AccountContext } from '@/contexts/AccountContext'
import axios from 'axios'
import { Xnode } from '../../types/node'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [xnodesData, setXnodesData] = useState<Xnode[] | []>([])

  const {
    selectionSideNavBar,
    setSelectionSideNavBar,
    next,
    setNext,
    reviewYourBuild,
    setReviewYourBuild,
    finalNodes,
    tagXnode,
    user,
    projectName,
    setProjectName,
    setSignup,
  } = useContext(AccountContext)

  const { push } = useRouter()

  async function getData() {
    console.log('get data')
    setIsLoading(true)
    console.log(user)
    if (user?.sessionToken) {
      console.log('tem user session token')
      const config = {
        method: 'get' as 'get',
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_BASE_URL}/xnodes/functions/getXnodes`,
        headers: {
          'x-parse-application-id': `${process.env.NEXT_PUBLIC_API_BACKEND_KEY}`,
          'X-Parse-Session-Token': user.sessionToken,
          'Content-Type': 'application/json',
        },
      }

      try {
        await axios(config).then(function (response) {
          if (response.data) {
            console.log(response.data)
            setXnodesData(response.data)
          }
        })
      } catch (err) {
        toast.error(
          `Error getting the Xnode list: ${err.response.data.message}`,
        )
      }
    }
    setIsLoading(false)
  }

  const commonClasses =
    'pb-[17.5px] whitespace-nowrap font-normal text-[8px] md:pb-[21px] lg:pb-[24.5px] xl:pb-[28px] 2xl:pb-[35px] 2xl:text-[16px]  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px]'

  const renderTable = () => {
    return (
      <div className="overflow-x-auto text-[#000]">
        <table className="min-w-full">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="text-left text-[8px] font-bold uppercase tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
              >
                Deployment summary{' '}
              </th>
              <th
                scope="col"
                className="text-left text-[8px] font-bold uppercase tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
              >
                Use Case
              </th>
              <th
                scope="col"
                className="text-left text-[8px] font-bold uppercase tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
              >
                Creation Date
              </th>
              <th
                scope="col"
                className="text-left  text-[8px] font-bold uppercase tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
              >
                Average Cost
              </th>
              <th
                scope="col"
                className="text-left  text-[8px] font-bold uppercase tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
              >
                Status
              </th>
            </tr>
          </thead>
          <div className="mt-[25px]"></div>
          <tbody className="">
            {xnodesData.map((node) => (
              <tr key={node.id}>
                <td className={`${commonClasses}`}>
                  <div>{node.name}</div>
                  <div className="mt-[2px] text-[6px] text-[#8D8D8D] md:text-[7.2px] lg:text-[8.4px] xl:text-[9.6px] 2xl:text-[12px]">
                    {node.description}
                  </div>
                  <div className="mt-[4px] text-[6px] text-[#0354EC] md:text-[7.2px] lg:text-[8.4px] xl:text-[9.6px] 2xl:text-[12px]">
                    More
                  </div>
                </td>
                <td className={commonClasses}>{node.useCase}</td>
                <td className={commonClasses}>
                  {new Date(node.createdAt).toLocaleDateString()}
                </td>
                <td className={commonClasses}>381.89 P/m</td>
                <td className={commonClasses}>{node.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  useEffect(() => {
    getData()
  }, [user])

  if (isLoading) {
    return (
      <section className="w-[700px] bg-white px-[20px] pt-[46px] pb-[50px] text-[#000] md:w-[840px] lg:w-[980px] xl:w-[1120px] 2xl:w-[1400px]">
        <div className="hidden h-60 animate-pulse px-0 pb-12 md:flex">
          <div className="mr-10 w-3/4 animate-pulse bg-[#dfdfdf]"></div>
          <div className="w-1/4 animate-pulse bg-[#dfdfdf]"></div>
        </div>
        <div className="hidden h-60 animate-pulse px-0 pb-12 md:flex">
          <div className="mr-10 w-3/4 animate-pulse bg-[#dfdfdf]"></div>
          <div className="w-1/4 animate-pulse bg-[#dfdfdf]"></div>
        </div>
        <div className="h-60 animate-pulse px-0 pb-12 md:hidden">
          <div className="mt-[10px] h-10 w-full animate-pulse bg-[#dfdfdf]"></div>
          <div className="mt-[10px] h-10 w-full animate-pulse bg-[#dfdfdf]"></div>
          <div className="mt-[20px] h-32 w-full animate-pulse bg-[#dfdfdf]"></div>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="w-[750px] rounded-[10px] bg-[#F9F9F9] pl-[85px] pr-[132px] pt-[30px] pb-[172px] md:w-[900px] md:pt-[36px] md:pl-[102px] md:pr-[158px] md:pb-[213px] lg:w-[1050px]  lg:pt-[42px] lg:pl-[119px] lg:pr-[184px] lg:pb-[248px]  xl:w-[1200px] xl:pt-[48px] xl:pl-[136px] xl:pr-[211px]  xl:pb-[284px] 2xl:w-[1500px] 2xl:pl-[170px] 2xl:pr-[264px] 2xl:pt-[60px] 2xl:pb-[355px]  ">
        <div className="text-[10px] font-bold text-[#313131] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
          Your deployments
        </div>
        <div> {renderTable()}</div>
      </div>
    </>
  )
}

export default Dashboard
