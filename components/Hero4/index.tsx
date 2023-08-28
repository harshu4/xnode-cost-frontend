/* eslint-disable react/no-unescaped-entities */
const Hero4 = () => {
  return (
    <>
      <section
        id="certification"
        className="relative z-10 overflow-hidden bg-white px-[20px] text-[#000000] lg:pt-[107px]"
      >
        <div className="mx-auto">
          <div className=" mx-auto w-[1074px] text-center  text-[28px] font-medium -tracking-[2%] text-[#959595]">
            As a Openmesh Expert, you will become a
            <span className="!important font-bold text-[#000000]">
              {' '}
              highly-sought consultant
            </span>{' '}
            for implementing blockchain data solutions for Web2 and Web3
            companies
          </div>
          <div className="mx-auto mt-[75px] w-[956px]">
            <div className="flex">
              <img
                src="/images/hero4/license.png"
                alt="image"
                className={`mr-[60px] w-[254px]`}
              />
              <div className="flex items-center">
                <div>
                  <div className="text-[28px] font-bold !leading-[150%] -tracking-[2.2%]">
                    Open License from Openmesh
                  </div>
                  <div className="text-[20px] font-medium text-[#959595]">
                    The Openmesh Expert badge will help companies to identify
                    you as being an expert not only in Openmesh Core services,
                    but also data and blockchain infrastructure services
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[70px] flex">
              <div className="flex items-center">
                <div>
                  <div className="mr-[60px] text-[28px] font-bold !leading-[150%]  -tracking-[2.2%]">
                    Clients & Network
                  </div>
                  <div className="text-[20px] font-medium text-[#959595]">
                    As the global economy requires more and more data to ingest,
                    you can leverage the Openmesh network to get more clients
                    and partnerships
                  </div>
                </div>
              </div>
              <img
                src="/images/hero4/group.png"
                alt="image"
                className={`w-[254px]`}
              />
            </div>
            <div className="mt-[70px] flex">
              <img
                src="/images/hero4/computer.png"
                alt="image"
                className={`mr-[60px] w-[254px]`}
              />
              <div className="flex items-center">
                <div>
                  <div className="text-[28px] font-bold !leading-[150%] -tracking-[2.2%]">
                    Growth
                  </div>
                  <div className="text-[20px] font-medium text-[#959595]">
                    Be a part of the growing Openmesh network and be the first
                    to get product updates and offerings through our expanding
                    collaborators and contributors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[135px] flex w-full items-center justify-between bg-[#0354EC] pt-[83px] pb-[78px] pl-[137px] pr-[115px] text-white">
        <div className="">
          <div className="text-[32px] font-bold !leading-[120%]">
            You'll also get a slot in our{' '}
            <span className="border-b-[2px] border-[#fff]">
              Open Data and Infrastructure Conference
            </span>{' '}
            to share to{' '}
            <span className="font-serif font-medium italic">
              hundreds of businesses
            </span>{' '}
            how you would integrate Openmesh in your consulting and development
            services
          </div>
          <div className="mt-[20px] text-[20px] font-normal">
            Limited spaces available
          </div>
        </div>
        <div className="min-w-[231px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://calendly.com/`}
            className="min-w-[231px] cursor-pointer rounded-[5px] bg-[#fff] py-[16px] px-[16.5px] text-[16px] font-bold !leading-[19px] text-[#000] hover:bg-[#d8d7d7]"
          >
            Go to Conference Page
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero4
