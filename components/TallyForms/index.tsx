import Script from 'next/script'

const TallyForms = () => {
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
              data-tally-src="https://tally.so/embed/w8zYdx?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
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
