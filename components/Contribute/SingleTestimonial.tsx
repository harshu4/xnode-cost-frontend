interface SingleTestimonialProps {
  title: string
  description: string
}

const SingleTestimonial = ({ title, description }: SingleTestimonialProps) => {
  const isCareers = title === 'Careers ->'

  const handleClick = () => {
    if (isCareers) {
      window.open('https://www.career.l3a.xyz/active', '_blank')
    }
  }

  return (
    <div
      className={`flex h-72 w-full transform items-center justify-center px-9 text-center transition-all duration-200 hover:z-20 hover:scale-110 ${
        isCareers ? 'cursor-pointer bg-[#1E1E1E]' : 'bg-[#F2EFEF]'
      } ${isCareers ? 'text-white' : 'text-[#1E1E1E]'}`}
      onClick={handleClick}
    >
      <div
        className="wow fadeInUp mx-auto rounded-md p-8 lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <p className="mx-auto text-4xl font-bold leading-relaxed">{title}</p>
        <p className="mx-auto text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default SingleTestimonial
