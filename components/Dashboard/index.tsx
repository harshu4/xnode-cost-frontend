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
import { parseCookies, destroyCookie } from 'nookies'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [xnodesData, setXnodesData] = useState<Xnode[] | []>([])

  const cookies = parseCookies()
  const userHasAnyCookie = cookies.userSessionToken

  const generateFakeData = () => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    return months.map((month) => ({
      name: month,
      uptime: Math.floor(Math.random() * 100),
    }))
  }

  const [chartData, setChartData] = useState(generateFakeData())

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
    setProjectDescription,
    setSignup,
    setNextFromScratch,
    setConnections,
    setFinalBuild,
    setTagXnode,
  } = useContext(AccountContext)

  const { push } = useRouter()

  function handleEdit(id: string, nodes, edges, tag, projectName, description) {
    localStorage.setItem('editingNode', id)
    localStorage.setItem('nodes', JSON.stringify(nodes))
    localStorage.setItem('edges', JSON.stringify(edges))
    setTagXnode(tag)
    setProjectName(projectName)
    setProjectDescription(description)
    setNextFromScratch(false)
    setReviewYourBuild(false)
    setSignup(false)
    setConnections(false)
    setFinalBuild(false)
    setNext(true)
    push('/start-here')
  }

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

  useEffect(() => {
    if (!userHasAnyCookie) {
      push('/')
    }
  }, [])

  const commonClasses =
    'pb-[17.5px] whitespace-nowrap font-normal text-[8px] md:pb-[21px] lg:pb-[24.5px] xl:pb-[28px] 2xl:pb-[35px] 2xl:text-[16px] md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px]'

  const renderTable = () => {
    return (
      <div className=" mx-auto flex  text-[#000]">
        <table className="mx-auto w-full">
          <thead className="">
            <tr>
              <th
                scope="col"
                className="text-left text-[8px] font-bold  tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
              >
                Deployment summary{' '}
              </th>
              <th
                scope="col"
                className="text-left text-[8px] font-bold  tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
              >
                Use Case
              </th>
              <th
                scope="col"
                className="text-left text-[8px] font-bold tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
              >
                Creation Date
              </th>
              <th
                scope="col"
                className="text-left  text-[8px] font-bold  tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
              >
                Average Cost
              </th>
              <th
                scope="col"
                className="text-left  text-[8px] font-bold  tracking-wider  md:text-[9.6px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
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
                  <div
                    onClick={() => {
                      handleEdit(
                        node.id,
                        JSON.parse(node.consoleNodes),
                        JSON.parse(node.consoleEdges),
                        node.useCase,
                        node.name,
                        node.description,
                      )
                    }}
                    className="mt-[4px] text-[6px] text-[#0354EC] md:text-[7.2px] lg:text-[8.4px] xl:text-[9.6px] 2xl:text-[12px]"
                  >
                    More
                  </div>
                </td>
                <td className={commonClasses}>{node.useCase}</td>
                <td className={commonClasses}>
                  {new Date(node.createdAt).toLocaleDateString()}
                </td>
                <td className={commonClasses}>381.89 P/m</td>
                <td className={commonClasses}>{node.status}</td>
                <td className="pb-[17.5px] text-[7px] font-medium text-[#0354EC] underline underline-offset-2  md:pb-[21px] md:text-[8.4px]  lg:pb-[24.5px] lg:text-[9.8px] xl:pb-[28px] xl:text-[11.2px] 2xl:pb-[35px] 2xl:text-[14px]">
                  <div
                    className=" cursor-pointer "
                    onClick={() => {
                      handleEdit(
                        node.id,
                        JSON.parse(node.consoleNodes),
                        JSON.parse(node.consoleEdges),
                        node.useCase,
                        node.name,
                        node.description,
                      )
                    }}
                  >
                    Edit
                  </div>
                </td>
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

  if (xnodesData.length === 0) {
    return (
      <div>
        <div className="mt-[64px] mb-[100px]  flex items-center justify-center text-[#000]">
          <div className="">
            <SmileySad size={32} className="mx-auto mb-2" />
            <div>No Xnodes found</div>
          </div>
        </div>
      </div>
    )
  }

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
      <div className="w-[750px] rounded-[10px] bg-[#F9F9F9] px-[50px]  pt-[30px] pb-[172px] shadow-[1px_1px_6px_0px_rgba(124,124,124,0.20)] md:w-[900px] md:px-[60px] md:pt-[36px] md:pb-[213px] lg:w-[1050px] lg:px-[70px]  lg:pt-[42px] lg:pb-[248px]  xl:w-[1200px] xl:px-[80px]  xl:pt-[48px] xl:pb-[284px] 2xl:w-[1500px] 2xl:px-[100px] 2xl:pt-[60px] 2xl:pb-[355px]  ">
        <div className="text-[10px] font-bold text-[#313131] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
          Your deployments
        </div>
        <div className="mt-[22.5px] md:mt-[27px] lg:mt-[31.5px] xl:mt-[36px] 2xl:mt-[45px]">
          {' '}
          {renderTable()}
        </div>
        <div className="mt-[40px] text-[10px] font-bold text-[#313131] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px]">
          Dashboards to display{' '}
        </div>
        <div className="mt-[50px]">
          <h2 className="ml-[50px] mb-[20px] text-lg font-semibold text-[#000]">
            Xnode Uptime
          </h2>
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="uptime"
              stroke="#0354EC"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </div>
    </>
  )
}

export default Dashboard
