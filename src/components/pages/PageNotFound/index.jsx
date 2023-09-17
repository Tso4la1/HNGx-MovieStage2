import React from "react"
import { Layout } from "../../../layout/Layout"
import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return (
        <Layout >
            <div className='gap-y-4 w-full min-h-[540px] flex flex-col items-center justify-center'>
                <h1 className='text-3xl md:text-7xl text-site-red text-center mt-10 font-bold'>Page Not found</h1>
                <Link
                    to='/'
                    className='text-xl'
                >
                    Go back home
                </Link>
            </div>
        </Layout>
    )
}