/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
'use client'
// import { useState } from 'react'
import { useEffect, useState, ChangeEvent, FC, useContext, useRef } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Eye, EyeSlash } from 'phosphor-react'
import * as Yup from 'yup'
import axios from 'axios'
import Checkbox from '@material-ui/core/Checkbox'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-quill/dist/quill.snow.css' // import styles
import 'react-datepicker/dist/react-datepicker.css'
import { getData } from '@/utils/data'
import { DataProvider } from '@/types/dataProvider'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { format } from 'sql-formatter'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { formatDistanceToNow, differenceInDays } from 'date-fns'

const Dataset = (id: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [data, setData] = useState<DataProvider>()

  const { push } = useRouter()

  async function getDataInfo(id: any) {
    try {
      const res = await getData(id)
      setData(res)
      setIsLoading(false)
      console.log('DATA RECEIVED')
      console.log(res)
    } catch (err) {
      toast.error(`An error occurred`)
      //   push('/community')
    }
  }

  useEffect(() => {
    setIsLoading(true)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    if (id) {
      getDataInfo(id.id)
    } else {
      push('/')
    }
  }, [id])

  let formattedSQL
  let formattedCode
  if (data?.sql) {
    formattedSQL = format(data?.sql || '', {
      tabWidth: 4,
      linesBetweenQueries: 4,
    })

    formattedCode = Prism.highlight(
      data?.sql,
      Prism.languages.javascript,
      'javascript',
    )
  }

  function transformText(text) {
    return text.replace(/\s+/g, ' ').trim()
  }

  function calculateUpdateTime(updatedAt: Date) {
    const timeAgo = formatDistanceToNow(new Date(updatedAt), {
      addSuffix: true,
    })
    return timeAgo
  }

  function isNew(createdAt: Date): boolean {
    const today = new Date()
    const difference = differenceInDays(today, new Date(createdAt))
    return difference <= 7
  }

  if (isLoading) {
    return (
      <section className="py-16 px-32 text-black md:py-20 lg:pt-40">
        <div className="container h-40 animate-pulse px-0 pb-12">
          <div className="mr-10 w-full animate-pulse bg-[#dfdfdf]"></div>
          <div className="w-full animate-pulse bg-[#dfdfdf]"></div>
        </div>
      </section>
    )
  }

  const dataJson = {
    'Established data': data?.createdAt,
    'Size of the data': '124 TB',
    Coverage: 'Spots, futures',
    Size: '124 TB',
    'File formats': 'JSON, CVS',
    'Scheme type': 'JSON, CVS',
  }

  const dataJsonDetails = [
    [
      'AAVE.USDT-PERP',
      'L2 LOB, Ticker, Funding rate',
      'HFDSAFHASFHASFHA#',
      '23MB',
    ],
    [
      'AAVE.USDT-PERP',
      'L2 LOB, Ticker, Funding rate',
      'HFDSAFHASFHASFHA#',
      '23MB',
    ],
    [
      'AAVE.USDT-PERP',
      'L2 LOB, Ticker, Funding rate',
      'HFDSAFHASFHASFHA#',
      '23MB',
    ],
    [
      'AAVE.USDT-PERP',
      'L2 LOB, Ticker, Funding rate',
      'HFDSAFHASFHASFHA#',
      '23MB',
    ],
    [
      'AAVE.USDT-PERP',
      'L2 LOB, Ticker, Funding rate',
      'HFDSAFHASFHASFHA#',
      '23MB',
    ],
    [
      'AAVE.USDT-PERP',
      'L2 LOB, Ticker, Funding rate',
      'HFDSAFHASFHASFHA#',
      '23MB',
    ],
  ]

  const customStyle = {
    ...solarizedlight,
    'pre[class*="language-"]': {
      ...solarizedlight['pre[class*="language-"]'],
      backgroundColor: '#f8f8f8', // Cor de fundo preta
      width: '100%', // Ajustando a largura para 100%
      overflowX: 'auto', // Adicionando barra de rolagem se o conteúdo exceder a largura
      border: '1px solid #d8d6d6',
    },
  }

  const copyToClipboard = () => {
    if (data) {
      navigator.clipboard.writeText(data.sql)
    }
  }

  return (
    <>
      <section className="flex max-w-[1400px] pl-[170px] pt-[75px] pr-[72px] pb-[100px] text-[#000000] md:pl-[204px] md:pt-[90px]  md:pr-[87px] lg:pl-[333px] lg:pt-[120px]  lg:pr-[115px] 2xl:pl-[340px] 2xl:pt-[150px] 2xl:pr-[144px]">
        <div>
          <div className="flex gap-x-[15px]">
            <div className="">
              <img
                src={`/openmesh-ico-logo.png`}
                alt="image"
                className={`mx-auto flex h-[22px] w-[22px] rounded-[5px] p-[3px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] lg:h-[37px] lg:w-[37px] lg:p-[7px] xl:h-[41px] xl:w-[41px] 2xl:h-[46px] 2xl:w-[46px]`}
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="text-[8px] font-semibold text-[#505050] lg:mt-[6px] lg:text-[13px] lg:!leading-[19px] 2xl:mt-[7px] 2xl:text-[16px]">
                {data.company}
              </div>
              <div className="flex gap-x-[5px] pt-[4px] text-[#313131] lg:gap-x-[8px] lg:pt-[6px] 2xl:gap-x-[23px] 2xl:pt-[8px]">
                {isNew(data.createdAt) && (
                  <div className="h-fit rounded-[5px] border-[1px] border-[#FFC946] bg-[#FFE9B2] px-[4px] py-[2] text-[7px] font-semibold text-[#000] md:text-[9px] lg:px-[5px] lg:py-[4px] lg:text-[12px] 2xl:px-[7px] 2xl:py-[5px] 2xl:text-[14px] 2xl:!leading-[17px]">
                    NEW!
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-[15px] text-[16px] font-bold text-[#313131] md:mt-[21px] md:text-[22px]  lg:mt-[24px] lg:text-[25px] lg:!leading-[39px] 2xl:mt-[30px] 2xl:text-[32px]">
            {data.name}
          </div>
          <div className="mt-[7px] text-[8px] font-medium  text-[#959595]  md:mt-[11px]  md:text-[10px] lg:mt-[13px] lg:text-[12px] lg:!leading-[19px] 2xl:mt-[15px]  2xl:text-[16px]">
            {data.description}
          </div>
          <div className="mt-[27px] text-[8px] font-bold  text-[#000]  md:mt-[37px]  md:text-[10px] lg:mt-[43px] lg:text-[12px] lg:!leading-[19px] 2xl:mt-[54px]  2xl:text-[16px]">
            Tags
          </div>
          <div className="mt-[8px] flex gap-x-[5px] gap-y-[3px] md:mt-[10px] lg:mt-[12px] lg:gap-x-[10px] lg:gap-y-[5px] 2xl:mt-[15px]">
            {data.tags &&
              data.tags.map((tag, index) => (
                <div
                  key={index}
                  className=" w-fit max-w-[500px]  rounded-[20px] border-[1px] border-[#D9D9D9] bg-[#F6F6F6] px-[7px] py-[4px] text-[5px] font-medium text-[#575757] md:text-[8px] lg:px-[12px] lg:py-[6px] lg:!leading-[12px] 2xl:py-[7px] 2xl:px-[15px]  2xl:text-[10px]"
                >
                  {tag}
                </div>
              ))}
          </div>
          <div className="mt-[15px] border-b-[1px] border-[#D9D9D9] pb-[15px] md:mt-[21px] md:pb-[21px] lg:mt-[24px] lg:pb-[24px]  2xl:mt-[30px] 2xl:pb-[30px]">
            <div className="text-[8px] font-bold  text-[#000]    md:text-[10px]  lg:text-[12px] lg:!leading-[19px]   2xl:text-[16px]">
              Use cases
            </div>
            <div className="mt-[8px] flex gap-x-[5px] gap-y-[3px] md:mt-[10px] lg:mt-[12px] lg:gap-x-[10px] lg:gap-y-[5px] 2xl:mt-[15px]">
              {data.useCases &&
                data.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className=" w-fit max-w-[500px]  rounded-[20px] border-[1px] border-[#D9D9D9] bg-[#F6F6F6] px-[7px] py-[4px] text-[5px] font-medium text-[#575757] md:text-[8px] lg:px-[12px] lg:py-[6px] lg:!leading-[12px] 2xl:py-[7px] 2xl:px-[15px]  2xl:text-[10px]"
                  >
                    {useCase}
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-[15px] text-[8px] font-bold  text-[#000]  md:mt-[21px]  md:text-[10px] lg:mt-[24px] lg:text-[12px] lg:!leading-[19px] 2xl:mt-[30px]  2xl:text-[16px]">
            Data Specification
          </div>
          <div className="mt-[10px] grid grid-cols-[auto,1fr] gap-0 text-[8px] text-[#959595] md:mt-[14px] md:text-[10px] lg:mt-[16px] lg:text-[11px] lg:!leading-[19px] 2xl:mt-[20px] 2xl:text-[13px]">
            {Object.entries(dataJson).map(([key, value], index, array) => (
              <>
                <div
                  className={
                    index === array.length - 1
                      ? 'border border-r-0 border-[#D9D9D9] p-[20px] pr-[120px] pl-[8px] text-left'
                      : 'border-b-0 border-r-0 border-t border-l border-[#D9D9D9] p-[20px] pr-[120px] pl-[8px] text-left'
                  }
                >
                  {key}
                </div>
                <div
                  className={
                    index === array.length - 1
                      ? 'border border-[#D9D9D9] p-[20px] pl-[30px] text-left'
                      : 'border-b-0 border-r border-t border-l border-[#D9D9D9] p-[20px] pl-[30px] text-left'
                  }
                >
                  {String(value)}
                </div>
              </>
            ))}
          </div>
          <div className="mt-[53px] text-[8px] font-bold  text-[#000]  md:mt-[53px]  md:text-[10px] lg:mt-[60px] lg:text-[12px] lg:!leading-[19px] 2xl:mt-[76px]  2xl:text-[16px]">
            Details
          </div>
          <div className="mt-[10px] grid grid-cols-[auto,1fr,1fr] gap-0 text-[8px] text-[#959595] md:mt-[14px] md:text-[10px] lg:mt-[16px] lg:text-[11px] lg:!leading-[19px] 2xl:mt-[20px] 2xl:text-[13px]">
            {dataJsonDetails.map(
              ([value1, value2, value3, value4], index, array) => (
                <>
                  <div
                    className={
                      index === array.length - 1
                        ? 'border border-r-0 border-[#D9D9D9] p-[20px] pr-[60px] pl-[8px] text-left'
                        : 'border-b-0 border-r-0 border-t border-l border-[#D9D9D9] p-[20px] pr-[60px] pl-[8px] text-left'
                    }
                  >
                    {value1}
                  </div>
                  <div
                    className={
                      index === array.length - 1
                        ? 'border border-r-0 border-[#D9D9D9] p-[20px] pl-[30px] pr-[60px] text-left'
                        : 'border-b-0  border-t border-l border-r-0 border-[#D9D9D9] p-[20px] pl-[30px] pr-[60px] text-left'
                    }
                  >
                    {value2}
                  </div>
                  <div
                    className={
                      index === array.length - 1
                        ? 'flex justify-between border border-[#D9D9D9] p-[20px] pl-[30px] text-left'
                        : 'flex justify-between border-b-0 border-r border-t border-l border-[#D9D9D9] p-[20px] pl-[30px] text-left'
                    }
                  >
                    <div>{value3}</div>
                    <div>{value4}</div>
                  </div>
                </>
              ),
            )}
          </div>
          <div className="">
            <div className="mt-[53px] flex justify-between text-[8px] font-bold  text-[#000]  md:mt-[53px]  md:text-[10px] lg:mt-[60px] lg:text-[12px] lg:!leading-[19px] 2xl:mt-[76px]  2xl:text-[16px]">
              <div className="">Query</div>
              <img
                src={`/images/Dataset/copy.svg`}
                alt="image"
                onClick={copyToClipboard}
                className="cursor-pointer"
              />
            </div>
            {data?.sql && (
              <div className="overflow-auto 2xl:mt-[17px]">
                <SyntaxHighlighter language="sql" style={customStyle}>
                  {data?.sql}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        </div>
        <div></div>
      </section>
    </>
  )
}

export default Dataset
