/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'

export interface UserProps {
  firstName: string
  lastName: string
  email: string
  companyName: string
  foundingYear: number
  location: string
  website: string
  tags: string[]
  description: string
  password: string
  confirmPassword: string
  profilePictureHash: string
  calendly: string
  sessionToken: string
  createdAt: string
  updatedAt: string
}

interface CreateContextProps {
  children: React.ReactNode
}

interface CreateUserContextProps {
  selectionSideNavBar: string
  setSelectionSideNavBar: (value: string) => void

  finalNodes: any
  setFinalNodes: (value: any) => void

  next: boolean
  setNext: (value: boolean) => void

  nextFromScratch: boolean
  setNextFromScratch: (value: boolean) => void

  reviewYourBuild: boolean
  setReviewYourBuild: (value: boolean) => void

  changeNodes: any
  setChangeNodes: (value: any) => void

  user: UserProps | undefined
  setUser: (user: UserProps | undefined) => void
}

export const AccountContext = createContext({} as CreateUserContextProps)

export default function AccountContextProvider({
  children,
}: CreateContextProps) {
  const [user, setUser] = useState<UserProps>()
  const [changeNodes, setChangeNodes] = useState()
  const [selectionSideNavBar, setSelectionSideNavBar] =
    useState<string>('Start here')
  const [finalNodes, setFinalNodes] = useState<any>()
  const [next, setNext] = useState<boolean>(false)
  const [nextFromScratch, setNextFromScratch] = useState<boolean>(false)
  const [reviewYourBuild, setReviewYourBuild] = useState<boolean>(false)

  return (
    <AccountContext.Provider
      value={{
        selectionSideNavBar,
        setSelectionSideNavBar,
        user,
        setUser,
        next,
        setNext,
        nextFromScratch,
        setNextFromScratch,
        reviewYourBuild,
        setReviewYourBuild,
        finalNodes,
        setFinalNodes,
        changeNodes,
        setChangeNodes,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}
