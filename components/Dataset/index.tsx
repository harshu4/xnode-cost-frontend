/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
'use client'
// import { useState } from 'react'
import { useEffect, useState, ChangeEvent, FC, useContext } from 'react'
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

const Dataset = (id: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
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
  return (
    <>
      <section className="mt-12 mb-[0px] px-[20px] pt-[15px]  text-[11px]  font-medium !leading-[17px] text-[#000000] lg:mb-24 lg:px-[100px] lg:pt-[100px]  lg:text-[14px]">
        <div className="flex gap-x-[10px]">
          <img
            src={`/openmesh-ico-logo.png`}
            alt="image"
            className={`2xlmd:h-[100px] 2xlmd:w-[100px] h-[70px] w-[70px] rounded-[8px] p-2 md:h-[70px] md:w-[70px]`}
          />
          <div className="flex items-center text-[15px] font-bold !leading-[150%] text-[#000000] lg:text-[24px]">
            {data?.name}
          </div>
        </div>
        <div className="mt-[20px]">{data?.description}</div>
        {data?.sql && (
          <div className=" gap-x-[50px]">
            <div className="mt-[20px] max-h-[1050px] max-w-[500px] overflow-auto">
              <SyntaxHighlighter language="sql">
                {formattedSQL}
              </SyntaxHighlighter>
            </div>
            <div className="mt-[20px] max-h-[1050px] max-w-[500px] overflow-auto">
              <SyntaxHighlighter language="sql">{data?.sql}</SyntaxHighlighter>
            </div>
            <div className="mt-[20px] max-h-[1050px] max-w-[500px]">
              <SyntaxHighlighter language="sql">
                {transformText(data?.sql)}
              </SyntaxHighlighter>
            </div>
            <div className="max-w-[500px] space-x-5 rounded-[5px] bg-[#F4F2F0] p-5 font-normal">
              <div dangerouslySetInnerHTML={{ __html: formattedCode }} />
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Dataset
