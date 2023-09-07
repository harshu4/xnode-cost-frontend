'use client'

import { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import { getPosts } from '@/lib/contentful'

const testimonialData = [
  {
    id: 1,
    title: '~80%',
    description: 'Wider coverage',
    tags: [''],
    website: '',
    logoUrl: '',
    location: '',
    year: '',
  },
]

const ExpertsList = () => {
  const [testimonial, setTestimonial] = useState<any[]>([])

  async function getData() {
    const data = await getPosts()
    setTestimonial(data as any)
    console.log('testimonial setado')
    console.log(data)
    console.log(data[0].logo)
  }

//   async function getData2() {
//     const data = await fetch('http://localhost:3333/api/posts')
//     console.log('fetche')
//     console.log(data)
//   }

  useEffect(() => {
    console.log('useEffect chamado')
    getData()
    // getData2()
  }, [])
  return (
    <section className="bg-white pl-[90px] pr-[64px] pt-[97px] pb-[131px] text-[#000]">
      <div className="text-[21px] font-bold -tracking-[2%] xl:text-[30px]">
        Openmesh Experts
      </div>
      <div className="">
        {testimonial.map((testimonial, index) => (
          <div
            className={`${
              index !== testimonialData.length - 1 ? 'mt-[85px]' : 'mt-[37px]'
            }`}
            key={index}
          >
            <SingleCard
              key={index}
              title={testimonial.title}
              tags={testimonial.tags}
              description={testimonial.description}
              website={testimonial.website}
              logo={testimonial.logo.fields.file.url}
              location={testimonial.location}
              year={testimonial.year}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExpertsList
