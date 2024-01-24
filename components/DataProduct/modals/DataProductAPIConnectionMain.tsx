/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react'
import { AccountContext } from '@/contexts/AccountContext'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { EyeSlash, Eye } from 'phosphor-react'
import DataProductAPIConnection from './DataProductAPIConnectionModal'
// import GetEquinixAPIKey from './GetEquinixAPIKey'

export interface ModalI {
  dataProductId: string
}

const DataProductAPIConnectionMain = ({ dataProductId }: ModalI) => {
  const { user, setUser } = useContext(AccountContext)

  // Validation Cloud API connection
  if (dataProductId === 'bb0fcfde-dbb6-4b06-ac1d-86d69cf5d39b') {
    return (
      <div className="grid gap-y-[30px]">
        <DataProductAPIConnection
          connectionEndpoint="connectValidationCloudAPIEthereum"
          helpLink="https://docs.validationcloud.io/v1/about/node-api"
          title="Connect your Ethereum Validation Cloud key"
          userApiKey="validationCloudAPIKeyEthereum"
          imageSrc=""
        />
        <DataProductAPIConnection
          connectionEndpoint="connectValidationCloudAPIPolygon"
          helpLink="https://docs.validationcloud.io/v1/about/node-api"
          title="Connect your Polygon Validation Cloud key"
          userApiKey="validationCloudAPIKeyPolygon"
          imageSrc=""
        />
      </div>
    )
  }
  return <div></div>
}

export default DataProductAPIConnectionMain
