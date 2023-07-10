import Image from 'next/image'

interface SingleTestimonialProps {
  title: string
  description: string
  borderColor: string
  tally: string
  scrollIntoView: any
}

const SingleTestimonial = ({
  title,
  description,
  borderColor,
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
    <div
      role="button"
      className={`mx-auto h-[360px] w-[262px] rounded-md bg-gradient-to-tr lg:h-[420px] lg:w-[342px] ${borderColor} p-[1px]`}
    >
      <div
        className={`flex h-[358px] w-[260px] transform cursor-pointer flex-col items-center rounded-[5px] bg-white px-8 pt-10 pb-7 text-center text-[#1E1E1E] transition-all duration-200 hover:z-20 hover:scale-110 lg:h-[418px] lg:w-[340px] lg:px-5`}
        onClick={handleClick}
      >
        <div className="wow fadeInUp rounded-md" data-wow-delay=".1s">
          <h3 className=" mx-2 mb-2 text-[1.25rem] text-base font-bold leading-none lg:text-2xl">
            {title}
          </h3>
          <p className="mx-auto mt-4 text-xs font-normal leading-tight text-[#262626] lg:text-base">
            {description}
          </p>
        </div>
        <div className="mt-auto flex w-full justify-end">
          <Image
            src="/images/lines/arrow.svg"
            alt="logo"
            width={200}
            height={50}
            className="w-1/6 rounded-md md:w-1/6"
          />
        </div>
      </div>
    </div>
  )
}

export default SingleTestimonial
