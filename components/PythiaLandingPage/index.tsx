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
        <div className="mt-auto px-[40px] pb-[50px]">
          <div className="mt-auto px-[40px]">
            {' '}
            <QuillNoSSRWrapper
              value={newMessageHtml}
              onChange={handleChangeNewMessage}
              // disabled={isLoading}
              className="my-quill mt-2 w-full rounded-md bg-[#787ca536] text-base font-normal text-[#fff] outline-0"
              placeholder="Type here"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PythiaLandingPage
