import Script from 'next/script'
import { useEffect, useState } from 'react'

const TallyForms = ({ tally }) => {
  const [iframeSrc, setIframeSrc] = useState(
    'https://tally.so/embed/wMDl0E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1',
  )

  useEffect(() => {
    console.log('fui chamado')
    setIframeSrc(
      `https://tally.so/embed/wMDl0E?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&role=${tally}`,
    )
  }, [tally])

  return (
    <>
      <section id="talyforms" className=" bg-white">
        <div className="container">
          <h1 className="flex justify-center  text-2xl font-semibold leading-tight text-[#1E1E1E] sm:text-4xl sm:leading-tight md:mb-0 md:text-6xl md:leading-tight xl:mb-5">
            Join the L3A ecosystem
          </h1>
          <div className="flex justify-center">
            {' '}
            {/* Adicionado esta linha */}
            <iframe
              data-tally-src={iframeSrc}
              className="w-full md:w-1/2"
              height="284"
              title="Contact form"
            ></iframe>
          </div>{' '}
          {/* Adicionado esta linha */}
          <Script id="tally-js" src="https://tally.so/widgets/embed.js" />
        </div>
      </section>
    </>
  )
}

export default TallyForms
