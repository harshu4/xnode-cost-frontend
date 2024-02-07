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
  onBack(): void
  subSelectionOption: subSelectionOption
  data: any
}

const DisplayCost = ({
  providers,
  subSelectionOption,
  data,
  onBack,
}: ModalI) => {
  const [newMessageHtml, setNewMessageHtml] = useState('')
  const [nextStep, setNextStep] = useState<boolean>(false)

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

  function findItemProvider(data: any) {
    for (let i = 0; i < data.length; i++) {
      console.log('the data')
      console.log(data)
      if (data[i].name === subSelectionOption.name) {
        return data[i]
      }
    }
  }

  return (
    <>
      <div className="">
        {/* <div className="mb-[25px]">
          Specs:{' '}
          <div className="ml-[5px] flex gap-x-[20px] text-[16px] text-[#6e6e6e]">
            {findItemProvider(data)?.specs?.map((spec, index) => (
              <div key={index}>
                {spec.name}: {spec.value}
              </div>
            ))}
          </div>
        </div> */}
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
                  <div className="mb-[10px]">{provider.name}</div>
                  <div>
                    {findItemProvider(data)?.plataform[provider.name] ||
                      '$0.00'}{' '}
                  </div>
                </div>

                {}
              </div>

              {index !== providers.length - 1 && (
                <div className=" ml-[90px] flex min-h-[100%] w-[1px] bg-[#000]"></div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-[170px] ml-[30px]">
          <div
            onClick={() => {
              onBack()
            }}
            className="w-fit cursor-pointer rounded-[5px] bg-[#0354EC] px-[40px] py-[12px] text-[14px] font-bold text-[#FFFFFF] hover:bg-[#023ca7] lg:text-[20px]"
          >
            Compare more
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayCost
