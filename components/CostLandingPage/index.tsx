'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import Footer from '../Footer'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css' // import styles
import './react-quill.css'
import DisplayCost from './DisplayCost'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const dataOptions = {
  RPC: [
    {
      name: 'Running a Solana RPC',
      specs: [
        { name: 'RAM', value: '512GB' },
        { name: 'CPU', value: '16 Cores' },
        { name: 'Storage', value: '500GB + 1 TB' },
        { name: 'Network', value: '1GBPS' },
      ],
      plataform: {
        AZURE: '$3,111 E64-16ads V5',
        GCP: '$1848 N2d-high-mem-64',
        AWS: '>2776$ R6a.16x.large',
      },
    },
    {
      name: 'Running a Solana verifier',
      specs: [
        { name: 'RAM', value: '256GB' },
        { name: 'CPU', value: '16 Cores' },
        { name: 'Storage', value: '500GB + 1 TB' },
        { name: 'Network', value: '-' },
      ],
      plataform: {
        AZURE: '$1619 E32-16ads V5',
        GCP: '$1160 n2d-high-mem-64 ',
        AWS: '$1452$ r6a.8x.large',
      },
    },
    {
      name: 'Running a Fantom API Node',
      specs: [
        { name: 'RAM', value: '32GB' },
        { name: 'CPU', value: '4 Cores' },
        { name: 'Storage', value: '13 TB' },
        { name: 'Network', value: '10GBPS' },
      ],
      plataform: {
        AZURE: '$1476.55 B8ps-v2',
        GCP: '$2500$ n2-standard-8',
        AWS: '$1611 m6i.2xlarge',
      },
    },
    {
      name: 'Running a Fantom Validator Node',
      specs: [
        { name: 'RAM', value: '32GB' },
        { name: 'CPU', value: '4 Cores' },
        { name: 'Storage', value: '13 TB' },
        { name: 'Network', value: '10GBPS' },
      ],
      plataform: {
        AZURE: '$554.95 B8ps-v2',
        GCP: '$542.17 n2d-high-mem-8',
        AWS: '$536.2 m6i.2x.large',
      },
    },
    {
      name: 'Running a Fantom Read Only',
      specs: [
        { name: 'RAM', value: '32GB' },
        { name: 'CPU', value: '4 Cores' },
        { name: 'Storage', value: '13 TB' },
        { name: 'Network', value: '10GBPS' },
      ],
      plataform: {
        AZURE: '$554.95 B8ps-v2',
        GCP: '$542.17 n2d-high-mem-8',
        AWS: '$536.2 m6i.2x.large',
      },
    },
    {
      name: 'Running a Ethereum full node',
      specs: [
        { name: 'RAM', value: '32GB' },
        { name: 'CPU', value: '4 Cores' },
        { name: 'Storage', value: '13 TB' },
        { name: 'Network', value: '10GBPS' },
      ],
      plataform: {
        AZURE: '$314.05 B4as-v2',
        GCP: '$321.79 n1-standard-4',
        AWS: '$302 t4g.xlarge',
      },
    },
    {
      name: 'Running a Ethereum Archive Node',
      specs: [
        { name: 'RAM', value: '32GB' },
        { name: 'CPU', value: '4 Cores' },
        { name: 'Storage', value: '13 TB' },
        { name: 'Network', value: '10GBPS' },
      ],
      plataform: {
        AZURE: '$467 B4as-v2 ',
        GCP: '$621.79 n1-standard-4',
        AWS: '$1611 m6i.2xlarge',
      },
    },
    {
      name: 'Running a Fantom API Node',
      specs: [
        { name: 'RAM', value: '32GB' },
        { name: 'CPU', value: '4 Cores' },
        { name: 'Storage', value: '13 TB' },
        { name: 'Network', value: '10GBPS' },
      ],
      plataform: {
        AZURE: '$1476.55 B8ps-v2',
        GCP: '$2500$ n2-standard-8',
        AWS: '$1611 m6i.2xlarge',
      },
    },
    {
      name: 'Running a Fantom API Node',
      specs: [
        { name: 'RAM', value: '32GB' },
        { name: 'CPU', value: '4 Cores' },
        { name: 'Storage', value: '13 TB' },
        { name: 'Network', value: '10GBPS' },
      ],
      plataform: {
        AZURE: '$1476.55 B8ps-v2',
        GCP: '$2500$ n2-standard-8',
        AWS: '$1611 m6i.2xlarge',
      },
    },
    {
      name: 'Running a Fantom API Node',
      specs: [
        { name: 'RAM', value: '32GB' },
        { name: 'CPU', value: '4 Cores' },
        { name: 'Storage', value: '13 TB' },
        { name: 'Network', value: '10GBPS' },
      ],
      plataform: {
        AZURE: '$1476.55 B8ps-v2',
        GCP: '$2500$ n2-standard-8',
        AWS: '$1611 m6i.2xlarge',
      },
    },
  ],
}

const CostLandingPage = () => {
  const [newMessageHtml, setNewMessageHtml] = useState('')
  const [nextStep, setNextStep] = useState<boolean>(false)
  const [selectionOptionSelected, setSelectionOptionSelected] = useState({
    name: 'RPC',
  })
  const [subSelectionOptionSelected, setSubSelectionOptionSelected] = useState({
    name: 'Running a Ethereum full archive node',
    desc: 'Running an Ethereum full archive node...',
  })
  const [providerSelectionOptionSelected, setProviderSelectionOptionSelected] =
    useState([
      {
        name: 'Openmesh',
      },
      {
        name: 'AWS',
      },
    ])

  const selectionOptions = [
    {
      name: 'RPC',
    },
  ]

  const selectionOptionsTosubSelectionOptions = {
    RPC: dataOptions.RPC,
  }

  const providersSelectionOptions = [
    {
      name: 'Openmesh',
    },
    {
      name: 'AWS',
    },
    {
      name: 'GCP',
    },
  ]

  function findItemProvider(itemName: string) {
    const exists = providerSelectionOptionSelected.findIndex(
      (provider) => provider.name === itemName,
    )

    if (exists === -1) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div className="flex h-full px-[50px]  pb-[40px] text-[16px]  font-normal  text-[#000] lg:text-[20px]">
        <div className="flex h-full w-full rounded-xl bg-[#F9F9F9] px-[45px] pt-[75px] shadow-md">
          <div>
            <div className="text-[18px] lg:text-[26px]">Price comparison</div>
            <div className="mt-[54px] flex gap-x-[50px]">
              {selectionOptions.map((option, index) => (
                <div
                  onClick={() => {
                    setSelectionOptionSelected(option)
                    setNextStep(false)
                  }}
                  key={index}
                  className={`h-fit cursor-pointer text-[14px] font-bold text-[#AEAEAE] hover:text-[#000] lg:text-[20px] ${
                    selectionOptionSelected?.name === option.name &&
                    '!text-[#000000]'
                  }`}
                >
                  {option.name}
                </div>
              ))}
            </div>
            {nextStep ? (
              <div className="mt-[30px]">
                <DisplayCost
                  data={
                    selectionOptionsTosubSelectionOptions[
                      selectionOptionSelected.name
                    ]
                  }
                  providers={providerSelectionOptionSelected}
                  subSelectionOption={subSelectionOptionSelected}
                  onBack={() => {
                    setNextStep(false)
                  }}
                />
              </div>
            ) : (
              <div>
                <div className="mt-[66px] flex gap-x-[50px]">
                  <div className="grid max-h-[500px] gap-y-[43px] overflow-y-auto pr-[30px] scrollbar-thin scrollbar-track-[#11132470] scrollbar-thumb-[#0e101f91] scrollbar-track-rounded-full scrollbar-thumb-rounded-md">
                    {selectionOptionsTosubSelectionOptions[
                      selectionOptionSelected.name
                    ].map((subOption, index) => (
                      <div
                        onClick={() => {
                          setSubSelectionOptionSelected(subOption)
                        }}
                        key={index}
                        className={`h-fit max-w-[590px] cursor-pointer rounded-[10px] border-[1px] border-[#A4A4A4] py-[18px] px-[20px] text-[14px] font-bold text-[#000]  hover:bg-[#e9e9e949] lg:text-[20px]`}
                      >
                        <div className="flex justify-between gap-x-[110px]">
                          <div>
                            {' '}
                            <div>{subOption.name}</div>
                            <div className="text-[12px] font-normal lg:text-[16px]">
                              {subOption.desc}
                            </div>
                          </div>
                          <div
                            className={`my-auto h-[22px] w-[22px] rounded-full border-[1px] border-[#939191] ${
                              subSelectionOptionSelected?.name ===
                                subOption.name &&
                              '!border-[#0354EC] bg-[#0354EC]'
                            }`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex min-h-[100%] w-[1px] bg-[#000]"></div>
                  <div className="text-[18px] font-bold text-[#AEAEAE] lg:text-[26px]">
                    <div>Pick providers to compare</div>
                    <div className="mt-[60px] grid gap-y-[43px]">
                      {providersSelectionOptions.map(
                        (providerOption, index) => (
                          <div
                            onClick={() => {
                              const providers = [
                                ...providerSelectionOptionSelected,
                              ]
                              const exists = providers.findIndex(
                                (provider) =>
                                  provider.name === providerOption.name,
                              )
                              if (exists === -1) {
                                setProviderSelectionOptionSelected([
                                  providerOption,
                                  ...providerSelectionOptionSelected,
                                ])
                              } else {
                                providers.splice(exists, 1)
                                setProviderSelectionOptionSelected(providers)
                              }
                            }}
                            key={index}
                            className={`text-[14px] font-bold text-[#AEAEAE] lg:text-[20px]`}
                          >
                            <div className="flex items-center gap-x-[12px]">
                              <div
                                className={`my-auto h-[47px]   w-[47px] cursor-pointer rounded-[5px]  border-[1px] border-[#939191] hover:border-[#0354EC] hover:bg-[#023ca7] hover:bg-[#0354EC] ${
                                  findItemProvider(providerOption.name) &&
                                  '!border-[#0354EC] bg-[#0354EC]'
                                }`}
                              ></div>
                              <div>
                                {' '}
                                <div>{providerOption.name}</div>
                              </div>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-[80px] ml-[30px]">
                  <div
                    onClick={() => {
                      setNextStep(true)
                    }}
                    className="w-fit cursor-pointer rounded-[5px] bg-[#0354EC] px-[60px] py-[12px] text-[14px] font-bold text-[#FFFFFF] hover:bg-[#023ca7] lg:text-[20px]"
                  >
                    Compare
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CostLandingPage
