import SingleTestimonial from './SingleTestimonial'

const testimonialData = [
  {
    id: 1,
    title: 'Developer',
    tally: 'Developer',
    description:
      'Make contributions that can make a real impact and shape the future of our innovative endeavor.',
  },
  {
    id: 2,
    title: 'Community',
    tally: 'Community Manager',
    description:
      'Be at the heart of fostering engagement, building connections, and shaping our vibrant community',
  },
  {
    id: 3,
    title: 'Partners',
    tally: 'Others',
    description:
      'Collaborate by using L3A data infrastructure to help you and unlock the full potential of your industry',
  },
  {
    id: 4,
    title: 'Web3 Apps',
    tally: 'Web3 App',
    description:
      'Leverage and build upon our technology to create transformative apps and shape the future of Web3 landscape',
  },
  {
    id: 5,
    title: 'Protocols',
    tally: 'Blockchain Protocol',
    description:
      'Harness the power of L3A infrastructure and integrate it into your ecosystem',
  },
  {
    id: 6,
    title: 'DAOs',
    tally: 'DAO',
    description:
      'Unleash the true potential of your DAO and achieve new levels of decentralization, transparency, and effectiveness',
  },
  {
    id: 7,
    title: 'Foundations',
    tally: 'Open Source Foundation',
    description:
      'Pave the way for a future where open data is at the forefront, empowering communities and drive meaningful impact',
  },
  {
    id: 8,
    title: 'Advisors',
    tally: 'Advisor / Expertise',
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

const Contribute = ({ onTestimonialClick }) => {
  return (
    <section className="relative z-10 bg-white pb-32 pt-8 md:pt-0 md:pb-40 lg:pt-0 xl:pb-56">
      <div className="container px-10">
        <div className="grid grid-cols-1 bg-white md:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <div key={testimonial.id} className="m-6">
              <SingleTestimonial
                key={testimonial.id}
                title={testimonial.title}
                tally={testimonial.tally}
                description={testimonial.description}
                onTestimonialClick={onTestimonialClick}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contribute
