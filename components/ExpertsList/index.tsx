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
    console.log(data)
    console.log(data[0].logo)
  }

  //   async function getData() {
  //     const response = await fetch(
  //       `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  //       {
  //         method: 'GET',
  //         next: {
  //           revalidate: 3600,
  //         },
  //       },
  //     )

  //     if (response.ok) {
  //       const data = await response.json()
  //       console.log('Fetched')
  //       const final = data.items.map((item) => item.fields)
  //       console.log(final)
  //       setTestimonial(final as any)
  //     } else {
  //       console.log(
  //         `Failed to fetch data: ${response.status} ${response.statusText}`,
  //       )
  //     }
  //   }

  useEffect(() => {
    console.log('useEffect')
    getData()
  }, [])

  return (
    <section className="bg-white pl-[30px] pr-[30px] pt-[48px] pb-[100px] text-[#000] md:pl-[90px] md:pr-[64px] md:pt-[97px] md:pb-[331px]">
      <div className="text-[15px] font-bold -tracking-[2%] md:text-[21px] xl:text-[30px]">
        Openmesh Experts
      </div>
      <div className="max-h-[2000px] overflow-auto md:max-h-[5500px]">
        {testimonial &&
          testimonial.map((testimonial, index) => (
            <div
              className={`${
                index !== testimonialData.length - 1
                  ? 'mt-[18px] md:mt-[37px]'
                  : 'mt-[42px] md:mt-[85px]'
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
