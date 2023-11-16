/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react'
import Dropdown from '../Dropdown'
import LatencySelector from '../LatencySelector'
import Presets from '../Presets'
import CostEstimator from '../CostEstimator'
import ServerProvision from '../ServerProvision'
import IncludedServices from '../IncludedServices'
import AddOns from './AddOns'
import SelectCloudProvider from '../SelectCloudProvider'
import SelectServiceRegion from '../SelectServiceRegion'
import SelectLatencyPreference from '../SelectLatencyPreference'
import SelectUseCase from '../SelectUseCase'
import Hero from '../Hero'
import { useRouter } from 'next/navigation'
import CloudProvider from './CloudProvider'
import { AccountContext } from '@/contexts/AccountContext'
import ServiceRegion from './ServiceRegion'
import YourCore from './YourCore'
import { CoreServices } from '@/types/node'
import AddOns2 from './AddOns2'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

/* eslint-disable react/no-unescaped-entities */
const ReviewYourBuild = () => {
  const [cloudProvider, setCloudProvider] = useState<string>()
  const [serviceRegion, setServiceRegion] = useState<string>()
  const [coreServices, setCoreServices] = useState<CoreServices[]>([])
  const [coreServicesData, setCoreServicesData] = useState<string[]>([])
  const [coreServicesApi, setCoreServicesApi] = useState<string[]>([])
  const [isDeploying, setIsDeploying] = useState<boolean>(false)
  const [isLoadingFeatures, setIsLoadingFeatures] = useState<boolean>(false)

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

  const coreServicesType = ['utility', 'rpc', 'analytics']
  const nameToDesc = {
    ValidationCloud: 'Enterprise-grade staking and node infrastructure',
    NodeReal: 'One-stop blockchain infrastructure and service provider.',
    Grafana: 'Data Streaming service',
    Prometheus: 'A node service provider, that provides.',
    Ascend:
      "Data Pipeline Automation for building the world's most intelligent data pipelines.",
    Databricks:
      'Combines data warehouses & data lakes into a lakehouse architecture.',
    InfraAdmin: 'One-stop blockchain infrastructure and service provider.',
    'Pythia Pro': 'Data Streaming service',
    Pythia: 'A node service provider, that provides.',
    Snowflake: 'One-stop blockchain infrastructure and service provider.',
  }
  const nameToFree = {
    ValidationCloud: false,
    NodeReal: false,
    Grafana: true,
    Prometheus: true,
    Ascend: true,
    Databricks: false,
    InfraAdmin: false,
    'Pythia Pro': true,
    Pythia: true,
    Snowflake: true,
  }

  const { push } = useRouter()

  async function createXnode() {
    setIsDeploying(true)
    const savedNodes = localStorage.getItem('nodes')
    const savedEdges = localStorage.getItem('edges')

    const finalData = {
      name: projectName,
      description: 'This is my xnode',
      useCase: tagXnode,
      status: 'Running',
      consoleNodes: savedNodes,
      consoleEdges: savedEdges,
    }

    if (user.sessionToken) {
      const config = {
        method: 'post' as 'post',
        url: `${process.env.NEXT_PUBLIC_API_BACKEND_BASE_URL}/xnodes/functions/createXnode`,
        headers: {
          'x-parse-application-id': `${process.env.NEXT_PUBLIC_API_BACKEND_KEY}`,
          'X-Parse-Session-Token': user.sessionToken,
          'Content-Type': 'application/json',
        },
        data: finalData,
      }

      try {
        await axios(config).then(function (response) {
          if (response.data) {
            console.log('deploy feito com sucesso')
            console.log(response.data)
            setIsLoadingFeatures(true)
          }
        })
      } catch (err) {
        toast.error(
          `Error during Xnode deployment: ${err.response.data.message}`,
        )
      }
    } else {
      push('/start-here')
    }
    setIsDeploying(false)
  }

  useEffect(() => {
    console.log('fui chamado meu mano brown')
    console.log(finalNodes)

    if (finalNodes) {
      // Setting the server flow
      const existingServerIndex = finalNodes.findIndex(
        (node) => node.type === 'server',
      )
      console.log(existingServerIndex)
      if (existingServerIndex !== -1) {
        setServiceRegion(
          finalNodes[existingServerIndex].data.defaultValueLocation,
        )
        setCloudProvider(
          finalNodes[existingServerIndex].data.defaultValueCloudProvider,
        )
      }

      // Setting the core services flow
      const coreServicesArray = []
      const coreServiceDataArray = []
      const coreServiceApiArray = []

      for (let i = 0; i < finalNodes.length; i++) {
        const node = finalNodes[i]

        if (coreServicesType.includes(node.type)) {
          console.log('includes sim')
          console.log(node.data)
          coreServicesArray.push({
            name: node.data.name,
            description: nameToDesc[node.data.name] || '',
            isFree: nameToFree[node.data.name] || false,
          })
        } else if (node.type === 'data') {
          for (let j = 0; j < node.data?.lists.length; j++) {
            coreServiceDataArray.push(node.data.lists[j].title)
          }
        } else if (node.type === 'api') {
          coreServiceApiArray.push(node.data.name)
        }
      }
      setCoreServices(coreServicesArray)
      setCoreServicesData(coreServiceDataArray)
      setCoreServicesApi(coreServiceApiArray)

      console.log('final arrays here')
      console.log(coreServicesArray)
      console.log(coreServiceDataArray)
      console.log(coreServiceApiArray)

      createXnode()
    }
  }, [])

  if (!isDeploying) {
    return (
      <section
        id="home"
        className={`mx-auto w-full  px-[30px] pb-[200px] pt-[25px] md:px-[36px] md:pt-[30px] lg:px-[42px] lg:pt-[35px] xl:px-[48px] xl:pt-[40px] 2xl:px-[60px] 2xl:pt-[50px]`}
      >
        {' '}
        <div className="mx-auto h-[200px] w-[200px] animate-spin rounded-full  border-b-2 border-[#0354EC]"></div>
      </section>
    )
  }

  return (
    <>
      <section
        id="home"
        className={`w-full  px-[30px] pb-[200px] pt-[25px] md:px-[36px] md:pt-[30px] lg:px-[42px] lg:pt-[35px] xl:px-[48px] xl:pt-[40px] 2xl:px-[60px] 2xl:pt-[50px]`}
      >
        <div>
          <div className="text-[18px]  font-bold -tracking-[2%] text-[#000000] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:text-[32px]">
            Your progress
          </div>
          <div className="mt-[25px] text-[18px] font-normal -tracking-[2%] text-[#C8C8C8] md:text-[19px] lg:text-[22px] lg:!leading-[39px] xl:text-[25px] 2xl:mt-[32px] 2xl:text-[32px]">
            Estimate time to deployment ~ 31 min
          </div>
          <div className="mt-[15px] grid gap-y-[10px] md:mt-[18px] md:gap-y-[12px] lg:mt-[21px] lg:gap-y-[14px]  2xl:mt-[30px] 2xl:gap-y-[20px]">
            <CloudProvider
              onValueChange={() => setReviewYourBuild(false)}
              cloudProvider={cloudProvider}
            />
            <ServiceRegion
              onValueChange={() => setReviewYourBuild(false)}
              serviceRegion={serviceRegion}
            />
            <YourCore
              coreServices={coreServices}
              coreServicesApi={coreServicesApi}
              coreServicesData={coreServicesData}
              isLoadingFeatures={isLoadingFeatures}
              onValueChange={() => setReviewYourBuild(false)}
            />
            <AddOns2
              coreServices={coreServices}
              onValueChange={() => setReviewYourBuild(false)}
              isLoadingFeatures={isLoadingFeatures}
            />
            {/* <AddOns onValueChange={() => setReviewYourBuild(false)} /> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewYourBuild
