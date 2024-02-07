'use client'

import ChatPage from '@/components/Chat'
import ScrollUp from '@/components/Common/ScrollUp'

// eslint-disable-next-line no-unused-vars

export default function Page({ params }) {
  return (
    <>
      <ScrollUp />
      <div className="max-h-[calc(100vh-10rem)] w-full">
        <ChatPage id={params.id} />
      </div>
    </>
  )
}
