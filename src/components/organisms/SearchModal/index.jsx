import React, { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../../../../src/context/ContextProvider"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

export const SearchModal = () => {
    const [search, setSearch] = useState('')
    const { setOpenModal } = useContext(Context)


    const location = useLocation()

    const navigate = useNavigate()
    // console.log(store)

    const inputRef = useRef(null)
    const searchRef = useRef(null)

    const handleClick = (e) => {
        const target = e.target

        if (!(target === inputRef.current || target === searchRef.current)) {
            setOpenModal(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        const newUrl = new URLSearchParams(location.search)
        newUrl.set("searchStr", search)
        const searchStr = `?${newUrl.toString()}`

        navigate({ pathname: '/search', search: searchStr })

    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <form onSubmit={handleSubmit} onClick={handleClick} className='fixed flex pt-32 justify-center top-0 left-0 w-screen h-screen bg-black/50 '>
            <input
                ref={inputRef}
                type='text'
                placeholder='What do you want to watch'
                onChange={e => setSearch(e.target.value)}
                className='block w-4/5 h-10 rounded pl-4 pr-12 border-none outline-none focus:ring-2 ring-site-red '
            />
            <button ref={searchRef} className="text-site-red absolute right-[15%] translate-y-3">
            </button>
        </form>
    )
}