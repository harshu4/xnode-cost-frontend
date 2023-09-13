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
import nookies, { parseCookies, setCookie } from 'nookies'
import 'react-toastify/dist/ReactToastify.css'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css' // import styles
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ReCAPTCHA from 'react-google-recaptcha'

import { TextField, Autocomplete } from '@mui/material'

import Hero from './Hero'
import { createHash } from 'crypto'
import { EyeSlash, Eye } from 'phosphor-react'

type RegisterForm = {
  name: string
  email: string
  companyName: string
  foundingYear: number
  location: string
  website: string
  tags: string[]
  description: string
  password: string
  confirmPassword: string
  scheduleCalendlyLink: string
}

type Payment = {
  tokenContract: string
  amount: string
}

type FileListProps = {
  files: File[]
  onRemove(index: number): void
}

const Register = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [departament, setDepartament] = useState('')
  const [accountCreated, setAccountCreated] = useState<boolean>(false)
  const [isRecaptchaValidated, setIsRecaptchaValidated] =
    useState<boolean>(false)
  const [projectLength, setProjectLength] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [numberOfApplicants, setNumberOfApplicants] = useState('')
  const [type, setType] = useState('Individual')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [fundingView, setFundingView] = useState<boolean>(false)
  const [payments, setPayments] = useState<Payment[]>([])
  const [departamentOptionsToAddress, setDepartamentOptionsToAddress] =
    useState({})
  const [departamentOptions, setDepartamentOptions] = useState([])
  const [editorHtml, setEditorHtml] = useState('')
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true)

  function onChange(value) {
    console.log('Captcha value:', value)
    setIsRecaptchaValidated(true)
  }

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

  const [name, setName] = useState('')

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const [erc20AddressReadAllowance, setErc20AddressReadAllowance] =
    useState<String>('')

  const [ipfsHashTaskData, setIpfsHashTaskData] = useState<String>('')

  const skillOptions = [
    'IoT',
    'Web development',
    'Consultancy',
    'UI / UX',
    'Marketing',
  ]

  const validSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    companyName: Yup.string().required('Company name is required'),
    foundingYear: Yup.number().required('Founding year is required'),
    website: Yup.string().required('Website is required'),
    description: Yup.string().required('Description is required'),
    location: Yup.string().required('Location is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Name is required'),
    tags: Yup.array()
      .of(Yup.string())
      .min(2, 'At least two tags are required')
      .max(3, 'You can select up to 3 skills'),
  })
  const {
    register,
    handleSubmit,
    setValue,
    control, // Adicione esta linha
    // eslint-disable-next-line no-unused-vars
    reset,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(validSchema),
  })

  const FileList: FC<FileListProps> = ({ files, onRemove }) => {
    return (
      <ul className="mt-4 max-h-[190px] max-w-[300px] overflow-y-auto text-[#000000]">
        {files.map((file, index) => (
          <li key={`selected-${index}`} className="mb-2 mr-2 ml-4 flex">
            <img
              src={imagePreview}
              alt="Preview"
              className={`h-[150px] w-[150px] cursor-pointer rounded-[100%] `}
            />
            <button
              type="button"
              onClick={() => onRemove(index)}
              disabled={isLoading}
              className="ml-2 flex h-fit items-start rounded px-1 py-0.5 text-sm  font-extrabold text-[#ff0000]  hover:text-[#6b0101] lg:text-[16px]"
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
        const imageURL = URL.createObjectURL(event.target.files[0])
        console.log('here the url')
        console.log(imageURL)
        setImagePreview(imageURL)
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

  async function createUser(data: any) {
    const config = {
      method: 'post' as 'post',
      url: `${process.env.NEXT_PUBLIC_API_BACKEND_BASE_URL}/openmesh-experts/functions/createUser`,
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

  async function onSubmit(data: RegisterForm) {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match.')
      console.log('not right password')
      const element = document.getElementById('passwordId')
      element.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setIsLoading(true)

    let fileIPFSHash = ''
    if (selectedFiles.length > 0) {
      try {
        fileIPFSHash = await handleFileUploadIPFS()
      } catch (err) {
        toast.error('Something ocurred on the image upload')
        console.log(err)
        setIsLoading(false)
        return
      }
    }

    const { confirmPassword, ...rest } = data
    const finalData = {
      ...rest,
      profilePictureHash: fileIPFSHash,
    }
    try {
      const res = await createUser(finalData)
      console.log('a resposta:')
      console.log(res)
      console.log('setting the cookies')
      setCookie(null, 'userSessionToken', res.sessionToken)
      nookies.set(null, 'userSessionToken', res.sessionToken)
      toast.error('Account created succesfully')
      setIsLoading(false)
      setAccountCreated(true)
    } catch (err) {
      toast.error('something ocurred')
      console.log(err)
      setIsLoading(false)
    }
  }

  if (accountCreated) {
    return (
      <>
        <section className="border-b border-[#CFCFCF] px-32 pb-[53px] pt-[50px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-start">
              <div className="w-full px-4 lg:w-2/3">
                <div className="mb-1">
                  <h3 className="text-[15px] font-bold !leading-[150%] text-[#000000] lg:text-[24px]">
                    Create account
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12 mb-[0px] flex justify-center px-[20px] pt-[15px] text-center text-[11px]  font-medium !leading-[17px] text-[#000000] lg:mb-24 lg:px-[100px] lg:pt-[30px]  lg:text-[14px]">
          <div>
            <div className="text-[15px] font-bold !leading-[150%] text-[#000000] lg:text-[24px]">
              Account set up succesfully!
            </div>
            <div className="text-[12px] font-normal !leading-[150%] text-[#000000] lg:mt-[25px] lg:text-[16px]">
              A link was sent to your email to confirm the account creation.
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section className="border-b border-[#CFCFCF] px-32 pb-[53px] pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-start">
            <div className="w-full px-4 lg:w-2/3">
              <div className="mb-1">
                <h3 className="text-[15px] font-bold !leading-[150%] text-[#000000] lg:text-[24px]">
                  Create account
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 mb-[0px] px-[20px] pt-[15px] text-[11px]  font-medium !leading-[17px] text-[#000000] lg:mb-24 lg:px-[100px] lg:pt-[30px]  lg:text-[14px]">
        <div className="flex gap-x-[70px] lg:gap-x-[200px] lg:px-[150px]">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="">
              <div>
                <div className="">
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Name
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.name?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[45px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('name')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Email
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.email?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[45px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('email')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Company name
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.companyName?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[45px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('companyName')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Founding year
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.foundingYear?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[45px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('foundingYear')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Location
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.location?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[45px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('location')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Website
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.website?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[45px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type="text"
                      maxLength={100}
                      placeholder=""
                      {...register('website')}
                    />
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Calendly link
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.scheduleCalendlyLink?.message}
                      </p>
                    </span>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 top-[25px] self-center text-[17px] font-normal">
                        calendly.com/
                      </span>
                      <input
                        disabled={isLoading}
                        className="mt-[10px] h-[45px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white pl-[123px] pr-[10px] text-[17px] font-normal outline-0 lg:w-[500px]"
                        type="text"
                        maxLength={100}
                        placeholder=""
                        {...register('scheduleCalendlyLink')}
                      />
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Service tags
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.tags?.message}
                      </p>
                    </span>
                    <Controller
                      name="tags"
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
                              toast.error('Only 8 tags', {
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
                                  height: `${
                                    field.value.length >= 4 ? '100px' : '45px'
                                  }`,
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
                        {errors.description?.message}
                      </p>
                    </span>
                    <textarea
                      disabled={isLoading}
                      className="mt-[10px] h-[200px] w-[380px] rounded-[10px] border border-[#D4D4D4] bg-white py-[25px] px-[20px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      maxLength={100}
                      placeholder=""
                      {...register('description')}
                    />
                  </div>
                  <div id="passwordId" className="mt-[60px]">
                    <span className="flex flex-row">
                      Password
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.password?.message}
                      </p>
                    </span>
                    <div className="flex gap-x-[20px]">
                      <input
                        disabled={isLoading}
                        className="mt-[10px] h-[45px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                        type={passwordVisibility ? 'password' : 'text'}
                        maxLength={100}
                        placeholder=""
                        {...register('password')}
                      />
                      {passwordVisibility ? (
                        <div
                          onClick={() => setPasswordVisibility(false)}
                          className="flex cursor-pointer items-center text-center"
                        >
                          <EyeSlash className="cursor-pointer" />
                        </div>
                      ) : (
                        <div
                          onClick={() => setPasswordVisibility(true)}
                          className="flex cursor-pointer items-center text-center"
                        >
                          <Eye className="cursor-pointer" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <span className="flex flex-row">
                      Confirm password
                      <p className="ml-[8px] text-[10px] font-normal text-[#ff0000] ">
                        {errors.confirmPassword?.message}
                      </p>
                    </span>
                    <input
                      disabled={isLoading}
                      className="mt-[10px] h-[45px] w-[280px] rounded-[10px] border border-[#D4D4D4] bg-white px-[12px] text-[17px] font-normal outline-0 lg:w-[500px]"
                      type={passwordVisibility ? 'password' : 'text'}
                      maxLength={100}
                      placeholder=""
                      {...register('confirmPassword')}
                    />
                  </div>
                  <div>
                    <ReCAPTCHA
                      sitekey="6LffdR8oAAAAAESTHSx3DAcVcAcZeNALckZB82RY"
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            {isLoading ? (
              <div className="mt-[60px] flex pb-[10px] lg:pb-60">
                <button
                  disabled={true}
                  className=" mr-[15px] h-[50px] w-[250px] rounded-[10px] bg-[#0354EC] py-[12px] px-[25px] text-[12px] font-bold text-white  hover:bg-[#103881] lg:text-[16px]"
                  onClick={handleSubmit(onSubmit)}
                >
                  <span className="">Create account</span>
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
              <div className="mt-[60px] pb-60">
                <button
                  type="submit"
                  className=" h-[50px] w-[250px] rounded-[10px] bg-[#0354EC] py-[12px] px-[25px] text-[12px] font-bold text-white  hover:bg-[#103881] lg:text-[16px]"
                  onClick={handleSubmit(onSubmit)}
                >
                  <span className="">Create account</span>
                </button>
              </div>
            )}
          </form>
          <div className="flex h-fit">
            {selectedFiles.length === 0 ? (
              <label className="">
                <div className="">
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_ENVIRONMENT === 'PROD'
                        ? process.env.NEXT_PUBLIC_BASE_PATH
                        : ''
                    }/images/register/user-logo.svg`}
                    alt="image"
                    className={`mr-[25px] w-[107px] cursor-pointer`}
                  />

                  <input
                    type="file"
                    disabled={isLoading}
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </label>
            ) : (
              <FileList files={selectedFiles} onRemove={removeFile} />
            )}
            {selectedFiles.length === 0 ? (
              <p className="flex items-center">Upload Picture</p>
            ) : (
              <div> </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Register
