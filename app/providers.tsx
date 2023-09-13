/* eslint-disable no-undef */
'use client'

import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        {children}
      </ThemeProvider>
      <ToastContainer />
    </>
  )
}
