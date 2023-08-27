'use client'
// import { useState } from 'react'
import { useState } from 'react'

const Hero7 = () => {
  const [isFaq1Open, setIsFaq1Open] = useState<boolean>(false)
  const [isFaq2Open, setIsFaq2Open] = useState<boolean>(false)
  const [isFaq3Open, setIsFaq3Open] = useState<boolean>(false)
  const [isFaq4Open, setIsFaq4Open] = useState<boolean>(false)

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

  return (
    <>
      <section
        id="home"
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
                <div>What are the products offered?</div>
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
                Introducing the OpenR&D initiative, an open-source platform
                designed to empower decentralized teams to collaborate
                seamlessly. Simplify task management, progress tracking, and
                automated payouts within web3 projects, addressing the
                challenges faced by remote teams in the rapidly growing
                decentralized ecosystem.
              </div>
            </div>
            <div className="border-b-[1px] border-[#D4D4D4] py-[20px]">
              <div className="flex justify-between">
                <div>I can’t find the service that I’m looking for</div>
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
                The service that you are looking for most likely is unavailable
                or under development. Contact our{' '}
                <a
                  href="https://l3atom.vercel.app"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="cursor-pointer border-b-[1px] border-[#0354EC] text-[#0354EC]"
                >
                  SuperNode Expert
                </a>{' '}
                to report a bug or request a feature.
              </div>
            </div>
            <div className="border-b-[1px] border-[#D4D4D4] py-[20px]">
              <div className="flex justify-between">
                <div>What are the products offered?</div>
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
                Introducing the OpenR&D initiative, an open-source platform
                designed to empower decentralized teams to collaborate
                seamlessly. Simplify task management, progress tracking, and
                automated payouts within web3 projects, addressing the
                challenges faced by remote teams in the rapidly growing
                decentralized ecosystem.
              </div>
            </div>
            <div className="border-b-[1px] border-[#D4D4D4] py-[20px]">
              <div className="flex justify-between">
                <div>What are the products offered?</div>
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
                Introducing the OpenR&D initiative, an open-source platform
                designed to empower decentralized teams to collaborate
                seamlessly. Simplify task management, progress tracking, and
                automated payouts within web3 projects, addressing the
                challenges faced by remote teams in the rapidly growing
                decentralized ecosystem.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero7
