/* eslint-disable react/no-unescaped-entities */
const Hero4 = () => {
  return (
    <>
      <section
        id="certification"
        className="relative z-10 overflow-hidden bg-white px-[20px] pt-[55px] text-[#000000] lg:pt-[107px]"
      >
        <div className="mx-auto">
          <div className=" mx-auto text-center text-[14px]  font-medium -tracking-[2%] text-[#959595] lg:text-[20px] xl:w-[1074px] xl:text-[28px]">
            As a Openmesh Expert, you will become a
            <span className="!important font-bold text-[#000000]">
              {' '}
              highly-sought consultant
            </span>{' '}
            for implementing blockchain data solutions for Web2 and Web3
            companies
          </div>
          <div className="mx-auto mt-[37px] md:w-[550px] lg:mt-[75px] lg:w-[750px] xl:w-[956px]">
            <div className="md:flex">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/hero4/license.png`}
                alt="image"
                className={`w-[100px] md:mr-[30px] lg:mr-[60px] lg:w-[170px] xl:w-[254px]`}
              />
              <div className="mt-[10px] flex items-center lg:mt-0">
                <div>
                  <div className="text-[14px] font-bold -tracking-[2.2%] lg:text-[20px] lg:!leading-[150%] xl:text-[28px]">
                    Open License from Openmesh
                  </div>
                  <div className="text-[10px] font-medium text-[#959595] lg:text-[14px] xl:text-[20px]">
                    The Openmesh Expert badge will help companies to identify
                    you as being an expert not only in Openmesh Core services,
                    but also data and blockchain infrastructure services
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[35px] md:flex lg:mt-[70px]">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/hero4/group.png`}
                alt="image"
                className={`w-[100px] md:hidden`}
              />
              <div className="mt-[10px] flex items-center lg:mt-0">
                <div>
                  <div className="-tracking-[2.2%]] text-[14px] font-bold lg:mr-[60px] lg:text-[20px] lg:!leading-[150%] xl:text-[28px]">
                    Clients & Network
                  </div>
                  <div className="text-[10px] font-medium text-[#959595] lg:text-[14px] xl:text-[20px]">
                    As the global economy requires more and more data to ingest,
                    you can leverage the Openmesh network to get more clients
                    and partnerships
                  </div>
                </div>
              </div>
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/hero4/group.png`}
                alt="image"
                className={`hidden md:block md:w-[100px] lg:ml-[30px] lg:w-[170px] xl:ml-0 xl:w-[254px]`}
              />
            </div>
            <div className="mt-[35px] md:flex lg:mt-[70px]">
              <img
                src={`${
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                    ? process.env.NEXT_PUBLIC_BASE_PATH
                    : ''
                }/images/hero4/computer.png`}
                alt="image"
                className={`w-[100px] md:mr-[30px] lg:mr-[60px] lg:w-[170px] xl:w-[254px]`}
              />
              <div className="mt-[10px] flex items-center lg:mt-0">
                <div>
                  <div className="text-[14px] font-bold -tracking-[2.2%] lg:text-[20px] lg:!leading-[150%] xl:text-[28px]">
                    Growth
                  </div>
                  <div className="text-[10px] font-medium text-[#959595] lg:text-[14px] xl:text-[20px]">
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
      <section className="mt-[70px] w-full items-center justify-between bg-[#0354EC] pt-[42px] pb-[40px] pl-[20px] pr-[20px] text-white lg:mt-[135px] lg:flex lg:pt-[83px] lg:pb-[78px] lg:pl-[137px] lg:pr-[115px]">
        <div className="xl:w-[1150px]">
          <div className="text-[16px] font-bold lg:text-[23px] lg:!leading-[120%] xl:text-[32px]">
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
          <div className="mt-[10px] text-[10px] font-normal lg:mt-[20px] lg:text-[14px]  xl:text-[20px]">
            Limited spaces available
          </div>
        </div>
        <div className="mt-[25px] min-w-[231px] lg:mt-0 lg:ml-[25px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://calendly.com/`}
            className="min-w-[231px] cursor-pointer rounded-[5px] bg-[#fff] py-[12px] px-[12px] text-[12px] font-bold !leading-[19px] text-[#000] hover:bg-[#d8d7d7] lg:py-[16px] lg:px-[16.5px] lg:text-[12px] xl:text-[16px]"
          >
            Go to Conference Page
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero4
