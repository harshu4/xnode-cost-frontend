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
      className={`relative rounded-md bg-gradient-to-tr ${borderColor} p-[1px]`}
    >
      <div
        className={`flex h-[418px] w-full transform cursor-pointer items-center justify-center rounded-[5px] bg-white px-3 text-center text-[#1E1E1E] transition-all duration-200 hover:z-20 hover:scale-110 md:h-[500px] md:px-9`}
        onClick={handleClick}
      >
        <div
          className="wow fadeInUp mx-auto rounded-md md:p-8 lg:px-5 xl:px-8"
          data-wow-delay=".1s"
        >
          <p className="mx-auto mb-2 text-base font-bold leading-relaxed md:text-[20px] xl:text-[24px]">
            {title}
          </p>
          <p className="mx-auto text-xs font-normal leading-tight text-[#262626] md:text-[12px] xl:text-[16px]">
            {description}
          </p>
          <div className="bottom-7 mt-4 flex w-2/3 justify-between md:absolute md:left-36 md:mt-0 xl:left-72">
            <Image
              src="/images/lines/arrow.svg"
              alt="logo"
              width={200}
              height={50}
              className="w-1/6 rounded-md md:w-1/5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTestimonial
