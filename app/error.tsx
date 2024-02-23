'use client';
import React from 'react'

interface Props {
    error: Error;
    reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
    // console.log("error", error);
    
    return (
        <>
            <div>An Expected Error has Occurred.</div>
            <button className="btn btn-warning" onClick={() => reset}>Reset</button>
        </>
  )
}

export default ErrorPage
