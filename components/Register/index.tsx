/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
'use client'
// import { useState } from 'react'
import { useEffect, useState, ChangeEvent, FC } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from 'axios'
import Checkbox from '@material-ui/core/Checkbox'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css' // import styles
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { TextField, Autocomplete } from '@mui/material'

import Hero from './Hero'
import { createHash } from 'crypto'

type TaskSubmitForm = {
  title: string
  deadline: Date
  departament: string
  skills: string[]
  type: string
  projectLength: string
  numberOfApplicants: string
  githubLink: string
  calendarLink: string
  reachOutLink: string
  taskDraftDeadline: Date
}

type Payment = {
  tokenContract: string
  amount: string
}

type FileListProps = {
  files: File[]
  onRemove(index: number): void
}

type IPFSSubmition = {
  title: string
  description: string
  deadline: Date
  departament: string
  skills: string[]
  type: string
  projectLength: string
  numberOfApplicants: string | null
  payments: Payment[]
  file: string | null
}

const NewTask = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [departament, setDepartament] = useState('')
  const [projectLength, setProjectLength] = useState('')
  const [numberOfApplicants, setNumberOfApplicants] = useState('')
  const [type, setType] = useState('Individual')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [fundingView, setFundingView] = useState<boolean>(false)
  const [payments, setPayments] = useState<Payment[]>([])
  const [departamentOptionsToAddress, setDepartamentOptionsToAddress] =
    useState({})
  const [departamentOptions, setDepartamentOptions] = useState([])
  const [editorHtml, setEditorHtml] = useState('')

  const projectLengthOptions = [
    'Less than 1 week',
    '1 to 2 weeks',
    '2 to 4 weeks',
    'More than 4 weeks',
  ]
  const numberOfApplicantsOptions = ['1', '2', '3', '4', '5']
  const typeOptions = ['Individual', 'Group']
  const { push } = useRouter()

  const taskAddress = process.env.NEXT_PUBLIC_TASK_ADDRESS

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [erc20AddressReadAllowance, setErc20AddressReadAllowance] =
    useState<String>('')

  const [ipfsHashTaskData, setIpfsHashTaskData] = useState<String>('')

  const skillOptions = [
    'Backend',
    'Frontend',
    'Web development',
    'Solidity',
    'UI',
    'UX',
    'HR',
  ]

  const validSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    deadline: Yup.date()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null
      })
      .typeError('Deadline is required')
      .required('Deadline is required'),
    taskDraftDeadline: Yup.date()
      .transform((value, originalValue) => {
        return originalValue ? new Date(originalValue) : null
      })
      .optional(),
    departament: Yup.string().required('Department is required'),
    skills: Yup.array()
      .of(Yup.string())
      .min(2, 'At least two tags are required')
      .max(3, 'You can select up to 3 skills'),
    projectLength: Yup.string().required('Project length is required'),
    numberOfApplicants: Yup.string().required(
      'Number of applicants is required',
    ),
    githubLink: Yup.string().notRequired(),
    calendarLink: Yup.string().notRequired(),
    reachOutLink: Yup.string().notRequired(),
    type: Yup.string().notRequired(),
  })
  const {
    register,
    handleSubmit,
    setValue,
    control, // Adicione esta linha
    // eslint-disable-next-line no-unused-vars
    reset,
    formState: { errors },
  } = useForm<TaskSubmitForm>({
    resolver: yupResolver(validSchema),
  })

  const addPayments = () => {
    if (payments.length > 4) {
      toast.error('Only 5 payments per task', {
        position: toast.POSITION.TOP_RIGHT,
      })
      return
    }
    setPayments([
      ...payments,
      {
        tokenContract: '',
        amount: '',
      },
    ])
  }

  const handleDeletePayment = (index: number) => {
    setPayments(payments.filter((_, i) => i !== index))
  }

  const handleAmountPayment = (
    index: number,
    field: keyof Payment,
    valueReceived: string,
  ) => {
    const newPayment = [...payments]

    if (
      newPayment[index][field].length > 10000000000000000000000000000000000000
    ) {
      return
    }

    const value = valueReceived.replace(/[^0-9]/g, '')

    newPayment[index][field] = value
    setPayments(newPayment)
  }

  const handleERC20AddressPayment = (
    index: number,
    field: keyof Payment,
    valueReceived: string,
  ) => {
    const newPagamentos = [...payments]

    if (newPagamentos[index][field].length > 100) {
      return
    }

    const value = valueReceived

    newPagamentos[index][field] = value
    setPayments(newPagamentos)
  }

  function handleChange(value) {
    if (editorHtml.length < 5000) {
      setEditorHtml(value)
    }

    console.log('the value markdown')
    console.log(value)
  }

  const FileList: FC<FileListProps> = ({ files, onRemove }) => {
    return (
      <ul className="mt-4 max-h-[190px] max-w-[300px] overflow-y-auto text-[#000000]">
        {files.map((file, index) => (
          <li
            key={`selected-${index}`}
            className="mb-2 mr-2 ml-4 flex items-center"
          >
            <span title={file.name} className="ml-auto block w-full truncate">
              {file.name}
            </span>
            <button
              type="button"
              onClick={() => onRemove(index)}
              disabled={isLoading}
              className="ml-2 rounded px-1 py-0.5 text-sm  text-[#ff0000]"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    )
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      console.log('fazendo a chamada do file')
      const newFiles = Array.from(event.target.files)
      let validFiles = true
      const allowedMimeTypes = ['image/jpeg', 'image/png']
      const maxFileSize = 10 * 1024 * 1024 // 10 MB

      if (newFiles.length > 1) {
        toast.error(`Only 1 file per task for the MVP.`)
        return
      }

      newFiles.forEach((file) => {
        if (!allowedMimeTypes.includes(file.type)) {
          validFiles = false
          toast.error(`Only JPG, JPEG, PNG allowed for the MVP.`)
          return
        }
        if (file.size > maxFileSize) {
          validFiles = false
          toast.error(`The file ${file.name} is too heavy. Max of 10 MB.`)
          return
        }
        const combinedFiles = [...selectedFiles, ...newFiles].slice(0, 15)
        setSelectedFiles(combinedFiles)
      })
    }
  }
  const removeFile = (index: number) => {
    setSelectedFiles(selectedFiles.filter((_, i) => i !== index))
  }

  async function handleFileUploadIPFS() {
    const file = selectedFiles[0]
    const formData = new FormData()
    formData.append('file', file)

    // Configurações do axios para a API Pinata
    const pinataAxios = axios.create({
      baseURL: 'https://api.pinata.cloud/pinning/',
      headers: {
        pinata_api_key: `${process.env.NEXT_PUBLIC_PINATA_API_KEY}`,
        pinata_secret_api_key: `${process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY}`,
        'Content-Type': 'multipart/form-data',
      },
    })

    const response = await pinataAxios.post('pinFileToIPFS', formData)

    // O hash é o identificador exclusivo do arquivo no IPFS
    const ipfsHash = response.data.IpfsHash

    console.log('File uploaded to IPFS with hash', ipfsHash)

    return ipfsHash
  }

  async function formsUploadIPFS(data: any) {
    const config = {
      method: 'post' as 'post',
      url: `${process.env.NEXT_PUBLIC_API_BACKEND_BASE_URL}/functions/uploadIPFSMetadataTaskCreation`,
      headers: {
        'x-parse-application-id': `${process.env.NEXT_PUBLIC_API_BACKEND_KEY}`,
      },
      data,
    }

    let dado

    await axios(config).then(function (response) {
      if (response.data) {
        dado = response.data
        console.log(dado)
      }
    })

    return dado
  }

  async function formsUploadIPFSTaskDraft(data: any) {
    const config = {
      method: 'post' as 'post',
      url: `${process.env.NEXT_PUBLIC_API_BACKEND_BASE_URL}/functions/uploadIPFSMetadataTaskDraftCreation`,
      headers: {
        'x-parse-application-id': `${process.env.NEXT_PUBLIC_API_BACKEND_KEY}`,
      },
      data,
    }

    let dado

    await axios(config).then(function (response) {
      if (response.data) {
        dado = response.data
        console.log(dado)
      }
    })

    return dado
  }

  const handleDateChange = (onChange) => (date) => {
    const minDate = new Date()
    minDate.setDate(minDate.getDate() + 2)

    if (date < minDate) {
      toast.error(
        'The end voting date needs to be at least 2 days from today',
        {
          position: toast.POSITION.TOP_RIGHT,
        },
      )
    } else {
      onChange(date)
    }
  }

  async function onSubmit(data: TaskSubmitForm) {
    if (!editorHtml || editorHtml.length === 0) {
      toast.error('Please set a description.')
      const element = document.getElementById('descId')
      element.scrollIntoView({ behavior: 'smooth' })
      return
    }
    if (payments.length === 0) {
      toast.error('Please set a payment.')
      const element = document.getElementById('budgetId')
      element.scrollIntoView({ behavior: 'smooth' })
      return
    }
    const preApprovedApplications = []
    if (fundingView && !data.taskDraftDeadline) {
      toast.error("Please set a date for the end of the task's draft voting")
      return
    }
    if (fundingView && data.taskDraftDeadline.getTime() < Date.now()) {
      toast.error(
        "Please set a date for the end of the task's draft voting greater than now",
      )
      return
    }

    setIsLoading(true)

    // verifying if all the ERC20 tokens are valid:

    let fileIPFSHash = ''
    if (selectedFiles.length > 0) {
      try {
        fileIPFSHash = await handleFileUploadIPFS()
      } catch (err) {
        toast.error('Something ocurred')
        console.log(err)
        setIsLoading(false)
        return
      }
    }

    const finalData = {
      ...data,
      projectLength,
      numberOfApplicants,
      description: editorHtml,
      payments,
      file: fileIPFSHash,
    }

    let ipfsHashData
    try {
      const res = await formsUploadIPFS(finalData)
      console.log('a resposta:')
      console.log(res)
      ipfsHashData = res
      setIpfsHashTaskData(res)
    } catch (err) {
      toast.error('something ocurred')
      console.log(err)
      setIsLoading(false)
    }
  }

  async function getDepartaments() {
    setIsLoading(true)
    const config = {
      method: 'post' as 'post',
      url: `${process.env.NEXT_PUBLIC_API_BACKEND_BASE_URL}/functions/getDepartaments`,
      headers: {
        'x-parse-application-id': `${process.env.NEXT_PUBLIC_API_BACKEND_KEY}`,
      },
    }

    try {
      // [		{			"id": "1b71121d-be7c-4331-89e9-5a6e6312852b",			"name": "Blockchain",			"addressTaskDrafts": "0x8c10bC4673d4f0B46cb565Bb565A5054368BC0E4",			"addressDAO": "0x11dF7E88E2FE64c5f7656c1311609Cc838D544DF",			"addressTokenListGovernance": "0x2cda520aAD302836b3110F20B48163f96869383B",			"createdAt": "2023-08-07T06:10:39.000Z",			"updatedAt": "2023-08-07T06:09:55.000Z"		},		{			"id": "1b71122d-be8c-4331-89e9-5a6e6312852b",			"name": "Cloud",			"addressTaskDrafts": "0x68Aaa9f0b989214C4a20831234A2b65F89e6846f",			"addressDAO": "0x7b92f0E65cCAeF6F8e259ABcFD5C87E3f0969Ddc",			"addressTokenListGovernance": "0xE80bC76b61C39f9DD012541d972A39AaC9CBCFAe",			"createdAt": "2023-08-08T11:43:06.000Z",			"updatedAt": null		},		{			"id": "9addf5fb-5ab8-4d80-b0bf-e26247920bd4",			"name": "Frontend",			"addressTaskDrafts": "0xbD6CdE02D09f0a59e9E83f38EbA47c60Fa402921",			"addressDAO": "0x8c8C9331c0550C3Dc492f6A11fC9b891F3AbFe62",			"addressTokenListGovernance": "0x8248db7F95ec6CA2818A73E7CA95de1c0CC77310",			"createdAt": "2023-08-10T14:15:06.000Z",			"updatedAt": null		},		{			"id": "f069bf45-f8b7-4e57-97d1-14bdcaf4bc17",			"name": "Data",			"addressTaskDrafts": "0x104D58217F1184548fEeC388640e9a6aD38C35c1",			"addressDAO": "0x10C93ee6962edfCE77f1ad1f04E86235e2bf96d2",			"addressTokenListGovernance": "0xdbf68eF0876A96A9A13D6D82279aAF2228E1fF9E",			"createdAt": "2023-08-10T14:12:57.000Z",			"updatedAt": null		}	]
      await axios(config).then(function (response) {
        if (response.data && response.data.departaments.length > 0) {
          const departamentsNameList = []
          const departamentsToAddress = {}

          response.data.departaments.forEach((departament) => {
            departamentsNameList.push(departament.name)
            departamentsToAddress[departament.name] =
              departament.addressTaskDrafts
          })

          setDepartamentOptionsToAddress(departamentsToAddress)
          setDepartamentOptions(departamentsNameList)
        }
      })
    } catch (err) {
      toast.error('Error getting the departaments options!')
      console.log(err)
    }
    setIsLoading(false)
  }
  return (
    <>
      <section className="mt-12 mb-[0px] px-[20px] pt-[50px]  text-[11px] font-medium !leading-[17px] text-[#000000] lg:mb-24 lg:px-[100px]  lg:text-[14px]">
        <div className="container px-[0px]">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="">
              <div>
                <div className="">
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Name
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.title?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[50px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('title')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Email
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.title?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[50px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('title')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Company name
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.title?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[50px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('title')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Founding year
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.title?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[50px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('title')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Location
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.title?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[50px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('title')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Website
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.title?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[50px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('title')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Service tags
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.skills?.message}
                      </p>
                    </span>
                    <Controller
                      name="skills"
                      control={control}
                      defaultValue={[]}
                      rules={{
                        required: 'At least two tags are required',
                        validate: (value) =>
                          value.length >= 2 || 'At least two tags are required',
                      }}
                      render={({ field }) => (
                        <Autocomplete
                          {...field}
                          multiple
                          popupIcon={
                            <svg
                              width="16"
                              height="10"
                              viewBox="0 0 16 10"
                              className="mr-[15px] mt-[13px]"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.15474 9.65876L0.35261 3.07599C-0.117537 2.62101 -0.117537 1.88529 0.35261 1.43514L1.48296 0.341239C1.95311 -0.113746 2.71335 -0.113746 3.17849 0.341239L8 5.00726L12.8215 0.341239C13.2917 -0.113746 14.0519 -0.113746 14.517 0.341239L15.6474 1.43514C16.1175 1.89013 16.1175 2.62585 15.6474 3.07599L8.84527 9.65876C8.38512 10.1137 7.62488 10.1137 7.15474 9.65876Z"
                                fill="#959595"
                              />
                            </svg>
                          }
                          disabled={isLoading}
                          className="mt-[10px]"
                          options={skillOptions}
                          size="small"
                          getOptionLabel={(option) => `${option}`}
                          filterOptions={(options, state) =>
                            options.filter((option) =>
                              option
                                .toLowerCase()
                                .includes(state.inputValue.toLowerCase()),
                            )
                          }
                          onChange={(e, newValue) => {
                            if (newValue.length <= 8) {
                              field.onChange(newValue)
                            } else {
                              console.log('not aloweed')
                              toast.error('Only 8 tags per task', {
                                position: toast.POSITION.TOP_RIGHT,
                              })
                            }
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              id="margin-none"
                              sx={{
                                width: isSmallScreen ? '280px' : '500px',
                                fieldset: {
                                  height: '55px',
                                  borderColor: '#D4D4D4',
                                  borderRadius: '10px',
                                },
                                input: { color: 'black' },
                              }}
                            />
                          )}
                        />
                      )}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Description
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.title?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[500px] w-[380px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('title')}
                    />
                  </div>
                  <div className="mt-[60px]">
                    <span className="flex flex-row">
                      Password
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.title?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[50px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('title')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Confirm password
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.title?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[50px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('title')}
                    />
                  </div>
                </div>
              </div>
            </div>
            {isLoading ? (
              <div className="mt-[30px] flex pb-[10px] lg:pb-60">
                <button
                  disabled={true}
                  className=" mr-[15px] h-[50px] w-[250px] rounded-[10px] bg-[#0354EC] py-[12px] px-[25px] text-[12px] font-bold text-white  hover:bg-[#0354EC] lg:text-[16px]"
                  onClick={handleSubmit(onSubmit)}
                >
                  <span className="">Register</span>
                </button>
                <svg
                  className="mt-1 animate-spin"
                  height="40px"
                  id="Icons"
                  version="1.1"
                  viewBox="0 0 80 80"
                  width="40px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M58.385,34.343V21.615L53.77,26.23C50.244,22.694,45.377,20.5,40,20.5c-10.752,0-19.5,8.748-19.5,19.5S29.248,59.5,40,59.5  c7.205,0,13.496-3.939,16.871-9.767l-4.326-2.496C50.035,51.571,45.358,54.5,40,54.5c-7.995,0-14.5-6.505-14.5-14.5  S32.005,25.5,40,25.5c3.998,0,7.617,1.632,10.239,4.261l-4.583,4.583H58.385z" />
                </svg>
              </div>
            ) : (
              <div className="mt-[30px] pb-60">
                <button
                  type="submit"
                  className=" h-[50px] w-[250px] rounded-[10px] bg-[#0354EC] py-[12px] px-[25px] text-[12px] font-bold text-white  hover:bg-[#0354EC] lg:text-[16px]"
                  onClick={handleSubmit(onSubmit)}
                >
                  <span className="">Register</span>
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default NewTask
