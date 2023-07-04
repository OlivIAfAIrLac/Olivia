'use client'
import React, { useState } from 'react'
import Image from "next/image";

const Home = () => {
    const [isLoged, setIsLoged] = useState(false)
    return (
        <div className="login-bg h-screen">
            {!isLoged && <div className="grid justify-end">
                <button className="mt-5 no-bg-btn outfit-font"
                    onClick={() => setIsLoged(true)}
                >
                    Ingresar
                </button>
            </div>}
            <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
                {!isLoged ? <Image
                    src="/Logo_OLIVIA.png"
                    alt="logo"
                    width={501}
                    height={156}
                />
                    : <h1>Login form!</h1>
                }
            </div>
        </div>
    );
}

export default Home;