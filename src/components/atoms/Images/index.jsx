import React from 'react'

export const Images = ({ name, src, alt, className }) => {

    if (name === "image") {
        return <img src={src} alt={alt} className={className} />
    }
}
