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

const PythiaLandingPage = () => {
  const [newMessageHtml, setNewMessageHtml] = useState('')

  function handleChangeNewMessage(value) {
    if (newMessageHtml.length < 5000) {
      setNewMessageHtml(value)
    }
  }

  return (
    <>
      <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between px-[50px]  pb-16 text-[16px] text-[#C5C4C4] md:pb-20  lg:pb-8  2xl:text-[18px]">
        <div className="mt-auto flex h-full w-full rounded-xl bg-[#F9F9F9] px-[40px] pb-[50px] shadow-md">
          <div className="mt-auto w-full  px-[40px]">
            {' '}
            <QuillNoSSRWrapper
              value={newMessageHtml}
              onChange={handleChangeNewMessage}
              // disabled={isLoading}
              className="my-quill mx-auto mt-2 w-full max-w-[900px] rounded-md bg-[#fff] bg-[#787ca536] text-base font-normal text-[#fff] outline-0 2xl:max-w-[1000px]"
              placeholder="Type here"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PythiaLandingPage
