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
  plataform?: any
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

  function findItemProvider(data: any) {
    for (let i = 0; i < data.length; i++) {
      console.log('the data')
      console.log(data)
      console.log('the providers')
      console.log(providers)
      console.log('the subSelectionOption')
      console.log(subSelectionOption)

      if (data[i].name === subSelectionOption.name) {
        return data[i]
      }
    }
  }

  function calculateTaxForBars() {
    const valueFinal = {}
    for (let i = 0; i < providers.length; i++) {
      valueFinal[providers[i]?.name] =
        subSelectionOption?.plataform?.[providers[i]?.name]?.at(1) || 0
    }

    console.log('the final values')
    console.log(valueFinal)

    return normalizeValues(valueFinal)
  }

  // normalize 0 to 100
  function normalizeValues(obj: { [key: string]: number }) {
    const values = Object.values(obj) as number[]

    const maxValue = Math.max(...values)
    const objNormalizado: { [key: string]: number } = {}
    for (const chave in obj) {
      objNormalizado[chave] = Number(((obj[chave] / maxValue) * 100).toFixed(2))
    }

    return objNormalizado
  }
  function calcularGradiente(percentual) {
    // Garante que a transição para o vermelho comece mais tarde e de forma mais abrupta para valores menores que 100
    const inicioVermelho = Math.max(0, (percentual - 50) * 2) // Começa a transição para vermelho mais perto do fim

    console.log('o percentuallll ' + percentual)
    // Cria um gradiente que começa em verde, transiciona lentamente para uma cor intermediária e rapidamente para vermelho no final
    if (percentual >= 0.9) {
      console.log('passou aqui')
      return `linear-gradient(to right, rgb(0, 255, 0) 0%, rgb(0, 255, 0) ${inicioVermelho}%, rgb(255, 0, 0) 100%)`
    } else if (percentual >= 0.7) {
      return `linear-gradient(to right, rgb(0, 255, 0) 0%, rgb(0, 255, 0) ${inicioVermelho}%, rgb(204, 59, 59) 100%)`
    } else if (percentual >= 0.5) {
      return `linear-gradient(to right, rgb(0, 255, 0) 0%, rgb(0, 255, 0) ${inicioVermelho}%, rgb(204, 107, 59) 100%)`
    } else {
      return `linear-gradient(to right, rgb(0, 255, 0) 0%, rgb(0, 255, 0) ${inicioVermelho}%, rgb(125, 191, 75) 100%)`
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
        <div className="mt-[56px] grid gap-x-[100px]">
          {providers.map((provider, index) => (
            <div
              key={index}
              className={`flex justify-between text-[14px] font-bold text-[#AEAEAE] lg:text-[20px]`}
            >
              <div className="mb-[10px] flex items-center gap-x-[12px]">
                {' '}
                <div className="w-[150px]">
                  <div className="">{provider.name}</div>
                  {/* <div>
                    {findItemProvider(data)?.plataform[provider.name]?.at(0) ||
                      '$0.00'}{' '}
                  </div> */}
                </div>
                <div className="flex w-[300px] gap-x-[20px] 2xl:w-[500px]">
                  <div
                    style={{
                      width: `${calculateTaxForBars()?.[provider.name]}%`,
                      height: '25px',
                      background: calcularGradiente(
                        calculateTaxForBars()?.[provider.name] / 100,
                      ),
                    }}
                  ></div>
                  <div className="text-[18px] font-normal text-[#000]">
                    {findItemProvider(data)?.plataform[provider.name]?.at(1) ||
                      '0.00'}
                    $
                  </div>
                </div>
                {}
              </div>
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
