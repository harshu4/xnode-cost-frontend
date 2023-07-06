interface SingleTestimonialProps {
  title: string
  description: string
}

const SingleTestimonial = ({ title, description }: SingleTestimonialProps) => {
  return (
    <div className="flex w-full items-center justify-center text-center text-[#1E1E1E]">
      <div
        className="wow fadeInUp mx-auto rounded-md p-8 md:px-0 xl:px-8"
        data-wow-delay=".1s"
      >
        <p className="mx-auto text-2xl font-bold   leading-relaxed md:text-xl xl:text-4xl">
          {title}
        </p>
        <p className="mx-auto text-sm  leading-relaxed text-[#939090] md:text-sm xl:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SingleTestimonial
