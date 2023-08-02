import React, { ReactNode } from "react"
import { Main } from "./main/Main"
import { Header } from "./header"

export interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <Main>
        {children}
      </Main>
    </>
  )
}