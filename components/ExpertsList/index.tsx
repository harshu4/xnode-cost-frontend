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

  async function getData2() {
    const response = await fetch(
      'https://cdn.contentful.com/spaces/y6pyp0ob27zb/environments/master/entries?access_token=xqv_WzuGSzMvF_MeZ5Hm_iICfM7e-zwGC1EeW8TfKSI',
      {
        method: 'GET',
        next: {
          revalidate: 300000000000,
        },
      },
    )

    if (response.ok) {
      const data = await response.json() // Extrai o corpo da resposta como um objeto JavaScript
      console.log('Fetched')
      console.log(`Limit: ${data.limit}`) // Loga o campo "limit"
      const final = data.items.map((item) => item.fields)
      console.log(final)
    } else {
      console.log(
        `Failed to fetch data: ${response.status} ${response.statusText}`,
      )
    }
  }

  useEffect(() => {
    console.log('useEffect chamado')
    getData()
    getData2()
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
