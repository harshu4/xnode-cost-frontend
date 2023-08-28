/* eslint-disable react/no-unescaped-entities */
'use client'
// import { useState } from 'react'
import { useState } from 'react'

const Hero7 = () => {
  const [isFaq1Open, setIsFaq1Open] = useState<boolean>(false)
  const [isFaq2Open, setIsFaq2Open] = useState<boolean>(false)
  const [isFaq3Open, setIsFaq3Open] = useState<boolean>(false)
  const [isFaq4Open, setIsFaq4Open] = useState<boolean>(false)
  const [isFaq5Open, setIsFaq5Open] = useState<boolean>(false)
  const [isFaq6Open, setIsFaq6Open] = useState<boolean>(false)

  function handleFaq1() {
    setIsFaq1Open(!isFaq1Open)
  }
  function handleFaq2() {
    setIsFaq2Open(!isFaq2Open)
  }
  function handleFaq3() {
    setIsFaq3Open(!isFaq3Open)
  }
  function handleFaq4() {
    setIsFaq4Open(!isFaq4Open)
  }
  function handleFaq5() {
    setIsFaq5Open(!isFaq5Open)
  }
  function handleFaq6() {
    setIsFaq6Open(!isFaq6Open)
  }

  return (
    <>
      <section
        id="faqs"
        className="relative z-10 overflow-hidden border-b-[1px] border-[#D4D4D4] bg-white px-[20px] pb-[129px] text-[#000000] lg:pt-[98px]"
      >
        <div className="mx-auto w-[1359px]">
          <div className="text-[32px] font-bold">
            FAQs.{''}{' '}
            <span className="font-semibold text-[#959595]">
              Frequenty Asked Questions
            </span>
          </div>
          <div className="mt-[47px] text-[16px] font-bold">
            <div className="border-b-[1px] border-[#D4D4D4] pb-[20px]">
              <div className="flex justify-between">
                <div>What is Openmesh's main goal?</div>
                <img
                  onClick={handleFaq1}
                  src="/images/hero7/arrow.svg"
                  alt="image"
                  className={`  cursor-pointer ${
                    isFaq1Open ? 'rotate-180 transform' : ''
                  }`}
                />
              </div>
              <div
                className={` mt-[15px] text-[14px] font-medium text-[#505050] ${
                  isFaq1Open ? '' : 'hidden'
                }`}
              >
                Openmesh is focused on establishing a decentralized data
                infrastructure that allows for the storage of crucial global
                data without the need for intermediaries. This initiative starts
                with Web3 data and aims to provide a secure and efficient data
                storage solution.
              </div>
            </div>
            <div className="border-b-[1px] border-[#D4D4D4] py-[20px]">
              <div className="flex justify-between">
                <div>
                  What tools and services does Openmesh offer to developers?
                </div>
                <img
                  onClick={handleFaq2}
                  src="/images/hero7/arrow.svg"
                  alt="image"
                  className={`  cursor-pointer ${
                    isFaq2Open ? 'rotate-180 transform' : ''
                  }`}
                />
              </div>
              <div
                className={` mt-[15px] text-[14px] font-medium text-[#505050] ${
                  isFaq2Open ? '' : 'hidden'
                }`}
              >
                Openmesh provides developers with a comprehensive set of tools
                and a stack designed to facilitate the planning, design,
                deployment, and management of data infrastructure and
                applications. The goal is to reduce the time required for these
                tasks from weeks to minutes, with costs limited to computing and
                storage.
              </div>
            </div>
            <div className="border-b-[1px] border-[#D4D4D4] py-[20px]">
              <div className="flex justify-between">
                <div>Are there any fees associated with using Openmesh?</div>
                <img
                  onClick={handleFaq3}
                  src="/images/hero7/arrow.svg"
                  alt="image"
                  className={`  cursor-pointer ${
                    isFaq3Open ? 'rotate-180 transform' : ''
                  }`}
                />
              </div>
              <div
                className={` mt-[15px] text-[14px] font-medium text-[#505050] ${
                  isFaq3Open ? '' : 'hidden'
                }`}
              >
                Openmesh operates with a no-fee model. There are no license fees
                or setup fees for utilizing their tools and infrastructure,
                making it more accessible to developers and companies.
              </div>
            </div>
            <div className="border-b-[1px] border-[#D4D4D4] py-[20px]">
              <div className="flex justify-between">
                <div>
                  What is the significance of the Openmesh Expert badge?
                </div>
                <img
                  onClick={handleFaq4}
                  src="/images/hero7/arrow.svg"
                  alt="image"
                  className={`  cursor-pointer ${
                    isFaq4Open ? 'rotate-180 transform' : ''
                  }`}
                />
              </div>
              <div
                className={` mt-[15px] text-[14px] font-medium text-[#505050] ${
                  isFaq4Open ? '' : 'hidden'
                }`}
              >
                The Openmesh Expert badge serves as recognition of your
                expertise not only in Openmesh Core services but also in data
                and blockchain infrastructure services. This badge helps
                companies identify individuals with specialized knowledge in
                these domains.
              </div>
            </div>
            <div className="border-b-[1px] border-[#D4D4D4] py-[20px]">
              <div className="flex justify-between">
                <div>
                  How can leveraging the Openmesh network benefit my business?
                </div>
                <img
                  onClick={handleFaq5}
                  src="/images/hero7/arrow.svg"
                  alt="image"
                  className={`  cursor-pointer ${
                    isFaq5Open ? 'rotate-180 transform' : ''
                  }`}
                />
              </div>
              <div
                className={` mt-[15px] text-[14px] font-medium text-[#505050] ${
                  isFaq5Open ? '' : 'hidden'
                }`}
              >
                With the increasing demand for data in the global economy, being
                a part of the Openmesh network can help you attract more clients
                and form valuable partnerships. The network provides a platform
                to connect with potential collaborators and contributors,
                leading to growth opportunities.
              </div>
            </div>
            <div className="border-b-[1px] border-[#D4D4D4] py-[20px]">
              <div className="flex justify-between">
                <div>
                  How can I stay updated on Openmesh's products and offerings?
                </div>
                <img
                  onClick={handleFaq6}
                  src="/images/hero7/arrow.svg"
                  alt="image"
                  className={`  cursor-pointer ${
                    isFaq6Open ? 'rotate-180 transform' : ''
                  }`}
                />
              </div>
              <div
                className={` mt-[15px] text-[14px] font-medium text-[#505050] ${
                  isFaq6Open ? '' : 'hidden'
                }`}
              >
                By joining the expanding Openmesh network, you'll have access to
                product updates and offerings through collaborations and
                contributions. You'll be among the first to receive information
                about new features and developments.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero7
