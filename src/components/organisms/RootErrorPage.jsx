import React from "react";
import { Link, useRouteError } from "react-router-dom";


export const RootErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>An error occured while rendering this page"</h1>
            <p>{`${error.statusText || error.message}`} </p>

            <Link to="/">Return To Homepage</Link>
        </div>
    )
}
