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
            <div className="mt-[66px] grid gap-y-[43px]">
              {subSelectionOptions.map((subOption, index) => (
                <div
                  onClick={() => {
                    setSubSelectionOptionSelected(subOption)
                  }}
                  key={index}
                  className={`h-fit max-w-[590px] cursor-pointer rounded-[10px] border-[1px] border-[#A4A4A4] py-[18px] px-[20px] text-[14px] font-bold text-[#000]  hover:bg-[#e9e9e949] lg:text-[20px]`}
                >
                  <div className="flex justify-between gap-x-[20px]">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default CostLandingPage
