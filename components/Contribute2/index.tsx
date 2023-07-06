import SingleTestimonial from './SingleTestimonial'

const testimonialData = [
  {
    id: 1,
    title: 'Team Members',
    tally: 'Team Members',
    description:
      "Join the team that's creating open infrastructures and promoting open data. We're not just accelerating the Web3 and crypto industry, we're building technologies that counter surveillance capitalism and prevent data and infrastructure monopolies. Help us shape a more transparent and equitable digital future.",
  },
  {
    id: 2,
    title: 'Open Source Developers',
    tally: 'Open Source Developers',
    description:
      "Play an instrumental role in building a public cloud infrastructure without the middleman. Tackle real-world tech challenges and be part of an open-source solution that's altering how the world manages and interacts with data. Your contributions will aid in our shared vision of an Internet where everyone has equal access to quality, immutable data.",
  },
  {
    id: 3,
    title: 'Blockchain Protocols, Web3 Startups & DAOs',
    tally: 'Blockchain Protocols, Web3 Startups & DAOs',
    description:
      'Our infrastructure can support your blockchain protocol or Web3 startup. We provide automatic deployment and interconnection of all necessary middleware, OS, and authentication mechanisms, and we install required applications in minutes.',
  },
  {
    id: 4,
    title: 'Open Data Advocates and Academics',
    tally: 'Open Data Advocates and Academics',
    description:
      'Help us build ethical and responsible technological frameworks. L3A believes in the importance of public infrastructure that is built and maintained in the best interest of humanity. We also offer research grants for deep academic research on tech and security.',
  },
  {
    id: 5,
    title: 'Community Members',
    tally: 'Blockchain Protocol',
    description:
      'Join our vibrant community of passionate individuals and groups supporting open-source technologies. Learn about our open-source governance, our community contributions, and how you can get involved.',
  },
  {
    id: 6,
    title: 'Partnerships',
    tally: 'Partnerships',
    description:
      'We believe in the power of collaboration. If you are a Potential Vendor, Service Provider, Open Source Foundation, or Academia, learn about our current tech partners and join us in our mission to decentralize data infrastructure.',
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
