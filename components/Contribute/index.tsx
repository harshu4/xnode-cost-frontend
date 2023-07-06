import SingleTestimonial from './SingleTestimonial'

const testimonialData = [
  {
    id: 1,
    title: 'Developer',
    description:
      'Make contributions that can make a real impact and shape the future of our innovative endeavor.',
  },
  {
    id: 2,
    title: 'Community',
    description:
      'Be at the heart of fostering engagement, building connections, and shaping our vibrant community',
  },
  {
    id: 3,
    title: 'Partners',
    description:
      'Collaborate by using L3A data infrastructure to help you and unlock the full potential of your industry',
  },
  {
    id: 4,
    title: 'Web3 Apps',
    description:
      'Leverage and build upon our technology to create transformative apps and shape the future of Web3 landscape',
  },
  {
    id: 5,
    title: 'Protocols',
    description:
      'Harness the power of L3A infrastructure and integrate it into your ecosystem',
  },
  {
    id: 6,
    title: 'DAOs',
    description:
      'Unleash the true potential of your DAO and achieve new levels of decentralization, transparency, and effectiveness',
  },
  {
    id: 7,
    title: 'Foundations',
    description:
      'Pave the way for a future where open data is at the forefront, empowering communities and drive meaningful impact',
  },
  {
    id: 8,
    title: 'Advisors',
    description:
      'Share your expertise, provide invaluable advice, and help steer our open data protocol towards greater heights',
  },
  {
    id: 9,
    title: 'Careers ->',
    description:
      'Apply for open roles within L3A and be part of a vibrant community dedicated to driving positive change',
  },
]

const Contribute = () => {
  return (
    <section className="relative z-10 bg-white pb-32 pt-8 md:pt-0 md:pb-40 lg:pt-0 xl:pb-56">
      <div className="container px-10">
        <div className="grid grid-cols-1 bg-white md:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <div key={testimonial.id} className="m-6">
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

export default Contribute
