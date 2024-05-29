import React, { useEffect, useState } from 'react'
import Welcome from './Welcome'

function Loader() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <>
            {
                loading ? (
                    <div
                        id="loader"
                        className="flex z-50 fixed top-0 left-0 w-full h-full bg-white animate-blurred-fade-in items-center justify-center"
                    >
                        <div className="max-w-lg">
                            <img className="w-28 h-auto" src="/love-heart.gif" />
                        </div>
                    </div>
                ) : <Welcome />
            }
        </>
    )
}

export default Loader