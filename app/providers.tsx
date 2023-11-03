/* eslint-disable no-undef */
"use client";

import AccountContextProvider from "@/contexts/AccountContext";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AccountContextProvider>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </AccountContextProvider>

      <ToastContainer />
    </>
  );
}
