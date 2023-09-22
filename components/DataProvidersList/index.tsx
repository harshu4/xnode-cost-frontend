/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import { getDatasets } from '@/utils/data'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DataProvider } from '@/types/dataProvider'
import { SmileySad } from 'phosphor-react'
import Filter from '@/components/Filter'
import { TextField, Autocomplete } from '@mui/material'

const ExpertsList = () => {
  const [testimonial, setTestimonial] = useState<DataProvider[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [viewAll, setViewAll] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setTagsCategories] = useState<string[]>([])
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([])

  const categoriesOptions = [
    'Crypto Exchanges',
    'Public Blockchains',
    'Decentralized Finance (DeFi)',
    'Blockchain Metaverses',
    'GameFi (Blockchain Games)',
    'Financial Data',
    'Public Medical Research',
    'Scientific Data',
    'Cancer Research',
    'Agricultural',
  ]

  const tagsOptions = ['Free', 'Paid']

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
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      const categories = url.searchParams.get('category')?.split(',') || []
      setSelectedCategories(categories)
    }
    getData()
  }, [])

  const handleUpdate = () => {
    // setIsLoading(true)
    // the body that will be passed to call the getTasksFiltered() endpoint
    const dataBody = {}
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)

      const categories = url.searchParams.get('category')?.split(',') || []
      setSelectedCategories(categories)

      const useCases = url.searchParams.get('useCase')?.split(',') || []
      setSelectedUseCases(useCases)
    }
  }

  const filteredTestimonials = testimonial.filter((t) => {
    return (
      (selectedCategories.length === 0 ||
        selectedCategories.some((category) => t.tags.includes(category))) &&
      (selectedUseCases.length === 0 ||
        selectedUseCases.some((useCase) => t.useCases.includes(useCase))) &&
      (t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.description.toLowerCase().includes(searchTerm.toLowerCase()))
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
    <section className="flex bg-white pl-[30px] pr-[30px] pb-[55px] text-[#000] md:pt-[40px] lg:gap-x-[80px] lg:pr-[120px] lg:pl-[72px] 2xl:gap-x-[100px] 2xl:pt-[46px] 2xl:pr-[150px] 2xl:pl-[90px] 2xl:pb-[70px]">
      <Filter onUpdate={handleUpdate} />
      <div>
        <div className="flex h-[32px] min-w-[150px] max-w-[500px] rounded-[5px] border border-[#D9D9D9] bg-white py-[10px] px-[15px] md:h-[40px] lg:!leading-[30px] 2xl:h-[50px] 2xl:max-w-[600px]">
          <img
            src={`${
              process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                ? process.env.NEXT_PUBLIC_BASE_PATH
                : ''
            }/images/hero/searchVector.svg`}
            alt="image"
            className={`mr-[10px] h-[18px] w-[18px]`}
          />
          <input
            type="text"
            placeholder="Search here"
            className=" w-full bg-white text-[8px] font-medium text-[#000000] placeholder-[#737373] outline-none md:text-[14px] 2xl:text-[16px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* <div className="mt-[20px] flex gap-x-[20px] p-[5px]">
          <div className="">
            <Autocomplete
              multiple
              disabled={isLoading}
              className="mt-[10px]"
              options={categoriesOptions}
              size="small"
              getOptionLabel={(option) => `${option}`}
              filterOptions={(options, state) =>
                options.filter((option) =>
                  option.toLowerCase().includes(state.inputValue.toLowerCase()),
                )
              }
              onChange={(e, newValue) => {
                setTagsCategories([...newValue])
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  id="margin-none"
                  placeholder="Categories"
                  sx={{
                    width: '250px',
                    fieldset: {
                      borderColor: '#D4D4D4',
                      borderRadius: '10px',
                    },
                    input: { color: 'black' },
                  }}
                />
              )}
            />
          </div>
          <div className="">
            <Autocomplete
              multiple
              disabled={isLoading}
              className="mt-[10px]"
              options={tagsOptions}
              size="small"
              getOptionLabel={(option) => `${option}`}
              filterOptions={(options, state) =>
                options.filter((option) =>
                  option.toLowerCase().includes(state.inputValue.toLowerCase()),
                )
              }
              onChange={(e, newValue) => {
                setSelectedCategories([...newValue])
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  id="margin-none"
                  placeholder="Tags"
                  sx={{
                    width: '250px',
                    fieldset: {
                      borderColor: '#D4D4D4',
                      borderRadius: '10px',
                    },
                    input: { color: 'black' },
                  }}
                />
              )}
            />
          </div>
        </div> */}

        <div
          id="experts"
          className="mt-[10px] text-[8px] font-medium text-[#959595] md:text-[9px] lg:text-[11px] lg:!leading-[17px] 2xl:mt-[12px] 2xl:text-[14px]"
        >
          Showing {testimonialsToShow.length} out of {testimonial.length} apps
          by most popular
        </div>
        {testimonialsToShow.length === 0 ? (
          <div>
            <div className="mt-[64px] mb-[100px] flex flex-col items-center justify-center">
              <SmileySad size={32} className="text-blue-500 mb-2" />
              <span>No datasets found</span>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="mt-[25px] grid max-h-[2500px] grid-cols-1 gap-x-[50px] gap-y-[30px] overflow-y-auto lg:grid-cols-2 2xl:grid-cols-3">
          {testimonialsToShow.map((testimonial, index) => (
            <div key={index}>
              <SingleCard
                id={testimonial.id}
                name={testimonial.name}
                description={testimonial.description}
                createdAt={testimonial.createdAt}
                company={testimonial.company}
                sql={testimonial.sql}
                tags={testimonial.tags}
                updatedAt={testimonial.updatedAt}
                live={testimonial.live}
                download={testimonial.download}
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
          className="mt-[31px] flex cursor-pointer  justify-center text-[8px] font-medium -tracking-[2%] text-[#959595] hover:text-[#686767] md:text-[13px] lg:!leading-[200%] xl:text-[15px] 2xl:text-[18px]"
        >
          {viewAll ? 'Show more' : 'Show less'}
        </div>
      </div>
    </section>
  )
}

export default ExpertsList
