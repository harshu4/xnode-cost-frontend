import SingleTestimonial from './SingleTestimonial'

const testimonialData = [
  {
    id: 1,
    title: '~80%',
    description: 'Wider coverage',
  },
  {
    id: 2,
    title: 'Fast L2/L3',
    description: 'Most granular data',
  },
  {
    id: 3,
    title: '345+ million',
    description: 'messages per day',
  },
  {
    id: 4,
    title: '345+ million',
    description: 'Messages per day',
  },
  {
    id: 5,
    title: '130+ GB',
    description: 'Data ingestion per day',
  },
  {
    id: 6,
    title: '500+',
    description: 'Data types',
  },
]

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-white py-16 md:py-20 lg:py-28">
      <div className="px-10">
        <div className="grid grid-cols-1 bg-white md:grid-cols-6">
          {testimonialData.map((testimonial, index) => (
            <div
              className={`${
                index !== testimonialData.length - 1
                  ? 'border-b border-r-0 border-black md:border-r md:border-b-0'
                  : 'border-b-0 md:border-r-0'
              }`}
              key={testimonial.id}
            >
              <SingleTestimonial
                key={testimonial.id}
                title={testimonial.title}
                description={testimonial.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
