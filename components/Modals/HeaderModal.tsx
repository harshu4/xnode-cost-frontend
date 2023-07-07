'use client'

import * as Dialog from '@radix-ui/react-dialog'

import Link from 'next/link'
import { X } from 'phosphor-react'

interface HeaderModalProps {
  navigationItems: { label: string; href: string }[]
}

export function HeaderModal({ navigationItems }: HeaderModalProps) {
  return (
    <Dialog.Overlay className="fixed inset-0 z-20 bg-[#FFFFFF]/80">
      <Dialog.Content className="flex h-screen w-screen flex-col items-end overflow-auto px-8 pt-12 backdrop-blur-md">
        <Dialog.Trigger>
          <X size={24} className="text-[#000000]" />
        </Dialog.Trigger>
        <ul className="mt-16 flex flex-col items-end gap-6">
          {navigationItems.map((navItem) => {
            return (
              <Link href={navItem.href} key={navItem.label}>
                <li className="text-[1.25rem] font-medium text-[#000000]">
                  {navItem.label}
                </li>
              </Link>
            )
          })}
        </ul>
      </Dialog.Content>
    </Dialog.Overlay>
  )
}
