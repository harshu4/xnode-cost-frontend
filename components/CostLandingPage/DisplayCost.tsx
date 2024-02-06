'use client'
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import Footer from '../Footer'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css' // import styles
import './react-quill.css'

type provider = {
  name: string
  list?: string[]
}

type subSelectionOption = {
  name: string
  desc: string
}

interface ModalI {
  providers: provider[]
  subSelectionOption: subSelectionOption
}

const DisplayCost = ({ providers, subSelectionOption }: ModalI) => {
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
      name: 'Equinix',
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
      <div className="">
        <div
          className={`h-fit max-w-[590px] cursor-pointer rounded-[10px] border-[1px] border-[#A4A4A4] py-[18px] px-[20px] text-[14px] font-bold text-[#000]  hover:bg-[#e9e9e949] lg:text-[20px]`}
        >
          <div className="flex justify-between gap-x-[110px]">
            <div>
              {' '}
              <div>{subSelectionOption.name}</div>
              <div className="text-[12px] font-normal lg:text-[16px]">
                {subSelectionOption.desc}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[56px] flex gap-x-[100px]">
          {providers.map((provider, index) => (
            <div
              key={index}
              className={`flex justify-between text-[14px] font-bold text-[#AEAEAE] lg:text-[20px]`}
            >
              <div className="flex items-center gap-x-[12px]">
                <div>
                  {' '}
                  <div>{provider.name}</div>
                </div>
              </div>

              {index !== providers.length - 1 && (
                <div className=" ml-[90px] flex min-h-[100%] w-[1px] bg-[#000]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayCost
