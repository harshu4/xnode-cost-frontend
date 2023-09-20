import { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import { getDatasets } from '@/utils/data'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DataProvider } from '@/types/dataProvider'
import { SmileySad } from 'phosphor-react'

const ExpertsList = () => {
  const [testimonial, setTestimonial] = useState<DataProvider[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [viewAll, setViewAll] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function getData() {
    setIsLoading(true)

    let data: DataProvider[]
    try {
      data = await getDatasets()
    } catch (err) {
      toast.error('Something occured')
    }
    setIsLoading(false)
    setTestimonial(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const filteredTestimonials = testimonial.filter((t) => {
    return (
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })
  const testimonialsToShow = viewAll
    ? filteredTestimonials
    : filteredTestimonials.slice(0, 6)

  if (isLoading) {
    return (
      <section className="bg-white pl-[30px] pr-[30px] pt-[46px] pb-[50px] text-[#000] md:pl-[90px] md:pr-[130px]">
        <div className="container flex h-60 animate-pulse px-0 pb-12">
          <div className="mr-10 w-3/4 animate-pulse bg-[#dfdfdf]"></div>
          <div className="w-1/4 animate-pulse bg-[#dfdfdf]"></div>
        </div>
      </section>
    )
  }
  return (
    <section className="bg-white pl-[30px] pr-[30px] pt-[46px] pb-[50px] text-[#000] md:pl-[90px] md:pr-[130px]">
      <div className="mb-[25px] flex h-[32px] min-w-[150px] max-w-[500px] rounded-[5px] border border-[#D9D9D9] bg-white py-[11px] px-[15px] md:h-[42px]">
        <img
          src={`${
            process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
              ? process.env.NEXT_PUBLIC_BASE_PATH
              : ''
          }/images/hero/search.svg`}
          alt="image"
          className={`mr-[10px] w-[18px]`}
        />
        <input
          type="text"
          placeholder="Search here"
          className=" w-full bg-white text-[10px] font-medium text-[#000000] placeholder-[#575757] outline-none md:text-[14px] 2xl:text-[16px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div
        id="experts"
        className="text-[10px] font-bold -tracking-[2%] md:text-[12px] lg:text-[14px] lg:!leading-[150%] 2xl:text-[20px]"
      >
        Openmesh Datasets
      </div>
      {testimonialsToShow.length === 0 ? (
        <div>
          <div className="mt-[64px] mb-[100px] flex flex-col items-center">
            <SmileySad size={32} className="text-blue-500 mb-2" />
            <span>No datasets found</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="mt-[25px] grid max-h-[2500px] grid-cols-1 gap-x-[40px] gap-y-[40px] overflow-y-auto lg:grid-cols-2 2xl:grid-cols-3">
        {testimonialsToShow.map((testimonial, index) => (
          <div key={index}>
            <SingleCard
              id={testimonial.id}
              name={testimonial.name}
              description={testimonial.description}
              createdAt={testimonial.createdAt}
            />
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          if (viewAll) {
            const element = document.getElementById('experts')
            element.scrollIntoView({ behavior: 'smooth' })
          }
          setViewAll(!viewAll)
        }}
        className="mt-[31px] flex  cursor-pointer justify-end text-[10px] font-bold -tracking-[2%] text-[#0354EC] hover:text-[#2d5092] md:text-[14px] lg:!leading-[150%] xl:text-[16px] 2xl:text-[20px]"
      >
        {viewAll ? 'View Less' : 'View All'} {'-->'}
      </div>
    </section>
  )
}

export default ExpertsList
