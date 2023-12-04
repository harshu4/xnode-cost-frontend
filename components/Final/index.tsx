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
import { useRouter } from 'next/navigation'

/* eslint-disable react/no-unescaped-entities */
const Final = () => {
  const [presetId, setPresetId] = useState(0)
  const {
    selectionSideNavBar,
    setSelectionSideNavBar,
    next,
    setNext,
    reviewYourBuild,
    setReviewYourBuild,
    setNextFromScratch,
    nextFromScratch,
    connections,
    finalBuild,
    setIsEditingXnode,
    setXnodeType,
    setFinalNodes,
    signup,
  } = useContext(AccountContext)
  const { push } = useRouter()

  const preSetsOptions = [
    {
      icon: '/images/presets/building.svg',
      iconStyle:
        'h-[12.5px] w-[11px] md:h-[15px] md:w-[12.5px]  lg:h-[17.5px] lg:w-[14.7px] xl:h-[20px] xl:w-[17px] 2xl:h-[25px] 2xl:w-[21px]',
      title: 'Building a decentralized data infrastructure',
      description:
        'Build, manage, and scale decentralized data clouds, interconnect Xnodes to form a mesh network for seamless global data sharing',
      list: [
        {
          icon: '/images/startHere/database.svg',
          text: '1 x S',
        },
        {
          icon: '/images/startHere/streaming.svg',
          text: 'RPCs',
        },
        {
          icon: '/images/startHere/clock.svg',
          text: '~10s',
        },
        {
          icon: '/images/startHere/node.svg',
          text: 'Observability',
        },
        {
          icon: '/images/startHere/cadeado.svg',
          text: 'Consensus',
        },
      ],
    },
    {
      icon: '/images/presets/computer.svg',
      iconStyle:
        'h-[12.5px] w-[15.5px] md:h-[15px] md:w-[18.5px]  lg:h-[17.5px] lg:w-[21.7px] xl:h-[20px] xl:w-[25px] 2xl:h-[25px] 2xl:w-[31px]',
      title: 'Developing Apps and dApps',
      description:
        'Rapid prototype, test, and deploy mobile, web & decentralized applications (dApps)',
      list: [
        {
          icon: '/images/startHere/database.svg',
          text: '1 x S',
        },
        {
          icon: '/images/startHere/streaming.svg',
          text: 'RPCs',
        },
        {
          icon: '/images/startHere/clock.svg',
          text: '~10s',
        },
        {
          icon: '/images/startHere/node.svg',
          text: 'Observability',
        },
        {
          icon: '/images/startHere/cadeado.svg',
          text: 'Consensus',
        },
      ],
    },
    {
      icon: '/images/presets/chart.svg',
      iconStyle:
        'h-[12.5px] w-[16.5px] md:h-[15px] md:w-[20px]  lg:h-[17.5px] lg:w-[23px] xl:h-[20px] xl:w-[26px] 2xl:h-[25px] 2xl:w-[33px]',
      title: 'Real time analysis engine',
      description:
        'Rapid prototype, test, and deploy mobile, web & decentralized applications (dApps)',
      list: [
        {
          icon: '/images/startHere/database.svg',
          text: '1 x S',
        },
        {
          icon: '/images/startHere/streaming.svg',
          text: 'RPCs',
        },
        {
          icon: '/images/startHere/clock.svg',
          text: '~10s',
        },
        {
          icon: '/images/startHere/node.svg',
          text: 'Observability',
        },
        {
          icon: '/images/startHere/cadeado.svg',
          text: 'Consensus',
        },
      ],
    },
    {
      icon: '/images/presets/research.svg',
      iconStyle:
        'h-[14px] w-[16px] md:h-[16.5px] md:w-[19px]  lg:h-[19px] lg:w-[22.5px] xl:h-[22px] xl:w-[25.5px] 2xl:h-[27.7px] 2xl:w-[32px]',
      title: 'Research and development',
      description:
        'Rapid prototype, test, and deploy mobile, web & decentralized applications (dApps)',
      list: [
        {
          icon: '/images/startHere/database.svg',
          text: '1 x S',
        },
        {
          icon: '/images/startHere/streaming.svg',
          text: 'RPCs',
        },
        {
          icon: '/images/startHere/clock.svg',
          text: '~10s',
        },
        {
          icon: '/images/startHere/node.svg',
          text: 'Observability',
        },
        {
          icon: '/images/startHere/cadeado.svg',
          text: 'Consensus',
        },
      ],
    },
    {
      icon: '/images/presets/person.svg',
      iconStyle:
        'h-[12.5px] w-[15.5px] md:h-[15px] md:w-[18.5px]  lg:h-[17.5px] lg:w-[21.7px] xl:h-[20px] xl:w-[25px] 2xl:h-[25px] 2xl:w-[31px]',
      title: 'Run a validator',
      description:
        'Rapid prototype, test, and deploy mobile, web & decentralized applications (dApps)',
      list: [
        {
          icon: '/images/startHere/database.svg',
          text: '1 x S',
        },
        {
          icon: '/images/startHere/streaming.svg',
          text: 'RPCs',
        },
        {
          icon: '/images/startHere/clock.svg',
          text: '~10s',
        },
        {
          icon: '/images/startHere/node.svg',
          text: 'Observability',
        },
        {
          icon: '/images/startHere/cadeado.svg',
          text: 'Consensus',
        },
      ],
    },
  ]

  function handleNextUseCase() {
    setFinalNodes([])
    localStorage.clear()
    setIsEditingXnode(false)
    setNext(true)

    // if its index 4, its a validator
    if (presetId === 4) {
      localStorage.setItem('xnodeType', 'validator')
      setXnodeType('validator')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
    push(
      `${
        process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
          ? `/xnode/workspace`
          : `/workspace`
      }`,
    )
  }

  function handleNextFromScratch() {
    setFinalNodes([])
    localStorage.clear()
    setIsEditingXnode(false)
    setNextFromScratch(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (finalBuild) {
    return (
      <>
        <div className="mx-auto rounded-[10px] xl:w-[1200px] 2xl:w-[1500px] ">
          <FinalBuild />
        </div>
      </>
    )
  }

  if (connections) {
    return (
      <>
        <div className="rounded-[10px] xl:w-[1200px] 2xl:w-[1500px] ">
          <Connections />
        </div>
      </>
    )
  }

  if (signup) {
    return (
      <>
        <div className="mx-auto rounded-[10px] bg-[#F9F9F9] xl:w-[1200px] 2xl:w-[1500px] ">
          <Signup />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="mx-auto rounded-[10px] xl:w-[1200px] 2xl:w-[1500px]">
        <ReviewYourBuild />
      </div>
    </>
  )
}

export default Final
