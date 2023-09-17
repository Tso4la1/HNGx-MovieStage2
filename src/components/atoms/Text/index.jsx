import React from 'react';

export const Text = ({ type, className, text }) => {
    if (type === "p") {
        return <p type={type} className={className}>{text}</p>
    }

    if (type === "h1") {
        return <h1 type={type} className={className}>{text}</h1>
    }

    if (type === "h3") {
        return <h3 type={type} className={className}>{text}</h3>
    }

}
