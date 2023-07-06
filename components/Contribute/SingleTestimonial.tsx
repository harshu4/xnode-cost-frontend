interface SingleTestimonialProps {
  title: string
  description: string
  tally: string
  onTestimonialClick: (tally: string) => void
}

const SingleTestimonial = ({
  title,
  description,
  tally,
  onTestimonialClick,
}: SingleTestimonialProps) => {
  const isCareers = title === 'Careers ->'

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

  const handleClick = () => {
    if (isCareers) {
      window.open('https://www.career.l3a.xyz/active', '_blank')
    } else {
      onTestimonialClick(tally)
    }
  }

  return (
    <div
      className={`flex h-60 w-full transform items-center justify-center px-3 text-center transition-all duration-200 hover:z-20 hover:scale-110 md:h-72 md:px-9 ${
        isCareers ? 'cursor-pointer bg-[#1E1E1E]' : 'bg-[#F2EFEF]'
      } ${isCareers ? 'text-white' : 'text-[#1E1E1E]'}`}
      onClick={handleClick}
    >
      <div
        className="wow fadeInUp mx-auto rounded-md md:p-8 lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <p className="mx-auto mb-2 text-2xl font-bold leading-relaxed xl:text-4xl">
          {title}
        </p>
        <p className="mx-auto text-sm leading-relaxed xl:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SingleTestimonial
