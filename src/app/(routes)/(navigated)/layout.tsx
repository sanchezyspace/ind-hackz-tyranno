import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '../../Provider'
import { AuthProvider } from '../../AuthProvider'
import SideNavigationBar from '../../_components/layout/SideNavigationBar'
import { Flex } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Flex>
      <SideNavigationBar />
      {children}
    </Flex>
  )
}