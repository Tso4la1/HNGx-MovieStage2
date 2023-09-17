import React from "react"
import { Navbar } from "../../src/Components/Organisms/NavBar"
import { FooterFiles } from "../../src/Components/Organisms/FooterFiles/index"
import { ContextProvider } from "../../src/context/ContextProvider"

export const Layout = ({ children }) => {
    return (
        <ContextProvider>
            <div className='w-screen max-w-[1980px] relative mx-auto'>
                <Navbar />
                <main className='w-full'>{children}</main>
                <FooterFiles />
            </div>
        </ContextProvider>
    )
}