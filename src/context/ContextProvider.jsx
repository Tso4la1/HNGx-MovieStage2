import React, { createContext, useEffect, useState } from "react"

export const Context = createContext(null)

export const ContextProvider = ({ children }) => {
    const [deviceWidth, setDeviceWidth] = useState(400)
    const [openModal, setOpenModal] = useState(false)
    const [scrollHeight, setScrollHeight] = useState(0)

    useEffect(() => {
        const width = window.innerWidth
        setDeviceWidth(width)
    }, [])

    const heightListener = (e) => {
        setScrollHeight(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', heightListener)

        return () => {
            window.removeEventListener('scroll', heightListener)
        }
    }, [])

    const store = {
        deviceWidth,
        openModal,
        setOpenModal,
        scrollHeight
    }

    return <Context.Provider value={store}>{children}</Context.Provider>
}
