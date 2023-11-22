/* eslint-disable no-unused-vars */
'use client'
import { useState } from 'react'
import Dropdown from '../Dropdown'
import LatencySelector from '../LatencySelector'
import Presets from '../Presets'
import CostEstimator from '../CostEstimator'
import ServerProvision from '../ServerProvision'
import IncludedServices from '../IncludedServices'
import AddOns from '../AddOns'
import SelectCloudProvider from '../SelectCloudProvider'
import SelectServiceRegion from '../SelectServiceRegion'
import SelectLatencyPreference from '../SelectLatencyPreference'
import SelectUseCase from '../SelectUseCase'
import Hero from '../Hero'
import StartHere from '../StartHere'

/* eslint-disable react/no-unescaped-entities */
const Console = () => {
  const [cloudProvider, setCloudProvider] = useState<string>('Equinix')
  const [serviceRegion, setServiceRegion] = useState<string>('US East (Boston)')
  const [latencyPreference, setLatencyPreference] = useState<string>('Low')
  const [preset, setPreset] = useState<number>(0)
  const [includedServices, setIncludedServices] = useState([
    'Kubernetes',
    'Openmesh Consensus',
    'BitTorrent Protocol Client',
    'Phytia Pro',
    'APIs & Connectivity',
  ])
  const [addOnsServices, setAddOnsServices] = useState([])
  const [serversNumber, setServersNumber] = useState<number>(2)
  const [serversType, setServersType] = useState<string>('small')

  const [next, setNext] = useState<Boolean>(false)

  const handleServiceRegionChange = (newValue) => {
    setServiceRegion(newValue)
  }

  const handleLatencyPreferenceChange = (newValue) => {
    setLatencyPreference(newValue)
  }

  const handleServersTypeChange = (newValue) => {
    setServersType(newValue)
  }

  const handleServersNumberChange = (newValue) => {
    setServersNumber(newValue)
  }

  const handleIncludedServersChange = (newValue) => {
    if (includedServices.includes(newValue)) {
      // Se o valor já existe, remova-o do array
      setIncludedServices((prevServices) =>
        prevServices.filter((service) => service !== newValue),
      )
    } else {
      // Se o valor não existe, adicione-o ao array
      setIncludedServices((prevServices) => [...prevServices, newValue])
    }
  }

  const handleObservabilityServicesChange = (newValue) => {
    if (addOnsServices.includes(newValue)) {
      // Se o valor já existe, remova-o do array
      setAddOnsServices((prevServices) =>
        prevServices.filter((service) => service !== newValue),
      )
    } else {
      // Se o valor não existe, adicione-o ao array
      setAddOnsServices((prevServices) => [...prevServices, newValue])
    }
  }

  const renderSecondStepComponent = () => {
    // switch (preset) {
    //   case 0:
    //     return <Component1 />
    //   case 1:
    //     return <Component2 />
    //   case 2:
    //     return <Component3 />
    //   case 3:
    //     return <Component4 />
    //   case 4:
    //     return <Component5 />
    //   default:
    //     return null
    // }
  }

  return (
    <>
      <div className="flex">
        <section id="home" className={`w-full`}>
          <StartHere onValueChange={console.log('')} />
        </section>
      </div>

      <div className="w-full border-b-[1px] text-[#D4D4D4]"></div>
    </>
  )
}

export default Console
