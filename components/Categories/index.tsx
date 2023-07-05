/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'

const Categories = () => {
  return (
    <section
      id="cta"
      className="relative z-10 overflow-hidden bg-white pt-[120px] pb-16 text-[#1E1E1E] md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[100px] 2xl:pb-[50px]"
    >
      <div className="container">
        <div className="relative mb-8 flex items-start rounded-md bg-white p-4 px-40 text-xs lg:text-sm">
          <Image
            src="/images/blockchainLogo.svg"
            alt="logo"
            width={200}
            height={50}
            className="ml-5 w-2/5"
          />
          <div className="ml-8 mr-7">
            <div className="max-h-[280px] overflow-hidden ">
              <p
                title="Meu teste"
                className="text-2xl font-bold line-clamp-1 lg:text-4xl"
              >
                Technology
              </p>
              <p className="mt-5  text-xs lg:text-lg " title="Meu teste">
                L3A stores data on a decentralized infrastructure for uncensored
                access. Users can query, analyze, and visualize data using a
                web-based application. They can also create custom data feeds,
                develop products, and gain insights at scale.
              </p>
            </div>
            <div className="absolute bottom-4 flex w-2/3 justify-between">
              <button className="rounded-md bg-[#1E1E1E] py-2 px-8 text-xs font-normal text-white duration-300 ease-in-out hover:bg-[#1E1E1E]/80 lg:text-sm">
                {' '}
                Whitepaper {'->'}
              </button>
            </div>
          </div>
        </div>
        <div className="relative mb-8 flex items-start rounded-md bg-white p-4 px-40 text-xs lg:text-sm">
          <Image
            src="/images/blockchainLogo.svg"
            alt="logo"
            width={200}
            height={50}
            className="ml-5 w-2/5"
          />
          <div className="ml-8 mr-7">
            <div className="max-h-[280px] overflow-hidden ">
              <p
                title="Meu teste"
                className="text-2xl font-bold line-clamp-1 lg:text-4xl"
              >
                Vision
              </p>
              <p className="mt-5  text-xs lg:text-lg " title="Meu teste">
                We believe access to quality, unedited information is a
                fundamental right. We are formulating an ethical framework for
                open data that covers important key principles to ensure that
                data is collected, processed, distributed, shared and used in a
                manner that is safe, secure, equitable, fair and just.
              </p>
            </div>
            <div className="absolute bottom-4 flex w-2/3 justify-between">
              <button className="rounded-md bg-[#1E1E1E] py-2 px-8 text-xs font-normal text-white duration-300 ease-in-out hover:bg-[#1E1E1E]/80 lg:text-sm">
                {' '}
                Our Philosophy {'->'}
              </button>
            </div>
          </div>
        </div>
        <div className="relative mb-8 flex items-start rounded-md bg-white p-4 px-40 text-xs lg:text-sm">
          <Image
            src="/images/blockchainLogo.svg"
            alt="logo"
            width={200}
            height={50}
            className="ml-5 w-2/5"
          />
          <div className="ml-8 mr-7">
            <div className="max-h-[280px] overflow-hidden ">
              <p
                title="Meu teste"
                className="text-2xl font-bold line-clamp-1 lg:text-4xl"
              >
                Products & Services
              </p>
              <p className="mt-5  text-xs lg:text-lg " title="Meu teste">
                L3A offers a wide array of products, starting with live web3
                data streaming service along with historical data-as-a-service
                and a query platform for effortless and scalable app
                development.
              </p>
            </div>
            <div className="absolute bottom-4 flex w-2/3 justify-between">
              <button className="rounded-md bg-[#1E1E1E] py-2 px-8 text-xs font-normal text-white duration-300 ease-in-out hover:bg-[#1E1E1E]/80 lg:text-sm">
                {' '}
                Find out more {'->'}
              </button>
            </div>
          </div>
        </div>
        <div className="relative mb-8 flex items-start rounded-md bg-white p-4 px-40 text-xs lg:text-sm">
          <Image
            src="/images/blockchainLogo.svg"
            alt="logo"
            width={200}
            height={50}
            className="ml-5 w-2/5"
          />
          <div className="ml-8 mr-7">
            <div className="max-h-[280px] overflow-hidden ">
              <p
                title="Meu teste"
                className="text-2xl font-bold line-clamp-1 lg:text-4xl"
              >
                Our Journey
              </p>
              <p className="mt-5  text-xs lg:text-lg " title="Meu teste">
                Get ready to embark on an exciting journey to build the world's
                pioneering open crypto data initiative. Join us as we develop
                new products that bring high-quality and lightning-fast data
                from across the decentralized space
              </p>
            </div>
            <div className="absolute bottom-4 flex w-2/3 justify-between">
              <button className="rounded-md bg-[#1E1E1E] py-2 px-8 text-xs font-normal text-white duration-300 ease-in-out hover:bg-[#1E1E1E]/80 lg:text-sm">
                {' '}
                Our Story {'->'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
