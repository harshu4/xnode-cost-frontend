'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import Footer from '../Footer'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css' // import styles
import './react-quill.css'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const CostLandingPage = () => {
  const [newMessageHtml, setNewMessageHtml] = useState('')
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

  function handleChangeNewMessage(value) {
    if (newMessageHtml.length < 5000) {
      setNewMessageHtml(value)
    }
  }

  const selectionOptions = [
    {
      name: 'RPC',
    },
    {
      name: 'Data Clouds',
    },
    {
      name: 'Data Streaming',
    },
    {
      name: 'Infrastructure',
    },
    {
      name: 'Analytics',
    },
  ]

  const subSelectionOptions = [
    {
      name: 'Running a Ethereum full archive node',
      desc: 'Running an Ethereum full archive node...',
    },
    {
      name: 'Running a Solana full archive node',
      desc: 'Running an Ethereum full archive node...',
    },
    {
      name: 'Running a Fantom full archive node',
      desc: 'Running an Ethereum full archive node...',
    },
    {
      name: 'Running a Polygon full archive node',
      desc: 'Running an Ethereum full archive node...',
    },
  ]

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
    {
      name: 'Openmesh',
    },
  ]

  return (
    <>
      <div className="flex h-full px-[50px]  text-[16px] font-normal  text-[#000]  lg:text-[20px]">
        <div className="flex h-full w-full rounded-xl bg-[#F9F9F9] px-[45px] py-[75px] shadow-md">
          <div>
            <div className="text-[18px] lg:text-[26px]">
              Selection function & use case
            </div>
            <div className="mt-[54px] flex gap-x-[50px]">
              {selectionOptions.map((option, index) => (
                <div
                  onClick={() => {
                    setSelectionOptionSelected(option)
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
            <div className="mt-[66px] flex gap-x-[100px]">
              <div className="grid gap-y-[43px] ">
                {subSelectionOptions.map((subOption, index) => (
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
                          subSelectionOptionSelected?.name === subOption.name &&
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
                <div className="grid gap-y-[43px]">
                  {providersSelectionOptions.map((providerOption, index) => (
                    <div
                      onClick={() => {
                        const providers = [...providerSelectionOptionSelected]
                        const exists = providers.findIndex(
                          (provider) => provider.name === providerOption.name,
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
                          className={`my-auto cursor-pointer   h-[47px] w-[47px] rounded-[5px]  border-[1px] border-[#939191] hover:border-[#0354EC] hover:bg-[#0354EC] ${
                            subSelectionOptionSelected?.name ===
                              providerOption.name &&
                            '!border-[#0354EC] bg-[#0354EC]'
                          }`}
                        ></div>
                        <div>
                          {' '}
                          <div>{providerOption.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CostLandingPage
