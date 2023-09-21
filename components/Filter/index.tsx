/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { getDatasets } from '@/utils/data'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DataProvider } from '@/types/dataProvider'
import { SmileySad } from 'phosphor-react'
import { TextField, Autocomplete } from '@mui/material'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

interface ModalProps {
  onUpdate(): void
}

const Filter = ({ onUpdate }: ModalProps) => {
  const [testimonial, setTestimonial] = useState<DataProvider[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [viewAll, setViewAll] = useState(false)
  const [filterCategories, setFilterCategories] = useState<string[]>([])
  const [filterUseCases, setFilterUseCases] = useState<string[]>([])

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

  const useCasesOptions = [
    'Financial Analysis',
    'Blockchain Transactions',
    'DEXs and CEXs',
    'Gas Optimization',
    'Crypto Liquidity',
  ]

  const pathname = usePathname()

  const handleCategorySelection = (category: string) => {
    setFilterCategories((prevCategories) => {
      const updatedCategories = prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]

      updateUrl('category', updatedCategories.join(','))

      return updatedCategories
    })
  }

  const handleUseCaseSelection = (useCase: string) => {
    setFilterUseCases((prevUseCases) => {
      const updatedUseCases = prevUseCases.includes(useCase)
        ? prevUseCases.filter((cat) => cat !== useCase)
        : [...prevUseCases, useCase]

      updateUrl('useCase', updatedUseCases.join(','))

      return updatedUseCases
    })
  }

  const updateUrl = (param: string, value: string | null) => {
    console.log('update chamado com sucesso')
    if (param !== 'page') {
      console.log('nao é page')
      if (typeof window !== 'undefined') {
        console.log('nao é page2')
        const url = new URL(window.location.href)
        url.searchParams.delete('page')
        window.history.pushState({}, '', url.toString())
      }
    }
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)

      if (value) {
        url.searchParams.set(param, value)
      } else {
        url.searchParams.delete(param)
      }

      window.history.pushState({}, '', url.toString())
      onUpdate()
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      const categories = url.searchParams.get('category')
      if (categories) {
        setFilterCategories(categories.split(','))
      }
      const useCases = url.searchParams.get('useCase')
      if (useCases) {
        setFilterUseCases(useCases.split(','))
      }
    }
  }, [pathname])

  return (
    <section className="bg-white p-[5px] text-[16px] font-normal text-[#000] lg:!leading-[220%]">
      <div className="lg:!leading-[200%]">
        <div className="font-bold">Most Popular</div>
        <div>Recently added</div>
      </div>
      <div className="mt-[40px]">
        <div className="border-b-[1px] border-[#D9D9D9] pb-[15px] lg:leading-[19px]">
          Categories
        </div>
        <div className="mt-[15px]">
          {categoriesOptions.map((category, index) => (
            <div
              onClick={() => {
                handleCategorySelection(category)
              }}
              key={index}
              className={`cursor-pointer ${
                filterCategories.includes(category)
                  ? 'text-[#000]'
                  : 'text-[#959595]'
              }`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[40px] border-b-[1px] border-[#D9D9D9] pb-[40px]">
        <div className="border-b-[1px] border-[#D9D9D9] pb-[15px] lg:leading-[19px]">
          Use Cases
        </div>
        <div className="mt-[15px]">
          {useCasesOptions.map((useCase, index) => (
            <div
              onClick={() => {
                handleUseCaseSelection(useCase)
              }}
              key={index}
              className={`cursor-pointer ${
                filterUseCases.includes(useCase)
                  ? 'text-[#000]'
                  : 'text-[#959595]'
              }`}
            >
              {useCase}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[15px] border-b-[1px] border-[#D9D9D9] pb-[15px]">
        <div className="border-b-[1px] border-[#D9D9D9] pb-[15px] lg:leading-[19px]">
          Suggest a new data
        </div>
        <a className="border-b-[1px] font-medium text-[#0354EC] lg:!leading-[150%]">
          Join our community and let us know what you’d like to add!
        </a>
      </div>
      <div className="mt-[15px] border-b-[1px] border-[#D9D9D9] pb-[15px]">
        <div className="border-b-[1px] border-[#D9D9D9] pb-[15px] lg:leading-[19px]">
          Provide a data source
        </div>
        <a className="border-b-[1px] font-medium text-[#0354EC] lg:!leading-[150%]">
          Run an Xnode today{' '}
        </a>
      </div>
    </section>
  )
}

export default Filter
