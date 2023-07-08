/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'

const Categories2 = () => {
  const categories = [
    {
      image: '/images/categories/l3aCore.svg',
      title: 'L3A Core',
      description:
        'Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems.The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems.',
    },
    {
      image: '/images/categories/dojoSystems.svg',
      title: 'Transparency & governence',
      description:
        'Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart',
    },
    {
      image: '/images/categories/infrastructure.svg',
      title: 'L3A Core',
      description:
        'Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. ​ The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models.',
    },
    {
      image: '/images/categories/hardware.svg',
      title: 'L3A Core',
      description:
        'Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models.',
    },
    {
      image: '/images/categories/code.svg',
      title: 'L3A Core',
      description:
        'Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models. Join us as we expand our goal of Deeplink to advance the smart contract ecosystems. The Deeplink developer toolkit will allow developers and data scientists to build, train, and deploy data models.',
    },
  ]

  return (
    <section
      id="categories"
      className="relative z-10 mx-auto w-full max-w-[393px] bg-white px-8 pb-16 text-[#1E1E1E] lg:max-w-[1440px] lg:px-4"
    >
      <div className="w-full">
        {categories.map((category, index) => {
          const hasLineSvg = index < categories.length - 1

          return (
            <>
              <div
                key={category.image}
                className="relative ml-16 items-start rounded-md bg-white text-xs md:flex lg:text-sm"
              >
                <Image
                  src={category.image}
                  alt="logo"
                  width={200}
                  height={50}
                  className="w-1/2 rounded-md md:w-2/5"
                />
                <div className="md:ml-10 md:mr-2">
                  <div className="max-h-[280px]">
                    <h3 className="mt-2 text-2xl font-bold md:mt-0 md:text-[28px]">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-xs  !leading-tight md:mt-3 md:text-[18px] xl:mt-5">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
              {hasLineSvg ? (
                <div className="relative items-start rounded-md bg-white  text-xs  md:flex lg:text-sm">
                  <Image
                    src="/images/lines/Line3.svg"
                    alt="logo"
                    width={200}
                    height={50}
                    className="mt-2 mb-2 ml-32 w-1 md:mb-0 md:mt-0 md:ml-[240px] md:w-1"
                  />
                </div>
              ) : null}
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Categories2
