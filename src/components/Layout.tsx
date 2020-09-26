import React, { ReactNode } from "react"
import Header from "./Header"

type LayoutProp = {
  children: ReactNode,
  headerTitle: string
}

export default function Layout({ children, headerTitle }: LayoutProp) {
  return (
    <div>
      <Header title={headerTitle}/>
      <div>
        {children}
      </div>
    </div>
  )
}
