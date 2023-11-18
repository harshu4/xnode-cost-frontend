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
const StartHere = ({ onValueChange }) => {
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
    setFinalNodes,
    signup,
  } = useContext(AccountContext)

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
    console.log('handl enext chamado')
    setFinalNodes([])
    localStorage.clear()
    setNext(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleNextFromScratch() {
    console.log('handl enext chamado')
    setFinalNodes([])
    localStorage.clear()
    setNextFromScratch(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (finalBuild) {
    return (
      <>
        <div className="rounded-[10px] xl:w-[1200px] 2xl:w-[1500px] ">
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
        <div className="h-[1300px] w-[1300px] rounded-[10px] bg-[#F9F9F9] ">
          <Signup />
        </div>
      </>
    )
  }

  if (reviewYourBuild) {
    return (
      <>
        <div className="rounded-[10px] xl:w-[1200px] 2xl:w-[1500px] ">
          <ReviewYourBuild />
        </div>
      </>
    )
  }

  if (nextFromScratch) {
    return (
      <>
        <div className="h-[1300px] w-[750px] rounded-[10px] bg-[#F9F9F9] md:w-[900px] lg:w-[1050px] xl:w-[1200px] 2xl:w-[1500px] ">
          <NodesFlow fromScratch={true} />
        </div>
      </>
    )
  }

  if (next) {
    return (
      <>
        <div className="h-[1300px] w-[750px] rounded-[10px] bg-[#F9F9F9] md:w-[900px] lg:w-[1050px] xl:w-[1200px] 2xl:w-[1500px] ">
          <NodesFlow fromScratch={false} />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="w-full max-w-[1800px] rounded-[10px] bg-[#F9F9F9] pl-[85px] pr-[132px] pt-[45px] pb-[172px] md:pl-[102px] md:pr-[158px] md:pt-[54px] md:pb-[213px] lg:pl-[119px] lg:pr-[184px] lg:pt-[63px] lg:pb-[248px] xl:pl-[136px] xl:pr-[211px] xl:pt-[72px] xl:pb-[284px] 2xl:pl-[170px] 2xl:pr-[264px] 2xl:pt-[90px] 2xl:pb-[355px]  ">
        <div className="flex justify-between gap-x-[20px]">
          <div
            className={`w-full max-w-[180px] rounded-[5px] border-[1px] border-[#0354EC] px-[21px] pt-[12px] pb-[17px]  md:max-w-[216px] md:px-[25px] md:pt-[14px] md:pb-[20px]  lg:max-w-[252px] lg:px-[29px] lg:pt-[17px] lg:pb-[23px] xl:max-w-[288px] xl:px-[33px] xl:pt-[19px] xl:pb-[27px] 2xl:max-w-[360px] 2xl:px-[42px] 2xl:pt-[24px] 2xl:pb-[34px]`}
            onClick={() => {}}
          >
            <div className="relative ">
              <img
                src="/images/presets/custom.svg"
                alt="image"
                className={`h-[12.5px] w-[15.5px] cursor-pointer md:h-[15px] md:w-[18.5px]  lg:h-[17.5px] lg:w-[21.7px] xl:h-[20px] xl:w-[25px] 2xl:h-[25px] 2xl:w-[28px]`}
              />
              <div className="mt-[8px] text-[12px] font-bold text-[#313131] md:mt-[9px] md:text-[14.5px] lg:mt-[10.5px] lg:text-[17px] lg:!leading-[22px] xl:text-[19px] 2xl:mt-[15px] 2xl:text-[24px]">
                How to build your first Xnode
              </div>
              <div className=" mt-[5px] mr-[10px] text-[7px]  font-medium text-[#959595] md:mt-[6px] md:mr-[12px]  md:text-[8.5px] lg:mt-[7px] lg:mr-[14px] lg:text-[10px] lg:!leading-[19px] xl:text-[11.2px] 2xl:mt-[10px] 2xl:mr-[20px] 2xl:text-[14px]">
                Fully customize your Xnode provision by selecting the available
                configurations in the next page
              </div>
              <div
                onClick={() => {
                  handleNextFromScratch()
                }}
                className="mt-[37px] cursor-pointer text-[10px] font-normal text-[#12AD50] hover:font-medium md:mt-[45px] md:text-[12px] lg:mt-[52px] lg:text-[14px] xl:mt-[60px] xl:text-[16px] 2xl:mt-[75px] 2xl:text-[20px]"
              >
                Start {'>'}
              </div>
            </div>
          </div>
          <div className="text-[7px] md:max-w-[220px] md:text-[8.5px] lg:text-[10px] xl:text-[12.5px] 2xl:text-[14px]">
            <div className="border-b-[1px] border-t-[1px] border-[#D9D9D9] pb-[15px]  pt-[4px] text-[#000] lg:pt-[12px] lg:pb-[50px]  2xl:pt-[15px] 2xl:pb-[50px] ">
              <div className="pb-[8px] font-normal lg:pb-[12px] lg:leading-[19px] 2xl:pb-[15px]">
                How to build your first Xnode
              </div>
              <div className="lg:!leading-[150%]">
                <a className="text-[8px] font-bold text-[#0354EC] md:text-[9.5px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]">
                  Understanding Xnode
                </a>
              </div>
              <div className="">
                <a
                  href={
                    'https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/use-cases'
                  }
                  target="_blank"
                  className="text-[8px] font-normal text-[#0354EC] hover:font-medium md:text-[9.5px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
                  rel="noreferrer"
                >
                  An introduction to xNode's role in decentralizing data
                  infrastructure.
                </a>
              </div>
              <div className="mt-[15px]">
                <a className="text-[8px] font-normal text-[#0354EC] md:text-[9.5px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]">
                  Setting Up
                </a>
              </div>
              <div className="">
                <a
                  href={
                    'https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/use-cases'
                  }
                  target="_blank"
                  className="cursor-pointer text-[8px] font-normal text-[#0354EC] hover:font-medium md:text-[9.5px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
                  rel="noreferrer"
                >
                  Step-by-step guide to deploying an xNode.{' '}
                </a>
              </div>
              <div className="mt-[15px]">
                <a className="text-[8px] font-normal text-[#0354EC] md:text-[9.5px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]">
                  Developer support and resources{' '}
                </a>
              </div>
              <div className="">
                <a
                  href={
                    'https://open-mesh.gitbook.io/l3a-v3-documentation-2.0/openmesh/use-cases'
                  }
                  target="_blank"
                  className="cursor-pointer text-[8px] font-normal text-[#0354EC] hover:font-medium md:text-[9.5px] lg:text-[11.2px] xl:text-[12.8px] 2xl:text-[16px]"
                  rel="noreferrer"
                >
                  Docs & Research
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[75px] text-[20px] font-normal -tracking-[2%] text-[#000] md:mt-[82px] md:text-[24px] lg:mt-[96px] lg:text-[28px] lg:!leading-[48px] xl:mt-[110px] xl:text-[32px] 2xl:mt-[138px] 2xl:text-[40px]">
          Get started with use cases2
        </div>
        <div className="relative mt-[35px] grid justify-between gap-x-[8px] gap-y-[15px] md:mt-[42px] md:grid-cols-2 md:gap-x-[9px] md:gap-y-[18px] lg:mt-[49px] lg:grid-cols-2 lg:gap-x-[10.5px] lg:gap-y-[21px] xl:mt-[56px] xl:grid-cols-3 xl:gap-x-[12px] xl:gap-y-[24px] 2xl:mt-[70px] 2xl:grid-cols-3 2xl:gap-x-[15px] 2xl:gap-y-[30px]">
          {preSetsOptions.map((option, index) => (
            <div
              className={`relative h-[200px] transform cursor-pointer rounded-[5px] p-[10px] px-[21px] pt-[26px] transition-transform hover:shadow-[0_4px_20px_0px_rgba(3,84,236,0.40)] md:h-[300px] md:px-[25px] md:pt-[15.5px] md:hover:scale-105 lg:h-[462px] lg:px-[29px] lg:pt-[18px] xl:px-[33px] xl:pt-[21px] 2xl:px-[42px] 2xl:pt-[26px] ${
                presetId === index
                  ? 'border-[1.5px] border-[#0354EC] shadow-[0_4px_20px_0px_rgba(3,84,236,0.40)]'
                  : 'border-[0.5px] border-[#D9D9D9]'
              }`}
              key={index}
              onClick={() => {
                setPresetId(index)
                onValueChange(index)
              }}
            >
              <div className="relative h-full w-full max-w-[300px]">
                <img
                  src={option.icon}
                  alt="image"
                  className={`transform cursor-pointer transition-transform hover:scale-105 ${option.iconStyle}`}
                />
                <div className="mt-[8px] text-[9px] font-bold text-[#313131] md:mt-[9px] md:text-[11px] lg:mt-[10.5px] lg:text-[12.5px] lg:!leading-[22px] xl:text-[14.5px] 2xl:mt-[15px] 2xl:text-[18px]">
                  {option.title}
                </div>
                <div className=" mt-[5px] mr-[10px] text-[8px]  font-medium text-[#959595] md:mt-[6px] md:mr-[12px]  md:text-[9px] lg:mt-[7px] lg:mr-[14px] lg:text-[11px] lg:!leading-[19px] xl:text-[13px] 2xl:mt-[10px] 2xl:mr-[20px] 2xl:text-[16px]">
                  {option.description}
                </div>
                <div className="absolute top-[200px] flex flex-wrap gap-x-[17.5px] gap-y-[12.5px] md:gap-y-[15px] md:gap-x-[21px] lg:gap-y-[17.5px] lg:gap-x-[24.5px] xl:gap-y-[20px] xl:gap-x-[28px] 2xl:gap-y-[25px] 2xl:gap-x-[35px]">
                  {option.list.map((option, index) => (
                    <div key={index}>
                      <img
                        src={option.icon}
                        alt="image"
                        className={`mx-auto flex w-[10px] transform cursor-pointer transition-transform hover:scale-105 md:w-[15px] lg:w-[17.5px] xl:w-[20px] 2xl:w-[25px]`}
                      />
                      <div className="mt-[7px] text-[6.5px] text-[#000] md:text-[7px] lg:text-[8.5px] xl:text-[9.5px] 2xl:text-[12px]">
                        {' '}
                        {option.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className={`absolute bottom-0 flex  gap-x-[5px] md:gap-x-[6px] lg:gap-x-[7px] xl:gap-x-[8px]  2xl:gap-x-[10px]`}
                >
                  <img
                    src="/images/presets/server.svg"
                    alt="image"
                    className={`h-[18px] w-[22.5px] md:h-[21.5px] md:w-[27px] lg:h-[25px] lg:w-[31.5px] xl:h-[29px] xl:w-[36px] 2xl:h-[36px] 2xl:w-[45px]`}
                  />
                  <img
                    src="/images/presets/server.svg"
                    alt="image"
                    className={`h-[18px] w-[22.5px] md:h-[21.5px] md:w-[27px] lg:h-[25px] lg:w-[31.5px] xl:h-[29px] xl:w-[36px] 2xl:h-[36px] 2xl:w-[45px]`}
                  />
                </div>
              </div>
              {presetId === index && (
                <div className="absolute top-[1px] right-0">
                  <img
                    src="/images/presets/check.svg"
                    alt="image"
                    className={
                      'h-[21px] w-[25px] md:h-[25px] md:w-[30px] lg:h-[29.5px] lg:w-[35px] xl:h-[33px] xl:w-[40px] 2xl:h-[42px] 2xl:w-[50px]'
                    }
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            handleNextUseCase()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className=" mt-[12px] flex w-fit cursor-pointer gap-x-[10px] rounded-[5px] bg-[#0354EC] px-[54px] py-[6.25px]  text-[7px] font-medium text-[#fff] hover:bg-[#123981] md:mt-[65px] md:py-[5px] md:px-[39px] md:text-[8.5px] lg:mt-[75.5px] lg:py-[9px] lg:px-[45px] lg:text-[10px] lg:!leading-[19px] xl:mt-[86.5px] xl:py-[10px] xl:px-[51px] xl:text-[11px] 2xl:mt-[108px] 2xl:py-[12.5px] 2xl:px-[64px] 2xl:text-[14px]"
        >
          <div>Next</div>
          <img
            src={`/images/dataset/arrow.svg`}
            alt="image"
            className="my-auto h-[7.5px] w-[8px] md:h-[9px] md:w-[9.4px] lg:h-[10.5px] lg:w-[11px] xl:h-[12px] xl:w-[12.3px] 2xl:h-[15px] 2xl:w-[15.4px]"
          />
        </div>
      </div>
    </>
  )
}

export default StartHere
