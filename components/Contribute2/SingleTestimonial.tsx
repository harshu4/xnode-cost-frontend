interface SingleTestimonialProps {
  title: string
  description: string
  tally: string
  scrollIntoView: any
}

const SingleTestimonial = ({
  title,
  description,
  tally,
  scrollIntoView,
}: SingleTestimonialProps) => {
  //   const isCareers = title === 'Careers ->'
  const handleClick = () => {
    scrollIntoView.current.scrollIntoView({ behavior: 'smooth' })
  }
  // const updateUrl = (param: string, value: string | null) => {
  //   if (typeof window !== 'undefined') {
  //     const url = new URL(window.location.href)

  //     if (value) {
  //       url.searchParams.set(param, value)
  //     } else {
  //       url.searchParams.delete(param)
  //     }

  //     window.history.pushState({}, '', url.toString())
  //   }
  // }

  return (
    <div className="relative bg-gradient-to-tr from-primary to-[#9015c1] p-1">
      <div
        className={`flex h-[400px] w-full transform cursor-pointer items-center justify-center bg-white px-3 text-center text-[#1E1E1E] transition-all duration-200 hover:z-20 hover:scale-110 md:h-[500px] md:px-9`}
        onClick={handleClick}
      >
        <div
          className="wow fadeInUp mx-auto rounded-md md:p-8 lg:px-5 xl:px-8"
          data-wow-delay=".1s"
        >
          <p className="mx-auto mb-2 text-base font-bold leading-relaxed md:text-xl xl:text-2xl">
            {title}
          </p>
          <p className="mx-auto text-xs leading-relaxed md:text-xs xl:text-sm">
            {description}
          </p>
          <div className="bottom-2 mt-4 flex w-2/3 justify-between md:absolute md:left-32 md:mt-0 xl:left-64">
            <button className="rounded-md py-2 px-8 text-xs font-normal text-black duration-300 ease-in-out lg:text-4xl">
              {' '}
              {'-->'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTestimonial
