import React, { useContext } from "react"
import { Logo, SignInProfile } from "../../Molecules";

import { Context } from "../../../context/ContextProvider"
import { SearchModal } from "../../../Components/Organisms/SearchModal/index"
import { Link } from "react-router-dom"



export const Navbar = () => {
    const { openModal, setOpenModal, scrollHeight } = useContext(Context)

    const handleFormClick = () => {
        console.log("form")
        setOpenModal(true)
    }
    return (
        <nav className={`${scrollHeight > 400 && 'bg-site-red/80'} transition-colors sticky z-10 top-0 w-full flex py-4 px-4 items-center gap-x-4 md:justify-between md:px-10 `}>
            {openModal && <SearchModal />}
            <Link to='/' className='flex items-center justify-center gap-x-2'>
                <Logo className='w-16' />
                <span className='hidden md:block text-white font-medium'>MovieBox</span>
            </Link>
            <div onClick={handleFormClick} className='ml-auto md:ml-0 flex items-center justify-center relative md:w-2/5 md:h-10'>

                <input
                    type='text'
                    placeholder="What do you want to watch"
                    className='border-2 rounded hidden md:block w-full h-full pl-4 pr-12 '
                />

                <button className="text-site-red md:absolute right-5">
                </button>
            </div>
            <div className='flex items-center justify-center'>
                <button className='block text-white font-medium'>Sign in</button>
                <SignInProfile className='w-20' />
            </div>
        </nav>
    )
}

















































