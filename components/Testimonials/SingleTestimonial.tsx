interface SingleTestimonialProps {
  title: string
  description: string
}

const SingleTestimonial = ({ title, description }: SingleTestimonialProps) => {
  return (
    <div className="flex w-full items-center justify-center text-center text-[#1E1E1E]">
      <div
        className="wow fadeInUp mx-auto rounded-md p-8 lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <p className="mx-auto   text-4xl font-bold leading-relaxed">{title}</p>
        <p className="mx-auto  text-base leading-relaxed text-[#939090]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SingleTestimonial
