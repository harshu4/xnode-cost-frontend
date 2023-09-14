'use client'

import ChangePasswordRecovery from '@/components/ChangePasswordRecovery'
import ScrollUp from '@/components/Common/ScrollUp'
import { Inter } from '@next/font/google'

// eslint-disable-next-line no-unused-vars
const inter = Inter({ subsets: ['latin'] })

export default function UserPage({ params }) {
  console.log(params.id)
  return (
    <>
      <ScrollUp />
      <ChangePasswordRecovery id={params.id} />
    </>
  )
}
