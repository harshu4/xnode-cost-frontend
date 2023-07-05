interface SingleTestimonialProps {
  title: string
  description: string
}

const SingleTestimonial = ({ title, description }: SingleTestimonialProps) => {
  return (
    <div className="flex h-72 w-full items-center justify-center bg-[#F2EFEF] px-9 text-center text-black">
      <div
        className="wow fadeInUp mx-auto rounded-md p-8 lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <p className="mx-auto   text-4xl font-bold leading-relaxed">{title}</p>
        <p className="mx-auto  text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default SingleTestimonial
